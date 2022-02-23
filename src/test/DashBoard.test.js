import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MockManageDashBoard from "../pages/MockupDashboard";
import SearchBarComponent from "../utilities/SearchBar";
import WeatherChart from "../components/WeatherChart";
Enzyme.configure({ adapter: new Adapter() });

let dashBoardWrapper;

beforeEach(() => {
    dashBoardWrapper = shallow(<MockManageDashBoard />);
});

describe("Test Case For DashBoard components ", () => {
    it("check if the is a h1 tag with text Weather Forcast App ", () => {
        const h1Element = dashBoardWrapper.find("h1").text();
        expect(h1Element).toEqual("Weather Forcast App");
    });
    it("test if SearchBar component is mounted properly", () => {
        expect(dashBoardWrapper.containsMatchingElement(<SearchBarComponent />)).toEqual(true);
    });
    it("test if WeatherChart component is mounted properly", () => {
        expect(dashBoardWrapper.containsMatchingElement(<WeatherChart />)).toEqual(true);
    });
});
