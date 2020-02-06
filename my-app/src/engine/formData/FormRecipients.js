import React from "react";

const FormRecipients = ({form, updateLastSelectedOption}) => {


    return (
        <div className="formRecipients">
            <h2>Recipients</h2>
            <div className="formOptions">
                {form.to.map(recipient =>
                    <div className="formRecipient" key={"recipient_" + recipient} value={"recipient_" + recipient}
                    onClick={event => updateLastSelectedOption({type: "recipient", value: event.target.textContent})}>{recipient}</div>
                )}
            </div>
        </div>
    )
}

export default FormRecipients;