export function getApiURL(URLName) {
 switch (URLName) {
  // case "GETREQUESTFORMJSON":
  //     return "https://dealgrace.com/api/services/auto-towing/car-towing-service/form";
  // default:
  //     break;

  case "GETREQUESTFORMJSON":
   return "https://dealgrace.com/api/services/auto-towing/car-towing-service/form";
  case "GETSERVICE":
   return "https://dealgrace.com/api/services/auto-towing/car-towing-service";
  case "GETCATEGORY":
   return "https://dealgrace.com/api/categories/auto-towing/";
  default:
   break;
 }
}
