


function Field({name, lab, type="text", value, handlerName}){

    function updateValue(event){
        handlerName(event.target.value)
    }

    return(
        <div className="form-cv">
            <label htmlFor={name}>{lab}</label>
            <input type={type} className="form-cv-input" id={name} onChange={updateValue} value={value}/>
        </div>
    )
}

export default Field