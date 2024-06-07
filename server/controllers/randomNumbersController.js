//Numbers: array of numbers from 1 to 100
let numbers = Array.from({ length: 100 }, (_, index) => index + 1);

// Controller function for the GET endpoint
exports.getRandomNumbers = (req, res) => {
    res.json(numbers);
};