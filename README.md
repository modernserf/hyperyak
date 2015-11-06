# The Origin of HyperCard in the Breakdown of the Bicycle for the Mind
---

# Introduction

What is it that we like about computers? Surely, part of it is that it helps us get stuff done. There are thousands of businesses out there that depend on word processors and spreadsheets and databases. A lot of people out there really love computer games; there's something about inhabiting a virtual world that really connects with them. A select few of us _in cyberspace_ are interested in how it can be a communicator -- how we can interact with people in our community or around the world.

The concept that ties these all together is that the computer is a land of pure imagination, where we can let our ideas take form without physical constraint. This is the fundamental promise that computers make to us. But spreadsheets and zork and email are all other people's ideas that we get to inhabit; we are fundamentally limited in what we can do with them. How do we think thoughts that are too big for other people's programs?

In many cases, this means you have to become a programmer. Now, I love programming. There is something intrinsically satisfying about it for me -- when the other kids were riding bikes around the block, just for the sake of riding bikes, I was typing `10 print "butts"; 20 goto 10` into a BASIC interpreter. But getting from there to writing anything nontrivial? Frankly, it sucks. Even ignoring the cost of development software, the prospect of writing your own program from scratch is daunting, and a huge distraction from the problem we were trying to solve in the first place.

There are culprits on both sides of this equation: first, there are the commercial software companies. Unless they specifically make their tools scriptable and extensible, which most of them do not, all that we can do with their software is what they want us to do. But the other side of this, the community of programmers -- we're also responsible. There's a part of our culture that _wants_ programming to be hard; there's a belief that if you are not willing to be the computer's servant, you don't deserve to be its master. We relish in incidental complexity, like schoolboys perpetuating a hazing ritual.

## Definitions and History

But there are some forms of expression that live in the space between users and programmers. The one I'm going to be talking about today is hypermedia: in its simplest form, its a nonlinear collection of linked documents. The germ of the idea goes back to at least the dawn of computers -- Vannevar Bush, in his essay As We May Think, imagines the Memex -- a collection of the world's knowlege in microfiche, with an automated system for travelling between cross-references. The term itself comes from Ted Nelson's Project Xanadu from the early 60s; although this has never released any software, a lot of the theory and terminology of hypermedia comes from here. In Nelson's vision, hypermedia is not just a format for publishing existing information but a form of creation -- hypermedia empowers you to write nonlinearly and therefore helps you to _think_ nonlinearly.

The wonderful thing about hypermedia is that its an incredibly expressive medium that could only exist on a computer, but writing it is nothing like writing software. You can build presentations and educational tools and even some simple games without having to think about how the computer will actually implement it. Its a paradigm abstract enough to encompass a vast range of ideas, but simple enough that you don't get bogged-down in implementation details.

There have been quite a few implementations of hypermedia systems since then -- the first one being part of the online system built by Doug Englebart's team at SRI -- but until fairly recently they've been limited to research labs and massively-expensive workstations. All this changed with HyperCard, which takes ideas from hypermedia and object-oriented programming and puts them into an environment that runs on a Mac or a IIGS. 

# challenges and predictions
Now, HyperCard is fascinating stuff and I've got a lot to say about it, but I'm even more interested in what it signifies, and what it could lead to in the future. The team that developed HyperCard's immediate predecessor, Xerox's NoteCards, put together a list of seven unsolved challenges for future hypermedia systems: navigation, composite pages, dynamically-generated pages, computation, versioning, collaboration, and extensibility. They were specifically looking at the next generation of hypermedia systems, but i'm going to take the long view -- in the spirit of Bret Victor's landmark paper "The Future of Programming", we're going to look at the modest tools of 1990 and imagine what they will lead to in 25 years -- in other words, how will hypermedia shape the world of 2015?

## Navigation
The first question is around means of navigation -- links and search. The primary means of navigating through hypermedia is by following links, but this breaks down as the size of collections increases, or if the nodes aren't structured in a way that lends itself to hierarchical indexes. For example, one of the foundational use cases for hypermedia is in knowledge bases, which require indexes -- more on those later -- but become vastly more useful when you can search them. Now, most hypermedia systems have some form of full-text search. Many also have provisions for searching the metadata that forms the basis of their indexing systems. 

What we're missing are systems for searching structurally; that is, finding relationships between pages based on their links. One obvious use case, particularly in a large and noisy data set, would be ranking search results by relevance based on not just the content of the pages but also the pages that it links to and those that link to it. But that's only the beginning. When hyperlinks are used as a means of citation, structural analysis of the links can reveal things like circular references and **TKTKTK**

- what social changes does this require?

## Beyond Pages & Links
The next two challenges, composite and dynamically generated pages, are rooted in the limitations of the page-link model. Composite pages -- pages composed of other pages -- are explored all the way back to Ted Nelson's Xanadu, in a concept he calls transclusion. The simplest implementations of this would split a card into frames -- for example, a table of contents on one side with the content on the other. But more sophisticated forms of transclusion could be used to insert content into the flow of the document -- no longer just links but sourced citations. 

