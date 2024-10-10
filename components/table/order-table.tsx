"use client";

import { useState } from "react";
import { FaSortUp, FaSortDown, FaSort } from "react-icons/fa";

type DataRow = {
  name: string;
  address: string;
  age: number;
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
    { name: "Juan Pérez", address: "Calle Falsa 123", age: 30 },
    { name: "Ana Gómez", address: "Avenida Siempre Viva 742", age: 25 },
    { name: "Carlos López", address: "Boulevard de los Sueños 456", age: 35 },
    { name: "María Fernández", address: "Calle de la Luna 789", age: 28 },
  ]);

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

  return (
    <table className="min-w-full border-collapse bg-white">
      <thead>
        <tr>
          <th
            scope="col"
            aria-sort={sortOrder.column === "name" ? sortOrder.order : "none"}
            className="border-b p-4 text-left"
          >
            <div className="flex items-center">
              <span>Nombre</span>
              <button
                onClick={() => handleSort("name")}
                aria-label={`Ordenar por Nombre ${
                  sortOrder.order === "ascending" ? "descendente" : "ascendente"
                }`}
                className="ml-2"
              >
                {sortOrder.column === "name" ? (
                  sortOrder.order === "ascending" ? (
                    <FaSortUp />
                  ) : (
                    <FaSortDown />
                  )
                ) : (
                  <FaSort />
                )}
              </button>
            </div>
          </th>
          <th
            scope="col"
            aria-sort={
              sortOrder.column === "address" ? sortOrder.order : "none"
            }
            className="border-b p-4 text-left"
          >
            <div className="flex items-center">
              <span>Dirección</span>
              <button
                onClick={() => handleSort("address")}
                aria-label={`Ordenar por Dirección ${
                  sortOrder.order === "ascending" ? "descendente" : "ascendente"
                }`}
                className="ml-2"
              >
                {sortOrder.column === "address" ? (
                  sortOrder.order === "ascending" ? (
                    <FaSortUp />
                  ) : (
                    <FaSortDown />
                  )
                ) : (
                  <FaSort />
                )}
              </button>
            </div>
          </th>
          <th
            scope="col"
            aria-sort={sortOrder.column === "age" ? sortOrder.order : "none"}
            className="border-b p-4 text-left"
          >
            <div className="flex items-center">
              <span>Edad</span>
              <button
                onClick={() => handleSort("age")}
                aria-label={`Ordenar por Edad ${
                  sortOrder.order === "ascending" ? "descendente" : "ascendente"
                }`}
                className="ml-2"
              >
                {sortOrder.column === "age" ? (
                  sortOrder.order === "ascending" ? (
                    <FaSortUp />
                  ) : (
                    <FaSortDown />
                  )
                ) : (
                  <FaSort />
                )}
              </button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="border-b p-4">{row.name}</td>
            <td className="border-b p-4">{row.address}</td>
            <td className="border-b p-4">{row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default OrderTable;
