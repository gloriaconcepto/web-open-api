

export const apiCall=(url,params,requestType,requestBody)=>{
    let reqOptions={
        method:requestType,
        body: requestBody ? JSON.stringify(requestBody) : undefined,
      }
      const esc = encodeURIComponent;
      let query
      if(params){
       
     query= Object.keys(params)
       .map(k => esc(k) + "=" + esc(params[k]))
       .join("&");
       url=`${url}?${query}`
      }
    
      return fetch(url,reqOptions)
}