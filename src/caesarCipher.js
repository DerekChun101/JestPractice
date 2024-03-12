function caesarCipher(string, factor) {
    string = string.toLowerCase();
    factor = (factor % 26);
    console.log(factor);
    let result = '';
    for(let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i) + factor;
        console.log(charCode);
        if(charCode > 122) {
            let temp = String.fromCharCode(charCode - 26)
            result += temp;
        } else { result += String.fromCharCode(charCode);}
    }
    return result;
}



console.log(caesarCipher('a',1));
export default caesarCipher;