let prom = new Promise(function(resolve, reject)
{
    let state = true;

    if(state)
    {
        resolve("The state is true")
    }
    else
    {
        reject("The state is false")
    }
})

prom.then((resolve) => console.log(resolve))
    .catch((error)  => console.log(error))


console.log("The message will be printed after this")
