const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all eventlisteners
loadAllEventlisteners();

function loadAllEventlisteners(){

    //Add task event
    form.addEventListener('submit', addTask);


}

function addTask(e){
    if(taskInput.value === ''){
        alert('Add task')
    }

    //create li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item'
    // create a text node and append to li
    li.appendChild(document.createTextNode(taskInput.value))
    //create link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append link to li
    li.appendChild(link);
    //append li to ul
    taskList.appendChild(li);
    //clear input
    taskInput.value = '';
    


    e.preventDefault();
}