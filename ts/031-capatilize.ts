const pageTitle1 = "some amazing title";
const pageTitle2 = "Another Amazing Title";
const pageTitle3 = "A rEAlY weIrd TiTLE";
const pageTitle4 = "";

let capatilizeWord = (str : string ) => {
    let startChar = str.charAt(0).toUpperCase();
    let otherChar = str.substring(1).toLowerCase();

    return `${startChar}${otherChar}`;
}

let capitizeEachWord = (str : string ) => 
    str.split(" ").map((word : string ) => capatilizeWord(word)).join(" ");

console.log(capitizeEachWord(pageTitle1));
console.log(capitizeEachWord(pageTitle2));
console.log(capitizeEachWord(pageTitle3));
console.log(capitizeEachWord(pageTitle4));
