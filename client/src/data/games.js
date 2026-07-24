// Game content per unit index, keyed by unit.gameType.
// BASIC program (B1-B2): WORD_SEARCH_WORDS, MATCHING_PAIRS, CROSSWORD_DATA
// STARTER program (A1-A2): WORD_SEARCH_WORDS_STARTER, MATCHING_PAIRS_STARTER, CROSSWORD_DATA_STARTER

export const WORD_SEARCH_WORDS = {
  0: ['BARISTA', 'GRIND', 'CUSTOMER', 'NEIGHBOUR', 'EXCUSE', 'ROUTINE', 'MORNING', 'COFFEE'],
  3: ['SCREAM', 'STADIUM', 'CELEBRATE', 'VICTORY', 'NERVOUS', 'TOGETHER', 'FAMILY', 'MOMENT'],
  6: ['EXPERIENCE', 'SURPRISED', 'FORGIVEN', 'CLIMBED', 'AMAZING', 'ALREADY', 'NEVER', 'QUIT'],
};

export const MATCHING_PAIRS = {
  1: [
    { word: 'to hug', match: 'to wrap your arms around someone' },
    { word: 'gate', match: 'the place where you board the plane' },
    { word: 'to board', match: 'to get on a plane or bus' },
    { word: 'to sweat', match: 'to produce liquid from your skin when hot or nervous' },
    { word: 'adventure', match: 'an exciting and unusual experience' },
    { word: 'final call', match: 'the last announcement before a flight closes' },
    { word: 'to announce', match: 'to make a public statement' },
    { word: 'to beat', match: 'the rhythm of your heart' },
  ],
  4: [
    { word: 'challenge', match: 'a difficult but exciting goal' },
    { word: 'to break a promise', match: 'to not do what you said you would' },
    { word: 'embarrassing', match: 'making you feel ashamed or awkward' },
    { word: 'to run away', match: 'to escape from a difficult situation' },
    { word: 'to last', match: 'to continue for a period of time' },
    { word: 'slightly', match: 'a little bit, not much' },
    { word: 'to scare', match: 'to make someone feel afraid' },
    { word: 'promise', match: 'a commitment to do something' },
  ],
  7: [
    { word: 'countable', match: 'a noun you can count (book, apple, chair)' },
    { word: 'uncountable', match: 'a noun you cannot count (water, music, money)' },
    { word: 'a few', match: 'a small number of (used with countable)' },
    { word: 'a little', match: 'a small amount of (used with uncountable)' },
    { word: 'a lot of', match: 'a large quantity (used with both)' },
    { word: 'how many', match: 'question for countable nouns' },
    { word: 'how much', match: 'question for uncountable nouns' },
    { word: 'enough', match: 'the right amount, not too little' },
  ],
  9: [
    { word: 'quietly', match: 'in a silent or soft way' },
    { word: 'perfectly', match: 'in a complete or ideal way' },
    { word: 'nervously', match: 'in an anxious or worried way' },
    { word: 'lovingly', match: 'with care and affection' },
    { word: 'crispy', match: 'firm and making a crunching sound when eaten' },
    { word: 'dim', match: 'not bright (light)' },
    { word: 'to feed', match: 'to give food to someone or something' },
    { word: 'strangely', match: 'in an unusual or unexpected way' },
  ],
};

