const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    }
    let prev = 0;
    let current = 1;

    for (let i = 2; i <= n; i++) {
        let next = prev + current;
        prev = current;
        current = next;
    }
    return current;
}
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
}
function longWord(str) {
    const words = str.split(' ');
    let text = '';

    for (let word of words) {
        if (word.length > text.length) {
            text = word;
        }
    }
    return text;
}

function frequentChar(str) {
    const charCount = {};
    let maxChar = '';
    let maxCount = 0;
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }
    return maxChar;
}

function maxProfit(prices) {
    if (prices.length < 2) {
        return 0;
    }
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    return maxProfit;
}

function Anagrams(str1, str2) {
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();
    if (str1.length !== str2.length) {
        return false;
    }
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

const locArr = (arr) => {
    let ArrNew = []
    for (let i = 0; i < arr.length; i++) {
        if (ArrNew.indexOf(arr[i]) === -1) {
            ArrNew.push(arr[i])
        }
    }
    return ArrNew;
}

let ArrNew = locArr([1, 1, 1, 15, 2, 5, 5, 6, 6, 3, 4,])
// console.log(ArrNew)

const bubbleSort = () => {
    for (let i = 0; i <= ArrNew.length; i++) {
        for (let j = 0; j <= ArrNew.length - i; j++) {
            if (ArrNew[j] > ArrNew[j + 1]) {
                let temp = ArrNew[j];
                ArrNew[j] = ArrNew[j + 1];
                ArrNew[j + 1] = temp;
            }
        }
    }
    return ArrNew
}
// console.log(bubbleSort())

