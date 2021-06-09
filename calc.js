var fn, sn, result;

function getValues() {
    firstnumber = number(document.getElementById("fn").value)
    secondnumber = number(document.getElementById("sn").value)

}

function add() {
    getValues()
    result = fn + sn
    document.getElementById("result").value = result
}

function sub() {
    getValues()
    result = fn - sn
    document.getElementById("result").value = result


}

function mul() {
    getValues()
    result = fn * sn
    document.getElementById("result").value = result
}

function div() {
    getValues()
    result = fn / sn
    document.getElementById("result").value = result
}