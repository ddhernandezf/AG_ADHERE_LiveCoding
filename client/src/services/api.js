import axios from 'axios';

export const fetchRandomNumbers = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/random-numbers');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};