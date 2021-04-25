const toggle = document.querySelector('.toggle');
const hourEl = document.querySelector('.hour');
const minutesEl = document.querySelector('.minute');
const secondsEl = document.querySelector('.seconds');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const months =["January","February","March","April","May","June","July","August","September","October","November","December"];



toggle.addEventListener('click',(e) =>{
    const html = document.querySelector('html');
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
       e.target.innerHTML ='dark mode';
    }else{
        html.classList.add('dark');
        e.target.innerHTML ='light mode';
    }
})

function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hourtoshow = hours%12;
    const minute = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >=12 ? 'PM' :'AM';
    hourEl.style.transform =`translate(-50%, -100%) rotate(${scale(hourtoshow,0,11,0,360)}deg)`;
    minutesEl.style.transform =`translate(-50%, -100%) rotate(${scale(minute,0,59,0,360)}deg)`;
    secondsEl.style.transform =`translate(-50%, -100%) rotate(${scale(seconds,0,59,0,360)}deg)`;

    timeEl.innerHTML =`${hourtoshow}:${minute < 10 ? `0${minute}` : minute} ${ ampm}`;

    dateEl.innerHTML =`${days[day]} ${months[month]} ${date}`

   

}
function showQuote(){
    const darkqoute = document.querySelector('.dark-quote');

    if(darkqoute.classList.contains('show')){
        darkqoute.classList.remove('show')
    }else
    {
        darkqoute.classList.add('show')
    }
}

const scale =(number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
setInterval(setTime,1000);  
setInterval(showQuote,2000);   