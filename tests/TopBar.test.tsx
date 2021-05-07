import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { TopBar } from "../src/components/TopBar";

describe("TopBar", (): void => {
  it("should contain links", (): void => {
    render(
      <Router>
        <TopBar />
      </Router>
    );

    expect(screen.getAllByRole("link")).toHaveLength(2);
  });
});
