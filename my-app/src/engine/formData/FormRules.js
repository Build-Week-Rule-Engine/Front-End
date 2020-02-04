import React from "react";

const FormRules = ({form}) => {

    // if (!form)
    //     { return }

    // console.log(form.rules);

    return (
        <div className="formRules">
            <h2>Form rules</h2>
            <h3>Number rules</h3>

            <div className="formOptions">
                {form.rules.number.map(rule =>
                    <div className="formOperator" key={rule}>{rule}</div>
                )}
            </div>

            <h3>Text rules</h3>
            <div className="formOptions">
                {form.rules.text.map(rule =>
                    <div className="formOperator" key={rule}>{rule}</div>
                )}
            </div>
        </div>
    )
}

export default FormRules;