import React from 'react';

const ConfirmDialog = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-dialog">
      <div class="modal-content">
        <h5 class="modal-title">Are you sure you want to remove this assignment?</h5>
        <div class="modal-footer">
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
