import { shallow, ShallowWrapper } from "enzyme";
import * as React from "react";

import PageNotFound from "../src/components/PageNotFound";

describe("PageNotFound", (): void => {
  it("should render with main-content CSS class and contain Page Not Found text", (): void => {
    const shallowWrapper: ShallowWrapper = shallow(<PageNotFound />);

    expect(shallowWrapper.exists(".main-content")).toBe(true);
    expect(shallowWrapper.text()).toContain("Page Not Found");
  });
});
