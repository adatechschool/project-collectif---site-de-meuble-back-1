# Journal du projet

<b>DAY 1 - 02 NOV</b>

Création de l'équipe BACK : 5 personnes

Après concertation, décisions :
- d'utiliser JS, plutôt que Python où ne sommes pas encore très à l'aise,
- d'utiliser EXPRESS, qui semble plus accessible (visualiation d'exemples) et qui est bien documenté sur Internet

Création du diagramme modèle de la base de donnée, validé par l'équipe FRONT

Installation de l'environnement EXPRESS

Test de connexion avec une base de données stockée en local

<b>DAY 2 - 03 NOV</b>

* Possibilité d'héberger la base de données sur un serveur - tests et ressources par 2 personnes

* Ressources sur Express par 2 personnes

* Ressources sur GitHub pour ajouter un gitignore alors que le repo est déjà créé + création nouvelle branche "dev", qui a été ensuite supprimée puisque codage en mob

* Alors que la BDD est bien accessible, remplissage avec quelques données // photos également hébergées en cloud

<b>DAY 3 - 04 NOV</b>

* Mise en place d'une architecture de requêtes : 
<br> -> doc server.js qui regroupe les routes
<br> -> doc produit.js qui regroupe les requêtes liées aux produits

<b>DAY 4 - 05 NOV</b>

* Modification dans le système d'architecture :
<br> -> nouveau js : database.js qui permet de définir le chemin vers la db, et de regrouper les requêtes sous formes de méthodes de class (évite de multiplier les connexions à la db)
<br> -> produit.js rappelle les méthodes liées aux produits
<br> -> identification.js devrait rappeller les méthodes liées à l'enregistrement et à l'identification, sur les mêmes bases que produit.js, mais n'a pas été finalisée
