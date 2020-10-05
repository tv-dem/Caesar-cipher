const chalk = require('chalk')
const fs = require('fs');

const parseShift = (value) =>{
    const num = parseInt(value, 10);
    if(isNaN(num) || !Number.isInteger(num)){
        process.stderr.write(chalk.red(`"${value}" is incorrect, for shift use some number`))
        process.exit(-1)
    }
    return num
}

const parseInput = (path)=>{
    path = path.trim()
    if(fs.existsSync(path)) {
        const input = fs.createReadStream(path);
        input.on('error', (err) => {
            throw err
        })
        return input
    }
    else{
        process.stderr.write(chalk.red(`${path} not find`))
        process.exit(-1)
    }
}

const parseOutput = (path)=>{
    path = path.trim()
    if(fs.existsSync(path)) {
        const output = fs.createWriteStream(path, {
            flags: 'a+',
        });
        return output
    }
    else{
        process.stderr.write(chalk.red(`${path} not find`))
        process.exit(-1)
    }
}
const parseAction = (value)=>{
    if (value != 'encode'  && value != 'decode'){
        process.stderr.write(chalk.red(`action "${value}" is incorrect! use encode or decode`))
        process.exit(-1)
    }
    return value
}

module.exports={
    parseOutput,
    parseInput,
    parseShift,
    parseAction,
}