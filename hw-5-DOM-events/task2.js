let element = document.querySelector(".hideable")

//css left(making text bold with hoover)
element.addEventListener("click", (e) => {
    
    if (e.target.childNodes[1] != undefined)
    {
    
        if (e.target.childNodes[1].style.display == "none") {
            e.target.childNodes[1].style.display = "block"
        } else {
            e.target.childNodes[1].style.display = "none"
        }
    }
})