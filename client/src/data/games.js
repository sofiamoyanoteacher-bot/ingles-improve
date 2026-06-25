// Game content per unit index, keyed by unit.gameType (see units.js).

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
