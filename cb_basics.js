// function hello(data, callback)
// {
//     data = data + "***"
//     callback(data)
// }

// function callback(data)
// {
//     console.log(data + " is encoded successfuly!")
// }

// hello("Hello123", callback)

function sim(callback)
{
    const data = {name : "Mugesh S", age : 21}

    callback(data)
}

function log(data)
{
    console.log("Hi, "+ data.name +". How are you ?")
}

sim(log)