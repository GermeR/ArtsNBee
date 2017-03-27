$(document).ready(function() { 
    
    $("#put-btn").click(function (event) {
       
        	var data={
					ono: $("#putOno").val(),
					ano: $("#putAno").val(),
				    nom: $("#putNom").val(),
				    prix: $("#putPrix").val(),
				    promo: $("#putPromo").val(),
				    description: $("#putDescription").val(),
				    type: $("#putType").val(),
				    dimension: $("#putDimension").val(),
				    poids: $("#putPoids").val(),
					thematique: $("#putThematique").val()
		    };
            $.ajax({
		         url: "v1/oeuvre/"+$("#putOno").val(),
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
        
    });
});
