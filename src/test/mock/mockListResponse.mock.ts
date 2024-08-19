import { TodoTask } from "@/src/types/TodoTask";

export const mockListResponse: Array<TodoTask> = [
  {
    id: "1",
    description: "File 2023 Taxes",
    isComplete: true,
    dueDate: "2023-03-10T17:50:44.673Z",
  },
  {
    id: "2",
    description: "Fold laundry",
    isComplete: true,
    dueDate: null,
  },
  {
    id: "3",
    description: "Call Mom",
    isComplete: false,
    dueDate: "2025-06-26T19:00:00.000Z",
  },
  {
    id: "4",
    description: "Walk the dog",
    isComplete: false,
    dueDate: null,
  },
  {
    id: "5",
    description: "Feed the cat",
    isComplete: false,
    dueDate: "2024-06-24T15:45:00.000Z",
  },
  {
    id: "6",
    description: "Run LA marathon",
    isComplete: false,
    dueDate: "2023-03-21T13:30:00.000Z",
  },
  {
    id: "7",
    description: "Independence Day!",
    isComplete: false,
    dueDate: "2024-09-16T13:30:00.000Z",
  },
  {
    id: "8",
    description: "Prepare for Xmas",
    isComplete: false,
    dueDate: "2024-12-21T13:30:00.000Z",
  },
];
