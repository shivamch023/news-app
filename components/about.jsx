import React, { useState } from 'react';
import Modal from './Modal';
const about = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
  
    return (
      <div>
        <button className='text-white border py-1 px-4 rounded hover:bg-blue-600' onClick={openModal}>About</button>
        <Modal isOpen={isOpen} onClose={closeModal} />
      </div>
    );
}

export default about
