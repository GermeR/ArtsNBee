$(document).ready(function() {
    
    function hideAll() {
        $("#oeuvre").hide();
        $("#login").hide();
    }
    
    $("#showOeuvre").click(function (event) {
        hideAll();
        if ($("#oeuvre").is(":visible")) {
            $("#oeuvre").hide();
        } else {
            $("#oeuvre").show();
        }        
    });
    
    $("#showLogin").click(function (event) {
        hideAll();
        if ($("#login").is(":visible")) {
            $("#login").hide();
        } else {
            $("#login").show();
        }        
    });
    
    $("#loginButton").click(function (event) {
        
        if($("#login").val() != "" && $("#password").val() != "") {
            $.ajax({
                url: "v1/utilisateur/"+document.getElementById('login').value+":"+document.getElementById('password').value,
                type: 'GET',
                success: function(response) {
                    alert( "Login existant ! " );
                },
                error: function( xhr, status, errorThrown ) {
                    alert( "Votre nom d'utilisateur ou votre mot de passe sont incorrects.");
                },
            });
        } else {
            alert( "Pas de mot de passe ou Login dans les champs !");
        }
    });

});
        
    
