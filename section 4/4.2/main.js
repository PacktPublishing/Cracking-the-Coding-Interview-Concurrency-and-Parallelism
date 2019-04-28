var worker = new Worker('task.js');
function start() {
    
    worker.postMessage({
        'cmd': 'average',
        'data': [1,2,3,4]
    });
    
    worker.addEventListener('message', function(e){
        console.log(e.data);
    });
}
