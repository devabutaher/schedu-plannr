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
    <div className="inline-block p-2 rounded-2xl bg-secondary max-w-[55rem] max-[1290px]:mx-auto">
      <div className="grid grid-cols-1 gap-4 border-2 md:grid-cols-3 rounded-2xl border-primary">
        <div className="p-6 space-y-4 max-md:order-1">
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

        <div className="col-span-2 p-2 pb-4 border-b-2 md:border-b-none md:border-l-2 border-l-none border-primary/20">
          <Calendar
            mode="range"
            selected={range}
            onSelect={setRange}
            defaultMonth={pastMonth}
            className="p-4 border-2 lg:p-6 rounded-2xl bg-background "
            classNames={{
              months:
                "w-full h-full min-w-[16rem] min-[1290px]:min-h-[22rem] space-y-4",
              table: "w-full border-collapse",
              nav_button: cn(
                buttonVariants({ variant: "outline" }),
                "w-6 h-6 lg:h-8 lg:w-8 bg-transparent p-0 opacity-50 hover:opacity-100"
              ),
              head_row:
                "grid grid-cols-7 place-items-center gap-4 lg:gap-6 mt-2",
              row: "grid grid-cols-7 place-items-center gap-4 lg:gap-6 mt-2",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
