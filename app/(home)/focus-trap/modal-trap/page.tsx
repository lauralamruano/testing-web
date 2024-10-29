"use client";

import ModalTrap from "@/components/modal/modal-trap";
import { useEffect, useState } from "react";

const ModalTrapPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Open the modal automatically when the page loads
    setModalOpen(true);
  }, []);

  return (
    <div className="bg-red">
      <ModalTrap isOpen={isModalOpen} />
    </div>
  );
};

export default ModalTrapPage;
