---
layout: default
title: "Mentions Légales"
order: 20
type: footer-link
lang: fr
permalink: fr/mentions-legales.html
---

### Éditeur

{% assign editor = site.data.contact-hosting | where: "role", "editor" | first %}
{% include resume/contact-company.html contact=editor %}

### Hébergement

{% assign hosting = site.data.contact-hosting | where: "role", "hosting" | first %}
{% include resume/contact-company.html contact=hosting %}
