function generateRandomId() {
    return '#' + Math.random().toString(36).substr(2, 7)
}

function main() {
    var appComponent = document.getElementById('app')
    setInterval(function() {
        // if(app) {
            //app.innerHTML = generateRandomId()

            var existingNoteList = localStorage.getItem('noteAppList')   
            // if (!existingNoteList)
            // {
            //     var noteList: Note[] = [];
            //     localStorage.setItem('noteAppList', JSON.stringify(noteList))
            // }
            // else
            // {
            //     drawList()
            // }
            // id ticker
            // var el = document.getElementById(ComponentClass.id)
            // const cmp = new ComponentClass()
            // cmp.onInit(el);
            appComponent.innerHTML = generateRandomId();
        // }
    }, 1000)
}