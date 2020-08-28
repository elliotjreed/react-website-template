import { shallow, ShallowWrapper } from "enzyme";
import * as React from "react";

import Contact from "../src/components/Contact";

describe("Contact", (): void => {
  it("should render with input field CSS class and contain title text", (): void => {
    const shallowWrapper: ShallowWrapper = shallow(<Contact />);

    expect(shallowWrapper.exists(".field")).toBe(true);
    expect(shallowWrapper.text()).toContain("Get in Touch");
  });
});
