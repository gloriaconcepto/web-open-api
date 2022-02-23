import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchBarComponent from "../utilities/SearchBar";

Enzyme.configure({ adapter: new Adapter() });

let Searchwrapper;

beforeEach(() => {
    Searchwrapper = shallow(<SearchBarComponent />);
});

describe("Test Case For SearchBar component ", () => {
    it("check if the is a small tag with text Enter city name e.g Tartu ", () => {
        const smallElement = Searchwrapper.find("small").text();
        expect(smallElement).toEqual("Enter city name e.g Tartu");
    });
});

test("Test if the search button is disable by default", () => {
    render(<SearchBarComponent />);
    const buttonElement = screen.getByTestId("search-button-id");
    expect(buttonElement.closest("button")).toBeDisabled();
});

test("Test if  input element tag is render", () => {
    render(<SearchBarComponent />);
    const inputElement = screen.getByTestId("form-input-id");
    expect(inputElement).toBeInTheDocument();
});

test("Test if  input element tag is render", () => {
    render(<SearchBarComponent />);
    const inputElement = screen.getByTestId("form-input-id");
    expect(inputElement).toBeInTheDocument();
});

const setup = () => {
    const utils = render(<SearchBarComponent />);
    const input = utils.getByTestId("form-input-id");

    return {
        input,
        ...utils,
    };
};

test("Test to get the output input tag", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "lagos" } });
    expect(input.value).toBe("lagos");
});

test("Test to validate that no number is added to the input tag", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "lago4s" } });
    const small = screen.getByTestId("form-input-error");
    expect(small).toBeInTheDocument(small);
});
