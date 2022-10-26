let dateElement = document.querySelector("#date");

let currentTime=new Date()
let hours=currentTime.getHours();
if(hours< 10){
    hours=`0${hours}`;

}
let minutes=currentTime.getMinutes();
if(minutes<10){
    minutes=`0 ${minutes}`;
}

let dayIndex=currentTime.getDay();
let days=["Sun","Mon","Tue","Wed","Thur","Fri","Sart"]

dateElement.innerHTML=`${days[dayIndex]} ${hours}:${minutes}`;
