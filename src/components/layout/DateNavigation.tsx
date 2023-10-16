"use client";

import React from "react";
import { CalendarSearch, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@nextui-org/react";
import { isToday, isYesterday } from "@lib/Date";

const DateNavigation = () => {
  const now = new Date();
  const dateIsToday = isToday(now);
  const dateIsYesterday = isYesterday(now);

  return (
    <div className="py-2 flex items-center justify-between">
      <Button color="primary" variant="light">
        <ChevronLeft />
        <span>Previous</span>
      </Button>
      <div className="flex items-center gap-x-4">
        <Button color="primary" isDisabled>
          {dateIsToday
            ? "Today"
            : dateIsYesterday
            ? "Yesterday"
            : now.toDateString()}
        </Button>
        <Button color="primary" variant="light" isIconOnly>
          <CalendarSearch size={24} />
        </Button>
      </div>
      <Button color="primary" variant="light" isDisabled={dateIsToday}>
        Next
        <ChevronRight />
      </Button>
    </div>
  );
};

export default DateNavigation;
