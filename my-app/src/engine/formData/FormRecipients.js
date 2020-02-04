import React from "react";

const FormRecipients = ({form}) => {


    return (
        <div className="formRecipients">
            <h2>Recipients</h2>
            <div className="formOptions">
                {form.recipients.map(recipient =>
                    <div className="formRecipient" key={recipient}>{recipient}</div>
                )}
            </div>
        </div>
    )
}

export default FormRecipients;