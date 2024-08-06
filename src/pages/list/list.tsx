import { useState } from 'react';
import { Characters } from './components/characters';
import { Boolean } from './components/boolean';

const initialValue = [
  { name: 'Peso', measureUnit: 'kg', lInf: 0, lSup: 0, nominal: 0, lab: 0 },
  { name: 'Tamanho', measureUnit: 'cm', lInf: 0, lSup: 0, nominal: 0, lab: 0 },
  {
    name: 'Temperatura',
    measureUnit: 'ºC',
    lInf: 0,
    lSup: 0,
    nominal: 0,
    lab: 0,
  },
];
const nameProperties = [
  'name',
  'measureUnit',
  'lInf',
  'lSup',
  'nominal',
  'lab',
  'actions',
];

const initialValueBool = [{ name: 'Cor' }, { name: 'Intacto' }];

export function List() {
  return (
    <div className="container mx-auto">
      <CompCharacters category="Pessoas" />
      <CompCharacters  category="Animais"/>

      <CompBoolean />
      <CompBoolean />
    </div>
  );
}

function CompBoolean() {
  const [boolean, setBoolean] = useState(initialValueBool);

  return (
    <div className="grid grid-cols-1 p-2 gap-2 border shadow-2xl rounded mt-4">
      {boolean.map((prop, index) => (
        <Boolean key={index} boolean={prop} />
      ))}
    </div>
  );
}

function CompCharacters({category}:{category:string}) {
  const [characters, setCharacters] = useState(initialValue);

  function handleChange(index: number) {
    return (name: string, value: string) => {
      const newCharacters = [...characters];
      newCharacters[index][name] = value;
      setCharacters(newCharacters);
    };
  }
  return (
    <div className="grid grid-cols-1 p-2 gap-2 border shadow-2xl rounded mt-4">
      <div>
        <h1 className="text-3xl font-bold text-center">{category}</h1>
      </div>
      <div className="grid grid-cols-7 gap-2 justify-center items-center">
        {nameProperties.map((nameProperty, index) => (
          <span
            key={index}
            className="text-2xl font-bold overflow-hidden text-ellipsis"
          >
            {nameProperty}
          </span>
        ))}
      </div>

      {characters.map((character, index) => (
        <Characters
          key={index}
          character={character}
          onChange={handleChange(index)}
        />
      ))}
    </div>
  );
}
