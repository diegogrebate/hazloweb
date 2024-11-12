"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { FormError } from "@/components/form/FormError";
import { useEffect, useState } from "react";
import { getCoachesNumber } from "@/lib/chartFunctions";
import Loading from "@/components/charts/Loader";

export function NumberCoaches() {
  const [data, setData] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string | undefined>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCoachesNumber();
      if (res.success) {
        setData(res.data);
      } else {
        setError(res.msg);
      }
    };

    fetchData();
  }, []);

  return (
    <Card className="bg-[linear-gradient(to_right,rgba(255,189,85,0.6),rgba(255,112,9,0.6))] h-full">
      <CardHeader>
        <CardTitle>Hazlo Coaches</CardTitle>
        <CardDescription>Total Amount of Coaches</CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className="text-5xl text-white font-bold flex items-center justify-center h-32">
          {data !== undefined ? data : <Loading />}
        </h2>
      </CardContent>
      <CardFooter>{error && <FormError message={error} />}</CardFooter>
    </Card>
  );
}
