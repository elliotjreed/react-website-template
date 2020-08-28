import { shallow, ShallowWrapper } from "enzyme";
import * as React from "react";

import Home from "../src/components/Home";

describe("Home", (): void => {
  it("should render with main-content CSS class and contain tag line text", (): void => {
    const shallowWrapper: ShallowWrapper = shallow(<Home />);

    expect(shallowWrapper.exists(".main-content")).toBe(true);
    expect(shallowWrapper.text()).toContain("SUBTITLE");
  });
});
