import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import EquipmentItem from './EquipmentItem';
import './EquipmentItem.css';

const EquipmentPage = ({ equipmentData }) => {
  const { inventoryNumber } = useParams();
  const equipmentItem = equipmentData.find(
    (item) => item.inventoryNumber === inventoryNumber
  );

  useEffect(() => {
    if (equipmentItem) {
      const savedItems = JSON.parse(localStorage.getItem('viewedItems')) || [];
      if (!savedItems.includes(inventoryNumber)) {
        savedItems.push(inventoryNumber);
        localStorage.setItem('viewedItems', JSON.stringify(savedItems));
      }
    }
  }, [inventoryNumber, equipmentItem]);

  if (!equipmentItem) {
    return <h2>Карточка не найдена</h2>;
  }

  return (
    <div>
      <EquipmentItem item={equipmentItem} />
      <Link to="/">
        <button className="back-button">Вернуться на главную</button>
      </Link>
    </div>
  );
};

export default EquipmentPage;
