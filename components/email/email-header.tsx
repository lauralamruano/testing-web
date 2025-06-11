import Image from 'next/image';
import React from 'react';

export const EmailHeader: React.FC = () => (
  <table width="100%" cellPadding={0} cellSpacing={0} role="presentation" className="bg-white">
    <tbody>
      <tr>
        <td className="px-4 py-6 flex justify-between items-center">
          {/* Logo */}
          <Image unoptimized
            src="https://image.news.barcelo.com/lib/fe5315707c610d747210/m/1/91b66c4b-dfd1-4dea-a32f-70545af2c996.png"
            alt="MyBarcelo"
            width={150}
            height={40}
            className="block"
          />

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4 text-sm font-bold">
            <a href="#" className="hover:underline">Código descuento</a>
            <a href="#" className="hover:underline">Mejor precio garantizado</a>
            <a href="#" className="hover:underline">Mi perfil</a>
            <a href="#" className="hover:underline">Nuestras marcas</a>
          </nav>

          {/* Mobile Hamburger */}
          <button className="md:hidden p-2" aria-label="Abrir menú">
            <span className="block w-6 h-0.5 bg-black mb-1" />
            <span className="block w-6 h-0.5 bg-black mb-1" />
            <span className="block w-6 h-0.5 bg-black" />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
);
