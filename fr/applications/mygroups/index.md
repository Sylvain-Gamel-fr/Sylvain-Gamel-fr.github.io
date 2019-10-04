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

    <html>
    <img src="/images/icons-categories/post-book.svg" alt="Livre" style="width: 70%; display: block; margin: 2rem auto 1rem;"/>
    </html>

    Découvrez comment tirer le meilleur de l'application
    _Contacts_ avec [le livre « Tout savoir sur Contacts »](https://formationsapple.fr/2019/08/14/livre-tout-savoir-sur-contacts/)
    d'Audrey Couleau.

---

Cette application simple et efficace vous permet d'organiser
votre carnet d'adresse en groupes de contacts.

Ce qui est possible sur Mac avec l'application _Contacts_ 
devient enfin possible sur votre iPhone et votre iPad.

L'application _mes Groupes_ comble enfin cette lacune en proposant les 
fonctionnalités indispensables :

- créer, renommer et supprimer des groupes de contacts ;
- exporter les [vCards](https://fr.wikipedia.org/wiki/VCard) des membres
  d'un groupe ;
- fusionner plusieurs groupes en un seul.


> Un outil simple et respecteux de votre vie privée

Un grand merci à Audrey Couleau qui a réalisé cette excellente vidéo de
présentation. 
N'hésitez pas à vous abonnez à sa chaine YouTube, vous y apprendrez 
plein d'astuces.

{% include widgets/youtube.html videoId="PIG5CUfPwKc" fill=true %}


### Gérez vos groupes

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


### Des Fonctions Premium

<html>
<img src="/images/apps/mygroups/message-locked.svg" 
     alt="Fonctions payantes"
     style="width: 7rem; margin: 1rem auto; display: block;">
</html>

La fusion de groupe et l'exportation sont des fonctions 
premium qui peuvent être débloquées par un achat intégré.

<img src="/images/apps/mygroups/free-trial.svg" 
     alt="Essai gratuit"
     style="float: left; width: 30px; margin-right: 2rem;">
Vous pouvez tester librement ces fonctions pour une durée limitée
en activant l'essai gratuit.

> L'achat de 0€ pour l'offre d'essai **n'est pas** un abonnement.
> Il ne sert qu'à débloquer *temporairement* les fonctionnalités premium.

Si ces fonctions ne vous sont pas utiles, elles seront désactivée à la fin 
de la période d'essai.

Passé ce délai, l'application restera fonctionnelle et vous pouvez continuer 
à l'utiliser gratuitement, à l'exception de ces quelques fonctions plus avancées.

_Si vous avez trouvé cette application utile, j'espère que vous verrez cet achat
comme un moyen de soutenir mon travail et ses futures évolutions._

### Plusieurs Carnets

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
  pas utilisables car les groupes ne sont pas supportés.

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

