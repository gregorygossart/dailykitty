"use client";

import { Button } from "@nextui-org/react";
import { LogIn } from "lucide-react";

const LoginButton = () => {
  return (
    <Button color="primary" className="flex items-center gap-3" isDisabled>
      <LogIn size={16} />
      <span>Log in</span>
    </Button>
  );
};

export default LoginButton;
