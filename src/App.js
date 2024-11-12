import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EquipmentPage from './EquipmentPage';
import EquipmentItem from './EquipmentItem';
import './App.css';

// Массив с данными оборудования
const equipmentData = [
  {
    inventoryNumber: '001',
    serialNumber: 'MOMD9406277',
    registrationDate: '11.11.2024',
    name: 'Flashforge Adventurer 5М Pro',
    imageUrl: '/Flashforge.jpg',
  },
  {
    inventoryNumber: '002',
    serialNumber: 'MOMD9402329',
    registrationDate: '11.11.2024',
    name: 'Flashforge Adventurer 5М Pro',
    imageUrl: '/Flashforge.jpg',
  },
  {
    inventoryNumber: '003',
    serialNumber: 'FIBMS 1 TX02021X0942',
    registrationDate: '11.11.2024',
    name: 'FlyingBear S1',
    imageUrl: '/FlyingBear_S1.jpg',
  },
  {
    inventoryNumber: '004',
    serialNumber: 'FIBMS 1 TX02021X0855',
    registrationDate: '11.11.2024',
    name: 'FlyingBear S1',
    imageUrl: '/FlyingBear_S1.jpg',
  },
  {
    inventoryNumber: '005',
    serialNumber: 'FIBMS 1 TX02021X0919',
    registrationDate: '11.11.2024',
    name: 'FlyingBear S1',
    imageUrl: '/FlyingBear_S1.jpg',
  },
  {
    inventoryNumber: '006',
    serialNumber: 'FIBMS 1 TX02021X0854',
    registrationDate: '11.11.2024',
    name: 'FlyingBear S1',
    imageUrl: '/FlyingBear_S1.jpg',
  },
  {
    inventoryNumber: '007',
    serialNumber: 'FIBMS 1 TX02021X0678',
    registrationDate: '11.11.2024',
    name: 'FlyingBear S1',
    imageUrl: '/FlyingBear_S1.jpg',
  },
  {
    inventoryNumber: '008',
    serialNumber: 'FIBMS 1 TX02021X0878',
    registrationDate: '11.11.2024',
    name: 'FlyingBear S1',
    imageUrl: '/FlyingBear_S1.jpg',
  },
  {
    inventoryNumber: '009',
    serialNumber: 'FIBMS 1 TX02021X1572',
    registrationDate: '11.11.2024',
    name: 'FlyingBear S1',
    imageUrl: '/FlyingBear_S1.jpg',
  },
];

const App = () => {
  const [viewedItems, setViewedItems] = useState([]);

  // Загружаем список просмотренных элементов из localStorage при монтировании
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('viewedItems')) || [];
    setViewedItems(savedItems);
  }, []);

  // Проверка, завершена ли инвентаризация
  const isInventoryFinished = viewedItems.length === equipmentData.length;

  // Функция для сброса данных
  const resetViewedItems = () => {
    // Очищаем данные о просмотренных элементах в localStorage
    localStorage.removeItem('viewedItems');
    setViewedItems([]); // Обновляем состояние компонента
  };

  return (
    <Router>
      <div className="App">
        <h1>Инвентаризация оборудования</h1>

        {/* Количество инвентаризованных элементов */}
        <div className="inventory-progress">
          <p>
            {viewedItems.length} из {equipmentData.length}
          </p>
        </div>

        <Routes>
          {/* Главная страница */}
          <Route
            path="/"
            element={
              <div>
                {/* Выводим только те карточки, которые были просмотрены */}
                {equipmentData
                  .filter((item) => viewedItems.includes(item.inventoryNumber))
                  .map((item) => (
                    <div key={item.inventoryNumber}>
                      <EquipmentItem item={item} />
                    </div>
                  ))}
                {isInventoryFinished && <h3>Инвентаризация завершена</h3>}
                <button className="reset-button" onClick={resetViewedItems}>Сбросить карточки</button>
              </div>
            }
          />

          {/* Страница карточки оборудования */}
          <Route
            path="/:inventoryNumber"
            element={<EquipmentPage equipmentData={equipmentData} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
