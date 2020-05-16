import {shallow, ShallowWrapper} from "enzyme";
import * as React from "react";
import { Link } from "react-router-dom";
import Sitemap from "../src/components/Sitemap";

describe("Sitemap", (): void => {
  it("should render with main-content CSS class and contain sitemap text and links", (): void => {
    let shallowWrapper: ShallowWrapper = shallow(<Sitemap />);
    expect(shallowWrapper.exists(".main-content")).toBe(true);
    expect(shallowWrapper.text()).toContain("Sitemap");
    expect(shallowWrapper.text()).toContain("Links on this website:");
    expect(shallowWrapper.find(Link)).toHaveLength(3);
  });
});
