import { eachDayOfInterval, endOfMonth, endOfWeek, isSameDay, startOfMonth, startOfToday, startOfWeek } from "date-fns";
import { NavArrowLeft, NavArrowRight } from "iconoir-react";
import { useState } from "react";
import { DayBlock } from "./DayBlock";

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const Calendar: React.FC = () => {
    const today = new Date();

    const [selectedDate, setSelectedDate] = useState<Date | null>(today); 
    
    const newDays = eachDayOfInterval({
        start: startOfWeek(startOfMonth(today)) ,
        end: endOfWeek(endOfMonth(today))
    });

    console.log(newDays);
    return (
        <>
            <div className=" flex flex-row items-center mb-3">
                <h1 className="text-2xl font-medium">
                    {today.toLocaleDateString("default", { month: "long", year: "numeric" })}
                </h1>
                <div className="flex flex-row items-center ml-4 gap-1 text-sm">
                    <NavArrowLeft />
                    <div className="p-2">
                        <div className={"rounded-full bg-current w-1 h-1"} />
                    </div>
                    <NavArrowRight />
                </div>
            </div>
            <div className="grid grid-cols-7">
                {weekdays.map((day, index) => (
                    <div key={index} className="flex justify-end py-1 px-3">
                        {day}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-7 flex-1 border-l border-t border-whiteAlpha-200">
                {newDays.map((date, i) => (
                    <DayBlock
                        key={i}
                        today={today}
                        date={date}
                        isSelected={selectedDate ? isSameDay(date, selectedDate) : false}
                        eventsCount={3}
                        available
                    />
                ))}
            </div>
        </>
    )
}