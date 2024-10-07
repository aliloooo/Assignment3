function sumArray(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (currentSum + arr[i] < arr[i]) {
            currentSum = arr[i];
            tempStart = i;
        } else {
            currentSum += arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    let subArray = arr.slice(start, end + 1);
    return [subArray, maxSum];
}

const a = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(sumArray(a));

