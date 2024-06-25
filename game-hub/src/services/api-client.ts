import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'abd6847fe3cb46e582f17935b941483b'
    }
})