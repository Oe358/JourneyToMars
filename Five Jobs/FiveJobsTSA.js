//Getting Elements
    //Getting Payload Specialist Variables
    var ps = document.getElementById("ps-button");
    var psInfo = document.getElementById("ps-info");
    var psBig = document.getElementById("ps-big");

    //Getting Pilot Astronaut Variables
    var pa = document.getElementById("pa-button");
    var paInfo = document.getElementById("pa-info");
    var paBig = document.getElementById("pa-big");

    //Getting Aerospace Engineer Variables
    var ae = document.getElementById("ae-button");
    var aeInfo = document.getElementById("ae-info");
    var aeBig = document.getElementById("ae-big");

    //Getting Mission Specialist Variables
    var ms = document.getElementById("ms-button");
    var msInfo = document.getElementById("ms-info");
    var msBig = document.getElementById("ms-big");

    //Getting Aeronautic Maintenance Variables
    var am = document.getElementById("am-button");
    var amInfo = document.getElementById("am-info");
    var amBig = document.getElementById("am-big");

    //Getting Info Box
    var infoBox = document.getElementById("info-box");
    var origInfo = document.getElementById("original-info");

//Making Functions
    //Making Payload Specialist Function
    var onPsButtonClick = function () {
        //Info Box
        infoBox.style.backgroundColor = "rgb(230, 230, 230)";
        infoBox.style.border = "outset 1px gray";

        //Info
        psInfo.style.display = "inline";
        paInfo.style.display = "none";
        aeInfo.style.display = "none";
        msInfo.style.display = "none";
        amInfo.style.display = "none";
        origInfo.style.display = "none";

        //Enlarged Picture and Text
        psBig.style.display = "inline";
        paBig.style.display = "none";
        aeBig.style.display = "none";
        msBig.style.display = "none";
        amBig.style.display = "none";
    };

    //Making Pilot Astronaut Function
    var onPaButtonClick = function () {
        //Info Box
        infoBox.style.backgroundColor = "rgb(230, 230, 230)";
        infoBox.style.border = "outset 1px gray";

        //Info
        paInfo.style.display = "inline";
        psInfo.style.display = "none";
        aeInfo.style.display = "none";
        msInfo.style.display = "none";
        amInfo.style.display = "none";
        origInfo.style.display = "none";

        //Enlarged Picture and Text
        paBig.style.display = "inline";
        psBig.style.display = "none";
        aeBig.style.display = "none";
        msBig.style.display = "none";
        amBig.style.display = "none";
    };

    //Making Aerospace Engineer Function
    var onAeButtonClick = function () {
        //Info Box
        infoBox.style.backgroundColor = "rgb(230, 230, 230)";
        infoBox.style.border = "outset 1px gray";

        //Info
        aeInfo.style.display = "inline";
        psInfo.style.display = "none";
        paInfo.style.display = "none";
        msInfo.style.display = "none";
        amInfo.style.display = "none";
        origInfo.style.display = "none";

        //Enlarged Picture and Text
        aeBig.style.display = "inline";
        psBig.style.display = "none";
        paBig.style.display = "none";
        msBig.style.display = "none";
        amBig.style.display = "none";
    };

    //Making Mission Specialist Function
    var onMsButtonClick = function () {
        //Info Box
        infoBox.style.backgroundColor = "rgb(230, 230, 230)";
        infoBox.style.border = "outset 1px gray";

        //Info
        msInfo.style.display = "inline";
        psInfo.style.display = "none";
        paInfo.style.display = "none";
        aeInfo.style.display = "none";
        amInfo.style.display = "none";
        origInfo.style.display = "none";

        //Enlarged Picture and Text
        msBig.style.display = "inline";
        psBig.style.display = "none";
        paBig.style.display = "none";
        aeBig.style.display = "none";
        amBig.style.display = "none";
    };

    //Making Aeronautic Maintenance Function
    var onAmButtonClick = function () {
        //Info Box
        infoBox.style.backgroundColor = "rgb(230, 230, 230)";
        infoBox.style.border = "outset 1px gray";

        //Info
        amInfo.style.display = "inline";
        psInfo.style.display = "none";
        paInfo.style.display = "none";
        aeInfo.style.display = "none";
        msInfo.style.display = "none";
        origInfo.style.display = "none";

        //Enlarged Picture and Text
        amBig.style.display = "inline";
        psBig.style.display = "none";
        paBig.style.display = "none";
        aeBig.style.display = "none";
        msBig.style.display = "none";
    };

//Calling Functions
    //Calling Payload Specialist Function
    ps.addEventListener("click", onPsButtonClick);

    //Calling Pilot Astronaut Function
    pa.addEventListener("click", onPaButtonClick);

    //Calling Aerospace Engineer Function
    ae.addEventListener("click", onAeButtonClick);

    //Calling Mission Specialist Function
    ms.addEventListener("click", onMsButtonClick);

    //Calling Aeronautic Maintenance Function
    am.addEventListener("click", onAmButtonClick);
