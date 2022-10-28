import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/', // path chung, sau chỉ cần thêm đuôi thôi là được
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
}

export default request;
