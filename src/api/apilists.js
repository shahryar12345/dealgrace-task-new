export function getApiURL(URLName)
{
    switch(URLName)
    {
        case "GETREQUESTFORMJSON":
            return "https://dealgrace.com/api/services/auto-towing/car-towing-service/form";
        default:
            break;
    }
}