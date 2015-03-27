function guessit(theForm) {
    var quotes;
    quotes = document.getElementsByName('guess');
    colors = document.getElementsByClassName('quote');
    var score = 0;

    // clear
    for(var i = 0, length = colors.length; i < length; i++) {
        colors[i].style.background = "white";
    }

    // check
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
    var score = score;
    score = score.toString();
    var emitting = "Score: "+ score + "<br/>";
    // if like, 10
    if(score==1){
        document.getElementById("status").innerHTML = emitting + "You've won!";
    }else{
        document.getElementById("status").innerHTML = emitting;
    }
}
