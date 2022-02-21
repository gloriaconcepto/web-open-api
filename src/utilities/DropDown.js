import React from "react";

const DropDownMenus = (props) => {
    const { onSelect, dropDownItems } = props;
    //when user change value in the drop down
    const onChange = (e) => {
        
        onSelect(e.target.value)
    };
    return (
        <React.Fragment>
            <small>Select your data parameters</small>
            <select className="form-select" aria-label="Default select example" onChange={onChange} defaultValue={dropDownItems[0].name}>
                
                {dropDownItems.map((value) => (
                    <option value={value.name} key={value.id}>
                        {value.name}
                    </option>
                ))}
            </select>
        </React.Fragment>
    );
};

export default DropDownMenus;
