function Timer(counter) {
    console.log(counter);
    counter++;
    return counter;
}
var counter = 0;
setInterval(function () {
    counter = Timer(counter);
}, 1000);
