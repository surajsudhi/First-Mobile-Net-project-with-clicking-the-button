Webcam.set({
width: 310,
height: 300,
Image_format: "png",
 png_quality: 90,
 
 constraints: {
 facingMode: "environment"   
 } 
});
Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri){document.getElementById("result").innerHTML = "<img id='captured_img' src="+data_uri+">"}
 )    
}
console.log("ml5 vresion:", ml5.version)
clssifier = ml5.imageClassifier("MobileNet", modelLoaded)

function modelLoaded(){
console.log("Model Loaded")    
}
function check(){
img = document.getElementById("captured_img")  
clssifier.classify(img , gotResult);  
}

function gotResult(error, result){
if(error){
console.error(error);    
} else {
console.log(result);
document.getElementById("object_name").innerHTML = result[0].label   
}
}
