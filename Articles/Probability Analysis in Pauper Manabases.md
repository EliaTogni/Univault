---
"Titolo:": Probability Analysis in Pauper Manabases
Sottotitolo: 
"Autore:": Apa
"Casa Editrice:": 
"Anno:": "2024"
"DOI:": 
"Link:": https://docs.google.com/document/d/10io3mRzfGO9fQ-XTcToFNN_HWmLWlO-AF5jq7PvXWPI/edit?usp=sharing
---
# Abstract


----------------------------------------------------------------

# Articolo
## Who are you?
The author is Apa, a [[Magic The Gathering]] player which regularly uploads Pauper videos on Youtube in Spanish on his channel. He considers hos strength to lie in deckbuilding more than playing, and this reflects on his content, which is more focused on new deck creations or metagame changes on decks (sideboards, card elections, etc), than meta deck playing. He’s also a huge nerd and really enjoys the theoretical parts of MTG deckbuilding, and probability analysis on gameplay decisions and deckbuilding. Therefore, he tried to provide some knowledge on how to analyze mana bases and other deckbuilding decisions.

-----------------------------------------------------------

## What's this article about?
This piece is mostly designed for those new to deckbuilding or looking to deepen their understanding of deckbuilding fundamentals. The focus of this article is crafting effective mana bases, analyzing deck decisions, calculating colored mana sources and land counts, and taking into account cantrips.

While aiming for accessibility, the author has chosen to prioritize practical guidance over strict mathematical precision, which means he sometimes blends probabilities and percentages to keep the discussion flowing. Please note that some technical liberties are taken for the sake of clarity.

Apa has added a Sources section at the end of the article, and will expand on this if he finds new information or receive corrections, in hoping that this article will be helpful for future deckbuilders or deck tuners

-----------------------------------------------------------

## Trade-offs
In Magic: the Gathering, building an effective mana base requires careful consideration of various **trade-offs**, especially when dealing with multiple colors. Each format presents its unique challenges and strategies. Here are some examples in eternal formats:
- **Modern Format**: In Modern, opting for a three or more colored deck usually means including fetchlands (lands that search for specific land types for $1$ life), shocklands (lands that can enter untapped at the cost of $2$ life), and triomes (lands offering three colors but always enter tapped). These choices can lead to either a loss of life or slower gameplay, weakening these decks against aggressive strategies. For example, starting a game with reduced life or using lands that enter tapped could put you at a tempo disadvantage against fast decks;
- **Legacy Format**: Legacy decks with three or more colors might use fetchlands and dual lands (lands with two basic types that enter untapped), avoiding the downsides of life loss and tapped lands seen in Modern. However, this opens them up to attacks on their nonbasic lands through "land hate" cards like Wasteland and Moon effects (like Blood Moon and Magus of the Moon), which can disrupt their mana availability. Conversely, mono-color decks, such as Mono Red Goblins, can leverage "sol lands" (Ancient Tomb and City of Traitors) for a [[Tempo|tempo]] advantage and include value lands like Cavern of Souls and Den of the Bugbear, while keeping 5 basics in their deck. This deck even plays Blood Moon in the sideboard! This gives them speed, resilience and value, underscoring the intrinsic benefits of mono-color builds.

