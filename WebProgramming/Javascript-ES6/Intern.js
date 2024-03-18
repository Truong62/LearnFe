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

const TongBinhPhuong = (arr) => {
    let binhphuongitem = arr.map(item => item ** 2)
    return binhphuongitem

}
const a = TongBinhPhuong([1, 1, 1, 15, 2, 5, 5, 6, 6, 3, 4,])
// console.log(a)

const b1 = () => {
    var arr = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
    var arrNew = arr.map((item) => {
        return item.reduce((acc, curr) => acc + curr, 0)
    })
    console.log(arrNew)
}
const b2 = () => {
    var strings = ['apple', 'banana', 'pear', 'kiwi', 'orange'];
    var objString = {}
    strings.map((item) => {
        var length = item.length;
        if (objString[length]) {
            objString[length].push(item)
        } else {
            objString[length] = [item];
        }

    })
    console.log(objString)
}
// b2()

const b3 = () => {
    const names = ["Alice", "Bob", "Charlie", "David"];
    const newName = names.map(item => item + " is awesome")
    console.log(newName)
}
// b3()

const b4 = () => {
    const strings = ["apple", "banana", "orange", "kiwi"];
    console.log(strings.map(item => item.length))
}
// b4()
const b5 = () => {
    const integers = [2, 4, 6, 8, 10];
    console.log(integers.map(item => item ** 2))
}
// b5()
const b6 = () => {
    const objects = [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
        { name: "Doe", age: 40 }
    ];
    const newObj = objects.map((item, index) => ({
        id: index,
        ...item
    }))
    console.log(newObj)
}
// b6()
const b7 = () => {
    const strings = ["apple", "banana", "orange", "kiwi"];
    console.log(strings.map(item => item.toUpperCase()))
}

const b8 = () => {
    const numbers = [3.5, 1.2, 4.9, 7.8, 2.3];
    console.log(numbers.map(item => Math.floor(item)))
}
// b8()

const b9 = () => {
    const numbers = [3.14159, 2.71828, 1.41421, 1.65803];
    console.log(numbers.map(item => item.toFixed(1)))
}
// b9()

const b10 = () => {
    const strings = ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit", "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"];
    console.log(
        strings.map(item => item.length > 20 ? item.slice(0, 20) + "..." : item)
    )
}
// b10()

const b11 = (nums) => {
    var seen = {};

    for (let num of nums) {
        if (seen[num]) {
            return true;
        } else {
            seen[num] = true;
        }
        console.log(seen)
    }

    return false;
}

// console.log(b11([0, 1, 2, 3, 1]))


var obj = {
    0: 2,
    1: 3,
    5: 4,
    8: 1,
    10: 3
}

var singleNumber = function (nums) {
    var see = 0
    for (let num of nums) {
        see ^= num
        console.log(see)
    }
    return see
};

// console.log("--------" + singleNumber([2, 2, 8, 1, 1]))

const intersection = (nums1, nums2) => {
    const set1 = new Set(nums1);
    const resultArray = [];

    nums2.forEach(num => {
        if (set1.has(num)) {
            resultArray.push(num);
        }
    });

    resultArray.forEach(num => {
        set1.delete(num);
    });

    return resultArray;
};
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))