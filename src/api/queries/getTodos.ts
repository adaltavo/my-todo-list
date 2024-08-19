import { gql } from "@apollo/client";
import { TodoTaskFragment } from "../fragments/TodoTask";
import { TodoTask } from "@/src/types/TodoTask";
import { mockListResponse } from "@/src/test/mock/mockListResponse.mock";
import { client } from "@/src/api/Client";

export const getTodosQuery = gql`
  query getTodos {
    Todos @rest(type: "Todo", path: "") {
      ...TodoTask
    }
  }

  ${TodoTaskFragment}
`;

export const getTodos = async () => {
  if (process.env.USE_MOCK_DATA) {
    const data: Array<TodoTask> = await new Promise((resolve) =>
      setTimeout(() => resolve(mockListResponse), 1000),
    );
    return data;
  }
  const data = await client.query<Record<"Todos", Array<TodoTask>>>({
    query: getTodosQuery,
  });
  return data.data.Todos;
};
