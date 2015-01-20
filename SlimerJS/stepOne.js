/**
 * Created by jbr134 on 20/01/15.
 */

// Create SlimerJs
var webpage = require('webpage').create();



webpage
    .open('http://www.bricklink.com/catalogTree.asp?itemType=S') // loads a page

    .then(function(){
        console.log("i am beautiful");

        var linkList = webpage.evaluate(function () {
            return document.querySelectorAll("table")[8].querySelectorAll("tr")[11].querySelectorAll("a");
        });
        //console.log(linkList);

        for(a in linkList){

            if(linkList[a].href !== undefined){
                //console.log(linkList[a].innerHTML + linkList[a].href);
                webpage.close();
                openYearPages(linkList[a].href, linkList[a].innerHTML);
            }
        }

       //slimer.exit();
    });


function openYearPages(yearLink, year){
    console.log("open Year: "+year + " " + yearLink);

    return webpage
        .open(yearLink)
        .then(function(pg){
            console.log("i am beautiful");
            var linkList = webpage.evaluate(function () {
                return document.title;
            });
            console.log(linkList);
            this.close();
        });

}