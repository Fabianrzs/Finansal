const axios = require('axios').default;

const base = "https://localhost:44307/api/"

const localApi = axios.create({ baseURL : base })

export default localApi
