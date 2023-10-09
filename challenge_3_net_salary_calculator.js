function netSalaryCalculator(basicSalary, benefits){


    let PAYE=0
    let totalBenefits=0
if (!Array.isArray(benefits)){
    console.log("The benefits must be in an array format")
    return
}

    benefits.forEach(element => {
        totalBenefits+=element
    });



    let grossPay=basicSalary+totalBenefits

    if (grossPay<=24000){

        PAYE=grossPay*0.1
    }
    else if (grossPay<=32333){
        PAYE=grossPay*0.25
    }
    else if (grossPay<=500000){
        PAYE=grossPay*0.3
    }
    else if (grossPay<=800000){
        PAYE=grossPay*0.325
    }
    else if (grossPay>800000){
        PAYE=grossPay*0.35
    }


let nhifFDeduction=0

if (grossPay<=5999){

    nhifFDeduction=150
}
else if (grossPay<=7999){
    nhifFDeduction=300
}
else if (grossPay<=11999){
    nhifFDeduction=400
}
else if (grossPay<=14999){
    nhifFDeduction=500
}
else if (grossPay<=19999){
    nhifFDeduction=600
}
else if (grossPay<=24999){
    nhifFDeduction=750
}

else if (grossPay<=29999){
    nhifFDeduction=850
}
else if (grossPay<=34999){
    nhifFDeduction=900
}
else if (grossPay<=39999){
    nhifFDeduction=950
}
else if (grossPay<=44999){
    nhifFDeduction=1000
}
else if (grossPay<=49999){
    nhifFDeduction=1100
}
else if (grossPay<=59999){
    nhifFDeduction=1200
}
else if (grossPay<=69999){
    nhifFDeduction=1300
}
else if (grossPay<=79999){
    nhifFDeduction=1400
}
else if (grossPay<=89999){
    nhifFDeduction=1500
}
else if (grossPay<=99999){
    nhifFDeduction=1600
}
else if (grossPay>=100000){
    nhifFDeduction=1700
}

let nssfDeduction=0
const pensiontier=1

if (pensiontier===1){
    nssfDeduction=0.06*6000
}
else if (pensiontier===2){
    nssfDeduction=0.06*18000
}

const netSalary=grossPay-PAYE-nhifFDeduction-nssfDeduction

console.log(`Gross pay:${grossPay}\n PAYE: ${PAYE} \n NHIF Deductions ${nhifFDeduction} \n NSSF Deductions: ${nssfDeduction} \n Net Salary: ${netSalary}`)

return {
    "grossPay":grossPay,
    "nhifDeductions":nhifFDeduction,
    "nssfDeductions": nssfDeduction,
    "netSalary":netSalary
}








}

netSalaryCalculator(20000, [1000, 5000, 10000])