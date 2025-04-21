import { useState } from "react";
import Field from "./Field.jsx"
import Jobform from "./Jobform.jsx"
import Educationform from "./Educationform.jsx";
import CV from "./CVcomponent.jsx";

function Form(){
    const [edit, setEdit] = useState(true)
    const [valueName, setValueName] = useState('')
    const [valueEmail, setValueEmail] = useState('')
    const [valuePhone, setValuePhone] = useState('')
    const [jobXp, setJobs] = useState({})
    const [educationXp, setEducation] = useState({})

    function changer() {
        setEdit(false)
    }

    function editer(){
        setEdit(true)
    }

    function getValuesFromDict(dicio){
        const r = Object.keys(dicio).map(v => { return dicio[v] })
        console.log(r)
        return r
    }

    function body(){
        if(edit){
            return (
                <div>
                    <Field name={'name'} lab={"Name"} value={valueName} handlerName={setValueName}/>
                    <Field name={'email'} lab={"Email"} value={valueEmail} handlerName={setValueEmail}/>
                    <Field name={'phone'} lab={"Phone Number"} type={"tel"} value={valuePhone} handlerName={setValuePhone}/>
                    <Jobform list={jobXp} handlerList={setJobs}/>
                    <Educationform list={educationXp} handlerList={setEducation}/>
                    <button className="submit-button" onClick={changer}>SUBMIT</button>
                </div>
            )
        }

        if(!edit) {
            return(
                <CV valueName={valueName} valueEmail={valueEmail} valuePhone={valuePhone} jobXp={jobXp} educationXp={educationXp} editer={editer} />
            )
        }
    }

    return(
        <div>
            {body()}
        </div>
    )
}

export default Form