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

$(document).ready(function() { 
    afficherUtilisateur();
});
