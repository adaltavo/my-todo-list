import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AppNav } from "@/src/components/server/AppNav/AppNav";

describe("<AppNav />", () => {
  it("renders the AppNav component", () => {
    render(<AppNav />);

    const element = screen.getByText("Todo App");

    expect(element).toBeInTheDocument();
  });
});
