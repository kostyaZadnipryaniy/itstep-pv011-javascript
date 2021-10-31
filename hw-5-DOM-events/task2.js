let element = document.querySelector(".hideable")

//css left(making text bold with hoover)
element.addEventListener("click", (e) => {
    console.log(e.target.childNodes[1])
    if (e.target.childNodes[1] != undefined)
    {
        console.log(e.target.childNodes[1])
        if (e.target.childNodes[1].style.display == "none") {
            e.target.childNodes[1].style.display = "block"
        } else {
            e.target.childNodes[1].style.display = "none"
        }
    }
})