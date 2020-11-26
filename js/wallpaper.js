window.onload = setwallpaper();

function setwallpaper()
{
    let root = document.documentElement;
    var d = new Date();
      var n = d.getHours();
        if (n > 20 || n < 7){
            root.style.setProperty('--wp', "url(./wallpaper/night.jpg)");
        }

        else if (n > 6 && n < 11){
            root.style.setProperty('--wp', "url(./wallpaper/sunrise.jpg)");
        }

        else if (n > 16 && n < 21){
            root.style.setProperty('--wp', "url(./wallpaper/sunset.jpg)");
        }

        else {
            root.style.setProperty('--wp', "url(./wallpaper/day.jpg)");
        }      
}


