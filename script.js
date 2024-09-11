let nav = document.querySelector("nav")
let h1 = document.querySelector("h1")
let themebtn = document.querySelector(".themebtn")
let container = document.querySelector(".container")
let h2 = document.querySelector("h2")
let form = document.querySelector("form")
let card = document.querySelector(".card")
let input = document.querySelector("input")
let btn = document.querySelector(".btn")
let card1 = document.querySelector(".card1")
let img = document.querySelector("img")
let h3 = document.querySelector("h3")
let h4 = document.querySelector("h4")
let p = document.querySelector("p")

let count = 0;

const changetheme = () =>{
    if (count % 2 === 0){
        nav.style.backgroundColor ="#32012F"
        nav.style.color ="white"
        themebtn.style.backgroundColor ="#F1F8E8"
        themebtn.style.color ="black"
        themebtn.innerHTML ="Light Mode"
        container.style.backgroundColor ="#153448"
        container.style.color ="white"
        card.style.backgroundColor ="#3C5B6F"
        card1.style.backgroundColor ="#3C5B6F"
        card1.style.Color ="white"
    }
    else {
        
        nav.style.backgroundColor ="#55AD9B"
        nav.style.color ="black"
        themebtn.style.backgroundColor ="#524C42"
        themebtn.style.color ="white"
        themebtn.innerHTML ="Dark Mode"
        container.style.backgroundColor ="#D8EFD3"
        container.style.color ="Black"
        card.style.backgroundColor ="#95D2B3"
        card1.style.backgroundColor ="#95D2B3"
    }
    count++ ;
}

let day = document.querySelector(".day")
let time = document.querySelector(".Time")

themebtn.addEventListener("click",changetheme)

const fetchWeather = async (e) => {
    e.preventDefault();
  
    try{
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=56d4afb5cb8e40ef9e6120603241506&q=${input.value}&aqi=yes`
      );
      const data = await response.json();
      card1.className = "card1";
      h3.innerText = data.current.temp_c;
      h4.innerText = data.location.name;
      p.innerText = data.current.condition.text;
    //   day.innerText = data.current.day;
    //   time.innerText = data.TimeZone.time;
      img.setAttribute("src", data.current.condition.icon);
        
    
    
    } catch (error) {
      window.alert("Invalid City Name");
    }
  
    form.reset();
  };
  
  form.addEventListener("submit", fetchWeather);
  