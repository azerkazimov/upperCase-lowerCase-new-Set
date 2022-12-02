let str = "Hi guys how are You?  What Are you doin";

function a(elem) {
  newStr = "";

  for (let i = 0; i < elem.length; i++) {
    let capital = elem[i].match(/[A-Z]/g);
    if (elem[i] == capital) {
      newStr += elem[i].replace(capital, elem[i].toLowerCase());
    }
    let lower = elem[i].match(/[a-z]/g);
    if (elem[i] == lower) {
      newStr += elem[i].replace(lower, elem[i].toUpperCase());
    }
  }
  for (let i = 0; i < elem.length; i++) {}

  console.log(newStr);
}
a(str);

// ==============================================================

let arr = [23, 12, 34, 12, 30, 12, 34, 89, 1, 3, 0, 123, 453];
function uniq(arr){
	let uniqNum = Array.from(new Set(arr));
	return uniqNum
}

console.log(uniq(arr));
