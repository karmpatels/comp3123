//Name: Karm Patel
//Student ID: 101410114

//Exercise 1
function capitalizeFirstLetter(str){
    return str.replace(/\b\w/g, char => char.toUpperCase())
}
console.log(capitalizeFirstLetter("the quick brown fox"))


//Exercise 2
function findLargestNumber(a,b,c){
    return Math.max(a,b,c)
}
console.log(findLargestNumber(13,22,49));
console.log(findLargestNumber(-19,-8,-21));


//Exercise 3
function right(str) {
    if (str.length >= 3) {
        let char = str.split(''); 
        let lastThreeChar = char.splice(-3); 
        return lastThreeChar.join('') + char.join(''); 
    } else {
        return str; 
    }
}
console.log(right("python"));
console.log(right("fullstack"));
console.log("hi")


//Exercise 4
function angle_Type(angle) {
    if (angle < 0 || angle > 180) {
        return "Invalid Angle";
    }
    else if (angle < 90) {
        return "Acute";
    }
    else if (angle === 90) {
        return "Right";
    }
    else if (angle > 90 && angle < 180) {
        return "Obtuse";
    }
    else if (angle === 180) {
        return "Straight";
    }
}

console.log(angle_Type(280));
console.log(angle_Type(60));
console.log(angle_Type(120));
console.log(angle_Type(130));
console.log(angle_Type(180));