class API{
     async verifyStatusCode(url,expectedStatusCode) {
        var URL=url.toString();
        let actualStatusCode = await page.evaluate(() => {
            return fetch(URL).then(res => res.status);
        });
         if(actualStatusCode.toString()===expectedStatusCode){
             console.log(`API request is passed with ${actualStatusCode} status code`);
          }
          else{
              console.log(`API request is failed with ${actualStatusCode}`);
          }
    }
    async verifyText(url){
        var URL=url.toString();
        let response=await page.evaluate(()=>{
            return fetch(URL).then(response=>response.text());
        })
        console.log(response);
    }
    async verifyBody(url){
        var URL=url.toString();
        let response=await page.evaluate(()=>{
            return fetch(URL).then(response=>response.body);
        })
        console.log(response);
    }
    async verifyHeaders(url){
        var URL=url.toString();
        let response=await page.evaluate(()=>{
            return fetch(URL).then(response=>response.headers);
        })
        var ct=response.headers();
        console.log(ct);
        console.log(response);
    }
    async verifyJson(url){
        var URL=url.toString();
        let response=await page.evaluate(()=>{
            return fetch(URL).then(response=>response.json());
        })
        console.log(response);
    }
    async verifyFormData(url){
        var URL=url.toString();
        let response=await page.evaluate(()=>{
            return fetch(URL).then(response=>response.formData());
        })
        console.log(response);
    }
    async verifyBodyUsed(url){
        var URL=url.toString();
        let response=await page.evaluate(()=>{
            return fetch(URL).then(response=>response.bodyUsed);
        })
        console.log(response);
    }
    async verifyBlob(url){
        var URL=url.toString();
        let response=await page.evaluate(()=>{
            return fetch(URL).then(response=>response.blob());
        })
        console.log(response);
    }
    async verifyArrayBuffer(url){
        var URL=url.toString();
        let response=await page.evaluate(()=>{
            return fetch(URL).then(response=>response.arrayBuffer());
        })
        console.log(response);
    }
    async verifyClone(url){
        var URL=url.toString();
        let response=await page.evaluate(()=>{
            return fetch(URL).then(response=>response.clone());
        })
        console.log(response);
    }
    async postRequest(url,payload){
        var URL=url.toString();
        const response = await page.evaluate(async (URL, payload) => {
            return fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
        }, URL, payload);
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        console.log(responseBody);
    }
    async postDataInText(){
        const postData = {
            username: 'demo',
            password: '1234'
          };
          const formData = new URLSearchParams();
        for (const [key, value] of Object.entries(postData)) {
             formData.append(key, value);
         }
  
         const response = await page.evaluate(async (formData) => {
        const response = await fetch('https://demo.cyclos.org/ui/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
    });
         return await response.text(); // You can return response.json() if the response is JSON
         }, formData);
        console.log('Response:', response);
}
    async patchRequest(url,payload,method){
        var URL=url.toString();
        const response = await page.evaluate(async (URL, payload, method) => {
            return fetch(URL, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
        }, URL, payload, method);
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        console.log(responseBody);
    }  
    async deleteRequest(url){
        var URL=url.toString();
        const response = await page.evaluate(async (URL) => {
            return fetch(URL, {
                method: 'DELETE'
            });
        }, URL);
        expect(response.ok()).toBeTruthy();
    }
    async getHeader(url){
        var URL=url.toString();
        const response = await page.goto(URL, {
            method: 'GET',
            headers: {
                'Accept': 'text/html',
                'Accept' :'application/json'
        },
            });

         const contentType = response.headers()['content-type'];
         console.log("Content type is "+contentType);
    }
}
module.exports={API};