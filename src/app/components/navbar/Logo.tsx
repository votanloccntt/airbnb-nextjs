"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => {
        router.push("/");
      }}
      height="100"
      width="100"
      alt="Logo"
      className="hidden md:block cursor-pointer"
      src="/logo.png"
    />
  );
};

export default Logo;
