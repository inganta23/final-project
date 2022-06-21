export const convertMonth = (dateString) => {
    if (!dateString) return null;

    const getDate  = dateString.substring(0, 2);
    const getMonth = dateString.substring(3, 5);
    const getYear  = dateString.substring(6, 11);
    let   month    = "";

    if(getMonth === "01") month = "Jan"
    if(getMonth === "02") month = "Feb"
    if(getMonth === "03") month = "Mar"
    if(getMonth === "04") month = "Apr"
    if(getMonth === "05") month = "Mei"
    if(getMonth === "06") month = "Jun"
    if(getMonth === "07") month = "Jul"
    if(getMonth === "08") month = "Aug"
    if(getMonth === "09") month = "Sep"
    if(getMonth === "10") month = "Okt"
    if(getMonth === "11") month = "Nov"
    if(getMonth === "12") month = "Des"

    return `${getDate} ${month} ${getYear}`;
}