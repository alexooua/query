// import $ from "jquery";
 import axios from "axios";
//

// export function getImages(pageNumber, imgNumber) {
//
//     let promise = $.ajax(
//         `https://repetitora.net/api/JS/Images?page=${pageNumber.value}&count=${imgNumber.value}`,
//     )
//     return promise
// }
//запрос через axios
export function getImages(pageNumber, imgNumber) {
  let promise = axios.get(
        `https://repetitora.net/api/JS/Images?page=${pageNumber.value}&count=${imgNumber.value}`)
     // возврат ответа
     return promise.then((response) => {
         console.log(response)
            return response.data
        }
    )
}

export function getTasks( ) {
    let promise = axios.get(
        `https://repetitora.net/api/js/Tasks?widgetId=213131&count=7`)

    return promise.then((response) => {
            console.log(response)
            return response.data
        }
    )
}
export function creatTask( title) {
    let promise = axios.post(
        `https://repetitora.net/api/js/Tasks`,
        {
            widgetId: 213131,
            title:title
        })

    return promise.then((response) => {
            console.log(response)
            return response.data
        }
    )
}
export function updateTask( title,id,done) {
    let promise = axios.put(
        `https://repetitora.net/api/js/Tasks`,
        {
            widgetId: 213131,
            title:title,
            taskId:id,
            done:done
        })

    return promise.then((response) => {
            console.log(response)
            return response.data
        }
    )
}export function deleteTask( id) {
    let promise = axios.delete(
        `https://repetitora.net/api/js/Tasks?widgetId=213131&taskId=${id}`)

    return promise.then((response) => {
            console.log(response)
            return response.data
        }
    )
}
