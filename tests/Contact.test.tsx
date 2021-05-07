import { render, screen } from "@testing-library/react";

import Contact from "../src/components/Contact";

describe("Contact", (): void => {
  it("should contain title text", (): void => {
    render(<Contact />);

    expect(screen.getByRole("heading")).toContainHTML("Get in Touch");
  });
});
