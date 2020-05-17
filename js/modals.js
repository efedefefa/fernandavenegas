// Get Modal:
var modal = document.getElementById("myModal");

// Get image and insert it inside the Modal - Use his "alt" text as the caption:
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

//Function to make the catch of the img and insert in the modal content:

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal:
var span = document.getElementsByClassName("close")[0];

//When user clicks on <X> close the modal 

span.onclick = function(){
    modal.style.display = "none";
}