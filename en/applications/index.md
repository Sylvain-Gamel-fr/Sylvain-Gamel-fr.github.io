---
layout: page_section
title: Software
lang: en
topNavigation: true
subcategory: apps
order: 2
header_banner: banner_calcTVA-iPad.jpg
permalink: /en/applications/
logoImage: "/images/picto/section-mobile-app.svg"
---

{% assign lang = page.lang %}

### iOS Applications

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


### Web Applications

#### « FiMaJe Contest »

A web application built on top of ([NodeJS](http://nodejs.org/) 
and [ExpressJS](http://expressjs.com/)) to manage figurine painting
contests.

The source code for this project is available on 
[GitHub](https://github.com/sylvaingml/FiMaJe-concours).

The application was written for the club 
«[La Compagnie des Trolls](http://LaCompagnieDesTrolls.fr/)» 
for the management of the painting contest organized at 
[FiMaJe](http://FiMaJe.fr) event.
