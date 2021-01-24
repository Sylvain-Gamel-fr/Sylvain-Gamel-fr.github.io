---
layout: page_app
title: mes Groupes
slogan: Gérez vos groupes de contacts directement sur iOS.
categories: apps
family: iOS
lang: "fr"
order: 1
id: mygroups
header_banner: my-groups-banner.jpg
sideNote: >
    Créez des groupes de contacts.

    L'application est disponible dans l'AppStore.
    C'est une application compatible 
    à la fois pour iPhone, iPod touch et iPad.

    <hr>

    <h3 class="h4">Compléments</h3>

    [Vos groupes et iOS14](ios14.html)
    
    
    [Envoyer des SMS à un groupe](envoyer-des-sms-a-un-groupe.html)
    avec un raccourcis et la fonction de partage.

    <hr>

    <html>
    <img src="/images/icons-categories/post-book.svg" alt="Livre" style="width: 70%; display: block; margin: 2rem auto 1rem;"/>
    </html>

    <hr>

    Découvrez comment tirer le meilleur de l'application
    _Contacts_ avec [le livre « Tout savoir sur Contacts »](https://formationsapple.fr/2019/08/14/livre-tout-savoir-sur-contacts/)
    d'Audrey Couleau.

---


Cette application simple et efficace vous permet d'organiser
votre carnet d'adresses en groupes de contacts.

Ce qui est possible sur Mac avec l'application _Contacts_ 
devient enfin accessible sur votre iPhone et votre iPad.

L'application _mes Groupes_ comble cette lacune en proposant les 
fonctionnalités indispensables :

- créer, renommer et supprimer des groupes de contacts ;
- exporter les [vCards](https://fr.wikipedia.org/wiki/VCard) des membres
  d'un groupe ;
- fusionner plusieurs groupes en un seul ;
- envoyer e-mail ou SMS à un groupe d'utilisateurs


> Un outil simple et respectueux de votre vie privée

Un grand merci à Audrey Couleau qui a réalisé cette excellente vidéo de
présentation. 
N'hésitez pas à vous abonnez à sa chaine YouTube, vous y apprendrez 
plein d'astuces.

{% include widgets/youtube.html videoId="PIG5CUfPwKc" fill=true %}

-----

**Contenu**

- [Gérer vos contacts](#manage)
- [Email à un groupe](#mailing)
- [SMS à un groupe](#sms)
- [Les fonctions Premium](#premium)
- [Plusieurs Carnets d'Adresses ?](#addr-books)



<h3 id="manage">Gérez vos groupes</h3>

{% capture groupesDescription %}

L'écran principal de l'application présente immédiatement votre liste de groupes.

C'est le point de départ à partir duquel vous pouvez créer des groupes, 
en supprimer ou les renommer.

- Glissez de gauche à droite sur un groupe pour changer son nom;
- Glissez de droite à gauche sur un groupe pour le supprimer.

En basculant en mode édition il devient possible de sélectionner plusieurs
groupes pour les supprimer, les exporter ou les fusionner dans un nouveau 
groupe.

Ici l'affichage utilise le thème clair.

{% endcapture %}
{% capture groupesScreenshot %}
L'écran principal, la liste des groupes.
{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang 
        appId=page.id 
        src="groups-iphone.png" imgAlt=groupesScreenshot
        description=groupesDescription %}


<h3 id="mailing">Envoyer un email à un groupe</h3>

L'application _Mail_ permet déjà d'écrire aux membres d'un groupe,
mais «_Mes Groupes_» vous permet d'aller plus loin :

- _identifiez_ les contacts sans adresse email;
- _ciblez_ des types d'adresses en priorité ;
- _éliminez_ les adresses qui ne doivent pas recevoir le message.

Plus de détails [sur la page dédiée](email.html).

<h3 id="sms">Envoyer un SMS à un groupe</h3>

«_Mes Groupes_» vous permet d'envoyer facilement un SMS à tous les contacts d'un
groupe.

- _identifiez_ les contacts sans téléphone portable;
- _ciblez_ ou _excluez_ certains types de numéros;
- _préparez_ votre message dans un éditeur plus grand.


<h3 id="premium">Des Fonctions Premium</h3>

<html>
<img src="/images/apps/mygroups/message-locked.svg" 
     alt="Fonctions payantes"
     style="width: 7rem; margin: 1rem auto; display: block;">
</html>

La fusion de groupes, l'exportation et les emails à un groupe sont des fonctions 
premium qui peuvent être débloquées par un achat intégré.

> Un achat unique, **aucun abonnement**, débloque définitivement
> ces fonctions _premium_.

<img src="/images/apps/mygroups/free-trial.svg" 
     alt="Essai gratuit"
     style="float: left; width: 30px; margin-right: 2rem;">
Vous pouvez tester librement ces fonctions pour une durée limitée
en activant l'essai gratuit.

> L'achat de 0€ pour l'offre d'essai **n'est pas** un abonnement.
> Il ne sert qu'à débloquer *temporairement* ces fonctionnalités 
> pour les essayer.

Si ces fonctions ne vous sont pas utiles, elles seront simplement désactivées 
à la fin de la période d'essai.

L'application restera fonctionnelle et vous pouvez continuer 
à l'utiliser gratuitement, à l'exception de ces quelques fonctions plus avancées.

_Si vous avez apprécié cette application, j'espère que vous verrez cet achat
comme un moyen de soutenir mon travail et ses futures évolutions._



<h3 id="addr-books">Plusieurs Carnets ?</h3>

<html>
<img src="/images/apps/mygroups/address-book-picker.svg" 
     alt="Sélection de compte"
     style="width: 5rem; margin: 1rem auto; display: block;">
</html>

Que vos contacts soient sur votre téléphone, dans iCloud ou
dans Gmail (cardDAV), cet outil vous permet de gérer vos différents
carnets d'adresse aussi facilement qu'avec un Mac.

{% capture directoryDescription %}

L'écran de sélection du carnet vous permet de choisir entre vos différents
comptes.

- les comptes cardDAV (iCloud, Gmail) peuvent être utilisés pour
  créer des groupes ;
- les dossiers de contacts sur les comptes Exchange 
  (Outlook, Office 365, G Suite) sont affichés mais ne sont
  pas utilisables car les groupes ne sont pas supportés par ces services.

Vos groupes seront gérés sur le compte choisi.

Par défaut c'est toujours votre compte configuré comme compte par défaut qui
sera utilisé.

Ici l'affichage est en mode sombre.

{% endcapture %}
{% capture directoryScreenshot %}
Sélectionnez le compte pourlequel gérer les groupes
{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang 
        appId=page.id 
        src="directories-iphone.png" imgAlt=directoryScreenshot
        description=directoryDescription %}

