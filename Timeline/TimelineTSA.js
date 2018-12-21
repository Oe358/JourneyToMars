var largeClick = [false, false, false, false, false, false, false, false, false, false];
var middleClick = [false, false, false, false, false, false, false, false, false, false];

//Getting Elements
    //Getting Small Version Element
    var small = document.getElementsByClassName("small-version");

    //Getting Middle Version Element
    var middle = document.getElementsByClassName("middle-version");

    //Getting Large Version Element
    var large = document.getElementsByClassName("large-version");

    //Getting Hubble Element
    var hubble = document.getElementById("hubble");

    //Getting Magellan Element
    var magellan = document.getElementById("magellan");

    //Getting Jemison Element
    var jemison = document.getElementById("jemison");

    //Getting NEAR Element
    var near = document.getElementById("near");

    //Getting Dennis Element
    var dennis = document.getElementById("dennis");

    //Getting Titan Element
    var titan = document.getElementById("titan");

    //Getting Vss Element
    var vss = document.getElementById("vss");

    //Getting SpaceX Element
    var spacex = document.getElementById("spacex");

    //Getting Obama Element
    var obama = document.getElementById("obama");

    //Getting Iss Element
    var iss = document.getElementById("iss");

    //Getting Back To Top Element
    var backToTopButton = document.getElementsByTagName("button");

