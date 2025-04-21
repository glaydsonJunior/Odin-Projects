import { useState } from "react";
import EducationXpComponent from "./EducationXpComponent.jsx";

function EducationForm({ list, handlerList }) {
    const objKeys = Object.keys(list);
    const [counter, setCounter] = useState((objKeys[objKeys.length - 1] !== undefined) ? Number.parseInt(objKeys[objKeys.length - 1]) : 0);

    function addEducation() {
        const newId = counter + 1;
        list[newId] = { name: "", id: newId, start: "", end: "" };
        setCounter(newId);
        handlerList(list);
    }

    return (
        <div>
            <button onClick={addEducation} className="add-button">Add Education Experience</button>
            <div>
                {objKeys.map(k => (
                    <EducationXpComponent key={k} fields={list} setFields={handlerList} id={Number.parseInt(k)} />
                ))}
            </div>
        </div>
    );
}

export default EducationForm;