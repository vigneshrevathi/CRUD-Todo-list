let tasks = []
let inputElement = document.getElementById("input");
let resultElement = document.getElementById("result");

document.getElementById("button").addEventListener("click",function(){
    let tasksName = inputElement;
    let tasksObject = {name:inputElement.value,is_completed:false}
    tasks.push(tasksObject);
    showTasks()
})

function showTasks(){
    resultElement.innerHTML = ''

    tasks.forEach(function(tasks,index){
        let divElement = document.createElement("div");
        let h1Element = document.createElement("h1");
        let h3Element = document.createElement("h3");

        h1Element.innerHTML += tasks.name

        h1Element.onclick = function(){
            completeTasks(index)
        }

        if (tasks.is_completed) {
            h1Element.style.textDecoration = "line-through"
            
        }

        tasks.is_completed ? h3Element.innerHTML += "<i>you have completed your task.</i>" : " none"

        let deleteElement = document.createElement("button")
        deleteElement.innerText += "DELETE"
        deleteElement.onclick = function(){
            deleteTasks(index)
        }


        divElement.appendChild(h1Element)
        divElement.appendChild(h3Element)
        divElement.appendChild(deleteElement)
        resultElement.appendChild(divElement)

    })

}

function completeTasks(index){
    if (tasks[index].is_completed) {
        tasks[index].is_completed = false
        
    } else {
        tasks[index].is_completed = true
        
    }
    showTasks()

}
function deleteTasks(index){
    tasks.splice(index,1)
    showTasks()
}