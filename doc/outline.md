# Introduction

## Why Computers
    - what is it that we like about computers
        + desktop publishing: writing and design, not paper and glue
        + games: lost in virtual worlds
        + internet: community in cyberspace
    - ideas take form without physical constraint
    - software is other people's ideas we get to inhabit
        + DP is still creating artifacts for printing
        + games let you explore, but you can't change the rules
    - how do we express ideas that don't fit in other people's programs?

## Learning to code
    ```
    My first computer program:
    10 PRINT "BUTTS"
    20 GOTO 10
    ```
    - you must learn how to code
    - i find programming intrinsically satisfying
        + while other kids were riding bikes, i was writing BASIC
    - learning how to code at a professional level sucks
    - my ideas are not intrinsically better because i was willing to suffer
    - industry's lack of imagination
        + take what you're given
        + write from scratch

## Users to Programmers
    - we pretend there are only users & programmers
        - vast range of human experience between these poles
        - we do nothing for them
    - culprits on both sides
        - commercial software sees little upside in serving power users
        - programmers want programming to be hard
            - "not real programming"
            - "dumbing it down"
            - noobs haven't paid their dues
            - schoolboys perpetuating generations-old hazing rituals

## Hypermedia
    `card, showing links`
    - there are software paradigms that can serve the whole spectrum
    - hypermedia: nonlinear connection of documents connected by hyperlinks
    `stack, with linked cards`
    - covers many software use cases with zero code
        - interactive presentations
        - databases
        - simple games
    - good substrate for small bits of traditional programming

## History of Hypermedia
    ```
    Timeline of Hypermedia systems:
    1945: Vannevar Bush, "As We May Think": hypertext via microfiche
    1960: Ted Nelson, Project Xanadu: names "hypertext" and "hypermedia"
    1968: Doug Englebart, NLS/Augment: first implementation
    1970s-80s: a bunch of stuff
    1988: HyperCard
    ```
    - idea at last as old as computers
    - many implementations going back to 60s
        - limited to research labs & massively expensive workstations
    - hypercard takes ideas from hypermedia & OO and puts in any Mac

## Future of programming
    `bret victor`
    - what does HyperCard _mean_?
    - not the end goal, just what we have today
    - lets imagine what this could look like in 25 years
    `darker with ?`
    - computers will be more powerful
    - internet will be widespread
    - need vision to imagine world without barriers between users/programmers
    `2 questions`
    - how will people across different levels of expertise work together?
    - what role will programmers, as we understand them today, play in 2016?

# Technology

## Authors
    - authors: category of people between users and programmers
    - people who have embraced hypermedia
        - replacing/augmenting traditional media e.g. print/film
        - media savvy, interested in tech, but not programmers
    - what will their work look like, how can we empower them

## Transclusion
    `layers`
    - a lot of problem solving is finding the right abstraction
    - common challenge in hypercard: share layout for different content
    - hypercard uses layers
        - independent foregrounds, shared backgrounds
        - content in foreground can refer to fields in background
    - hypercard lacks general-purpose abstraction
        - only two layers
        - layers are whole card, not arbitrary groups
        - how can we enable this without compromising simplicity?
    `hyperbuzz`
    - transclusion
    - embedding part of one document inside another
    - related to idea of links, except embedding instead of referencing
    `hyperbuzz with annotations`
    - allows for much more granular separation of content and presentation
    - transclusion is more flexible than layers
---
compare:
single vs multiple version of transclusion: frames, iframes, images
encapsulation vs import code into global namespace
one format vs distinguishing between importing code & importing content

(in version control section) software should figure out if transclusions are inlined or fetched live, not user; asking them to manage file dependencies is like asking them to manage memory
---    
    `911 is a joke`
    - annotations
    - they were imagined in an academic context but have other uses
    `no its becky`
    - threaded conversations
    - transclusions can nest
---
transclusion doesnt give you write access on their document
your commentary belongs to you, is on your stack
---    

# What this enables

## User Friendly
    `hypertalk code sample`
    - I've talked a lot about my vision for the technology of 2016
    - now lets look at the role of programmers and programming in this future
    - hypercard's language is hypertalk
        - user friendly natural language etc
        - natural language aspect is overstated
        - english words != program in english
    - user friendly is never friendly enough
        - all code is a necessary evil
        - how little can you write to get the job done
        - a trade-off between clarity and accessibility against programmer time
        - Turing completeness is last resort

