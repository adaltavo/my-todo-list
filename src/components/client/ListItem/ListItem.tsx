"use client";
import { useState } from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { stringToDate, isDateDue } from "@/src/util/common";
import { TodoTask } from "@/src/types/TodoTask";
import { useUpdateTodo } from "@/src/api/mutations/completeTodo";

export type ListItemProps = TodoTask;

export function ListItem({ id, description, dueDate, isComplete }: ListItemProps) {
  const [checked, setChecked] = useState(isComplete);
  const { updateTodo } = useUpdateTodo();

  const formatedDueDate = stringToDate(dueDate);
  const onChangeHandler = () => {
    setChecked((isChecked) => !isChecked);
    updateTodo({
      variables: {
        id,
        description,
        dueDate,
        isComplete: !checked
      }
    })
  };

  const backgroundColor = getBackgroundColor(checked, dueDate);

  return (
    <div
      onClick={onChangeHandler}
      className={`${backgroundColor} cursor-pointer hover:ring-1 ring-[var(--list-item-ring-bg)] flex flex-row gap-3 md:w-[var(--list-item-width)] w-[350px] p-2`}
    >
      <section>
        <Checkbox checked={checked} />
      </section>
      <section className={`${checked ? 'line-through' : null} truncate`}>{description}</section>
      {dueDate !== null ? (
        <section className="ml-auto no-underline border border-solid border-black pl-2 pr-2 min-w-28 flex justify-center">
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
