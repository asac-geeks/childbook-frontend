let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 60;
canvas.height = window.innerHeight * 0.6;
let context = canvas.getContext("2d");
context.fillStyle = "white";
var socket;
var to;
context.fillRect(0, 0, canvas.width, canvas.height);
let restore_array = [];
let start_index = -1;
let stroke_color = 'black';
let stroke_width = "2";
let is_drawing = false;

function change_color(element) {
  stroke_color = element.style.background;
}

function change_width(element) {
  stroke_width = element.innerHTML
}

function start(event) {
  is_drawing = true;
  context.beginPath();
  context.moveTo(getX(event), getY(event));
  event.preventDefault();
}

const url = 'http://localhost:8080';
let stompClient;
let selectedUser;
let newMessages = new Map();
function connectToBord(userName) {
    console.log("connecting to bord...")
    let socket = new SockJS(url + '/bord');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log("connected to: " + frame);
        stompClient.subscribe("/topic/drow/" + userName, function (response) {
            let data = JSON.parse(response.body);
            console.log(data);
            console.log("data");
            // if (selectedUser === data.fromLogin) {
            //     render(data.message, data.fromLogin);
            // } else {
            //     newMessages.set(data.fromLogin, data.message);
            //     $('#userNameAppender_' + data.fromLogin).append('<span id="newMessage_' + data.fromLogin + '" style="color: red">+1</span>');
            // }
        });
    });
}

function draw(event) {
  if (is_drawing) {
    context.lineTo(getX(event), getY(event));
    context.strokeStyle = stroke_color;
    context.lineWidth = stroke_width;
    context.lineCap = "round";
    context.lineJoin = "round";
    stompClient.send("/app/bord/"+to , {}, JSON.stringify({
      x: String(getX(event)),
      y:String(getY(event))
  }));
    // socket.on('mouse',
    // function (data){
    //   console.log("hi");
    //   fill(0,0,255);
    //   noStorcke();
    //   ellipse(data.x,data.y,80,80)
    // }
    // )
  }
  
  event.preventDefault();
}
document.getElementById("username-form").addEventListener("click", function(e){
    e.preventDefault();
    connectToBord(document.getElementById("username").value);
    to = document.getElementById("to").value
});
function drawPoints(event) {
  if (is_drawing) {
    context.lineTo(getX(event), getY(event));
    context.strokeStyle = stroke_color;
    context.lineWidth = stroke_width;
    context.lineCap = "round";
    context.lineJoin = "round";
    stompClient.send("/app/bord/"+to , {}, JSON.stringify({
      x: String(getX(event)),
      y:String(getY(event))
  }));
    // socket.on('mouse',
    // function (data){
    //   console.log("hi");
    //   fill(0,0,255);
    //   noStorcke();
    //   ellipse(data.x,data.y,80,80)
    // }
    // )
  }
  
  event.preventDefault();
}

function stop(event) {
  if (is_drawing) {
    context.stroke();
    context.closePath();
    is_drawing = false;
  }
  event.preventDefault();
  restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
  start_index += 1;
}

function getX(event) {
  if (event.pageX == undefined) {return event.targetTouches[0].pageX - canvas.offsetLeft}
  else {return event.pageX - canvas.offsetLeft}
  }


function getY(event) {
  if (event.pageY == undefined) {return event.targetTouches[0].pageY - canvas.offsetTop}
  else {return event.pageY - canvas.offsetTop}
}

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function Restore() {
  if (start_index <= 0) {
    Clear()
  } else {
    start_index += -1;
    restore_array.pop();
    if ( event.type != 'mouseout' ) {
      context.putImageData(restore_array[start_index], 0, 0);
    }
  }
}

function Clear() {
    context.fillStyle = "white";
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);
    restore_array = [];
    start_index = -1;
}