//Getting Elements
    //Getting Original Info Variable
    var origInfo = document.getElementById("original-info");

    //Getting Pioneer 10 Variables
    var pioTenButton = document.getElementById("pioneer-ten-button");
    var pioTenImg = document.getElementById("pioneer-ten-img");
    var pioTenInfo = document.getElementById("pioneer-ten-info");

    //Getting Voyager Variables
    var voyButton = document.getElementById("voyager-button");
    var voyImg = document.getElementById("voyager-img");
    var voyInfo = document.getElementById("voyager-info");

    //Getting SpaceShipOne Variables
    var ssoButton = document.getElementById("spaceshipone-button");
    var ssoImg = document.getElementById("spaceshipone-img");
    var ssoInfo = document.getElementById("spaceshipone-info");

    //Getting Curiosity Rover Variables
    var curRovButton = document.getElementById("curiosity-rover-button");
    var curRovImg = document.getElementById("curiosity-rover-img");
    var curRovInfo = document.getElementById("curiosity-rover-info");

    //Getting Orion Spacecraft Variables
    var orionButton = document.getElementById("orion-spacecraft-button");
    var orionImg = document.getElementById("orion-spacecraft-img");
    var orionInfo = document.getElementById("orion-spacecraft-info");

    //Getting New Shepard Variables
    var newShepButton = document.getElementById("new-shepard-button");
    var newShepImg = document.getElementById("new-shepard-img");
    var newShepInfo = document.getElementById("new-shepard-info");

    //Getting Ascender Variables
    var ascenderButton = document.getElementById("ascender-button");
    var ascenderImg = document.getElementById("ascender-img");
    var ascenderInfo = document.getElementById("ascender-info");

    //Getting Delta Variables
    var deltaButton = document.getElementById("delta-button");
    var deltaImg = document.getElementById("delta-img");
    var deltaInfo = document.getElementById("delta-info");

