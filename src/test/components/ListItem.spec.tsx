import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ListItem } from "@/src/components/client/ListItem/ListItem";

const mockData = {
  id: "505",
  description: "File 2023 Taxes",
  isComplete: true,
  dueDate: "2023-03-10T17:50:44.673Z",
};

describe("<ListItem />", () => {
  const { description, isComplete, dueDate, id } = mockData;

  it("renders the list item component", () => {
    render(
      <ListItem
        id={id}
        description={description}
        isComplete={isComplete}
        dueDate={dueDate}
      />,
    );

    const element = screen.getByRole("checkbox", { name: "" });

    expect(element).toBeInTheDocument();
  });

  it("renders the list item component unchecked", () => {
    render(
      <ListItem
        id={id}
        description={description}
        isComplete={false}
        dueDate={dueDate}
      />,
    );

    const element = screen.getByRole("checkbox", { checked: false });

    expect(element).toBeInTheDocument();
  });

  it("renders the list item component checked", () => {
    render(
      <ListItem
        id={id}
        description={description}
        isComplete={true}
        dueDate={dueDate}
      />,
    );

    const element = screen.getByRole("checkbox", { checked: true });

    expect(element).toBeInTheDocument();
  });
});