In Pauper, the tradeoff is much more evident, since all the lands that add more than one color of mana enter the battlefield tapped or have other tempo disadvantages (Crystal Grotto only filters mana or adds colorless, Survivor’s Encampment requires a creature to tap). That means, in Pauper the tempo hit of playing a multicolored deck is bigger, since it means that it will play a high number of taplands, and an aggressive mono colored deck will play most or all untapped lands, thus being able to play a turn faster in a high number of scenarios:
- **mono colored decks**: as an example, Mono Red Kuldotha plays $17$ or sometimes $18$ lands, of which $4$ are Great Furnace and the remainder basic Mountains; this means that as long as it draws lands and spells in a good ratio, it will be able to play on curve without spending time setting up its mana. Moreover, the Great Furnaces work as a value land for cards like Kuldotha Rebirth, Goblin Tomb Raider and Galvanic Blast;
- **two color decks**: on the other hand, a two color deck like Dimir Faeries plays a total of $18$ lands + $4$ Lórien Revealed (for the purposes of this article, I will take Lórien Revealed and other landcyclers as a full land that enters tapped with value in the late game), of which $11$ are basic lands that enter untapped, and the other $11$ lands enter tapped, and it plays a total of $6$ value lands (Lórien, Dimir Aqueduct and Bojuka Bog). Dimir Faeries normally has to play the first couple of turns setting up its mana, and with only one basic swamp, normally it doesn’t have access to untapped black without having to use its resources to set up having access to it;
- **three or more colored decks**: in these types of decks normally the mana base would be super inconsistent or tapped if no measures are taken. This is why when we look at the multicolored decks in the format, we see most decks that play cards to specifically fix their mana for them, like Cleansing Wildfire in Jeskai Ephemerate, Energy Refractor in Tron and Springleaf Drum in Jeskai Affinity. Multicolored decks that don’t play this kind of fixing are UW Gates, that plays $15$ tapped lands and only 9 untapped lands (of which $5$ of them add colorless), and Grixis Affinity plays $10$ tapped lands and $10$ untapped lands, but normally struggles a bit on finding the correct colors of mana to play its spells, and accepts this trade-off because it has a relatively high number of colorless spells to cast in the meantime, so normally it can wait a couple of turns to be able to cast its spells.

In short:
- mono color decks have access to most if not all untapped lands, and free access to value lands;
- two color decks have about $50/50$ of tapped and untapped lands. They normally have access to some value lands and LOTR landcyclers;
- three or more color decks: they require a buildaround to set up their manabase. Multiple taplands, and / or spells to only fix their mana. Normally no space for value lands.

-----------------------------------------------------------

## Frank Karsten Articles are Wrong (for our purposes)
Frank Karsten is a Hall of Famer known for his influential articles on constructing mana bases in Magic: The Gathering. While his work provides invaluable guidelines, the unique characteristics of Pauper necessitate some adjustments to his heuristics. For example, one of the assumptions Frank does in its $2018$ article is:

For turn $1$, only untapped sources count. Evolving Wilds, Selesnya Guildgate, or Sunpetal Grove won’t help you cast Llanowar Elves on turn $1$.

For turn $2$ onward, all sources count. This is a simplification, but as long as you don’t have an insane number of taplands, it adequately captures the color consistency of your mana base.

This simplification is not adequate for the format purposes, since Pauper has decks that play more tapped than untapped sources in some cases. This means that if a player wants to be able to cast Counterspell on turn $2$, we will need to take into account this and calculate the probabilities differently, since we will need either two untapped lands, or one tapped and one untapped land.

Additionally, Frank accepts $90\%$ chances of drawing the correct amount of colored sources for your spell on curve is what we should aim for, and higher percentages for higher costed spells. This means that his calculations are on the “safer” side, since in most formats, playing more lands is not a huge downside, but in Pauper playing more sources means to either play more taplands or a higher land count. Historically, Pauper has been a format of cheaper spells and lower land count to try and prevent flood; this comes from the fact that Pauper’s best spells are cheap ones (Preordain, Lightning Bolt, Kor Skyfisher, etc), and that if a deck needs to play higher costed cards they lean more on cantrips, card draw and/or bouncelands. So, in Pauper we can see decks, like Golgari Gardens, playing fair $5$ drop creatures with only $21$ lands, and this effect is very common (ha!) for Pauper. 

In these calculations, the author will normally shave one or two sources from Frank’s heuristics. This accounts for the differences in expectations in our format vs other formats. I’ll expect about a $5\%$ decrease in consistency throughout the board with these heuristics. 

Below it is possible to observe the author heuristics for colored sources required for specific costs of mana. The fourth column shows the percentage chance of a certain hand to have the required mana sources to play the spell on curve on the play, adding an extra draw for each turn, without taking into account mulligans:

| Mana Cost | Example Spell                        | Minimum colored sources | % to find (no mulls) |
| --------- | ------------------------------------ | ----------------------- | -------------------- |
| C         | Goblin Tomb Raider                   | 13                      | 84%                  |
| CC        | Counterspell                         | 19                      | 80%                  |
| CCC       | Kuldotha Rebirth + Goblin Bushwacker | 22                      | 72%                  |
| 1C        | Kor Skyfisher                        | 11                      | 82%                  |
| 2C        | Sea Gate Oracle                      | 10                      | 83%                  |
| 3C        | Thorn of the Black Rose              | 9                       | 83%                  |
| 4C        | Goliath Paladin                      | 8                       | 82%                  |
| 1CC       | Dust to Dust                         | 17                      | 80%                  |
| 2CC       | Battle Screech                       | 15                      | 78%                  |
| 3CC       | Vampire Sovereign                    | 14                      | 79%                  |

