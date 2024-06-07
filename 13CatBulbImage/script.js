// console.log(document.getElementById("switchedOnHeading"));

let bulbImage;
bulbImage = document.getElementById("bulbImage");

let catImage;
catImage = document.getElementById("catImage")


function switchOff() {
    // document.getElementById("bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    bulbImage.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImage.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchedOnHeading").textContent="Switched OFF";
    document.getElementById("ButtonOff").style.backgroundColor="#cbd2d9";
    document.getElementById("ButtonOn").style.backgroundColor="#22c55e";
}


function switchOn(){
    bulbImage.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImage.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchedOnHeading").textContent="Switched On"
    document.getElementById("ButtonOff").style.backgroundColor="#e12d39";
    document.getElementById("ButtonOn").style.backgroundColor="#cbd2d9";
}