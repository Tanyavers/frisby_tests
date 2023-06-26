const frisby = require('frisby');

const baseURL = "https://postman-echo.com"

it('Status code is 200', function () {
  return frisby.post(`${baseURL}/post`)
    .expect('status', 200);
});

it('Request except two query parameters', function () {  
    return frisby.post(`${baseURL}/post`, {"data": "doodles"})
        .expect('json', 'data', {
            "data": "doodles"
        });
});