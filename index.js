// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`)
}

saturdayFun

const mondayWork = function (thing = 'go to the office'){
    return (`This Monday, I will ${thing}.`)
}

mondayWork()

function wrapAdjective(string = "*"){
    return function (adj = 'special'){
        return (`You are ${string}${adj}${string}!`)
    }

}

wrapAdjective("%")("a dedicated programmer")()




//Implement a function called wrapAdjective:
//It should return a function
//This "inner" function should:
//take a single parameter that should default to "special". 
//Name it however you wish.
//return a String of the form "You are ..." where ... should be
//the adjective this function received wrapped in visual flair
// It should take as parameter a String that will be used
// to create visual flair
// You may call the parameter whatever you like, but its 
//default value should be "*"
// Call example: const encouragingPromptFunction = wrapAdjective("!!!")