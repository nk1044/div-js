import axios from 'axios';

const SERVER_URL = 'http://localhost:9000';

const fetchData = async (name) => {
    try {
        console.log('name:', name);
        const response = await axios.get(`${SERVER_URL}/api/component/get-component?name=${name}`);
        console.log('response:', response);
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

export { fetchData };