//Making Functions
    //Making Pioneer 10 Function
    var onPioTenButtonClick = function () {
        origInfo.style.display = "none";
        pioTenInfo.style.display = "inline";
        voyInfo.style.display = "none";
        ssoInfo.style.display = "none";
        curRovInfo.style.display = "none";
        orionInfo.style.display = "none";
        newShepInfo.style.display = "none";
        ascenderInfo.style.display = "none";
        deltaInfo.style.display = "none";

        pioTenImg.src = "PNGs/Pioneer10-Clicked.png";
        voyImg.src = "PNGs/Voyager-Unclicked.png";
        ssoImg.src = "PNGs/SpaceShipOne-Unclicked.png";
        curRovImg.src = "PNGs/CuriosityRover-Unclicked.png";
        orionImg.src = "PNGs/OrionSpacecraft-Unclicked.png";
        newShepImg.src = "PNGs/NewShepard-Unclicked.png";
        ascenderImg.src = "PNGs/Ascender-Unclicked.png";
        deltaImg.src = "PNGs/Delta-Unclicked.png";
    };

    //Making Voyager Function
    var onVoyButtonClick = function () {
        origInfo.style.display = "none";
        pioTenInfo.style.display = "none";
        voyInfo.style.display = "inline";
        ssoInfo.style.display = "none";
        curRovInfo.style.display = "none";
        orionInfo.style.display = "none";
        newShepInfo.style.display = "none";
        ascenderInfo.style.display = "none";
        deltaInfo.style.display = "none";

        pioTenImg.src = "PNGs/Pioneer10-Unclicked.png";
        voyImg.src = "PNGs/Voyager-Clicked.png";
        ssoImg.src = "PNGs/SpaceShipOne-Unclicked.png";
        curRovImg.src = "PNGs/CuriosityRover-Unclicked.png";
        orionImg.src = "PNGs/OrionSpacecraft-Unclicked.png";
        newShepImg.src = "PNGs/NewShepard-Unclicked.png";
        ascenderImg.src = "PNGs/Ascender-Unclicked.png";
        deltaImg.src = "PNGs/Delta-Unclicked.png";
    };

    //Making SpaceShipOne Function
    var onSsoButtonClick = function () {
        origInfo.style.display = "none";
        pioTenInfo.style.display = "none";
        voyInfo.style.display = "none";
        ssoInfo.style.display = "inline";
        curRovInfo.style.display = "none";
        orionInfo.style.display = "none";
        newShepInfo.style.display = "none";
        ascenderInfo.style.display = "none";
        deltaInfo.style.display = "none";

        pioTenImg.src = "PNGs/Pioneer10-Unclicked.png";
        voyImg.src = "PNGs/Voyager-Unclicked.png";
        ssoImg.src = "PNGs/SpaceShipOne-Clicked.png";
        curRovImg.src = "PNGs/CuriosityRover-Unclicked.png";
        orionImg.src = "PNGs/OrionSpacecraft-Unclicked.png";
        newShepImg.src = "PNGs/NewShepard-Unclicked.png";
        ascenderImg.src = "PNGs/Ascender-Unclicked.png";
        deltaImg.src = "PNGs/Delta-Unclicked.png";
    };

    //Making Curiosity Rover Function
    var onCurRovButtonClick = function () {
        origInfo.style.display = "none";
        pioTenInfo.style.display = "none";
        voyInfo.style.display = "none";
        ssoInfo.style.display = "none";
        curRovInfo.style.display = "inline";
        orionInfo.style.display = "none";
        newShepInfo.style.display = "none";
        ascenderInfo.style.display = "none";
        deltaInfo.style.display = "none";

        pioTenImg.src = "PNGs/Pioneer10-Unclicked.png";
        voyImg.src = "PNGs/Voyager-Unclicked.png";
        ssoImg.src = "PNGs/SpaceShipOne-Unclicked.png";
        curRovImg.src = "PNGs/CuriosityRover-Clicked.png";
        orionImg.src = "PNGs/OrionSpacecraft-Unclicked.png";
        newShepImg.src = "PNGs/NewShepard-Unclicked.png";
        ascenderImg.src = "PNGs/Ascender-Unclicked.png";
        deltaImg.src = "PNGs/Delta-Unclicked.png";
    };

    //Making Orion Spacecraft Function
    var onOrionButtonClick = function () {
        origInfo.style.display = "none";
        pioTenInfo.style.display = "none";
        voyInfo.style.display = "none";
        ssoInfo.style.display = "none";
        curRovInfo.style.display = "none";
        orionInfo.style.display = "inline";
        newShepInfo.style.display = "none";
        ascenderInfo.style.display = "none";
        deltaInfo.style.display = "none";

        pioTenImg.src = "PNGs/Pioneer10-Unclicked.png";
        voyImg.src = "PNGs/Voyager-Unclicked.png";
        ssoImg.src = "PNGs/SpaceShipOne-Unclicked.png";
        curRovImg.src = "PNGs/CuriosityRover-Unclicked.png";
        orionImg.src = "PNGs/OrionSpacecraft-Clicked.png";
        newShepImg.src = "PNGs/NewShepard-Unclicked.png";
        ascenderImg.src = "PNGs/Ascender-Unclicked.png";
        deltaImg.src = "PNGs/Delta-Unclicked.png";
    };

    //Making New Shepard Function
    var onNewShepButtonClick = function () {
        origInfo.style.display = "none";
        pioTenInfo.style.display = "none";
        voyInfo.style.display = "none";
        ssoInfo.style.display = "none";
        curRovInfo.style.display = "none";
        orionInfo.style.display = "none";
        newShepInfo.style.display = "inline";
        ascenderInfo.style.display = "none";
        deltaInfo.style.display = "none";

        pioTenImg.src = "PNGs/Pioneer10-Unclicked.png";
        voyImg.src = "PNGs/Voyager-Unclicked.png";
        ssoImg.src = "PNGs/SpaceShipOne-Unclicked.png";
        curRovImg.src = "PNGs/CuriosityRover-Unclicked.png";
        orionImg.src = "PNGs/OrionSpacecraft-Unclicked.png";
        newShepImg.src = "PNGs/NewShepard-Clicked.png";
        ascenderImg.src = "PNGs/Ascender-Unclicked.png";
        deltaImg.src = "PNGs/Delta-Unclicked.png";
    };

    //Making Ascender Function
    var onAscenderButtonClick = function () {
        origInfo.style.display = "none";
        pioTenInfo.style.display = "none";
        voyInfo.style.display = "none";
        ssoInfo.style.display = "none";
        curRovInfo.style.display = "none";
        orionInfo.style.display = "none";
        newShepInfo.style.display = "none";
        ascenderInfo.style.display = "inline";
        deltaInfo.style.display = "none";

        pioTenImg.src = "PNGs/Pioneer10-Unclicked.png";
        voyImg.src = "PNGs/Voyager-Unclicked.png";
        ssoImg.src = "PNGs/SpaceShipOne-Unclicked.png";
        curRovImg.src = "PNGs/CuriosityRover-Unclicked.png";
        orionImg.src = "PNGs/OrionSpacecraft-Unclicked.png";
        newShepImg.src = "PNGs/NewShepard-Unclicked.png";
        ascenderImg.src = "PNGs/Ascender-Clicked.png";
        deltaImg.src = "PNGs/Delta-Unclicked.png";
    };

    //Making Delta Function
    var onDeltaButtonClick = function () {
        origInfo.style.display = "none";
        pioTenInfo.style.display = "none";
        voyInfo.style.display = "none";
        ssoInfo.style.display = "none";
        curRovInfo.style.display = "none";
        orionInfo.style.display = "none";
        newShepInfo.style.display = "none";
        ascenderInfo.style.display = "none";
        deltaInfo.style.display = "inline";

        pioTenImg.src = "PNGs/Pioneer10-Unclicked.png";
        voyImg.src = "PNGs/Voyager-Unclicked.png";
        ssoImg.src = "PNGs/SpaceShipOne-Unclicked.png";
        curRovImg.src = "PNGs/CuriosityRover-Unclicked.png";
        orionImg.src = "PNGs/OrionSpacecraft-Unclicked.png";
        newShepImg.src = "PNGs/NewShepard-Unclicked.png";
        ascenderImg.src = "PNGs/Ascender-Unclicked.png";
        deltaImg.src = "PNGs/Delta-Clicked.png";
    };

