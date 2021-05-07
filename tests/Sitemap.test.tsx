import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Sitemap from "../src/components/Sitemap";

describe("Sitemap", (): void => {
  it("should contain sitemap text", (): void => {
    render(
      <Router>
        <Sitemap />
      </Router>
    );

    expect(screen.getByRole("heading")).toContainHTML("Sitemap");
  });
});
