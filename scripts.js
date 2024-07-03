const convertButton = document.querySelector(".convert__button")
const currencyConvert = document.querySelector(".currency__convert")
const currencySelect = document.querySelector(".currency__select")




function convertValues() {
    const inputCurrencyValue = document.querySelector(".input__currency").value
    const currencyValueToConvert = document.querySelector(".currency__value__to__convert")
    const currencyValueConverted = document.querySelector(".currency__value")


    const dolarToday = 5.52
    const euroToday = 5.90
    const realToday = 1
    const libraToday = 6.98
    const bitcoinToday = 336.928
    const francoToday = 6.16


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/ dolarToday)

    }


    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)

    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("uk-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)

    }

    if (currencySelect.value == "franco") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ch-SZ", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue / francoToday)

    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.querySelector(".currency__name")
    const currencyImage = document.querySelector(".currency__img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "franco") {
        currencyName.innerHTML = "Franco Suiço"
        currencyImage.src = "./assets/franco.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()

}


function convertCurrency(){
    const inputCurrencyValue = document.querySelector(".input__currency").value
    const currencyValueToConvert = document.querySelector(".currency__value__to__convert")
    const currencyValueConverted = document.querySelector(".currency__value")



    if (currencyConvert.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    }

    if (currencyConvert.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue )

    }

    if (currencyConvert.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue )

    }

    if (currencyConvert.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("uk-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue )

    }

    if (currencyConvert.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue )

    }

    if (currencyConvert.value == "franco") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ch-SZ", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue )

    }



    


}

function convertCurrencyName(){
    const currencyName = document.querySelector(".currencyname__convert")
    const currencyImage = document.querySelector(".img__currency")


    if (currencyConvert.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }

    if (currencyConvert.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencyConvert.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencyConvert.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencyConvert.value == "franco") {
        currencyName.innerHTML = "Franco Suiço"
        currencyImage.src = "./assets/franco.png"
    }


    if (currencyConvert.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

}


currencyConvert.addEventListener("change",convertCurrencyName)
currencyConvert.addEventListener("change", convertCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)




