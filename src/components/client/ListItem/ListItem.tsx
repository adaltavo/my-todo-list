"use client";
import { useState } from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { stringToDate, isDateDue } from "@/src/util/common";
import { TodoTask } from "@/src/types/TodoTask";

export type ListItemProps = Omit<TodoTask, "id">;

export function ListItem({ description, dueDate, isComplete }: ListItemProps) {
  const [checked, setChecked] = useState(isComplete);

  const formatedDueDate = stringToDate(dueDate);
  const onChangeHandler = () => {
    setChecked((isChecked) => !isChecked);
  };

  const backgroundColor = getBackgroundColor(checked, dueDate);

  return (
    <div
      onClick={onChangeHandler}
      className={`${backgroundColor} flex flex-row gap-3 md:w-[var(--list-item-width)] w-[350px] p-2`}
    >
      <section>
        <Checkbox checked={checked} />
      </section>
      <section className="truncate">{description}</section>
      {dueDate !== null ? (
        <section className="ml-auto border border-solid border-black pl-2 pr-2 min-w-28 flex justify-center">
          {formatedDueDate}
        </section>
      ) : null}
    </div>
  );
}

const getBackgroundColor = (
  isComplete: boolean,
  dueDateString: string | null,
) => {
  if (isComplete) {
    return "bg-[var(--list-item-completed-bg)]";
  }
  if (dueDateString && isDateDue(dueDateString)) {
    return "bg-[var(--list-item-due-bg)]";
  }
  return "bg-[var(--list-item-neutral-bg)]";
};