As it is possible to observe, some numbers don’t align with what we see in some decks. For example, no mono red deck that plays Kuldotha Rebirth and Goblin Bushwhacker plays $22$ sources of mana. This is because in Pauper deck skews towards playing less lands to avoid flood, in exchange for not being able to play on curve consistently. That means, the probability of a Mono Red deck to be able to play Kuldotha + Bushwhacker on turn $3$ is about $50\%$, which is not consistent to be considered part of the deck’s plan. The deck is not built to play this combination on curve, but rather to avoid flood in the late game, and have consistent access to two mana on turn $2$ ($73\%$) or $3$ ($79\%$).

On the other hand, Black Gardens plays $6$ sources of green $+3$ Troll of Khazad-dûm $+ 4$ Deadly Dispute to cast Avenging Hunter on curve, which should be more than enough ($86\%$ without taking into consideration Deadly Dispute, $95\%$ with it).

The author calculated these numbers by using a [Hypergeometric Calculator](https://stattrek.com/online-calculator/hypergeometric). This is an incredible tool that Apa will be using for the rest of the article. It’s a tool that calculates the probability of events in card games to happen, given some parameters. The first parameter is the number of cards in your deck, the second the number of cards you want to see (in this article we are focusing on lands of a certain type), the third parameter is the cards you see for the event ($7$ is an opening hand, $8$ for turn two since we draw a card on our turn two on the play), and the fourth parameter is the number of cards you want to see from the successes (i.e. lands). The number we are going to be looking to know the probability is the last number “Cumulative probability: $P(X \geq n)$”; this gives the probability of seeing at least $n$ cards with the parameters given.

Here are some examples:<br />
Probability of seeing an opening hand of two lands in Mono Red Kuldotha with $17$ or $18$ lands:

immagine

This would inform that $65\%$ of hands with $17$ lands see $2$ lands, whereas it's $69\%$ for $18$ lands. Additionally, we can calculate the chance with mulligans. For example, for $17$ lands the probability of not seeing a hand with $2$ lands after one mulligan is given by the probability of mulliganing once times the probability of not hitting $2$ lands. That is, $0.35 \times 0.35 = 0.1225 = 12\%$ chances of not seeing $2$ lands after two hands. For $18$ lands on the other hand, it would be $0.315 \times 0.315 = 0.1 = 10\%$. This gives the information that if we are willing to mulligan to a hand with $2$ lands on it, it would be needed to mulligan to $5$ about $12\%$ of the time. Note that this doesn’t take into account mana flood. Assuming that $4$ lands is always too many, what would the probability of seeing at least $4$ lands in the opening hand with this setup be?

immagine

That means, for $17$ lands there’s a $9\%$ of flood in any given hand, and for $18$ lands an $11\%$. We can calculate the chances of seeing only $2$ or $3$ lands in your opening hand by calculating the inverse first. What is the chance that we see $1$ or fewer lands or see $4$ or more lands? That’s $0.35 + 0.09 = 0.44$ for $17$ lands and $0.31 + 0.11 = 0.42$ for $18$ lands. That means, with this simple heuristic we can see we would mulligan less with $18$ lands. For fun, with $19$ lands it would be $28\%$ to see one or less lands and $13.5\%$ to see $4$ or more, adding up to a probability of $0.415$. I would argue that the best build right now for this deck to lower the amount of mulligans is to play $18$ lands, since $19$ doesn’t improve all that much (half a percent) and could flood more in the late game.

As it can be seen, this can inform us the probability of mulliganing with a certain heuristic. This is specially useful for decks that have a very simple heuristic. For Mono Red, I generally decide to never keep a hand with less than $2$$ lands on $7$ or $6$, so I can see the amount of mulligans expected with this setup. If I find this too much, I can up the land count by one to mulligan less often, and even see the improvement in numbers! This is the power of knowing how to calculate probabilities, you can make informed decisions without having to experiment a lot to see what works and what doesn’t.

For Dimir Faeries, on the other hand, we have a total of $22$ lands if we count Lórien Revealed as a full land (which I will). This deck is a good example for this article because it plays cantrips like Preordain and “turn $2$ lands” like Lórien Revealed and Dimir Aqueduct. Let’s start by seeing how turn 2 lands work. You can’t keep a hand with only Lórien Revealed and Dimir Aqueduct because they need another land in play to be useful. This means that if we want to calculate the probability of having a certain amount of lands in our opening hand, we will need to calculate the probability of t$2$ land + t$1$ land or two t$1$ lands by themselves. For the sake of the argument, let’s assume that the heuristic to keep a hand with this deck is to always look for at least two lands in our opening hand, and if we have less we just mulligan. The probability of this event to happen is a bit more complicated than with Mono Red Kuldotha, since we have t$2$ lands to take into account now. 

We can separate this event into two different ones:
- (a) $1$ “t$1$ land” and $1$ “t$2$ land”. $P(a) = 0.90 * 0.47 = 0.42\%$

immagine

- (b) $2$ “t$1$ lands”. $P(b) = 61\%$:

immagine

The probability of mulliganing is the inverse of both, that is, that both don’t happen at the same time. This is $P(mull) = (1 - P(a)) \times (1 - P(b)) =  0.58 * 0.39 = 0.23 = 23\%$.

That means, the probability of seeing a hand with $2$ lands that works is $77\%$. 

What happens if we also add the requirement of having access to both colors of mana in our opening hand?

This deck has $12$ sources of black if we take into account Lórien as a full black source (it’s not uncommon to cycle Lórien for a dual in this deck, and the tempo loss is not as backbreaking thanks to Snuff Out in particular). Then, this deck also has $20$ sources of blue. If we take for granted that we have enough land to play, the probability of seeing both colors is $80\%$ for black and $95\%$ for blue:

immagine

So, the probability of seeing both colors of mana is $0.8 \times 0.95 = 0.76\%$.

Note that since both probabilities (having $2$ lands and having both colors of mana) aren’t independent, we can’t just multiply the numbers together to get the probability of keeping with our heuristic.

-----------------------------------------------------------

## Cantrips
Disclaimer: this is not mathematically sound, we are starting to enter the realm of “close enough” mathematics. Sorry! Feel free to send me a comment with fixes and better models if you have any.

In Dimir Faeries we have cantrips. These are cards that replace themselves and in this case provide card selection. In this deck we have Preordain and Brainstorm as cantrips. After playing a ton of this deck, I know I’m not using Brainstorm to find my second land unless I don’t have any other choice, so I’ll not take it into account for this section. Preordain, on the other hand, can help us find our land drops early in the game, since it looks at 3 cards and we can keep any lands we see there. This is very useful for the deck! Can we calculate the probability of seeing at least one land in the top $3$ cards of our deck? Well, we can mathematically calculate specific scenarios, but we can’t do a “general case” for our cantrip because of a lot of different specifics. For example, how many cards are there in the deck, how many lands are left, any previous scries, etc. Let’s do a specific scenario: I kept a $7$ card hand with one island and one Preordain. What is the chance I see my second land with Preordain?

immagine

Note that for this case we have a smaller population size, this is because we are considering what’s left in our library. The probability is $79\%$, which is a lot! In fact, in Frank Karsten’s articles, he considers Preordain and other cantrips as $50\%$ of a land, which as we can see, it’s not quite that in this deck in this specific scenario.

I don’t remember exactly where (if anyone recalls, reach out to me to credit them please), but I saw a calculation for how to get the percentage of a land a cantrip is by doing the following calculation: we take the cantrip out of the deck and see what is the chance to find a land with those parameters:

immagine

In this case, Preordain would be considered as $76\%$ of a land. Even though this is not a realistic scenario by any means, it serves as a general case percentage because we expect to see lands and spells with this ratio during a game; and also we are probably not splashing for Preordain in our deck, so we can expect to have enough mana to cast it practically always.

Here’s a table showing different cantrips (the number in parentheses is the number of cards a cantrip sees) and different percentages for different number of lands in the deck:

| Number of lands | Reach Through Mists (1) | Consider (2) | Preordain | Ponder (3 + 1) |
| --------------- | ----------------------- | ------------ | --------- | -------------- |
| 16              | 27.1%                   | 47.2%        | 62%       | 72.2%          |
| 17              | 28.8%                   | 49.7%        | 64.7%     | 74.9%          |
| 18              | 30.5%                   | 52.1%        | 67.2%     | 77.2%          |
| 19              | 32.2%                   | 54.4%        | 69.6%     | 79.4%          |
| 20              | 33.9%                   | 56.7%        | 71.9%     | 81.4%          |
| 21              | 35.6%                   | 58.9%        | 74.1%     | 83.3%          |
| 22              | 37.3%                   | 61.1%        | 76.1%     | 85%            |
| 23              | 39%                     | 63.2%        | 78%       | 86.6%          |
| 24              | 40.7%                   | 65.2%        | 79.9%     | 88.1%          |
| 25              | 42.3%                   | 67.2%        | 81.6%     | 89.4%          |

Reach Through Mists is a stand-in for any other cantrips that don’t have selection (Experimental Synthesizer, cycling a Suffocating Fumes, Ancestral Anger). A card like Night’s Whisper sees two cards, so it would be the same probability of Consider. Ponder was calculated like Preordain $+ 1$ card at random after shuffling: $P(\text{Ponder}) = 1 - (1 - P(1)) \times (1 - P(3))$.

Note that these numbers are not taking into account the lines of multiple cantrips on the same turn, for example, casting Consider and seeing a Preordain on top means you are going to keep it if you can cast it to try and find the next land drop. There are other lines with cantrips I’m not taking into account, but I think this serves as a broad idea of how much a certain cantrip helps with your land drops.

These numbers are useful to calculate some fast heuristics and mulligan probabilities. For example, we could just add the three Preordain that are in the Dimir Faeries deck to its lands as $3 \times 0.76 = 2.28$ lands, rounding down to $2$ extra lands. With this new knowledge, we could consider the $3$ Preordain as $2$ “turn $2$ lands” for our purposes. Remember that we consider the events as follows:
1) $1$ “t$1$ land” and $1$ “t$2$ land”;
2) 2 “t$1$ lands”.

