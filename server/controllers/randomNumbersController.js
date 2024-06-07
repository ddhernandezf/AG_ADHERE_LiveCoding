// Function to generate an array of 100 random numbers
function generateRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 100; i++) {
        numbers.push(Math.floor(Math.random() * 100) + 1); // Random number between 1 and 100
    }
    return numbers;
}

let numbers = generateRandomNumbers();

// Controller function for the GET endpoint
exports.getRandomNumbers = (req, res) => {
    res.json(numbers);
};