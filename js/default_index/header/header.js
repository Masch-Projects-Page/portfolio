/* ----------------------------------------------------------------------------------------- */
/* [JS] - Header 
/* ----------------------------------------------------------------------------------------- */
/* > [1] - Registered - DOM HTML Header Elements 
/* > [2] - Global Variables 
/* > [3] - Functions - Header Handling ( Mobile & Desktop )
/* > [4] - Events Listener ( load , resize , scroll )
/* ----------------------------------------------------------------------------------------- */

console.log("Running header.js ");

/* ----------------------------------------------------------------------------- */
/* 1. Registered - DOM HTML Header Elements 
/* ----------------------------------------------------------------------------- */

    /* ---------------------------------------- */
    /* Header - Layoutelements          */
    /* ---------------------------------------- */
    var headerTopArea = document.getElementById("header-portfolio-top-area");
    var headerTopUnderline = document.getElementById("header-portfolio-underline-area-1");

    /* default smooth effects */
    headerTopArea.style.transition = "all .6s";

    
    /* ---------------------------------------- */
    /* Header - Title Img, Small Img            */
    /* ---------------------------------------- */
    var headerLogoBig = document.getElementById("header-img-big");
    var headerLogoSmall = document.getElementById("header-img-small");


    /* ---------------------------------------- */
    /* Header - Title & Sub Title Area          */
    /* ---------------------------------------- */
    var headerTitleArea = document.getElementById("header-portfolio-title-area");


    /* ------------------------------------ */
    /* Header - Matrix Values               */
    /* ------------------------------------ */
    var headerMatrixArea = document.getElementById("header-portfolio-js-matrix");

    var col1 = document.querySelectorAll("#header-portfolio-js-matrix > .h-m-col-1 > div");
    var col2 = document.querySelectorAll("#header-portfolio-js-matrix > .h-m-col-2 > div");
    var col3 = document.querySelectorAll("#header-portfolio-js-matrix > .h-m-col-3 > div");


    /* ------------------------------------ */
    /* Header - Anker Nav & Links           */
    /* ------------------------------------ */
    var headerAnkerContainer = document.getElementById("header-portfolio-nav");
    var headerAnkerLinks = document.querySelectorAll('#header-portfolio-nav > a');



    



/* ----------------------------------------------------------------------------- */
/* 2. Global Variables 
/* ----------------------------------------------------------------------------- */

    /* Matrix Values */
    var myInterval = "";
    var runMatrix = false;

    /* different heeader effects by scrolling */
    var mobileVersion = false;
    var scrolled = 0;

    /* scrolling content pos for setting anker link active */
    var current = "";

    /* calc scrolling area belongs to anker link */
    var mainDivTop = "";
    var mainDivHeight = "";








/* ---------------------------------------------------------------- */
/* 3. Functions - Header Handling ( Mobile & Desktop )
/* 
/*  3.1 Matrix Calc & helpful functions & one time invoke
    3.2 DOM set & reset header elements
    3.3 Set Active Anker Links by scrolling
    3.4 Header Handling Decisions 
    3.5 Set Anker Link Jump Points 
    3.6 Set Today Date
/* ---------------------------------------------------------------- */

    


