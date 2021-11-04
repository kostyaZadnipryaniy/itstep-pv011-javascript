const cvs = document.getElementById('cvs')

let ctx = null

function Figure(x, y, w, h, bgColor = '#ffffff', strokeColor = '#000000', strokeWidth = 1) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.bgColor = bgColor;
    this.strokeColor = strokeColor;
    this.strokeWidth = strokeWidth;
}

function Rectangle(...args) {
    Figure.call(this, ...args)

    this.drawFilled = function () {
        ctx.fillStyle = this.bgColor
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    this.drawStroked = function () {
        ctx.strokeStyle = this.strokeColor
        ctx.strokeRect(this.x, this.y, this.width, this.height)
    }

    this.drawStrokedAndFilled = function () {
        ctx.lineWidth = this.strokeWidth
        this.drawFilled()
        this.drawStroked()
    }

    this.drawRotated = function (degree = 0) {
        const x = this.x + this.width / 2
        const y = this.y + this.height / 2

        const angle = degree * Math.PI / 180 //in rads

        ctx.fillStyle = this.bgColor
        ctx.translate(x, y)
        ctx.rotate(angle)
        ctx.translate(-x, -y)
        ctx.fillRect(this.x, this.y, this.width, this.height)

    }
}

function Circle(r = 10, ...args) {
    this.radius = r
    Figure.call(this, ...args)

    this.draw = function() {
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    }

    this.drawFilled = function () {
        ctx.fillStyle = this.bgColor
        this.draw()
        ctx.fill()
    }

    this.drawStroked = function() {
        ctx.lineWidth = this.strokeWidth
        ctx.strokeStyle = this.strokeColor
        this.draw()
        ctx.stroke()
    }   
}

function Triangle(c, ...args) {
    this.cathetus = c
    Figure.call(this, ...args)

    this.drawFilled = function() {
        ctx.fillStyle = this.bgColor

        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x + this.cathetus, this.y + this.cathetus)
        ctx.lineTo(this.x, this.y + this.cathetus)
        ctx.fill()
    }
}

if (cvs.getContext) {
    ctx = cvs.getContext('2d')
    ctx.fillRect(0, 0, cvs.width, cvs.height)

    // draw filled rectangle

    // const rect1 = new Rectangle((cvs.width - 150)/2, (cvs.height - 100)/2, 150, 100, 'orange', 'red', 5)
    // rect1.drawFilled()
    // draw stroked rectangle
    // rect1.drawStroked()

    // draw stroked and filled
    // rect1.drawStrokedAndFilled()
    // rect1.drawRotated(45)

    // const circle1 = new Circle(10, (cvs.width) / 2, (cvs.height) / 2, null, null, 'orange', 'red', 5)
    // circle1.drawStroked()
    // const triangle1 = new Triangle(150, (cvs.width - 150) / 2, (cvs.height - 150) / 2, null, null, 'orange', 'red', null)
    // triangle1.drawFilled()
    ctx.font = '40px monospace'
    ctx.fillStyle = 'purple'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'center'

    const txt = 'hell js'

    const offset = ctx.measureText(txt).width
    ctx.fillText(txt, (cvs.width - offset)/2, cvs.height/2)
}