---
layout: default
title: "Points de Contact"
order: 10
type: footer-link
lang: fr
permalink: fr/contact.html
---

{% include resume/contact-info.html %}

<div class="row mt-3">
{% assign linkList = site.data.ownedLinks | sort: "group" %}
{% for currentLink in linkList %}
    {% assign theImage = "/images/social/" | append: currentLink.icon | relative_url %}
    
    {% assign description = currentLink.description %}
    
    {% if currentLink.description[ page.lang ] %}
        {% assign description = currentLink.description[ page.lang ] %}
    {% else %}
        {% assign description = currentLink.description %}
    {% endif %}

    {% include widgets/link-info.html href=currentLink.url 
            name=currentLink.name 
            image=theImage 
            imageAlt=currentLink.service 
            details=description %}
{% endfor %}
</div>