## Code as infrastructure
    `infrastructure pipes`
    - flip side of this is professional programmers wont go away any time soon
    - programming will be a supporting role, like infrastructure
    - as we depend on hardware engineers, authors will depend on us
    `steps on user -> programmer chart`
    - authors are not monolithic group
        - some will be best supported with plug-and-play widgets
        - others will want highly customizable frameworks
        - we must build software with affordances at many tiers
        - good software can teach people the way

## Widgets
    `widget example`
    - most prevalent abstraction will be widgets
        - acknowledge this is a contrived example
        - interactive object, transcluded, black box
        - self-contained allows collaboration with independent work
    `Edit Script: widget opened for configuration`
    - just because it can be black box doesn't mean it must be
        - boundaries should be permeable
        - provide clear configuration & customization

---
the flow here needs to be more explicit
---

## Customization
    `pattern language`
    - A Pattern Language
        - role of customization over time in architecture
        - process of customization makes buildings useful
        - accrual of idiosyncrasy makes buildings beautiful
    - adaptability & evolution
        - encourages a feeling of ownership deeper than property law
        - fashions come and go, timeless style emerges
    `emacs`
    - same process affects software
    - Emacs has already been around for fifteen years
        - could very well be around in a hundred
        - it wants to be customized
    `home stack`
    - HyperCard encourages similar pattern of ownership
        - Home stack isn't just a demo, its the portal into hypercard world
        - preferences are configured in home stack
        - three blank pages to fill in with stacks you've made or collected
    - This is the standard we should be living up to with the tools we create
    - make the whole hypermedia authorship experience _ownable_

## Ecosystem
    `apple widgets`
    - where do widgets come from?
    - Ideally, a lot of them will be built-in
        - Apple provides many, e.g. the slide navigation
        - this is HyperCard's standard library
    - also a small community of third party widget makers
        - some sell commercially, many distribute as freeware
        - community is small now but growing fast
        - ecosystem will eclipse and eventually dwarf first-party
    `hpm`
    - ecosystem is its own kind of collaboration
        - people who have never met become interdependent on each others' code
        - de facto standards crystalize around first-party reference impls.
    - first-party needed most for providing infrastructure to ecosystem
        - standard tools for finding and publishing widgets
        - everyone is on same version control, mitigating dependency hell
    - ecosystem needs to work at both ends for people with different skills
        - publishers and consumers
        - programmers and authors
        - programmers will also consume widgets
        - authors will also publish widgets they've modified / composed
        - different needs and workflows for shared goals
        - programmatic and graphical views on the same software
---
TODO: handle "left-pad" criticism

## Workflows & Frameworks
    `wordpress admin`
    - unit of abstraction won't only be widgets
        - common workflows and widget collections will aggregate into frameworks
        - different needs for knowledge bases, online magazines, adventure games
        - groups will develop their own standards, ecosystems, social mores
    - programmers see frameworks as moral hazard
        - fragment ecosystem
        - encourage inefficient code
        - rot young minds
        - this is programmer chauvinism
    - frameworks do create own ecosystems
        - doesn't preclude one from using non-framework code
        - "why isn't this vanilla hypercard?" envy
        - cultures around frameworks onboard into the community as a whole
        - frameworks as lab for patterns and idioms to mature
    - frameworks do add a layer of indirection
        - all software is indirection
        - frameworks rely on hypermedia systems  
        - hypermedia -> OS -> hardware -> microcode -> chips -> transistors...
        - Even physicists depend on abstractions
        - Every layer is a trade-off between machine & human efficiency
        - we're not doubling the number of neurons in our brain every 18 months
        - I think its fair to put the burden on the machines.
    `glowering dijkstra`
    - new programmers will learn frameworks before they learn the fundamentals
        - all learning starts with concrete concepts before abstraction
        - we learn how to speak by repeating words & phrases
            - experiment as we discern patterns
            - formal knowledge of syntax & grammar comes much later
    - "When I was a noob, I spoke like a noob, I thought like a noob..."
    - if framework allows productivity without understanding, the system works
    - if people don't want to become experts, that's their prerogative
    - outgrowing framework isn't bad, its fulfilled its purpose
    - we don't need to perpetuate "rot your brain"
        - Dijkstra's still gonna think you're an idiot
        - you didn't learn by writing proofs
    - new programmers will learn from frameworks
        - we can make frameworks that grow with them
        - provide path: scripting glue -> business logic -> modifying core
        - demonstrate ideal coding practices / design patterns

