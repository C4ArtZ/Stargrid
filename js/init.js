window.onload = initialize();

function initialize(){
    
    var counter = 1;
    links.forEach(link => {
        var id = "link" + counter;
        var element = document.getElementById(id);

        element.href = link;
        counter = counter + 1;
    });

    counter = 1;
    icons.forEach(icon =>{
        var id = "icon" + counter
        var element = document.getElementById(id);

        element.src = "icons/links/" + icon;
        counter = counter + 1;
    });
};