import { gql, useMutation } from "@apollo/client";
import { TodoTaskFragment } from "../fragments/TodoTask";
import { RequestResponse } from "@/src/types/RequestResponse";

export const completeTodoMuation = gql`
  mutation CompleteTodoMuation($isComplete: Boolean!, $id: String!) {
    completeTodoMutation(input: { isComplete: $isComplete, id: $id })
      @rest(type: "Todo", path: "/patch/{args.input.id}/", method: "PATCH") {
      ...TodoTask
    }
  }

  ${TodoTaskFragment}
`;

export const useUpdateTodo = () => {
  const [updateTodo, { data, loading, error }] =
    useMutation(completeTodoMuation);
  if (process.env.USE_MOCK_DATA === "true") {
    const mockData: RequestResponse = { status: "success" };
    return {
      updateTodo: () => {},
      data: mockData,
      loading: false,
      error: null,
    };
  }

  return {
    updateTodo,
    data,
    loading,
    error,
  };
};
