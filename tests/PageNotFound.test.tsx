import { render, screen } from "@testing-library/react";

import PageNotFound from "../src/components/PageNotFound";

describe("PageNotFound", (): void => {
  it("should contain Page Not Found text", (): void => {
    render(<PageNotFound />);

    expect(screen.getByRole("heading")).toContainHTML("Page Not Found");
  });
});
