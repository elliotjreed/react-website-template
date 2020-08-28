import { shallow, ShallowWrapper } from "enzyme";
import * as React from "react";

import { Button } from "../src/components/Button";

describe("Button", (): void => {
  it("should render button with text", (): void => {
    const shallowWrapper: ShallowWrapper = shallow(<Button text="I am text" disabled={false} />);

    expect(shallowWrapper.exists(".button")).toBe(true);
    expect(shallowWrapper.exists(".submit-button")).toBe(true);
    expect(shallowWrapper.text()).toContain("I am text");
  });
});
