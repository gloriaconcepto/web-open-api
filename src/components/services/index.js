import { apiCall } from "../../apiservice/responseHandler";


export const getCountryLatitudeCodeService=(url,params,requestType,requestBody)=> {
 return apiCall(url,params,requestType,requestBody)
}

export const getWeatherDataService=(url,params,requestType,requestBody)=> {
    return apiCall(url,params,requestType,requestBody)
   }