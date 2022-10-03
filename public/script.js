var detailsForm=document.querySelector('#destination_details_form');
detailsForm.addEventListener('submit',handleFormSubmit);
function handleFormSubmit(event){
    event.preventDefault();
    var destName=event.target.elements['name'].value;
    var dastLocation = event.target.elements['location'].value;
    var destPhoto= event.target.elements['photo'].value;
    var destDesc= event.target.elements['description'].value;
    for(var i=0;i<detailsForm.length;i++) {
        detailsForm.element[i].value="";

    }
    var wishListContainer=document.getElementById('destination_container') 
    if(wishListContainer.children.length===0){
        document.getElementById('title').innerHTML="My Wish List";
    }
} 
function createDestinationCard(name,location,photoURL,description){
    var card=document.createElement(div);
    card.className='card';
    var img = document.createElement('img');
    img.setAttribute('alt',name);
    var constantPhotoUrl="images/signpost.jpg";
    if(photoURL.length===0){
        img.setAttribute('src',constantPhotoUrl);

    } 
    else{
        img.setAttribute('src',photoURL);
    }
}