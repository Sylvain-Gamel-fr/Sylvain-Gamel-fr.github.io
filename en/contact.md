---
layout: default
title: "Contact Point"
order: 10
type: footer-link
lang: en
permalink: en/contact.html
---

{% include resume/contact-info.html %}

<div class="row mt-3">
{% assign linkList = site.data.ownedLinks | sort: "group" %}
{% for currentLink in linkList %}
    {% assign theImage = "/images/social/" | append: currentLink.icon | relative_url %}
    
    {% include widgets/link-info.html href=currentLink.url 
            name=currentLink.name
            image=theImage 
            imageAlt=currentLink.service 
            description=currentLink.description %}
{% endfor %}
</div>
