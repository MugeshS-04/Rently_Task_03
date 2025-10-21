import readline from "readline"

const fs = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout
    }
)

let num1
let num2

const input = fs.question("Enter 2 numbers : ", function inputhandler(data){
    const num = data.split(" ")

    num1 = Number(num[0])
    num2 = Number(num[1])

    const addoperation = new Promise(function(resolve, reject){
        if(isNaN(num1) || isNaN(num2))
        {
            reject("The number is invalid!")
        }
        else
        {
            resolve(num1 + num2)
        }
    })

    const Suboperation = new Promise(function(resolve, reject){
        if(isNaN(num1) || isNaN(num2))
        {
            reject("The number is invalid!")
        }
        else
        {
            resolve(num1 - num2)
        }
    })

    const divoperation = new Promise(function(resolve, reject){
        if(isNaN(num1) || isNaN(num2))
        {
            reject("The number is invalid!")
        }
        else if(num2 == 0)
        {
            reject("num2 cannot be zero!")
        }
        else
        {
            resolve(num1 / num2)
        }
    })

    addoperation.then((data) => { console.log("Addition : " + data); return Suboperation })
                .then((data) => { console.log("Subtraction : "+ data); return divoperation })
                .then((data) => console.log("Division : "+ data))
                .catch((err) => console.log(err))

    fs.close()
})