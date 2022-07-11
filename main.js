// let so1 = document.getElementById('num1').value
// let so2 = document.getElementById('num2').value

function sum() {
    let so1 = Number(document.getElementById('num1').value)
    let so2 = Number(document.getElementById('num2').value)

    document.getElementById('result').innerHTML = so1 + so2
}
function minus() {
    let so1 = Number(document.getElementById('num1').value)
    let so2 = Number(document.getElementById('num2').value)

    document.getElementById('result').innerHTML = so1 - so2
}
function multiply() {
    let so1 = Number(document.getElementById('num1').value)
    let so2 = Number(document.getElementById('num2').value)

    document.getElementById('result').innerHTML = so1 * so2
}
function divide() {
    let so1 = Number(document.getElementById('num1').value)
    let so2 = Number(document.getElementById('num2').value)

    document.getElementById('result').innerHTML = so1 / so2
}