console.log("code is running properly")
let search = document.querySelector(".search-boss input")
let btn = document.querySelector(".icon")
let temp1 = document.querySelector(".temp p ")
let location1 = document.querySelector(".city ")
let humidity = document.querySelector(".data-1 p ")
let wind = document.querySelector(".data-2 p ")
let img = document.querySelector(".wheather-img ")
let tem11 = document.querySelector(".temp")
let data11 = document.querySelector(".data")
let empty = document.querySelector(".empty")

let cityvalue;


async function checkwheather(city) {


    let api = await fetch(`https://api.weatherapi.com/v1/current.json?key=5cd86b501d36485388d144719261604&q=${city}`);
    let data = await api.json();
    console.log(data)
    temp1.innerHTML = `${await data.current.temp_c} °C`;

    location1.innerHTML = city.toUpperCase();
    humidity.innerHTML = ` <p><img src="humidity.png" alt="" > ${await data.current.humidity} </p><p></p>`
    wind.innerHTML = `<p><img src="air.jpg" alt="">${await data.current.wind_kph} km/h</p> <p></p>`
    if (data.current.condition.text = "overcast") {
        img.innerHTML = `<img src="cloudy.png" alt="">`
    }
    else if (data.current.condition.text === "sunny") {
        img.innerHTML = `<img src="sun.webp" alt="">`
    }

    else {
        console.log("if statement contains eror")
    }

}
search.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        cityvalue = search.value
        checkwheather(cityvalue)

        if (cityvalue.length > 1) {
            img.classList.remove("none")
            tem11.classList.remove("none")
            data11.classList.remove("none")
            empty.innerHTML = ` <div class="empty"> </div>`
            empty.style.width = '0'
        }

    }
})
btn.addEventListener("click", () => {
    cityvalue = search.value

    checkwheather(cityvalue)


    if (cityvalue.length > 1) {
        img.classList.remove("none")
        tem11.classList.remove("none")
        data11.classList.remove("none")
        empty.innerHTML = ` <div class="empty"> </div>`
        empty.style.width = '0'

    }
})

