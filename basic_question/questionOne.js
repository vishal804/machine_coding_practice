// Given a string reverse each word in the senstence

const str = "This is the sentense"
const reverseStr = str.split(" ").map((word) => word.split("").reverse().join(""))
console.log(reverseStr)
