"use client";

import { waitlistEmail } from "@/app/actions";
import { waitlistSchema } from "@/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { FormError } from "../form/FormError";
import { SubmitButton } from "../ui/Buttons";
import { FormSuccess } from "../form/FormSuccess";
import { Input } from "../ui/Input";

export function CTA() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof waitlistSchema>>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof waitlistSchema>) => {
    setError("");
    setSuccess("");
    setIsPending(true);

    waitlistEmail(values)
      .then((data) => {
        if (data?.error) {
          form.reset();
          setError(data.error);
        }
        if (data?.success) {
          form.reset();
          setSuccess(data.success);
        }
      })
      .catch(() => setError("Something went wrong!"))
      .finally(() => setIsPending(false));
  };
  return (
    <div className="bg-background text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter">
          Be the First
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Don’t miss out! Join the HAZLO waitlist to connect, compete, and
          inspire. Be part of a sports community built to elevate your active
          lifestyle.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-row gap-4 items-center mt-5 max-w-3xl w-full mx-auto"
          >
            <div className="flex-grow">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="example@example.com"
                        type="email"
                        disabled={isPending}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <SubmitButton
              isPending={isPending}
              text={"Join"}
              size="lg"
              className="w-fit"
            />
          </form>
        </Form>
        <div className="mt-3">
          <FormError message={error} />
          <FormSuccess message={success} />
        </div>
      </div>
    </div>
  );
}