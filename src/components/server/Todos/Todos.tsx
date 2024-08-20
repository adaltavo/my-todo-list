import { getTodos } from "@/src/api/queries/getTodos";
import { List } from "../../client/List/List";

export async function Todos() {
  // directly fetching data using Apollo client since this is a server component and cant use hooks (useQuery)
  const data = await fetchList();

  return <List data={data} />;
}

const fetchList = async () => {
  return getTodos();
};
