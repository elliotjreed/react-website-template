import { render, screen } from "@testing-library/react";

import Home from "../src/components/Home";

describe("Home", (): void => {
  it("should contain tag line text", (): void => {
    render(<Home />);

    const headings: HTMLElement[] = screen.getAllByRole("heading");
    expect(headings[0]).toContainHTML("TITLE");
    expect(headings[1]).toContainHTML("SUBTITLE");
  });
});
