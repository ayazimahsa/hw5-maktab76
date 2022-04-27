function highest(obj) {

    let pricesStr = Object.values(obj);

    const pricesNum = pricesStr.map(i => Number(i));

    let max = Math.max(...pricesNum);
    let result = String(max);

    let key = Object.keys(obj).find(k => obj[k] == result);
    return (`The most expensive one is the ${key}`);

}
let jewel = {

    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650,
};

console.log(highest(jewel));