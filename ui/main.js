
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    
    //create a request object
    var request = new XMLHttpRequest();
    
    //capture the response nd store it in a variable
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                 counter = counter + 1; 
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