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

table

As it is possible to observe, some numbers don’t align with what we see in some decks. For example, no mono red deck that plays Kuldotha Rebirth and Goblin Bushwhacker plays $22$ sources of mana. This is because in Pauper deck skews towards playing less lands to avoid flood, in exchange for not being able to play on curve consistently. That means, the probability of a Mono Red deck to be able to play Kuldotha + Bushwhacker on turn $3$ is about $50\%$, which is not consistent to be considered part of the deck’s plan. The deck is not built to play this combination on curve, but rather to avoid flood in the late game, and have consistent access to two mana on turn $2$ ($73\%$) or $3$ ($79\%$).

On the other hand, Black Gardens plays $6$ sources of green $+3$ Troll of Khazad-dûm $+ 4$ Deadly Dispute to cast Avenging Hunter on curve, which should be more than enough ($86\%$ without taking into consideration Deadly Dispute, $95\%$ with it).

The author calculated these numbers by using a [Hypergeometric Calculator](https://stattrek.com/online-calculator/hypergeometric). This is an incredible tool that Apa will be using for the rest of the article. It’s a tool that calculates the probability of events in card games to happen, given some parameters. The first parameter is the number of cards in your deck, the second the number of cards you want to see (in this article we are focusing on lands of a certain type), the third parameter is the cards you see for the event ($7$ is an opening hand, $8$ for turn two since we draw a card on our turn two on the play), and the fourth parameter is the number of cards you want to see from the successes (i.e. lands). The number we are going to be looking to know the probability is the last number “Cumulative probability: $P(X \geq n)$”; this gives the probability of seeing at least $n$ cards with the parameters given.

Here are some examples:<br />
Probability of seeing an opening hand of two lands in Mono Red Kuldotha with $17$ or $18$ lands:

-----------------------------------------------------------

## Cantrips


-----------------------------------------------------------

## Some Takeaway Heuristics



----------------------------------------------------------------

# Lessico


----------------------------------------------------------------

# Domande


----------------------------------------------------------------

# Related to
[[Magic The Gathering]]

----------------------------------------------------------------