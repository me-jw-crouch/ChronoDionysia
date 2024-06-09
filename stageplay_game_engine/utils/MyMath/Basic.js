function min(valueA, valueB, ...args) {
    let retValue = valueA > valueB ? valueB : valueA;

    args.forEach(arg => {
        if (retValue > arg) {
            retValue = arg;
        }
    });

    return retValue;
}

function max(valueA, valueB, ...args) {
    let retValue = valueA > valueB ? valueA : valueB;

    args.forEach(arg => {
        if (retValue > arg) {
            retValue = arg;
        }
    });

    return retValue;
}

function clamp(minValue, value, maxValue) {
    return min(max(minValue, value), maxValue);
}

export {min, max, clamp};