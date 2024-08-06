import { Button, Input } from 'react-daisyui';

export type Character = {
  name: string;
  measureUnit: string;
  lInf: number;
  lSup: number;
  nominal: number;
  lab: number;
};

type CharactersProps = {
  character: Character;
  onChange: (name: string, value: string) => void;
};

export function Characters({ character, onChange }: CharactersProps) {

  const props = (Object.keys(character) as Array<keyof Character>);
  props.shift()

  function colors() {
    const rand = Math.floor(Math.random() * 10);
    const colorsArr = ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'] as const
    return colorsArr[rand];
  }

  return (
    <div className={`grid grid-cols-7 gap-2 justify-center items-center`}>
      <label className="text-center align-middle text-2xl">
        {character.name}
      </label>
      {
        props.map((prop, index) => (
          <Input
            key={index}
            name={prop}
            placeholder={prop}
            value={character[prop]}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        ))
      }

      <div>
        <Button shape='square'color={colors()} >A</Button>
        <Button shape='square'color={colors()} >B</Button>
        <Button shape='square'color={colors()} >C</Button>
        <Button shape='square'color={colors()} >B</Button>
      </div>

    </div>
  );
}
