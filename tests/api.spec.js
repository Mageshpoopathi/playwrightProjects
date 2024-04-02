const { request } = require("@playwright/test");
import { test, expect } from '@playwright/test';

test('api tests',async ({request})=>{
    const apiContext=await request.newContext();
    const re=await apiContext.get('https://reqres.in/api/users?page=2');
    console.log(re.json());
   const response= apiContext.request.get('https://reqres.in/api/users?page=2');
   console.log(response.json());
   // apiContext.post('api/login',{'name':"magesh",'mail':"magesh432@gmail"});
});