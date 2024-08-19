export interface TodoTask {
  id: string;
  description: string;
  dueDate: string | null;
  isComplete: boolean;
}