export const CROSSWORD_DATA = {
  2: {
    across: [
      { num: 1, clue: 'The opposite of "found"', answer: 'LOST' },
      { num: 3, clue: 'Past of "run"', answer: 'RAN' },
      { num: 5, clue: 'Past of "eat"', answer: 'ATE' },
      { num: 7, clue: 'Past of "tell"', answer: 'TOLD' },
      { num: 9, clue: 'A place to board a plane', answer: 'GATE' },
    ],
    down: [
      { num: 1, clue: 'Past of "leave"', answer: 'LEFT' },
      { num: 2, clue: 'Past of "say"', answer: 'SAID' },
      { num: 4, clue: 'The opposite of "best"', answer: 'WORST' },
      { num: 6, clue: 'Past of "teach"', answer: 'TAUGHT' },
      { num: 8, clue: 'Past of "go"', answer: 'WENT' },
    ],
  },
  5: {
    across: [
      { num: 1, clue: 'Ability modal', answer: 'CAN' },
      { num: 3, clue: 'Advice modal', answer: 'SHOULD' },
      { num: 5, clue: 'Strong obligation', answer: 'MUST' },
      { num: 7, clue: '"You ___ do it" = optional', answer: 'DONTHAVETO' },
    ],
    down: [
      { num: 2, clue: '"You ___ lie" = forbidden', answer: 'MUSTNT' },
      { num: 4, clue: 'Past form of "can"', answer: 'COULD' },
      { num: 6, clue: 'Possibility modal', answer: 'MIGHT' },
    ],
  },
  8: {
    across: [
      { num: 1, clue: 'Better than good', answer: 'BEST' },
      { num: 3, clue: 'More than "old"', answer: 'OLDER' },
      { num: 5, clue: 'Comparative of "bad"', answer: 'WORSE' },
      { num: 7, clue: '"The ___ city" = superlative signal', answer: 'MOST' },
      { num: 9, clue: 'More expensive alternative', answer: 'CHEAPER' },
    ],
    down: [
      { num: 1, clue: 'Comparative of "big"', answer: 'BIGGER' },
      { num: 2, clue: 'Superlative of "good"', answer: 'BEST' },
      { num: 4, clue: '"More ___" for long adjectives', answer: 'EXPENSIVE' },
      { num: 6, clue: 'Opposite of "better"', answer: 'WORSE' },
    ],
  },
  10: {
    across: [
      { num: 1, clue: 'Used with "have" to form present perfect', answer: 'BEEN' },
      { num: 3, clue: '"She ___ working" - past continuous', answer: 'WAS' },
      { num: 5, clue: 'Future with plans', answer: 'GOINGTO' },
      { num: 7, clue: 'Present perfect signal word', answer: 'EVER' },
      { num: 9, clue: '"I ___ go" = future promise', answer: 'WILL' },
    ],
    down: [
      { num: 2, clue: 'Simple past of "begin"', answer: 'BEGAN' },
      { num: 4, clue: 'Present perfect signal: "I haven\'t done it ___"', answer: 'YET' },
      { num: 6, clue: 'Past continuous uses was + verb + ___', answer: 'ING' },
      { num: 8, clue: '"She ___ lives here" = still true', answer: 'STILL' },
    ],
  },
};

// ─── NATIVE PROGRAM (C1-C2) game content ─────────────────────────────────────

export const MATCHING_PAIRS_NATIVE = {
  // Unit 01 — pitch / business idioms vocab
  0: [
    { word: 'to pitch an idea', match: 'to present a concept and try to get buy-in' },
    { word: 'venture capitalist', match: 'an investor who funds start-ups for equity' },
    { word: 'to dazzle', match: 'to impress strongly, to overwhelm with brilliance' },
    { word: 'to read the room', match: 'to sense the mood of the people around you' },
    { word: 'to reshape', match: 'to fundamentally change the form of something' },
    { word: 'follow-up', match: 'a subsequent meeting or contact after the first' },
    { word: 'projections', match: 'estimated future financial figures' },
    { word: 'conceivable', match: 'capable of being imagined or considered' },
  ],
  // Unit 03 — cross-cultural communication / discourse markers
  2: [
    { word: 'Furthermore', match: 'used to add another point to an argument' },
    { word: 'Nevertheless', match: 'despite what was just said; a strong contrast' },
    { word: 'Consequently', match: 'as a result; used to introduce a consequence' },
    { word: 'In other words', match: 'used to reformulate and clarify a point' },
    { word: 'Admittedly', match: 'used to concede a point before countering it' },
    { word: 'tatemae', match: 'the public face presented in Japanese culture' },
    { word: 'culturally fluent', match: 'able to operate competently across cultures' },
    { word: 'to misread', match: 'to interpret a signal or situation incorrectly' },
  ],
  // Unit 06 — AI ethics / nominalisation
  5: [
    { word: 'development', match: 'nominalised form of "to develop"' },
    { word: 'optimisation', match: 'nominalised form of "to optimise"' },
    { word: 'polarisation', match: 'nominalised form of "to polarise"' },
    { word: 'regulation', match: 'nominalised form of "to regulate"' },
    { word: 'attribution', match: 'nominalised form of "to attribute"' },
    { word: 'stewardship', match: 'responsible management and care of something' },
    { word: 'epistemic', match: 'relating to knowledge and how we come to know things' },
    { word: 'indifferent', match: 'showing no interest or concern; uncaring' },
  ],
  // Unit 09 — mind at work / mind idioms
  8: [
    { word: 'to have a lot on your plate', match: 'to have many tasks or problems to deal with' },
    { word: 'to be in two minds', match: 'to be undecided between two options' },
    { word: 'to put your mind to something', match: 'to focus your full effort on achieving something' },
    { word: 'to bear in mind', match: 'to remember or consider something important' },
    { word: 'cognitive flexibility', match: 'the ability to adapt thinking across different contexts' },
    { word: 'asynchronous', match: 'not happening at the same time; delayed communication' },
    { word: 'to fragment', match: 'to break into disconnected parts' },
    { word: 'inertia', match: 'resistance to change; tendency to stay in the current state' },
  ],
  // Unit 11 — media and truth / media idioms
  10: [
    { word: 'to take with a grain of salt', match: 'to be sceptical; not believe completely' },
    { word: 'to spin a story', match: 'to present facts to favour a particular interpretation' },
    { word: 'off the record', match: 'said in confidence; not to be published' },
    { word: 'to go viral', match: 'to spread rapidly and widely across the internet' },
    { word: 'epistemic poverty', match: 'difficulty distinguishing what is true amid abundant content' },
    { word: 'to rationalise', match: 'to construct reasons to justify a conclusion already reached' },
    { word: 'misinformation', match: 'false or inaccurate information spread unintentionally' },
    { word: 'propaganda', match: 'biased information used to promote a political cause' },
  ],
};

