function hideAll() {
    $("#oeuvre").hide();
    $("#commande").hide();
    $("#login").hide();
}

function hideAllOeuvre() {    
    $("#getOeuvreMini").hide();
    $("#postOeuvreMini").hide();
    $("#deleteOeuvreMini").hide();
}

function hideAllCommande() {
    $("#getCommandeMini").hide();
    $("#postCommandeMini").hide();
    $("#deleteCommandeMini").hide();
}
  
$(document).ready(function() { 
    
    $("#showOeuvre").click(function (event) {
        hideAll();
        hideAllOeuvre();
        if ($("#oeuvre").is(":visible")) {
            $("#oeuvre").hide();
        } else {
            $("#oeuvre").show();
        }        
    });
    
    $("#showCommande").click(function (event) {
        hideAll();
        hideAllCommande();
        if ($("#commande").is(":visible")) {
            $("#commande").hide();
        } else {
            $("#commande").show();
        }        
    });
    
    $("#getOeuvre").click(function (event) {
        hideAllOeuvre();
        if ($("#getOeuvreMini").is(":visible")) {
            $("#getOeuvreMini").hide();
        } else {
            $("#getOeuvreMini").show();
        }        
    });
    
    $("#postOeuvre").click(function (event) {
        hideAllOeuvre();
        if ($("#postOeuvreMini").is(":visible")) {
            $("#postOeuvreMini").hide();
        } else {
            $("#postOeuvreMini").show();
        }        
    });
    
     $("#deleteOeuvre").click(function (event) {
        hideAllOeuvre();
        if ($("#deleteOeuvreMini").is(":visible")) {
            $("#deleteOeuvreMini").hide();
        } else {
            $("#deleteOeuvreMini").show();
        }        
    });    
     
    $("#getCommande").click(function (event) {
        hideAllCommande();
        if ($("#getCommandeMini").is(":visible")) {
            $("#getCommandeMini").hide();
        } else {
            $("#getCommandeMini").show();
        }        
    });
    
    $("#postCommande").click(function (event) {
        hideAllCommande();
        if ($("#postCommandeMini").is(":visible")) {
            $("#postCommandeMini").hide();
        } else {
            $("#postCommandeMini").show();
        }        
    });
    
     $("#deleteCommande").click(function (event) {
        hideAllCommande();
        if ($("#deleteCommandeMini").is(":visible")) {
            $("#deleteCommandeMini").hide();
        } else {
            $("#deleteCommandeMini").show();
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
        
    
