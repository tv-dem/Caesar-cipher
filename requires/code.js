const isLowerCase = (char) => {
    return char === char.toLowerCase();
}

const codeStr = (str, action, shift)=>{
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    if(shift < 0){
        shift = -shift
        action = 'decode'
    }
    const code = (alph) =>{
        let newStr = ""
        for(let i = 0; i < str.length; i++){
            let pos = alph.indexOf(str[i].toLowerCase())
            let newChar = str[i]
            if(pos > -1){
                let isCharLower = isLowerCase(str[i])
                newChar = alph[(pos + shift) % alph.length]
                if(!isCharLower) newChar = newChar.toUpperCase()
            }
            newStr += newChar;
        }
        return newStr;
    }
    return action === 'encode' ? code(alphabet) :
        code(alphabet.split('').reverse().join(''))
}

module.exports.codeStr = codeStr