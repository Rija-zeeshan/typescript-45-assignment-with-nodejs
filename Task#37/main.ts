
// 37.. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

//making a function
function make_shirt(size: string = "large", printMessage:string = "I love typescript"){
    console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`)
}
make_shirt();
make_shirt("medium")
make_shirt("small" , "I love javascript")