/* -------------------------------------------------------------------- */
/* 3.1 Matrix Calc & helpful functions & one time invoke
/* -------------------------------------------------------------------- */

    /* e.g getRandomInt(3) = 0,1,2 */
    function getRandomInt(max) { 
        return Math.floor(Math.random() * max );
    }

    /* Generate 3 x 3 Random Matrix ( 1, 0 ) in 3 x 3 dom elements */
    function setMatrix33() {

        
        for( let c = 0; c < 3; c++ ) {

            for( let r = 0; r < 3; r++ ) {

                switch(c) {

                    case 0:

                        /*console.log("[Spalte 0] = " + getRandomInt(2) );*/
                        /* add random 0 or 1 to col 1 , each row  */
                        col1[r].innerHTML = getRandomInt(2); 

                    break;

                    case 1:

                        /* add random 0 or 1 to col 1 , each row  */
                        col2[r].innerHTML = getRandomInt(2);


                    break;

                    case 2:
                        
                        /* add random 0 or 1 to col 1 , each row  */
                        col3[r].innerHTML = getRandomInt(2);


                    break;
                }
            } 
        }
        
    }

    /* negate value 0 -> 1 , 1 -> 0 */
    function negateZeroOne( number ) {

        //console.log("[Übergabe]= " + number );

        if( number === "1" ) {

            //console.log("[1 soll zu 0 ]" );
            return "0";

        } else {

            //console.log("[0 soll zu 1 ]" );
            return "1";
        }

        
    }

    /* function which reset brown value colors */
    function resetTextColors ( posRow1 , posRow2, posRow3 ) {

        //console.log("---------------------------------------");
        //console.log("[Rows] = " + posRow1  + " - " + posRow2 + " - " + posRow3 );
        //console.log("---------------------------------------");

        col1[posRow1].style.color = "";
        col2[posRow2].style.color = "";
        col3[posRow3].style.color = "";
    }

    /* genearte 3 random row pos to change in 3 x 3 matrix */
    function change3RandomValuesInMatrix33() {

        console.log("Run Matrix " + 1 );

        var rowPos = [];

        /*allCols.style.color = "red"; */
        
        /* generate 3 random row pos for changing value */
        for(let i = 0; i < 3; i++){
            
            rowPos[i] = getRandomInt(3);
            //console.log(">>>" + rowPos[i]);

        }



        for(let c = 0; c < 3; c++) {


            /* row position in matrix , 0-2 */
            switch( c ) {
            
                /* col 1 , change row pos  */ 
                case 0: 
                
                    col1[rowPos[c]].innerHTML = negateZeroOne( col1[rowPos[c]].innerHTML ); 

                    /* set new change in skin brown */
                    col1[rowPos[c]].style.color = "var(--skin-brown)";

                break;

                /* col 2 , change row pos  */ 
                case 1:

                    col2[rowPos[c]].innerHTML = negateZeroOne( col2[rowPos[c]].innerHTML ); 

                    /* set new change in skin brown */
                    col2[rowPos[c]].style.color = "var(--skin-brown)";

                break;

                /* col 3 , change row pos  */ 
                case 2:

                    col3[rowPos[c]].innerHTML = negateZeroOne( col3[rowPos[c]].innerHTML ); 

                    /* set new change in skin brown */
                    col3[rowPos[c]].style.color = "var(--skin-brown)";

                break;

            }
        
        }

        /* wait 2sec. to reset colors */
        setTimeout( resetTextColors(rowPos[0], rowPos[1],rowPos[2]) , 1000 );

        

    }

    /* let run function in intervall it it will invoke */   
    function startAnimationMatrix() {

        myInterval = setInterval( change3RandomValuesInMatrix33 , 1500 ); 
        
    }

    function stopAnimationMatrix() {

        console.log("[Close] - Matrix Interval - " + myInterval );
        clearInterval(myInterval);
        
    }


    /* ------------------------------------------------- */
    /* First runtime of Matrix to get random values 
    /* ------------------------------------------------- */

    setMatrix33();


    
/* -------------------------------------------------------------------- */
/* 3.2 DOM set & reset header elements
/* -------------------------------------------------------------------- */


    /* -------------------------------------- */ 
    /* Mobile Version - Effects               */
    /* -------------------------------------- */ 

        function setUnshownMobileHeader() {

            headerTopArea.style.marginTop = "-6em";
            headerTopUnderline.style.marginTop = "-6em"

        }

        function resetUnshownMobileHeader() {

            headerTopArea.style.marginTop = "";
            headerTopUnderline.style.marginTop = "";
        }


    /* -------------------------------------- */ 
    /* Desktop Version - Effects              */
    /* -------------------------------------- */ 

        function setShrinkDesktopHeader() {

            /* header height size */
            headerTopArea.style.height = "calc(.1vw + 3em)"; 

            /* Header Big Logo & Small Logo */
            headerLogoBig.style.width = "calc(.1vw + 1.8em)"; 
            headerLogoSmall.style.width = "calc(.1vw + .8em)"; 
            headerLogoSmall.style.top = "calc(.1vw + 1.2em)";

            /* Header Title , Sub Title Area & Matrix */
            headerTitleArea.style.fontSize = "calc(.1vw + .6em)";
            headerMatrixArea.style.fontSize = "calc(.1vw + .4em)";

            /* Header Anker Nav */
            headerAnkerContainer.style.fontSize = "calc(.1vw + .7em)";
        }

        function resetShrinkDesktopHeader() {

            headerTopArea.style.height = "";

            headerLogoBig.style.width = "";
            headerLogoSmall.style.width = "";
            headerLogoSmall.style.top = "";

            headerTitleArea.style.fontSize = "";
            headerMatrixArea.style.fontSize = "";

            headerAnkerContainer.style.fontSize = "";

        }



