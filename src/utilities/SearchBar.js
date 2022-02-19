import React, { memo, useEffect, useMemo, useState } from "react";

const SearchBarComponent = (props) => {
    return (
        <div className="input-group">
            <div className="form-outline">
                <small className="form-label" for="form1">
                    Enter city name e.g Tartu
                </small>
                <input type="text" id="form1" className="form-control" />
            </div>
            <button type="button" className="btn btn-primary search-bar-button">
                <i className="bi bi-search" style={{ fontSize: 18, color: "white" }}></i>
            </button>
            {/* <p>
              
            </p> */}
        </div>
    );
};

export default SearchBarComponent;
