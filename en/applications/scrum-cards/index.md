---
layout: page_app
title: SCRUM Cards
slogan: Agile planning at your fingertips
categories: apps
family: iOS
lang: "en"
order: 2
id: scrumcards
sideNote:
    Always carry in your pocket all cards for your next SCRUM planning meeting.

---

Always carry in your pocket your deck of cards for the next SCRUM planning meeting.

You will have directly under your fingers:

- a complete deck of cards to give points to your stories;
- maps to estimate the duration of a task in hours, days, weeks or even months.

Obviously you can easily modify the cards of your game to always have the right cards in hand.

### Participate in SCRUM poker

{% capture pokerGamelTxt %}

Your cards are displayed before your eyes on the green carpet of the game.

All you have to do is choose the note you give to the story.

{% endcapture %}
{% capture historyScreenshot %}
The history screen shows the list of previous operations.
Navigation between panels uses a tab bar at the base of the screen.
{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang 
        appId=page.id 
        src="SCRUMCards_1_pokergamel.png" imgAlt=historyScreenshot
        description=pokerGamelTxt %}

### Donnez une estimation

{% capture estimateTxt %}

If you need to give a time estimate for your tasks, everything is planned!

Some finger tapping will suffice to share your opinion with your entire team.

{% endcapture %}
{% capture iPadScreenshot %}
The size of the iPad screen allows to display at the same time the calculator, 
the history as well as the list to quickly pick the last used rates.
{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang 
        appId=page.id 
        src="SCRUMCards_2_estimate.png" imgAlt=iPadScreenshot
        description=estimateTxt %}


### Construisez votre jeu

{% capture customizeTxt %}

Because each team is different, SCRUM Cards adapts to your needs.

{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang 
        appId=page.id 
        src="SCRUMCards_3_setup1.png"
        description=customizeTxt %}


{% capture customizeTxt %}

A short visit to the settings will allow you, in a few steps, 
to build your own deck of cards with a few original illustrations.

{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang 
        appId=page.id 
        src="SCRUMCards_3_setup2.png"
        description=customizeTxt %}

