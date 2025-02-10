import axios from 'axios';

const SERVER_URL = 'http://localhost:9000';

export const fetchData = async (name) => {
    try {
        const response = await axios.get(`${SERVER_URL}/api/component/get-component?name=${name}`);
        
        // Create a new JavaScript module dynamically
        const blob = new Blob([response.data], { type: 'text/javascript' });
        const url = URL.createObjectURL(blob);

        // Dynamically import the module
        const module = await import(url);

        return module.default || module;
    } catch (error) {
        console.error('Error fetching component:', error);
    }
};

export default fetchData;
