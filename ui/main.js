
var button = document.getElementById('counter');

button.onclick = function(){
    
    //create a request object
    var request = new XMLHttpRequest();
    
    //capture the response nd store it in a variable
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                  
                 var counter = request.responseText;
                 var span = document.getElementById('count');
                 span.innerHTML = counter.toString();
            }
        }
        // no need to do anything
    };
    //make the request
    request.open('GET','http://preetikadyan.imad.hasura-app.io/counter',true);
    request.send(null);
   
};
//submit
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElmentById('submit-btn');
submit.onclick = function(){
    
    var names=['name1','name2','name3'];
    var list='';
    for(var i=0;i<=names.length;i++){
        list += '<li>' + mames[i] + '</li';
    }
    var ul = getElementById('namelist');
    li.innerHTML = list;
};