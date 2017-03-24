$(document).ready(function() {
    
    $("#delete-oeuvre-btn").click(function (event) {
        
        console.log(parseInt($("#deleteOno").val()));
        
        $.ajax({
            url: "v1/oeuvre/"+parseInt($("#deleteOno").val()),
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
        
    });
    
});