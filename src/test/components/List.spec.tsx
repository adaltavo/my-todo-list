import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { List } from "@/src/components/client/List/List";
import { mockListResponse } from "../mock/mockListResponse.mock";

describe("<List />", () => {
  it("renders the todo list with 8 items", () => {
    render(<List data={mockListResponse} />);

    const elements = screen.getAllByRole("checkbox");

    expect(elements.length).toBe(8);
  });
});
