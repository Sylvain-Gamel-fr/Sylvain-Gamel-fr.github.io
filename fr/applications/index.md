---
layout: page_section
title: Logiciels
lang: fr
topNavigation: true
subcategory: apps
order: 2
header_banner: banner_calcTVA-iPad.jpg
permalink: /fr/applications/
logoImage: "/images/picto/section-mobile-app.svg"
---

{% assign lang = page.lang %}

### Applications pour iOS

{% assign appPages = site.pages | sort: "order" %}
{% for current in appPages %}
    {% if current.categories contains page.subcategory %}
        {%  assign sectionActive = false %}
        {% if page.categories contains current.category %}
            {%  assign sectionActive = true %}
        {% endif %}
        {% if current.order != -1 and current.title and current.lang == page.lang %}

{% include apps/app-info.html lang=lang appId=current.id %}

        {% endif %}
    {% endif %}
{% endfor %}


### Applications Internet

#### « Concours FiMaJe »

Une application web 
([NodeJS](http://nodejs.org/) et [ExpressJS](http://expressjs.com/fr/)) 
pour gérer des concours de peinture.

Le code source de ce projet est disponible sur 
[GitHub](https://github.com/sylvaingml/FiMaJe-concours).

L'application a été écrite pour le club 
[La Compagnie des Trolls](http://LaCompagnieDesTrolls.fr/) 
pour la gestion du concours de peinture organisé lors du
[FiMaJe](http://FiMaJe.fr).


