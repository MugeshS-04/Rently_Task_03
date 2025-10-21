function dataprocess(name, age, msg_log)
{
    let data = {name : "Mugesh S", age : 21}

    console.log("Initial Data :")
    console.log("The name is " + data.name + " and his age is "+ data.age)

    name(data, age, msg_log)
}

function name_change(data, age, msg_log)
{
    data.name = "ABCD"
    age(data, msg_log)
}

function age_change(data, msg_log)
{
    data.age = 25
    msg_log(data)
}

function logger(data)
{
    console.log("After Modification")
    console.log("The name is " + data.name + " and his age is "+ data.age)
}

dataprocess(name_change, age_change, logger)