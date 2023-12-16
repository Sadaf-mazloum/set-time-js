function createCounter (container, start, end, duration) {
    var range = end - start;
    var current = start;
    var stepTime = 1000 / range;
    var span = document.createElement ('span');
    span.className = 'num_tiles';
    container.appendChild (span);
    var timer = setInterval (function () {
    current += 1;
    span.innerHTML = current;
    if (current == end) {
    clearInterval (timer);
    }
    }, stepTime);
    }
    
    var container1 = document.getElementById ('div1');
    var container2 = document.getElementById ('div2');
    var container3 = document.getElementById ('div3');
    

    createCounter (container1, 0, 15, 1000); 
    createCounter (container2, 0, 260, 1000); 
    createCounter (container3, 0, 27, 1000); 
