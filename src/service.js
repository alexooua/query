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

export function getImages(pageNumber, imgNumber) {
  let promise = axios.get(
        `https://repetitora.net/api/JS/Images?page=${pageNumber.value}&count=${imgNumber.value}`)

     return promise.then((response) => {
            return response.data
        }
    )
}
