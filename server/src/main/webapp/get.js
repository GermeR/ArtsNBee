function afficherUser(nom) {

    $.ajax({
        url: "v1/utilisateur/"+nom,
        type: "GET",
        dataType: "json",
        success: function(json) {
            console.log("Getting utilisateur/"+nom);
            var profil = $("#getProfile");
            $("<h3>").html("Role: " + json.role).appendTo(profil);
            $("<h3>").html("Identifiant: " + json.login).appendTo(profil);
            $("<h3>").html("Nom: " + json.nom).appendTo(profil);
            $("<h3>").html("Prenom: " + json.prenom).appendTo(profil);
            $("<h3>").html("Date de naissance: " + json.dateN).appendTo(profil);
            $("<h3>").html("Adresse: " + json.adresse).appendTo(profil);
            $("<h3>").html("Adresse e-mail: " + json.mail).appendTo(profil);
        },
        error: function(xhr, status, errorThrown) {
            alert("Requête impossible: GET/utilisateur/"+nom);
        }
    });
    
}

function afficherOeuvresParArtiste(nom) {

    $.ajax({
        url: "v1/oeuvre/"+nom,
        type: "GET",
        dataType: "json",
        success: function(json) {
            console.log("Getting /oeuvres/"+nom);

            var table = $("#table-oeuvresArtiste");
            var tr = $("<tr>");
            $("<th>").html("ono").appendTo(tr);
            $("<th>").html("ano").appendTo(tr);
            $("<th>").html("prix").appendTo(tr);
            $("<th>").html("promo").appendTo(tr);
            $("<th>").html("description").appendTo(tr);
            $("<th>").html("type").appendTo(tr);
            $("<th>").html("dimension").appendTo(tr);
            $("<th>").html("poids").appendTo(tr);
            $("<th>").html("thematique").appendTo(tr);
            $("<th>").html("").appendTo(tr);
            tr.appendTo(table);

            json.sort(function (a, b) {
                return a.ono - b.ono;
            });

            for (var i=0; i<json.length; i++) {
                var tr = $("<tr>");
                $("<td>").html(json[i].ono).appendTo(tr);
                $("<td>").html(json[i].ano).appendTo(tr);
                $("<td>").html(json[i].prix).appendTo(tr);
                $("<td>").html(json[i].promo).appendTo(tr);
                $("<td>").html(json[i].description).appendTo(tr);
                $("<td>").html(json[i].type).appendTo(tr);
                $("<td>").html(json[i].dimension).appendTo(tr);
                $("<td>").html(json[i].poids).appendTo(tr);
                $("<td>").html(json[i].thematique).appendTo(tr);
                tr.appendTo(table);
            }
            table.appendTo("#oeuvresArtiste");

        },
        error: function(xhr, status, errorThrown) {
            alert("Requête impossible: GET/oeuvre/"+nom);
        }
    });

}

function afficherUtilisateur() {

    $("#table-utilisateur").empty();

    $.ajax({
        url: "v1/utilisateur",
        type: "GET",
        dataType: "json",
        success: function(json) {
            console.log("Getting /utilisateur");
            var table = $("#table-utilisateur");
            var tr = $("<tr>");
            $("<th>").html("login").appendTo(tr);
            $("<th>").html("password").appendTo(tr);
            $("<th>").html("nom").appendTo(tr);
            $("<th>").html("prenom").appendTo(tr);
            $("<th>").html("dateN").appendTo(tr);
            $("<th>").html("fno").appendTo(tr);
            $("<th>").html("mail").appendTo(tr);
            $("<th>").html("dateDeb").appendTo(tr);
            $("<th>").html("dateFin").appendTo(tr);
            $("<th>").html("adresse").appendTo(tr);
            $("<th>").html("optin").appendTo(tr);
            $("<th>").html("optinPart").appendTo(tr);
            $("<th>").html("role").appendTo(tr);
            $("<th>").html("").appendTo(tr);
            tr.appendTo(table);

            json.sort(function (a, b) {
                return a.ono - b.ono;
            });

            for (var i=0; i<json.length; i++) {
                var tr = $("<tr>");
                $("<td>").html(json[i].login).appendTo(tr);
                $("<td>").html(json[i].password).appendTo(tr);
                $("<td>").html(json[i].nom).appendTo(tr);
                $("<td>").html(json[i].prenom).appendTo(tr);
                $("<td>").html(json[i].dateN).appendTo(tr);
                $("<td>").html(json[i].fno).appendTo(tr);
                $("<td>").html(json[i].mail).appendTo(tr);
                $("<td>").html(json[i].dateDeb).appendTo(tr);
                $("<td>").html(json[i].dateFin).appendTo(tr);
                $("<td>").html(json[i].adresse).appendTo(tr);
                $("<td>").html(json[i].optin).appendTo(tr);
                $("<td>").html(json[i].optinPart).appendTo(tr);
                $("<td>").html(json[i].role).appendTo(tr);
                tr.appendTo(table);
            }
            table.appendTo("#showUtilisateurMini");
        },
        error: function(xhr, status, errorThrown) {
            alert("Requête impossible: GET/utilisateur");
        }
    });

}

