function afficherUser(nom) {

    $.ajax({
        url: "v1/utilisateur/"+nom,
        type: "GET",
        dataType: "json",
        success: function(json) {
            console.log("Getting utilisateur/"+nom);
            var profil = $("#getProfile");

            var table = $("<table>");

            var nom = $("<tr>");
            $("<td>").html("<b>Nom:</b>").appendTo(nom);
            $("<td>").html(json.nom).appendTo(nom);
            nom.appendTo(table);

            var prenom = $("<tr>");
            $("<td>").html("<b>Prénom:</b>").appendTo(prenom);
            $("<td>").html(json.prenom).appendTo(prenom);
            prenom.appendTo(table);

            var dateN = $("<tr>");
            $("<td>").html("<b>Date de naissance:</b>").appendTo(dateN);
            $("<td>").html(json.dateN).appendTo(dateN);
            dateN.appendTo(table);

            var adresse = $("<tr>");
            $("<td>").html("<b>Adresse:</b>").appendTo(adresse);
            $("<td>").html(json.adresse).appendTo(adresse);
            adresse.appendTo(table);

            var mail = $("<tr>");
            $("<td>").html("<b>E-mail:</b>").appendTo(mail);
            $("<td>").html(json.mail).appendTo(mail);
            mail.appendTo(table);

            table.appendTo(profil);
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

                // Options
                var tdDOpt = $("<td>"); // Colonne des options
                $("<h3>").html("<span class='btn btn-danger btn-block' onclick='supprimerOeuvre("+json[i].ono+")'>Supprimer</span>").appendTo(tdDOpt);
                tdDOpt.appendTo(tr);

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

function afficherOeuvre(ono) {

    $.ajax({
        url: "v1/oeuvre/id/"+ono,
        type: "GET",
        dataType: "json",
        success: function(json) {
            hideAllOeuvre();
            $("#getOneOeuvre").empty();
            $("#getOneOeuvre").show();
            console.log("Getting oeuvre/"+ono);
            var profil = $("#getOneOeuvre");

            var table = $("<table>");
            var tr = $("<tr>");

            // Infos:
            var tdDesc = $("<td>"); // Colonne des informations
            var tdDescTable = $("<table>"); // Tableau dans la colonne

            var nom = $("<tr>");
            $("<td>").html("<b>Nom:</b>").appendTo(nom);
            $("<td>").html(json.nom).appendTo(nom);

            var auteur = $("<tr>");
            $("<td>").html("<b>Description:</b>").appendTo(auteur);
            $("<td>").html(json.description).appendTo(auteur);

            var dimensions = $("<tr>");
            $("<td>").html("<b>Dimensions:</b>").appendTo(dimensions);
            $("<td>").html(json.dimension).appendTo(dimensions);

            var poids = $("<tr>");
            $("<td>").html("<b>Poids:</b>").appendTo(poids);
            $("<td>").html(json.poids + "g").appendTo(poids);

            var ono = $("<tr>");
            $("<td>").html("<b>Référence de l'oeuvre:</b>").appendTo(ono);
            $("<td>").html(json.ono).appendTo(ono);

            var ano = $("<tr>");
            $("<td>").html("<b>Référence de l'artiste:</b>").appendTo(ano);
            $("<td>").html(json.ono).appendTo(ano);

            nom.appendTo(tdDescTable);
            auteur.appendTo(tdDescTable);
            dimensions.appendTo(tdDescTable);
            poids.appendTo(tdDescTable);
            ono.appendTo(tdDescTable);
            ano.appendTo(tdDescTable);

            tdDescTable.appendTo(tdDesc);
            tdDesc.appendTo(tr);


            tr.appendTo(table);
            $("<p>").appendTo(table);
            $("<h1>").html(json.prix+"€").appendTo(tr);
            $("<img src='"+json.img+"'></img>").appendTo(table);
            table.appendTo(profil);
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

                // Options
                var tdDOpt = $("<td>"); // Colonne des options
                $("<h3>").html("<span class='btn btn-success btn-block' onclick='afficherOeuvre("+json[i].ono+")'>Plus d'infos</span>").appendTo(tdDOpt);
                tdDOpt.appendTo(tr);

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

function afficherMesSouhaits(login) {
    $("#table-souhait").empty();
    $.ajax({
        url: "v1/souhait/"+login,
        type: "GET",
        dataType: "json",
        success: function(json) {
            console.log("Getting /souhait/"+login);

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
    afficherUtilisateur();

});