Dynamically-generated pages include the aformentioned indices and tables of contents, as well as automatically generated document outlines. Another version of this would be an even more dramatic separation of content from presentation -- for example, the same content could be presented in different formats for teachers and students, or authors and readers. These, as well as the more advanced uses of transclusion, suggest that the content of the documents are heavily annotated with metadata, and indicates that the data must be strucutred much more like a database than a homogeneous document.

- form elements
    + hypercard offers neither composites nor indexes as primitives -- those are implemented in userland -- but it does extend the page & link model
    + hypercard primitives are layer (graphics) - field - button 
    + something about standard implementations of common forms, even if they're imperfect, provides a common vocabulary for a community of programmers

- content vs presentation
    + useful distinction in many cases, but the line is never as clear as you want it to be
    + foolish to try to define exact barrier -- we can intuit that a hot dog is not a sandwich, but hard to define why
    + sometimes, we'll be able to make the divide; sometimes we'll want to keep them together, sometimes we may want even more gradations -- e.g. data, layout, decoration 
    + pure hubris to think that one could design a system in which, say, content is described entirely with one language, and presentation in another
    + wouldn't it be hillarious if we had created such a divide and yet we still weren't sure how to vertically center text in a box?

- hypercard background / foreground modes
    + microrant about why modes suck
        * nanorant about lightboxes
- widgets are copied, not transcluded
- shared component, unique state 

HyperCard acheives this with a background/foreground model -- the layout of the slides of this talk are stored in the background, but the content is stored in the foreground **TK TK**

- how does this affect the "rhetoric of hypermedia?"

## Computation & Extensibility
- hypermedia is a fundamentally limited format. Its a surprisingly versatile one, but it seems silly to be using a computer and refuse to compute
- And even if we were to stick with a purely declarative document model, there would still be structures of media that the designers of the system wouldn't have considered 

HyperCard bridges the gap between users and programmers -- you can make presentations and rich media and even simple games without writing a single line of code. But crucially, it also includes a huge library of stacks, widgets and templates -- some for people who are just learning to code and need pieces that they can put together like Legos, some for people who code pretty well but just need some design guidance. HyperCard has something for you at every stage of your development.

One of the wonderful things about the Smalltalk and Lisp machines, that the original Mac just didn't have the horsepower for, was that all the software was open -- you can see the source code and the assets and even stuff like the object hierarchies and event systems of the programs as they run. HyperCard's tools aren't nearly as sophisticated as the ones that Symbolics offers, but they run on a computer that doesn't cost as much as a house.

And there's one last thing I want to point out -- its very small, it could just be an artifact of disk space considerations, but -- HyperCard wants to be customized. All of the tools I mentioned before, as well as the actual configuration for HyperCard, are done from the Home stack. The Home stack is 
designed for you to edit it -- it even gives you three blank pages to fill in with links to your own stacks. One of the core patterns in Christopher Alexander's A Pattern Language is that our tools, our homes, our neighborhoods -- its the act of customization that makes them our own and that makes them beautiful. This is the same thing that the free software people mean when they talk about the hacker ethos and why they love Unix and Emacs. This small detail more than anything else speaks to me about the design goals of the team that makes this.

- computation
    + something hypercard fundamentally gets right was that it was ideologically impure -- it's much more focused on providing an environment for experimentation than fulfilling any ideals about hypermedia
    + hypercard uses HyperTalk / event model
    + deeply influenced by both smalltalk (object-oriented) and shell scripting (string-oriented to a startling degree)
    + has pretty good debugging tools
    + no matter how "user-friendly" a programming language is, its never friendly enough
    + code is, itself, a code smell -- an indication of incidental complexity
    + programmers, as we understand the term today, are only going to be a small fraction of the authors of hypermedia systems. Are we really going to present everyone else with a glorified word processor and tell them they can go no further?
    + don't let programmer chauvanism trick us into thining that emulating a 70s teletype is the ideal form of human expression
    + we must consider Turing completeness our last resort
- extensibility
    + extensibility is going to be enabled by programming, but not only for programmers
    + one of the things that makes programming feel magical is that we can use our tools to improve themselves
    + systems like HyperCard bring that magic to a wider audience
    + reflections specifically calls out hypercard and emacs as examples of extensibility
    + (section ref Pattern Language goes here)
    + need a better way to package reusable components
    + hypercard relies on a lot of hacks to get the drag-and-drop components to work
    + black-box model (pure transclusion) discourages modification / learning, but copy & paste duplication is brittle -- we need something that adapts to both
    + sharing components between projects is going to be important -- foreshadow collaboration section, lampshade github, reference open source as it was in 1990
    + programmers that build tools need to think about how their tools can be accessible to people of varied skill levels, including people who are snapping pieces together
    + when programmers make tools that only other programmers can use, they're effectively helping "the rich get richer"
    + programmers that build user-facing software will need to build affordances for users to customize their tools
    + there may come a time where, just as users and even many programmers never interact directly with hardware, users may also never directly interact with software written by someone writing code
    + software development is ultimately a support role for the people doing the real work

