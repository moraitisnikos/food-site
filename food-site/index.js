function answer () {

    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var message = "<h3>Thank you " + first + " " + last + " We will get back to you as soon as possible.</h3>";
    var messageReturn = "<h3>We recieved your message and we will answer as soon as possible.</h3>";
    var messageReturn2 = "<h3>We could not receive your message... Please try again.</h3>";


    var xhr = new XMLHttpRequest();
    var url = "https://us-central1-unipi-aps.cloudfunctions.net/emvolioDate";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            // console.log(json.status + ", " + json.message);
            document.getElementById("response2").innerHTML = messageReturn;
            document.getElementById("response").innerHTML = message;
        }
        else if (xhr.status === 400 ){
            document.getElementById("response3").innerHTML = messageReturn2;
        }
    };
    var data = JSON.stringify({"status": "", "mesaage": ""});
    xhr.send(data);
}

window.addEventListener('load', () => {
    var button = document.getElementById("button-1");
    button.addEventListener('click',(e) => {
        e.preventDefault();
        // console.log(e);
        answer();
    })
})

window.addEventListener('load', () => {
    var btn = document.getElementById("login");
    btn.addEventListener('click' , (e) =>{
        e.preventDefault();
        window.open('login.html');
    })
})

function logging () {

    var username = document.getElementById("usrn").value;
    var password = document.getElementById("pass").value;
    var logInTry = "<p> Log in was successful </p>";
    var logInFail = "<p> Log in was not successful </p>";

    if (username === "a" && password === "a") {
        document.getElementById("attempt").innerHTML = logInTry;

    } else {
        document.getElementById("attempt").innerHTML = logInFail;
    }

}

window.addEventListener('load', () => {
    var btnLogIn = document.getElementById("button-login");
    btnLogIn.addEventListener('click' , (e) =>{
        e.preventDefault();
        logging();
    })
})

function relocate () {
    window.location.href = "index.html" ;
}

window.addEventListener('load', () => {
    var btnturn = document.getElementById("returnToMain");
    btnturn.addEventListener('click', (e) =>{
        e.preventDefault();
        relocate();
    })
})
