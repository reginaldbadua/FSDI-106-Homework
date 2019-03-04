/*
Project: Online Store
Main Functionality:
    1/2 add items to the catalog (save into a backend server) 
    2/3 display a dynamic catalog of items (from the backend server)
    - display the different categories
    - filter (search by text)
    - add items to a carteh
*/

/*
    - ID (auto generated)
    - Name
    - Description
    - Price
    - Image
    - Category
*/
//store all the items in the array; need to store and OBJECT
var catalog =[];
var uniqueId = 0; //counter

//object constructor: used to create instances
function Item(name,desc,price,image,category){
    this.id = uniqueId;//provide info for ID
    this.name =name; //don't use hardcoaded values
    this.desc = desc;
    this.price = price;
    this.image = image;
    this.category = category; 

    uniqueId += 1; //to change the ID once its used; increases the value by one 

    //can add functions and behaviors
}

function registerItem(){
    console.log("registering item");
    var isDataValid = true;
    
    // get the inforation that user provided
    // name = document.getElementById("textName").value
    var name = $("#txtName").val();  //jQuery way of reading text
    var desc = $("#txtDesc").val();
    var price = $("#txtPrice").val();
    var image = $("#txtImg").val();
    var category = $("#txtCat").val();


    //perform data validations
    // logical operator || = or
    if(!name || name.length < 10){
        //bad name (if no name or name length lower than 10 characters)
        $("#txtName").addClass('error'); //CSS error class
        isDataValid = false; 
    }
    else{
        $("#txtName").removeClass('error');
    }
    if(!desc || desc.leng < 10){
        $("#txtDesc").addClass('error');
        isDataValid = false;
    }
    else
        $("#textDesc").removeClass('error');

console.log('value', isDataValid);
 if (isDataValid) {
    var theItem = new Item(name, desc, price, image, category);
    console.log(theItem);

    //add the item to the array
    catalog.push(theItem);
    //clear the form
    $("#txtName").val('');
    $("#txtDesc").val('');
    $("#txtPrice").val('');
    $("#txtImg").val('');
    $("#txtCat").val('');
}
} //show success
    $("#alert-saved").removeClass('hidden');

    //timer on JS
    //params: 1 (function to execute), 2 (time in milliseconds)
    setTimeout(function(){
        $("alert-saved").addClass('hidden');
    }, 3000); 

//auto executed when browser finished rendering everything
function init(){
    //hook event
    $('#btnSave').click(registerItem);
}

window.onload = init;

