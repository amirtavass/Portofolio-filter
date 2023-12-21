function findPic(name){
    let card=document.querySelectorAll(".mainDiv .card");
    for(let i=0;i<=card.length;i++){
     if(!card[i].classList.contains(name)){
     card[i].style.display="none";
     }
    else{
        card[i].style.display="inline-block";
    }
}
}
