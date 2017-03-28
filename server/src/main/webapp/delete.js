function supprimerOeuvre(id) {
     
    $.ajax({
        url: "v1/oeuvre/"+id,
        type: "DELETE",
        dataType: "json",
        contentType : 'application/json',
        success: function(json) {
            console.log("Deleted: " + json);
            alert("Oeuvre supprimée avec succès");
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
            alert("Commande supprimée avec succès");
        },
        error: function( xhr, status, errorThrown) {
            alert("Erreur: DELETE");
        },
    });
}

function supprimerSouhait(login, ono) {

    $.ajax({
        url: "v1/souhait/"+ono+":"+login,
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
}


$(document).ready(function() {
    
    $("#delete-oeuvre-btn").click(function (event) {        
        supprimerOeuvre(parseInt($("#deleteOno").val()));        
    });
    
});