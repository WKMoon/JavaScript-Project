var birth = new Date(2020, 1, 3);

console.log(birth);

function birthdayCalc(calDate){
    var currentDate = new Date();
 
    MScalDate = calDate.getTime();
    MScurrentDate = currentDate.getTime();

    MSdifference = MScalDate - MScurrentDate;

    console.log(MSdifference);



    MSdifference = MSdifference/1000; 

    console.log(MSdifference);
    


    let seconds = Math.floor(MSdifference % 60);

    MSdifference = (MSdifference - seconds) /60;


    let minutes = Math.floor(MSdifference % 60);

    MSdifference = (MSdifference - minutes) / 60;



    let hours = Math.floor(MSdifference % 24);

    MSdifference = (MSdifference - hours) / 24;



    let days = Math.floor(MSdifference % 24);


    let weeks = Math.floor(MSdifference / 7);


    let time = weeks + ' weeks, ' + days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds';
    

    return time;  
    

  }//end function//

console.log(birthdayCalc(birth));

// https://www.htmlgoodies.com/html5/javascript/calculating-the-difference-between-two-dates-in-javascript.html

