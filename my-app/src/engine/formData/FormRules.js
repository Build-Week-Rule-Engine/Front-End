import React from "react";

const FormRules = ({form}) => {

    // if (!form)
    //     { return }

    // console.log(form.rules);

    return (
        <div className="formRules">
            <h2>Form rules</h2>
            <h3>Number rules</h3>
            {form.rules.number.map(rule =>
                <div className="formRule" key={rule}>{rule}</div>
            )}
            <h3>Text rules</h3>
            {form.rules.text.map(rule =>
                <div className="formRule" key={rule}>{rule}</div>
            )}
        </div>
    )
}

export default FormRules;