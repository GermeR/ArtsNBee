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
				var login = json[i].login;
                $("<td>").html("<input class='form-control' type='text' id='putUtilisateurLogin"+login+"' value ='"+json[i].login+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putUtilisateurPassword"+login+"' value ='"+json[i].password+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putUtilisateurNom"+login+"' value ='"+json[i].nom+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putUtilisateurPrenom"+login+"' value ='"+json[i].prenom+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putUtilisateurDateN"+login+"' value ='"+json[i].dateN+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putUtilisateurFno"+login+"' value ='"+json[i].fno+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putUtilisateurMail"+login+"' value ='"+json[i].mail+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putUtilisateurDateDeb"+login+"' value ='"+json[i].dateDeb+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putUtilisateurDateFin"+login+"' value ='"+json[i].dateFin+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putUtilisateurAdresse"+login+"' value ='"+json[i].adresse+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putUtilisateurOptin"+login+"' value ='"+json[i].optin+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putUtilisateurOptinPart"+login+"' value ='"+json[i].optinPart+"'>" ).appendTo(tr);
 				$("<td>").html("<input class='form-control' type='text' id='putUtilisateurRole"+login+"' value ='"+json[i].role+"'>" ).appendTo(tr);
				$("<td>").html("<span onclick='modifierUtilisateur(&apos;"+login+"&apos;);' class='btn btn-success btn-block'>Modifier</span>").appendTo(tr);
				$("<td>").html("<span onclick='supprimerUtilisateur(&apos;"+login+"&apos;);' class='btn btn-success btn-block'>Supprimer</span>").appendTo(tr);
                tr.appendTo(table);
            }
                var tr = $("<tr>");
                $("<td>").html("<input class='form-control' type='text' id='postUtilisateurLogin' value ='login'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postUtilisateurPassword' value ='password'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postUtilisateurNom' value ='nom'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postUtilisateurPrenom' value ='prenom'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postUtilisateurDateN' value ='dateN'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postUtilisateurFno' value ='Gratuit'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postUtilisateurMail' value ='mail'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postUtilisateurDateDeb' value ='dateDebut'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postUtilisateurDateFin' value ='dateFin'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postUtilisateurAdresse' value ='adresse'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postUtilisateurOptin' value ='false'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postUtilisateurOptinPart' value ='false'>" ).appendTo(tr);
 				$("<td>").html("<input class='form-control' type='text' id='postUtilisateurRole' value ='Client'>" ).appendTo(tr);
				$("<td>").html("<span onclick='add_Utilisateur();' class='btn btn-success btn-block'>Ajouter</span>").appendTo(tr);
                tr.appendTo(table);

        },
        error: function(xhr, status, errorThrown) {
            alert("Requête impossible: GET/utilisateur");
        }
    });    
    
}


function add_Utilisateur() {
        var data={
			adresse: $("#postUtilisateurAdresse").val(),
			dateDeb: $("#postUtilisateurDateDeb").val(),
			dateFin: $("#postUtilisateurDateFin").val(),
			dateN: $("#postUtilisateurDateN").val(),
			fno: $("#postUtilisateurFno").val(),
			login: $("#postUtilisateurLogin").val(),
			mail: $("#postUtilisateurMail").val(),
			nom: $("#postUtilisateurNom").val(),
			optin: Boolean('$("#postUtilisateurOptin").val()'),
			optinPart: Boolean('$("#postUtilisateurOptinPart").val()'),
			password: $("#postUtilisateurPassword").val(),
			prenom: $("#postUtilisateurPrenom").val(),
			role: $("#postUtilisateurRole").val()
        };
        
        $.ajax({
            url: "v1/utilisateur",
            data: JSON.stringify(data),
            type: "POST",
            dataType: "json",
            contentType : 'application/json',
            success: function(json) {
               	afficherUtilisateur();
            },
            error: function( xhr, status, errorThrown) {
				$.ajax({
					url: "v1/utilisateur/"+$("#postOeuvreLogin").val(),
					type: "GET",
					dataType: "json",
					success: function(json) {
						alert("utilisateur déjà existant!");
					},
					error: function(xhr, status, errorThrown) {
					}
				});
            },
        });
}

function supprimerUtilisateur(login) {
		$.ajax({
		    url: "v1/utilisateur/"+login,
		    type: "DELETE",
		    dataType: "json",
		    contentType : 'application/json',
		    success: function(json) {
		       	afficherUtilisateur();
		    },
		    error: function( xhr, status, errorThrown) {
		        alert("Erreur: DELETE");
		    },
		}); 
}

