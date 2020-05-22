import './index.css';
import {creatTask, deleteTask, getImages, getTasks, updateTask} from './service'
//creat const and events
const imgNumber=document.querySelector("#img-number")
const pageNumber = document.querySelector("#page-number")
const clickMeButton = document.querySelector('#click-me')
const getTasksButton = document.querySelector('#get-tasks')

// creatTask('Learn html').then(data=>{})
//     deleteTask(
//           "c97de32f-b2e3-422b-a275-f20d76afb781"
//     ).then(data=>{})
    updateTask(
        "Yes as",
         "c43a2335-614b-43ed-8aec-99dea9323522",
        true
    ).then(data=>{})

//events
clickMeButton.addEventListener(
    //событие
    'click',
    //вызываем запрос на событие
    ()=>{const promise = getImages(pageNumber,imgNumber)
        promise.then(onImgReceived)
    })

getTasksButton.addEventListener(
    'click',
    ()=>{const promise = getTasks ( )
        promise.then(onTasksReceived)
    })

function onImgReceived (arr) {

    arr.forEach(el => {
        const img = document.createElement('img')
        img.src = el.thumbnail
        document.querySelector('#result').appendChild(img)
    })
}
function onTasksReceived (tasks) {
    //clean list
    const result=document.querySelector('#tasks-result')
    result.innerHTML=''
    tasks.forEach(task => {
        const li = document.createElement('li')
        li.innerHTML=task.title

        //добавлем в li
        result.appendChild(li)
    })
}


