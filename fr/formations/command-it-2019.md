---
layout: page
title: Conférence Command-iT 2019
lang: "fr"
permalink: /fr/formations/command-it-2019.html
logo: 
    url: "/images/icons-categories/post-presentation.svg"
    label: Présentation
attachments:
    - name: Command-IT 2019 Atelier préparations.pdf (460Ko)
      url: https://s3.eu-central-1.amazonaws.com/assets.sgintech.fr/command-it/Command-IT+2019+Atelier+préparations.pdf
      description: Guide de mise en place pour l'atelier.
    - name: Ateliers-materiel-de-bienvenue.tgz (354,4Mo)
      url: https://s3.eu-central-1.amazonaws.com/assets.sgintech.fr/command-it/Ateliers-materiel-de-bienvenue.tgz
      description: Le kit de démarrage pour l'atelier. 
        Contient l'action personnalisée ainsi que le source du serveur
        et une image Docker pour l'exécuter.
    - name: Ateliers-materiel-de-bienvenue-no-docker.tgz (3,2Mo)
      url: https://s3.eu-central-1.amazonaws.com/assets.sgintech.fr/command-it/Ateliers-materiel-de-bienvenue-no-docker.tgz
      description: Le kit <em>sans l'image Docker</em> pour un téléchargement plus léger.
---

J’ai le plaisir de participer à la conférence [Command iT 2019][cit] pour 
y réaliser une présentation sur l’automatisation sur les plateformes Apple.

Vous retrouverez sur cette page le contenu de la présentation ainsi que
le matériel des ateliers.

> Retrouvez plus d'information sur _Automator_ en visitant le site
> dédié [Automatisez.net](https://Automatisez.net)


### Présentation

Cette présentation est un voyage dans l’histoire des solutions 
d’automatisation depuis le Macintosh original jusqu’aux terminaux 
les plus modernes produits par Apple.

Le succès du Macintosh a été construit en partie sur sa capacité à
le piloter par des scripts. 
Nous verrons comment Apple a conduit l’évolution de ces outils si 
chers aux pros et aux utilisateurs avancés.

Si aujourd’hui les années semblent peser de tout leur poids sur les 
épaules d’AppleScript, si Automator ressemble à un enfant mal aimé, 
oublié dans un pensionnat, nous essayerons de répondre ensemble à cette 
question cruciale : _l’optimisme est-il d’actualité ?_

La WWDC 2019 lèvera-t-elle enfin le voile sur un renouveau 
et une homogénéisation de l’automatisation entre macOS et iOS ?

_Plus de détails à venir_

### Ateliers

Pendant l’atelier « automatisation », vous allez redécouvrir Automator 
et aborderez Raccourcis. 
Pour cette mise en pratique, vous vous appuierez sur les principales 
fonctionnalités des outils Apple.

Rien de tel qu’écrire un module d’impression pour se faire la main avec Automator. 
Nous verrons comment utiliser les actions de bases, mais aussi un peu de 
scripts et l’utilisation des variables.

Dans la seconde partie de cette session, vous allez appeler une API 
pour créer un système, simple, de création de tickets de support. 
Vous approfondirez votre connaissance des variables, et pour faciliter la 
saisie d’informations, nous utiliserons une action personnalisée.

Enfin, nous conclurons en quittant macOS et Automator pour découvrir 
rapidement Raccourcis sur iOS. 
Vous allez créer un processus capable d’interroger notre serveur de 
tickets avec son API REST.

#### Matériel préparatoire

Le matériel préparatoire est disponible au téléchargement dans la barre latérale
de droite dans deux versions :

1. avec l’image Docker
2. sans l’image Docker du serveur

Vous pouvez commencer par le guide d’introduction pour avoir une idée des
dépendances requises.

Gagnez du temps avant le début de l’atelier en préparant votre serveur : 
soit directement en utilisant NodeJS, soit avec un conteneur Docker.

N’hésitez pas à me contacter si vous avez des questions.

### Ateliers

1. [Introduction à Automator](#wk1)
2. [API REST avec Automator](#wk2)
3. [API REST sur Raccourcis pour iOS](#wk3)

<div id="wk1"></div>

#### Introduction à Automator


Ce premier exemple est une introduction à Automator pour voir comment :

- construire un module d'impression ;
- utiliser des variables
- utiliser un Script _Python_ et des API Cocoa native pour chiffrer un PDF
- comment s'appuyer sur le shell pour définir la valeur d'une variable

Les instructions sont disponibles dans [ce document][workshop1].


<div id="wk2"></div>

#### API REST avec Automator

Ce second exemple montre comment Automator peut non seulement contrôler des
logiciels sur votre Mac, mais aussi des serveurs en utilisant des API REST.

Dans ce second exemple il est nécessaire d'avoir deux éléments supplémentaires :

1. Une action personnalisée Automator pour fournir un formulaire
   qui permet de renseigner les informations de base d'un ticket de support.
2. Un serveur avec une API REST. 
   Le kit de démarrage propose un serveur simpliste construit avec Swagger et
   fonctionnant en NodeJS. 

L'API du serveur a besoin d'une clé d'API pour l'authentification.
Cette clé n'est pas transmise comme donnée des requêtes à l'API, mais plus comme
donnée d'en-tête de celle-ci.

Les instructions sont disponibles dans [ce document][workshop2].

<div id="wk3"></div>

#### API REST sur Raccourcis pour iOS

Les instructions sont disponibles dans [ce document][workshop3].


[cit]: https://Command-iT.fr/

[workshop1]: https://s3.eu-central-1.amazonaws.com/assets.sgintech.fr/command-it/presentations/Command-IT+2019+Atelier+01-intro-automator.pdf
[workshop2]: https://s3.eu-central-1.amazonaws.com/assets.sgintech.fr/command-it/presentations/Command-IT+2019+Atelier+02-creer-ticket.pdf
[workshop3]: https://s3.eu-central-1.amazonaws.com/assets.sgintech.fr/command-it/presentations/Command-IT+2019+Atelier+03-voir-tickets.pdf

[final1]: https://s3.eu-central-1.amazonaws.com/assets.sgintech.fr/command-it/correctifs/01-service-impression.zip
[final2]: https://s3.eu-central-1.amazonaws.com/assets.sgintech.fr/command-it/correctifs/02-automator-ticket-support.zip
[final3]: https://s3.eu-central-1.amazonaws.com/assets.sgintech.fr/command-it/correctifs/03-raccourcis-liste-tickets.zip
