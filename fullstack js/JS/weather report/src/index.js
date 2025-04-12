import css from "./style.css"
import rain from "./assets/rain.svg"
import clear from "./assets/clear-day.svg"
import partly from "./assets/partly-cloudy-day.svg"
import cloudy from "./assets/cloudy.svg"

const icons = {
    "rain": rain,
    "clear-day": clear,
    "partly-cloudy-day": partly,
    "cloudy": cloudy
}

localStorage.setItem("icons", JSON.stringify(icons))