import axios from 'axios';
import {socketUrl, api_key} from './config';

const fetch = axios.create({
    timeout: 60000,
    baseURL: socketUrl,
    headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
    },
    params: {
        api_key: api_key
    }
});
export default fetch;