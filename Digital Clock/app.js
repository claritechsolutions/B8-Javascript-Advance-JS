function updateClock(){
    var now = new Date();
    var dname = now.getDay();
    var mo = now.getMonth();
    var dnum = now.getDate();
    var yr = now.getFullYear();
    var hou = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var pe = "AM";

    if(hou==0){
        hou =12;
    }
    if(hou > 12){
        hou = hou - 12;
        pe = "PM";
    }




    var months = ["January", "February", "March", "April","May","June","July","August","September", "October", "November", "December"];
    var week = ["Sunday","Monday","Tuesday","Thrusday","Friday","Saturday"];
    var ids = ["dayname","month","daynum","year", "hour","minutes","seconds","period"]
    var values = [week[dname],months[mo],dnum,yr,hou,min,sec,pe];
    for( var i=0; i< ids.length;i++)
    {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

}

function initClock()
{
    updateClock();
    window.setInterval("updateClock()", 1);
}