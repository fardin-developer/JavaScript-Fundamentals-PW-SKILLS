const printDeliveryTime = (package)=>{
    let deliveryTime;

   switch(package){
    case 'standard':
        deliveryTime = "3-5 days";
        break
    case 'express':
        deliveryTime = "1-2 days";
        break
    case 'overnight':
        deliveryTime = "next day";
        break
    default:
        deliveryTime = "unknown"
        break;

   }
   
   console.log(`Estimated delivery time: ${deliveryTime}`);


}

printDeliveryTime('standard')
printDeliveryTime('randomText')