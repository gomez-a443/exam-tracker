"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import Rules from "./Rules";
import { SectionContext } from "../store/section_context";

export default function Component() {
  const [openModal, setOpenModal] = useState(false);

  const context = useContext(SectionContext);
  useEffect(() => {
    setOpenModal(true);
  }, []);
  function onCloseModal() {
    setOpenModal(false);
  }
  const length = context.questions.length;

  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal show={openModal} size="md" popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white flex justify-center">
              Acknoledgement
            </h3>
            <div>
              <Rules length={length} />
            </div>
            <div className="w-full flex justify-center">
              <Button onClick={onCloseModal}>Start</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
