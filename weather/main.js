let input = document.getElementById(`cityInput`)
let btn = document.getElementById(`btn`)
let date = document.getElementById(`date`)
let city = document.getElementById(`city`)
let deg = document.getElementById(`deg`)
date.innerHTML = `${new Date().getFullYear()} - ${new Date().getMonth()} - ${new Date().getDate()}`
btn.onclick = function (){
    document.getElementById(`weatherInfo`).style.display = `block`
    let url = `https://api.weatherapi.com/v1/current.json?key=5d0f0b84251c4b42be4121741242705&q=${input.value}&aqi=no`
   fetch(url)
.then((res)=>{ 
    return res.json()
   
}).then((res)=>{
    city.innerHTML =  res[`location`][`name`]
  return res[`current`]
}).then((res)=>{
    deg.innerHTML =  res[`feelslike_c`]
}).catch(()=>{
    document.getElementById(`weatherInfo`).style.display = `none`
    input.style.border = `1px solid red`
    document.getElementById(`err`).innerHTML = `please entre a valid city`
})
}