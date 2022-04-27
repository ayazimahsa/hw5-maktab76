function mapping(array) {
    let obj = array.reduce(function (acc, cur) {
        acc[cur] = cur.toUpperCase();
        return acc;
    }, {});
    return obj;
}
console.log(mapping(["p", "s"])); //➞ { "p": "P", "s": "S" }
console.log(mapping(["a", "b", "c"])); //➞ { "a": "A", "b": "B", "c": "C" }
console.log(mapping(["a", "v", "y", "z"])); //➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" })