//Making Functions
    //Making Hubble Functions
    var onSmallHubbleHover = function () {
        hubble.style.left = "7rem";
        hubble.style.width = "37rem";
        hubble.style.transition = "left .25s linear,width .25s linear";
        small[0].style.opacity = "0";
        small[0].style.transition = "opacity .25s linear";
        middle[0].style.width = "36rem";
        middle[0].style.opacity = "1";
        middle[0].style.transition = "opacity .25s linear,width .25s step-start";
        middle[0].style.transitionDelay = ".25s";
        small[0].style.zIndex = "1";
        middle[0].style.zIndex = "5";
        onChange();
    };

    var onSmallHubbleNotHover = function () {
        if(largeClick[0] == false) {
            hubble.style.left = "29rem";
            hubble.style.width = "15rem";
            hubble.style.transition = "left .25s linear,width .25s linear";
            small[0].style.opacity = "1";
            small[0].style.transition = "opacity .25s linear";
            small[0] .style.transitionDelay = ".25s";
            middle[0].style.width = "15rem";
            middle[0].style.opacity = "0";
            middle[0].style.transition = "opacity 0s linear,width .25s step-start";
            small[0].style.zIndex = "5";
            middle[0].style.zIndex = "1";
            onChange();
        }
    };

    var onMiddleHubbleClick = function () {
        largeClick[0] = true;
        hubble.style.height = "32rem";
        hubble.style.width = "37rem";
        hubble.style.left = "7rem";
        hubble.style.transition = "width .25s linear";
        small[0].style.visibility = "hidden";
        middle[0].style.opacity = "0";
        middle[0].style.visibility = "hidden";
        middle[0].style.transition = "opacity .25s linear,visibility .25s step-end";
        large[0].style.opacity = "1";
        large[0].style.width = "36rem";
        large[0].style.height = "31rem";
        large[0].style.transition = "opacity .25s linear";
        large[0].style.transitionDelay = ".25s";
        middleClick[0] = true;
        onChange();
    };

    var onLargeHubbleClick = function () {
        largeClick[0] = false;
        hubble.style.height = "15.5rem";
        hubble.style.width = "37rem";
        hubble.style.left = "7rem";
        hubble.style.transition = "height .25s linear";
        small[0].style.visibility = "visible";
        middle[0].style.opacity = "1";
        middle[0].style.visibility = "visible";
        middle[0].style.transition = "opacity .25s linear,visibility .25s step-start";
        large[0].style.opacity = "0";
        large[0].style.width = "14.5rem";
        large[0].style.height = "15rem";
        large[0].style.transition = "opacity 0s linear,width .25s step-start";
        onChange();
    };

    //Making Magellan Functions
    var onSmallMagellanHover = function () {
        magellan.style.width = "37rem";
        magellan.style.transition = "width .25s linear";
        small[1].style.opacity = "0";
        small[1].style.transition = "opacity .25s linear";
        middle[1].style.width = "36rem";
        middle[1].style.opacity = "1";
        middle[1].style.transition = "opacity .25s linear,width .25s step-start";
        middle[1].style.transitionDelay = ".25s";
        small[1].style.zIndex = "1";
        middle[1].style.zIndex = "5";
        onChange();
    };

    var onSmallMagellanNotHover = function () {
        if(largeClick[1] == false) {
            magellan.style.width = "15rem";
            magellan.style.transition = "width .25s linear";
            small[1].style.opacity = "1";
            small[1].style.transition = "opacity .25s linear";
            small[1] .style.transitionDelay = ".25s";
            middle[1].style.width = "15rem";
            middle[1].style.opacity = "0";
            middle[1].style.transition = "opacity 0s linear,width .25s step-start";
            small[1].style.zIndex = "5";
            middle[1].style.zIndex = "1";
            onChange();
        }
    };

    var onMiddleMagellanClick = function () {
        largeClick[1] = true;
        magellan.style.top = "21rem";
        magellan.style.height = "32rem";
        magellan.style.width = "37rem";
        magellan.style.transition = "height .25s linear,top .25s linear";
        small[1].style.visibility = "hidden";
        middle[1].style.opacity = "0";
        middle[1].style.visibility = "hidden";
        middle[1].style.transition = "opacity .25s linear,visibility .25s step-end";
        large[1].style.opacity = "1";
        large[1].style.width = "36rem";
        large[1].style.height = "31rem";
        large[1].style.transition = "opacity .25s linear";
        large[1].style.transitionDelay = ".25s";
        middleClick[1] = true;
        onChange();
    };

    var onLargeMagellanClick = function () {
        largeClick[1] = false;
        magellan.style.top = "37.5rem";
        magellan.style.height = "15.5rem";
        magellan.style.width = "37rem";
        magellan.style.transition = "height .25s linear,top .25s linear";
        small[1].style.visibility = "visible";
        middle[1].style.opacity = "1";
        middle[1].style.visibility = "visible";
        middle[1].style.transition = "opacity .25s linear,visibility .25s step-start";
        large[1].style.opacity = "0";
        large[1].style.width = "14.5rem";
        large[1].style.height = "15rem";
        large[1].style.transition = "opacity 0s linear,width .25s step-start";
        onChange();
    };

    //Making Jemison Functions
    var onSmallJemisonHover = function () {
        jemison.style.left = "7rem";
        jemison.style.width = "37rem";
        jemison.style.transition = "left .25s linear,width .25s linear";
        small[2].style.opacity = "0";
        small[2].style.transition = "opacity .25s linear";
        middle[2].style.width = "36rem";
        middle[2].style.opacity = "1";
        middle[2].style.transition = "opacity .25s linear,width .25s step-start";
        middle[2].style.transitionDelay = ".25s";
        small[2].style.zIndex = "1";
        middle[2].style.zIndex = "5";
        onChange();
    };

    var onSmallJemisonNotHover = function () {
        if(largeClick[2] == false) {
            jemison.style.left = "29rem";
            jemison.style.width = "15rem";
            jemison.style.transition = "left .25s linear,width .25s linear";
            small[2].style.opacity = "1";
            small[2].style.transition = "opacity .25s linear";
            small[2] .style.transitionDelay = ".25s";
            middle[2].style.width = "15rem";
            middle[2].style.opacity = "0";
            middle[2].style.transition = "opacity 0s linear,width .25s step-start";
            small[2].style.zIndex = "5";
            middle[2].style.zIndex = "1";
            onChange();
        }
    };

    var onMiddleJemisonClick = function () {
        largeClick[2] = true;
        jemison.style.height = "32rem";
        jemison.style.width = "37rem";
        jemison.style.left = "7rem";
        jemison.style.transition = "width .25s linear";
        small[2].style.visibility = "hidden";
        middle[2].style.opacity = "0";
        middle[2].style.visibility = "hidden";
        middle[2].style.transition = "opacity .25s linear,visibility .25s step-end";
        large[2].style.opacity = "1";
        large[2].style.width = "36rem";
        large[2].style.height = "31rem";
        large[2].style.transition = "opacity .25s linear";
        large[2].style.transitionDelay = ".25s";
        middleClick[2] = true;
        onChange();
    };

    var onLargeJemisonClick = function () {
        largeClick[2] = false;
        jemison.style.height = "15.5rem";
        jemison.style.width = "37rem";
        jemison.style.left = "7rem";
        jemison.style.transition = "height .25s linear";
        small[2].style.visibility = "visible";
        middle[2].style.opacity = "1";
        middle[2].style.visibility = "visible";
        middle[2].style.transition = "opacity .25s linear,visibility .25s step-start";
        large[2].style.opacity = "0";
        large[2].style.width = "14.5rem";
        large[2].style.height = "15rem";
        large[2].style.transition = "opacity 0s linear,width .25s step-start";
        onChange();
    };

    //Making NEAR Functions
    var onSmallNEARHover = function () {
        near.style.width = "37rem";
        near.style.transition = "width .25s linear";
        small[3].style.opacity = "0";
        small[3].style.transition = "opacity .25s linear";
        middle[3].style.width = "36rem";
        middle[3].style.opacity = "1";
        middle[3].style.transition = "opacity .25s linear,width .25s step-start";
        middle[3].style.transitionDelay = ".25s";
        small[3].style.zIndex = "1";
        middle[3].style.zIndex = "5";
        onChange();
    };

    var onSmallNEARNotHover = function () {
        if(largeClick[3] == false) {
            near.style.width = "15rem";
            near.style.transition = "width .25s linear";
            small[3].style.opacity = "1";
            small[3].style.transition = "opacity .25s linear";
            small[3] .style.transitionDelay = ".25s";
            middle[3].style.width = "15rem";
            middle[3].style.opacity = "0";
            middle[3].style.transition = "opacity 0s linear,width .25s step-start";
            small[3].style.zIndex = "5";
            middle[3].style.zIndex = "1";
            onChange();
        }
    };

    var onMiddleNEARClick = function () {
        largeClick[3] = true;
        near.style.top = "55rem";
        near.style.height = "32rem";
        near.style.width = "37rem";
        near.style.transition = "height .25s linear,top .25s linear";
        small[3].style.visibility = "hidden";
        middle[3].style.opacity = "0";
        middle[3].style.visibility = "hidden";
        middle[3].style.transition = "opacity .25s linear,visibility .25s step-end";
        large[3].style.opacity = "1";
        large[3].style.width = "36rem";
        large[3].style.height = "31rem";
        large[3].style.transition = "opacity .25s linear";
        large[3].style.transitionDelay = ".25s";
        middleClick[3] = true;
        onChange();
    };

    var onLargeNEARClick = function () {
        largeClick[3] = false;
        near.style.top = "71.5rem";
        near.style.height = "15.5rem";
        near.style.width = "37rem";
        near.style.transition = "height .25s linear,top .25s linear";
        small[3].style.visibility = "visible";
        middle[3].style.opacity = "1";
        middle[3].style.visibility = "visible";
        middle[3].style.transition = "opacity .25s linear,visibility .25s step-start";
        large[3].style.opacity = "0";
        large[3].style.width = "14.5rem";
        large[3].style.height = "15rem";
        large[3].style.transition = "opacity 0s linear,width .25s step-start";
        onChange();
    };

    //Making Dennis Functions
    var onSmallDennisHover = function () {
        dennis.style.left = "7rem";
        dennis.style.width = "37rem";
        dennis.style.transition = "left .25s linear,width .25s linear";
        small[4].style.opacity = "0";
        small[4].style.transition = "opacity .25s linear";
        middle[4].style.width = "36rem";
        middle[4].style.opacity = "1";
        middle[4].style.transition = "opacity .25s linear,width .25s step-start";
        middle[4].style.transitionDelay = ".25s";
        small[4].style.zIndex = "1";
        middle[4].style.zIndex = "5";
        onChange();
    };

    var onSmallDennisNotHover = function () {
        if(largeClick[4] == false) {
            dennis.style.left = "29rem";
            dennis.style.width = "15rem";
            dennis.style.transition = "left .25s linear,width .25s linear";
            small[4].style.opacity = "1";
            small[4].style.transition = "opacity .25s linear";
            small[4] .style.transitionDelay = ".25s";
            middle[4].style.width = "15rem";
            middle[4].style.opacity = "0";
            middle[4].style.transition = "opacity 0s linear,width .25s step-start";
            small[4].style.zIndex = "5";
            middle[4].style.zIndex = "1";
            onChange();
        }
    };

    var onMiddleDennisClick = function () {
        largeClick[4] = true;
        dennis.style.height = "32rem";
        dennis.style.width = "37rem";
        dennis.style.left = "7rem";
        dennis.style.transition = "width .25s linear";
        small[4].style.visibility = "hidden";
        middle[4].style.opacity = "0";
        middle[4].style.visibility = "hidden";
        middle[4].style.transition = "opacity .25s linear,visibility .25s step-end";
        large[4].style.opacity = "1";
        large[4].style.width = "36rem";
        large[4].style.height = "31rem";
        large[4].style.transition = "opacity .25s linear";
        large[4].style.transitionDelay = ".25s";
        middleClick[4] = true;
        onChange();
    };

    var onLargeDennisClick = function () {
        largeClick[4] = false;
        dennis.style.height = "15.5rem";
        dennis.style.width = "37rem";
        dennis.style.left = "7rem";
        dennis.style.transition = "height .25s linear";
        small[4].style.visibility = "visible";
        middle[4].style.opacity = "1";
        middle[4].style.visibility = "visible";
        middle[4].style.transition = "opacity .25s linear,visibility .25s step-start";
        large[4].style.opacity = "0";
        large[4].style.width = "14.5rem";
        large[4].style.height = "15rem";
        large[4].style.transition = "opacity 0s linear,width .25s step-start";
        onChange();
    };

    //Making Titan Functions
    var onSmallTitanHover = function () {
        titan.style.width = "37rem";
        titan.style.transition = "width .25s linear";
        small[5].style.opacity = "0";
        small[5].style.transition = "opacity .25s linear";
        middle[5].style.width = "36rem";
        middle[5].style.opacity = "1";
        middle[5].style.transition = "opacity .25s linear,width .25s step-start";
        middle[5].style.transitionDelay = ".25s";
        small[5].style.zIndex = "1";
        middle[5].style.zIndex = "5";
        onChange();
    };

    var onSmallTitanNotHover = function () {
        if(largeClick[5] == false) {
            titan.style.width = "15rem";
            titan.style.transition = "width .25s linear";
            small[5].style.opacity = "1";
            small[5].style.transition = "opacity .25s linear";
            small[5] .style.transitionDelay = ".25s";
            middle[5].style.width = "15rem";
            middle[5].style.opacity = "0";
            middle[5].style.transition = "opacity 0s linear,width .25s step-start";
            small[5].style.zIndex = "5";
            middle[5].style.zIndex = "1";
            onChange();
        }
    };

    var onMiddleTitanClick = function () {
        largeClick[5] = true;
        titan.style.top = "89rem";
        titan.style.height = "32rem";
        titan.style.width = "37rem";
        titan.style.transition = "height .25s linear,top .25s linear";
        small[5].style.visibility = "hidden";
        middle[5].style.opacity = "0";
        middle[5].style.visibility = "hidden";
        middle[5].style.transition = "opacity .25s linear,visibility .25s step-end";
        large[5].style.opacity = "1";
        large[5].style.width = "36rem";
        large[5].style.height = "31rem";
        large[5].style.transition = "opacity .25s linear";
        large[5].style.transitionDelay = ".25s";
        middleClick[5] = true;
        onChange();
    };

    var onLargeTitanClick = function () {
        largeClick[5] = false;
        titan.style.top = "105.5rem";
        titan.style.height = "15.5rem";
        titan.style.width = "37rem";
        titan.style.transition = "height .25s linear,top .25s linear";
        small[5].style.visibility = "visible";
        middle[5].style.opacity = "1";
        middle[5].style.visibility = "visible";
        middle[5].style.transition = "opacity .25s linear,visibility .25s step-start";
        large[5].style.opacity = "0";
        large[5].style.width = "14.5rem";
        large[5].style.height = "15rem";
        large[5].style.transition = "opacity 0s linear,width .25s step-start";
        onChange();
    };

    //Making Vss Enterprise Functions
    var onSmallVssHover = function () {
        vss.style.left = "7rem";
        vss.style.width = "37rem";
        vss.style.transition = "left .25s linear,width .25s linear";
        small[6].style.opacity = "0";
        small[6].style.transition = "opacity .25s linear";
        middle[6].style.width = "36rem";
        middle[6].style.opacity = "1";
        middle[6].style.transition = "opacity .25s linear,width .25s step-start";
        middle[6].style.transitionDelay = ".25s";
        small[6].style.zIndex = "1";
        middle[6].style.zIndex = "5";
        onChange();
    };

    var onSmallVssNotHover = function () {
        if(largeClick[6] == false) {
            vss.style.left = "29rem";
            vss.style.width = "15rem";
            vss.style.transition = "left .25s linear,width .25s linear";
            small[6].style.opacity = "1";
            small[6].style.transition = "opacity .25s linear";
            small[6] .style.transitionDelay = ".25s";
            middle[6].style.width = "15rem";
            middle[6].style.opacity = "0";
            middle[6].style.transition = "opacity 0s linear,width .25s step-start";
            small[6].style.zIndex = "5";
            middle[6].style.zIndex = "1";
            onChange();
        }
    };

    var onMiddleVssClick = function () {
        largeClick[6] = true;
        vss.style.height = "32rem";
        vss.style.width = "37rem";
        vss.style.left = "7rem";
        vss.style.transition = "width .25s linear";
        small[6].style.visibility = "hidden";
        middle[6].style.opacity = "0";
        middle[6].style.visibility = "hidden";
        middle[6].style.transition = "opacity .25s linear,visibility .25s step-end";
        large[6].style.opacity = "1";
        large[6].style.width = "36rem";
        large[6].style.height = "31rem";
        large[6].style.transition = "opacity .25s linear";
        large[6].style.transitionDelay = ".25s";
        middleClick[6] = true;
        onChange();
    };

    var onLargeVssClick = function () {
        largeClick[6] = false;
        vss.style.height = "15.5rem";
        vss.style.width = "37rem";
        vss.style.left = "7rem";
        vss.style.transition = "height .25s linear";
        small[6].style.visibility = "visible";
        middle[6].style.opacity = "1";
        middle[6].style.visibility = "visible";
        middle[6].style.transition = "opacity .25s linear,visibility .25s step-start";
        large[6].style.opacity = "0";
        large[6].style.width = "14.5rem";
        large[6].style.height = "15rem";
        large[6].style.transition = "opacity 0s linear,width .25s step-start";
        onChange();
    };

    //Making SpaceX Functions
    var onSmallSpacexHover = function () {
        spacex.style.width = "37rem";
        spacex.style.transition = "width .25s linear";
        small[7].style.opacity = "0";
        small[7].style.transition = "opacity .25s linear";
        middle[7].style.width = "36rem";
        middle[7].style.opacity = "1";
        middle[7].style.transition = "opacity .25s linear,width .25s step-start";
        middle[7].style.transitionDelay = ".25s";
        small[7].style.zIndex = "1";
        middle[7].style.zIndex = "5";
        onChange();
    };

    var onSmallSpacexNotHover = function () {
        if(largeClick[7] == false) {
            spacex.style.width = "15rem";
            spacex.style.transition = "width .25s linear";
            small[7].style.opacity = "1";
            small[7].style.transition = "opacity .25s linear";
            small[7] .style.transitionDelay = ".25s";
            middle[7].style.width = "15rem";
            middle[7].style.opacity = "0";
            middle[7].style.transition = "opacity 0s linear,width .25s step-start";
            small[7].style.zIndex = "5";
            middle[7].style.zIndex = "1";
            onChange();
        }
    };

    var onMiddleSpacexClick = function () {
        largeClick[7] = true;
        spacex.style.top = "123rem";
        spacex.style.height = "32rem";
        spacex.style.width = "37rem";
        spacex.style.transition = "height .25s linear,top .25s linear";
        small[7].style.visibility = "hidden";
        middle[7].style.opacity = "0";
        middle[7].style.visibility = "hidden";
        middle[7].style.transition = "opacity .25s linear,visibility .25s step-end";
        large[7].style.opacity = "1";
        large[7].style.width = "36rem";
        large[7].style.height = "31rem";
        large[7].style.transition = "opacity .25s linear";
        large[7].style.transitionDelay = ".25s";
        middleClick[7] = true;
        onChange();
    };

    var onLargeSpacexClick = function () {
        largeClick[7] = false;
        spacex.style.top = "139.5rem";
        spacex.style.height = "15.5rem";
        spacex.style.width = "37rem";
        spacex.style.transition = "height .25s linear,top .25s linear";
        small[7].style.visibility = "visible";
        middle[7].style.opacity = "1";
        middle[7].style.visibility = "visible";
        middle[7].style.transition = "opacity .25s linear,visibility .25s step-start";
        large[7].style.opacity = "0";
        large[7].style.width = "14.5rem";
        large[7].style.height = "15rem";
        large[7].style.transition = "opacity 0s linear,width .25s step-start";
        onChange();
    };

    //Making Obama Functions
    var onSmallObamaHover = function () {
        obama.style.left = "7rem";
        obama.style.width = "37rem";
        obama.style.transition = "left .25s linear,width .25s linear";
        small[8].style.opacity = "0";
        small[8].style.transition = "opacity .25s linear";
        middle[8].style.width = "36rem";
        middle[8].style.opacity = "1";
        middle[8].style.transition = "opacity .25s linear,width .25s step-start";
        middle[8].style.transitionDelay = ".25s";
        small[8].style.zIndex = "1";
        middle[8].style.zIndex = "5";
        onChange();
    };

    var onSmallObamaNotHover = function () {
        if(largeClick[8] == false) {
            obama.style.left = "29rem";
            obama.style.width = "15rem";
            obama.style.transition = "left .25s linear,width .25s linear";
            small[8].style.opacity = "1";
            small[8].style.transition = "opacity .25s linear";
            small[8] .style.transitionDelay = ".25s";
            middle[8].style.width = "15rem";
            middle[8].style.opacity = "0";
            middle[8].style.transition = "opacity 0s linear,width .25s step-start";
            small[8].style.zIndex = "5";
            middle[8].style.zIndex = "1";
            onChange();
        }
    };

    var onMiddleObamaClick = function () {
        largeClick[8] = true;
        obama.style.height = "32rem";
        obama.style.width = "37rem";
        obama.style.left = "7rem";
        obama.style.transition = "width .25s linear";
        small[8].style.visibility = "hidden";
        middle[8].style.opacity = "0";
        middle[8].style.visibility = "hidden";
        middle[8].style.transition = "opacity .25s linear,visibility .25s step-end";
        large[8].style.opacity = "1";
        large[8].style.width = "36rem";
        large[8].style.height = "31rem";
        large[8].style.transition = "opacity .25s linear";
        large[8].style.transitionDelay = ".25s";
        middleClick[8] = true;
        onChange();
    };

    var onLargeObamaClick = function () {
        largeClick[8] = false;
        obama.style.height = "15.5rem";
        obama.style.width = "37rem";
        obama.style.left = "7rem";
        obama.style.transition = "height .25s linear";
        small[8].style.visibility = "visible";
        middle[8].style.opacity = "1";
        middle[8].style.visibility = "visible";
        middle[8].style.transition = "opacity .25s linear,visibility .25s step-start";
        large[8].style.opacity = "0";
        large[8].style.width = "14.5rem";
        large[8].style.height = "15rem";
        large[8].style.transition = "opacity 0s linear,width .25s step-start";
        onChange();
    };

    //Making Iss Functions
    var onSmallIssHover = function () {
        iss.style.width = "37rem";
        iss.style.transition = "width .25s linear";
        small[9].style.opacity = "0";
        small[9].style.transition = "opacity .25s linear";
        middle[9].style.width = "36rem";
        middle[9].style.opacity = "1";
        middle[9].style.transition = "opacity .25s linear,width .25s step-start";
        middle[9].style.transitionDelay = ".25s";
        small[9].style.zIndex = "1";
        middle[9].style.zIndex = "5";
        onChange();
    };

    var onSmallIssNotHover = function () {
        if(largeClick[9] == false) {
            iss.style.width = "15rem";
            iss.style.transition = "width .25s linear";
            small[9].style.opacity = "1";
            small[9].style.transition = "opacity .25s linear";
            small[9] .style.transitionDelay = ".25s";
            middle[9].style.width = "15rem";
            middle[9].style.opacity = "0";
            middle[9].style.transition = "opacity 0s linear,width .25s step-start";
            small[9].style.zIndex = "5";
            middle[9].style.zIndex = "1";
            onChange();
        }
    };

    var onMiddleIssClick = function () {
        largeClick[9] = true;
        iss.style.top = "157rem";
        iss.style.height = "32rem";
        iss.style.width = "37rem";
        iss.style.transition = "height .25s linear,top .25s linear";
        small[9].style.visibility = "hidden";
        middle[9].style.opacity = "0";
        middle[9].style.visibility = "hidden";
        middle[9].style.transition = "opacity .25s linear,visibility .25s step-end";
        large[9].style.opacity = "1";
        large[9].style.width = "36rem";
        large[9].style.height = "31rem";
        large[9].style.transition = "opacity .25s linear";
        large[9].style.transitionDelay = ".25s";
        middleClick[9] = true;
        onChange();
    };

    var onLargeIssClick = function () {
        largeClick[9] = false;
        iss.style.top = "173.5rem";
        iss.style.height = "15.5rem";
        iss.style.width = "37rem";
        iss.style.transition = "height .25s linear,top .25s linear";
        small[9].style.visibility = "visible";
        middle[9].style.opacity = "1";
        middle[9].style.visibility = "visible";
        middle[9].style.transition = "opacity .25s linear,visibility .25s step-start";
        large[9].style.opacity = "0";
        large[9].style.width = "14.5rem";
        large[9].style.height = "15rem";
        large[9].style.transition = "opacity 0s linear,width .25s step-start";
        onChange();
    };

    //Making Back To Top Functions
    var onBackToTopButtonClick = function () {
        window.scrollTo(0, 0);
        onChange();
    };

    var onBackToTopButtonHover = function () {
        backToTopButton[0].style.color = "rgb(200, 15, 15)";
        onChange();
    };

    var onBackToTopButtonNotHover = function () {
        backToTopButton[0].style.color = "rgb(0, 255, 255)";
        onChange();
    };


    //Calling Functions
    var onChange = function () {
        //Calling Hubble Functions
        hubble.addEventListener("mouseover", onSmallHubbleHover);
        hubble.addEventListener("mouseout", onSmallHubbleNotHover);
        middle[0].addEventListener("click", onMiddleHubbleClick);
        large[0].addEventListener("click", onLargeHubbleClick);

        //Calling Magellan Functions
        magellan.addEventListener("mouseover", onSmallMagellanHover);
        magellan.addEventListener("mouseout", onSmallMagellanNotHover);
        middle[1].addEventListener("click", onMiddleMagellanClick);
        large[1].addEventListener("click", onLargeMagellanClick);

        //Calling Jemison Functions
        jemison.addEventListener("mouseover", onSmallJemisonHover);
        jemison.addEventListener("mouseout", onSmallJemisonNotHover);
        middle[2].addEventListener("click", onMiddleJemisonClick);
        large[2].addEventListener("click", onLargeJemisonClick);

        //Calling NEAR Functions
        near.addEventListener("mouseover", onSmallNEARHover);
        near.addEventListener("mouseout", onSmallNEARNotHover);
        middle[3].addEventListener("click", onMiddleNEARClick);
        large[3].addEventListener("click", onLargeNEARClick);

        //Calling Dennis Functions
        dennis.addEventListener("mouseover", onSmallDennisHover);
        dennis.addEventListener("mouseout", onSmallDennisNotHover);
        middle[4].addEventListener("click", onMiddleDennisClick);
        large[4].addEventListener("click", onLargeDennisClick);

        //Calling Titan Functions
        titan.addEventListener("mouseover", onSmallTitanHover);
        titan.addEventListener("mouseout", onSmallTitanNotHover);
        middle[5].addEventListener("click", onMiddleTitanClick);
        large[5].addEventListener("click", onLargeTitanClick);

        //Calling Vss Functions
        vss.addEventListener("mouseover", onSmallVssHover);
        vss.addEventListener("mouseout", onSmallVssNotHover);
        middle[6].addEventListener("click", onMiddleVssClick);
        large[6].addEventListener("click", onLargeVssClick);

        //Calling SpaceX Functions
        spacex.addEventListener("mouseover", onSmallSpacexHover);
        spacex.addEventListener("mouseout", onSmallSpacexNotHover);
        middle[7].addEventListener("click", onMiddleSpacexClick);
        large[7].addEventListener("click", onLargeSpacexClick);

        //Calling Obama Functions
        obama.addEventListener("mouseover", onSmallObamaHover);
        obama.addEventListener("mouseout", onSmallObamaNotHover);
        middle[8].addEventListener("click", onMiddleObamaClick);
        large[8].addEventListener("click", onLargeObamaClick);

        //Calling Iss Functions
        iss.addEventListener("mouseover", onSmallIssHover);
        iss.addEventListener("mouseout", onSmallIssNotHover);
        middle[9].addEventListener("click", onMiddleIssClick);
        large[9].addEventListener("click", onLargeIssClick);

        //Calling Back To Top Function
        backToTopButton[0].addEventListener("click", onBackToTopButtonClick);
        backToTopButton[0].addEventListener("mouseenter", onBackToTopButtonHover);
        backToTopButton[0].addEventListener("mouseout", onBackToTopButtonNotHover);
    };

        onChange();







