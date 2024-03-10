let hr = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

let d = document.getElementById("day");
let m = document.getElementById("month");
let y = document.getElementById("year");


setInterval(() => {
    let currentTime = new Date();
if(currentTime.getHours()<10)
{
    hr.innerHTML = "0"+currentTime.getHours();
}
else
{
    hr.innerHTML = currentTime.getHours();
}
if(currentTime.getMinutes()<10)
{
    mins.innerHTML = "0"+currentTime.getMinutes();
}
else
{
    mins.innerHTML = currentTime.getMinutes();
}
if(currentTime.getSeconds()<10)
{
    secs.innerHTML = "0"+currentTime.getSeconds();
}
else
{
    secs.innerHTML = currentTime.getSeconds();
}

//date
if(currentTime.getDate()<10)
{
    d.innerHTML = "0"+currentTime.getDate();
}
else
d.innerHTML = currentTime.getDate();
if(currentTime.getMonth()<10)
{
    m.innerHTML = "0"+(currentTime.getMonth()+1);
}
else
m.innerHTML = (currentTime.getMonth()+1);
if(currentTime.getFullYear()<10)
{
    y.innerHTML = "0"+currentTime.getFullYear();
}
else
y.innerHTML = currentTime.getFullYear();


}, 1000);
