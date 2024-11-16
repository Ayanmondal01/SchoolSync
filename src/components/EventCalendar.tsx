"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


const events = [//temp data for calendar
    {
      id: 1,
      title: "Parent-Teacher Meeting",
      time: "10:00 AM - 12:00 PM",
      description: "Monthly meeting to discuss student progress and concerns.",
    },
    {
      id: 2,
      title: "Math Olympiad Workshop",
      time: "1:00 PM - 3:00 PM",
      description: "Preparation workshop for students participating in the Math Olympiad.",
    },
    {
      id: 3,
      title: "Science Exhibition",
      time: "9:00 AM - 4:00 PM",
      description: "Annual event showcasing student science projects and experiments.",
    },
    {
      id: 4,
      title: "Staff Meeting",
      time: "4:30 PM - 5:30 PM",
      description: "Discussion on upcoming events and administrative updates.",
    },
    {
      id: 5,
      title: "Sports Day Rehearsal",
      time: "8:00 AM - 10:00 AM",
      description: "Practice session for students participating in Sports Day events.",
    },
  ];
  

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;