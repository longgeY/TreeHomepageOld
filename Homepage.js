function loadXMLDoc(funct) {
    //Code to do XML HTTP request (see slides) goes here
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Run a function to handle XML data recv’d
            myFunction1(this); //tree name
            //myFunction2(this); //image
            // buildWordLists(this);
        }
    };
    xhttp.open("GET", '1.xml', true);
    xhttp.send(); 
}

function myFunction1(xml) {
    var x, i, xmlDoc, txt;
    xmlDoc = xml.responseXML; //Response returned as XML data
    // txt = "";
    x = xmlDoc.getElementsByTagName("ThemeEntityAbridgedData");
    // txt = x[1].childNodes[1].innerHTML;
    // var imgLocation = x[1].childNodes[0].innerHTML;
    //console.log(imgLocation);
    for (i = 0; i< x.length; i++) {
        // txt += "<li>" + x[i].childNodes[1].innerHTML + "</li><br>";
        var txt = x[i].childNodes[1].innerHTML[0];
        // window.alert(txt);
        var uni = txt.charCodeAt(0)- 65;
        

        // Create an "li" node:
        var node = document.createElement("div");
        node.className = "tree";
        node.innerHTML = 
        '<img src="' + x[i].childNodes[0].innerHTML + '" class="treeimage" alt="Tree">' +
        '<p class="treetext">' + x[i].childNodes[1].innerHTML + "</p>"; 
                            
        //document.getElementsByTagName("div")

        document.getElementsByClassName("sec")[uni].appendChild (node);
                            
        //window.alert("done");
    }
        //imgLoc2 = "<img src=" + imgLocation + ">";
                        
        // document.getElementById("newHTML").innerHTML = txt;
}

function buildWordLists(xml){
    var x, i, xmlDoc, txt;
    xmlDoc = xml.responseXML; //Response returned as XML data
    // txt = "";
    x = xmlDoc.getElementsByTagName("ThemeEntityAbridgedData");

    for (i = 0; i< x.length; i++) {
        // txt += "<li>" + x[i].childNodes[1].innerHTML + "</li><br>";
        var txt = x[i].childNodes[1].innerHTML[0];
        // window.alert(txt);
        var uni = txt.charCodeAt(0)- 65;
        

        // Create an "li" node:
        var Word_ul = document.createElement("ul");
        Word_ul.className = "tree_Word";

        var Word_li = document.createElement("li");
        Word_li.className = "Tree_name"

        Word_li.innerHTML = '<li>' + '<a href="#">'+ x[i].childNodes[1].innerHTML + '</a>' + '</li>'; 
                            
        //document.getElementsByTagName("div")

        Word_ul.appendChild(Word_li);

        document.getElementById("menulist")[uni].appendChild (Word_ul);
                            
        //window.alert("done");
    }
        //imgLoc2 = "<img src=" + imgLocation + ">";
                        
        // document.getElementById("newHTML").innerHTML = txt;
}
                    
function createSections(){
    txt = "";
    for (var i = 0; i< 26; i++) {
        var chr = String.fromCharCode(65 + i);
        //txt += '<section class ="sec">'  + '<p class = "sectext"> <a href="#>' + chr + '"</a>' + chr + '</p>' + "</section><br>";
        txt += '<section class ="sec">'  + '<p class = "sectext">' + chr + '</p>' + "</section>";
    }
    document.getElementById("newHTML").innerHTML = txt;                    
}

function createLists(){
    txt = "";
    for (var i = 0; i< 26; i++) {
        var chr = String.fromCharCode(65 + i);
        //txt += '<section class ="sec">'  + '<p class = "sectext"> <a href="#>' + chr + '"</a>' + chr + '</p>' + "</section><br>";
        txt += '<li>' + '<a href=".tree'+ chr + '">' +chr + '</a>' + '</li><br>';
    }
    document.getElementById("menulist").innerHTML = txt;                    
}

function createWrodLists(){

}

function Search() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("menulist");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}