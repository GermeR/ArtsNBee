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

/*function afficherOeuvres() {

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
            $("<th>").html("nom").appendTo(tr);
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
                $("<td>").html(json[i].nom).appendTo(tr);
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
    
}*/

function afficherOeuvre(ono) {

    $.ajax({
        url: "v1/oeuvre/id/"+ono,
        type: "GET",
        dataType: "json",
        success: function(json) {
            hideAllOeuvre();
            console.log("Getting oeuvre/"+ono);
            var profil = $("#getOneOeuvre");
            $("<h3>").html("Ono: " + json.ono).appendTo(profil);
            $("<h3>").html("Nom: " + json.nom).appendTo(profil);
            $("<h3>").html("Ano: " + json.ano).appendTo(profil);
            $("<h3>").html("Prix: " + json.prix).appendTo(profil);
            $("<h3>").html("Réduction: " + json.promo).appendTo(profil);
            $("<h3>").html("Description: " + json.description).appendTo(profil);
            $("<h3>").html("Type: " + json.type).appendTo(profil);
            $("<h3>").html("Dimensions: " + json.dimension).appendTo(profil);
            $("<h3>").html("Poids: " + json.poids).appendTo(profil);
            $("<h3>").html("Thématique: " + json.thematique).appendTo(profil);
        },
        error: function(xhr, status, errorThrown) {
            console.log("Requête impossible: GET/oeuvre/id"+ono);
        }
    });
}

function afficherOeuvres() {
    //Clear du tableau pour éviter les doublons
    $("#table-oeuvre").empty();
    $.ajax({
        url: "v1/oeuvre", //Requete sur toutes les oeuvres
        type: "GET",
        dataType: "json",
        success: function(json) {
            var table = $("#table-oeuvre");
            /*var tr = $("<tr>");
            $("<th>").html("Image").appendTo(tr);
            $("<th>").html("Informations").appendTo(tr);
            $("<th>").html("Prix").appendTo(tr);
            tr.appendTo(table);*/

            json.sort(function (a, b) {
                return a.ono - b.ono;
            });

            for (var i=0; i<json.length; i++) {
                var tr = $("<tr>");

                // Image
                $("<td>").html("<img src='"+json[i].img+"' width='150' height='150'></img>").appendTo(tr);

                // Informations
                var tdDesc = $("<td>"); // Colonne des informations
                var tdDescTable = $("<table>"); // Tableau dans la colonne
                var nom = $("<tr>");
                $("<td>").html("<b>Nom:</b>").appendTo(nom);
                $("<td>").html(json[i].nom).appendTo(nom);
                var auteur = $("<tr>");
                $("<td>").html("<b>Description:</b>").appendTo(auteur);
                $("<td>").html(json[i].description).appendTo(auteur);
                var dimensions = $("<tr>");
                $("<td>").html("<b>Dimensions:</b>").appendTo(dimensions);
                $("<td>").html(json[i].dimension).appendTo(dimensions);
                var poids = $("<tr>");
                $("<td>").html("<b>Poids:</b>").appendTo(poids);
                $("<td>").html(json[i].poids + "g").appendTo(poids);
                nom.appendTo(tdDescTable);
                auteur.appendTo(tdDescTable);
                dimensions.appendTo(tdDescTable);
                poids.appendTo(tdDescTable);
                tdDescTable.appendTo(tdDesc);
                tdDesc.appendTo(tr);

                // Prix
                $("<td>").html("<h2>"+json[i].prix+"€").appendTo(tr);


                /*$("<td>").html(json[i].nom).appendTo(tr);
                $("<td>").html(json[i].ano).appendTo(tr);
                $("<td>").html(json[i].prix).appendTo(tr);
                $("<td>").html(json[i].promo).appendTo(tr);
                $("<td>").html(json[i].description).appendTo(tr);
                $("<td>").html(json[i].type).appendTo(tr);
                $("<td>").html(json[i].dimension).appendTo(tr);
                $("<td>").html(json[i].poids).appendTo(tr);
                $("<td>").html(json[i].thematique).appendTo(tr);*/
                tr.appendTo(table);
            }
            table.appendTo("#showOeuvreMini");

        },
        error: function(xhr, status, errorThrown) {
            console.error("Impossible de récuéperer la liste des oeuvres");
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