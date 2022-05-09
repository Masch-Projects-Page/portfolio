/* -------------------------------------------------------------------------- */
/* [JS] - Main
/* -------------------------------------------------------------------------- */
/* > [1] - More - Part
/* > [2] - ...
/* > [3] - ...
/* > [4] - ...
/* -------------------------------------------------------------------------- */




/* ----------------------------------------------------------- */ 
/* 1 - More - Part 
/* ----------------------------------------------------------- */ 

/* 2 x input type  checkbox */
var chkMoreDoc = document.getElementById("chk-more-open-closed-doc");
var chkMoreMotivation = document.getElementById("chk-more-open-closed-motivation");

/* 2 x close div labels */
var moreDocLabel = document.getElementById("more-doc-x");
moreDocLabel.style.fontSize = "calc(.1vw + 1em)";

var moreMotivationLabel = document.getElementById("more-motivation-x");
moreMotivationLabel.style.fontSize = "calc(.1vw + 1em)";

/* 3 x tech doc radios */
var listMoreRadioDocs = document.querySelectorAll('input[id^="radio-more-doc"]');
var listMoreRadioMotivation = document.querySelectorAll('input[id^="radio-more-motivation"]');

/* 4 x motivation radios */



function setAndUnsetX() {

    var radioDocChecked = false;
    var radioMotivationChecked = false;

    console.log(" open >> setAndUnsetX ");





   /* ----------------------------------------- */
   /* check which x should be set               */
   /* ----------------------------------------- */
   listMoreRadioDocs.forEach(radioElement => {
    
        /* ----------------------------------- */
        /* if radio checked 
        /* ----------------------------------- */
        if( radioElement.checked == true ) {

            radioDocChecked = true;

        }
       
    
   });

   /* ----------------------------------------- */
   /* check which x should be set               */
   /* ----------------------------------------- */
   listMoreRadioMotivation.forEach(radioElement => {
    
        /* ----------------------------------- */
        /* if radio checked 
        /* ----------------------------------- */
        if( radioElement.checked == true ) {

            radioMotivationChecked = true;

        }
   
    });






    /* --------------------------------------------- */
    /* if no radio is checked -> set grey x */
    /* --------------------------------------------- */
    if( radioDocChecked == false ) {

        // show grey x
        moreDocLabel.innerHTML = "✖️";
        console.log("set grey x");
        
    } else {

        // show red x
        moreDocLabel.innerHTML = "❌";
        console.log("set red x");

    }


    /* --------------------------------------------- */
    /* if no radio is checked -> set grey x */
    /* --------------------------------------------- */
    if( radioMotivationChecked == false ) {

        // show grey x
        moreMotivationLabel.innerHTML = "✖️";
        console.log("set grey x");
        
    } else {

        // show red x
        moreMotivationLabel.innerHTML = "❌";
        console.log("set red x");

    }









    /* --------------------------------------------------- */
    /* reset checked radio panel if x is setted 
    /* --------------------------------------------------- */
    if( chkMoreDoc.checked == true ) {
        
        listMoreRadioDocs.forEach(radioElement => {
    
            radioElement.checked = false;    
        
       });

       /* reset checkbox x */
       chkMoreDoc.checked = false;
       moreDocLabel.innerHTML = "✖️";


    }



    /* --------------------------------------------------- */
    /* reset checked radio panel if x is setted 
    /* --------------------------------------------------- */
    if( chkMoreMotivation.checked == true ) {
        
        listMoreRadioMotivation.forEach(radioElement => {
    
            radioElement.checked = false;    
        
       });

       /* reset checkbox x */
       chkMoreMotivation.checked = false;
       moreMotivationLabel.innerHTML = "✖️";


    }

  
}




/* -------------------------------- */
/* Page reload set default 
/* -------------------------------- */
window.addEventListener('load', (event) => {

    console.log("Page Relaod -> setAndUnsetX() ");

    setAndUnsetX();
}); 

/* -------------------------------- */
/* Click Listener
/* -------------------------------- */
window.addEventListener('click', (event) => {

    console.log("Page Relaod -> setAndUnsetX() ");

    setAndUnsetX();
}); 


