const OAuth = require('oauth-1.0a');

exports.axiosOptions = (config) => {
    const accountName=config.account_id.toLowerCase().replace("_", "-")
    let uri = `https://${accountName}.suitetalk.api.netsuite.com/services/rest` + config.path;
    const options = {
        url: uri,
        method: config.method,
        throwHttpErrors: true,
        decompress: true,
    };

    const oauth = OAuth({
        consumer: {
            key: config.consumer_key,
            secret: config.consumer_secret,
        },
        realm: config.account_id,
        signature_method: 'HMAC-SHA256',
        hash_function(base_string, key) {
            return crypto
                .createHmac('sha256', key)
                .update(base_string)
                .digest('base64')
        },
    })

    options.headers = oauth.toHeader(
        oauth.authorize({
            url: options.url,
            method: config.method
        }, {
            key: config.token_id,
            secret: config.token_secret,
        })
    )

    if (config.reqBody) {
        options.data = config.reqBody
        options.headers['Content-Type'] = 'application/json'
        options.headers.prefer = "transient";
    }

    if(config.headers){
      options.headers={...options.headers,...config.headers}
    }

    return options


}