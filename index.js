function writeCards(names, eventName) {
    let messages = []

    for (let i=0; i < names.length; i++) {
        let message = (`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
        messages.push(message);
    }

    return messages
}
let names = ["Guadalupe", "Ollie", "Aki"]
let eventName = "surprise"

let messages = writeCards(names, eventName)

console.log(messages)







function countDown (number) {
    while (number >=0) {
        console.log (number)
        number--

    }
}