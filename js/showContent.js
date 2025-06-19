const coolButton = document.getElementById("coolButton");
const coolContent = document.getElementById("coolContent");

coolButton.addEventListener('click',function(){
    coolContent.style.display = 'inline-block';
    coolButton.style.color = 'white';
})