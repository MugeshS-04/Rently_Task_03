function dataprocess(cb1, cb2, cb3)
{
    let data = {name : "Mugesh S", age : 21}

    console.log("Initial Data :")
    console.log("The name is " + data.name + " and his age is "+ data.age)

    cb1(data, cb2, cb3)
}

function name_change(data, cb2, cb3)
{
    data.name = "ABCD"
    cb2(data, cb3)
}

function age_change(data, cb3)
{
    data.age = 25
    cb3(data)
}

function logger(data)
{
    console.log("After Modification")
    console.log("The name is " + data.name + " and his age is "+ data.age)
}

dataprocess(name_change, age_change, logger)