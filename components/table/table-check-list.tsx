import Link from "next/link";
import React from "react";

const CheckListTable = () => {
  return (
    <div className="table-container flex flex-col items-center overflow-x-auto mt-8 w-full">
      <table
        className="min-w-full border-collapse border border-gray-200  bg-green-dark"
        aria-describedby="accessibility-table-description"
      >
        <thead>
          <tr>
            <th
              scope="col"
              className="border border-gray-300 px-4 py-2 bg-green-200 text-green-dark"
            >
              Principle
            </th>
            <th
              scope="col"
              className="border border-gray-300 px-4 py-2 bg-green-200 text-green-dark"
            >
              Checkpoints
            </th>
          </tr>
        </thead>
        <tbody className="text-green-200">
          <tr className="">
            <th scope="row" className="border border-gray-300 px-4 py-2">
              Perceivable
            </th>
            <td className="border border-gray-300 px-4 py-2">
              <ul className="list-disc pl-5">
                <li>1.1.1 Non-text Content</li>
                <li>1.2.1 Audio-only and Video-only (Prerecorded)</li>
                <li>1.3.1 Info and Relationships</li>
                <li>1.4.1 Use of Color</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row" className="border border-gray-300 px-4 py-2">
              Operable
            </th>
            <td className="border border-gray-300 px-4 py-2">
              <ul className="list-disc pl-5">
                <li className="text-white text-decoration underline cursor-pointer">
                  {" "}
                  <Link href="/interactive-elements">2.1.1 Keyboard </Link>
                </li>
                <li className="text-white text-decoration underline cursor-pointer">
                  {" "}
                  <Link href="/focus-trap">2.1.2 No Keyboard Trap </Link>
                </li>
                <li className="text-white text-decoration underline cursor-pointer">
                  {" "}
                  <Link href="/timing-adjustable">
                    2.2.1 Timing Adjustable{" "}
                  </Link>
                </li>
                <li>2.4.1 Bypass Blocks</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row" className="border border-gray-300 px-4 py-2">
              Understandable
            </th>
            <td className="border border-gray-300 px-4 py-2">
              <ul className="list-disc pl-5">
                <li>3.1.1 Language of Page</li>
                <li>3.2.1 On Focus</li>
                <li>3.3.1 Error Identification</li>
                <li>3.3.2 Labels or Instructions</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row" className="border border-gray-300 px-4 py-2">
              Robust
            </th>
            <td className="border border-gray-300 px-4 py-2">
              <ul className="list-disc pl-5">
                <li>4.1.1 Parsing</li>
                <li>4.1.2 Name, Role, Value</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckListTable;
