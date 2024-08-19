"use client";
import { TodoTask } from "@/src/types/TodoTask";
import { ListItem } from "../../client/ListItem/ListItem";
import { getListItemSortValue } from "@/src/util/common";

type ListProps = {
  data: Array<TodoTask>;
};

export function List({ data }: ListProps) {
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
          description={item.description}
          dueDate={item.dueDate}
          isComplete={item.isComplete}
        />
      ))}
    </div>
  );
}
