---
layout: post
title: "1 year of chorus: a history of looking for charts"
date: 2019-01-10 18:00:00 +0100
tags: [chorus, clone-hero]
---

I'm a bit late because chorus was released in very late December 2017... but let's say chorus is 1 year old now! Woo!

To celebrate, this article is the first of a series that is going to go through the origins of chorus. This first article will go over other means to get custom charts for your Clone Hero library. I'm also gonna give my own insights about them, which spawned the idea, then the first version of chorus.

## So, what the hell is *chorus?*

In one straight sentence, *chorus* is a platform that aggregates community custom charts and provides an interface to search through them. This is the main utility and principle of chorus, and what most of its users came to expect of it. Nothing less, nothing more.

## How did it come to be?

Early December 2017. Let's say you're a new player looking for some charts.

There were a few ways of getting charts, each with their own setbacks:

### [The *spreadsheet*](https://docs.google.com/spreadsheets/d/13B823ukxdVMocowo1s5XnT3tzciOfruhUVePENKc01o/edit#gid=0)

![Screenshot of the "Clone Hero Songs, Setlists, and Backgrounds/Highways Master List" spreadsheet](/assets/1-year-of-chorus/spreadsheet.jpg)

A curated list of drive folders containing vast amounts of charts and songs, either from the community or ripped from official games. A great way to get started, and arguably still to this day, the one starting point as a new player to get charts. At the time, if you went and decided to get *all* of the songs from all of the drives, you'd end up with maybe a bit under 20,000 charts, which would get you going forever.

The majority of individual charters featured on the spreadsheet are vetted and thoroughly reviewed for their abilities: if you picked any of their drives, you would be 99% sure to be provided with professional-grade, high quality charts.

Though the spreadsheet as it stands at the time of writing could use a little bit of cleaning: the spreadsheet didn't use to have strict entry requirements like it has now. For instance, the overall quality of the second tab of the spreadsheet is more questionable than the main one. The current maintainers are however quite acquainted and sensibilized with chart quality (some of them are even chart reviewers), so I trust their judgement.

The spreadsheet is fine and good if you're looking into building your song library regardless of the songs you're getting, but it lacks searchability. How do you know what Chezy has charted besides *Flamingo*? Do you remember the songs that were charted for Rock Band 2 DLC? I certainly don't, and I don't wanna look into each and every charter's drive or download entire game setlists just to find out *that one song*.

**Lack of searchability** is the one reason the *chorus* idea came to spawn.

### [C3](http://customscreators.com/index.php?/page/index.html)

![Screenshot of the "Custom Creators Collective" database of custom songs](/assets/1-year-of-chorus/c3.jpg)

Custom Creators Collective (C3) is the main platform that hosts and manages the Rock Band customs community. It totals a little bit under 19,000 charts. C3 is a well-featured platform that notably allows you to search through its database for any particular song you might be searching for. It is also listed on the spreadsheet mentioned above.