export const WORD_SEARCH_WORDS_NATIVE = {
  // Unit 02 — managing up
  1: ['DELEGATE', 'INFLUENCE', 'BRIEFING', 'CONSENSUS', 'INERTIA', 'GROUNDWORK', 'INSTINCT', 'PROPOSAL', 'FEEDBACK', 'OUTCOME'],
  // Unit 04 — the bilingual mind
  3: ['TRANSLATE', 'NUANCE', 'BILINGUAL', 'ACQUIRE', 'CULTURE', 'LANGUAGE', 'MEANING', 'SILENCE', 'INTERPRET', 'WORLDVIEW'],
  // Unit 07 — creative thinking
  6: ['CONSTRAINT', 'ITERATION', 'AMBIGUITY', 'RESISTANCE', 'FLOURISH', 'CREATIVE', 'DISCARD', 'OBSTACLE', 'PRACTICE', 'DISCIPLINE'],
  // Unit 10 — difficult conversations
  9: ['MEDIATE', 'BOUNDARY', 'DREAD', 'DEFENSIVE', 'DISSOLVE', 'RESTORE', 'HONEST', 'CLARITY', 'BACKPEDAL', 'CONTACT'],
  // Unit 13 — future of work
  12: ['AUTOMATE', 'COGNITIVE', 'RETRAINING', 'OBSOLETE', 'PIPELINE', 'FLEXIBLE', 'UNLEARN', 'PLATFORM', 'LADDERS', 'THRIVE'],
};

