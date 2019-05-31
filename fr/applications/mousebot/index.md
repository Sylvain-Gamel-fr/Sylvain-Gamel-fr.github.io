---
layout: page_app
title: MouseBot
slogan: Automatisez votre pointeur !
categories: apps
family: macOS
lang: "fr"
order: 2
id: mousebot
header_banner: banner_mouseBot-16-9.jpg
sideNote:
    Une action Automator pour automatisez vos clics de souris.
attachments:
    - name: MouseBot_1.0.0.pkg (5,5Mo)
      url: https://s3.eu-central-1.amazonaws.com/assets.sgintech.fr/automatisez.net/apps/MouseBot_1.0.0.pkg
      description: Téléchargez le paquet d'installation gratuitement

---

Cet utilitaire intègre une action [Automator](https://www.Automatisez.net)
avec laquelle vous pouvez simuler des clics de souris.

Cette courte vidéo vous montre comment utiliser une commande vocale
pour faire un _clic droit_ simplement en commandant votre ordinateur
à la voix.

Avec cette action Automator, vous disposez d'un moyen simple pour construire :

- un service qui remplace un clic par un raccourcis clavier ;
- une commande vocale pour cliquez sans utiliser les mains.

> Automator, c'est _aussi_ un autre moyen pour améliorez l'accessibilité de votre Mac

## Installation

Le paquet d'installation de cette application peut être téléchargé 
gratuitement.

> **Important**
>
> Avec macOS Mojave, vous devez _explicitement autorisez_ les actions
> d'éditeurs tiers.

Si vous ne le faites pas les actions ne pourrons pas être insérées dans
Automator.

{% assign download=page.attachments[0] %}
{% include widgets/download_button.html 
    name=download.name 
    url=download.url 
    tip=download.description %}

Une petite aide accessible via la fenêtre de l'application vous
explique les principaux problèmes de configuration que vous pourriez
rencontrer.

N'hésitez pas à me contacter si vous en rencontrez de nouveaux.


## Commande vocale

Créez très facile une commande vocale pour pouvoir
piloter vos clics avec la voix.

1. ouvrez Automator ;
2. créez un nouveau processus de type « _commande vocale_ » ;`
3. ajoutez l'action « _clic souris_ » ;
4. sélectionnez l'option « _droit_ » pour le bouton et ne cochez
   que l'option « _presser le bouton_ »

Enregistrez cette commande et associez lui une phrase clé à prononcer pour
qu'elle se déclenche.

La première fois il l'action vous demandera à l'autoriser à contrôler 
l'interface. 
Suivez le processus tel qu'il est décrit dans la vidéo en haut de page.

-----

{% capture credits_note %}
**Crédits&nbsp;:**
Merci à Stéphane Sudre pour son excellent logiciel 
[Packages](http://s.sudre.free.fr/Software/Packages/about.html)
et à [Guillaume Gete](https://gete.net)
pour ma l'avoir fait découvrir.

{% endcapture %}
{% include widgets/small-note.html content=credits_note %}
