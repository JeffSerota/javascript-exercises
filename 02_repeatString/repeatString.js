const repeatString = function(string, num) {
    let endString = ''
    if (typeof(num) == "number" && num >= 0){ 
    for (let i = 0; i < num; i++){
        endString +=  string;
    };
    return endString;
} else {
    return "ERROR";
}
};

// Do not edit below this line
module.exports = repeatString;
