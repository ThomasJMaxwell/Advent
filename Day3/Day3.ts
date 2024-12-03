let command = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

const commandRegex = /mul\(\d{1,3}\,\d{1,3}\)/g;
const mathRegex = /\d{1,3}/g
let matches = command.match(commandRegex);
let total = 0;
matches?.forEach( element => 
{
    let nums = element.match(mathRegex);
    let value = nums?.reduce((prod,current) => prod * Number(current),1);
    total+=value??0;
})
console.log(total);