//     //Getting Magellan Elements
//     var magButtonOne = document.getElementById("first-button");
//     var magButtonTwo = document.getElementById("magellan-button-two");
//     var magButtonThree = document.getElementById("magellan-button-three");
//     var magStuff = document.getElementById("magellan");
//
//     //Getting Hubble Elements
//     var hubbleButtonOne = document.getElementById("second-button");
//     var hubbleButtonTwo = document.getElementById("hubble-button-two");
//     var hubbleButtonThree = document.getElementById("hubble-button-three");
//     var hubbleStuff = document.getElementById("hubble");
//
//     //Getting Jemison Elements
//     var jemButtonOne = document.getElementById("third-button");
//     var jemButtonTwo = document.getElementById("jemison-button-two");
//     var jemButtonThree = document.getElementById("jemison-button-three");
//     var jemStuff = document.getElementById("jemison");
//
//     //Getting NEAR Elements
//     var nearButtonOne = document.getElementById("fourth-button");
//     var nearButtonTwo = document.getElementById("near-button-two");
//     var nearButtonThree = document.getElementById("near-button-three");
//     var nearStuff = document.getElementById("near");
//
//     //Getting Dennis Elements
//     var dennisButtonOne = document.getElementById("fifth-button");
//     var dennisButtonTwo = document.getElementById("dennis-button-two");
//     var dennisButtonThree = document.getElementById("dennis-button-three");
//     var dennisStuff = document.getElementById("dennis");
//
//     //Getting Titan Elements
//     var titanButtonOne = document.getElementById("sixth-button");
//     var titanButtonTwo = document.getElementById("titan-button-two");
//     var titanButtonThree = document.getElementById("titan-button-three");
//     var titanStuff = document.getElementById("titan");
//
//     //Getting Enterprise Elements
//     var enterButtonOne = document.getElementById("seventh-button");
//     var enterButtonTwo = document.getElementById("enterprise-button-two");
//     var enterButtonThree = document.getElementById("enterprise-button-three");
//     var enterStuff = document.getElementById("enterprise");
//
//     //Getting SpaceX Elements
//     var spacexButtonOne = document.getElementById("eighth-button");
//     var spacexButtonTwo = document.getElementById("spacex-button-two");
//     var spacexButtonThree = document.getElementById("spacex-button-three");
//     var spacexStuff = document.getElementById("spacex");
//
//     //Getting Obama Elements
//     var obamaButtonOne = document.getElementById("ninth-button");
//     var obamaButtonTwo = document.getElementById("obama-button-two");
//     var obamaButtonThree = document.getElementById("obama-button-three");
//     var obamaStuff = document.getElementById("obama");
//
//     //Getting ISS Elements
//     var issButtonOne = document.getElementById("tenth-button");
//     var issButtonTwo = document.getElementById("iss-button-two");
//     var issButtonThree = document.getElementById("iss-button-three");
//     var issStuff = document.getElementById("iss");
//
// //Making Functions
//     //Making Magellan Function
//     var onMagButton = function () {
//         magStuff.style.display = "inline";
//         hubbleStuff.style.display = "none";
//         jemStuff.style.display = "none";
//         nearStuff.style.display = "none";
//         dennisStuff.style.display = "none";
//         titanStuff.style.display = "none";
//         enterStuff.style.display = "none";
//         spacexStuff.style.display = "none";
//         obamaStuff.style.display = "none";
//         issStuff.style.display = "none";
//     };
//
//     //Making Hubble Function
//     var onHubbleButton = function () {
//         hubbleStuff.style.display = "inline";
//         magStuff.style.display = "none";
//         jemStuff.style.display = "none";
//         nearStuff.style.display = "none";
//         dennisStuff.style.display = "none";
//         titanStuff.style.display = "none";
//         enterStuff.style.display = "none";
//         spacexStuff.style.display = "none";
//         obamaStuff.style.display = "none";
//         issStuff.style.display = "none";
//     };
//
//     //Making Jemison Function
//     var onJemButton = function () {
//         jemStuff.style.display = "inline";
//         magStuff.style.display = "none";
//         hubbleStuff.style.display = "none";
//         nearStuff.style.display = "none";
//         dennisStuff.style.display = "none";
//         titanStuff.style.display = "none";
//         enterStuff.style.display = "none";
//         spacexStuff.style.display = "none";
//         obamaStuff.style.display = "none";
//         issStuff.style.display = "none";
//     };
//
//     //Making NEAR Function
//     var onNearButton = function () {
//         nearStuff.style.display = "inline";
//         magStuff.style.display = "none";
//         hubbleStuff.style.display = "none";
//         jemStuff.style.display = "none";
//         dennisStuff.style.display = "none";
//         titanStuff.style.display = "none";
//         enterStuff.style.display = "none";
//         spacexStuff.style.display = "none";
//         obamaStuff.style.display = "none";
//         issStuff.style.display = "none";
//     };
//
//     //Making Dennis Function
//     var onDennisButton = function () {
//         dennisStuff.style.display = "inline";
//         magStuff.style.display = "none";
//         hubbleStuff.style.display = "none";
//         jemStuff.style.display = "none";
//         nearStuff.style.display = "none";
//         titanStuff.style.display = "none";
//         enterStuff.style.display = "none";
//         spacexStuff.style.display = "none";
//         obamaStuff.style.display = "none";
//         issStuff.style.display = "none";
//     };
//
//     //Making Titan Function
//     var onTitanButton = function () {
//         titanStuff.style.display = "inline";
//         magStuff.style.display = "none";
//         hubbleStuff.style.display = "none";
//         jemStuff.style.display = "none";
//         nearStuff.style.display = "none";
//         dennisStuff.style.display = "none";
//         enterStuff.style.display = "none";
//         spacexStuff.style.display = "none";
//         obamaStuff.style.display = "none";
//         issStuff.style.display = "none";
//     };
//
//     //Making Enterprise Function
//     var onEnterButton = function () {
//         enterStuff.style.display = "inline";
//         magStuff.style.display = "none";
//         hubbleStuff.style.display = "none";
//         jemStuff.style.display = "none";
//         nearStuff.style.display = "none";
//         dennisStuff.style.display = "none";
//         titanStuff.style.display = "none";
//         spacexStuff.style.display = "none";
//         obamaStuff.style.display = "none";
//         issStuff.style.display = "none";
//     };
//
//     //Making SpaceX Function
//     var onSpacexButton = function () {
//         spacexStuff.style.display = "inline";
//         magStuff.style.display = "none";
//         hubbleStuff.style.display = "none";
//         jemStuff.style.display = "none";
//         nearStuff.style.display = "none";
//         dennisStuff.style.display = "none";
//         titanStuff.style.display = "none";
//         enterStuff.style.display = "none";
//         obamaStuff.style.display = "none";
//         issStuff.style.display = "none";
//     };
//
//     //Making Obama Function
//     var onObamaButton = function () {
//         obamaStuff.style.display = "inline";
//         magStuff.style.display = "none";
//         hubbleStuff.style.display = "none";
//         jemStuff.style.display = "none";
//         nearStuff.style.display = "none";
//         dennisStuff.style.display = "none";
//         titanStuff.style.display = "none";
//         enterStuff.style.display = "none";
//         spacexStuff.style.display = "none";
//         issStuff.style.display = "none";
//     };
//
//     //Making ISS Function
//     var onIssButton = function () {
//         issStuff.style.display = "inline";
//         magStuff.style.display = "none";
//         hubbleStuff.style.display = "none";
//         jemStuff.style.display = "none";
//         nearStuff.style.display = "none";
//         dennisStuff.style.display = "none";
//         titanStuff.style.display = "none";
//         enterStuff.style.display = "none";
//         spacexStuff.style.display = "none";
//         obamaStuff.style.display = "none";
//     };
//
//     //Making Back to Top Function
//     function scrollWin() {
//         window.scrollTo(0, 300);
//     };
//
// //Calling Functions
//     //Calling Magellan Function
//     magButtonOne.addEventListener("click", onMagButton);
//     magButtonTwo.addEventListener("click", onMagButton);
//     magButtonThree.addEventListener("click", onMagButton);
//
//     //Calling Hubble Function
//     hubbleButtonOne.addEventListener("click", onHubbleButton);
//     hubbleButtonTwo.addEventListener("click", onHubbleButton);
//     hubbleButtonThree.addEventListener("click", onHubbleButton);
//
//     //Calling Jemison Function
//     jemButtonOne.addEventListener("click", onJemButton);
//     jemButtonTwo.addEventListener("click", onJemButton);
//     jemButtonThree.addEventListener("click", onJemButton);
//
//     //Calling NEAR Function
//     nearButtonOne.addEventListener("click", onNearButton);
//     nearButtonTwo.addEventListener("click", onNearButton);
//     nearButtonThree.addEventListener("click", onNearButton);
//
//     //Calling Dennis Function
//     dennisButtonOne.addEventListener("click", onDennisButton);
//     dennisButtonTwo.addEventListener("click", onDennisButton);
//     dennisButtonThree.addEventListener("click", onDennisButton);
//
//     //Calling Titan Function
//     titanButtonOne.addEventListener("click", onTitanButton);
//     titanButtonTwo.addEventListener("click", onTitanButton);
//     titanButtonThree.addEventListener("click", onTitanButton);
//
//     //Calling Enterprise Function
//     enterButtonOne.addEventListener("click", onEnterButton);
//     enterButtonTwo.addEventListener("click", onEnterButton);
//     enterButtonThree.addEventListener("click", onEnterButton);
//
//     //Calling SpaceX Function
//     spacexButtonOne.addEventListener("click", onSpacexButton);
//     spacexButtonTwo.addEventListener("click", onSpacexButton);
//     spacexButtonThree.addEventListener("click", onSpacexButton);
//
//     //Calling Obama Function
//     obamaButtonOne.addEventListener("click", onObamaButton);
//     obamaButtonTwo.addEventListener("click", onObamaButton);
//     obamaButtonThree.addEventListener("click", onObamaButton);
//
//     //Calling ISS Function
//     issButtonOne.addEventListener("click", onIssButton);
//     issButtonTwo.addEventListener("click", onIssButton);
//     issButtonThree.addEventListener("click", onIssButton);