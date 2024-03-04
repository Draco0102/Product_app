import axios from 'axios';
export const productInstance = axios.create({
    baseURL: 'https://fakestoreapi.com', // Set the base URL for all requests
    timeout: 10000, // Set the timeout for requests to 10 seconds (10,000 milliseconds)
    headers: {
      'Content-Type': 'application/json'
    }
});