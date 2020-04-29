(function(){
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    // balldontlie
    .then(function(response){
        console.log(response);

        return response.json();
    })



    .then (function(myJson){
        document.getElementById("demo").innerHTML += "Remaining: "+myJson.remaining+"<br/>"
                +" Deck_id: "+myJson.deck_id+"<br/>"
                +" Shuffled: "+myJson.shuffled+"<br/>"
                +" Success: "+myJson.success+"<br/>"
                +"<br/><br/>";

                var id = [];
                id.push(myJson.deck_id);

                fetch("https://deckofcardsapi.com/api/deck/"+id[0]+"/draw/?count=5")
                // fetch('https://www.mikecaines.com/cards/royalflush.json')
                // fetch('https://www.mikecaines.com/cards/straightflush.json')
                // fetch('https://www.mikecaines.com/cards/fourofakind.json')
                // fetch('https://www.mikecaines.com/cards/fullhouse.json')
                // fetch('https://www.mikecaines.com/cards/flush.json')
                // fetch('https://www.mikecaines.com/cards/highstraight.json')
                // fetch('https://www.mikecaines.com/cards/lowstraight.json')
                // fetch('https://www.mikecaines.com/cards/threeofakind.json')
                // fetch('https://www.mikecaines.com/cards/twopair.json')
                // fetch('https://www.mikecaines.com/cards/pair.json')
                // fetch('https://www.mikecaines.com/cards/acehigh.json')                
                
                .then(function(response2){
                    console.log(response2);
                    return response2.json();
                })
        

                .then (function(myJson2){
                    var card = [];
                    var suitInfo = [];
                    var valueInfo = [];
                        document.getElementById("card").innerHTML += "Remaining: "+myJson2.remaining+"<br/>"
                        +" Deck_ID: "+myJson2.deck_id+"<br/><br/>"
                        // +" Cards: "+myJson2.cards+"<br/>"
                    for(var i = 0; i < 5; i++){

                        document.getElementById("card").innerHTML += " Suit: "+myJson2.cards[i].suit+"<br/>"
                        +" Value: "+myJson2.cards[i].value+"<br/>"
                        +" Image: "+myJson2.cards[i].image+"<br/>"
                        +" Code: "+myJson2.cards[i].code+"<br/>"
                        +" Images: "+myJson2.cards[i].images.svg+"<br/>"
                        +" Images: "+myJson2.cards[i].images.png+"<br/><br/><br/>";
                        card.push(myJson2.cards[i].image);
                        suitInfo.push(myJson2.cards[i].suit);
                        valueInfo.push(myJson2.cards[i].value);

                        if (valueInfo.includes("JACK")) {
                            valueInfo.splice(valueInfo.indexOf("JACK"), 1);
                            valueInfo.push('11');
                        }//end if
                        else if (valueInfo.includes("QUEEN")) {
                            valueInfo.splice(valueInfo.indexOf("QUEEN"), 1);
                            valueInfo.push('12');
                        }//ense else if
                        else if (valueInfo.includes("KING")) {
                            valueInfo.splice(valueInfo.indexOf("KING"), 1);
                            valueInfo.push('13');
                        }//end else if
                        else if (valueInfo.includes("ACE")) {
                            valueInfo.splice(valueInfo.indexOf("ACE"), 1);
                            valueInfo.push('14');
                        }//end else if

                    }//end for
                    +" Success: "+myJson2.success+"<br/>"

                    var intvalueInfo = valueInfo.map(Number);
                    intvalueInfo.sort((a, b) => a - b);
                    // console.log(intvalueInfo);
                    // console.log(valueInfo);


                    for (i = 0; card.length > i; i++)
                    {
                      var img = new Image(200, 200);
                      img.src = card[i];
                
                      var src = document.getElementById("image");
                      src.appendChild(img);
                    }//end for


                    // https://stackoverflow.com/questions/59510349/how-to-recognise-full-house-and-two-pair-in-a-javascript-poker-game
                    function Dup(intValue) {
                        let obj = {}
                        for(let x of intValue){
                            obj[x] = (obj[x] || 0) + 1;
                        }//end for
                        return Object.values(obj);
                    }//end 
            
                    function consecutive(intValue){
                        var seq=false;
                        var count=0;
                        for(let i=0; i < intValue.length; i++){
                            if(intValue[i]+1==intValue[i+1]){
                                count++;
                            }//end if
                            else{
                                count=0;
                            }//end else
                            if(count === 4){
                                seq=true;
                            }//end if
                        }//end for
                        return seq;
                    }//end cons

                    function isRoyal(s){
                        if(s[0] === s[1] && s[0] === s[2] && s[0] === s[3] && s[0] === s[4]){
                            console.log(suitInfo);
                            return true;
                        }//end if
                        else return false;
                    }//end isRoyal


                    function isStraight(v){
                        if(v[0]+1 == v[1] && v[0]+2 == v[2] && v[0]+3 == v[3] && v[0]+4 == v[4]){
                                return true;
                        }//end if
                        else return false;
                    }//end isStraight
            
                    
                    var dupSort = Dup(intvalueInfo);
                    dupSort.sort((a, b) => a - b);
                    console.log(dupSort);



                    function HighPoker(){
                        if(intvalueInfo.reduce((a, b) => a + b, 0) === 60 && isRoyal(suitInfo) === true){
                            console.log("Royal Flush");
                        }//end if

                        else if(isRoyal(suitInfo) === true && isStraight(intvalueInfo) === true){
                            console.log(intvalueInfo);
                            console.log("Straight Flush");
                        }//end else if

                        else if(dupSort[1] === 4){
                            console.log("Four of a kind");
                        }//end else if

                        else if (dupSort[0] === 2 && dupSort[1] === 3) {
                            console.log("Full House");
                        }//end else if
                
                        else if (isRoyal(suitInfo) === true) {
                            console.log("Flush");
                        }//end else if
                
                        else if (isStraight(intvalueInfo) === true) {
                            console.log("Straight")
                        }//end else if

                        else if (intvalueInfo[0] === 2 && intvalueInfo[1] === 3 && intvalueInfo[2] === 4 && intvalueInfo[3] === 5 && intvalueInfo[4] === 14) {
                            console.log("Low Straight");
                        }//end else if
                
                        else if (dupSort[2] === 3) {
                            console.log("Three of a Kind");
                        }//end else if
                
                        else if (dupSort[1] === 2 && dupSort[2] === 2) {
                            console.log("Two pairs");
                        }//else if
                
                        else if (dupSort[3] === 2) {
                            console.log("A Pair");
                        }//end else if

                        else if (intvalueInfo[4] === 14) {
                            console.log("Ace High");
                        }//end else if

                        else{
                            console.log("High Card");
                        }

                    }//end HighPoker




                    return HighPoker();
                })
                

            });

})();