/* -------------------------------------------------------------------- */
/* 3.3 Set Active Anker Links by scrolling
/* -------------------------------------------------------------------- */

        function setDefaultAnkerLinkAboutMeActive() {

            headerAnkerLinks.forEach( link =>  {


                if( link.classList.contains("aboutme") )   {
    
                    link.classList.add('active');
                    //console.log(">> set Default Anker = > " + link);
    
                }
            })

        }

        function setNewActiveAnkerLinkByScrolling() {

            /* only works if continously will be generated */
            var mainDivs = document.querySelectorAll('#main-portfolio-container > div');

            mainDivs.forEach( mainDiv => {
    
                /* from top to bottom of div in px , e.g 
                from top to first bottom div is 560px */
                mainDivTop = mainDiv.offsetTop;
                //console.log( "=> " + mainDivTop); 
    
                /* actually height of div */
                mainDivHeight = mainDiv.clientHeight;
    
                /* scrollY is def. intern var which calc scrolling height of the top of page */
                /* if our scroll is higher than our section than it should be the next div */
                /* if mainDivHeight is less than next area */
                if(scrollY >= (mainDivTop - mainDivHeight / 3.5) ) {
    
                    //console.log("[NEW DIV AREA to SET] - " + current);
                    current = mainDiv.getAttribute('id');
                } 
    
            });

        }


        function removeAndSetNewActiveAnkerLink() {

            /*console.log(current); */

           headerAnkerLinks.forEach( a =>  {

           /* if any link had before active class, than should remove
           /* because only once should be active */
           a.classList.remove('active');

           if( a.classList.contains(current) ) {

            //console.log("[SET NEW ID in ANKER] - " + current);

               a.classList.add('active');
           }

       } )

       }


/* --------------------------------------------------------------------- */
/* 3.3 react on active scrolling
/* --------------------------------------------------------------------- */

    /* calc the scroll vertical value to handle header height with js */

    function indicateScrollBar() {


        const distanceFromPageTop = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        scrolled = (distanceFromPageTop / height) * 100;


        /*console.log("=> page scrolled by = " + scrolled + "%" ); */



        /* ----------------------------------------------------- */
        /* [ Mobile Effect ] - width: 360px - 1279px 
        /* ----------------------------------------------------- */

        if( mobileVersion == true ) {


            /* ----------------------------------- */
            /* Header unshown by 10 % scroll 
            /* ----------------------------------- */
            if( scrolled >= 10 ) {

                //console.log("[Mobile Version] - 10%" + " > " + mobileVersion);

                /* Set */
                setUnshownMobileHeader();
            

            }  
            if ( scrolled === 0) {

                /* Reset */
                resetUnshownMobileHeader();;
            

            }

        }


        /* ----------------------------------------------------- */
        /* [ Desktop Effect ] - width: >= 1280px 
        /* ----------------------------------------------------- */


        if( mobileVersion == false ) {

        
            /* ----------------------------------- */
            /* Header unshown by 25 % scroll 
            /* ----------------------------------- */
            if( scrolled >= 25 ) {

                //console.log("[Desktop Version] - 25%" + " > " + mobileVersion);

                setShrinkDesktopHeader();

            } 

            if ( scrolled === 0) {

                /* Reset */
                resetShrinkDesktopHeader();

            }

        }

    
        /* ------------------------------------------------------------ */
        /* [ Set Active Anker Nav ]
        /* ------------------------------------------------------------ */

        /* check scrolling area to set id for change anker link */
        setNewActiveAnkerLinkByScrolling();
       
        /* remove old active state and set new active link by variable */
        removeAndSetNewActiveAnkerLink();
       
    

    }


