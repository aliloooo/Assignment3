function isArihmeticProgression(num) {
    if (num.length <= 2) {
        return true;
    }

    let difference = num[1] - num[0];

    for (let i = 2; i < num.length; i++) {
        if (num[i] - num[i - 1] !== difference) {
            return false;
        }
    }

    return true;
}

console.log(isArihmeticProgression([2, 4, 6, 8]));
console.log(isArihmeticProgression([2, 4, 6, 9]));