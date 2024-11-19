import { getUserImageSrc } from "@/lib/imageService";
import Image from "next/image";

interface AvatarProps {
  uri: string;
}

export function Avatar({ uri }: AvatarProps) {
  return (
    <Image
      src={getUserImageSrc(uri)}
      alt="Avatar"
      className="size-8 rounded-full border-[0.5px] border-[#D9D9D9]"
    />
  );
}
