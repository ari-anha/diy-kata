const humanCatDogYears = number => {
/*    const cdOne = 15;
    const cdTwo = 24;
    if (number <= 0) {
        return [0, 0, 0];
    } else if (number === 1) {
        return [number, cdOne, cdOne];
    } else if (number === 2) {
        return [number, cdTwo, cdTwo];
    } else {
        return [number, (cdTwo + 4*(number - 2)), (cdTwo + 5*(number - 2))];
    }*/
    if (number === 0) return [0, 0, 0]
    if (number === 1) return [1, 15, 15]
    if (number === 2) return [2, 24, 24]
    return [number, (number-2) * 4 + 24, (number-2) * 5 + 24]
};

module.exports = humanCatDogYears;
