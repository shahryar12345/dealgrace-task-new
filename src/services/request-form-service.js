
import {getApiURL} from "../api/apilists"
import axios from 'axios';

export const getRequestForm = async () =>
{

let response  = await fetch(getApiURL('GETREQUESTFORMJSON'))
return response;  

}
