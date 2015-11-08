## Collaboration & Versioning
Reflections on NoteCards sees collaboration and versioning as separate challenges, but I suspect one is the answer to the other. Although the first hypertext implementation, NLS Journals, were designed to be online and multi-user, most hypermedia systems since then have been intended for a single user. 
- the big picture of hypermedia isn't a series of disconnected documents, its a massive network where everything is linked together and authors and audiences are one.
- FRP value vs stream =~ git revision vs HEAD

So, what are the challenges posed by collaboration? Well, how would we implement this system today? If we put a stack up on the BBS now, how would we work on it together without clobbering each other's changes? How would we fix stacks that, whether through malice or accident, are put into an unusable state? 

While you're thinking about that, lets look at a different challenge -- the publishing workflow. What would a hypermedia magazine look like, and how would publishing work? What would a hypermedia publishing _industry_ look like? If hyperzines are cross-referencing each other, or fact-checking each other, how would transcluded quotations point to the document at a certain point in time, or the most recent version? 

A third question: how do we distinguish between collaboration and commentary? An editor's notes a different kind of thing than the article they're marking up. If I'm making a stack that, I don't know, annotates rap lyrics with lyrical analyses and citations of referents, the annotations are a distinct entity from the annotated items. And if, for God knows what reason, publishers wanted the public to respond to articles in real time, those comments would be a different body of work than the original article. And considering the kinds of Letters to the Editor that publications print, just _imagine_ what horrible bullshit they throw away. Just like any newsgroup, they're going to want a means of moderating discussions.

The technical answer to this question is the pervasive use of version control, transclusion, and first-class systems of identity. I'm gonna handwave over exactly how this would work, but the general idea is that disk space is growing at an exponential rate and in the future it will be possible to store not just the current state of a hypermedia document but every state it has ever been in. When we work on a document together, we can work on separate branches and then merge then when we're done, or even have our changes continuously zipped together via an operational transform. Annotations and comments would work via a mutual transclusion -- if you write something and I comment on it, I'm transcluding your original article into my document and you're transcluding my annotations into your publication. Notions of identity allow you to manage, to some extent, the privacy of a document, decide who's version of a document is the authoritative one, and facilitate things like whitelisting or blacklisting changes and annotations made by others. 

- something about code is data, and the DVCS model is useful for sharing code as well as managing data
- The data model of HyperCard, modeled after smalltalk and lisp machine images, purposefully blurs the line between the application code and user data. 

- The human side of this is more complicated. The more we open ourselves to collaboration and community-building, the more time and effort we need to spend moderating those communities.
- We've all given up on newsgroups or chatrooms because of the destructive force of just a handful of griefers; imagine what our lives will be like when there are trolls wherever we go.
- This describes a set of primitives for managing state and access.
    + every community has different needs, and they should be free to build something that fits their needs instead of using a one-size-fits-all solution
    + but users shouldn't be expected to work in these primitives -- they should be able to use this in terms of their domain objects, not in terms of the version graph
    + we'll know we've failed if the standard way to manage versions is with a command-line tool
