function adminafficherUtilisateur() {

    $("#admin-table-utilisateur").empty();
    
    $.ajax({
        url: "v1/utilisateur",
        type: "GET",
        dataType: "json",
        success: function(json) {
            console.log("Getting /utilisateur");
            var table = $("#admin-table-utilisateur");
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
                $("<td>").html("<input class='form-control' type='text' id='adminputUtilisateurLogin"+login+"' value ='"+json[i].login+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputUtilisateurPassword"+login+"' value ='"+json[i].password+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputUtilisateurNom"+login+"' value ='"+json[i].nom+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputUtilisateurPrenom"+login+"' value ='"+json[i].prenom+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputUtilisateurDateN"+login+"' value ='"+json[i].dateN+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputUtilisateurFno"+login+"' value ='"+json[i].fno+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputUtilisateurMail"+login+"' value ='"+json[i].mail+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputUtilisateurDateDeb"+login+"' value ='"+json[i].dateDeb+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputUtilisateurDateFin"+login+"' value ='"+json[i].dateFin+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputUtilisateurAdresse"+login+"' value ='"+json[i].adresse+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputUtilisateurOptin"+login+"' value ='"+json[i].optin+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputUtilisateurOptinPart"+login+"' value ='"+json[i].optinPart+"'>" ).appendTo(tr);
 				$("<td>").html("<input class='form-control' type='text' id='adminputUtilisateurRole"+login+"' value ='"+json[i].role+"'>" ).appendTo(tr);
				$("<td>").html("<span onclick='adminmodifierUtilisateur(&apos;"+login+"&apos;);' class='btn btn-success btn-block'>Modifier</span>").appendTo(tr);
				$("<td>").html("<span onclick='adminsupprimerUtilisateur(&apos;"+login+"&apos;);' class='btn btn-success btn-block'>Supprimer</span>").appendTo(tr);
                tr.appendTo(table);
            }
                var tr = $("<tr>");
                $("<td>").html("<input class='form-control' type='text' id='adminpostUtilisateurLogin' value ='login'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostUtilisateurPassword' value ='password'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostUtilisateurNom' value ='nom'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostUtilisateurPrenom' value ='prenom'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostUtilisateurDateN' value ='dateN'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostUtilisateurFno' value ='Gratuit'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostUtilisateurMail' value ='mail'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostUtilisateurDateDeb' value ='dateDebut'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostUtilisateurDateFin' value ='dateFin'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostUtilisateurAdresse' value ='adresse'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostUtilisateurOptin' value ='false'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostUtilisateurOptinPart' value ='false'>" ).appendTo(tr);
 				$("<td>").html("<input class='form-control' type='text' id='adminpostUtilisateurRole' value ='Client'>" ).appendTo(tr);
				$("<td>").html("<span onclick='adminadd_Utilisateur();' class='btn btn-success btn-block'>Ajouter</span>").appendTo(tr);
                tr.appendTo(table);

        },
        error: function(xhr, status, errorThrown) {
            alert("Requête impossible: GET/utilisateur");
        }
    });    
    
}