export const CROSSWORD_DATA_NATIVE = {
  // Unit 05 — negotiation / advanced modals
  4: {
    across: [
      { num: 1, clue: 'Abbreviation for Best Alternative To a Negotiated Agreement', answer: 'BATNA' },
      { num: 3, clue: 'A small compromise given to reach an agreement', answer: 'CONCESSION' },
      { num: 5, clue: '"You ___ have told me" — criticism of a past action', answer: 'SHOULD' },
      { num: 7, clue: 'Active ___ means knowing when silence is strategic', answer: 'PATIENCE' },
    ],
    down: [
      { num: 2, clue: 'The person on the other side of the table', answer: 'COUNTERPART' },
      { num: 4, clue: '"They ___ have agreed earlier" — past possibility', answer: 'COULD' },
      { num: 6, clue: 'To make an offer more attractive: "sweeten the ___"', answer: 'DEAL' },
    ],
  },
  // Unit 08 — living abroad
  7: {
    across: [
      { num: 1, clue: 'Never ___ I feel fully at home in any one country', answer: 'HAVE' },
      { num: 3, clue: 'A person living in a country other than their own', answer: 'EXPAT' },
      { num: 5, clue: '"No sooner had I arrived ___ I felt homesick"', answer: 'THAN' },
      { num: 7, clue: 'Feeling of being accepted and part of a group (to ___ in)', answer: 'FIT' },
      { num: 9, clue: 'To establish a home and community in a new place (put down ___)', answer: 'ROOTS' },
    ],
    down: [
      { num: 2, clue: '"___ did I know" — inversion expressing retrospective surprise', answer: 'LITTLE' },
      { num: 4, clue: '"Not ___ I left did I truly understand" — negative adverbial', answer: 'UNTIL' },
      { num: 6, clue: 'Slowly and permanently: "irre___ably"', answer: 'VOCABLY' },
      { num: 8, clue: 'The feeling of missing your home country', answer: 'NOSTALGIA' },
    ],
  },
  // Unit 12 — money and power / subjunctive
  11: {
    across: [
      { num: 1, clue: '"It is essential that he ___ the meeting" — subjunctive', answer: 'ATTEND' },
      { num: 3, clue: '"___ she to resign, the project would collapse" — formal conditional', answer: 'WERE' },
      { num: 5, clue: 'To continue growing over time: wealth tends to ___ and ___', answer: 'COMPOUND' },
      { num: 7, clue: '"We recommend that the clause ___" — passive subjunctive', answer: 'BE' },
      { num: 9, clue: 'Money passed from one generation to the next', answer: 'INHERITANCE' },
    ],
    down: [
      { num: 2, clue: '"___ you need further information, please contact us" — formal conditional', answer: 'SHOULD' },
      { num: 4, clue: 'To maintain and continue into the future (to ___tuate)', answer: 'PERPE' },
      { num: 6, clue: 'The opposite of income (what you own, not what you earn)', answer: 'WEALTH' },
      { num: 8, clue: 'Unequal distribution of resources (economic ___)', answer: 'INEQUALITY' },
    ],
  },
  // Unit 14 — legacy / synthesis
  13: {
    across: [
      { num: 1, clue: '"___ did ambition know what endures" — inversion', answer: 'LITTLE' },
      { num: 3, clue: 'To remain valuable across time: to stand the test of ___', answer: 'TIME' },
      { num: 5, clue: '"It is not what you built — it is how people ___ in your presence"', answer: 'FELT' },
      { num: 7, clue: 'Something built to honour someone (to erect a ___)', answer: 'MONUMENT' },
      { num: 9, clue: '"To turn over a new ___" — idiom for making a fresh start', answer: 'LEAF' },
    ],
    down: [
      { num: 2, clue: 'The quality of being genuinely present and listening', answer: 'ATTENTION' },
      { num: 4, clue: '"Had they known, they would ___ spent less time building."', answer: 'HAVE' },
      { num: 6, clue: 'To make possible for others (to ___ someone to succeed)', answer: 'ENABLE' },
      { num: 8, clue: 'Lasting a long time without deteriorating (a ___ legacy)', answer: 'DURABLE' },
    ],
  },
};

// ─── STARTER PROGRAM (A1-A2) game content ────────────────────────────────────

export const MATCHING_PAIRS_STARTER = {
  // Unit 01 — Greetings vocabulary
  0: [
    { word: 'hello', match: 'a friendly greeting when you meet someone' },
    { word: 'goodbye', match: 'what you say when you leave' },
    { word: 'nice to meet you', match: 'a polite phrase for first meetings' },
    { word: 'please', match: 'a polite word when asking for something' },
    { word: 'thank you', match: 'what you say when someone helps you' },
    { word: 'sorry', match: 'what you say when you make a mistake' },
    { word: 'I am from', match: 'used to say where you were born or grew up' },
    { word: 'my name is', match: 'how you introduce yourself' },
  ],
  // Unit 02 — Family + possessives
  1: [
    { word: 'my', match: 'belonging to me' },
    { word: 'his', match: 'belonging to him' },
    { word: 'her', match: 'belonging to her' },
    { word: 'their', match: 'belonging to them' },
    { word: 'this', match: 'one thing near you' },
    { word: 'that', match: 'one thing far from you' },
    { word: 'these', match: 'more than one thing near you' },
    { word: 'those', match: 'more than one thing far from you' },
  ],
  // Unit 05 — Food likes/dislikes
  4: [
    { word: 'Do you like coffee?', match: 'a question asking about preference' },
    { word: 'Yes, I do.', match: 'a short positive answer' },
    { word: 'No, I don\'t.', match: 'a short negative answer' },
    { word: 'She doesn\'t eat meat.', match: 'negative form with he/she/it' },
    { word: 'Does he like tea?', match: 'question form with he/she/it' },
    { word: 'I love spicy food.', match: 'to like something very very much' },
    { word: 'I hate getting up early.', match: 'to dislike something very strongly' },
    { word: 'She prefers tea.', match: 'to like one thing more than another' },
  ],
  // Unit 07 — Time expressions
  6: [
    { word: 'o\'clock', match: 'exactly on the hour — e.g. nine o\'clock' },
    { word: 'quarter past', match: '15 minutes after the hour — e.g. 9:15' },
    { word: 'half past', match: '30 minutes after the hour — e.g. 9:30' },
    { word: 'quarter to', match: '15 minutes before the hour — e.g. 8:45' },
    { word: 'at', match: 'preposition for specific times — at 9 o\'clock' },
    { word: 'on', match: 'preposition for days — on Monday' },
    { word: 'in the morning', match: 'the early part of the day' },
    { word: 'at night', match: 'the dark hours after the evening' },
  ],
  // Unit 08 — Can for ability
  7: [
    { word: 'can swim', match: 'has the ability to move through water' },
    { word: 'can\'t drive', match: 'does not have the ability to operate a car' },
    { word: 'Can you cook?', match: 'a question asking about someone\'s ability' },
    { word: 'Yes, I can.', match: 'a short positive answer to a can question' },
    { word: 'No, I can\'t.', match: 'a short negative answer to a can question' },
    { word: 'She can speak three languages.', match: 'ability with he/she — no -s on can' },
    { word: 'He can\'t bake.', match: 'negative ability — can + not = can\'t' },
    { word: 'Can I open the window?', match: 'using can to ask for permission' },
  ],
};

