---
layout: default
title: "Legal"
order: 20
type: footer-link
lang: en
permalink: en/legal.html
---

### Editor

{% assign editor = site.data.contact-hosting | where: "role", "editor" | first %}
{% include resume/contact-company.html contact=editor %}

### Hosting

{% assign hosting = site.data.contact-hosting | where: "role", "hosting" | first %}
{% include resume/contact-company.html contact=hosting %}
