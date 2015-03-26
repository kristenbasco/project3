function guessit(theForm) {
    var quotes;
    quotes = document.getElementsByName('guess');
    colors = document.getElementsByClassName('quote');
    var score = 0;
    // http://stackoverflow.com/questions/9618504/get-radio-button-value-with-javascript
    for (var i = 0, length = quotes.length; i < length; i++) {
        if (quotes[i].checked) {
            // do whatever you want with the checked radio
            if((quotes[i].value)=="true"){
                score++;
                winning(score);
                colors[i].style.background = "green";
            }
            else{
                score--;
                winning(score);
                colors[i].style.background = "red";
            }
            break;
        }
    }
}

function winning(score){
    var emitting = "Score: "+ score + "<br/>";
    // if like, 10
    if(score==1){
        document.getElementById("status").innerHTML = "You've won!";
    }else{
        document.getElementById("status").innerHTML = "no";
    }
}