/* -------------------------------------------------------------------- */
/* 3.4 Header Handling Decisions 
/* -------------------------------------------------------------------- */

    function checkMobileDesktopHeaderEffects() {

        /* reset by resize event listener to calc new */
        resetUnshownMobileHeader();
        resetShrinkDesktopHeader();

        /* ------------------------------------------------------ */
        /* Mobile <= 1279px 
        /* ------------------------------------------------------ */

        if( window.innerWidth <= 1279 ) 
        {


            if( scrolled > 10 ) {

                setUnshownMobileHeader();
            }

            /*console.log("------------------------------------------");
            console.log("[JS - Mobile Version ] - cMDE");
            console.log("------------------------------------------");

            console.log("1. JS - no Matrix Calc | " + window.innerWidth ) */
        
            stopAnimationMatrix();
            runMatrix = false;

            mobileVersion = true; 

        }


        /* ------------------------------------------------------ */
        /* Desktop >= 1280px 
        /* ------------------------------------------------------ */

        if( window.innerWidth >= 1280 && runMatrix == false ) {

            
            if( scrolled > 25 ) {

                setShrinkDesktopHeader();
            }

            /*console.log("------------------------------------------");
            console.log("[JS - Desktop Version ] - cMDE");
            console.log("------------------------------------------");

            console.log("1. JS - active Matrix calc | " + window.innerWidth ) */

            startAnimationMatrix();
            runMatrix = true;

            mobileVersion = false;
  
        } 
        

    }


/* -------------------------------------------------------------------- */
/*  3.5 Set Anker Link Jump Points 
/* -------------------------------------------------------------------- */

   
    function setScrollingAnkerJumpPoints(divFinishedProjects, divtodos , divmore) {

        divFinishedProjects.style.scrollMarginTop = "calc(.1vw + 2.9em)";
        divtodos.style.scrollMarginTop = "calc(.1vw + 2.9em)";
        divmore.style.scrollMarginTop = "calc(.1vw + 2.9em)";

    }



/* -------------------------------------------------------------------- */
/*  3.6 Set Today Date
/* -------------------------------------------------------------------- */

    function setDateToday() {

        var today = new Date();
        var date = today.getDate() + "." + (today.getMonth()+1) + "." + today.getFullYear();

        return date;

    }












/* ---------------------------------------------------------------------------------------------- */
/*  4.  Events Listener ( load , resize , scroll )
/* ---------------------------------------------------------------------------------------------- */


   /* ---------------------------------------------------------------- */
   /* Page Load / Reload - Listener 
   /* ---------------------------------------------------------------- */


    window.addEventListener('load', (event) => {


        /* --------------------------------------------------------  */
        /* Other Scroll Anker Jump Point, because js get smaller 
        /* --------------------------------------------------------  */

        /* should be intial here */
        var divFinishedProjects = document.getElementById("finishedprojects");
        var divtodos = document.getElementById("todos");
        var divmore = document.getElementById("more");

        setScrollingAnkerJumpPoints(divFinishedProjects, divtodos , divmore );
        

        //console.log('page loaded' + " > " + runMatrix + " runMatrix");

        /* set default about me on active */
        setDefaultAnkerLinkAboutMeActive();

        //console.log("ScrollY > " + scrollY);

        // check which header effects should be used */
        checkMobileDesktopHeaderEffects();
    

    });

    /* ---------------------------------------------------------------- */
    /*  Page Resize - Listener 
    /* ---------------------------------------------------------------- */

    window.addEventListener('resize', checkMobileDesktopHeaderEffects );



    /* ---------------------------------------------------------------- */
    /* Page Active Scroll - Listener 
    /* ---------------------------------------------------------------- */
            
    window.addEventListener('scroll',()=> indicateScrollBar() );


    /* ---------------------------------------------------------------- */
    /* Dom Content Loaded - Listener 
    /* ---------------------------------------------------------------- */

    document.addEventListener("DOMContentLoaded", function(event) { 
   
        /* must be here because of event */
        var jsDatePortfolio = document.getElementById("js-date-today");

        /* set actually date in span */
        jsDatePortfolio.innerHTML = setDateToday();  

    });





