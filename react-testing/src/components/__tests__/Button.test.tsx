import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";
import { describe, expect, it, vi } from "vitest";

describe("Button Component", () => {
  it("renders with the correct label", () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
  });

  it("handles click events", () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
