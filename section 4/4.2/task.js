self.addEventListener('message', function(e) {
    var data = e.data;
    switch (data.cmd) {
        case 'average':
            // calculates average based on input
            var result = calculateAverage(data.data);
            self.postMessage(result);
            break;
    
        default:
        self.postMessage('Unknown command');
            break;
    }
});

function calculateAverage(data) {
    var sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    return sum/data.length;
}