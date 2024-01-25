const baseUrl = "https://v6.exchangerate-api.com/v6/2ddfe954bb24f58e3b14c9ce/latest/USD";
document.addEventListener("DOMContentLoaded", () => {
    const currencies = [
        "AED",
        "AFN",
        "ALL",
        "AMD",
        "ANG",
        "AOA",
        "ARS",
        "AUD",
        "AWG",
        "AZN",
        "BAM",
        "BBD",
        "BDT",
        "BGN",
        "BHD",
        "BIF",
        "BMD",
        "BND",
        "BOB",
        "BRL",
        "BSD",
        "BTN",
        "BWP",
        "BYN",
        "BZD",
        "CAD",
        "CDF",
        "CHF",
        "CLP",
        "CNY",
        "COP",
        "CRC",
        "CUP",
        "CVE",
        "CZK",
        "DJF",
        "DKK",
        "DOP",
        "DZD",
        "EGP",
        "ERN",
        "ETB",
        "EUR",
        "FJD",
        "FKP",
        "FOK",
        "GBP",
        "GEL",
        "GGP",
        "GHS",
        "GIP",
        "GMD",
        "GNF",
        "GTQ",
        "GYD",
        "HKD",
        "HNL",
        "HRK",
        "HTG",
        "HUF",
        "IDR",
        "ILS",
        "IMP",
        "INR",
        "IQD",
        "IRR",
        "ISK",
        "JEP",
        "JMD",
        "JOD",
        "JPY",
        "KES",
        "KGS",
        "KHR",
        "KID",
        "KMF",
        "KRW",
        "KWD",
        "KYD",
        "KZT",
        "LAK",
        "LBP",
        "LKR",
        "LRD",
        "LSL",
        "LYD",
        "MAD",
        "MDL",
        "MGA",
        "MKD",
        "MMK",
        "MNT",
        "MOP",
        "MRU",
        "MUR",
        "MVR",
        "MWK",
        "MXN",
        "MYR",
        "MZN",
        "NAD",
        "NGN",
        "NIO",
        "NOK",
        "NPR",
        "NZD",
        "OMR",
        "PAB",
        "PEN",
        "PGK",
        "PHP",
        "PKR",
        "PLN",
        "PYG",
        "QAR",
        "RON",
        "RSD",
        "RUB",
        "RWF",
        "SAR",
        "SBD",
        "SCR",
        "SDG",
        "SEK",
        "SGD",
        "SHP",
        "SLE",
        "SLL",
        "SOS",
        "SRD",
        "SSP",
        "STN",
        "SYP",
        "SZL",
        "THB",
        "TJS",
        "TMT",
        "TND",
        "TOP",
        "TRY",
        "TTD",
        "TVD",
        "TWD",
        "TZS",
        "UAH",
        "UGX",
        "USD", 
        "UYU", 
        "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL",
    ];

    // get the list of the elements 
    const datalist1 = document.querySelector("#input");
    const datalist2 = document.getElementById("output");

    // Select option for input list
    currencies.forEach((currency) => {
        const option = document.createElement("option");
        option.value = currency;
        option.innerHTML = currency;
        datalist1.appendChild(option);
    });

    // Making the output list
    currencies.forEach((currency) => {
        const option = document.createElement("option");
        option.value = currency;
        option.innerHTML = currency;
        datalist2.appendChild(option);
    });

    const input = document.querySelector("#input");
    console.log(input.value);
    
    const outputCurrency = document.querySelector("#output");
    console.log(outputCurrency.value);

    let inputFlag = "";

    let outputFlag = "";

    input.addEventListener("change", (event) => {
        console.log(event);
        console.log("input :", event.target);
        let element = event.target
        inputFlag = element.value.slice(0, 2);
        console.log(inputFlag);
        let newImgSrc = `https://flagsapi.com/${inputFlag}/flat/64.png`;
        let img = element.parentElement.querySelector("img") ; 
        img.src = newImgSrc;
    })

    outputCurrency.addEventListener("change", (event) => {
        console.log("output : ", event.target.value);
        let element = event.target
        outputFlag = element.value.slice(0, 2);
        console.log(outputFlag);
        let newImgSrc = `https://flagsapi.com/${outputFlag}/flat/64.png`;
        // document.querySelector("#oImg").setAttribute("scr",newImgSrc);
        // document.querySelector("#oImg").src = newImgSrc;
        let img = element.parentElement.querySelector("img") ; 
        img.src = newImgSrc;



    })

    document.querySelector("form").onsubmit = function() {
        const amount = document.querySelector("#amount").value;

        fetch(baseUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            data.base_code=input.value;
            let rate = data.conversion_rates[outputCurrency.value];
            console.log(rate);
            rate = rate.toFixed(3);
            rate*=amount;
            document.querySelector(".result").textContent = `${amount} ${input.value} = ${rate.toFixed(2)} ${outputCurrency.value}`;
        })
        .catch(error => {
            console.log(`Error :`, error);
        });
        return false;
    };

});