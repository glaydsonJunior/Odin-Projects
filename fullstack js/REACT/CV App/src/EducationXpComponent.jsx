function EducationXpComponent({ fields, setFields, id }) {
    function updateName(event) {
        const updatedFields = { ...fields };
        updatedFields[id] = { ...updatedFields[id], name: event.target.value };
        setFields(updatedFields);
    }

    function updateStart(event) {
        const updatedFields = { ...fields };
        updatedFields[id] = { ...updatedFields[id], start: event.target.value };
        setFields(updatedFields);
    }

    function updateEnd(event) {
        const updatedFields = { ...fields };
        updatedFields[id] = { ...updatedFields[id], end: event.target.value };
        setFields(updatedFields);
    }

    return (
        <div className="job-xp-field">
            <div>
                <input
                    type="text"
                    onChange={updateName}
                    placeholder="Institution Name"
                    value={fields[id]?.name || ''}
                />
                <input
                    type="date"
                    onChange={updateStart}
                    value={fields[id]?.start || ''}
                />
                <span>-</span>
                <input
                    type="date"
                    onChange={updateEnd}
                    value={fields[id]?.end || ''}
                />
            </div>
        </div>
    );
}

export default EducationXpComponent;