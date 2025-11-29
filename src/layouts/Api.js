

import axios from "axios";

const Api = axios.create({
    baseURL : import.meta.env.localURL
})

export default Api;
