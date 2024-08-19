import { ChangeEventHandler } from "react";

export type CheckboxProps = {
  onChange?: ChangeEventHandler;
  checked: boolean;
};

export function Checkbox({ onChange = () => {}, checked }: CheckboxProps) {
  return (
    <div className="bg-inherit">
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        className="appearance-none h-3 w-3 border border-gray-800 rounded-sm focus:ring focus:ring-white focus:ring-opacity-50 checked:after:content-[''] checked:bg-black checked:after:-mt-1.5px checked:after:ms-[0.20rem] checked:after:block checked:after:h-2 checked:after:w-1 checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-opacity-50 checked:after:border-[var(--checkbox-checkmark-color)] "
      />
    </div>
  );
}
