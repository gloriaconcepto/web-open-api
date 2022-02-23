import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MockWeatherChart from "../components/MockWeatherChart";
import BarChart from "../utilities/BarChart";
import DropDownMenus from "../utilities/DropDown";

Enzyme.configure({ adapter: new Adapter() });

let weatherWrapper;
beforeEach(() => {
    weatherWrapper = shallow(<MockWeatherChart />);
});

describe("Test Case For weather chart", () => {
    it("test if Dropdown menus component is mounted properly", () => {
        expect(weatherWrapper.containsMatchingElement(<DropDownMenus />)).toEqual(true);
    });
    it("test if Bar Chart component is mounted properly", () => {
        expect(weatherWrapper.containsMatchingElement(<BarChart />)).toEqual(true);
    });
});
