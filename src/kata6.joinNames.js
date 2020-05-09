const joinNames = namesObj => {
    let allNames;
    const getOurNames = namesObj.map(a => a.name);

    if (getOurNames.length === 1) {
        allNames = getOurNames[0];
    }

    if (getOurNames.length === 2) {
        allNames = `${getOurNames[0]} & ${getOurNames[1]}`;
    }

    if (getOurNames.length > 2) {
        allNames = `${getOurNames.slice(0, -1).join(", ")} & ${getOurNames.slice(-1)}`;
    }
    
    return allNames;
};

module.exports = joinNames;