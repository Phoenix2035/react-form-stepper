import {useState} from "react"

import SignUpInfo from "./SignUpInfo"
import PersonalInfo from "./PersonalInfo"
import OtherInfo from "./OtherInfo"

const Form = () => {
    const [step, setStep] = useState(0)

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        username: "",
        nationality: "",
        other: ""
    })

    const formTitles = ["Sign Up", "Personal Info", "Other Info"]

    const stepDisplay = () => {
        if (step === 0) {
            return <SignUpInfo formData={formData} setFormData={setFormData}/>
        } else if (step === 1) {
            return <PersonalInfo formData={formData} setFormData={setFormData}/>
        } else {
            return <OtherInfo formData={formData} setFormData={setFormData}/>
        }
    }

    return (
        <div className="form">
            <div className="progress-bar">
                <div style={{width: step === 0 ? "33.3%" : step === 1 ? "66.6%" : "100%"}}/>
            </div>
            <div className="form-container">
                <div className="header">
                    <h1>{formTitles[step]}</h1>
                </div>

                <div className="main">
                    {stepDisplay()}
                </div>

                <div className="footer">
                    <button onClick={() => setStep(curr => curr - 1)} disabled={step === 0}>Prev</button>
                    <button onClick={() => {
                        if (step === formTitles.length - 1) {
                            alert("Form Submitted")
                            console.log(formData)
                        } else {
                            setStep(curr => curr + 1)
                        }
                    }}>
                        {step === formTitles.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Form
