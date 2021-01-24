---
layout: page_app
title: my Groups
slogan: Manage your groups of contacts right on iOS device.
categories: apps
family: iOS
lang: "en"
order: -1
id: mygroups
header_banner: my-groups-banner.jpg
sideNote: >
    Create groups of contacts.

    Application is available in the App Store.
    It is compatible with iPhone, iPod touch and iPad.

---

<html>&hookleftarrow;&nbsp;<a href="./">Go to App page</a></html>

## Send an email to group members

> A premium feature that you can test thanks to free
> trial and without engagement.

_Mail_ app already allows you to select a group as recipients,
but "_My Groups_" goes a steps further.

- _spot_ contacts without emails;
- _target_ specific address labels in priority;
- _eliminate_ address labels that must not receive a message.

You have the control on which email will get your message,
without losing your time on case by case micro-management.

Targetting is very easy and only rely on two criterias:

1. email address labels taht must receive the message ;
2. and those that shall not receive it.

{% capture mailingDescription %}

First section of the screen gives information on recipiers,
contacts without email, and those that are excluded because of
filtering.

You provide those criterias in the second section.

{% endcapture %}
{% capture mailingScreenshot %}
Targetting the recipients
{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang 
        appId=page.id 
        src="mailing-iphone.png" imgAlt=directoryScreenshot
        description=mailingDescription %}


### Supervise the recipient list

Main screen contains three lists:

1. recipients: contact with at least one email that 
   will get the message;
2. list of contacts that have no email address defined;
3. List of contacts that will not get the message.

{% capture videoNoEmailDescription %}
If a contact lacks an email address, you can update their
information right from this screen to add one.

All without going back and forth in the application, 
nor with _Contacts_.
{% endcapture %}
{% capture videoNavigateurEmailAlt %}
Your browser does not support videos.
{% endcapture %}
{% include widgets/app-video.html 
        lang=lang 
        appId=page.id 
        src="mesGroupes_noEmail.mp4" 
        loop=true
        noVideoText=videoNavigateurEmailAlt
        description=videoNoEmailDescription %}

If a contact remains excluded from the distribution list,
it is either that he has no address, or that the
criteria eliminate it.

### Target Address Labels

How shall you select the addresses that will receive your message?

{% capture videoFilterDescription %}
You only need to define two criteria:

1. the list of address labels which must receive the message;
2. labels which should not receive the message.
{% endcapture %}
{% capture videoNavigateurFilterAlt %}
Your browser does not support videos.
{% endcapture %}
{% include widgets/app-video.html 
        lang=lang 
        appId=page.id 
        src="mesGroupes_filter.mp4" 
        loop=true
        noVideoText=videoNavigateurFilterAlt
        description=videoFilterDescription %}

On this basis, the message will be sent to all the 
addresses of the group's contacts:

- who have a "priority" label;
- who do not have a label marked as "excluded".

The message will never be sent to an address 
with a label marked as "excluded".

Note that it is possible to send the duplicate email to a contact.

If addresses with the "personal" label have priority, 
and a contact has two addresses, one with this label 
and the other with "football club":
the message will be sent to these two addresses.
