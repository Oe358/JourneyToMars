

//Getting Elements
    //Getting Overview Elements
    var overviewButton = document.getElementById("overview-button");
    var overviewImg = document.getElementById("overview-img");
    var overviewInfo = document.getElementById("overview-info");
    var overviewChecker = 1;

    //Getting Pros Elements
    var prosButton = document.getElementById("pros-button");
    var prosImg = document.getElementById("pros-img");
    var prosInfo = document.getElementById("pros-info");
    var prosChecker = 0;

    //Getting Cons Elements
    var consButton = document.getElementById("cons-button");
    var consImg = document.getElementById("cons-img");
    var consInfo = document.getElementById("cons-info");
    var consChecker = 0;

    //Getting Info Box Elements
    var infoBox = document.getElementById("info-box");
    var shortVersion = document.getElementsByClassName("short-version");
    var longVersion = document.getElementsByClassName("long-version");
    var keepReadingButton = document.getElementsByClassName("keep-reading-button");
    var backToTopButton = document.getElementsByClassName("back-to-top-button");

//Making Functions
    //Making Overview Function
    var onOverviewButtonClick = function () {
        overviewImg.src = "Overview-Clicked.png";
        prosImg.src = "Pros-Unclicked.png";
        consImg.src = "Cons-Unclicked.png";

        overviewInfo.style.display = "inline";
        prosInfo.style.display = "none";
        consInfo.style.display = "none";

        infoBox.style.height = "31rem";
        shortVersion[0].style.display = "inline";
        longVersion[0].style.display = "none";

        overviewChecker = 1;
        prosChecker = 0;
        consChecker = 0;
    };

    //Making Pros Function
    var onProsButtonClick = function () {
        overviewImg.src = "Overview-Unclicked.png";
        prosImg.src = "Pros-Clicked.png";
        consImg.src = "Cons-Unclicked.png";

        overviewInfo.style.display = "none";
        prosInfo.style.display = "inline";
        consInfo.style.display = "none";

        infoBox.style.height = "22rem";
        shortVersion[1].style.display = "inline";
        longVersion[1].style.display = "none";

        overviewChecker = 0;
        prosChecker = 1;
        consChecker = 0;
    };

    //Making Cons Function
    var onConsButtonClick = function () {
        overviewImg.src = "Overview-Unclicked.png";
        prosImg.src = "Pros-Unclicked.png";
        consImg.src = "Cons-Clicked.png";

        overviewInfo.style.display = "none";
        prosInfo.style.display = "none";
        consInfo.style.display = "inline";

        infoBox.style.height = "21rem";
        shortVersion[2].style.display = "inline";
        longVersion[2].style.display = "none";

        overviewChecker = 0;
        prosChecker = 0;
        consChecker = 1;
    };

    //Making Info Box Functions
    var onKeepReadingButtonClick = function () {
        if(overviewChecker == 1) {
            infoBox.style.height = "90rem";
            shortVersion[0].style.display = "none";
            longVersion[0].style.display = "inline";
        }

        if(prosChecker == 1) {
            infoBox.style.height = "170rem";
            shortVersion[1].style.display = "none";
            longVersion[1].style.display = "inline";
        }

        if(consChecker == 1) {
            infoBox.style.height = "100rem";
            shortVersion[2].style.display = "none";
            longVersion[2].style.display = "inline";
        }
    };

    var onKeepReadingButtonHover = function () {
        keepReadingButton[0].style.color = "red";
        keepReadingButton[1].style.color = "red";
        keepReadingButton[2].style.color = "red";
    };

    var onKeepReadingButtonNotHover = function () {
        keepReadingButton[0].style.color = "blue";
        keepReadingButton[1].style.color = "blue";
        keepReadingButton[2].style.color = "blue";
    };

    var onBackToTopButtonClick = function () {
        window.scrollTo(0, 0);
    };

    var onBackToTopButtonHover = function () {
        backToTopButton[0].style.color = "red";
        backToTopButton[1].style.color = "red";
        backToTopButton[2].style.color = "red";
    };

    var onBackToTopButtonNotHover = function () {
        backToTopButton[0].style.color = "blue";
        backToTopButton[1].style.color = "blue";
        backToTopButton[2].style.color = "blue";
    };