export const WORD_SEARCH_WORDS_STARTER = {
  // Unit 03 — Daily routine
  2: ['WAKEUP', 'BREAKFAST', 'LUNCH', 'DINNER', 'WORK', 'HOME', 'ROUTINE', 'ALWAYS', 'USUALLY', 'NEVER'],
  // Unit 04 — Jobs
  3: ['TEACHER', 'DOCTOR', 'NURSE', 'CHEF', 'OFFICE', 'HOSPITAL', 'SCHOOL', 'WORK', 'JOB', 'SHIFT'],
  // Unit 06 — House
  5: ['BEDROOM', 'KITCHEN', 'SOFA', 'TABLE', 'WINDOW', 'DOOR', 'CHAIR', 'WARDROBE', 'UNDER', 'NEXT'],
  // Unit 09 — Adjectives for comparison
  8: ['BIGGER', 'FASTER', 'NOISY', 'QUIET', 'CLEAN', 'SAFE', 'FRIENDLY', 'MODERN', 'CHEAP', 'CROWDED'],
};

export const CROSSWORD_DATA_STARTER = {
  // Unit 10 — Market / countable-uncountable
  9: {
    across: [
      { num: 1, clue: 'You use this to ask about countable things: How ___ apples?', answer: 'MANY' },
      { num: 3, clue: 'You use this to ask about uncountable things: How ___ milk?', answer: 'MUCH' },
      { num: 5, clue: 'A whole piece of baked bread', answer: 'LOAF' },
      { num: 7, clue: 'A group of twelve — usually eggs', answer: 'DOZEN' },
      { num: 9, clue: 'A unit of weight equal to 1000 grams', answer: 'KILO' },
    ],
    down: [
      { num: 2, clue: 'The opposite of countable', answer: 'UNCOUNTABLE' },
      { num: 4, clue: 'A place where you buy fresh food from sellers', answer: 'MARKET' },
      { num: 6, clue: 'A small number of (used with countable nouns)', answer: 'FEW' },
      { num: 8, clue: 'Milk comes in this container', answer: 'CARTON' },
    ],
  },
  // Unit 11 — Going to / future plans
  10: {
    across: [
      { num: 1, clue: '"I am ___ to visit my family" — future plan', answer: 'GOING' },
      { num: 3, clue: 'The base form after "going to": "I am going to ___"', answer: 'SLEEP' },
      { num: 5, clue: '"She ___ going to cook dinner."', answer: 'IS' },
      { num: 7, clue: 'The opposite of "going to go out"', answer: 'STAY' },
      { num: 9, clue: 'Future time expression: "We are going to travel ___ year."', answer: 'NEXT' },
    ],
    down: [
      { num: 2, clue: '"They ___ going to come." — negative helper', answer: 'ARE' },
      { num: 4, clue: '"___ you going to cook?" — question helper', answer: 'ARE' },
      { num: 6, clue: 'Going to expresses plans and ___', answer: 'INTENTIONS' },
      { num: 8, clue: 'A plan for fun activities: "I have lots of ___"', answer: 'PLANS' },
    ],
  },
};
