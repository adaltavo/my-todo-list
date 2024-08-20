"use client";
import { TodoTask } from "@/src/types/TodoTask";
import { ListItem } from "../../client/ListItem/ListItem";
import { getListItemSortValue } from "@/src/util/common";

type ListProps = {
  data: Array<TodoTask> | null;
};

export function List({ data }: ListProps) {

  if (data === null) {
    return (
      <div className="p-3 flex flex-col gap-3">
        <p>
          Congrats!(?)... No Todos were found
        </p>
      </div>
    );
  }

  const sortedItems = data
    .slice()
    .sort(
      (firstItemList, nextItemList) =>
        getListItemSortValue(firstItemList) -
        getListItemSortValue(nextItemList),
    );

  return (
    <div className="p-3 flex flex-col gap-3">
      {sortedItems.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          description={item.description}
          dueDate={item.dueDate}
          isComplete={item.isComplete}
        />
      ))}
    </div>
  );
}
