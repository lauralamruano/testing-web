import React from "react";
import PatternCard from "@/components/card/card-pattern";

const AtypicalExamples: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center flex-col">
      <h1 className="text-4xl font-bold mt-4 text-green-dark">
        Accessible Atypical Examples
      </h1>
      <section className="flex items-center bg-green-dark-50 p-12">
        <img className="w-6/12" src="/images/women-mobile.png" alt="" />
        <p className="text-lg mr-8 text-green-dark font-bold">
          The section titled "Accessible Atypical Examples" is designed to
          showcase unique and creative implementations of accessibility that go
          beyond conventional practices. This section highlights how
          accessibility principles can be applied innovatively to address
          specific challenges in web design and development. Through detailed
          examples, users can explore accessible solutions that not only comply
          with WCAG guidelines but also enhance the user experience in
          unexpected and effective ways.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center pb-8 bg-green-dark w-full">
        <h2 className="text-lg font-bold mt-4 text-green-200 mb-6">
          Accessibility Examples
        </h2>
        <ul className="flex gap-8">
          <li>
            <PatternCard
              title="Order Table"
              description="This example will show a table with sorting and resizing of columns using Keyboard."
              imageSrc="/images/order-table.png"
              link={"/atypical-examples/ordertable"}
            />
          </li>
          <li>
            <PatternCard
              title="Upload Image"
              description="This example is a  file export component allows users to export files using keyboard navigation."
              imageSrc="/images/update-images.png"
              link= {"/atypical-examples/upload-image"}
            />
          </li>
          <li>
            <PatternCard title={"Size Table"} description={"This example will show a table with sorting and resizing of columns using Keyboard."} link={"/atypical-examples/size-table"} imageSrc={"/images/order-table.png"}/>
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center justify-center pb-4 w-full">
      <h2 className="text-lg font-bold mt-4 text-green-200 mb-6">
          Accessibility Issues
        </h2>
      </section>
    </main>
  );
};

export default AtypicalExamples;
