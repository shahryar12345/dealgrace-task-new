import { getApiURL } from "../api/apilists";
import { formJson } from "../services/formJson";
import { categoryJson, serviceJson } from "../services/imageJson";

export const getRequestForm = async () => {
 try {
  let response = await fetch(getApiURL("GETREQUESTFORMJSON"));
  return response.body;
 } catch (e) {
  console.log("Error in fetching data. Sending dummy data.");
  return formJson;
 }
};

export const getService = async () => {
 try {
  let response = await fetch(getApiURL("GETSERVICE"));
  return response.body;
 } catch (e) {
  console.log("Error in fetching data. Sending dummy data.");
  return serviceJson;
 }
};

export const getCategory = async () => {
 try {
  let response = await fetch(getApiURL("GETCATEGORY"));
  return response.body;
 } catch (e) {
  console.log("Error in fetching data. Sending dummy data.");
  return categoryJson;
 }
};
