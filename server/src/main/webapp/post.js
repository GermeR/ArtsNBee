function ajouterSouhait(login, ono) {

    var data={
        login: login,
        ono: ono
    };

    $.ajax({
        url: "v1/souhait",
        data: JSON.stringify(data),
        type: "POST",
        dataType: "json",
        contentType : 'application/json',
        success: function(json) {
            console.log(json);
            alert("Oeuvre ajoutée aux favoris avec succès");
        },
        error: function( xhr, status, errorThrown) {
            alert("Erreur: POST");
        },
    });
}

$(document).ready(function() {
    
    $("#post-oeuvre-btn").click(function (event) {
       
        var data={
            nom: $("#postOeuvreNom").val(),
            ano: $("#postOeuvreAno").val(),
            prix: $("#postOeuvrePrix").val(),
            promo: $("#postOeuvrePromo").val(),
            description: $("#postOeuvreDescription").val(),
            type: $("#postOeuvreType").val(),
            dimension: $("#postOeuvreDimension").val(),
            poids: $("#postOeuvrePoids").val(),
            thematique: $("#postOeuvreThematique").val()
        };
        
        $.ajax({
            url: "v1/oeuvre",
            data: JSON.stringify(data),
            type: "POST",
            dataType: "json",
            contentType : 'application/json',
            success: function(json) {
                console.log(json);
                alert("Nouvelle oeuvre ajoutée avec succès");
            },
            error: function( xhr, status, errorThrown) {
                alert("Erreur: POST");
            },
        });
        
    });   
    
    $("#post-commande-btn").click(function (event) {
       
        var data={
            login: $("#postCommandeLogin").val(),
            ono: $("#postCommandeOno").val(),
            paiement: $("#postCommandePaiement").val(),
            envoi: $("#postCommandeEnvoi").val(),
            reception: $("#postCommandeReception").val(),
            remuneration: $("#postCommandeRemuneration").val(),
            prix: $("#postCommandePrix").val(),
            frais: $("#postCommandeFrais").val(),
        };
        
        $.ajax({
            url: "v1/commande",
            data: JSON.stringify(data),
            type: "POST",
            dataType: "json",
            contentType : 'application/json',
            success: function(json) {
                console.log(json);
                alert("Nouvelle commande ajoutée avec succès");
            },
            error: function( xhr, status, errorThrown) {
                alert("Erreur: POST");
            },
        });
        
    });

    $("#button_new").click(function (event)
    {

        var role = "Client";
        if ($("#radioArtiste").is(":checked")) {
            role = "Artiste";
        }

        console.log(role);

        if($("#new_login").val() != "" && $("#new_password").val() != "" && $("#new_nom").val() != "" && $("#new_prenom").val() != "" && $("#new_dateN").val() != "" && $("#new_mail").val() != "" && $("#new_adresse").val() != "") {
            var data= {
                adresse: $("#new_adresse").val(),
                dateDeb: "",
                dateFin: "",
                role: role,
                dateN: $("#new_dateN").val(),
                fno: "Gratuit",
                login: $("#new_login").val(),
                mail: $("#new_mail").val(),
                prenom: $("#new_prenom").val(),
                nom: $("#new_nom").val(),
                optin: false,
                optinPart: false,
                password: $("#new_password").val(),
            }

            $.ajax({
                url: "v1/utilisateur",
                data: JSON.stringify(data),
                type: "POST",
                dataType: "json",
                contentType : 'application/json',
                success: function(json) {
                    console.log(json);
                    alert("Inscription réussie");
                    hideAll();
                    $("#new_login").val("");
                    $("#new_password").val("");
                    $("#new_nom").val("");
                    $("#new_prenom").val("");
                    $("#new_dateN").val("");
                    $("#new_mail").val("");
                    $("#new_adresse").val("");
                    $("#login").show();
                },
                error: function( xhr, status, errorThrown) {
                    alert("Erreur: POST");
                },
            });

        } else {
            alert( "Veuillez remplir les champs obligatoires");
        }
    });


});