$(document).ready(function() {
   
    $.ajax({
        url: "v1/oeuvre",
        type: "GET",
        dataType: "json",
        success: function(json) {
            console.log("Récupération des oeuvres");
            
            var table = $("#table");
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
            table.appendTo("#oeuvre");

        },
        error: function(xhr, status, errorThrown) {
            alert("Requête impossible: GET/oeuvre");
        }
    });
});