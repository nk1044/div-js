import axios from 'axios';


const HealthCheck = async (req, res) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/health-check`);
        console.log(response?.data);
    } catch (error) {
        console.log(error);
    }
}

export {
    HealthCheck,
}