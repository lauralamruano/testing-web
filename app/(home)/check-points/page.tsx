import CheckListTable from "@/components/table/table-check-list";
import Link from "next/link";
import React from "react";

const CheckPoints = () => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-centerp-24">
      <h1 id="accessibility-table-description"
          className="text-4xl font-bold mb-4 text-green-dark mt-8">Accessibility Checkpoints</h1>
      <section className="flex items-center bg-green-dark-50 p-8">
        <p className="text-lg ml-8 text-green-dark font-bold ">
          The section titled "Accessibility Checkpoints" is designed to provide
          users with a clear and concise understanding of accessibility success
          criteria according to the WCAG guidelines. This section includes a
          table that lists each checkpoint, along with practical examples
          demonstrating how these criteria can be implemented in web
          applications.
        </p>
        <img className="w-6/12" src="/images/women-mobile.png" alt="" />
      </section>
      <CheckListTable/>
    </main>
  );
};

export default CheckPoints;
