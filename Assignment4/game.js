// Additional Feature - Game will be reset in 5 seconds after get "You did it!! This game will be reset in 5 seconds" message.
(function(){
        fetch('https://www.mikecaines.com/3inarow/sample.json')
        .then(function(response){
            return response.json();
        })
        .then(function(json){
    //https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
            let body = document.getElementById("theGame");
            let tblBody = document.createElement("TABLE");
            tblBody.setAttribute("border", "1");

            let button = document.createElement('BUTTON'); 
            button.setAttribute('id','button'); 
            let text = document.createTextNode("Check"); 
            let exit = document.createTextNode("Exit");
            let result = document.createElement("p");
            let label = document.createElement('label'); 
            label.appendChild(document.createTextNode('Show incorrect squares')); 

            let show = document.createTextNode("");
            let replaceShow = document.createTextNode("");

            //https://www.w3schools.com/jsref/dom_obj_checkbox.asp
            let box = document.createElement("INPUT");
            box.setAttribute("type", "checkbox");
            box.setAttribute('id','box');
            body.appendChild(box);

            button.appendChild(text); 
            body.appendChild(tblBody);

            body.appendChild(button);
            
            body.appendChild(box);
            body.appendChild(label);

            result.appendChild(show);
            body.appendChild(result);


            let clickNum = 0;

            let correctArr = [];

            function oneGame(){
            //correctState1 = blue, correctState2 = white
            for (let i = 0; i < json.rows.length; i++) {
                var row = tblBody.insertRow(i);
                for (let j = 0; j < json.rows.length; j++) {
                    var cell = row.insertCell(j);
                    let color = document.createElement("Img");
                    color.setAttribute('id','color');
                    cell.setAttribute('id','td'+(1+j) + (1+i)); //col + row
                    
                    // console.log(cell);
                    correctArr.push(json.rows[i][j].correctState);
                    if(json.rows[i][j].canToggle == false){
                        if(json.rows[i][j].correctState == 1){
                                color.setAttribute('src','blue.jpg');
                                color.setAttribute('height', "70px");
                                color.setAttribute('width', "70px");
                        }//end if
                        else{
                            color.setAttribute('src','white.jpg');
                            color.setAttribute('height', "70px");
                            color.setAttribute('width', "70px");
                        }//end else
                    }//end if
                    else{
                        color.setAttribute('src','black.jpg');
                        color.setAttribute('height', "70px");
                        color.setAttribute('width', "70px");
                    }//end else


                    cell.onclick = function(){
                        if(json.rows[i][j].canToggle == true){
                            if(clickNum === 0){
                                color.setAttribute('src','blue.jpg');
                                clickNum++;
                            }//end if
                            else if(clickNum === 1){
                                color.setAttribute('src','white.jpg');
                                clickNum++;
                            }//end else if
                            else{
                                color.setAttribute('src','black.jpg');
                                clickNum = 0;
                            }//end else
                        }//end if
                        else{
                            if(json.rows[i][j].currentState === 1){
                                color.setAttribute('src','blue.jpg');
                            }//end if
                            else if(json.rows[i][j].currentState === 2){
                                color.setAttribute('src','white.jpg');
                            }//end else
                        }//end else
                    };//end onclick

                    cell.appendChild(color);
                }//end cell for
            }//end row for    



            let checkArr = [];

            document.getElementById('button').onclick = function() {
                result.removeChild(show);

                let img = document.getElementsByTagName("img");
                checkArr = [];
                for(let c = 0; c < img.length; c++){
                    if(img[c].getAttribute('src')=='blue.jpg' || img[c].getAttribute('src')=='errorBlue.jpg'){
                        checkArr.push(1);
                    }//end if
                    else if(img[c].getAttribute('src')=='white.jpg' || img[c].getAttribute('src')=='errorWhite.jpg'){
                        checkArr.push(2);
                    }//end else if
                    else{
                        checkArr.push(0);
                    }//end else
                }//end for

                let midArr = [];
                for(let s = 0; s < checkArr.length; s++){
                    if(checkArr[s] === correctArr[s]){
                        midArr.push(true);
                    }//end if
                    else if(checkArr[s] == 0){
                        midArr.push(undefined);
                    }//end else if
                    else{
                        midArr.push(false);
                    }//end else
                }//end for

                if(JSON.stringify(correctArr) == JSON.stringify(checkArr)){
                    show = document.createTextNode("You did it!! This game will be reset in 5 seconds");
                    replaceShow = document.createTextNode("You did it!! This game will be reset in 5 seconds");

                    setTimeout(function(){location.reload(oneGame)},5000);

                    }//end if
                    
                else{
                    if(!midArr.includes(false)){
                        show = document.createTextNode("So far so good");
                        replaceShow = document.createTextNode("So far so good");

                    }//end if
                    else{
                        show = document.createTextNode("Something is wrong");
                        replaceShow = document.createTextNode("Something is wrong");

                    }//end else
                }//end else

                result.appendChild(show);
                body.appendChild(result);

                if (box.checked == true)
                {
                    let img = document.getElementsByTagName("img");
                    for(let e = 0; e < checkArr.length; e++){
                        if(checkArr[e] != correctArr[e]){
                            if(img[e].getAttribute('src')=='blue.jpg'){
                                img[e].setAttribute('src','errorBlue.jpg');
                            }//end if
                            else if(img[e].getAttribute('src')=='white.jpg'){
                                img[e].setAttribute('src','errorWhite.jpg');
                            }//end else if
                        }//end if
                    }//end for
                }//end if
                else{
                    let img = document.getElementsByTagName("img");
                    for(let e = 0; e < checkArr.length; e++){
                        if(checkArr[e] != correctArr[e]){
                            if(img[e].getAttribute('src')=='errorBlue.jpg'){
                                img[e].setAttribute('src','blue.jpg');
                            }//end if
                            else if(img[e].getAttribute('src')=='errorWhite.jpg'){
                                img[e].setAttribute('src','white.jpg');
                            }//end else if
                        }//end if
                    }//end for
                }//end else
            }//end button onclick
        }//end oneGame
        oneGame();

        });//end fetch

})();//end function