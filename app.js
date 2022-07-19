function doSomething() {
    console.log("the function ran");
}

let Home = 0
let Away = 0


function Home1() {
    Home += 1
    console.log("Home Scored")
    let codeElement = document.getElementById('Home')
    codeElement.innerText = Home
    console.log(codeElement)
}
function Home3() {
    Home += 3
    console.log("Home Scored")
    let codeElement = document.getElementById('Home')
    codeElement.innerText = Home
    console.log(codeElement)
}
function Away1() {
    Away += 1
    console.log("Away Scored")
    let codeElement = document.getElementById('Away')
    codeElement.innerText = Home
    console.log(codeElement)
}
function Away3() {
    Away += 3
    console.log("Away Scored")
    let codeElement = document.getElementById('Away')
    codeElement.innerText = Home
    console.log(codeElement)
}