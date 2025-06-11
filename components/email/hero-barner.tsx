import Image from 'next/image';
import React from 'react';

export const HeroBanner: React.FC = () => (
  <table width="100%" cellPadding={0} cellSpacing={0} role="presentation">
    <tbody>
      <tr>
        <td>
          <Image unoptimized
            src="/hero-travel.jpg"
            alt="Travel Hero"
            width={700}
            height={300}
            className="w-full h-auto"
          />
        </td>
      </tr>
    </tbody>
  </table>
);