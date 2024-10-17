"use client";

import ModalEscape from "@/components/modal/modal-keyboard-support";
import { useState } from "react";

const ModalEscapePage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleCloseModal = () => {
      setIsModalOpen(false);
    };  

  return (
    <div className="flex gap-6">
      {isModalOpen && (
        <ModalEscape onClose={handleCloseModal}>
          <h2 className="text-xl font-bold">Bienvenido</h2>
          <p>Este es un modal que aparece automáticamente al cargar la página y no se puede cerrar con Escape.</p>
        </ModalEscape>
      )}
    </div>);}

export default ModalEscapePage;
