// Task 1. Loop-rendered dynamic content
// An array of objects storing the data
//Each object rep's a photo card and has a 'name' property
 const natureItems =[
    {
        name: "Into the wild",
        image: "https://i.pinimg.com/736x/67/54/ef/6754eff5566ed315e29648ec3cd46410.jpg" 
    },
    {
        name: "Morning Light",
        image: "https://i.pinimg.com/736x/6c/57/37/6c5737b74f944ca638cc6da18a8b90cd.jpg"
    }
 ]

 //Selecting the container element from html document
 const itemsContainer = document.getElementById("dynamic-items-container");
 //forEach loop to iterate through the array and render the elements
 if(itemsContainer){
    natureItems.forEach((item,index)=>{
        //figure element created
        const photoCard = document.createElement("figure");
        //matching existing layout classes.
        if(index == 0){
            photoCard.className = "photo-card photo-card--wide"; //making the first elemtnt wide
        }else{
            photoCard.className = "photo-card";
            }
        //setting HTML structure inside the figure tag
        photoCard.innerHTML = '<img src="' + item.image + '" alt="' + item.name + '" >' +
                      '<figcaption>' + item.name + '</figcaption>';
        
        //appending the new photoCard card into the gallery grid container
        itemsContainer.appendChild(photoCard);
    });
 }
