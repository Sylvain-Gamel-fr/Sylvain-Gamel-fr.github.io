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

Sommaire:

- [Présentation](#presentation)
- [Ateliers](#workshops)
    - [Kit de bienvenue](#welcome)
    - [Les ateliers](#go)

> N'oubliez pas de visiter [Automatisez.net](https://Automatisez.net)
> pour continuer l'aventure. 
> N'hésitez pas à me proposez votre propres scripts et processus!

Merci à tous les participants et à l'organisation pour cette super conférence.

<div id="presentation"></div>

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

_Replay à venir_

<div id="workshops"></div>

### Ateliers

Pendant l’atelier « automatisation », vous allez redécouvrir Automator 
et aborderez Raccourcis. 

Pour cette mise en pratique, vous vous appuierez sur les principales 
fonctionnalités des outils Apple.

Rien de tel qu’écrire un module d’impression pour se faire la main 
avec Automator. 
Nous verrons comment utiliser les actions de bases, mais aussi 
comment intégrer des scripts pour certains traitements plus pointus.
Enfin vous saurez utiliser des variables Automator.

Dans la seconde partie de cette session, vous allez appeler une API 
pour créer un système, simple, de création de tickets de support. 
Vous approfondirez votre connaissance des variables, et pour faciliter la 
saisie d’informations, nous utiliserons une action personnalisée.

Enfin, nous conclurons en quittant macOS et Automator pour découvrir 
rapidement Raccourcis sur iOS. 
Vous allez créer un processus capable d’interroger notre serveur de 
tickets avec son API REST.

<div id="welcome"></div>

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

<div id="go"></div>

### Ateliers

1. [Introduction à Automator](#wk1)
2. [API REST avec Automator](#wk2)
3. [API REST sur Raccourcis pour iOS](#wk3)

<div id="wk1"></div>

#### Introduction à Automator


Ce premier exemple propose une introduction à Automator pour voir comment :

- construire un module d’impression ;
- utiliser des variables ;
- utiliser un Script _Python_ et des API Cocoa natives pour chiffrer un PDF ;
- comment s’appuyer sur le shell pour définir la valeur d’une variable ;
- enfin, comment cette dernière fonction permet de sécuriser le processus pour qu’il n’intègre plus de données sensibles. 

Les instructions sont disponibles dans [ce document] [workshop1].

Les différentes étapes de constructions, ainsi que le raccourci final sont
disponibles dans l'archive suivante:

> **[Solutions Atelier 1][final1]**


<div id="wk2"></div>

#### API REST avec Automator

Ce second exemple montre comment Automator peut non seulement contrôler des
logiciels sur votre Mac, mais aussi des serveurs en utilisant des API REST.

Dans ce second exemple, il est nécessaire d’avoir deux éléments supplémentaires :

1. Une action personnalisée Automator pour fournir un formulaire
   qui permet de renseigner les informations de base d’un ticket de support.
2. Un serveur avec une API REST. 
   Le kit de démarrage propose un serveur simpliste construit avec Swagger et
   fonctionnant en NodeJS. 

Les instructions sont disponibles dans [ce document] [workshop2].

Les différentes étapes de constructions, ainsi que le raccourci final sont
disponibles dans l'archive suivante:

> **[Solutions Atelier 2][final2]**

##### Action Automator 

L’action Automator a été développée par mes soins. 
Le code source est fourni dans kit de l’atelier. Un billet de blog (à venir) détaillera comment vous pouvez créer vos propres actions. 
Promis : _ce n’est absolument pas compliqué_. 

Installez cette action simplement d’un double clic. 
Après un dialogue pour confirmer cette installation, l’action sera _deplacée_ dans le dossier « Bibliothèques/Automator » de votre dossier personnel. 

##### Serveur de test

L’API du serveur a besoin d’une clé d’API pour l’authentification.
Cette clé n’est pas transmise comme donnée des requêtes à l’API, mais plus comme
donnée d’en-tête de celle-ci.

La méthode d’authentification va évidemment dépendre du service que vous ciblez.


<div id="wk3"></div>

#### API REST sur Raccourcis pour iOS

Avec ce dernier exemple, vous quitterez le Mac pour passer sur iOS et explorer Raccourcis (l’application). 

Nous allons construire un raccourci (processus) qui va se connecter sur notre serveur de test. 

Pour ce test, vous devrez évidemment :
- avoir le serveur de test fonctionnel sur votre Mac ;
- disposez de l’adresse IP ou du nom de votre Mac pour y accéder à partir de l’iPad ;
- avoir votre iPad sur le même réseau que le Mac. 

Dans le raccourci d’exemple, nous allons mettre en application les concepts suivants :

- Vous allez utiliser des variables magiques. 
  Elles vous évitent d’ajouter des actions pour définir des variables 
  à partir d’un résultat d’action. 
  Raccourcis fait ça pour vous. 
- Vous allez construire une URL pour cibler une API spécifique de votre serveur. 
  Cette URL sera construite en combinant du texte et la valeur d’une variable. 
- Vous devrez extraire des informations à partir de la réponse du serveur. 
- Vous devrez manipuler des dictionnaires de valeurs 
  (table associant une clé à une valeur)
- Vous construirez un menu pour que l’utilisateur puisse sélectionner un 
  ticket de support et consulter les détails du ticket. 

Les instructions détailées sont disponibles dans [ce document][workshop3].

Les différentes étapes de constructions, ainsi que le raccourci final sont
disponibles dans l'archive suivante:

> **[Solutions Atelier 3][final3]**


[cit]: https://Command-iT.fr/

[workshop1]: https://s3.eu-central-1.amazonaws.com/assets.sgintech.fr/command-it/presentations/Command-IT+2019+Atelier+01-intro-automator.pdf
[workshop2]: https://s3.eu-central-1.amazonaws.com/assets.sgintech.fr/command-it/presentations/Command-IT+2019+Atelier+02-creer-ticket.pdf
[workshop3]: https://s3.eu-central-1.amazonaws.com/assets.sgintech.fr/command-it/presentations/Command-IT+2019+Atelier+03-voir-tickets.pdf

[final1]: https://s3.eu-central-1.amazonaws.com/assets.sgintech.fr/command-it/correctifs/01-service-impression.zip
[final2]: https://s3.eu-central-1.amazonaws.com/assets.sgintech.fr/command-it/correctifs/02-automator-ticket-support.zip
[final3]: https://s3.eu-central-1.amazonaws.com/assets.sgintech.fr/command-it/correctifs/03-raccourcis-liste-tickets.zip
