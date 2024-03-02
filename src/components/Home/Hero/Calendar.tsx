import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { addDays } from "date-fns";
import { CalendarFold, Clock, Info, MapPin } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { buttonVariants } from "../../ui/button";

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const pastMonth = new Date(currentDate.getFullYear(), currentMonth, 10);

const CalendarComponent = () => {
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 10),
  };

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  return (
    <div className="right-0 inline-block p-2 lg:absolute -top-10 rounded-2xl bg-secondary">
      <div className="flex flex-col-reverse gap-4 border-2 lg:divide-x-2 lg:flex-row divide-primary/20 rounded-2xl border-primary lg:min-h-[30rem]">
        <div className="lg:w-[20rem] space-y-4 p-6 border-t-2 border-primary/20 lg:border-none">
          {/* user */}
          <div className="space-y-1">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="user" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1>Mr. CN</h1>
            <h1 className="text-lg font-medium">Weekly Team Meeting</h1>
          </div>

          <div className="flex gap-2">
            <Info className="mt-0.5 size-4" />
            <span className="text-sm line-clamp-4 w-[15rem]">
              This meeting is intended for discussing project updates,
              addressing any roadblocks, and setting priorities for the upcoming
              week.
            </span>
          </div>

          <div className="flex gap-2">
            <CalendarFold className="mt-0.5 size-4" />
            <span className="text-sm w-[15rem]">
              {currentDate.toLocaleDateString()}
            </span>
          </div>

          <div className="flex gap-2">
            <Clock className="mt-0.5 size-4" />
            <span className="text-sm w-[15rem]">30 min</span>
          </div>

          <div className="flex gap-2">
            <MapPin className="mt-0.5 size-4" />
            <span className="text-sm w-[15rem]">Google Meet</span>
          </div>
        </div>

        <div className="p-2">
          <Calendar
            mode="range"
            selected={range}
            onSelect={setRange}
            defaultMonth={pastMonth}
            className="p-4 border-2 lg:p-6 rounded-2xl bg-background"
            classNames={{
              nav_button: cn(
                buttonVariants({ variant: "outline" }),
                "w-8 h-8 lg:h-10 lg:w-10 bg-transparent p-0 opacity-50 hover:opacity-100"
              ),
              head_row: "flex justify-between lg:px-2 my-2 ",
              cell: "w-[1.5rem] h-[1.5rem] lg:w-[3rem] lg:h-[3rem] text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: cn(
                buttonVariants({ variant: "ghost" }),
                "w-[1.5rem] h-[1.5rem] lg:w-[3rem] lg:h-[3rem] p-0 font-normal aria-selected:opacity-100"
              ),
              row: "flex gap-4 lg:gap-6 w-full mt-2",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
