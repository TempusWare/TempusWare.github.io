var infoboxes = {
  tempusware: document.getElementById("infobox-tempusware"),
  waddleonrewritten: document.getElementById("infobox-waddleonrewritten"),
  codingprojects: document.getElementById("infobox-codingprojects"),
};
var boxshown = {
  tempusware: false,
  waddleonrewritten: false,
  codingprojects: false,
};
function reveal(infobox) {
  var boxelement = document.getElementById("infobox-" + infobox);
  var iconelement = document.getElementById("icon-" + infobox);
  if (!boxshown[infobox]) {
    boxelement.style.width = "60vw";
    iconelement.style.width = "15vh";
    iconelement.style.height = "15vh";
    boxshown[infobox] = true;
  } else {
    boxelement.style.width = "0px";
    iconelement.style.width = "30vh";
    iconelement.style.height = "30vh";
    boxshown[infobox] = false;
  };
};

var displaybox = document.getElementById("contentdisplay");
function display(mediatype, source) {
  if (displaybox.children.length != 0) {displaybox.removeChild(displaybox.children[0])};
  if (mediatype == "video") {
    var iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.src = "https://www.youtube.com/embed/" + source + "?rel=0&amp;showinfo=0";
    iframe.frameBorder = "0";
    iframe.allowFullScreen = "allowFullScreen";
    displaybox.appendChild(iframe);
  };
  if (mediatype == "website") {
    var iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.src = source;
    iframe.frameBorder = "0";
    iframe.style.background = "white";
    displaybox.appendChild(iframe);
  };
  window.location = "#contentdisplay";
};
