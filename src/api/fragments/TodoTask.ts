import { gql } from "@apollo/client";

export const TodoTaskFragment = gql`
  fragment TodoTask on Todo {
    id
    description
    isComplete
    dueDate
  }
`;
