let fnameSort = document.querySelector(".clickableFirstname")
let lnameSort = document.querySelector(".clickableLastname")
let ageSort = document.querySelector(".clickableAge")
let companySort = document.querySelector(".clickableCompany")

let arrOfArrsOfTr = [
    [...document.querySelectorAll(".fname")],
    [...document.querySelectorAll(".lname")],
    [...document.querySelectorAll(".age")],
    [...document.querySelectorAll(".company")]
] 

function mySort(paramArrOfArrs, key) { //key is number 0-3 of arrays (0,1,2,3)
    for (let j= 0; j < paramArrOfArrs[key].length; j++) {
        for (let i = 0; i < paramArrOfArrs[key].length - 1; i++) {
            let temp
            if (paramArrOfArrs[key][i].innerHTML > paramArrOfArrs[key][i + 1].innerHTML) {
                 for (let indexNumberOfTd = 0;indexNumberOfTd < paramArrOfArrs.length; indexNumberOfTd++) {
                temp = paramArrOfArrs[indexNumberOfTd][i].innerHTML
                paramArrOfArrs[indexNumberOfTd][i].innerHTML = paramArrOfArrs[indexNumberOfTd][i + 1].innerHTML
                paramArrOfArrs[indexNumberOfTd][i + 1].innerHTML = temp
                 }
            }
        }
    }
}



fnameSort.addEventListener("click", (e) => {
    mySort(arrOfArrsOfTr,0)
})

lnameSort.addEventListener("click", (e) => {
    mySort(arrOfArrsOfTr, 1)
})

ageSort.addEventListener("click", (e) => {
    
    mySort(arrOfArrsOfTr, 2)
})

companySort.addEventListener("click", (e) => {

    mySort(arrOfArrsOfTr, 3)
})