function modifierUtilisateur(login) {
		    var data={
				adresse: $("#putUtilisateurAdresse"+login).val(),
				dateDeb: $("#putUtilisateurDateDeb"+login).val(),
				dateFin: $("#putUtilisateurDateFin"+login).val(),
				dateN: $("#putUtilisateurDateN"+login).val(),
				fno: $("#putUtilisateurFno"+login).val(),
				login: $("#putUtilisateurLogin"+login).val(),
				mail: $("#putUtilisateurMail"+login).val(),
				nom: $("#putUtilisateurNom"+login).val(),
				optin: Boolean('$("#putUtilisateurOptin"+login).val()'),
				optinPart: Boolean('$("#putUtilisateurOptinPart"+login).val()'),
				password: $("#putUtilisateurPassword"+login).val(),
				prenom: $("#putUtilisateurPrenom"+login).val(),
				role: $("#putUtilisateurRole"+login).val()
			};
            $.ajax({
		         url: "v1/utilisateur/"+login,
		        data: JSON.stringify(data),
		        type: "PUT",
		        dataType: "json",
		        contentType : 'application/json',
                success: function(response) {
					afficherUtilisateur();
                },
                error: function( xhr, status, errorThrown ) {
                    alert("Erreur: PUT");
                },
            });
  
}

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
                $("<td>").html("<input class='form-control' type='text' id='putOeuvreNom"+ono+"' value ='"+json[i].nom+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putOeuvrePrix"+ono+"' value='"+json[i].prix+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putOeuvrePromo"+ono+"' value='"+json[i].promo+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putOeuvreDescription"+ono+"' value='"+json[i].description+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putOeuvreType"+ono+"' value='"+json[i].type+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putOeuvreDimension"+ono+"' value='"+json[i].dimension+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putOeuvrePoids"+ono+"' value='"+json[i].poids+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putOeuvreThematique"+ono+"' value='"+json[i].thematique+"'>").appendTo(tr);
				$("<td>").html("<span id='put-oeuvre-btn' onclick='modifierOeuvre("+ono+");' class='btn btn-success btn-block'>Modifier</span>").appendTo(tr);
				$("<td>").html("<span id='delete-oeuvre-btn' onclick='supprimerOeuvre("+ono+");' class='btn btn-success btn-block'>Supprimer</span>").appendTo(tr);
                tr.appendTo(table);
            }
                var tr = $("<tr>");
                $("<td>").html("<input class='form-control' type='text' id='postOeuvreNom' value='nom'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvrePrix' value='prix'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvrePromo' value='promo'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvreDescription' value='description'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvreType' value='type'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvreDimension' value='dimension'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvrePoids' value='poids'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postOeuvreThematique' value='thematique'>").appendTo(tr);
				$("<td>").html("<span id='post-oeuvre-btn' onclick='add_oeuvre();' class='btn btn-success btn-block'>Ajouter</span>").appendTo(tr);
                tr.appendTo(table);

        },
        error: function(xhr, status, errorThrown) {
            alert("Requête impossible: GET/oeuvre");
        }
    });    
    
}


function add_oeuvre() {
        var data={
			nom: $("#postOeuvreNom").val(),
            prix: $("#postOeuvrePrix").val(),
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
               	afficherOeuvres();
            },
            error: function( xhr, status, errorThrown) {
                alert("Erreur: POST");
            },
        });
}

function supprimerOeuvre(ono) {
		$.ajax({
		    url: "v1/oeuvre/"+ono,
		    type: "DELETE",
		    dataType: "json",
		    contentType : 'application/json',
		    success: function(json) {
		       	afficherOeuvres();
		    },
		    error: function( xhr, status, errorThrown) {
		        alert("Erreur: DELETE");
		    },
		}); 
}

function modifierOeuvre(ono) {
		     var data={
				    nom: $("#putOeuvreNom"+ono).val(),
				    prix: $("#putOeuvrePrix"+ono).val(),
				    promo: $("#putOeuvrePromo"+ono).val(),
				    description: $("#putOeuvreDescription"+ono).val(),
				    type: $("#putOeuvreType"+ono).val(),
				    dimension: $("#putOeuvreDimension"+ono).val(),
				    poids: $("#putOeuvrePoids"+ono).val(),
					thematique: $("#putOeuvreThematique"+ono).val()
		    };
            $.ajax({
		         url: "v1/oeuvre/"+ono,
		        data: JSON.stringify(data),
		        type: "PUT",
		        dataType: "json",
		        contentType : 'application/json',
                success: function(response) {
					afficherOeuvres();
                },
                error: function( xhr, status, errorThrown ) {
                    alert("Erreur: PUT");
                },
            });
  
}


