var cats = [
    {
        name: "Merv",
        pic: "images/cat.jpg",
        clicks: 0
    },
    {
        name: "John",
        pic: "images/cat2.jpg",
        clicks: 0
    },
    {
        name: "Hector",
        pic: "images/cat3.jpg",
        clicks: 0
    },
    {
        name: "Luther",
        pic: "images/cat4.jpg",
        clicks: 0
    },
    {
        name: "Sam",
        pic: "images/cat5.jpg",
        clicks: 0
    },

];
var catHtml = '';
var catlist = document.getElementById('catlist');
var catEvents = [];

for (cat in cats) {
    var rowdiv = document.createElement('div');
    rowdiv.className = 'row';
    catlist.appendChild(rowdiv);

    var picdiv = document.createElement('div');
    picdiv.className = 'col-md-4';
    rowdiv.appendChild(picdiv);

    var pic = document.createElement('img');
    pic.className = 'img-responsive';
    pic.src = cats[cat].pic;
    picdiv.appendChild(pic);

    var namediv = document.createElement('div');
    namediv.className = 'col-md-4';
    rowdiv.appendChild(namediv);

    var catname = document.createElement('h1');
    catname.textContent = cats[cat].name;
    namediv.appendChild(catname);

    var clicksdiv = document.createElement('div');
    clicksdiv.className = 'col-md-4';
    rowdiv.appendChild(clicksdiv);

    var clicks = document.createElement('h1');
    clicks.id = 'click' + cat.toString();
    clicks.textContent = cats[cat].clicks;
    clicksdiv.appendChild(clicks);

    pic.addEventListener('click', (function(clickscopy){
        return function(){
            var clickscopyint = parseInt(clickscopy.textContent);
            clickscopyint = clickscopyint + 1;
            clickscopy.textContent = clickscopyint.toString();
            var jumbopic = document.createElement('img');
            jumbopic.src = pic.src;
            var jumbo = document.getElementById('maincat');
            jumbo.appendChild(jumbopic);
        };
    })(clicks));
};
//for (cat in cats){
//    catHtml =   catHtml + '<div class="row">' +
//                    '<div class="col-md-4"><img id="catpic' + cat + '" class="img-responsive" src="' + cats[cat].pic + '"></div>' +
//                        '<div class="col-md-4"><h1>' + cats[cat].name + '</h1></div>' +
//                    '<div class="col-md-4"><h1 id="clicks' + cat + '">' + cats[cat].clicks + '</h1></div>' +
//                '</div>\n';
//    catlist.innerHTML = catHtml;
//    
//    catEvents.push(document.getElementById('catpic' + cat));
//};

console.log(catEvents);

var catpic;
for (catEvent in catEvents){
    
    catEvents[catEvent].addEventListener('click', function( event ) {
        console.log('ok');
        alert('okay');
    });
    console.log(catEvents[catEvent]);
};
console.log(catEvents);
