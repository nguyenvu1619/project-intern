import axios from 'axios';

const apiService = async (method, route, data, header) => {
    const result = await axios({
        method,
        url: `http://192.168.1.247:8384/api/v1/${route}`,
        data,
        header
    });
    console.log(result);
    console.log(process.env.REACT_APP_API);
    return result;
}

export default apiService;
