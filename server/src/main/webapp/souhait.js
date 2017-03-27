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
    afficherSouhaits();     
});