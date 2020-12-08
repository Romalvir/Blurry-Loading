//reference the elements you want to target
const loadText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")

//initialize a value

let load = 0

//updates every 30 seconds
let int = setInterval(bluring, 30)

//function for blurring

function bluring(){
	//increment load
	load++

	if(load > 99){
		clearInterval(int)
	}
	loadText.innerText = `${load}%`
  	loadText.style.opacity = scale(load, 0, 100, 1, 0)
  	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
