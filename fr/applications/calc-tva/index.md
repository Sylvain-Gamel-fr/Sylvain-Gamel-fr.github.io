---
layout: page_app
title: Calculette TVA
slogan: La TVA facile
categories: apps
lang: "fr"
order: 1
id: vatcalc
header_banner: banner_calcTVA-iPhone-16-9.jpg
sideNote:
    Obtenir un montant hors-taxes ou TTC en toute simplicité, 
    pour toutes les TVA Européennes et même plus.


    L'application est disponible dans l'AppStore.
    C'est une application universelle compatible 
    à la fois pour iPhone, iPod touch et iPad.


    Les calculatrices vous intéressent? 
    Faites un tour par le blog [Calculatrices.info](http://calculatrice.info/) !
---

Opération TVA est votre compagnon idéal pour établir vos notes de frais 
et vérifier vos factures.

Il vous assistera pour:

- Calculer le montant TTC à partir du montant hors-taxes.
- Inversement, retrouver le montant hors-taxes à partir du montant TTC.
- Calculer la TVA à partir des montant HT ou TTC.
- Choisir le taux de TVA parmis ceux de 59 pays d'Europe et du monde.

> Cet utilitaire simple et intuitif vous facilitera la gestion de vos comptes.

### Fonctionnalités

Un historique des opération est disponible.

{% capture historyDescription %}

Une tape vous suffit pour reprendre montant hors-taxe et taux de TVA dans 
l'onglet de calcul.

{% endcapture %}
{% capture historyScreenshot %}
L'écran de l'historique présente la liste des opération précédentes.
La navigation entre panneaux utilise une barre d'onglets en base de l'écran.
{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang 
        appId=page.id 
        src="history-iphone.png" imgAlt=historyScreenshot
        description=historyDescription %}


{% capture iPadDescription %}

Sur iPad, profitez d'un clavier numérique pour une saisie encore plus facile.

{% endcapture %}
{% capture iPadScreenshot %}
La taille de l'écran d'iPad permet d'afficher en même temps la calculette,
l'historique ainsi que la liste des derniers taux utilisés.
{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang 
        appId=page.id 
        src="main-ipad.png" imgAlt=iPadScreenshot
        description=iPadDescription %}
