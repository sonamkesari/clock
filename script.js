setInterval(clock_disp,500);
function clock_disp(){

    var time= new Date();

    var hr=time.getHours();
    var min=time.getMinutes();
    var sec= time.getSeconds();
    var ampm='AM';
    if(hr>12)
    {
        ampm='PM';
    }

    if(hr > 12)
    {
        hr=hr-12;
    }

    if(hr<10)
    {
        hr='0'+hr;
    }
    if(min<10)
    {
        min='0'+min;
    }
    if(sec<10)
    {
        sec='0'+sec;
    }

    document.getElementById('clockdivid').innerHTML=hr+':'+min+':'+sec+' '+ampm;
    
 
}


