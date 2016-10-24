---
layout: page
title: Logiciels
lang: "fr"
order: 1
subcategory: app
---

### Applications pour iOS

{% assign appPages = site.pages | sort: "order" %}
{% for current in appPages %}
    {% if current.categories contains page.subcategory %}
        {%  assign sectionActive = false %}

        {% if page.categories contains current.category %}
            {%  assign sectionActive = true %}
        {% endif %}

        {% if current.order != -1 and current.title and current.lang == page.lang %}
- [{{ current.title }}]({{ current.url | prepend: site.baseurl }})
        {% endif %}
    {% endif %}
{% endfor %}


### Autres Logiciels

- « concours FiMaJe», une application web (NodeJE et Express) pour gérer des
  concours de peinture

