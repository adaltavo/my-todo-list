import { getTodos } from "@/src/api/queries/getTodos";
import { List } from "../../client/List/List";

export async function Todos() {
  const data = await fetchList();

  return <List data={data} />;
}

const fetchList = async () => {
  return getTodos();
};
