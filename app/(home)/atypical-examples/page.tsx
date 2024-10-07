"use client";

import PatternCard from "@/components/card/card-pattern";
import ExportComponet from "@/components/export-component/export-component";

const ExportPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center flex-col">
      <ul className="flex gap-8">
      <li>
        <PatternCard
          title="Order Table"
          description="This example will show a table with sorting and resizing of columns using Keyboard."
          imageSrc="/images/order-table.png"
          link="./ordertable"
        />
        </li>
        <li>
        <PatternCard
          title="Upload Image"
          description="This example is a  file export component allows users to export files using keyboard navigation."
          imageSrc="/images/update-images.png"
          link=""
        />
        </li>
      </ul>
    </main>
  );
};

export default ExportPage;
