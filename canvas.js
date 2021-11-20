
let colorOfFigure = "rgb(0, 0, 0)"
let formFigure = null
let selectFigure = document.getElementsByName('figur')
let col = document.getElementsByClassName('color')
let downX = null
let downY = null
let upX = null
let upY = null


const canv = document.getElementById('canvas')
const ctx = canv.getContext("2d")
    
    let makeRect = (x,y,h) => {
        ctx.beginPath()
        ctx.clearRect(0, 0, canv.width, canv.height)
        ctx.moveTo(x,y)
        ctx.lineTo(x+h/2,y)
        ctx.lineTo(x+h/2,y+h/2)
        ctx.lineTo(x,y+h/2)
        ctx.closePath()   
        ctx.fill()    
    }

    let makeCirс = (x,y,h) => {
        ctx.clearRect(0, 0, canv.width, canv.height)
        ctx.beginPath()
        ctx.arc(x, y, h, -Math.PI, Math.PI)
        ctx.fill()
        ctx.closePath()   
    }

    let makeRoomb = (x,y,h) => {
        ctx.clearRect(0, 0, canv.width, canv.height)
        ctx.beginPath()
        ctx.moveTo(x,y)
        ctx.lineTo(x+h,y+h)
        ctx.lineTo(x,y+h*2)
        ctx.lineTo(x-h,y+h)
        ctx.lineTo(x,y)
        ctx.fill()    
    }
    
    let makeTri = (x,y,h) => {
        ctx.clearRect(0, 0, canv.width, canv.height)
        ctx.beginPath()
        ctx.moveTo(x,y)
        ctx.lineTo(x+h/2,y+h)
        ctx.lineTo(x-h/2,y+h)
        ctx.closePath()
        ctx.fill()
    }

    const figureFunc = [ makeRect, makeCirс, makeRoomb, makeTri ]
    
    document.addEventListener('mouseover', () =>{
    for (const i of selectFigure) {
        i.addEventListener('change', () => {formFigure = i.value}) 
    }
    for (const i of col) {
        i.addEventListener('click', () => {
            colorOfFigure = window.getComputedStyle(i).backgroundColor
        })
    }
    console.log(formFigure)
    console.log(colorOfFigure)
})
    canv.addEventListener('mousedown', (e) => {
    for(let i = 0; i<col.length; i++)
    downX = e.clientX
    downY = e.clientY
})
    canv.addEventListener('mouseup', (e) => {
        upX = e.clientX
        upY =e.clientY
        ctx.clearRect(0, 0, canv.width, canv.height)
        ctx.fillStyle = colorOfFigure
        const v = Math.sqrt(Math.pow((upX-downX),2) + Math.pow((upY-downY),2) )
        figureFunc[formFigure](downX, downY, v)
    } )


    


