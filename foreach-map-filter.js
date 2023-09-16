function doubleValues(arr){
    let newArr = [];
    arr.forEach((val) => {
        newArr.push(val * 2);
    });
    return newArr;
}

function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach((val) => {
        if(val% 2 === 0) {
            newArr.push(val);
        }
    });
    return newArr;
}

function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach((val) => {
        newArr.push(`${val[0]}${val[val.length-1]}`);
    });
    return newArr;
}

function addKeyAndValue(arr,key,value){
    
    arr.forEach((val) => {
        val[key] = value;
    });

    return arr;
}

function vowelCount(str){
    let obj = {};
    str.split("").forEach((val) => {
        let v = "aieou".indexOf(val.toLowerCase());
        if(v !== -1 && val in obj) {
            obj[val.toLowerCase()] += 1;
        }else if(v !== -1) {
            obj[val.toLowerCase()] = 1;
        }
    })
    return obj;
}

function doubleValuesWithMap(arr) {
    return arr.map((val) => {
        return val * 2;
    })
}


function valTimesIndex(arr){
    return arr.map((val, index) => {
        return val * index;
    })
}


function extractKey(arr, key){
    return arr.map((val) => {
        return val[key];
    });
}


function extractFullName(arr){
    return arr.map((val) => {
        return `${val.first} ${val.last}`;
    })
}


function filterByValue(arr, key) {
    return arr.filter((val) => {
        return val[key];
    })
}

function find(arr, searchValue) {
    return arr.filter((val) => {
         return val === searchValue;    
    })[0];
    
}

function findInObj(arr, key, searchValue) {
   return arr.filter((val) => {
        return val[key] === searchValue;
    })[0];
}

function removeVowels(str) {
    let vow = "";
    str.split("").map((val) => {
        if("aeiou".indexOf(val.toLowerCase()) === -1) {
            vow += val.toLowerCase();
        }
    })
    return vow;
}

function doubleOddNumbers(arr) {
    return arr.filter((val) => {
       return val % 2 !== 0;
    }).map((v) => {
        return v + v;
    });
}