function afficherOeuvres() {

    $("#table-oeuvre").empty();
    
    $.ajax({
        url: "v1/oeuvre",
        type: "GET",
        dataType: "json",
        success: function(json) {
            console.log("Getting /oeuvres");
            
            var table = $("#table-oeuvre");
            var tr = $("<tr>");
            $("<th>").html("ono").appendTo(tr);
            $("<th>").html("ano").appendTo(tr);
            $("<th>").html("prix").appendTo(tr);
            $("<th>").html("promo").appendTo(tr);
            $("<th>").html("description").appendTo(tr);
            $("<th>").html("type").appendTo(tr);
            $("<th>").html("dimension").appendTo(tr);
            $("<th>").html("poids").appendTo(tr);
            $("<th>").html("thematique").appendTo(tr);
            $("<th>").html("").appendTo(tr);
            tr.appendTo(table);
            
            json.sort(function (a, b) {
                return a.ono - b.ono; 
            });
            
            for (var i=0; i<json.length; i++) {
                var tr = $("<tr>");
                $("<td>").html(json[i].ono).appendTo(tr);
                $("<td>").html(json[i].ano).appendTo(tr);
                $("<td>").html(json[i].prix).appendTo(tr);
                $("<td>").html(json[i].promo).appendTo(tr);
                $("<td>").html(json[i].description).appendTo(tr);
                $("<td>").html(json[i].type).appendTo(tr);
                $("<td>").html(json[i].dimension).appendTo(tr);
                $("<td>").html(json[i].poids).appendTo(tr);
                $("<td>").html(json[i].thematique).appendTo(tr);
                tr.appendTo(table);
            }
            table.appendTo("#showOeuvreMini");

        },
        error: function(xhr, status, errorThrown) {
            alert("Requête impossible: GET/oeuvre");
        }
    });    
    
}

function afficherOeuvre(nom) {

}

function afficherCommandes() {
    
    $("#table-commande").empty();
    
    $.ajax({
        url: "v1/commande",
        type: "GET",
        dataType: "json",
        success: function(json) {
            console.log("Getting /commandes");
            
            var table = $("#table-commande");
            var tr = $("<tr>");
            $("<th>").html("login").appendTo(tr);
            $("<th>").html("ono").appendTo(tr);
            $("<th>").html("paiement").appendTo(tr);
            $("<th>").html("envoi").appendTo(tr);
            $("<th>").html("reception").appendTo(tr);
            $("<th>").html("remuneration").appendTo(tr);
            $("<th>").html("prix").appendTo(tr);
            $("<th>").html("frais").appendTo(tr);
            tr.appendTo(table);
            
            json.sort(function (a, b) {
                return a.ono - b.ono; 
            });
            
            for (var i=0; i<json.length; i++) {
                var tr = $("<tr>");
                $("<td>").html(json[i].login).appendTo(tr);
                $("<td>").html(json[i].ono).appendTo(tr);
                $("<td>").html(json[i].paiement).appendTo(tr);
                $("<td>").html(json[i].envoi).appendTo(tr);
                $("<td>").html(json[i].reception).appendTo(tr);
                $("<td>").html(json[i].remuneration).appendTo(tr);
                $("<td>").html(json[i].prix).appendTo(tr);
                $("<td>").html(json[i].frais).appendTo(tr);
                tr.appendTo(table);
            }
            table.appendTo("#showCommandeMini");

        },
        error: function(xhr, status, errorThrown) {
            alert("Requête impossible: GET/commande");
        }
    }); 
    
}

function afficherSouhaits() {

    $("#table-souhait").empty();

    $.ajax({
        url: "v1/souhait",
        type: "GET",
        dataType: "json",
        success: function(json) {
            console.log("Getting /souhait");

            var table = $("#table-souhait");
            var tr = $("<tr>");
            $("<th>").html("login").appendTo(tr);
            $("<th>").html("ono").appendTo(tr);
            tr.appendTo(table);

            json.sort(function (a, b) {
                return a.ono - b.ono;
            });

            for (var i=0; i<json.length; i++) {
                var tr = $("<tr>");
                $("<td>").html(json[i].login).appendTo(tr);
                $("<td>").html(json[i].ono).appendTo(tr);
                tr.appendTo(table);
            }
            table.appendTo("#showSouhaitMini");

        },
        error: function(xhr, status, errorThrown) {
            alert("Requête impossible: GET/souhait");
        }
    });

}

$(document).ready(function() {
    
    afficherOeuvres();
    afficherCommandes();
    afficherSouhaits();
    afficherUtilisateur();
});