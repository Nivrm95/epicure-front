
export const isOpenNow = (openHours: number[] | undefined,openDays: number[] | undefined) => {
    let newDate = new Date()
    let day = newDate.getDay();
    let hourNow  = newDate.getHours()
    if(openHours && openDays?.includes(day) && openHours[0] <= hourNow && openHours[1] >= hourNow){
        return true
    } 
    return false
}


