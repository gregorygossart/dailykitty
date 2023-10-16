import React from "react";
import Link from "next/link";
import Image from "next/image";
import LoginButton from "@components/auth/LoginButton";
import SubmitButton from "../../features/submit/SubmitButton";

const Header = () => {
  return (
    <nav className="py-2 flex items-center justify-between">
      <div className="flex items-center gap-x-12">
        <Link href="/" className="rounded-full">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </Link>
      </div>

      <div className="flex items-center gap-x-6">
        <SubmitButton />
        <LoginButton />
      </div>
    </nav>
  );
};

export default Header;
