import React, { useState } from 'react';
import Select from './Select';
import ListGroup from 'components/list-group/ListGroup';

const CARS_OPTIONS = [
  { value: 'all', name: 'Всі авто' },
  {
    label: 'Німецькі авто',
    options: [
      { value: 'volvo', name: 'Volvo' },
      { value: 'mercedes', name: 'Mercedes' },
      { value: 'audi', name: 'Audi' },
    ]
  },
  {
    label: 'Американські авто',
    options: [
      { value: 'ford', name: 'Ford' },
      { value: 'chevrolet', name: 'Chevrolet' },
      { value: 'tesla', name: 'Tesla' },
    ]
  }
];

const INITIAL_STATE_CARS = [
  { id: 1, name: 'Volvo', model: 'XC90' },
  { id: 2, name: 'Volvo', model: 'XC60' },
  { id: 3, name: 'Mercedes', model: 'C-Class' },
  { id: 4, name: 'Mercedes', model: 'E-Class' },
  { id: 5, name: 'Audi', model: 'A4' },
  { id: 6, name: 'Audi', model: 'Q5' },
  { id: 7, name: 'Ford', model: 'F-150' },
  { id: 8, name: 'Ford', model: 'Mustang' },
  { id: 9, name: 'Chevrolet', model: 'Camaro' },
  { id: 10, name: 'Chevrolet', model: 'Impala' },
  { id: 11, name: 'Tesla', model: 'Model S' },
  { id: 12, name: 'Tesla', model: 'Model 3' }
];


const UsageExampleGroupSelect = () => {
  const [filteredCars, setFilteredCars] = useState(INITIAL_STATE_CARS);
  const [selectedCar, setSelectedCar] = useState('all');

  const handleFilterCars = (selectedCarName) => {
    setSelectedCar(selectedCarName);
    if (!selectedCarName || selectedCarName === 'all') {
      setFilteredCars(INITIAL_STATE_CARS);
    } else {
      setFilteredCars(INITIAL_STATE_CARS.filter(car => car.name.toLowerCase() === selectedCarName.toLowerCase()));
    }
  };

  return (
    <>
      <Select
        id="cars"
        options={CARS_OPTIONS}
        label={"Фільтрація авто"}
        value={selectedCar}
        onChange={handleFilterCars}
      />

      <ListGroup
        items={filteredCars}
        keyExtractor={car => `car-list-item_${car.id}`}
        renderItem={car => (
          <div>
            <p><b>Бренд: </b>{car.name}</p>
            <p><b>Модель: </b>{car.model}</p>
          </div>
        )}
      />
    </>
  );
}

export default UsageExampleGroupSelect;
