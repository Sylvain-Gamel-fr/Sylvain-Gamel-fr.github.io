---
layout: page_app
title: my Groups
slogan: Manage your groups of contacts right on iOS device.
categories: apps
family: iOS
lang: "en"
order: 1
id: mygroups
header_banner: my-groups-banner.jpg
sideNote: >
    Create groups of contacts.

    Application is available in the App Store.
    It is compatible with iPhone, iPod touch and iPad.

    <hr>

    <h3 class="h4">Add-ons</h3>

    [Send SMS to a group](send-sms-to-a-group.html)
    using a _shortcut_ and action sheet sharing feature.

---

> <span class="badge badge-pill badge-success">iOS 14</span><br/>
> The application _My Groups_ if fully compatible with latest iPhone and 
> iPad operating system.
>
> <span class="badge badge-pill badge-warning">Mail and groups</span><br/>
> Apple introduced a bug in _Mail_ that broke the possibility to send a message to a group.
>
> _This bug is fixed in iOS 14.3 (available since 2020, Dec 14)._
>
> You still can send an email to a group using [integrated email feature](#mailing)
> of _My Groups_.

This simple and efficient app will let you organize
your address book in groups of contacts.

What is possible on Mac with _Contacts_ application is, at last,
possible on your iPhone or iPad.

The app _my Groups_ finaly fill this gap by proposing essentials
features:

- create, rename and delete groups of contacts;
- export [vCards](https://fr.wikipedia.org/wiki/VCard) of members;
- merge multiple groups as a single one.
- send email to group of users (**new in v1.1**)


> A simple tool respecting your privacy.

-----

**Content**

- [Organize your contacts](#manage)
- [Send an email to group members](#mailing)
- [Premium features](#premium)
- [Multiple address books?](#addr-books)


<h3 id="manage">Managing Groups</h3>

{% capture groupesDescription %}

Main screen of this app immediatly displays the list of groups in your
address book.

This is the starting point from where you can create new groups,
delete them or change their names.

- Slide from left to right on a group name to rename it;
- Slide from right to left on a group name to delete it.

Going into edit mode allows you to select multiples groups to delete
them all at once, export them or create a new group by merging your selection.

On this screen, the light appearance is used.

{% endcapture %}
{% capture groupesScreenshot %}
Main screen, list of groups.
{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang 
        appId=page.id 
        src="groups-iphone.png" imgAlt=groupesScreenshot
        description=groupesDescription %}


<h3 id="mailing">Send an email to group members</h3>

> <span class="badge badge-pill badge-primary">New</span> 
> in version 1.1 of _My Groups_.
>
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


#### Supervise the recipient list

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

#### Target Address Labels

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

<h3 id="premium">Premium Features</h3>

<html>
<img src="/images/apps/mygroups/message-locked.svg" 
     alt="Paid features"
     style="width: 7rem; margin: 1rem auto; display: block;">
</html>

Merging groups, export through sharing and email to groups
are premium features that can be unlocked through an 
in-app purchase.

> A single purchase, **no subscription**, permanently 
> unlocks these _premium_ functions.

<img src="/images/apps/mygroups/free-trial.svg" 
     alt="Free Trial"
     style="float: left; width: 30px; margin-right: 2rem;">
You may test those features for free for a limited time by activating
a free trial.
 
> The purchase of 0$ for the trial offer **is not** 
> a subscription.
> It only serves to *temporarily* unlock these features to try 
> them out.

If these functions are not useful to you, they will simply be 
deactivated at the end of the trial period.

The application will remain functional and you can continue to 
use it for free, except for these few more advanced functions.

_If you enjoyed this application, I hope you will see this 
purchase as a way to support my work and its future 
developments._


<h3 id="addr-books">Multiple Directories</h3>

<html>
<img src="/images/apps/mygroups/address-book-picker.svg" 
     alt="Selecting an account"
     style="width: 5rem; margin: 1rem auto; display: block;">
</html>

Wherever are your contacts: on your phone, in iCloud or Gmail (cardDAV),
this tool allows you to manage multiple address book accounts as easily 
as a Mac.

{% capture directoryDescription %}

The account picker screen allow you to select which account to manage.

- cardDAV accounts (iCloud, Gmail) can be used to create groups;
- contacts folders on Exchange accounts
  (Outlook, Office 365, G Suite) are displayed but cannot be selected
  as those do not support groups.

Your groups will be managed on the selected account.

The account defined as your default account in system settings will
be the one selected on first launch.

On this screen the interface uses the dark-mode apperance.

{% endcapture %}
{% capture directoryScreenshot %}
Pick an account on which you will manage groups.
{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang 
        appId=page.id 
        src="directories-iphone.png" imgAlt=directoryScreenshot
        description=directoryDescription %}

