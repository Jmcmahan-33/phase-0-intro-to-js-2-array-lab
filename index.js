// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Charles) {
    return cats.push(Charles)

}

function destructivelyPrependCat(Bob) {
    return cats.unshift(Bob)
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}


function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(){
    const copyOfAppendCat = [...cats, "Broom"]
    return copyOfAppendCat
}

function prependCat() {
    const copyOfPrependCat = ["Arnold", ...cats]
    return copyOfPrependCat
}

function removeLastCat() {
    const copyRemoveLastCat = cats.slice(0,2)
    return copyRemoveLastCat
}

function removeFirstCat() {
    const copyRemoveFirstCat = cats.slice(1)
    return copyRemoveFirstCat
}