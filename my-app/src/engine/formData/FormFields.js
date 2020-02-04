import React from "react";

const FormFields = ({form}) => {


    return (
        <div className="formFields">
            <h2>Fields</h2>
            <div className="formOptions">
                {form.fields.map(field =>
                    <div className="formField" key={field}>{field}</div>
                )}
            </div>
        </div>
    )
}

export default FormFields;