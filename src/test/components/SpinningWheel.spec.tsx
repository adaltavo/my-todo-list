import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SpinningWheel } from "@/src/components/server/SpinningWheel/SpinningWheel";

describe("<SpinningWheel />", () => {
  it("renders the loading wheel component", () => {
    render(<SpinningWheel />);

    const element = screen.getByRole("status", { name: "" });

    expect(element).toBeInTheDocument();
  });
});
