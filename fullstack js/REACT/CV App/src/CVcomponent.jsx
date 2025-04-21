import React from 'react';

function CV({ valueName, valueEmail, valuePhone, jobXp, educationXp, editer }) {
    const getValuesFromDict = (dict) => Object.values(dict);

    return (
        <div className="cv-container">
            <h1 className="cv-name">{valueName}</h1>
            <h2 className="cv-contact">{valueEmail} | {valuePhone}</h2>
            <div className="cv-section">
                <h3>Experiência Profissional</h3>
                {getValuesFromDict(jobXp).map((v, index) => (
                    <div key={index} className="cv-job">
                        <p className="cv-role">{v.role}</p>
                        <p className="cv-details">{v.details}</p>
                        <p className="cv-dates">{v.start} - {v.end}</p>
                    </div>
                ))}
            </div>
            <div className="cv-section">
                <h3>Educação</h3>
                {getValuesFromDict(educationXp).map((v, index) => (
                    <div key={index} className="cv-education">
                        <p className="cv-edu-name">{v.name}</p>
                        <p className="cv-edu-dates">{v.start} - {v.end}</p>
                    </div>
                ))}
            </div>
            <button className="cv-edit-button" onClick={editer}>EDIT</button>
        </div>
    );
}

export default CV;