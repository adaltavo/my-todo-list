export const stringToDate = (date: string | null) =>
  date !== null
    ? new Date(date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : date;

export const isDateDue = (date: string) => {
  const dueDate = new Date(date);
  return new Date().getTime() > dueDate.getTime();
};

export const getListItemSortValue = (listItem: any) => {
  if (listItem.isComplete) {
    return 9e13;
  }

  if (listItem.dueDate === null) {
    return 0;
  }

  if (isDateDue(listItem.dueDate)) {
    return -1;
  }

  return new Date(listItem.dueDate).getTime();
};
