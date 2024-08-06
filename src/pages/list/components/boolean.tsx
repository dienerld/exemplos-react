import { Button, Input } from 'react-daisyui';

export type TBoolean = {
  name: string;
};

type BooleanProps = {
  boolean: TBoolean;
};

export function Boolean({ boolean }: BooleanProps) {

  const props = (Object.keys(boolean) as Array<keyof TBoolean>);
  props.shift()

  function colors() {
    const rand = Math.floor(Math.random() * 10);
    const colorsArr = ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'] as const
    return colorsArr[rand];
  }

  return (
    <div className={`grid grid-cols-7 gap-2 justify-center items-center`}>
      <label className="text-center align-middle text-2xl">
        {boolean.name}
      </label>

      <div>
        <Button shape='square'color={colors()} >A</Button>
        <Button shape='square'color={colors()} >B</Button>
        <Button shape='square'color={colors()} >C</Button>
        <Button shape='square'color={colors()} >B</Button>
      </div>

    </div>
  );
}
