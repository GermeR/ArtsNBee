$(document).ready(function() {
    
    $("#post-oeuvre-btn").click(function (event) {
       
        var data={
            ano: $("#postOeuvreAno").val(),
            prix: $("#postOeuvrePrix").val(),
            frais: $("#postOeuvreFrais").val(),
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
                alert("Added");
            },
            error: function( xhr, status, errorThrown) {
                alert("Erreur: POST");
            },
        });
        
    });   
    
    $("#post-commande-btn").click(function (event) {
       
        var data={
            login: $("#postCommandeLogin").val(),
            ono: $("#postCommandeOno").val(),
            paiement: $("#postCommandePaiement").val(),
            envoi: $("#postCommandeEnvoi").val(),
            reception: $("#postCommandeReception").val(),
            remuneration: $("#postCommandeRemuneration").val(),
            prix: $("#postCommandePrix").val(),
            frais: $("#postCommandeFrais").val(),
        };
        
        $.ajax({
            url: "v1/commande",
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