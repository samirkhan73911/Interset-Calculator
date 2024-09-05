function calculate() {
    const userInputAmount = document.getElementById("amount")
    const intrestRateInput = document.getElementById("intrestRate")
    const noOfyear = document.getElementById("year")
    const resultfiled = document.getElementById("total")

    let amount = Number(userInputAmount.value);
    let intrestRate = Number(intrestRateInput.value) / 100;
    let years = Number(noOfyear.value);


    if (amount < 0 || isNaN(amount)) {
        amount = 0
        userInputAmount.value = 0
        window.alert("Principle Amount must be positive Number")


    }
    if (intrestRate < 0 || isNaN(amount)) {
        intrestRate = 0
        intrestRateInput.value = 0
        window.alert("Interest Rate must be Greater than Or Equal to 0")

    }
    if (years < 0 || isNaN(amount)) {
        years = 0
        noOfyear.value = 0
        window.alert("Years must be Greater than Or Equal to 0")

    }

    const result = amount * Math.pow((1 + intrestRate / 1), 1 * years)
    resultfiled.textContent = result.toLocaleString(undefined, { style: "currency", currency: "PKR" })


}