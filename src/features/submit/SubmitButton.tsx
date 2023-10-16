"use client";

import { Button, Tooltip } from "@nextui-org/react";
import { ImagePlus } from "lucide-react";

const LoginButton = () => {
  return (
    <Tooltip
      color="secondary"
      content="You need to log in to submit a picture"
      showArrow
    >
      <div className="h-10">
        <Button color="primary" variant="light" isIconOnly isDisabled>
          <ImagePlus size={24} />
        </Button>
      </div>
    </Tooltip>
  );
};

export default LoginButton;