function afficherForfait() {

    $("#table-forfait").empty();
    
    $.ajax({
        url: "v1/forfait",
        type: "GET",
        dataType: "json",
        success: function(json) {
            console.log("Getting /forfait");
            
            var table = $("#table-forfait");
            var tr = $("<tr>");
            $("<th>").html("fno").appendTo(tr);
			$("<th>").html("prix").appendTo(tr);
            $("<th>").html("nbOeuvres").appendTo(tr);
            $("<th>").html("").appendTo(tr);
            tr.appendTo(table);
            
            json.sort(function (a, b) {
                return a.ono - b.ono; 
            });
            
            for (var i=0; i<json.length; i++) {
				var fno = json[i].fno;
                var tr = $("<tr>");
                $("<td>").html("<input class='form-control' type='text' id='putForfaitFno"+fno+"' value ='"+json[i].fno+"'>" ).appendTo(tr);
				$("<td>").html("<input class='form-control' type='text' id='putForfaitPrix"+fno+"' value ='"+json[i].prix+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putForfaitnbOeuvres"+fno+"' value='"+json[i].nbOeuvres+"'>").appendTo(tr);
				$("<td>").html("<span id='put-oeuvre-btn' onclick='modifierForfait(&apos;"+fno+"&apos;);' class='btn btn-success btn-block'>Modifier</span>").appendTo(tr);
				$("<td>").html("<span id='delete-oeuvre-btn' onclick='supprimerForfait(&apos;"+fno+"&apos;);' class='btn btn-success btn-block'>Supprimer</span>").appendTo(tr);
                tr.appendTo(table);
            }
                var tr = $("<tr>");
                $("<td>").html("<input class='form-control' type='text' id='postForfaitFno' value='forfait'>").appendTo(tr);
				$("<td>").html("<input class='form-control' type='text' id='postForfaitPrix' value='0'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postForfaitnbOeuvres' value='0'>").appendTo(tr);
				$("<td>").html("<span id='post-oeuvre-btn' onclick='add_Forfait();' class='btn btn-success btn-block'>Ajouter</span>").appendTo(tr);
                tr.appendTo(table);
        },
        error: function(xhr, status, errorThrown) {
            alert("Requête impossible: GET/forfait");
        }
    });    
    
}


function add_Forfait() {
		    var data={
				fno: $("#postForfaitFno").val(),
				prix: $("#postForfaitPrix").val(),
		        nbOeuvres: $("#postForfaitnbOeuvres").val(),
		    };
        
        $.ajax({
            url: "v1/forfait",
            data: JSON.stringify(data),
            type: "POST",
            dataType: "json",
            contentType : 'application/json',
            success: function(json) {
               afficherForfait();
            },
            error: function( xhr, status, errorThrown) {
                alert("Erreur: POST/forfait déjà créer");
            },
        });
}

function supprimerForfait(fno) {
		$.ajax({
		    url: "v1/forfait/"+fno,
		    type: "DELETE",
		    dataType: "json",
		    contentType : 'application/json',
		    success: function(json) {
		       	afficherForfait();
		    },
		    error: function( xhr, status, errorThrown) {
		        alert("Erreur: DELETE");
		    },
		}); 
}

function modifierForfait(fno) {
		    var data={
				login: $("#putCommandeLogin"+ono+login).val(),
				ono: $("#putCommandeOno"+ono+login).val(),
		        paiement: Boolean('$("#putCommandePaiement"+ono+login).val()'),
		        envoi: Boolean('$("#putCommandeEnvoi"+ono+login).val()'),
		        reception: Boolean('$("#putCommandeReception"+ono+login).val()'),
		        remuneration: Boolean('$("#putCommandeRemuneration"+ono+login).val()'),
		        prix: $("#putCommandePrix"+ono+login).val(),
		        frais: $("#putCommandeFrais"+ono+login).val()
		    };
            $.ajax({
		         url: "v1/commande/"+login+":"+ono,
		        data: JSON.stringify(data),
		        type: "PUT",
		        dataType: "json",
		        contentType : 'application/json',
                success: function(response) {
					afficherForfait();
                },
                error: function( xhr, status, errorThrown ) {
                    alert("Erreur: PUT");
                },
            });
  
}

function afficherCommandes() {

    $("#table-commande").empty();
    
    $.ajax({
        url: "v1/commande",
        type: "GET",
        dataType: "json",
        success: function(json) {
            console.log("Getting /commande");
            
            var table = $("#table-commande");
            var tr = $("<tr>");
            $("<th>").html("login").appendTo(tr);
			$("<th>").html("ono").appendTo(tr);
            $("<th>").html("paiement").appendTo(tr);
            $("<th>").html("envoi").appendTo(tr);
            $("<th>").html("reception").appendTo(tr);
            $("<th>").html("remuneration").appendTo(tr);
            $("<th>").html("prix").appendTo(tr);
            $("<th>").html("frais").appendTo(tr);
            $("<th>").html("").appendTo(tr);
            tr.appendTo(table);
            
            json.sort(function (a, b) {
                return a.ono - b.ono; 
            });
            
            for (var i=0; i<json.length; i++) {
				var ono = json[i].ono;
				var login = json[i].login;
                var tr = $("<tr>");
                $("<td>").html("<input class='form-control' type='text' id='putCommandeLogin"+ono+login+"' value ='"+json[i].login+"'>" ).appendTo(tr);
				$("<td>").html("<input class='form-control' type='text' id='putCommandeOno"+ono+login+"' value ='"+json[i].ono+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putCommandePaiement"+ono+login+"' value='"+json[i].paiement+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putCommandeEnvoi"+ono+login+"' value='"+json[i].envoi+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putCommandeReception"+ono+login+"' value='"+json[i].reception+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putCommandeRemuneration"+ono+login+"' value='"+json[i].remuneration+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putCommandePrix"+ono+login+"' value='"+json[i].prix+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putCommandeFrais"+ono+login+"' value='"+json[i].frais+"'>").appendTo(tr);
				$("<td>").html("<span id='put-oeuvre-btn' onclick='modifierCommande(&apos;"+login+"&apos;:"+ono+");' class='btn btn-success btn-block'>Modifier</span>").appendTo(tr);
				$("<td>").html("<span id='delete-oeuvre-btn' onclick='supprimerCommande("+ono+");' class='btn btn-success btn-block'>Supprimer</span>").appendTo(tr);
                tr.appendTo(table);
            }
                var tr = $("<tr>");
                $("<td>").html("<input class='form-control' type='text' id='postCommandeLogin' value='client'>").appendTo(tr);
				$("<td>").html("<input class='form-control' type='text' id='postCommandeOno' value='id oeuvre'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postCommandePaiement' value='false'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postCommandeEnvoi' value='false'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postCommandeReception' value='false'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postCommandeRemuneration' value='false'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postCommandePrix' value='0'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postCommandeFrais' value='0'>").appendTo(tr);
				$("<td>").html("<span id='post-oeuvre-btn' onclick='add_Commande();' class='btn btn-success btn-block'>Ajouter</span>").appendTo(tr);
                tr.appendTo(table);
        },
        error: function(xhr, status, errorThrown) {
            alert("Requête impossible: GET/commande");
        }
    });    
    
}


function add_Commande() {
		    var data={
				login: $("#postCommandeLogin").val(),
				ono: $("#postCommandeOno").val(),
		        paiement: $("#postCommandePaiement").val(),
		        envoi: $("#postCommandeEnvoi").val(),
		        reception: $("#postCommandeReception").val(),
		        remuneration: $("#postCommandeRemuneration").val(),
		        prix: $("#postCommandePrix").val(),
		        frais: $("#postCommandeFrais").val()
		    };
        
        $.ajax({
            url: "v1/commande",
            data: JSON.stringify(data),
            type: "POST",
            dataType: "json",
            contentType : 'application/json',
            success: function(json) {
               	afficherCommandes();
            },
            error: function( xhr, status, errorThrown) {
                alert("Erreur: POST/Oeuvre déjà acheté");
            },
        });
}

function supprimerCommande(ono) {
		$.ajax({
		    url: "v1/commande/"+ono,
		    type: "DELETE",
		    dataType: "json",
		    contentType : 'application/json',
		    success: function(json) {
		       	afficherCommandes();
		    },
		    error: function( xhr, status, errorThrown) {
		        alert("Erreur: DELETE");
		    },
		}); 
}

function modifierCommande(login,ono) {
		    var data={
				login: $("#postCommandeLogin+ono+login").val(),
				ono: $("#postCommandeOno"+ono+login).val(),
		        paiement: Boolean('$("#postCommandePaiement"+ono+login).val()'),
		        envoi: Boolean('$("#postCommandeEnvoi"+ono+login).val()'),
		        reception: Boolean('$("#postCommandeReception"+ono+login).val()'),
		        remuneration: Boolean('$("#postCommandeRemuneration"+ono+login).val()'),
		        prix: $("#postCommandePrix"+ono+login).val(),
		        frais: $("#postCommandeFrais"+ono+login).val()
		    };
            $.ajax({
		        url: "v1/commande/"+login+":"+ono,
		        data: JSON.stringify(data),
		        type: "PUT",
		        dataType: "json",
		        contentType : 'application/json',
                success: function(response) {
					afficherOeuvres();
                },
                error: function( xhr, status, errorThrown ) {
                    alert("Erreur: PUT");
                },
            });
  
}

function afficherCommandeTerminee() {

    $("#table-facture").empty();
    
    $.ajax({
        url: "v1/facture",
        type: "GET",
        dataType: "json",
        success: function(json) {
            console.log("Getting /facture");
            var table = $("#table-facture");
            var tr = $("<tr>");
            $("<th>").html("login").appendTo(tr);
			$("<th>").html("ono").appendTo(tr);
            $("<th>").html("prix").appendTo(tr);
            $("<th>").html("frais").appendTo(tr);
            $("<th>").html("adresseLivraison").appendTo(tr);
            $("<th>").html("").appendTo(tr);
            tr.appendTo(table);
            
            json.sort(function (a, b) {
                return a.ono - b.ono; 
            });
            
            for (var i=0; i<json.length; i++) {
				var ono = json[i].ono;
				var login = json[i].login;
                var tr = $("<tr>");
                $("<td>").html("<input class='form-control' type='text' value ='"+json[i].login+"'>" ).appendTo(tr);
				$("<td>").html("<input class='form-control' type='text' value ='"+json[i].ono+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' value='"+json[i].prix+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' value='"+json[i].frais+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' value='"+json[i].adresseLivraison+"'>").appendTo(tr);
				$("<td>").html("<span id='delete-oeuvre-btn' onclick='supprimerCommandeTerminee("+ono+",&apos;"+login+"&apos;);' class='btn btn-success btn-block'>Supprimer</span>").appendTo(tr);
                tr.appendTo(table);
            }
                var tr = $("<tr>");
                $("<td>").html("<input class='form-control' type='text' id='postCommandeTermineeLogin' value='login'>").appendTo(tr);
				$("<td>").html("<input class='form-control' type='text' id='postCommandeTermineeOno' value='id oeuvre'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postCommandeTermineePrix' value='prix'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='postCommandeTermineeFrais' value='frais'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='putCommandeTermineeadresseLivraison' value='adresse'>").appendTo(tr);
				$("<td>").html("<span id='post-oeuvre-btn' onclick='add_CommandeTerminee();' class='btn btn-success btn-block'>Ajouter</span>").appendTo(tr);
                tr.appendTo(table);
        },
        error: function(xhr, status, errorThrown) {
            alert("Requête impossible: GET/facture");
        }
    });    
    
}


function add_CommandeTerminee() {
		    var data={
				login: $("#postCommandeTermineeLogin").val(),
				ono: $("#postCommandeTermineeOno").val(),
		        prix: $("#postCommandeTermineePrix").val(),
		        frais: $("#postCommandeTermineeFrais").val(),
		        adresseLivraison: $("#putCommandeTermineeadresseLivraison").val(),
		    };
        
        $.ajax({
            url: "v1/facture",
            data: JSON.stringify(data),
            type: "POST",
            dataType: "json",
            contentType : 'application/json',
            success: function(json) {
               	afficherCommandeTerminee();
            },
            error: function( xhr, status, errorThrown) {
                alert("Erreur: POST");
            },
        });
}

function supprimerCommandeTerminee(ono,login) {
		$.ajax({
		    url: "v1/facture/"+ono+":"+login,
		    type: "DELETE",
		    dataType: "json",
		    contentType : 'application/json',
		    success: function(json) {
		       	afficherCommandeTerminee();
		    },
		    error: function( xhr, status, errorThrown) {
		        alert("Erreur: DELETE");
		    },
		}); 
}

$(document).ready(function() {

    afficherUtilisateur();
    afficherOeuvres();
	afficherForfait();
	afficherCommandes();
	afficherCommandeTerminee();

});
