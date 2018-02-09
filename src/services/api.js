import { create } from 'apisauce';

const api = create({
  baseURL: 'http://172.19.232.177:8080',
});

api.addResponseTransform(response =>{
    if(!response.ok) throw response;
});

export default api;