function adminadd_Utilisateur() {
        var data={
			adresse: $("#adminpostUtilisateurAdresse").val(),
			dateDeb: $("#adminpostUtilisateurDateDeb").val(),
			dateFin: $("#adminpostUtilisateurDateFin").val(),
			dateN: $("#adminpostUtilisateurDateN").val(),
			fno: $("#adminpostUtilisateurFno").val(),
			login: $("#adminpostUtilisateurLogin").val(),
			mail: $("#adminpostUtilisateurMail").val(),
			nom: $("#adminpostUtilisateurNom").val(),
			optin: Boolean('$("#adminpostUtilisateurOptin").val()'),
			optinPart: Boolean('$("#adminpostUtilisateurOptinPart").val()'),
			password: $("#adminpostUtilisateurPassword").val(),
			prenom: $("#adminpostUtilisateurPrenom").val(),
			role: $("#adminpostUtilisateurRole").val()
        };
        
        $.ajax({
            url: "v1/utilisateur",
            data: JSON.stringify(data),
            type: "POST",
            dataType: "json",
            contentType : 'application/json',
            success: function(json) {
               	adminafficherUtilisateur();
            },
            error: function( xhr, status, errorThrown) {
				$.ajax({
					url: "v1/utilisateur/"+$("#adminpostOeuvreLogin").val(),
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

function adminsupprimerUtilisateur(login) {
		$.ajax({
		    url: "v1/utilisateur/"+login,
		    type: "DELETE",
		    dataType: "json",
		    contentType : 'application/json',
		    success: function(json) {
		       	adminafficherUtilisateur();
		    },
		    error: function( xhr, status, errorThrown) {
		        alert("Erreur: DELETE");
		    },
		}); 
}

function adminmodifierUtilisateur(login) {
		    var data={
				adresse: $("#adminputUtilisateurAdresse"+login).val(),
				dateDeb: $("#adminputUtilisateurDateDeb"+login).val(),
				dateFin: $("#adminputUtilisateurDateFin"+login).val(),
				dateN: $("#adminputUtilisateurDateN"+login).val(),
				fno: $("#adminputUtilisateurFno"+login).val(),
				login: $("#adminputUtilisateurLogin"+login).val(),
				mail: $("#adminputUtilisateurMail"+login).val(),
				nom: $("#adminputUtilisateurNom"+login).val(),
				optin: Boolean('$("#adminputUtilisateurOptin"+login).val()'),
				optinPart: Boolean('$("#adminputUtilisateurOptinPart"+login).val()'),
				password: $("#adminputUtilisateurPassword"+login).val(),
				prenom: $("#adminputUtilisateurPrenom"+login).val(),
				role: $("#adminputUtilisateurRole"+login).val()
			};
            $.ajax({
		         url: "v1/utilisateur/"+login,
		        data: JSON.stringify(data),
		        type: "PUT",
		        dataType: "json",
		        contentType : 'application/json',
                success: function(response) {
					adminafficherUtilisateur();
                },
                error: function( xhr, status, errorThrown ) {
                    alert("Erreur: PUT");
                },
            });
  
}

function adminafficherOeuvres() {

    $("#admin-table-oeuvre").empty();
    
    $.ajax({
        url: "v1/oeuvre",
        type: "GET",
        dataType: "json",
        success: function(json) {
            console.log("Getting /oeuvres");
            
            var table = $("#admin-table-oeuvre");
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
                $("<td>").html("<input class='form-control' type='text' id='adminputOeuvreNom"+ono+"' value ='"+json[i].nom+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputOeuvrePrix"+ono+"' value='"+json[i].prix+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputOeuvrePromo"+ono+"' value='"+json[i].promo+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputOeuvreDescription"+ono+"' value='"+json[i].description+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputOeuvreType"+ono+"' value='"+json[i].type+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputOeuvreDimension"+ono+"' value='"+json[i].dimension+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputOeuvrePoids"+ono+"' value='"+json[i].poids+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputOeuvreThematique"+ono+"' value='"+json[i].thematique+"'>").appendTo(tr);
				$("<td>").html("<span id='put-oeuvre-btn' onclick='adminmodifierOeuvre("+ono+");' class='btn btn-success btn-block'>Modifier</span>").appendTo(tr);
				$("<td>").html("<span id='delete-oeuvre-btn' onclick='adminsupprimerOeuvre("+ono+");' class='btn btn-success btn-block'>Supprimer</span>").appendTo(tr);
                tr.appendTo(table);
            }
                var tr = $("<tr>");
                $("<td>").html("<input class='form-control' type='text' id='adminpostOeuvreNom' value='nom'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostOeuvrePrix' value='prix'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostOeuvrePromo' value='promo'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostOeuvreDescription' value='description'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostOeuvreType' value='type'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostOeuvreDimension' value='dimension'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostOeuvrePoids' value='poids'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostOeuvreThematique' value='thematique'>").appendTo(tr);
				$("<td>").html("<span id='post-oeuvre-btn' onclick='adminadd_oeuvre();' class='btn btn-success btn-block'>Ajouter</span>").appendTo(tr);
                tr.appendTo(table);

        },
        error: function(xhr, status, errorThrown) {
            alert("Requête impossible: GET/oeuvre");
        }
    });    
    
}


function adminadd_oeuvre() {
        var data={
			nom: $("#adminpostOeuvreNom").val(),
            prix: $("#adminpostOeuvrePrix").val(),
            promo: $("#adminpostOeuvrePromo").val(),
            description: $("#adminpostOeuvreDescription").val(),
            type: $("#adminpostOeuvreType").val(),
            dimension: $("#adminpostOeuvreDimension").val(),
            poids: $("#adminpostOeuvrePoids").val(),
            thematique: $("#adminpostOeuvreThematique").val()
        };
        
        $.ajax({
            url: "v1/oeuvre",
            data: JSON.stringify(data),
            type: "POST",
            dataType: "json",
            contentType : 'application/json',
            success: function(json) {
               	adminafficherOeuvres();
            },
            error: function( xhr, status, errorThrown) {
                alert("Erreur: POST");
            },
        });
}

function adminsupprimerOeuvre(ono) {
		$.ajax({
		    url: "v1/oeuvre/"+ono,
		    type: "DELETE",
		    dataType: "json",
		    contentType : 'application/json',
		    success: function(json) {
		       	adminafficherOeuvres();
		    },
		    error: function( xhr, status, errorThrown) {
		        alert("Erreur: DELETE");
		    },
		}); 
}

function adminmodifierOeuvre(ono) {
		     var data={
				    nom: $("#adminputOeuvreNom"+ono).val(),
				    prix: $("#adminputOeuvrePrix"+ono).val(),
				    promo: $("#adminputOeuvrePromo"+ono).val(),
				    description: $("#adminputOeuvreDescription"+ono).val(),
				    type: $("#adminputOeuvreType"+ono).val(),
				    dimension: $("#adminputOeuvreDimension"+ono).val(),
				    poids: $("#adminputOeuvrePoids"+ono).val(),
					thematique: $("#adminputOeuvreThematique"+ono).val()
		    };
            $.ajax({
		         url: "v1/oeuvre/"+ono,
		        data: JSON.stringify(data),
		        type: "PUT",
		        dataType: "json",
		        contentType : 'application/json',
                success: function(response) {
					adminafficherOeuvres();
                },
                error: function( xhr, status, errorThrown ) {
                    alert("Erreur: PUT");
                },
            });
  
}


function adminafficherForfait() {

    $("#admin-table-forfait").empty();
    
    $.ajax({
        url: "v1/forfait",
        type: "GET",
        dataType: "json",
        success: function(json) {
            console.log("Getting /forfait");
            
            var table = $("#admin-table-forfait");
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
                $("<td>").html("<input class='form-control' type='text' id='adminputForfaitFno"+fno+"' value ='"+json[i].fno+"'>" ).appendTo(tr);
				$("<td>").html("<input class='form-control' type='text' id='adminputForfaitPrix"+fno+"' value ='"+json[i].prix+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputForfaitnbOeuvres"+fno+"' value='"+json[i].nbOeuvres+"'>").appendTo(tr);
				$("<td>").html("<span id='put-oeuvre-btn' onclick='adminmodifierForfait(&apos;"+fno+"&apos;);' class='btn btn-success btn-block'>Modifier</span>").appendTo(tr);
				$("<td>").html("<span id='delete-oeuvre-btn' onclick='adminsupprimerForfait(&apos;"+fno+"&apos;);' class='btn btn-success btn-block'>Supprimer</span>").appendTo(tr);
                tr.appendTo(table);
            }
                var tr = $("<tr>");
                $("<td>").html("<input class='form-control' type='text' id='adminpostForfaitFno' value='forfait'>").appendTo(tr);
				$("<td>").html("<input class='form-control' type='text' id='adminpostForfaitPrix' value='0'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostForfaitnbOeuvres' value='0'>").appendTo(tr);
				$("<td>").html("<span id='post-oeuvre-btn' onclick='adminadd_Forfait();' class='btn btn-success btn-block'>Ajouter</span>").appendTo(tr);
                tr.appendTo(table);
        },
        error: function(xhr, status, errorThrown) {
            alert("Requête impossible: GET/forfait");
        }
    });    
    
}


function adminadd_Forfait() {
		    var data={
				fno: $("#adminpostForfaitFno").val(),
				prix: $("#adminpostForfaitPrix").val(),
		        nbOeuvres: $("#adminpostForfaitnbOeuvres").val(),
		    };
        
        $.ajax({
            url: "v1/forfait",
            data: JSON.stringify(data),
            type: "POST",
            dataType: "json",
            contentType : 'application/json',
            success: function(json) {
               adminafficherForfait();
            },
            error: function( xhr, status, errorThrown) {
                alert("Erreur: POST/forfait déjà créer");
            },
        });
}

function adminsupprimerForfait(fno) {
		$.ajax({
		    url: "v1/forfait/"+fno,
		    type: "DELETE",
		    dataType: "json",
		    contentType : 'application/json',
		    success: function(json) {
		       	adminafficherForfait();
		    },
		    error: function( xhr, status, errorThrown) {
		        alert("Erreur: DELETE");
		    },
		}); 
}

function adminmodifierForfait(fno) {
		    var data={
				login: $("#adminputCommandeLogin"+ono+login).val(),
				ono: $("#adminputCommandeOno"+ono+login).val(),
		        paiement: Boolean('$("#adminputCommandePaiement"+ono+login).val()'),
		        envoi: Boolean('$("#adminputCommandeEnvoi"+ono+login).val()'),
		        reception: Boolean('$("#adminputCommandeReception"+ono+login).val()'),
		        remuneration: Boolean('$("#adminputCommandeRemuneration"+ono+login).val()'),
		        prix: $("#adminputCommandePrix"+ono+login).val(),
		        frais: $("#adminputCommandeFrais"+ono+login).val()
		    };
            $.ajax({
		         url: "v1/commande/"+login+":"+ono,
		        data: JSON.stringify(data),
		        type: "PUT",
		        dataType: "json",
		        contentType : 'application/json',
                success: function(response) {
					adminafficherForfait();
                },
                error: function( xhr, status, errorThrown ) {
                    alert("Erreur: PUT");
                },
            });
  
}

function adminafficherCommandes() {

    $("#admin-table-commande").empty();
    
    $.ajax({
        url: "v1/commande",
        type: "GET",
        dataType: "json",
        success: function(json) {
            console.log("Getting /commande");
            
            var table = $("#admin-table-commande");
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
                $("<td>").html("<input class='form-control' type='text' id='adminputCommandeLogin"+ono+login+"' value ='"+json[i].login+"'>" ).appendTo(tr);
				$("<td>").html("<input class='form-control' type='text' id='adminputCommandeOno"+ono+login+"' value ='"+json[i].ono+"'>" ).appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputCommandePaiement"+ono+login+"' value='"+json[i].paiement+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputCommandeEnvoi"+ono+login+"' value='"+json[i].envoi+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputCommandeReception"+ono+login+"' value='"+json[i].reception+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputCommandeRemuneration"+ono+login+"' value='"+json[i].remuneration+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputCommandePrix"+ono+login+"' value='"+json[i].prix+"'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminputCommandeFrais"+ono+login+"' value='"+json[i].frais+"'>").appendTo(tr);
				$("<td>").html("<span id='put-oeuvre-btn' onclick='adminmodifierCommande(&apos;"+login+"&apos;:"+ono+");' class='btn btn-success btn-block'>Modifier</span>").appendTo(tr);
				$("<td>").html("<span id='delete-oeuvre-btn' onclick='adminsupprimerCommande("+ono+");' class='btn btn-success btn-block'>Supprimer</span>").appendTo(tr);
                tr.appendTo(table);
            }
                var tr = $("<tr>");
                $("<td>").html("<input class='form-control' type='text' id='adminpostCommandeLogin' value='client'>").appendTo(tr);
				$("<td>").html("<input class='form-control' type='text' id='adminpostCommandeOno' value='id oeuvre'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostCommandePaiement' value='false'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostCommandeEnvoi' value='false'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostCommandeReception' value='false'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostCommandeRemuneration' value='false'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostCommandePrix' value='0'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostCommandeFrais' value='0'>").appendTo(tr);
				$("<td>").html("<span id='post-oeuvre-btn' onclick='adminadd_Commande();' class='btn btn-success btn-block'>Ajouter</span>").appendTo(tr);
                tr.appendTo(table);
        },
        error: function(xhr, status, errorThrown) {
            alert("Requête impossible: GET/commande");
        }
    });    
    
}


function adminadd_Commande() {
		    var data={
				login: $("#adminpostCommandeLogin").val(),
				ono: $("#adminpostCommandeOno").val(),
		        paiement: $("#adminpostCommandePaiement").val(),
		        envoi: $("#adminpostCommandeEnvoi").val(),
		        reception: $("#adminpostCommandeReception").val(),
		        remuneration: $("#adminpostCommandeRemuneration").val(),
		        prix: $("#adminpostCommandePrix").val(),
		        frais: $("#adminpostCommandeFrais").val()
		    };
        
        $.ajax({
            url: "v1/commande",
            data: JSON.stringify(data),
            type: "POST",
            dataType: "json",
            contentType : 'application/json',
            success: function(json) {
               	adminafficherCommandes();
            },
            error: function( xhr, status, errorThrown) {
                alert("Erreur: POST/Oeuvre déjà acheté");
            },
        });
}

function adminsupprimerCommande(ono) {
		$.ajax({
		    url: "v1/commande/"+ono,
		    type: "DELETE",
		    dataType: "json",
		    contentType : 'application/json',
		    success: function(json) {
		       	adminafficherCommandes();
		    },
		    error: function( xhr, status, errorThrown) {
		        alert("Erreur: DELETE");
		    },
		}); 
}

function adminmodifierCommande(login,ono) {
		    var data={
				login: $("#adminpostCommandeLogin+ono+login").val(),
				ono: $("#adminpostCommandeOno"+ono+login).val(),
		        paiement: Boolean('$("#adminpostCommandePaiement"+ono+login).val()'),
		        envoi: Boolean('$("#adminpostCommandeEnvoi"+ono+login).val()'),
		        reception: Boolean('$("#adminpostCommandeReception"+ono+login).val()'),
		        remuneration: Boolean('$("#adminpostCommandeRemuneration"+ono+login).val()'),
		        prix: $("#adminpostCommandePrix"+ono+login).val(),
		        frais: $("#adminpostCommandeFrais"+ono+login).val()
		    };
            $.ajax({
		        url: "v1/commande/"+login+":"+ono,
		        data: JSON.stringify(data),
		        type: "PUT",
		        dataType: "json",
		        contentType : 'application/json',
                success: function(response) {
					adminafficherOeuvres();
                },
                error: function( xhr, status, errorThrown ) {
                    alert("Erreur: PUT");
                },
            });
  
}

function adminafficherCommandeTerminee() {

    $("#admin-table-facture").empty();
    
    $.ajax({
        url: "v1/facture",
        type: "GET",
        dataType: "json",
        success: function(json) {
            console.log("Getting /facture");
            var table = $("#admin-table-facture");
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
				$("<td>").html("<span id='delete-oeuvre-btn' onclick='adminsupprimerCommandeTerminee("+ono+",&apos;"+login+"&apos;);' class='btn btn-success btn-block'>Supprimer</span>").appendTo(tr);
                tr.appendTo(table);
            }
                var tr = $("<tr>");
                $("<td>").html("<input class='form-control' type='text' id='adminpostCommandeTermineeLogin' value='login'>").appendTo(tr);
				$("<td>").html("<input class='form-control' type='text' id='adminpostCommandeTermineeOno' value='id oeuvre'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostCommandeTermineePrix' value='prix'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostCommandeTermineeFrais' value='frais'>").appendTo(tr);
                $("<td>").html("<input class='form-control' type='text' id='adminpostCommandeTermineeadresseLivraison' value='adresse'>").appendTo(tr);
				$("<td>").html("<span id='post-oeuvre-btn' onclick='adminadd_CommandeTerminee();' class='btn btn-success btn-block'>Ajouter</span>").appendTo(tr);
                tr.appendTo(table);
        },
        error: function(xhr, status, errorThrown) {
            alert("Requête impossible: GET/facture");
        }
    });    
    
}


function adminadd_CommandeTerminee() {
		    var data={
				login: $("#adminpostCommandeTermineeLogin").val(),
				ono: $("#adminpostCommandeTermineeOno").val(),
		        prix: $("#adminpostCommandeTermineePrix").val(),
		        frais: $("#adminpostCommandeTermineeFrais").val(),
		        adresseLivraison: $("#adminpostCommandeTermineeadresseLivraison").val(),
		    };
        
        $.ajax({
            url: "v1/facture",
            data: JSON.stringify(data),
            type: "POST",
            dataType: "json",
            contentType : 'application/json',
            success: function(json) {
               	adminafficherCommandeTerminee();
            },
            error: function( xhr, status, errorThrown) {
                alert("Erreur: POST");
            },
        });
}

function adminsupprimerCommandeTerminee(ono,login) {
		$.ajax({
		    url: "v1/facture/"+ono+":"+login,
		    type: "DELETE",
		    dataType: "json",
		    contentType : 'application/json',
		    success: function(json) {
		       	adminafficherCommandeTerminee();
		    },
		    error: function( xhr, status, errorThrown) {
		        alert("Erreur: DELETE");
		    },
		}); 
}


$(document).ready(function() {

    adminafficherUtilisateur();
    adminafficherOeuvres();
	adminafficherForfait();
	adminafficherCommandes();
	adminafficherCommandeTerminee();
	adminafficherSouhait();
});
