module.exports = function toReadable(number) {
    const nums = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 20) {
        return nums[number];
    } else if (number >= 20 && number <= 99) {
        const decimal = Math.floor(number / 10);
        const stringEnd = number % 10 === 0 ? '' : ` ${nums[number % 10]}`;
        return `${tens[decimal]}${stringEnd}`;
    } else if (number >= 100 && number <= 999) {
        const hundreds = Math.floor(number / 100);
        const digit = number % 10;
        const decimal = ((number - digit) / 10) - (hundreds * 10);
        const digitIndex = decimal === 1 ? number % 100 : digit;
        const stringEnd = digit === 0 && decimal !== 1 ? '' : ` ${nums[digitIndex]}`;
        const testString = decimal === 0 || decimal === 1 ? '' : ` ${tens[decimal]}`;
        return `${nums[hundreds]} hundred${testString}${stringEnd}`
    }

}