# Conclusions

## Products of the times
    `brain bike`
    - hypermedia is the work of philosophers as much as engineers
    - design goals are products of the times
        - as we may think after WWII
        - response to military-industrial complex
        - eye of technology back to peace
    - 1991 is a much different world than 1945, but same premise applies
        - unease about role of technology
        - home computer industry from nothing in ten years
        - computers are easier and cheaper
        - no higher purpose towards enriching humanity
        - just side effect of making money
    - computers & software become more appliance-like
    - extensibility, if at all, is "pro" feature
    - last 20 minutes has been about hypercard for everyone
        - once was free with every mac
        - now pro software / pro price, with limited free player
        - this reinforces, rather than subverts, user/programmer divide
    - higher level concerns
        - world increasingly dependent on software
        - software isn't being democratized
        - programming becoming elite field for rock stars & 10xers
        - software industry recapitulating the excesses of the gilded age
        - technology as the lever of class stratification vs railroads & oil

## Bicycle for the Mind
    - Jobs quote
    > I read a study that measured the efficiency of locomotion for various species on the planet. The condor used the least energy to move a kilometer. Humans came in with a rather unimpressive showing about a third of the way down the list....That didn't look so good, but then someone at Scientific American had the insight to test the efficiency of locomotion for a man on a bicycle and a man on a bicycle blew the condor away. That's what a computer is to me: the computer is the most remarkable tool that we've ever come up with. It's the equivalent of a bicycle for our minds.

    - bicycle increases human ability
    - bicycle is cheap
        - can sink a lot of money into nice one
        - even a single-speed huffy gets the job done
    - eminently fixable, understandable
    - suitable for children at play & adults at work
    `black screen`
    - today's computers are not bicycles
    - instead we have a car for the mind
        - gets you around, easier, more comfortable
        - world of cars -> urban sprawl, air pollution, car crashes, oil wars
        - cars are more liability than asset
            - working terrible job to keep car running to get to terrible job


## Conspiracies vs Systematic Injustice
    `(no further slides)`
    - tempting to see this as conspiracy theory
        - hypercard costs money because of pressure from software publishers
        - if everyone can write own software, nobody buys theirs
    - conspiracy: world would be fair if there weren't outside interference
    - no conspiracy is necessary to support the status quo
    - wealth inequality
        - doesn't require an international cabal of bankers
        - just cost-of-living and compound interest
    - hypercard
        - pro software prices = money today
        - no rewards for future they enable in 25 years
        - entirely consistent with Mac as a toy for wealthy dilettantes
    - tech inequality doesn't require conspiracy against free software
    - i can imagine a world built on free software with
        - anticompetitive practices
        - institutional prejudices
        - culture of credentialism
        - venture capital bubble
        - tech workers need to live in the most expensive cities in the country
    - i can imagine...
        - computers are 1000x more powerful than today
        - everyone has equipment to make hypermedia we cant even imagine
        - tools are so arcane nobody can use them
    - in my darkest moments i can imagine a 2016 where ...
        - everyone is constantly connected to a global network of computers
        - the whole system is designed to show ads / spy on us
    - technology is an open feedback loop
        - these are products of the system as much as they are causes
        - for a better world, it must be the conscious goal of every decision
    - on the wrong trajectory today, but not doomed
        - SRI and ARPA show that we can repurpose military tech for peace
        - Bell Labs & PARC show that commercial tech can fund basic research
    - world changing tech can come from anywhere
        - "for all we know the technology that dominates the next 25 years could come out of a side project at a European particle accelerator."
        - these are exceptional cases
        - the future we want requires all of our participation

    - I've presented you two visions of 2016
        - we use a global hypermedia system to increase human understanding,
        - we use it to shackle ourselves to the commercial software industry
        - The basic technology is the same
        - all the difference lies in how we choose to use it
