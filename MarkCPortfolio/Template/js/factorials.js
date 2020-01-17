let totalFactor;

function factorize(){
    let factorialNum = document.querySelector('#factorialNum').value;
    totalFactor = 1;
    if (+factorialNum < 0 || factorialNum == '' || factorialNum > 170) {
        swal("Put in a valid number!", "A number between 0 - 170", "error", { button: "Agree to the Terms & Conditions",});
    } else {
        for(let i = 0; i < factorialNum; i++) {
            totalFactor = totalFactor * (i+1);
        }
        factorOutput.textContent = totalFactor;
    }
}