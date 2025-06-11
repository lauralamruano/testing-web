import React from 'react';

export const EmailFooter: React.FC = () => (
  <table width="100%" cellPadding={0} cellSpacing={0} role="presentation" className="bg-gray-800 text-white">
    <tbody>
      <tr>
        <td className="px-4 py-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Barceló. Todos los derechos reservados.</p>
          <p>
            <a href="#" className="underline">Darte de baja</a> |{' '}
            <a href="#" className="underline">Política de privacidad</a>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
);