import React from "react";

const FormFields = ({updateLastSelectedOption}) => {

    let form = {fields: ["product", "price", "agent", "date", "state"] }

    return (
        <div className="formFields">
            <h2>Fields</h2>
            <div className="formOptions">
                {form.fields.map(field =>
                    <div className="formField" key={"field_" + field} value={"field_" + field}
                        onClick={event => updateLastSelectedOption({type: "field", value: event.target.textContent})}>
                        {field}</div>
                )}
            </div>
        </div>
    )
}

export default FormFields;