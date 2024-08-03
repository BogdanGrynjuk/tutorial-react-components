import React, { useEffect, useState } from 'react';
import Chip from './Chip';

const initialState = [
  { name: "Тадей", active: true },
  { name: "Дем'ян", active: false },
  { name: "Віра", active: false },
];

export const UsageExampleChip = () => {
  const [people, setPeople] = useState([]);

  const handleRemoveChip = (id) => {
    setPeople(people => people.filter(({ name }) => name !== id));
  }

  const handleToggleActiveChip = id => {
    setPeople(people => 
      people.map(({ name, active }) => 
        name === id ? { name, active: !active } : { name, active }
      )
    );
  }

  useEffect(() => {
    setPeople(initialState); 
  }, []);
  
  return (
    <>
      {people.map(({ name, active }) => (
        <Chip
          text={name}
          key={name}
          id={name}
          className={active ? 'active' : ''}
          withClose
          withIcon
          onCloseClick={() => handleRemoveChip(name)}
          onChipClick={() => handleToggleActiveChip(name)}
        />
      ))}
    </>
  );
}

export default UsageExampleChip;
