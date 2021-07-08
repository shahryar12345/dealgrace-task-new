import { getApiURL } from "../api/apilists";
import { formJson } from "../services/formJson";
import { categoryJson, serviceJson } from "../services/imageJson";

export const getRequestForm = async (id) => {
 try {
    // comment out API call for now due to CORS error
    //let response = await fetch(getApiURL("GETREQUESTFORMJSON"));
    //return response.body;

    return formJson[id]
 } catch (e) {
  console.log("Error in fetching data. Sending dummy data.");
  return formJson[0]; // send default data in case of error
 }
};

export const getService = async (id) => {
 try {
    // comment out API call for now due to CORS error
    // let response = await fetch(getApiURL("GETSERVICE"));
    // return response.body;
    return serviceJson[id];

 } catch (e) {
  console.log("Error in fetching data. Sending dummy data.");
  return serviceJson[0]; // send default data in case of error
 }
};

export const getCategory = async (id) => {
 try {
    // comment out API call for now due to CORS error
    //let response = await fetch(getApiURL("GETCATEGORY"));
    //return response.body;
    return categoryJson[id];
 } catch (e) {
  console.log("Error in fetching data. Sending dummy data.");
  return categoryJson[0]; //  // send default data in case of error
 }
};
