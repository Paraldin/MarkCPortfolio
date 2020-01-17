function palinGo() {
    let reverse = [];

    let palinArr = palindromeText.value
        .toLowerCase()
        .match(/[a-z]/gi);

    let palinCopy = [...palinArr];

    for (let i = 0; i < palinArr.length; i++) {
        reverse[i] = palinCopy.pop();
    }
    if(reverse.join('') == palinArr.join('')) {
        palinResult.textContent = "Holy smokes that is quite a palindrome you have";
        palinResult.classList.add('goodPal');
        palinResult.classList.remove('badPal');
    } else {
        palinResult.textContent = "Ahh poop that ain't a palindrome";
        palinResult.classList.add('badPal');
        palinResult.classList.remove('goodPal');
    }
}
