---
layout: page_app
title: Envoyer un SMS à un groupe de contacts
categories: apps
family: iOS
lang: "fr"
id: mygroups
header_banner: my-groups-banner.jpg
sideNote: >
    <p>Créez des groupes de contacts.</p>

    <p>L'application est disponible dans l'AppStore.
    C'est une application compatible 
    à la fois pour iPhone, iPod touch et iPad.</p>

    [More info…](index.html)
shortcut:
    - name: SMS à un groupe (raccourcis, 4Ko)
      url: https://www.icloud.com/shortcuts/3ee01c9e43804cb1aafea4539e2a226d
      description: Téléchargez le raccourcis sur votre iPhone ou iPad
---

Je vous propose un racccourci qui vous permet d'utiliser la fonction
d'exportation de _Mes Groupes_ pour envoyer un message SMS aux membres
d'un groupe de contacts.

Pour plus de détails sur le fonctionnement de ce raccourci je vous
renvoie à la lecture de l'[article dédié][articleShortcut] sur mon site 
spécialisé dans l'automatisation: [Automatisez.net][automatisezNet]

{% assign download=page.shortcut[0] %}
{% include widgets/download_button.html 
    name=download.name 
    url=download.url 
    tip=download.description %}

Téléchargez ce raccourci à partir de votre iPhone ou votre iPad
puis suivez les instructions pour l'ajouter à la liste de vos
raccourcis.

{% capture videoLabel %}
Cette vidéo vous montre comment installer le raccourcis et comment
l'utiliser avec « _Mes Groupes_ ».
This video shows how to install and how to use it.
{% endcapture %}
{% include widgets/youtube.html videoId="ELlWicsVUUs" title=videoLabel %}

**Note:** Ce raccourci est compatible avec la version iOS 13.



[automatisezNet]: https://Automatisez.net/
[articleShortcut]: https://www.automatisez.net/raccourcis/2020/04/05/envoyer-des-sms-a-un-groupe.html