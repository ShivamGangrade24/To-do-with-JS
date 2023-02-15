

let form = document.querySelector("form")
let input = document.querySelector("input")
let listGroup = document.querySelector("ul")

form.addEventListener("submit" , saveTodo )

function saveTodo(e){
    e.preventDefault()
    let newText = input.value
    let newLi = document.createElement("li")
    newLi.innerText = newText
    newLi.className = "list-group-item rounded-0"
    let delBtn = document.createElement("button")
     delBtn.innerText = "Delete"
     delBtn.className = "btn btn-danger btn-sm float-end rounded-0"
     newLi.appendChild(delBtn)
    listGroup.appendChild(newLi)
    form.reset()
}

 function DeleteToDo(e){
    if(e.target.className.includes("btn-danger")){
        let li = e.target.parentElement
         listGroup .removeChild(li)



 }
 }


listGroup.addEventListener("click",DeleteToDo)




 