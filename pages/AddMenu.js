//this is the javascript to add in the menu for the augsburg virtual tour project
var buttons = [ //this is an array that we will add into the localStorage
  {
    "title": "Home",
    "link": "SchoolSelection.html",
  },
  {
    "title": "Financial Aid Calculator",
    "link": "financialaid.html",
  },
  {
    "title": "Athletics",
    "link": "AthleticsPage.html",
  },
  {
    "title": "Apply Now",
    "link": "https://admissions.augsburg.edu/apply/",
  }
];


window.addEventListener("DOMContentLoaded", loadMain);

//this function loads the sidebar options into the html from the array above
function loadMain(){
  var testButtonObject = localStorage.getItem("Home"); //pulls the item with the key "Home" from local storage
  if( testButtonObject == null) { //this checks if the options have already been loaded in
      for( var i = 0; i < buttons.length; i++) {
          var aButton = buttons[i];
          localStorage.setItem( aButton.title, JSON.stringify(aButton));
          /* ^^^ this adds the item into local storage with the key equal to the
          Title and the value equal to the JSON version of the variable aButton.
          */
      }
  }
  loadMenuButton(); //calls the next function when done
}
function loadMenuButton(){
  var listing = "<header> Menu </header> \n"; //saves the "listing" which will be the new html we are adding in
  listing += "<ul>\n"; //adding another thing into the html
    for( var j = 0; j < localStorage.length; j ++) {
        var aBookString = localStorage.getItem( localStorage.key(j));
        var aBookObject = JSON.parse( aBookString); //Takes the string from local storage and parses the value
        listing += "<li> <a href=\""+aBookObject.link+"\">" + aBookObject.title + "</a></li>\n";
        /* ^^^ adds in one of the options from local storage to the ul with each iteration*/
    }
    listing += "</ul>\n"; //finishes off the html that we're adding in
    var navNodes = document.getElementsByClassName("sidebar"); //locates the element with the "sidebar" class
    var navNode = navNodes[0]; //takes the first node of all the nodes with classname "sidebar"
    navNode.innerHTML = listing; //adds in our "listing" into the html
    //styleMenuSelections();
}
