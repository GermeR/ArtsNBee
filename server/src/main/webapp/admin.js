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
            $("<th>").html("nom").appendTo(tr);
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
				var ono = json[i].ono;
                var tr = $("<tr>");
                $("<td>").html("<input class='form-control' type='text' id='postOeuvreNom"+ono+"' value ='"+json[i].nom+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvrePrix"+ono+"' value='"+json[i].prix+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvrePromo"+ono+"' value='"+json[i].promo+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvreDescription"+ono+"' value='"+json[i].description+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvreType"+ono+"' value='"+json[i].type+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvreDimension"+ono+"' value='"+json[i].dimension+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvrePoids"+ono+"' value='"+json[i].poids+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvreThematique"+ono+"' value='"+json[i].thematique+"'>").appendTo(tr);
				$("<td>").html("<span id='put-oeuvre-btn' onclick='modifierOeuvre("+ono+");' class='btn btn-success btn-block'>Modifier</span>").appendTo(tr);
				$("<td>").html("<span id='delete-oeuvre-btn' onclick='supprimerOeuvre("+ono+");' class='btn btn-success btn-block'>Supprimer</span>").appendTo(tr);
                tr.appendTo(table);
            }
                var tr = $("<tr>");
                $("<td>").html("<input class='form-control' type='text' id='postOeuvreAno' value='nom'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvreAno' value='prix'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvreAno' value='promo'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvreAno' value='description'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvreAno' value='type'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvreAno' value='dimension'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvreAno' value='poids'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvreAno' value='thematique'>").appendTo(tr);
				$("<td>").html("<span id='post-oeuvre-btn' onclick='add_oeuvre();' class='btn btn-success btn-block'>Ajouter</span>").appendTo(tr);
                tr.appendTo(table);
            table.appendTo("#showOeuvreMini");

        },
        error: function(xhr, status, errorThrown) {
            alert("Requête impossible: GET/oeuvre");
        }
    });    
    
}


function add_oeuvre() {
        var data={
            ano: $("#postOeuvreAno").val(),
            prix: $("#postOeuvreNom").val(),
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
            },
            error: function( xhr, status, errorThrown) {
                alert("Erreur: POST");
            },
        });
	afficherOeuvres();
}

function supprimerOeuvre(ono) {
		$.ajax({
		    url: "v1/oeuvre/"+ono,
		    type: "DELETE",
		    dataType: "json",
		    contentType : 'application/json',
		    success: function(json) {
		        console.log("Deleted: " + json);
		    },
		    error: function( xhr, status, errorThrown) {
		        alert("Erreur: DELETE");
		    },
		}); 
	afficherOeuvres();
}

function modifierOeuvre(ono) {
		    var data={
				    prix: $("#postOeuvreNom"+ono).val(),
				    promo: $("#postOeuvrePromo"+ono).val(),
				    description: $("#postOeuvreDescription"+ono).val(),
				    type: $("#postOeuvreType"+ono).val(),
				    dimension: $("#postOeuvreDimension"+ono).val(),
				    poids: $("#postOeuvrePoids"+ono).val(),
				    thematique: $("#postOeuvreThematique"+ono).val()
		    };
            $.ajax({
		         url: "v1/oeuvre/"+ono,
		        data: JSON.stringify(data),
		        type: "PUT",
		        dataType: "json",
		        contentType : 'application/json',
                success: function(response) {
                    alert( "Update" );
                },
                error: function( xhr, status, errorThrown ) {
                    alert("Erreur: PUT");
                },
            });
  
	afficherOeuvres();
}

$(document).ready(function() {
    
    afficherOeuvres();

});
