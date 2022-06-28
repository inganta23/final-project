exports.getDay = (data) => {
    const dataDay = data.toLowerCase();    
    if(dataDay === "sunday")   return "minggu"
    if(dataDay === "monday")   return "senin"
    if(dataDay === "tuesday")  return "selasa"
    if(dataDay === "wednesday")return "rabu"
    if(dataDay === "thursday") return "kamis"
    if(dataDay === "friday")   return "jumat"
    if(dataDay === "saturday") return "sabtu"
}