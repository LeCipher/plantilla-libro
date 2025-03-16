import React from 'react';
import '../assets/styles/custom.css'; // Asegúrate de que la ruta sea correcta

const MyButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-primary">
      {label}
    </button>
  );
};

export default MyButton;
