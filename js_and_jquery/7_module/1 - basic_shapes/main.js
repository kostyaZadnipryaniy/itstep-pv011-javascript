const cvs = document.getElementById('cvs')

let ctx = null

function Figure(x, y) {
    this.x = x 
    this.y = y
}

function Rectangle(x, y, w, h) {
    this.width = w
    this.height = h 
    Figure.call(this, x, y)

    this.drawFilled = function(color = 'black') {
        ctx.fillStyle = color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    this.drawStroked = function(color = 'black', strokeWidth = 3) {
        ctx.strokeStyle = color 
        ctx.lineWidth = strokeWidth
        ctx.strokeRect(this.x, this.y, this.width, this.height)
    }

    this.drawStrokedAndFilled = function(bgColor = 'black', strokeColor = 'black', strokeWidth = 3) {
        this.drawStroked(strokeColor, strokeWidth)
        this.drawFilled(bgColor)
    }

    this.drawAndRotate = function(degree, bgColor = 'black') {

        const x = this.x + this.width / 2
        const y = this.y + this.height / 2

        ctx.save()

        ctx.translate(x, y)
        ctx.rotate(degree * Math.PI / 180)
        ctx.translate(-x, -y)

        ctx.fillStyle = bgColor
        ctx.fillRect(this.x, this.y, this.width, this.height)

        ctx.restore()
    }
}

function Circle(x, y, r) {
    this.radius = r
    Figure.call(this, x, y)

    this.drawFilled = function(color = 'black') {
        ctx.fillStyle = color
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
    }

    this.drawStroked = function(color = 'black', strokeWidth = 3) {
        ctx.strokeStyle = color 
        ctx.lineWidth = strokeWidth
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.stroke()
    }
}

function Triangle(x, y, cathetus) {
    this.cathetus = cathetus
    Figure.call(this, x, y)

    this.drawFilled = function(color = 'black') {
        ctx.save()

        ctx.beginPath()

        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x + this.cathetus, this.y + this.cathetus)
        ctx.lineTo(this.x, this.y + this.cathetus)

        ctx.fillStyle = color
        ctx.fill()

        ctx.restore()
    }
}


if (cvs.getContext) {
    
    // draw scene
    ctx = cvs.getContext('2d')
    ctx.fillRect(0, 0, cvs.width, cvs.height)

    // draw filled rectangle
    // new Rectangle((cvs.width - 150) / 2, (cvs.height - 100) / 2, 150, 100).drawFilled('white')

    // draw stroked rectangle
    // new Rectangle((cvs.width - 150) / 2, (cvs.height - 100) / 2, 150, 100).drawStroked('white')

    // draw stroked rectangle and fill it.
    // new Rectangle((cvs.width - 150) / 2, (cvs.height - 100) / 2, 150, 100).drawStrokedAndFilled('orange', 'white', 10)

    // draw filled rectangle and then rotate it.
    // new Rectangle((cvs.width - 150) / 2, (cvs.height - 100) / 2, 150, 100).drawAndRotate(0, 'orange')

    // draw filled circle
    // new Circle(cvs.width / 2, cvs.height / 2, 50).drawFilled('red')

    // draw stroked circle
    // new Circle(cvs.width / 2, cvs.height / 2, 50).drawStroked('red')

    // draw filled triangle
    // new Triangle((cvs.width - 150) / 2, (cvs.height - 150) / 2, 150).drawFilled('#00BFFF')
}