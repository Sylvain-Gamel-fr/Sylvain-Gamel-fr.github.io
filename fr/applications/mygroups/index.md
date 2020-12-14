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

> <span class="badge badge-pill badge-success">iOS 14</span><br/>
> L'application _Mes Groupes_ est parfaitement compatible avec les dernières version
> du logiciel de vos iPhones et iPads.
>
> <span class="badge badge-pill badge-warning">Mail et groupes</span><br/>
> Apple a introduit un bug dans l'application _Mail_ et l'envoi  
> d'un message à un groupe n'était plus fonctionnel.
>
> _Ce bug est corrigé dans iOS 14.3 (disponible depuis le 14 décembre 2020)_.
>
> Vous pouvez toujours utiliser [la fonction email](#mailing) de _Mes Groupes_
> qui offre un contrôle plus fin des emails destinataires.

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
- envoyer un mail à un groupe d'utilisateurs (**nouveauté v1.1**).


> Un outil simple et respectueux de votre vie privée

Un grand merci à Audrey Couleau qui a réalisé cette excellente vidéo de
présentation. 
N'hésitez pas à vous abonnez à sa chaine YouTube, vous y apprendrez 
plein d'astuces.

{% include widgets/youtube.html videoId="PIG5CUfPwKc" fill=true %}

-----

**Sommaire**

- [Gérer vos contacts](#manage)
- [Email à un groupe](#mailing)
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

> <span class="badge badge-pill badge-primary">Nouveau</span> 
> dans la version 1.1 de _Mes Groupes_.
>
> Une fonction premium que vous pouvez tester avec l'offre d'essai
> sans engagement.

L'application _Mail_ permet déjà d'écrire aux membres d'un groupe,
mais «_Mes Groupes_» vous permet d'aller plus loin :

- _identifiez_ les contacts sans adresse email;
- _ciblez_ des types d'adresses en priorité ;
- _éliminez_ les adresses qui ne doivent pas recevoir le message.

Vous avez le contrôle de qui doit recevoir votre message sans
pour autant vous perdre dans de la gestion au cas par cas.

Le ciblage est très simple et n'utilise que deux critères:

1. les adresses email qui doivent recevoir le message ;
2. et celles qui ne doivent pas recevoir le message.

{% capture mailingDescription %}

La première section donne des informations sur les destinaires,
les membres sans email et ceux qui sont exclus par les critères
de filtrage.

La seconde section vous permet de construire ces critères de filtrage.

{% endcapture %}
{% capture mailingScreenshot %}
Sélection des destinataires
{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang 
        appId=page.id 
        src="mailing-iphone.png" imgAlt=directoryScreenshot
        description=mailingDescription %}


#### Supervisez la liste de destinataires

L'écran principal vous donne trois listes:

1. les destinaires: les membre du groupe qui recevront le message ;
2. les contacts sans adresse email ;
3. les contacts exclus de la distribution.

{% capture videoNoEmailDescription %}
Si un contact n'a pas d'adresse, 
vous pouvez directement consulter sa fiche,
la modifier et ajouter l'information.

Le tout sans aller-retour dans l'application, ni avec _Contacts_.
{% endcapture %}
{% capture videoNavigateurEmailAlt %}
Votre navigateur ne gère pas les vidéos.
{% endcapture %}
{% include widgets/app-video.html 
        lang=lang 
        appId=page.id 
        src="mesGroupes_noEmail.mp4" 
        loop=true
        noVideoText=videoNavigateurEmailAlt
        description=videoNoEmailDescription %}

Si un contact reste exclu de la liste de distribution,
c'est soit qu'il n'a pas d'adresse, soit que les 
critères l'éliminent.


#### Ciblez les addresses

Comment sélectionner les adresses qui vont recevoir votre message ?

{% capture videoFilterDescription %}
Il vous suffit de définir deux critères :

1. la liste des labels d'adresses qui doivent recevoir le message ;
2. les labels qui ne doivent pas recevoir le message.
{% endcapture %}
{% capture videoNavigateurFilterAlt %}
Votre navigateur ne gère pas les vidéos.
{% endcapture %}
{% include widgets/app-video.html 
        lang=lang 
        appId=page.id 
        src="mesGroupes_filter.mp4" 
        loop=true
        noVideoText=videoNavigateurFilterAlt
        description=videoFilterDescription %}

Sur cette base, le message sera envoyé à toutes les adresses
des contacts du groupe :

- qui ont un label "prioritaire" ;
- qui n'ont pas un label marqué comme "exclu".

Le message ne sera jamais envoyé à une adresse avec un label 
indiqué comme "exclu".

Notez qu'il est possible d'envoyer le mail en double à un contact.

Si les adresses avec le label "personnelle" sont prioritaires, 
et qu'un contact a deux adresses, l'une avec ce label
et l'autre avec "club de foot": 
le message sera envoyé à ces deux adresses.


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

