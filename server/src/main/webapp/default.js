function hideAll() {
    $("#oeuvre").hide();
    $("#commande").hide();
    $("#login").hide();
    $("#inscription").hide();
    $("#profile").hide();
    $("#souhait").hide();
    $("#utilisateur").hide();
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
function hideAllSouhait() {
    $("#getSouhaitMini").hide();
    $("#postSouhaitMini").hide();
    $("#deleteSouhaitMini").hide();
}

  
$(document).ready(function() { 
    
    $("#showOeuvre").click(function (event) {
        hideAll();
        hideAllOeuvre();
        $("#getOeuvreMini").show();
        if ($("#oeuvre").is(":visible")) {
            $("#oeuvre").hide();
        } else {
            $("#oeuvre").show();
        }        
    });

    $("#showUtilisateur").click(function (event) {
        hideAll();
        if ($("#utilisateur").is(":visible")) {
            $("#utilisateur").hide();
        } else {
            $("#utilisateur").show();
        }
    });

    $("#showSouhait").click(function (event) {
        hideAll();
        hideAllSouhait();
        if ($("#souhait").is(":visible")) {
            $("#souhait").hide();
        } else {
            $("#souhait").show();
        }
    })

    $("#showCommande").click(function (event) {
        hideAll();
        hideAllCommande();
        $("#getCommandeMini").show();
        if ($("#commande").is(":visible")) {
            $("#commande").hide();
        } else {
            $("#commande").show();
        }        
    });

    $("#showProfile").click(function (event) {
        hideAll();
        if ($("#profile").is(":visible")) {
            $("#profile").hide();
        } else {
            $("#profile").show();
        }
    });

    $("#showInscription").click(function (event) {
        hideAll();
        if ($("#inscription").is(":visible")) {
            $("#inscription").hide();
        } else {
            $("#inscription").show();
        }
    });
    
    $("#getOeuvre").click(function (event) {
        hideAllOeuvre();
        if ($("#getOeuvreMini").is(":visible")) {
            $("#getOeuvreMini").hide();
        } else {
            afficherOeuvres();
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
            afficherCommandes();
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

    $("#getSouhait").click(function (event) {
        hideAllSouhait();
        if ($("#getSouhaitMini").is(":visible")) {
            $("#getSouhaitMini").hide();
        } else {
            afficherSouhaits();
            $("#getSouhaitMini").show();
        }
    });

    $("#postSouhait").click(function (event) {
        hideAllSouhait();
        if ($("#postSouhaitMini").is(":visible")) {
            $("#postSouhaitMini").hide();
        } else {
            $("#postSouhaitMini").show();
        }
    });
    $("#deleteSouhait").click(function (event) {
        hideAllSouhait();
        if ($("#deleteSouhaitMini").is(":visible")) {
            $("#deleteSouhaitMini").hide();
        } else {
            $("#deleteSouhaitMini").show();
        }
    });

    
    $("#loginButton").click(function (event) {
        console.log(document.getElementById('loginField').value);
        if($("#loginField").val() != "" && $("#passwordField").val() != "") {
            $.ajax({
                url: "v1/utilisateur/"+document.getElementById('loginField').value+":"+document.getElementById('passwordField').value,
                type: 'GET',
                success: function(response) {
                    monlogin = document.getElementById('loginField').value;
                    console.log("Connecté entant que "+ monlogin);
                    afficherUser(monlogin);
                    hideAll();
                    if (monlogin != null) {
                        $("#showLogin").hide();
                        $("#showInscription").hide();
                        $("#showProfile").show();
                        $("#profile").show();
                        afficherOeuvresParArtiste(monlogin);
                    }
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
        
    
