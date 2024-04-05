var input ="868677505"
// var regex = new RegExp("\\+?\\(?\\d*\\)? ?\\(?\\d+\\)?\\d*([\\s./-]?\\d{2,})+", "g");
var regex = new RegExp("\\+?\\(?\\d*\\)? ?\\(?\\d+\\)?\\d*([\\s\\-.]?\\d{2,})+", "g");



var result = input.match(regex)
console.log(result)