

//45 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

//define a function to create a car object with optional option...

type car = {
    manufacture: string
    model: string
    [key: string]: any;
}

function createcar(manufacture: string, model: string, optional: Record<string, any>): car{
    return{
        manufacture,
        model,
        ...optional
    }
}

const mycar: car = createcar("toyota","corolla", {color: "silver", year:"2024"})
console.log(mycar)