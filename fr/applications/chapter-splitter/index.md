---
layout: page_app
title: Chapter Splitter
slogan: Votre découpeuse de film. Un chapitre, une vidéo.
categories: apps
family: macOS
lang: "fr"
order: 1
id: chapter-splitter
permalink: fr/applications/chapter-splitter/
header_banner: banner_chapter-splitter.jpg
sideNote:
        <p>
        Découpez simplement vos vidéos en utilisant les
        chapitres.
        </p>
        <p>
        Une application facile à utiliser et 
        conçue pour automatisez vos flux de traitement.
        </p>
        <p>
        Disponible dans le Mac AppStore, l'application
        est compatible avec macOS depuis la version 10.12
        Sierra.
        </p>
        <p>
        Vous voulez en apprendre plus sur Automator&nbsp;?
        Découvrez le sur le site 
        <a href="http://automatisez.net/" title="site externe">Automatisez.net&nbsp;!</a>
        </p>
---

Chapter Splitter est une application conçue pour vous aider à découper
une vidéo en plusieurs fichiers.

Pour cela, elle utilise les marqueurs de chapitre que vous pouvez
ajouter avec votre logiciel de montage vidéo ou de capture d’écran.

Ce genre de traitement est extrêmement utile surtout lorsque vous réalisez
des enregistrements d’écrans ou des formations.

Inutile de vous questionner. 
Enregistrez votre présentation et une fois dans votre logiciel de montage
il vous suffit d’indiquer les marques de chapitre. 

> Un utilitaire simple et efficace pour découper vos vidéos.

### Fonctionnalités

Une interface minimaliste, mais efficace.

{% capture windowDescription %}

Sélectionnez la vidéo et un dossier de destination
et il ne vous reste plus qu’à lancer l’exportation.

{% endcapture %}
{% capture windowScreenshot %}

Une fois la vidéo sélectionnée, la liste des chapitres s’affiche.

{% endcapture %}
{% include widgets/screenshot-lightbox.html 
        lang=lang 
        appId=page.id 
        src="web-app-screenshot.png" imgAlt=windowScreenshot
        description=windowDescription %}

Une utilisation simple :

1. ouvrez la vidéo source ;
2. sélectionnez un dossier de destination ;
3. lancez l’exportation.

Une configuration minimale pour ajuster les noms des fichiers.

Et si vous souhaitez un maximum de souplesse, utilisez l’action
directement avec Automator.

### Construit pour Automator

Parce que rien n’est mieux que laisser votre Mac
travailler à votre place, Chapter Splitter est
construite pour Automator.

{% capture workflowDescription %}

Passez une vidéo en entrée de votre document
et vous retrouverez les vidéos exportées en
sortie.

{% endcapture %}
{% capture workflowScreenshot %}
Une action Automator simple à configurer et 
à intéger à vos processus.
{% endcapture %}
{% include widgets/screenshot-lightbox.html 
        lang=lang 
        appId=page.id 
        src="web-automator-workflow.png" imgAlt=workflowScreenshot
        description=workflowDescription %}

La vidéo ci-dessous vous montre comment construire un processus d’exportation
en quelques clics.

{% capture demoAutomatorLabel %}
Un processus simple d’exportation
{% endcapture %}
{% include widgets/youtube.html videoId="eAN4gHLQ44M" title=demoAutomatorLabel %}
