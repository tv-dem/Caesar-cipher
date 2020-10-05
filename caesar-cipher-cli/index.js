const {Command} = require('commander')
const { pipeline } = require('stream');
const fs = require('fs');
const chalk = require('chalk')
const {myTrans} = require('./requires/Encrypt')
const {parseAction,parseShift,parseInput,parseOutput} = require('./requires/parsers')

const command = new Command();
command.
    option('-a, --act <string>' ,'code/decode', parseAction).
    option('-s, --shift <number>', 'шаг кодироания',parseShift).
    option('-i, --input <path>',  'input', parseInput).
    option('-o, --output <path>', 'output', parseOutput)

command.parse(process.argv);

if(!command.shift || !command.act) {
    process.stderr.write(chalk.red("missing paramrters"))
    process.exit(-1)
}

let t = new myTrans({
    shift: command.shift,
    action: command.act,
})

const input = command.input ?
    command.input :
    process.stdin

const output = command.output ?
    command.output :
    process.stdout

input.on('end', ()=>{
    output.write('\n')
})

pipeline(
    input,
    t,
    output,
    (err) => {
        if (err) {
            console.error(chalk.red('Pipeline failed.', err));
            process.exit(-1)
        } else {
            console.log(chalk.green(`${command.act} was success!`));
        }
    }
);