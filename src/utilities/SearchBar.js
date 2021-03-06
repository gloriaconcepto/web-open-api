import React, { useState } from "react";

const SearchBarComponent = (props) => {
    const [disabled, setDisabled] = useState(true);
    const [searchWord, setSearchWord] = useState("");
    const [showErrrorMessage, setShowErrorMessage] = useState(false);
    const { onSearch } = props;
    let stringRex = /^[A-Za-z]+$/;
    //capture the value as user types
    const onChange = (e) => {
        if (e.target.value.length >= 1) {
            if (!stringRex.test(e.target.value)) {
                setDisabled(true);
                setShowErrorMessage(true);
            } else {
                setDisabled(false);
                setShowErrorMessage(false);
            }
        } else {
            setDisabled(false);
        }

        setSearchWord(e.target.value);
    };

    //do validation once search text is not on focus
    const onBlur = () => {
        if (searchWord.length === 0) {
            setDisabled(true);
        } else {
            //validate if it contain string only
            if (!stringRex.test(searchWord)) {
                setDisabled(true);
                setShowErrorMessage(true);
            }
        }
    };

    const queryWeather = () => {
        onSearch(searchWord);
    };
    return (
        <div className="input-group position-search-bar">
            <div className="form-outline">
                <small className="form-label" style={{ fontStyle: "italic" }}>
                    Enter city name e.g Tartu
                </small>
                <input type="text" id="form1" className="form-control" onBlur={() => onBlur()} onChange={onChange} data-testid="form-input-id"/>
                {showErrrorMessage && (
                    <small className="form-label" style={{ fontStyle: "italic", color: "red" }} data-testid="form-input-error">
                        City name must not contain number
                    </small>
                )}
            </div>
            <button type="button" className="btn btn-primary search-bar-button" disabled={disabled} onClick={queryWeather} data-testid="search-button-id">
                <i className="bi bi-search" style={{ fontSize: 18, color: "white" }}></i>
            </button>
        </div>
    );
};

export default SearchBarComponent;
