import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { buttonVariants } from "../ui/button";

const pastMonth = new Date();

const CalendarComponent = () => {
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 10),
  };

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      defaultMonth={pastMonth}
      className="border rounded-md"
      classNames={{
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-10 w-10 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        head_row: "flex justify-between px-2 my-2 ",
        cell: "w-[3rem] h-[3rem] text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "w-[3rem] h-[3rem] p-0 font-normal aria-selected:opacity-100"
        ),
        row: "flex gap-6 w-full mt-2",
      }}
    />
  );
};

export default CalendarComponent;
