function afficherUser(nom) {

    $.ajax({
        url: "v1/utilisateur/"+nom,
        type: "GET",
        dataType: "json",
        success: function(json) {
            console.log("Getting utilisateur/"+nom);
            var profil = $("#getProfile");
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
            $("<th>").html("frais").appendTo(tr);
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
                $("<td>").html(json[i].frais).appendTo(tr);
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

$(document).ready(function() {
    
    afficherOeuvres();
    afficherCommandes();       
});