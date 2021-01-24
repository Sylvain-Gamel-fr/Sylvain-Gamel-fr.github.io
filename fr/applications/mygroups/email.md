---
layout: page_app
title: mes Groupes
slogan: Gérez vos groupes de contacts directement sur iOS.
categories: apps
family: iOS
lang: "fr"
order: -1
id: mygroups
header_banner: my-groups-banner.jpg
sideNote: >
    Créez des groupes de contacts.

    L'application est disponible dans l'AppStore.
    C'est une application compatible 
    à la fois pour iPhone, iPod touch et iPad.

---

<html>&hookleftarrow;&nbsp;<a href="./">Page de l'app</a></html>

## Envoyer un email à un groupe

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


### Supervisez la liste de destinataires

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


### Ciblez les addresses

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


