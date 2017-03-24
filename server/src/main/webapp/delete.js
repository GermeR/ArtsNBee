function supprimerOeuvre(id) {
     
    $.ajax({
        url: "v1/oeuvre/"+id,
        type: "DELETE",
        dataType: "json",
        contentType : 'application/json',
        success: function(json) {
            console.log("Deleted: " + json);
            alert("Deleted");
        },
        error: function( xhr, status, errorThrown) {
            alert("Erreur: DELETE");
        },
    });
}

function supprimerCommande(id) {
     
    $.ajax({
        url: "v1/commande/"+id,
        type: "DELETE",
        dataType: "json",
        contentType : 'application/json',
        success: function(json) {
            console.log("Deleted: " + json);
            alert("Deleted");
        },
        error: function( xhr, status, errorThrown) {
            alert("Erreur: DELETE");
        },
    });
}


$(document).ready(function() {
    
    $("#delete-oeuvre-btn").click(function (event) {        
        supprimerOeuvre(parseInt($("#deleteOno").val()));        
    });
    
});