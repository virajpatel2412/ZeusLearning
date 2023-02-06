let form = document.getElementById("user-form")

function validateForm(e){
    // e.preventDefault();
    let name = form["name"]
    let comment = form["comments"]
    let xender = form["xender"]

    if(name.value == "" || comment.value == "" || xender.value ==""){
        alert("All fields are compulsory");
        if(name.value == "")
            name.focus();
        else if(comment.value == "")
            comment.focus();
        else(xender.value == "")
            xender.focus();
    }
}