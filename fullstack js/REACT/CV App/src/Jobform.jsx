import { useState } from "react";
import JobXpComponent from "./JobXpComponent.jsx";

function JobForm({ list, handlerList }) {
    const [counter, setCounter] = useState(Object.keys(list).length);

    function addName() {
        const newId = counter;
        const updatedList = { ...list };
        updatedList[newId] = { role: "", id: newId, details: "", start: "", end: "" };
        handlerList(updatedList);
        setCounter(newId + 1);
    }

    return (
        <div>
            <button onClick={addName} className="add-button">Add Professional Experience</button>
            <div>
                {Object.keys(list).map(k => (
                    <JobXpComponent key={k} fields={list} setFields={handlerList} id={Number.parseInt(k)} />
                ))}
            </div>
        </div>
    );
}

export default JobForm;