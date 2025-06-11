import Image from 'next/image';
import React from 'react';

export const PromotionBlock: React.FC = () => (
  <table width="100%" cellPadding={0} cellSpacing={0} role="presentation" className="bg-white">
    <tbody>
      <tr>
        <td className="px-4 py-6 text-center">
          <h1 className="text-2xl font-bold mb-4">A veces, solo necesitamos un empujón</h1>
          <p className="text-gray-700 mb-6">
            Si sigues pensando en vacaciones, los <strong>Happy Days</strong> siguen activos y puedes conseguir hasta un <strong>-50% de descuento</strong>.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700"
          >
            Reservar hotel
          </a>
        </td>
      </tr>
    </tbody>
  </table>
);
