function speedDetector(rawSpeed){

    const SPEED_LIMIT=70
    let demeritPoints=0
    const speed=parseInt(rawSpeed)

    if (isNaN(speed)){
        console.error("The speed must be a number", speed)

        return
    }

    if (speed<SPEED_LIMIT){
        console.log("Ok")
        return
    }
    else {

        const speedDifference=speed-SPEED_LIMIT;
        if (speedDifference<=5){
demeritPoints=1;
console.log(`Your demerit points are: ${demeritPoints}`)
return demeritPoints
        }

        else {
demeritPoints=parseInt(speedDifference/5)
if (demeritPoints>12){

    console.log("License suspended")
    return demeritPoints
}
else{
    console.log(`Your demerit points are: ${demeritPoints}`)
    return demeritPoints
}

        }
    }

}


speedDetector(85)