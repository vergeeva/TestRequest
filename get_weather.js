/*const token = "eb081de1da8d4a85b98123453233001";
var url = 'http://api.weatherapi.com/v1/current.json';*/
let token = "eb081de1da8d4a85b98123453233001";

function getWeather() {
    let city = document.getElementById("Cities").value;
    let url = `http://api.weatherapi.com/v1/current.json?key=${token}&q=${city}&lang=ru`;
    // Отправляем запрос
    axios.get(url).then(res => {
        // Выводим результат в консоль браузера
        console.log(res.data);
        // Вывод города
        document.querySelector('.city').innerHTML = res.data.location.name;
        // Вывод температуры воздуха
        document.querySelector('.temp').innerHTML = res.data.current.temp_c;
        // Вывод температуры по ощущениям
        document.querySelector('.feel').innerHTML = res.data.current.feelslike_c;
        // Вывод влажности
        document.querySelector('.humidity').innerHTML = res.data.current.humidity;
        // Вывод скорости ветра
        document.querySelector('.wind').innerHTML = res.data.current.wind_kph;
    })
}

/*
function select_city()
{
    let SelectCity = document.getElementById("Cities").value;
    document.querySelector('.city').innerHTML = SelectCity;
}*/
