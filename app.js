const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// const notes = ['task num 1', 'task num 2']

// function render(){
//     // for (let i = 0; i < notes.lenght; i++){
//     //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate (notes[i]) )
//     // }
//     for (let ntoe of notes){
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate (ntoe) )
//     }
   
// }

// render()

// createBtn.onclick = function(){
//     if (inputElement.value.lenght === 0 ){
//         return
//     }

//     listElement.insertAdjacentHTML(
//         'beforeend',
//             getNoteTemplate(inputElement.value)
//          )

//     inputElement.value = ''
// }

// function getNoteTemplate(title){
//     return ` 
//     <li
//     class="list-group-item d-flex justify-content-between align-items-center"
// >
//     <span>${title}</span>
//     <span>
//     <span class="btn btn-small btn-success">&check;</span>
//     <span class="btn btn-small btn-danger">&times;</span>
//     </span>
// </li>
// `
// }

    const notes = [{
        title:'task num 1', 
        completed: false,
    },
    {
        title:'task num 2', 
        completed: true,
    }
    ]

    function render() {
        listElement.innerHTML = ""
        if (notes.length === 0) {
            listElement.innerHTML = '<p>EMPTY</p>'
        }
        for (let i = 0; i < notes.length; i++){
            listElement.insertAdjacentHTML('beforeend', getNoteTemplate (notes[i], i) )
        }   
    }
    render()

    createBtn.onclick = function(){
        if (inputElement.value.length === 0) {
            return
        }
        const newNote = {
            title: inputElement.value,
            completed: false,
        }
        notes.push(newNote)
        render()
        inputElement.value = ''
    }

    listElement.onclick = function (event) {
        if (event.target.dataset.index) {
            const index = parseInt(event.target.dataset.index)
            const type = event.target.dataset.type

            if (type ==='toggle') {
               notes[index].completed = !notes[index].completed
            } else if (type ==="remove"){
                notes.splice(index, 1)
            }
            render()
        }
        // console.log(event.target.dataset.index)
    }

    function getNoteTemplate(note, index){
        return ` 
        <li
        class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
        <span>
        <span class="btn btn-small btn-${
            note.completed ? 'warning' : 'success'
        }" data-index = "${index}" data-type = "toggle">&check;</span>
        <span class="btn btn-small btn-danger" data-type="remove"
         data-index="${index}">&times;</span>
        </span>
    </li>
    `
    }

