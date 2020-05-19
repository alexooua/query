import './index.css';
import {getImages, getTasks} from './service'

const imgNumber=document.querySelector("#img-number")
const pageNumber = document.querySelector("#page-number")
const clickMeButton = document.querySelector('#click-me')
const getTasksButton = document.querySelector('#get-tasks')


clickMeButton.addEventListener(
    'click',
    ()=>{const promise = getImages(pageNumber,imgNumber)
        promise.then(onImgReceived)
    })

getTasksButton.addEventListener(
    'click',
    ()=>{const promise = getTasks (pageNumber,imgNumber)
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
    tasks.forEach(task => {
        const li = document.createElement('li')
        li.innerHTML=task.title
        document.querySelector('#tasks-result').appendChild(li)
    })
}


