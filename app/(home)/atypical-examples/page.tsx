'use client'

import ExportComponet from "@/components/export-component/export-component";

const ExportPage = () => {

    return (
      <main className="flex min-h-screen items-center justify-center flex-col">
        <ExportComponet/>
        <div className="mt-6">
        <button className="bg-green-900 text-white font-bold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
          Button 1
        </button>
        <button className="bg-green-900 text-white font-bold py-2 px-4 rounded ml-4 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
          Button 2
        </button>
      </div>
      </main>
    );
  };
  
  export default ExportPage;
  