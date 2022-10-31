const axios = require('axios');
const { axiosOptions } = require('./services/authorization/index')

const nsRequest=(config,options)=>{
    const axiosOptionsParams={
        ...config,
        ...options
    }
    return axios(axiosOptions(axiosOptionsParams))
}

module.exports.nsRequest = nsRequest;