import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import MananageDashBoard from "../pages/DashBoard";

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App />);
});

describe("Test Case For App", () => {
    it("it the app render properly,snapshot test", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("check if the is a div with id main-container", () => {
        const divElement = wrapper.find("#main-container");
        expect(divElement).toHaveLength(1);
    });
    it("test if ManageDashBoard component is mounted properly", () => {
        expect(wrapper.containsMatchingElement(<MananageDashBoard />)).toEqual(true);
    });
});