It is most and foremost tailored for Rock Band players: to play these charts on Clone Hero, you need to [convert](https://www.youtube.com/watch?v=G-r2s-etFQQ&feature=youtu.be) them using an external tool if they did not provide a compatible ("Phase Shift") download.

C3 at the time was not too Clone Hero-aware. The only reason one could play their customs on Clone Hero was that they provided support for [Phase Shift](http://www.dwsk.co.uk/index_phase_shift.html), another Guitar Hero-type game that was successful before Clone Hero. Clone Hero conveniently supports songs that were compatible with Phase Shift, and that's how you could (and still can) utilize C3 charts to build upon your library. This is incidentally why you need to pick "Phase Shift converter" in the converter tool.

Its most vocally outcried downfall is its lack of quality control. The legacy C3 database used to have the same level of vetting the spreadsheet has, and the legacy C3 database is still a very good source of guaranteed high quality charts. However, C3 evolved as an open platform to any charter who registered. It has its advantages, such as great community development and involvement, as well as preventing elitism, but it ultimately hurts the end user, the player, who has to go through multiple charts to determine which one is good or not, if they're seeking playable charts.

The rating system doesn't confidently help the player as anyone can vote, including uneducated players who could very well recommend bad charts. It also opens the platform to alt-account manipulation and vote brigading. C3 has disabled the rating system for years now, despite the field being visible.

### The C3 conversions drive folder

![Screenshot of a reenactment of the C3 conversion drive](/assets/1-year-of-chorus/c3-conversions.jpg)

So what if I were too lazy to convert them, or what if all of this was too confusing to me? You shouldn't need to know the legacy of the Guitar Hero/Rock Band community to get started!

The C3 conversions drive folder was a great effort lead by CaGe666 and ZeroHearts at the time, which is now down because it could not be maintained anymore. These people went through the process of manually converting packs of songs and uploading them on a centralized Google Drive, doing weekly releases, which helped keep the community on its toes.

The main feature of this Google Drive was how it categorized all of its songs from A to Z, according to their artist name. So if you were looking for a particular band's name, you would just navigate to the corresponding letter folder and navigate to that band!

One problem stems from Google Drive itself: its search feature doesn't search in all the subfolders. You have to access a subfolder for Google Drive to actually recognize it as a folder that has been shared to you, and that you can search through. Not ideal if you're looking for a song but you forgot its artist.

**This is actually the main reason and idea that spawned the implementation of chorus.** I wanted to be able to search through that drive seamlessly, so I started sifting through the Google Drive API documentation and deemed the project feasible at the time.

### [Frets on Fire forums](https://fretsonfire.org)

![Screenshot of the "Tune Posting" section of the Frets on Fire forums](/assets/1-year-of-chorus/fof.jpg)

"Frets on Fire" was the first majorly known Guitar Hero-like game that got wildly popular at the time, between 2007 and 2011. Its forums were the most major contributors of the charting scene: countless charters have opened, advertised and bumped their threads and setlists throughout the years, and many are still accessible to this day.

The forums are well searchable, so if you want to search a particular song, you can! Although it might return discussions about songs rather than songs themselves... The forum format also encourages community engagement and feedback, which helps determine if charts are good before playing them more than mere ratings. The standard of quality was lower than what it is today, but major community members are respectable and supportive.

Unfortunately, a good part of the download links do not work anymore, as they were either taken down or the hosting solutions themselves became obsolete. Moreover, the forum format is rather freeform by nature, which doesn't yield homogeneous presentation. One thread could be presented in one way, the other one could be a total mess... it was up to the charters, maintainers and organizers to organize their content.

As Clone Hero didn't exist at the time, the community and charts are, of course, not Clone Hero-centric, and for the majority won't include features such as forced notes, tap notes, open notes or solo sections (though that did come at some point with FoFiX).

Also, as a fair warning, it is now fretsonfire.**org**, as opposed to fretsonfire.net before. In fact, the .net domain now directs to some unrelated business, most likely harmful for your computer and/or privacy due to problems with the domain name owner.

### [YouTube](https://youtube.com)

![Screenshot of the YouTube channel of the "Custom Songs Central" collective](/assets/1-year-of-chorus/youtube.jpg)

It is *one way* of looking for charts: in fact, many GH3-era setlists and songs can only be found on YouTube! Not only that, but YouTube is the widely used platform to upload and promote **chart previews**, which provide the user with what the chart looks like in-game and what the song sounds like! Try searching `<anything> guitar hero` (variants such as `rock band`, `phase shift` or `clone hero` might also work) and you might find yourself in luck.

YouTube is searchable and very much user-accessible, but uncentralized and prone to disorganization, especially since YouTube isn't exclusive to charters at all. You will also encounter quite a number of dead links, since keeping the video descriptions up to date is up to the charters/organizers/maintainers.

Of course, there's absolutely no guarantee of the quality of the charts you're getting, but at least, you can take a look at what it looks in the video and not waste too much time. But it is not the platform anyone would recommend you to look for high quality charts, save for some select channels.

### [CH Discord](https://discord.gg/Hsn4Cgu) (and various other Discords)

![Screenshot of the #custom-songs channel of the official CH Discord](/assets/1-year-of-chorus/discord.jpg)

Discord is most likely the second medium through which charts are promoted, as it gathers thousands of users in a real-time manner. It is searchable and fairly user-accessible, and mostly directs the users to YouTube, which as mentioned allows them to check the chart beforehand.

Many Clone Hero-centered Discord servers, whether it be the official one, collectives, streamers' or projects, provide one or multiple channels to advertise and showcase its community's charts. This encourages community participation and involvement.

Sometimes, we don't want that: the CH Discord for example restricts its #custom-songs channel to "verified charters", who are vetted and reviewed by a few knowledgeable and dedicated people called "chart reviewers". This helps guarantee high quality, highly playable results to players and users and paint a professional face on the custom songs community. It also promotes overall skill enhancement, as the "charter role" becomes a trophy, a token of accomplishment as a charter.

In the end, it all depends on which servers you frequent, but Discord can be a surprisingly fruitful source of charts!

### [ScoreHero](http://www.scorehero.com/)

![Screenshot of the "Customs" page of ScoreHero](/assets/1-year-of-chorus/scorehero.jpg)

ScoreHero was *the* go-to platform to track oneself's scores across multiple official Guitar Hero and Rock Band games. Since the games were moddable to play custom games on them (notably GH2 and GH3), ScoreHero also provided a platform for charters to upload their custom charts.

The particularity is that to avoid copyright issues, most of the time, people only uploaded .chart/.mid files. The instructions to sync the audio were told through offsets and song length on the platform itself.

ScoreHero is mostly a relic of the past now, though it is still available.

Side note as a web developer: the fact that it provides authentication over just HTTP (with no HTTPS alternative) makes me rather uncomfortable.

### Summary

There might be other ways I forgot or slipped through my radar. But still, a comparative table of features for each source:

<div class="ratings">
<table>
<thead>
  <tr>
    <th></th>
    <th>Spreadsheet</th>
    <th>C3</th>
    <th>C3 (conv.)</th>
    <th>FoF</th>
    <th>YouTube</th>
    <th>Discord</th>
    <th>ScoreHero</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>
      <b>User experience</b><br />
      <small>How comfortable would you be if you let your mom use it</small>
    </td>
    <td>
      ★★★★★<br />
      <small>Succinct, categorized. Mostly Google Drive and other hosts as interface.</small>
    </td>
    <td>
      ★★★☆☆<br />
      <small>A place made for custom songs, presented as custom songs. Straightforward. Have to convert.</small>
    </td>
    <td>
      ★★★★☆<br />
      <small>Google Drive as interface</small>
    </td>
    <td>
      ★★★☆☆<br />
      <small>Forum as interface, not the primary purpose</small>
    </td>
    <td>
      ★☆☆☆☆<br />
      <small>Huge video sharing platform as interface, far from primary purpose</small>
    </td>
    <td>
      ★★★☆☆<br />
      <small>Instant messaging as interface. Mostly video previews, have to dig in description.</small>
    </td>
    <td>
      ★★★☆☆<br />
      <small>A place made for custom songs, presented as custom songs. Straightforward. Have to find the audio yourself in most cases.</small>
    </td>
  </tr>
  <tr>
    <td>
      <b>Charter experience</b><br />
      <small>From uploading your charts, presenting them, to keeping them up to date</small>
    </td>
    <td>
      ★★★☆☆<br />
      <small>Spreadsheet not under the charter's control, only the drives. Meritocracy: hard to get in. Otherwise, Google Drive/Sheets (or similar) as interface.</small>
    </td>
    <td>
      ★★★★★<br />
      <small>A place made for custom songs, presented as custom songs, therefore charter-friendly.</small>
    </td>
    <td>
      ☆☆☆☆☆<br />
      <small>No control over the drive, has even been subject of drama.</small>
    </td>
    <td>
      ★★★☆☆<br />
      <small>Have to maintain thread yourself, presentation is up to you.</small>
    </td>
    <td>
      ★☆☆☆☆<br />
      <small>Have to maintain video descriptions yourself</small>
    </td>
    <td>
      ★★★★☆<br />
      <small>As it is, used as "ad space": secondary medium of sharing. Updating isn't really necessary, you can mostly just repost.</small>
    </td>
    <td>
      ★★★★☆<br />
      <small>A place made for custom songs, presented as custom songs, therefore charter-friendly.</small>
    </td>
  </tr>
  <tr>
    <td>
      <b>Searchability</b><br />
      <small>Ability to find what you're looking for</small>
    </td>
    <td>
      ☆☆☆☆☆<br />
      <small>None, outside of link titles</small>
    </td>
    <td>
      ★★★★★<br />
      <small>Artist/Name, detailed&nbsp;filters, sorting</small>
    </td>
    <td>
      ★☆☆☆☆<br />
      <small>Artist (A-Z folders)</small>
    </td>
    <td>
      ★★★☆☆<br />
      <small>Forum text search</small>
    </td>
    <td>
      ★★☆☆☆<br />
      <small>Video search</small>
    </td>
    <td>
      ★★★☆☆<br />
      <small>Text search in channels</small>
    </td>
    <td>
      ★★★★★<br />
      <small>Advanced search, sorting</small>
    </td>
  </tr>
  <tr>
    <td>
      <b>Availability</b><br />
      <small>Ability to actually download the charts</small>
    </td>
    <td>
      ★★★★★<br />
      <small>Kept up-to-date</small>
    </td>
    <td>
      ★★★★☆<br />
      <small>Sometimes flagged as bad content by browser</small>
    </td>
    <td>
      -<br />
      <small>Not available anymore</small>
    </td>
    <td>
      ★★☆☆☆<br />
      <small>Dead links</small>
    </td>
    <td>
      ★☆☆☆☆<br />
      <small>More dead links</small>
    </td>
    <td>
      ★★★☆☆<br />
      <small>Recency saves it, but charters won't update their old messages</small>
    </td>
    <td>
      ★☆☆☆☆<br />
      <small>Lots of dead links</small>
    </td>
  </tr>
  <tr>
    <td>
      <b>Quality</b><br />
      <small>Overall confidence on quality of charts</small>
    </td>
    <td>
      ★★★★★<br />
      <small>Verified charters; second page needs cleanup</small>
    </td>
    <td>
      ★★★☆☆<br />
      <small>Legacy is good; open platform</small>
    </td>
    <td>
      ★★☆☆☆<br />
      <small>Associated information from source, such as comments, is lost</small>
    </td>
    <td>
      ★☆☆☆☆<br />
      <small>Old standards, missing CH features, open platform</small>
    </td>
    <td>
      ☆☆☆☆☆<br />
      <small>Wildly varying standards depending on upload time, open platform</small>
    </td>
    <td>
      ★★★★☆<br />
      <small>Verified charters for major Discords</small>
    </td>
    <td>
      ☆☆☆☆☆<br />
      <small>Old standards, missing features, open platform</small>
    </td>
  </tr>
  <tr>
    <td>
      <b>Contemporariness</b><br />
      <small>Inclusion of Clone Hero features, also an indicator of activity and ability to keep charts up-to-date</small>
    </td>
    <td>
      ★★★★★<br />
      <small>Clone Hero-centric, active (and verified) charters</small>
    </td>
    <td>
      ★★★★☆<br />
      <small>Rock Band-centric, which has good overlap with Clone Hero, onging activity</small>
    </td>
    <td>
      ★★★★☆<br />
      <small>Same as source (C3)</small>
    </td>
    <td>
      ★☆☆☆☆<br />
      <small>Only a few currently active threads, a lot of outdated content</small>
    </td>
    <td>
      ★★☆☆☆<br />
      <small>Recent videos are generally Clone Hero-centric, but a lot of outdated content</small>
    </td>
    <td>
      ★★★★★<br />
      <small>Hot, bleeding edge, real-time content</small>
    </td>
    <td>
      ☆☆☆☆☆<br />
      <small>Horribly outdated, not active anymore</small>
    </td>
  </tr>
  <tr>
    <td>
      <b>Exhaustivity</b><br />
      <small>Chance of finding a chart for any particular song</small>
    </td>
    <td>
      ★★★★☆<br />
      <small>20,000+ songs</small>
    </td>
    <td>
      ★★★★☆<br />
      <small>18,000+ songs</small>
    </td>
    <td>
      ★★★☆☆<br />
      <small>10,000+ songs</small>
    </td>
    <td>
      ★★★★★<br />
      <small>Years upon years of content</small>
    </td>
    <td>
      ★★★☆☆<br />
      <small>Not everyone can, or bothers to do video previews for every chart</small>
    </td>
    <td>
      ★★☆☆☆<br />
      <small>Recent platform, though good presence</small>
    </td>
    <td>
      ★★★★☆<br />
      <small>16,000+ songs</small>
    </td>
  </tr>
  <tr>
    <td>
      <b>Community</b><br />
      <small>Ability to interact with people on their charts, feedback loop</small>
    </td>
    <td>
      ★☆☆☆☆<br />
      <small>Can contact the charters who are featured, I guess</small>
    </td>
    <td>
      ★★★★★<br />
      <small>Comments on charts, dedicated forum and community</small>
    </td>
    <td>
      ☆☆☆☆☆<br />
      <small>Detached from the C3 community, lost feedback</small>
    </td>
    <td>
      ★★★★★<br />
      <small>Built upon a forum</small>
    </td>
    <td>
      ★★★☆☆<br />
      <small>YouTube comments</small>
    </td>
    <td>
      ★★★★☆<br />
      <small>Built upon instant messaging; no individual thread per chart</small>
    </td>
    <td>
      ★★★★★<br />
      <small>Comments on charts, dedicated forum and community</small>
    </td>
  </tr>
</tbody>
</table>
</div>

Now, how does chorus rate?

<div class="ratings">
<table>
<thead>
  <tr>
    <th></th>
    <th>chorus</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>
      <b>User experience</b><br />
      <small>How comfortable would you be if you let your mom use it</small>
    </td>
    <td>
      ★★★★★<br />
      <small>Deliberately barebones and straightforward</small>
    </td>
  </tr>
  <tr>
    <td>
      <b>Charter experience</b><br />
      <small>From uploading your charts, presenting them, to keeping them up to date</small>
    </td>
    <td>
      ★★★★☆<br />
      <small>The drive submission and approval process can take time and isn't straightforward, but is a one-time process. Maintenance is synced with Google Drive.</small>
    </td>
  </tr>
  <tr>
    <td>
      <b>Searchability</b><br />
      <small>Ability to find what you're looking for</small>
    </td>
    <td>
      ★★★★★<br />
      <small>On first interaction</small>
    </td>
  </tr>
  <tr>
    <td>
      <b>Availability</b><br />
      <small>Ability to actually download the charts</small>
    </td>
    <td>
      ★★★★★<br />
      <small>Automatically removes dead links</small>
    </td>
  </tr>
  <tr>
    <td>
      <b>Quality</b><br />
      <small>Overall confidence on quality of charts</small>
    </td>
    <td>
      ★★★★☆<br />
      <small>Verified charters are in blue, have to clean up old drives</small>
    </td>
  </tr>
  <tr>
    <td>
      <b>Contemporariness</b><br />
      <small>Inclusion of Clone Hero features, also an indicator of activity and ability to keep charts up-to-date</small>
    </td>
    <td>
      ★★★★★<br />
      <small>Clone Hero-centric, active (and verified) charters, feature indicators</small>
    </td>
  </tr>
  <tr>
    <td>
      <b>Exhaustivity</b><br />
      <small>Chance of finding a chart for any particular song</small>
    </td>
    <td>
      ★★★★☆<br />
      <small>20,000+ songs</small>
    </td>
  </tr>
  <tr>
    <td>
      <b>Community</b><br />
      <small>Ability to interact with people on their charts, feedback loop</small>
    </td>
    <td>
      ★☆☆☆☆<br />
      <small>Can contact the charters who are featured, I guess</small>
    </td>
  </tr>
</tbody>
</table>
</div>

Where some platforms put the users, players and charters first, chorus actually puts the charts first: a download is only a few words and clicks away.

Instead of requiring the charters to potentially migrate to a new hosting solution and/or uploading to multiple places, chorus leverages existing methods of hosting and sharing to reduce maintenance cost for the charter.

chorus leverages metadata from both chart files and metadata files (`song.ini`) to extract indexable, meaningful information.

Automatic dead link litigation answers the Frets on Fire and ScoreHero problems. The most up to date links are synced daily.

There is no rating system nor comments, but rather a meritocracy that relies on the existing CH Discord charter role system. chorus is therefore indirectly supported by a team of skilled and experienced chart reviewers. Though also directly, because I also belong to these chart reviewers.

It is deliberately wielding "Clone Hero" in its backronym to center its experience around Clone Hero, and reflects it by showing and supporting latest Clone Hero features.

More than a hundred drives were approved, more and more drives get approved and more and more charts get added everyday by a dedicated community, which chorus totally relies upon.

The last stars on charter experience, quality and exhaustivity are definitely workable through development of new features and cleanup. As for community, adding to community comes with its fair share of responsibilities and features to maintain and moderate, which is why chorus makes the choice to only be a front to look for charts.

![Screenshot of the homepage of chorus](/assets/1-year-of-chorus/chorus.jpg)

chorus is most definitely not a perfect, end-all solution, but it did try to hit the most bullet points as possible, while also not being too ambitious. Because sometimes, less *is* more.

Thanks for reading! The next article will most likely be about the technical aspects of chorus, and how they could be improved.

[Discuss on reddit](https://www.reddit.com/r/CloneHero/comments/aeo35n/1_year_of_chorus_a_history_of_looking_for_charts/)
