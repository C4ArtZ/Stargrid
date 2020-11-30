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


