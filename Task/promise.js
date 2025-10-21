function dataprocess()
{
    let data = {name : "Mugesh S", age : 21}

    console.log("Initial Data :")
    console.log("The name is " + data.name + " and his age is "+ data.age)

    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

function name_change(data)
{
    data.name = "ABCD"

    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

function age_change(data)
{
    data.age = 25
    
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

function logger(data)
{
    console.log("After Modification")
    console.log("The name is " + data.name + " and his age is "+ data.age)
 
}

dataprocess().then((data) => {return name_change(data)})
             .then((data) => {return age_change(data)})
             .then((data) => {return logger(data)})
             .catch((err) => console.log(err))