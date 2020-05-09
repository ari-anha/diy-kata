const booleanToWord = boolean => {
    if (boolean === false || boolean === undefined || boolean === 0 || boolean === "" || boolean === NaN) {
        return "No";
    } else {
        return "Yes";
    }
};

module.exports = booleanToWord;
