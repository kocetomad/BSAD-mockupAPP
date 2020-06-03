var notes = [{id: 0, time_of_note: '15:00', description: 'some text goes here. some text goes here'}];

function returnToHome() {
    location.href = "../../index.html";
}

function addNote(newNoteTime, newNoteDetails) {
    //get last note ID
    let lastNoteID = notes[notes.length - 1].id;
    let newNoteID = lastNoteID + 1;

    //prepare the innerHTML for the note template
    let newNoteInnerHTML = "                <div class=\"card-body\" id=\"" + "note" + newNoteID + "\">\n" +
        "                    <table class=\"table table-striped table-hover\">\n" +
        "                        <thead>\n" +
        "                        <tr class=\"table-primary\">\n" +
        "                            <th style=\"width: 10%;\" scope=\"col\">ID</th>\n" +
        "                            <th style=\"width: 10%;\" scope=\"col\">Time of Note</th>\n" +
        "                            <th style=\"width: 80%;\" scope=\"col\">Details</th>\n" +
        "                        </tr>\n" +
        "                        </thead>\n" +
        "                        <tbody>\n" +
        "                        <tr>\n" +
        "                            <th scope=\"row\">" + newNoteID + "</th>\n" +
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
    let newNoteTime = document.getElementById("newNoteTime").value;
    let newNoteDescription = document.getElementById("newNoteDescription").value;

    addNote(newNoteTime, newNoteDescription);
}

document.addEventListener("DOMContentLoaded", function () {
    // Execute after page has loaded completely
    addNote("11:11", "details1. details1");
    addNote("11111111:11111111", "details122222. details12222");
});
