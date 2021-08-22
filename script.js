function increment() {
    let counter = document.getElementById("count");
    let currentCount = counter.innerText;
    let updatedCount = parseInt(currentCount) + 1;
    counter.innerHTML = updatedCount;
}


function decrement() {
    let counter = document.getElementById("count");
    let currentCount = counter.innerText;
    let updatedCount = parseInt(currentCount) - 1;
    counter.innerHTML = updatedCount;
}


function reset() {
    let counter = document.getElementById("count");
    counter.innerHTML = 0;
}