//Calling Functions
    //Calling Pioneer 10 Function
    pioTenButton.addEventListener("click", onPioTenButtonClick);

    //Calling Voyager Function
    voyButton.addEventListener("click", onVoyButtonClick);

    //Calling SpaceShipOne Function
    ssoButton.addEventListener("click", onSsoButtonClick);

    //Calling Curiosity Rover Function
    curRovButton.addEventListener("click", onCurRovButtonClick);

    //Calling Orion Spacecraft Function
    orionButton.addEventListener("click", onOrionButtonClick);

    //Calling New Shepard Function
    newShepButton.addEventListener("click", onNewShepButtonClick);

    //Calling Ascender Function
    ascenderButton.addEventListener("click", onAscenderButtonClick);

    //Calling Delta Function
    deltaButton.addEventListener("click", onDeltaButtonClick);





// //Getting Elements
//     //Getting Pioneer 10 Variables
//     var pioTen = document.getElementById("pioneer-ten-button-text");
//     var pioTenTwo = document.getElementById("pio-ten-img-button");
//     var pioTenInfo = document.getElementById("pioneer-ten-info");
//
//     //Getting Voyager Variables
//     var voyager = document.getElementById("voyager-button-text");
//     var voyagerTwo = document.getElementById("voyager-img-button");
//     var voyagerInfo = document.getElementById("voyager-info");
//
//     //Getting SpaceShipOne Variables
//     var spaceshipone = document.getElementById("spaceshipone-button-text");
//     var spaceshiponeTwo = document.getElementById("spaceshipone-img-button");
//     var spaceshiponeInfo = document.getElementById("spaceshipone-info");
//
//     //Getting Curiosity Rover Variables
//     var curRov = document.getElementById("curiosity-rover-button-text");
//     var curRovTwo = document.getElementById("curiosity-rover-img-button");
//     var curRovInfo = document.getElementById("curiosity-rover-info");
//
//     //Getting Orion Spacecraft Variables
//     var orionSpace = document.getElementById("orion-spacecraft-button-text");
//     var orionSpaceTwo = document.getElementById("orion-spacecraft-img-button");
//     var orionSpaceInfo = document.getElementById("orion-spacecraft-info");
//
//     //Getting New Shepard Variables
//     var newShep = document.getElementById("new-shepard-button-text");
//     var newShepTwo = document.getElementById("new-shepard-img-button");
//     var newShepInfo = document.getElementById("new-shepard-info");
//
//     //Getting Ascender Variables
//     var ascender = document.getElementById("ascender-button-text");
//     var ascenderTwo = document.getElementById("ascender-img-button");
//     var ascenderInfo = document.getElementById("ascender-info");
//
//     //Getting Original Info Variable
//     var origInfo = document.getElementById("original-info");
//
// //Making Functions
//     //Making Pioneer 10 Function
//     var onPioTenButtonClick = function () {
//         pioTenInfo.style.display = "inline";
//         voyagerInfo.style.display = "none";
//         spaceshiponeInfo.style.display = "none";
//         curRovInfo.style.display = "none";
//         orionSpaceInfo.style.display = "none";
//         newShepInfo.style.display = "none";
//         ascenderInfo.style.display = "none";
//         origInfo.style.display = "none";
//     };
//
//     //Making Voyager Function
//     var onVoyagerButtonClick = function () {
//         voyagerInfo.style.display = "inline";
//         pioTenInfo.style.display = "none";
//         spaceshiponeInfo.style.display = "none";
//         curRovInfo.style.display = "none";
//         orionSpaceInfo.style.display = "none";
//         newShepInfo.style.display = "none";
//         ascenderInfo.style.display = "none";
//         origInfo.style.display = "none";
//     };
//
//     //Making SpaceShipOne Function
//     var onSpaceshiponeButtonClick = function () {
//         spaceshiponeInfo.style.display = "inline";
//         pioTenInfo.style.display = "none";
//         voyagerInfo.style.display = "none";
//         curRovInfo.style.display = "none";
//         orionSpaceInfo.style.display = "none";
//         newShepInfo.style.display = "none";
//         ascenderInfo.style.display = "none";
//         origInfo.style.display = "none";
//     };
//
//     //Making Curiosity Rover Function
//     var onCurRovButtonClick = function () {
//         curRovInfo.style.display = "inline";
//         pioTenInfo.style.display = "none";
//         voyagerInfo.style.display = "none";
//         spaceshiponeInfo.style.display = "none";
//         orionSpaceInfo.style.display = "none";
//         newShepInfo.style.display = "none";
//         ascenderInfo.style.display = "none";
//         origInfo.style.display = "none";
//     };
//
//     //Making Orion Spacecraft Function
//     var onOrionSpaceButtonClick = function () {
//         orionSpaceInfo.style.display = "inline";
//         pioTenInfo.style.display = "none";
//         voyagerInfo.style.display = "none";
//         spaceshiponeInfo.style.display = "none";
//         curRovInfo.style.display = "none";
//         newShepInfo.style.display = "none";
//         ascenderInfo.style.display = "none";
//         origInfo.style.display = "none";
//     };
//
//     //Making New Shepard Function
//     var onNewShepButtonClick = function () {
//         newShepInfo.style.display = "inline";
//         pioTenInfo.style.display = "none";
//         voyagerInfo.style.display = "none";
//         spaceshiponeInfo.style.display = "none";
//         curRovInfo.style.display = "none";
//         orionSpaceInfo.style.display = "none";
//         ascenderInfo.style.display = "none";
//         origInfo.style.display = "none";
//     };
//
//     //Making Ascender Function
//     var onAscenderButtonClick = function () {
//         ascenderInfo.style.display = "inline";
//         pioTenInfo.style.display = "none";
//         voyagerInfo.style.display = "none";
//         spaceshiponeInfo.style.display = "none";
//         curRovInfo.style.display = "none";
//         orionSpaceInfo.style.display = "none";
//         newShepInfo.style.display = "none";
//         origInfo.style.display = "none";
//     };
//
// //Calling Functions
//     //Calling Pioneer 10 Function
//     pioTen.addEventListener("click", onPioTenButtonClick);
//     pioTenTwo.addEventListener("click", onPioTenButtonClick);
//
//     //Calling Voyager Function
//     voyager.addEventListener("click", onVoyagerButtonClick);
//     voyagerTwo.addEventListener("click", onVoyagerButtonClick);
//
//     //Calling SpaceShipOne Function
//     spaceshipone.addEventListener("click", onSpaceshiponeButtonClick);
//     spaceshiponeTwo.addEventListener("click", onSpaceshiponeButtonClick);
//
//     //Calling Curiosity Rover Function
//     curRov.addEventListener("click", onCurRovButtonClick);
//     curRovTwo.addEventListener("click", onCurRovButtonClick);
//
//     //Calling Orion Spacecraft Function
//     orionSpace.addEventListener("click", onOrionSpaceButtonClick);
//     orionSpaceTwo.addEventListener("click", onOrionSpaceButtonClick);
//
//     //Calling New Shepard Function
//     newShep.addEventListener("click", onNewShepButtonClick);
//     newShepTwo.addEventListener("click", onNewShepButtonClick);
//
//     //Calling Ascender Function
//     ascender.addEventListener("click", onAscenderButtonClick);
//     ascenderTwo.addEventListener("click", onAscenderButtonClick);