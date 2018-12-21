//Getting Elements
    //Getting Manuscript Elements
    var manuButton = document.getElementById("man-button");
    var manuText = document.getElementById("manuscript");
    manuText.style.display = "none";

//Making Functions
    //Making Manuscript Function
    var onManuButtonClick = function () {
        if(manuText.style.display === "none") {
            manuText.style.display = "inline";
            manuButton.textContent = "Click to Minimize Manuscript";
        } else if(manuText.style.display === "inline") {
            manuText.style.display = "none";
            manuButton.textContent = "Click to See Manuscript";
        }
    };

//Calling Functions
    //Calling Manuscript Function
    manuButton.addEventListener("click", onManuButtonClick);