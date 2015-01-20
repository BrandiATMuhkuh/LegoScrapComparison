/**
 * Created by jbr134 on 20/01/15.
 */

var phantom = require('phantom');


startPhantom();
function startPhantom(){
    phantom.create(function(ph) {
        level1(ph);
    })
}


function level1(ph){


    return ph.createPage(function(page) {

        return page.open("http://www.bricklink.com/catalogTree.asp?itemType=S", function(status) {
            console.log("opened site? ", status);

            return page.evaluate(function() {
                var h2Arr = [];

                var t = document.querySelectorAll("table")[8].querySelectorAll("tr")[11].querySelectorAll("a");

                for (var i=0; i<t.length; i++) {
                    h2Arr.push({
                        "year" : t[i].innerHTML,
                        "link" : t[i].href});

                }

                return h2Arr;

            }, function(linkList) {

                //console.log(linkList);

                for (var i=0; i<linkList.length; i++) {

                    console.log(linkList[i]);


                    /*
                    if(linkList[a].href !== undefined){
                        //openYearPages(linkList[a].href, linkList[a].innerHTML);
                    }*/
                }

                page.close();

                //ph.exit();
            });


        });
    });
}