
export const appendScript = (scriptToAppend, idNumber) => {
    if(!document.getElementById(idNumber)){
        const script = document.createElement("script");
        script.src = scriptToAppend;
        script.async = false;
        script.id = idNumber;
        document.body.appendChild(script);
    }
}