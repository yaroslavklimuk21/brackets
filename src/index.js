module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let symbols = str.split("");
    let openBrackets = ["{", "(", "["];
    let closeBrackets = ["}", ")", "]"];
    let closeIndex;
    let openIndex;

    for (let i = 0; i < symbols.length; i++) {
        openIndex = openBrackets.indexOf(symbols[i]);
        if (openIndex !== -1) {
            stack.push(openIndex);
            continue;
        }
        closeIndex = closeBrackets.indexOf(symbols[i]);
        if (closeIndex !== -1) {
            openIndex = stack.pop();
            if (closeIndex !== openIndex) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
};
