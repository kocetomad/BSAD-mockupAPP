var notes = [{id: 0, time_of_note: '15:00', description: 'some text goes here. some text goes here'}];

function returnToHome() {
    location.href = "../../index.html";
}

function addNote(newNoteTime, newNoteDetails, newNoteUser) {
    //get last note ID
    let lastNoteID = notes[notes.length - 1].id;
    let newNoteID = lastNoteID + 1;

    

    //prepare the innerHTML for the note template
    let newNoteInnerHTML = "                <div class=\"card-body\" id=\"" + "note" + newNoteID + "\">\n" +
        "                    <table class=\"table table-striped table-hover\">\n" +
        "                        <thead>\n" +
        "                        <tr class=\"table-primary\">\n" +
        "                            <th style=\"width: 10%;\" scope=\"col\">ID</th>\n" +
        "                            <th style=\"width: 10%;\" scope=\"col\">User</th>\n" +
        "                            <th style=\"width: 10%;\" scope=\"col\">Time of Note</th>\n" +
        "                            <th style=\"width: 70%;\" scope=\"col\">Details</th>\n" +
        "                        </tr>\n" +
        "                        </thead>\n" +
        "                        <tbody>\n" +
        "                        <tr>\n" +
        "                            <th scope=\"row\">" + newNoteID + "</th>\n" +
        "                            <td>" + newNoteUser + "</td>\n" +
        "                            <td>" + newNoteTime + "</td>\n" +
        "                            <td>" + newNoteDetails + "</td>\n" +
        "                        </tr>\n" +
        "                        </tbody>\n" +
        "                    </table>\n" +
        "                </div>\n"

    let notesElement = document.getElementById("notes")

    notes.push({id:newNoteID, time_of_note: newNoteTime, description: newNoteDetails});

    notesElement.insertAdjacentHTML("beforeend", newNoteInnerHTML);
}

function sendNoteData() {
    var today = new Date();
    var date = '0'+today.getDate()+'/0'+(today.getMonth()+1)+'/'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    let newNoteTime = dateTime;
    let newNoteDescription = document.getElementById("newNoteDescription").value;

    addNote(newNoteTime, newNoteDescription, "Juan_Reyes");
}

function updatePriorities() {
    document.getElementById("priorityLevel").value = "P3";
    document.getElementById("severityLevel").value = "S3";
    document.getElementById("impactLevel").value = "IMP3";
    document.getElementById("request").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    // Execute after page has loaded completely
    addNote("27/05/2020 13:20:04", "Upgrading to Priority 1 due to customer-facing nature of incident.", "David_Davison");
    addNote("27/05/2020 13:45:04", "Have identified the fault, passing to a technician to implement fix.", "Michelle_Ford");
});
