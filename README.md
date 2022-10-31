# NetSuite REST Web Services

[![NPM](https://nodei.co/npm/netsuite-rest-web-services.png)](https://www.npmjs.com/package/netsuite-rest-web-services)

A node package help to connect with suite talk rest web services 
which helps to perfroms below operations:
* CRUD operations to perform business processing on Netsuite records.
* Get record metadata.
* Execute Netsuite queries on records.

# Installation

    npm i netsuite-rest-web-services

## Code Setup

### CRUD operations

#### GET Request

```javascript

    const { nsRequest} = require('netsuite-rest-web-services');

    const config={
    account_id:'account_id',
    consumer_key:'consumer_key',
    consumer_secret:'consumer_secret',
    token_id:'token_id',
    token_secret:'token_secret'
    }

    const options={
    path: `/record/v1/employee/`,
    method: 'GET',
    }

    nsRequest(config,options).then((response)=>{
    console.log(response)
    }).catch((err)=>console.log(err))
    

```

#### POST Request

```javascript

    const { nsRequest} = require('netsuite-rest-web-services');

    const config={
    account_id:'account_id',
    consumer_key:'consumer_key',
    consumer_secret:'consumer_secret',
    token_id:'token_id',
    token_secret:'token_secret'
    }

    const options={
    path: `/record/v1/employee/`,
    method: 'POST',
    reqBody:{
        .....
        .....
    }
    }

    nsRequest(config,options).then((response)=>{
    console.log(response)
    }).catch((err)=>console.log(err))
    

```

#### PATCH Request

```javascript

    const { nsRequest} = require('netsuite-rest-web-services');
    // Update Record by id 
    const id='1234'
    const config={
    account_id:'account_id',
    consumer_key:'consumer_key',
    consumer_secret:'consumer_secret',
    token_id:'token_id',
    token_secret:'token_secret'
    }

    const options={
    path: `/record/v1/employee/${id}`,
    method: 'PATCH',
    reqBody:{
        .....
        .....
    }
    }
    
    nsRequest(config,options).then((response)=>{
    console.log(response)
    }).catch((err)=>console.log(err))
    

```

#### DELETE Request

```javascript

    const { nsRequest} = require('netsuite-rest-web-services');
    // Delete Record by id 
    const id='1234'
    const config={
    account_id:'account_id',
    consumer_key:'consumer_key',
    consumer_secret:'consumer_secret',
    token_id:'token_id',
    token_secret:'token_secret'
    }

    const options={
    path: `/record/v1/employee/${id}`,
    method: 'DELETE',
    }
    
    nsRequest(config,options).then((response)=>{
    console.log(response)
    }).catch((err)=>console.log(err))
    

```

### Metadata

```javascript

    const { nsRequest} = require('netsuite-rest-web-services');

    const config={
    account_id:'account_id',
    consumer_key:'consumer_key',
    consumer_secret:'consumer_secret',
    token_id:'token_id',
    token_secret:'token_secret'
    }

    const options={
    path: `/record/v1/metadata-catalog/`,
    method: 'GET',
    headers:{
        'accept':'application/schema+json'
    }
    }
    
    nsRequest(config,options).then((response)=>{
    console.log(response)
    }).catch((err)=>console.log(err))
    

```

#### Get Metadata by record type

```javascript

    const { nsRequest} = require('netsuite-rest-web-services');

    const recordType='employee'
    const config={
    account_id:'account_id',
    consumer_key:'consumer_key',
    consumer_secret:'consumer_secret',
    token_id:'token_id',
    token_secret:'token_secret'
    }

    const options={
    path: `/record/v1/metadata-catalog/${recordType}`,
    method: 'GET',
     headers:{
        'accept':'application/schema+json'
    }
    }
    
    nsRequest(config,options).then((response)=>{
    console.log(response)
    }).catch((err)=>console.log(err))
    

```

### Suite Queries

```javascript

    const { nsRequest} = require('netsuite-rest-web-services');

    const config={
    account_id:'account_id',
    consumer_key:'consumer_key',
    consumer_secret:'consumer_secret',
    token_id:'token_id',
    token_secret:'token_secret'
    }

    const options={
    path: `/query/v1/suiteql`,
    method: 'GET',
    reqBody:{
      "q":"SELECT * FROM customer"
    }
    }

    nsRequest(config,options).then((response)=>{
    console.log(response)
    }).catch((err)=>console.log(err))
    

```










