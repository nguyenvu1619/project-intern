import axios from 'axios';

const apiService = async (method, route,timeout, data, header) => {
    'sdfsdfdsfdsf'
    const result = await axios({
        method,
        url: `http://27.74.250.96:8384/api/v1/${route}`,
        data,
        header,
        timeout
    });
    console.log(result);
    return result;
}

export default apiService;
