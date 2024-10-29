"use client";
import AccordionTrapTab from "@/components/accordion/accordion-trap-only-tab";
import ComboboxTrap from "@/components/combobox/combobox-trap";

const OtherTrapPage: React.FC = () => {
  return (<div><section>
    <p></p>
    <div className="flex items-start justify-center gap-8">
      <ComboboxTrap />
      <div>
        <h2 className="text-2xl font-semibold mb-4">Accordion</h2>
        {/* <AccordionTrap title={"Accordion Trap (Only Tab)"} content={""} /> */}
        <AccordionTrapTab
          title={"Accordion Trap (Only Tab)"}
          content={""}
        />
      </div>
    </div>
  </section>
  <section className="flex p-8 gap-8">
    <section>
      <h1 className="text-xl font-bold text-green-100 p-4">
        Lista de Enlaces
      </h1>
      <ul className="gap-4">
        <li className="mb-2">
          <a
            id="link-aria"
            href="https://www.w3.org/WAI/ARIA"
            className="text-green-200 underline font-bold cursor-pointer"
          >
            Enlace sobre ARIA
          </a>
        </li>
        <li className="mb-2">
          <a
            id="link-aria-apg"
            href="https://www.w3.org/WAI/ARIA/apg"
            className="text-green-200 underline font-bold cursor-pointer"
          >
            Enlace sobre ARIA APG
          </a>
        </li>
        <li className="mb-2">
          <a
            id="link-aria-patterns"
            href="https://www.w3.org/WAI/ARIA/apg/patterns"
            className="text-green-200 underline font-bold cursor-pointer"
          >
            Enlace sobre Patrones ARIA
          </a>
        </li>
      </ul>
    </section>
    <section>
      <h1 className="text-xl font-bold text-green-100 p-4">
        Lista de Botones
      </h1>
      <ul>
        <li className="mb-2">
          <button
            id="button-tabpanel"
            onClick={() =>
              (window.location.href =
                "https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/")
            }
            className="text-black bg-green-200 hover:bg-green-300 font-bold py-2 px-4 rounded"
          >
            Botón sobre Paneles de Pestañas
          </button>
        </li>
        <li className="mb-2">
          <button
            id="button-tabs"
            onClick={() =>
              (window.location.href =
                "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/")
            }
            className="text-black bg-green-200 hover:bg-green-300 font-bold py-2 px-4 rounded"
          >
            Botón sobre Pestañas
          </button>
        </li>
      </ul>
    </section>
  </section></div>);
};
 export default OtherTrapPage;