And that $2$) doesn’t change, since Preordain just adds to the “t$2$ lands” count. So $P(a) = 0.90 \times 0.60 = 0.54$:

immagine

And that $P(mull) =  (1 - P(a)) \times (1 - P(b)) = 0.46 \times 0.39 = 0.23 = 17.9\%$.

So, the probability of keeping would be $82.1\%$ after considering Preordain as a land, with the heuristic of only keeping $2$ or more land hands.

-----------------------------------------------------------

## Some Takeaway Heuristics
1) In the build of Dimir Faeries that we’ve seen, a hand with $1$ Island and $1$ Preordain will find the second land about $87.7\%$ of the time, so I would consider keeping that hand if the rest of the hand is good;
2) i would recommend playing $18$ lands in Mono Red Kuldotha, since it has a lower amount of mulligans (a bit more than $2\%$ less mulligans) and a higher chance of hitting its third land drop (about $5\%$ increase);
3) in $17$ land Mono Red Kuldotha, the chance of keeping a one lander and finding a land in the first draw is $30\%$. If you are on the draw, the chances go up to $51.7\%$ that you’ll find your second land for your second turn;
4) cantrips are a great way of improving your consistency if you are on blue. But even if you are on other colors, playing card draw even without selection can help find your land drops on time;
5) Golgari Gardens can play a control deck that tries to leverage high mana count in the late game but plays a low land count. Troll of Khazad-dûm, Lembas, Golgari Rot Farm, Ichor Wellspring and Deadly Dispute variants help a lot in this gameplan;
6) Each Deadly Dispute variant (without taking the Treasure into account), counts for $58.9\%$ of a land, since the deck plays $9$ copies of this effect, these count as an extra $5$ lands for the deck, effectively running $26$ lands instead of $21$;
7) in Boros Synthesizer the chances of finding an Experimental Synthesizer by turn $2$ is $44.4\%$. The chances of finding a useful artifact to play on turn two (counting Lembas, Synth, Ichor Wellspring and Barbed Batterfist) is $82.4\%$;
8) in Jeskai Ephemerate the chances of having an indestructible land by turn $3$ for Cleansing Wildfire is $75.1\%$. Playing one extra indestructible land improves this number to $79.4\%$. (These numbers don’t take into account cantrips).

----------------------------------------------------------------

# Lessico


----------------------------------------------------------------

# Domande


----------------------------------------------------------------

# Related to
[[Magic The Gathering]]

----------------------------------------------------------------