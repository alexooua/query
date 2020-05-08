import './index.css';
import {getImages} from './service'

const imgNumber=document.querySelector("#img-number")
const pageNumber = document.querySelector("#page-number")
const clickMeButton = document.querySelector('#click-me')

clickMeButton.addEventListener(
    'click',
    ()=>{const promise = getImages(pageNumber,imgNumber)

        promise.then(onDataReceived)
    })

function onDataReceived (arr) {

    arr.forEach(el => {
        const img = document.createElement('img')
        img.src = el.thumbnail
        document.querySelector('#result').appendChild(img)
    })
}


