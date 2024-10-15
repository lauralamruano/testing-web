"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

type DataRow = {
  name: string;
  address: string;
  age: number;
  description: string;
};

const SizeTable = () => {
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

  const [columnWidths, setColumnWidths] = useState<Record<keyof DataRow, number>>({
    name: 25,
    address: 25,
    age: 25,
    description: 25,
  });

  const [focusedButton, setFocusedButton] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<Record<keyof DataRow, 'asc' | 'desc' | null>>({
    name: null,
    address: null,
    age: null,
    description: null,
  });

  const adjustColumnWidth = (column: keyof DataRow, increase: boolean) => {
    setColumnWidths((prev) => {
      const newWidth = increase ? prev[column] + 5 : prev[column] - 5;
      return {
        ...prev,
        [column]: Math.max(10, Math.min(newWidth, 100)), // Ensure width is between 10% and 100%
      };
    });
  };

  const sortData = (column: keyof DataRow) => {
    const newOrder = sortOrder[column] === 'asc' ? 'desc' : 'asc';
    setSortOrder({ ...sortOrder, [column]: newOrder });

    const sortedData = [...data].sort((a, b) => {
      if (a[column] < b[column]) return newOrder === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return newOrder === 'asc' ? 1 : -1;
      return 0;
    });

    setData(sortedData);
  };

  return (
    <table className="min-w-full border-collapse bg-white">
      <thead className="bg-green-200">
        <tr>
          {(Object.keys(data[0]) as Array<keyof DataRow>).map((column) => (
            <th
              key={column}
              scope="col"
              className="border-b p-4 text-left"
              style={{ width: `${columnWidths[column]}%`, outline: '1px solid black'}}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center relative">
                  <button
                    onClick={() => sortData(column)}
                    onFocus={() => setFocusedButton(`Ordenar por ${column.charAt(0).toUpperCase() + column.slice(1)} - ${sortOrder[column] === 'asc' ? 'Ascendente' : 'Descendente'}`)}
                    onBlur={() => setFocusedButton(null)}
                    aria-label={`Ordenar por ${column.charAt(0).toUpperCase() + column.slice(1)}`}
                    className="mr-2"
                  >
                    {sortOrder[column] === 'asc' ? <FaSortUp /> : sortOrder[column] === 'desc' ? <FaSortDown /> : <FaSort />}
                    {focusedButton === `Ordenar por ${column.charAt(0).toUpperCase() + column.slice(1)} - ${sortOrder[column] === 'asc' ? 'Ascendente' : 'Descendente'}` && (
                      <div className="absolute top-full mt-1 p-2 bg-gray-200 text-sm rounded shadow">
                        {focusedButton}
                      </div>
                    )}
                  </button>
                </div>
                <span className="mr-2">{column.charAt(0).toUpperCase() + column.slice(1)}</span>
                <div className="flex items-center relative">
                  <button
                    onClick={() => adjustColumnWidth(column, false)}
                    onFocus={() => setFocusedButton(`Contraer columna ${column.charAt(0).toUpperCase() + column.slice(1)} - ${columnWidths[column]}%`)}
                    onBlur={() => setFocusedButton(null)}
                    aria-label={`Contraer columna ${column.charAt(0).toUpperCase() + column.slice(1)}`}
                    className="mr-1"
                  >
                    <FaArrowLeft />
                    {focusedButton === `Contraer columna ${column.charAt(0).toUpperCase() + column.slice(1)} - ${columnWidths[column]}%` && (
                      <div className="absolute top-full mt-1 p-2 bg-gray-200 text-sm rounded shadow">
                        {focusedButton}
                      </div>
                    )}
                  </button>
                  <button
                    onClick={() => adjustColumnWidth(column, true)}
                    onFocus={() => setFocusedButton(`Expandir columna ${column.charAt(0).toUpperCase() + column.slice(1)} - ${columnWidths[column]}%`)}
                    onBlur={() => setFocusedButton(null)}
                    aria-label={`Expandir columna ${column.charAt(0).toUpperCase() + column.slice(1)}`}
                  >
                    <FaArrowRight />
                    {focusedButton === `Expandir columna ${column.charAt(0).toUpperCase() + column.slice(1)} - ${columnWidths[column]}%` && (
                      <div className="absolute top-full mt-1 p-2 bg-gray-200 text-sm rounded shadow">
                        {focusedButton}
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="border-b p-4" style={{ width: `${columnWidths.name}%` }}>{row.name}</td>
            <td className="border-b p-4" style={{ width: `${columnWidths.address}%` }}>{row.address}</td>
            <td className="border-b p-4" style={{ width: `${columnWidths.age}%` }}>{row.age}</td>
            <td className="border-b p-4" style={{ width: `${columnWidths.description}%` }}>{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default SizeTable;