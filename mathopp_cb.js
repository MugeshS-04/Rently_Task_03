import readline from "readline"

const fs = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout
    }
)

let num1
let num2

const input1 = fs.question("Enter 2 numbers : ", function inputhandler(input){
    let num = input.split(" ")

    num1 = Number(num[0])
    num2 = Number(num[1])

    function mathoperation(addition, multiplication, division)
    {
        //addition
        let add = num1 + num2
        addition(add)

        //multiplication
        let mul = num1 * num2
        multiplication(mul)

        //division
        let div = num1 / num2
        division(div)
    }

    function add(data)
    {
        console.log("Addition : " + data)
    }

    function mul(data)
    {
        console.log("Subtraction : "+ data)
    }

    function div(data)
    {
        console.log("Division : "+ data)
    }

    mathoperation(add, mul, div)

    fs.close()
})




