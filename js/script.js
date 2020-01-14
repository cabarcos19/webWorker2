if (window.Worker) {
    let worker = new Worker('js/worker.js')

    worker.postMessage("A meesage to the Worker")

    worker.addEventListener("message", (e) => {
        console.log(e);
        document.getElementById("workerMessage").innerHTML = e.data;
    })
} else {
  console.log("No Worker")
}

let b1 = document.getElementById("b1")
b1.addEventListener("click", (e) => {
    var value = document.getElementById("number").value;
    console.log(value);
    let fibonacciResult = fibonacci(value)
    let fibP = document.getElementById("fibonacciNumber")
    fibP.innerHTML = "Fibonacci: " + fibonacciResult;
    console.log("Fibonacci: " + fibonacciResult)

})

function fibonacci(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

//####### Animation

class Rectangle {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.stepX = 1;
        this.stepY = 2;
    }
    move(maxWidth, maxHeight) {
        this.x += this.stepX;
        this.y += this.stepY;
        if (this.x+this.width>maxWidth || this.x < 0 ) {
            this.stepX *= -1;
            if (this.x+this.width>maxWidth)
                this.x = maxWidth - this.width;
            else this.x=0;
        }
        if (this.y+this.height>maxHeight || this.y < 0 ) {
            this.stepY *= -1;
            if (this.y+this.height>maxHeight)
                this.y = maxHeight - this.height;
            else this.y=0;
        }
    }

    draw(context, maxWidth, maxHeight) {
        this.move(maxWidth,maxHeight)
        context.fillRect(this.x, this.y, this.width, this.height)
    }

}

let rectangle = new Rectangle(0,0,20,20);

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let canvasWidth = canvas.getAttribute("width");
let canvasHeight = canvas.getAttribute("height");
//add
// bouncing, so that the rectangle can not leave our canvas
// add ten more object
console.log(canvasWidth+"-"+canvasHeight)
function animate() {
    context.clearRect(0,0,canvasWidth,canvasHeight);
    rectangle.draw(context,canvasWidth, canvasHeight)
    requestAnimationFrame(animate);
}
animate();




