async function ConsultarClima() {
    const apiKey = "8889c888b7eb462c7edecf6be2c2a6f2";

    let cidade = document.getElementById("cidade").value;
    let countryCode = "BR";

    const dadosCidade = await fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${cidade},${countryCode}&limit=1&appid=${apiKey}`).then(
        (Response) => Response.json()
    );

    console.log(dadosCidade);

    let latCidade = dadosCidade[0].lat;
    let lonCidade = dadosCidade[0].lon;

    const tempCidade = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latCidade}&lon=${lonCidade}&appid=${apiKey}&units=metric&lang=pt_br`).then(
        (response) => response.json()
    );

    console.log(tempCidade);

    document.getElementById("tempmax").value = tempCidade.main.temp_max;
    document.getElementById("tempmin").value = tempCidade.main.temp_min;
    document.getElementById("clima").value = tempCidade.weather[0].description;
    document.getElementById("iconeclima").src = `https://openweathermap.org/img/wn/${tempCidade.weather[0].icon}.png`
    document.getElementById("umidade").value = tempCidade.main.humidity;
}