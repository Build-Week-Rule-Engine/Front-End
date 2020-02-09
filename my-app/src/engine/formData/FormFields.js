import React from "react";

const FormFields = ({lastSelectedOption, updateLastSelectedOption}) => {

    let form = {fields: ["product", "price", "agent", "date", "state"] }
    let optionType = "field";

    return (
        <div className="formFields">
            <h2>Fields</h2>
            <div className="formOptions">
                {form.fields.map(field =>
                    <div className={"formField" + ((lastSelectedOption.type === optionType && lastSelectedOption.value === field) ? " optionSelectedLight" : "")}
                    
                    key={"field_" + field} value={"field_" + field}
                        onClick={event => updateLastSelectedOption({type: "field", value: event.target.textContent})}>
                        {field}</div>
                )}
            </div>
        </div>
    )
}

export default FormFields;