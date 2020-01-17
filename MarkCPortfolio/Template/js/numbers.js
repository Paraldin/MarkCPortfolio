var fiveNums = [];
let total = 0;
let indexNums = document.querySelectorAll('.number')
//let smallestNum = document.querySelector('#smallestNum')

function goGoGo(){
fiveNums = [];

    for(let i = 0; i < 5; i++){
        if(indexNums[i].value != '') {fiveNums[i] = +indexNums[i].value;}
    }

    if (fiveNums.length != 0) updateNums();
}

function clearBoxes() {
    indexNums.forEach((a) => a.value = "");
}

function smallest(){
    return Math.min(...fiveNums);
}

function largestNum(){
    return Math.max(...fiveNums);
}

function addTotal(){
    total = 0;
    for (let i = 0; i < fiveNums.length; i++) {
        total = total + fiveNums[i];
    }
    return total;
}

function averageTotal(){
    return total / fiveNums.length;
}

function multiplyNums(){
    let productNums = 1;
    for (let i = 0; i < fiveNums.length; i++){
        productNums = productNums * fiveNums[i]
    }
    return productNums;
}

function updateNums(){
    smallestNum.textContent = smallest();
    largestNums.textContent = largestNum();
    totalAll.textContent = addTotal();
    averageAll.textContent = averageTotal();
    multiAll.textContent = multiplyNums();
}
