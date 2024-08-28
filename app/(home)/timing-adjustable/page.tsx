"use client";
import TimeLimitForm from "@/components/Timing/timing-adjustable";
import TimeAlertForm from "@/components/Timing/timing-alert";
import React from "react";

const CheckPoints = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center"> 
      <header>
        {" "}
        <h1 className="text-4xl font-bold mb-6 p-6">Timing Adjustable</h1>
      </header>
      <main className=" flex flex-wrap gap-6 p-24">
        <TimeLimitForm />
        <TimeAlertForm />
      </main>
    </div>
  );
};

export default CheckPoints;
