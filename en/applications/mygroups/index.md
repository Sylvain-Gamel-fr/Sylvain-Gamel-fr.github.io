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

    <h3 class="h4">More</h3>

    [Your groups and iOS14](ios14.html)


    [Send SMS to a group](send-sms-to-a-group.html)
    using a _shortcut_ and action sheet sharing feature.

---


This simple and efficient app will let you organize
your address book in groups of contacts.

What is possible on Mac with _Contacts_ application is, at last,
possible on your iPhone or iPad.

The app _my Groups_ finaly fill this gap by proposing essentials
features:

- create, rename and delete groups of contacts;
- export [vCards](https://fr.wikipedia.org/wiki/VCard) of members;
- merge multiple groups as a single one.
- send e-mail or SMS to group of users


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

_Mail_ app already allows you to select a group as recipients,
but "_My Groups_" goes a steps further.

- _spot_ contacts without emails;
- _target_ specific address labels in priority;
- _eliminate_ address labels that must not receive a message.

Get more details on [dedicated page](email.html).


<h3 id="sms">Send a SMS to a group</h3>

With «_My Groups_» you can go beyond iOS and allows you to send 
a SMS to a group of contacts.

- _identify_ contact that are missing phone number;
- _include_ or _exclude_ numbers by their number label;
- _write_ message in before switching to _Messages_.


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

