$(document).ready(function() {
    
    $("#post-btn").click(function (event) {
       
        var data={
            ano: $("#postAno").val(),
            prix: $("#postPrix").val(),
            frais: $("#postFrais").val(),
            promo: $("#postPromo").val(),
            description: $("#postDescription").val(),
            type: $("#postType").val(),
            dimension: $("#postDimension").val(),
            poids: $("#postPoids").val(),
            thematique: $("#postThematique").val()
        };
        
        $.ajax({
            url: "v1/oeuvre",
            data: JSON.stringify(data),
            type: "POST",
            dataType: "json",
            contentType : 'application/json',
            success: function(json) {
                console.log(json);
                alert("Added");
            },
            error: function( xhr, status, errorThrown) {
                alert("Erreur: POST");
            },
        });
        
    });
    
});