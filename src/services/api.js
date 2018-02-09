import { create } from 'apisauce';

const api = create({
  baseURL: 'https://guarded-dawn-52771.herokuapp.com/message',
});

api.addResponseTransform(response =>{
    if(!response.ok) throw response;
});

export default api;
