window.onload = setcolumns();

function setcolumns()
{
    let root = document.documentElement;
    root.style.setProperty('--columns', columns);
    var real_columns = columns + 2;
    root.style.setProperty('--clock-start', 1);
    root.style.setProperty('--clock-end', real_columns / 2);
    root.style.setProperty('--weather-start', real_columns / 2);
    root.style.setProperty('--weather-end', real_columns -1);
}
generateHTML();
function generateHTML()
{
    if (links.length == icons.length)
    {

        var counter = 1;
        var container = document.getElementById("container");
        links.forEach(link => {
            var linkId = "link" + counter;
            var iconId = "icon" +  counter;
            var div = document.createElement("div");
            div.classList.add("card", "clickable");
            
            var a = document.createElement("a");
            a.id = linkId;
            a.href = link;
            
            var img = document.createElement("img");
            img.id = iconId;
            img.src = `/icons/links/${icons[counter -1]}`;
            img.alt = `${iconId}`;


            a.appendChild(img);
            div.appendChild(a);
            container.appendChild(div);
            
            counter = counter + 1;
        });
    } else {
        alert ("Link <> Icon mismatch!");
    }
}


