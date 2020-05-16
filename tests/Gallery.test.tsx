import { shallow, ShallowWrapper } from "enzyme";
import * as React from "react";
import Gallery from "../src/components/Gallery";

describe("Gallery", (): void => {
  it("should render with main-content CSS class and contain gallery title text", (): void => {
    let shallowWrapper: ShallowWrapper = shallow(<Gallery />);
    expect(shallowWrapper.exists(".main-content")).toBe(true);
    expect(shallowWrapper.text()).toContain("Gallery");
  });
});
