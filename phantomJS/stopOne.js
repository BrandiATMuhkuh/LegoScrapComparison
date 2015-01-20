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

                page.close();


                for (var i=0; i<linkList.length; i++) {

                    //console.log(linkList[i]);

                    level2(ph, linkList[i]);
                }



                //ph.exit();
            });


        });
    });
}


function level2(ph, mobj){
    console.log(mobj);

    return ph.createPage(function(page) {
        return page.open(mobj.link, function(status) {
            //console.log("opened site? ", status);

            setTimeout(function() {
            return page.evaluate(function() {

                var back = document.querySelectorAll("table")[8].querySelectorAll("tr")[4].querySelectorAll("td")[0].querySelectorAll("b")[2].innerHTML;

                return back;
            }, function(ret){
                page.close();
                console.log(mobj.year, ret);
            });
            }, 3000);

        });
    });
}