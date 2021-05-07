import { render, screen } from "@testing-library/react";

import { Button } from "../src/components/Button";

describe("Button", (): void => {
  it("should render button with text", (): void => {
    render(<Button text="I am text" disabled={false} />);

    expect(screen.getByRole("button")).toContainHTML("I am text");
  });
});
