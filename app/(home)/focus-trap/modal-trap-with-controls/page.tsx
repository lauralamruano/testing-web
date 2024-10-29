"use client";

import ModalTrapWithControls from "@/components/modal/modal-kbtrap-with-controls";
import { useEffect, useState } from "react";

const ModalTrapControlsPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Open the modal automatically when the page loads
    setModalOpen(true);
  }, []);

  return (
    <div className="bg-red">
      <ModalTrapWithControls isOpen={isModalOpen} />
    </div>
  );
};

export default ModalTrapControlsPage;