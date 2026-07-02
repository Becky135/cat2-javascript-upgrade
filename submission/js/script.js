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
 ];

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

 //Task 2. Dynamically adding & removing elements
 //selecting input field, add button and the empty target list
 const wishlistInput = document.getElementById("wishlist-input");
 const addWishlistBtn = document.getElementById("add-wishlist-btn");
 const wishlistList = document.getElementById("wishlist-list");

 //event handling for 'Add Destination' button
 if(addWishlistBtn && wishlistInput && wishlistList){
    addWishlistBtn.addEventListener("click", event => {
        event.preventDefault(); //stops the added input from disappearing
        //getting the text input from the user
        const textValue = wishlistInput.value;

        //validating to ensure the input field is not empty
        if(textValue == ""){
            alert("Please type a location name first!");
        }

        // Creating a new list item (<li>) using createElement
        const li = document.createElement("li");
        li.className = "wishlist-item";
        li.textContent = textValue; // this sets the item text to the user's input

        //Creating the remove button for this item
        const removeBtn = document.createElement("button");
        removeBtn.className = "remove-item-btn";
        removeBtn.textContent = "Remove";

        //event Handling the remove button
        removeBtn.addEventListener("click", event => {
            li.remove(); // removes the specific li element from the page
        });

        //connecting remove button to the list item, then appending li to the main unordered list
        li.appendChild(removeBtn);
        wishlistList.appendChild(li);

        //resetting input text field to empty for next input entry
        wishlistInput.value = "";

    });
 }
    // Task 3. Form Handling with validation feedback
  let contactForm = document.querySelector("#contact-form");
  let formFeedback = document.querySelector("#form-feedback");
  let nameInput = document.querySelector("#client-name");
  let emailInput = document.querySelector("#client-email");
  let inquiryInput = document.querySelector("#inquiry"); 

  // event handling the contactform 
  contactForm.addEventListener("submit", event => {
    // prevent the form from being submitted automatically
    event.preventDefault();

    //read the user's input
    let name = nameInput.value;
    let email = emailInput.value;
    let inquiry = inquiryInput.value;


    //Validating the user's input using if-conditional statements
    if(name === ""){
        formFeedback.innerHTML = "<b> Submission Failed: </b> Please enter your name."
        formFeedback.className = "feedback-msg feedback error";
        return;
    }

    if(email === "" || !email.includes("@")){
        formFeedback.innerHTML = "<b> Submission Failed: </b> Please enter a valid email address containing '@'."
        formFeedback.className = "feedback-msg feedback error";
        return;
    }

    if(inquiry === ""){
        formFeedback.innerHTML = "<b> Submission Failed: </b> Please write your inquiry."
        formFeedback.className = "feedback-msg feedback error";
        return;
    }


    //update div (formFeedback) with the values
    formFeedback.innerHTML =
    "<b> Inquiry Submitted! </b> </br>" +
    "<p> Name: " + name + "</p>" +
    "<p> Email: " + email + "</p>" +
    "<p> Inquiry: " + inquiry + "</p>" ;

    //clearing form input fields
    nameInput.value = "";
    emailInput.value = "";
    inquiryInput.value = "";

    //the success message
    formFeedback.className = "feedback-msg feedback-success";

  });
 

  //Task 4: Persistent state with LocalStorage
    //restoring data from local storage when page loads
 document.addEventListener("DOMContentLoaded", event => {
    let savedName = localStorage.getItem('draft_name');
    let savedEmail = localStorage.getItem('draft_email');
    

    if(nameInput && savedName) nameInput.value = savedName;
    if(emailInput && savedEmail)emailInput.value = savedEmail;
    
});

// Save data to localstorage automatically as the user types
if(nameInput){
 nameInput.addEventListener('input', event => {
    localStorage.setItem('draft_name', nameInput.value);
});
}

if(emailInput){
emailInput.addEventListener('input', event => {
    localStorage.setItem('draft_email', emailInput.value);
});
}

// Task 5. Click to reveal banner section feature
const bannerImage = document.getElementById("banner-image");
const bannerCaption = document.getElementById("banner-caption");

if (bannerImage && bannerCaption) {
    bannerImage.addEventListener("click", () => {
        // Toggles the 'hidden' visibility helper class on click
        bannerCaption.classList.toggle("hidden");
    });
}