## Collaboration & Versioning
Reflections on NoteCards sees collaboration and versioning as separate challenges, but I suspect one is the answer to the other. Although the first hypertext implementation, NLS Journals, were designed to be online and multi-user, most hypermedia systems since then have been intended for a single user. 
- the big picture of hypermedia isn't a series of disconnected documents, its a massive network where everything is linked together and authors and audiences are one.

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
- Every community will have different mores and different requirements for their collaboration and moderation thereof, best to provide low-level access to version control and identity and let communities build their own solutions, rather than imposing a one-size-fits-all system
- empathy important on moderation side as well 
    + lampshade linus' rants
    + forking a community should be a last resort
    + prophecy of eternal september
    + communities live and die by their ability to welcome new people

# Predictions as reflection into ones own time

Hypermedia is the product of futurists and philosophers as much as it is of engineers and scientists. Its important to acknowledge that predictions are a product of the time in which they are made. As We May Think was written during the end and immediate aftermath of the Second World War, and the desire to turn the eye of science and technology away from war is a response to what we now know as the Military-Industrial Complex. 

1990 is a much different world than 1945, but there are definite similarities -- we too are living at the conclusion of a war of sorts with the fall of the Iron Curtain. But this is a war fought culturally and economically -- as the first computers were instrumental in the Allied victory back then, the personal computer and tech industry have been a driving force of capitalism.

# The Bicycle for the Mind

There's a metaphor that Apple uses to talk about the personal computer -- the bicycle for the mind. Quoting Steve Jobs:

> I read a study that measured the efficiency of locomotion for various species on the planet. The condor used the least energy to move a kilometer. Humans came in with a rather unimpressive showing about a third of the way down the list....That didn't look so good, but then someone at Scientific American had the insight to test the efficiency of locomotion for a man on a bicycle and a man on a bicycle blew the condor away. That's what a computer is to me: the computer is the most remarkable tool that we've ever come up with. It's the equivalent of a bicycle for our minds.

## Why bicycles?
- the idea of the Bicycle for the Mind is an important metaphor on a lot of levels
- both in the mechanical sense, of a tool that increases human ability but also in the sense of being something kind of cheap and democratic
- instead of creating a bicycle for the mind, we’ve created a car
- which creates a car culture, air pollution, auto accidents, cities designed against pedestrians, the suburbs etc
- the automotive industry has a self-perpetuating virus quality that the computer industry follows

## Conspiracies vs Systematic Injustice
- auto industry conspires against streetcars
- apple changed hypercard from free to paid under pressure from commercial software publishers
- but no conspiracy is necessary to support the status quo, only indifference
- National City Lines was only one small part of the car-ification of America
- the commercialization of HyperCard is Apple trying to increase revenue
- wealth inequality doesn't require an international cabal of bankers, just cost-of-living and compound interest

Technological inequality doesn't require a conspiracy against free software. I don't know about you, but I can imagine a world where the whole tech industry is built on top of free and open source software, and yet anticompetitive practices, institutional prejudices, a culture of credentialism, the venture capital bubble, and the idea that tech workers need to live in the most expensive cities in the country are still endemic issues. I can imagine a world in which computers are a thousand times more powerful than they are today, and nearly everyone has the equipment to create hypermedia-powered software that we couldn't even imagine now, but the tools are so arcane that next to nobody has the ability to use them. And in my darkest moments, I can imagine a 2015 in which everyone is constantly connected to a global network of computers, but the whole system is designed to show us ads and spy on us.  

These are products of the system as much as they are causes, because technology is an open feedback loop. If we want the power of computing to benefit all of humanity -- if we want to make a true bicycle for the mind -- we can't just assume things will work out that way on their own; we need to make this a conscious goal of every decision we make. 

We're on the wrong trajectory today, but we're not doomed. SRI and ARPA show that we can repurpose our efforts from war into peace. Bell Labs and PARC show that commercial technology companies can direct their money and efforts into research that has revolutionary impact on the world. World-changing technology can come from anywhere -- for all we know the technology that dominates the next 25 years could come out of a side project at a European particle accelerator. But these are exceptional cases -- the future we want requires all of our participation. 

I've presented you two visions of 2015 -- one in which we use a global hypertext system to increase human understanding, and one in which we use it to shackle ourselves to the commercial software industry. The basic technology is the same; all the difference lies in how we choose to use it.

(TUMULTUOUS, SUSTAINED APPLAUSE)

---

# Links
- https://jamesfriend.com.au/running-hypercard-stack-2014
- http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.124.2308&rep=rep1&type=pdf
- http://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/
- https://www.youtube.com/watch?v=ob_GX50Za6c