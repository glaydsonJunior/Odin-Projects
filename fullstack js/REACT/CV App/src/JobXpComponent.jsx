function JobXpComponent({ fields, setFields, id }) {
    function updateRole(event) {
        const updatedFields = { ...fields };
        updatedFields[id]['role'] = event.target.value;
        setFields(updatedFields);
    }

    function updateDetails(event) {
        const updatedFields = { ...fields };
        updatedFields[id]['details'] = event.target.value;
        setFields(updatedFields);
    }

    function updateStart(event) {
        const updatedFields = { ...fields };
        updatedFields[id]['start'] = event.target.value;
        setFields(updatedFields);
    }

    function updateEnd(event) {
        const updatedFields = { ...fields };
        updatedFields[id]['end'] = event.target.value;
        setFields(updatedFields);
    }

    return (
        <div className="job-xp-field">
            <div>
                <input
                    type="text"
                    onChange={updateRole}
                    placeholder="Role"
                    value={fields[id]?.role || ''}
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
            <textarea
                onChange={updateDetails}
                placeholder="Details"
                value={fields[id]?.details || ''}
            ></textarea>
        </div>
    );
}

export default JobXpComponent;