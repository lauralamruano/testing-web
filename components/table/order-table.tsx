"use client";

import { useState } from "react";
import { FaSortUp, FaSortDown, FaSort, FaExpand, FaCompress } from "react-icons/fa";

type DataRow = {
  name: string;
  address: string;
  age: number;
  description: string;
};

type SortOrder = {
  column: keyof DataRow | null;
  order: "ascending" | "descending" | "none";
};

const OrderTable = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>({
    column: null,
    order: "none",
  });

  const [data, setData] = useState<DataRow[]>([
    { 
      name: "Juan Pérez", 
      address: "Calle Falsa 123, Ciudad Imaginaria, País de Nunca Jamás", 
      age: 30,
      description: "Juan es un ingeniero de software con más de 10 años de experiencia en desarrollo web."
    },
    { 
      name: "Ana Gómez", 
      address: "Avenida Siempre Viva 742, Springfield, USA", 
      age: 25,
      description: "Ana es una diseñadora gráfica apasionada por el diseño de interfaces de usuario."
    },
    { 
      name: "Carlos López", 
      address: "Boulevard de los Sueños 456, Ciudad de los Ángeles, California", 
      age: 35,
      description: "Carlos es un arquitecto de soluciones con un enfoque en la nube y tecnologías emergentes."
    },
    { 
      name: "María Fernández", 
      address: "Calle de la Luna 789, Pueblo de las Estrellas, Galaxia Andrómeda", 
      age: 28,
      description: "María es una científica de datos que trabaja en proyectos de inteligencia artificial."
    },
  ]);

  const [expandedColumns, setExpandedColumns] = useState<Set<keyof DataRow>>(new Set());
  const [focusedButton, setFocusedButton] = useState<string | null>(null);

  const handleSort = (column: keyof DataRow) => {
    const newOrder =
      sortOrder.column === column && sortOrder.order === "ascending"
        ? "descending"
        : "ascending";

    const sortedData = [...data].sort((a, b) => {
      if (a[column] < b[column]) return newOrder === "ascending" ? -1 : 1;
      if (a[column] > b[column]) return newOrder === "ascending" ? 1 : -1;
      return 0;
    });

    setSortOrder({ column, order: newOrder });
    setData(sortedData);
  };

  const toggleColumnWidth = (column: keyof DataRow) => {
    setExpandedColumns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(column)) {
        newSet.delete(column);
      } else {
        newSet.add(column);
      }
      return newSet;
    });
  };

  return (
    <table className="min-w-full border-collapse bg-white">
      <thead className="bg-green-200">
        <tr>
          {(Object.keys(data[0]) as Array<keyof DataRow>).map((column) => (
            <th
              key={column}
              scope="col"
              aria-sort={sortOrder.column === column ? sortOrder.order : "none"}
              className={`border-b p-4 text-left ${expandedColumns.has(column) ? "w-auto" : "w-1/4"}`}
            >
              <div className="flex items-center relative">
                <span>{column.charAt(0).toUpperCase() + column.slice(1)}</span>
                <button
                  onClick={() => handleSort(column)}
                  onFocus={() => setFocusedButton(`sort-${column}`)}
                  onBlur={() => setFocusedButton(null)}
                  aria-label={`Ordenar por ${column.charAt(0).toUpperCase() + column.slice(1)} ${
                    sortOrder.order === "ascending" ? "descendente" : "ascendente"
                  }`}
                  className="ml-2"
                >
                  {sortOrder.column === column ? (
                    sortOrder.order === "ascending" ? (
                      <FaSortUp />
                    ) : (
                      <FaSortDown />
                    )
                  ) : (
                    <FaSort />
                  )}
                </button>
                {focusedButton === `sort-${column}` && (
                  <div className="absolute top-full mt-1 p-2 bg-gray-200 text-sm rounded shadow">
                    Ordenar por {column.charAt(0).toUpperCase() + column.slice(1)}
                  </div>
                )}
                <button
                  onClick={() => toggleColumnWidth(column)}
                  onFocus={() => setFocusedButton(`expand-${column}`)}
                  onBlur={() => setFocusedButton(null)}
                  aria-label={`Expandir/Contraer columna ${column.charAt(0).toUpperCase() + column.slice(1)}`}
                  className="ml-2"
                >
                  {expandedColumns.has(column) ? <FaCompress /> : <FaExpand />}
                </button>
                {focusedButton === `expand-${column}` && (
                  <div className="absolute top-full mt-1 p-2 bg-gray-200 text-sm rounded shadow">
                    Expandir/Contraer columna {column.charAt(0).toUpperCase() + column.slice(1)}
                  </div>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className={`border-b p-4 ${expandedColumns.has("name") ? "w-auto" : "w-1/4"}`}>{row.name}</td>
            <td className={`border-b p-4 ${expandedColumns.has("address") ? "w-auto" : "w-1/4"}`}>{row.address}</td>
            <td className={`border-b p-4 ${expandedColumns.has("age") ? "w-auto" : "w-1/4"}`}>{row.age}</td>
            <td className={`border-b p-4 ${expandedColumns.has("description") ? "w-auto" : "w-1/4"}`}>{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;