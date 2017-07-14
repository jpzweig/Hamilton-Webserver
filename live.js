function move1() {
    var inputTime = 30
    var elem = document.getElementById("load1bar");
    var width = 0;
    var id = setInterval(frame, 1000);
    function frame() {
        if (width >= 97) {
            clearInterval(id);
        } else {
            width = width + (100/inputTime);
            elem.style.width = width + '%';
        }
    }
}

function move2() {
    var inputTime = 30
    var elem = document.getElementById("load2bar");
    var width = 0;
    var id = setInterval(frame, 1000);
    function frame() {
        if (width >= 97) {
            clearInterval(id);
        } else {
            width = width + (100/inputTime);
            elem.style.width = width + '%';
        }
    }
}

function move3() {
    var inputTime = 30
    var elem = document.getElementById("load3bar");
    var width = 0;
    var id = setInterval(frame, 1000);
    function frame() {
        if (width >= 97) {
            clearInterval(id);
        } else {
            width = width + (100/inputTime);
            elem.style.width = width + '%';
        }
    }
}

function move4() {
    var inputTime = 30
    var elem = document.getElementById("load4bar");
    var width = 0;
    var id = setInterval(frame, 1000);
    function frame() {
        if (width >= 97) {
            clearInterval(id);
        } else {
            width = width + (100/inputTime);
            elem.style.width = width + '%';
        }
    }
}
 
function startTimer1(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
 
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;
 
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
 
        display.textContent = minutes + ":" + seconds;
 
        if (diff <= 0) {
            start = Date.now() + 1000;
        }
    };
    timer();
    setInterval(timer, 1000);
}

function startTimer2(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
 
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;
 
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
 
        display.textContent = minutes + ":" + seconds;
 
        if (diff <= 0) {
            start = Date.now() + 1000;
        }
    };
    timer();
    setInterval(timer, 1000);
}

function startTimer3(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
 
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;
 
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
 
        display.textContent = minutes + ":" + seconds;
 
        if (diff <= 0) {
            start = Date.now() + 1000;
        }
    };
    timer();
    setInterval(timer, 1000);
}

function startTimer4(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
 
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;
 
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
 
        display.textContent = minutes + ":" + seconds;
 
        if (diff <= 0) {
            start = Date.now() + 1000;
        }
    };
    timer();
    setInterval(timer, 1000);
}
 
function setTime1(inputTime) {
    var inputTime = 30,
        display = document.querySelector('#time1');
    startTimer1(inputTime, display);
};
function setTime2(inputTime) {
    var inputTime = 30,
        display = document.querySelector('#time2');
    startTimer2(inputTime, display);
};
function setTime3(inputTime) {
    var inputTime = 30,
        display = document.querySelector('#time3');
    startTimer3(inputTime, display);
};
function setTime4(inputTime) {
    var inputTime = 30,
        display = document.querySelector('#time4');
    startTimer4(inputTime, display);
};