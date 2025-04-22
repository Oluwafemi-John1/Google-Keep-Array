const allNotes = []

const addNote = () => {
    if(note.value === '') {
        alert('Fill in something, please')
    } else {
        allNotes.push(note.value)
        console.log(allNotes);
        note.value = ''
        displayNotes()
    }
}

const deleteNote = (index) => {
    // alert('You go delete')
    // console.log(index);
    const confirmMsg = confirm('Are you sure you want to delete?')
    console.log(confirmMsg);
    if(confirmMsg == true) {
        allNotes.splice(index, 1)
        displayNotes()
    } else {
        displayNotes()
    }
}

const displayNotes = () => {
    show.innerHTML = ''
    allNotes.map((note, i)=>{
        show.innerHTML += `
            <div>
                <p>${i+1}. ${note}</p>
                <button>Edit</button>
                <button onclick="deleteNote(${i})">Delete</button>
            </div>
        `
    })
}