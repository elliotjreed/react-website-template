import { shallow } from "enzyme";
import * as React from "react";
import Home from "../src/components/Home";

describe("Home", (): void => {
  it("should render with main-content CSS class and contain tag line text", (): void => {
    expect(shallow(<Home />).exists(".main-content")).toBe(true);
    expect(shallow(<Home />).text()).toContain("SUBTITLE");
  });
});
