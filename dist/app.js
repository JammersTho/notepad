function generateRandomId() {
    return '#' + Math.random().toString(36).substr(2, 7);
}
function main() {
    var appComponent = document.getElementById('app');
    setInterval(function () {
        // if(app) {
        //app.innerHTML = generateRandomId()
        var existingNoteList = localStorage.getItem('noteAppList');
        if (!existingNoteList) {
            var noteList = [];
            localStorage.setItem('noteAppList', JSON.stringify(noteList));
        }
        else {
            drawList();
        }
        // id ticker
        // var el = document.getElementById(ComponentClass.id)
        // const cmp = new ComponentClass()
        // cmp.onInit(el);
        appComponent.innerHTML = generateRandomId();
        // }
    }, 1000);
}
function drawList() {
    //document.getElementById("noteList").innerHTML = localStorage.getItem("noteAppList")
    //get the current items
    var notes = JSON.parse(localStorage.getItem("noteAppList"));
    //for each item build an li>span>spanspan
    for (var _i = 0, notes_1 = notes; _i < notes_1.length; _i++) {
        var n = notes_1[_i];
        var innerSpans = "<span>" + n.noteTitle + "</span><span class=\"mdl-list__item-text-body\">" + n.noteContent + "</span>";
        var listItem = "<li class=\"mdl-list__item mdl-list__item--three-line\"><span class=\"mdl-list__item-primary-content\">" + innerSpans + "</span><span class=\"mdl-list__item-secondary-content\"><a class=\"mdl-list__item-secondary-action\" href=\"#\"><i class=\"material-icons\">star</i></a></span></li>";
        var allListItems = allListItems + listItem;
    }
    //get the notes display ul and insert the list of li>span>spanspan 
    document.getElementById("notesDisplay").innerHTML = allListItems;
}
function saveNote() {
    console.log("Save Note clicked");
    //Get input and create a Note object
    var inputNote = {
        noteTitle: document.getElementById('noteTitleInput').value,
        noteContent: document.getElementById('noteContentInput').value
    };
    //Get the notelist and add the input Note obj
    var noteList = JSON.parse(localStorage.getItem("noteAppList"));
    console.log("Current List = " + JSON.stringify(noteList));
    console.log("note to be added = " + JSON.stringify(inputNote));
    noteList.push(inputNote);
    console.log("List after push = " + JSON.stringify(noteList));
    //Overwrite list with updated list
    localStorage.setItem("noteAppList", JSON.stringify(noteList));
    //Clear the input boxes
    clearForm();
    drawList();
}
function clearForm() {
    document.getElementById("noteContentInput").value = "";
    document.getElementById("noteTitleInput").value = "";
}
