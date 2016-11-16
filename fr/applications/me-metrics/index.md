---
layout: page_app
title: me-Metrics
slogan: Comptez ce qui compte pour vous !
categories: apps
lang: "fr"
order: 3
id: memetrics
header_banner: banner_me-metrics
sideNote:
    Comptez ce qui compte pour vous, à votre façon !

---

- Une application ;
- Un widget pour la vue Aujourd'hui ;
- Une application Apple Watch avec sa vue coup d'œil.


### Fonctionnalités

{% capture easyTxt %}
#### Facile à utiliser

Créez un compteur et une tape le met à jour. Voilà le chemin le plus simple pour se mettre en route.

- Une simple tape sur un compteur pour augmenter ou réduire la valeur.
- Décomposez votre décompte en paquets.
- Accès rapide avec le widget du centre de notification.
{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang appId=page.id src="me-Metrics_iPhone-counters.png"
        description=easyTxt %}


{% capture automateTxt %}
#### Automatisez !

S’intègre avec vos processus automatiques en utilisant le protocole x-callback-url.

- obtenir la liste des compteurs ;
- appliquer l'incrément par défaut sur un compteur ;
- obtenir la valeur d'un compteur.
- Tout ça aussi facilement qu’un copier/coller. 
  Une solution idéale pour s'intégrer aux processus construits avec 
  [Workflow](https://workflow.is/).
{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang appId=page.id align="right"
        src="me-Metrics_iPhone-fav.png"
        description=automateTxt %}


#### Comptez les paquets

_Vous venez de recevoir vos capsules de café ?_

Créez un compteur pour savoir quand le dernier sera entamé et que le moment de faire une nouvelle commande sera venu !

_Vous voulez arrêter de fumer ?_

Comptez le nombre de paquets de que vous fumez. 

#### Un widget pour un accès rapide

Ajoutez le widget à la vue Aujourd'hui du Centre de Notification.

Vous pourrez rapidement mettre à jour vos compteurs préférés.


### Sur Apple Watch

{% capture watchTxt %}
Utilisez la fonction coup d'œil (watchOS 2) pour consulter rapidement 
les derniers compteurs que vous avez mis à jour.
{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang appId=page.id src="me-Metrics-watch-app.png"
        description=watchTxt %}

L'application pour Apple Watch vous permet de mettre à jour vos 
compteurs favoris sans avoir à sortir votre téléphone de votre poche.

### Vos données, où vous voulez

Vous pouvez maintenant exporter vos compteurs dans un format texte CSV pour les exploiter dans un tableur, ou tout simplement les sauvegarder.


Si vous respecter exactement le même format, il vous est aussi possible de réimporter un ensemble de compteurs.

