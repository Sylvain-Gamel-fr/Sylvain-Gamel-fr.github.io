---
layout: page_section
title: Livres
lang: "fr"
order: 2
permalink: /fr/books/
logoImage: "/images/picto/section-book.svg"
subcategory: book
---

{% assign lang = page.lang %}
{% assign bookList = site.data.books | sort: "first_publication_year" | reverse %}

{% for current in bookList %}
  {% include books/book-summary-info.html lang=lang book=current %}

    {% if current.categories contains page.subcategory %}
        {%  assign sectionActive = false %}
        {% if page.categories contains current.category %}
            {%  assign sectionActive = true %}
        {% endif %}
        {% if current.order != -1 and current.title and current.lang == page.lang %}


        {% endif %}
    {% endif %}
{% endfor %}
