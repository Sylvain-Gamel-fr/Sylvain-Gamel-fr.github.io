---
layout: page_section
title: Livres
topNavigation: true
subcategory: books
lang: "fr"
order: 1
permalink: /fr/books/
logoImage: "/images/picto/section-book.svg"
---

{% assign lang = page.lang %}
{% assign bookList = site.data.books | sort: "first_publication_year" | reverse %}

{% for current in bookList %}
  {% include books/book-summary-info.html lang=lang book=current %}
{% endfor %}
