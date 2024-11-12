import React from 'react';
import './EquipmentItem.css';

const EquipmentItem = ({ item }) => {
  return (
    <div className="equipment-card">
      <img src={item.imageUrl} alt={item.name} className="equipment-image" />
      <div className="equipment-details">
        <h2>{item.name}</h2>
        <hr />
        <p><strong>Инвентарный номер:</strong> {item.inventoryNumber}</p>
        <p><strong>Серийный номер:</strong> {item.serialNumber}</p>
        <p><strong>Дата постановки на учет:</strong> {item.registrationDate}</p>
      </div>
    </div>
  );
};

export default EquipmentItem;
