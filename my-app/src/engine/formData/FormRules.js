import React from "react";

const FormRules = ({form, updateLastSelectedOption}) => {

    return (
        <div className="formRules">
            <h2>Form rules</h2>
            <h3>Number rules</h3>

            <div className="formOptions">
                {form.rules.number.map(rule =>
                    <div className="formOperator" key={"number_rule_" + rule} value={"number_rule_" + rule}
                        onClick={event => updateLastSelectedOption({type: "number-rule", value: event.target.textContent})}>
                        {rule}</div>
                )}
            </div>

            <h3>Text rules</h3>
            <div className="formOptions">
                {form.rules.text.map(rule =>
                    <div className="formOperator" key={"text_rule_" + rule} value={"text_rule_" + rule}
                    onClick={event => updateLastSelectedOption({type: "text-rule", value: event.target.textContent})}>
                    {rule}</div>
                )}
            </div>
        </div>
    )
}

export default FormRules;