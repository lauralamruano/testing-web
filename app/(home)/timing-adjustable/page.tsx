"use client";
import TimeLimitForm from "@/components/Timing/timing-adjustable";
import TimeAlertForm from "@/components/Timing/timing-alert";
import React from "react";

const CheckPoints = () => {

    return (
      <main className="min-h-screen flex items-center justify-center flex-wrap gap-6 p-24">
        <TimeLimitForm/>
        <TimeAlertForm/>
      </main>
    );
  };
  
  export default CheckPoints;
  