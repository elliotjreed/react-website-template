import {shallow, ShallowWrapper} from "enzyme";
import * as React from "react";
import { Link } from "react-router-dom";
import { TopBar } from "../src/components/TopBar";

describe("TopBar", (): void => {
  it("should render with navbar CSS class and contain links", (): void => {
    let shallowWrapper: ShallowWrapper = shallow(<TopBar />);
    expect(shallowWrapper.exists(".navbar")).toBe(true);
    expect(shallowWrapper.find(Link)).toHaveLength(4);
  });
});