//Calling Functions
    //Calling Overview Function
    overviewButton.addEventListener("click", onOverviewButtonClick);

    //Calling Pros Function
    prosButton.addEventListener("click", onProsButtonClick);

    //Calling Cons Function
    consButton.addEventListener("click", onConsButtonClick);

    //Calling Info Box Functions
    keepReadingButton[0].addEventListener("click", onKeepReadingButtonClick);
    keepReadingButton[0].addEventListener("mouseenter", onKeepReadingButtonHover);
    keepReadingButton[0].addEventListener("mouseout", onKeepReadingButtonNotHover);
    backToTopButton[0].addEventListener("click", onBackToTopButtonClick);
    backToTopButton[0].addEventListener("mouseenter", onBackToTopButtonHover);
    backToTopButton[0].addEventListener("mouseout", onBackToTopButtonNotHover);

    keepReadingButton[1].addEventListener("click", onKeepReadingButtonClick);
    keepReadingButton[1].addEventListener("mouseenter", onKeepReadingButtonHover);
    keepReadingButton[1].addEventListener("mouseout", onKeepReadingButtonNotHover);
    backToTopButton[1].addEventListener("click", onBackToTopButtonClick);
    backToTopButton[1].addEventListener("mouseenter", onBackToTopButtonHover);
    backToTopButton[1].addEventListener("mouseout", onBackToTopButtonNotHover);

    keepReadingButton[2].addEventListener("click", onKeepReadingButtonClick);
    keepReadingButton[2].addEventListener("mouseenter", onKeepReadingButtonHover);
    keepReadingButton[2].addEventListener("mouseout", onKeepReadingButtonNotHover);
    backToTopButton[2].addEventListener("click", onBackToTopButtonClick);
    backToTopButton[2].addEventListener("mouseenter", onBackToTopButtonHover);
    backToTopButton[2].addEventListener("mouseout", onBackToTopButtonNotHover);










// //Getting Elements
//     //Getting "Overview" Elements
//     var overviewButton = document.getElementById("overview-button");
//     var overviewInfo = document.getElementById("overview-info");
//
//     //Getting "Overview" Elements
//     var prosButton = document.getElementById("pros-button");
//     var prosInfo = document.getElementById("pros-info");
//
//     //Getting "Overview" Elements
//     var consButton = document.getElementById("cons-button");
//     var consInfo = document.getElementById("cons-info");
//
// //Making Functions
//     //Making "Overview" Functions
//     var onOverviewButtonClick = function () {
//         overviewButton.style.backgroundColor = "gray";
//         prosButton.style.backgroundColor = "rgb(242, 242, 242)";
//         consButton.style.backgroundColor = "rgb(242, 242, 242)";
//
//         overviewInfo.style.display = "inline";
//         prosInfo.style.display = "none";
//         consInfo.style.display = "none";
//     };
//
//     //Making "Pros" Functions
//     var onProsButtonClick = function () {
//         prosButton.style.backgroundColor = "gray";
//         overviewButton.style.backgroundColor = "rgb(242, 242, 242)";
//         consButton.style.backgroundColor = "rgb(242, 242, 242)";
//
//         prosInfo.style.display = "inline";
//         overviewInfo.style.display = "none";
//         consInfo.style.display = "none";
//     };
//
//     //Making "Cons" Functions
//     var onConsButtonClick = function () {
//         consButton.style.backgroundColor = "gray";
//         overviewButton.style.backgroundColor = "rgb(242, 242, 242)";
//         prosButton.style.backgroundColor = "rgb(242, 242, 242)";
//
//         consInfo.style.display = "inline";
//         overviewInfo.style.display = "none";
//         prosInfo.style.display = "none";
//     };
//
// //Calling Functions
//     //Calling "Overview" Functions
//     overviewButton.addEventListener("click", onOverviewButtonClick);
//
//     //Calling "Pros" Functions
//     prosButton.addEventListener("click", onProsButtonClick);
//
//     //Calling "Cons" Functions
//     consButton.addEventListener("click", onConsButtonClick);