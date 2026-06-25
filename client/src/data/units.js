// Content extracted verbatim from improve_learning_2.html (array UNITS / MONTHS / NARRATOR_GENDER).
// Do not alter readings, vocab, grammar, listening questions, talk questions, or homework tasks.

export const UNITS = [
  {
    num:"01", title:"A day in the life of a Buenos Aires barista", grammar:"Simple Present", month:1,
    reading:`<p>My name is Tomás and I make coffee for a living. Every morning I wake up at five, before the city does. I take the 39 bus to Palermo, and I always sit by the window. The streets are quiet at that hour. They smell like rain and fresh bread.</p>
<p>I open the café at six. I turn on the lights, I grind the beans, and the machine starts to hum like an old friend. My first customer is Doña Rosa. She lives upstairs and she never says good morning — she just points at the croissants and smiles. I know her order by heart: one flat white, no sugar.</p>
<p>People think a barista only makes coffee. But I listen, too. I hear stories about jobs, divorces, exams, and football. Argentines talk a lot, especially before the first cup. By noon I am tired, but I feel alive. Coffee is not my job. It is my excuse to meet the whole neighbourhood, one cup at a time.</p>`,
    vocab:[
      {word:"for a living",trans:"para ganarse la vida",ex:'"She sells flowers for a living."'},
      {word:"to wake up",trans:"despertarse",ex:'"I wake up early on weekends, even when I don\'t want to."'},
      {word:"to grind",trans:"moler",ex:'"You should grind the coffee right before you make it."'},
      {word:"by heart",trans:"de memoria",ex:'"She knows the whole poem by heart."'},
      {word:"customer",trans:"cliente",ex:'"The customer at table three is still waiting."'},
      {word:"neighbourhood",trans:"barrio",ex:'"I grew up in a small neighbourhood near the river."'},
      {word:"tired",trans:"cansado",ex:'"After the long trip we were tired but happy."'},
      {word:"excuse",trans:"excusa, pretexto",ex:'"A birthday is a good excuse to call old friends."'},
    ],
    grammarExamples:[
      '"I make coffee for a living."',
      '"Every morning I wake up at five."',
      '"She lives upstairs."',
      '"She never says good morning."',
      '"Argentines talk a lot, especially before the first cup."'
    ],
    grammarRule:"We use the simple present for routines, habits, and things that are generally true. The form is easy — just the verb — but the third person (he, she, it) adds an -s.",
    grammarTable:[["Subject","Verb"],["I / You / We / They","work · live · talk"],["He / She / It","works · lives · talks"]],
    grammarWatch:"Don't forget the -s in he/she/it: she <strong>works</strong>, not she <em>work</em>. Negatives use <strong>don't / doesn't</strong> and questions use <strong>do / does</strong>.",
    grammarTip:"Use it with <strong>always, never, usually, sometimes,</strong> and <strong>every day</strong>.",
    listeningTitle:"Morning at the café",
    listeningDesc:"Escuchá la descripción de la mañana de Tomás y respondé las preguntas.",
    listeningQ:[
      {q:"What time does Tomás wake up every morning?",opts:["At 6 AM","At 5 AM","At 7 AM","At 4 AM"],correct:1},
      {q:"Where does Tomás work?",opts:["In a bakery","In an office","In a café","At home"],correct:2},
      {q:"Who is Doña Rosa?",opts:["His mother","A colleague","His neighbour and first customer","A famous singer"],correct:2},
      {q:"What does Doña Rosa usually order?",opts:["A black coffee with sugar","A flat white, no sugar","A croissant and tea","A cappuccino"],correct:1},
    ],
    talkQ:[
      "What does Tomás do every morning, before the city wakes up?",
      "Do you drink coffee? If so, how do you take it?",
      "What does a normal morning look like for you, from start to finish?",
      'Tomás says coffee is his "excuse to meet people." What is your excuse to connect with others?',
      'Some people say "a job is just a job." Do you agree? What makes work feel alive instead of empty?'
    ],
    talkTip:"Model: \"I wake up at seven. In the morning I take my kids to school. Then I work until six. I usually cook dinner, and at night I watch a series with my wife.\"",
    hwTask:"Mini-presentación: Describí un día típico en tu vida en 6-8 oraciones usando el simple present. Podés grabarlo en audio o video.",
    gameType:"wordsearch",
    unitImageSeed:"barista",
    warmupQuestions:[
      "What does Tomás do every morning before the café opens?",
      'Use "usually" in a sentence about your own routine.',
      'What\'s the difference between "I work" and "I am working"?'
    ],
    quickCheck:[
      {statement:"Tomás takes the bus to work every morning.",answer:true},
      {statement:"Doña Rosa always says good morning.",answer:false},
      {statement:"Tomás thinks his job is boring.",answer:false}
    ],
    speakingChallenge:"2-minute challenge: Describe your ideal morning routine — what would you always do? What would you never do?",
    grammarExtra:{
      icon:"⏱", title:"Frequency Adverbs — How often do you do it?",
      intro:"Frequency adverbs tell us HOW OFTEN something happens. They are best friends with the simple present, because routines and habits are exactly what they describe.",
      table:[
        ["Adverb","Español","Frequency","Example"],
        ["always","siempre","100%","I always wake up at five."],
        ["usually","generalmente","~80%","She usually takes the bus."],
        ["often","seguido","~60%","We often eat at home."],
        ["sometimes","a veces","~40%","He sometimes works late."],
        ["rarely","rara vez","~20%","They rarely eat fast food."],
        ["never","nunca","0%","I never skip breakfast."]
      ],
      structureNotes:[
        "Subject + ADVERB + main verb — \"I always wake up early.\" / \"She never drinks coffee.\"",
        "Subject + am/is/are + ADVERB — \"He is always on time.\" / \"They are never bored.\""
      ],
      freqScale:true,
      watch:"The adverb goes BEFORE the main verb but AFTER the verb \"to be.\"<br/>✗ <em>\"I wake always up early.\"</em> → ✓ <strong>\"I always wake up early.\"</strong><br/>✗ <em>\"He always is late.\"</em> → ✓ <strong>\"He is always late.\"</strong>",
      practice:[
        "How often do you cook at home?",
        "Do you always eat breakfast? What do you usually have?",
        "What do you rarely do but wish you did more often?"
      ]
    }
  },
  {
    num:"02", title:"Live from the airport", grammar:"Present Continuous", month:1,
    reading:`<p>I am sitting at gate 24 at Ezeiza airport, and honestly, I am not bored at all. I am watching people, and people are the best show in the world.</p>
<p>A girl next to me is crying and laughing at the same time. She is hugging an older woman — her grandmother, maybe. They are not letting go. Across from me, a businessman is walking in circles. He is talking on the phone, he is checking his watch, and he is sweating. Something is going wrong, clearly.</p>
<p>A family is sharing one giant bag of medialunas. The kids are running, and the parents are pretending not to see them. The smell of coffee is floating everywhere.</p>
<p>My flight is boarding in twenty minutes. I am going to Madrid for the first time. I am nervous, I am excited, and my heart is beating fast. Right now, while I am writing this, a voice is announcing the final call. That's me. I am closing the laptop. Adventure is waiting.</p>`,
    vocab:[
      {word:"gate",trans:"puerta de embarque",ex:'"Our gate changed at the last minute."'},
      {word:"to hug",trans:"abrazar",ex:'"She hugs her dad every time he visits."'},
      {word:"to sweat",trans:"sudar",ex:'"I always sweat when I\'m nervous."'},
      {word:"to board",trans:"abordar, embarcar",ex:'"The plane is finally ready to board."'},
      {word:"to announce",trans:"anunciar",ex:'"They just announced a two-hour delay."'},
      {word:"final call",trans:"último llamado",ex:'"We ran when we heard the final call."'},
      {word:"to beat",trans:"latir (el corazón)",ex:'"My heart was beating like a drum."'},
      {word:"adventure",trans:"aventura",ex:'"Every trip is a small adventure."'},
    ],
    grammarExamples:[
      '"I am sitting at gate 24."',
      '"A girl is crying and laughing at the same time."',
      '"The kids are running."',
      '"My flight is boarding in twenty minutes."',
      '"A voice is announcing the final call."'
    ],
    grammarRule:"We form the present continuous with am / is / are + verb -ing. It describes an action happening right now — and also a fixed plan very close in the future.",
    grammarTable:[["Subject","be","verb + -ing"],["I","am","sitting"],["He / She / It","is","crying"],["You / We / They","are","running"]],
    grammarWatch:"Some verbs don't use -ing: <strong>want, know, like, need, believe</strong>. These are state verbs. Say <em>\"I want\"</em>, never <em>\"I am wanting\"</em>.",
    grammarTip:"Use it with <strong>right now, at the moment, today,</strong> and <strong>these days</strong>.",
    listeningTitle:"Live from Ezeiza",
    listeningDesc:"Escuchá el relato del aeropuerto y respondé.",
    listeningQ:[
      {q:"Where is the narrator?",opts:["On a plane","At a bus station","At Ezeiza airport","In a café"],correct:2},
      {q:"What is the businessman doing?",opts:["Eating","Walking in circles and talking on his phone","Sleeping","Reading a book"],correct:1},
      {q:"What is the family sharing?",opts:["A pizza","A bag of medialunas","Coffee","Their phone"],correct:1},
      {q:"Where is the narrator going?",opts:["London","New York","Paris","Madrid"],correct:3},
    ],
    talkQ:[
      "Where is the narrator, and why isn't he bored?",
      "What are you doing right now, besides reading this page?",
      "Do you enjoy airports, or do they stress you out? Why?",
      'The narrator says people are "the best show in the world." Do you like watching strangers? What stories do you invent for them?',
      "Tell us about a goodbye or a reunion at an airport or station that you'll never forget."
    ],
    talkTip:"Model: \"Okay, I'm standing in a café. A man is reading the news. Two women are laughing loudly. The waiter is running between tables, and someone is taking a photo of their food.\"",
    hwTask:"Live commentary: Mirá a tu alrededor y describí lo que están haciendo 5 personas distintas. Grabá un audio o video de 1 minuto.",
    gameType:"matching",
    unitImageSeed:"airport",
    warmupQuestions:[
      "What was happening at Ezeiza when the narrator was writing?",
      "Name 3 state verbs that don't use -ing.",
      "Describe what's happening around you right now — use 3 present continuous sentences."
    ],
    quickCheck:[
      {statement:"The narrator is bored at the airport.",answer:false},
      {statement:"A businessman is reading next to the narrator.",answer:false},
      {statement:"The narrator is going to Madrid for the first time.",answer:true}
    ],
    speakingChallenge:"Role-play: You're at an airport and your flight is delayed 4 hours. Call a friend and describe what's happening around you right now."
  },
  {
    num:"03", title:"The night I missed my flight", grammar:"Simple Past", month:2,
    reading:`<p>I missed my flight once, and it changed everything. It happened in Lima, three years ago. I arrived at the airport very calm — too calm. I bought a coffee, I sat down, and I opened a book. I read for an hour. Then I looked at the screen and my stomach dropped. The gate said "CLOSED."</p>
<p>I ran. I shouted. I begged a woman at the counter, but the plane already left without me. I sat on the floor and I almost cried.</p>
<p>Then a man beside me laughed — not in a cruel way. "I missed that flight too," he said. We talked for three hours. He told me about his life, his country, his terrible ex-wife. We ate sandwiches and drank bad coffee. It was strangely perfect.</p>
<p>The next morning we took the same new flight. We never met again, and I don't even remember his name. But that night taught me something simple: sometimes the worst moment of your day becomes the best story of your year.</p>`,
    vocab:[
      {word:"to miss (a flight)",trans:"perder (un vuelo)",ex:'"We almost missed the bus this morning."'},
      {word:"screen",trans:"pantalla",ex:'"I checked the screen for our gate number."'},
      {word:"to beg",trans:"rogar, suplicar",ex:'"He begged them for one more chance."'},
      {word:"counter",trans:"mostrador",ex:'"Please go to the counter on your left."'},
      {word:"cruel",trans:"cruel",ex:'"It was a cruel joke, and nobody laughed."'},
      {word:"strangely",trans:"extrañamente",ex:'"The empty street felt strangely calm."'},
      {word:"to teach (taught)",trans:"enseñar",ex:'"My grandmother taught me how to cook."'},
      {word:"worst",trans:"peor, el peor",ex:'"It was the worst day of the whole trip."'},
    ],
    grammarExamples:[
      '"I missed my flight once."',
      '"It happened in Lima, three years ago."',
      '"I ran. I shouted."',
      '"We talked for three hours."',
      '"That night taught me something simple."'
    ],
    grammarRule:"We use the simple past for finished actions at a specific time. Regular verbs add -ed; irregular verbs change shape. The form is the same for every subject.",
    grammarTable:[["Type","Examples"],["Regular (+ -ed)","miss→missed · talk→talked · arrive→arrived"],["Irregular","run→ran · take→took · leave→left · teach→taught"]],
    grammarWatch:"For negatives and questions use <strong>didn't / did + base verb</strong>: <em>\"Did you go?\"</em> — never <em>\"Did you went?\"</em>",
    grammarTip:"Use it with <strong>yesterday, last night, three years ago,</strong> and <strong>in 2019</strong>.",
    listeningTitle:"The night in Lima",
    listeningDesc:"Escuchá la historia y poné a prueba tu comprensión.",
    listeningQ:[
      {q:"Where did the story happen?",opts:["Buenos Aires","Bogotá","Lima","Santiago"],correct:2},
      {q:"Why did the narrator miss the flight?",opts:["He slept in","He was reading and lost track of time","The taxi was late","He forgot his passport"],correct:1},
      {q:"How long did the narrator and the stranger talk?",opts:["One hour","Two hours","Three hours","All night"],correct:2},
      {q:"What lesson did the narrator learn?",opts:["Always check your phone","Bad moments can become great stories","Never travel alone","Airports are dangerous"],correct:1},
    ],
    talkQ:[
      "Where and when did the story happen, and what went wrong?",
      "Have you ever missed a bus, a train, or a flight? What happened next?",
      "Tell us about a time a small disaster turned into a good memory.",
      "The narrator forgot the man's name but not the night. Why do we forget names but remember feelings?",
      "Is there a story from your past that you love to tell again and again? Why that one?"
    ],
    talkTip:"Structure: First… → Then… → Suddenly… → Finally…",
    hwTask:"Storytelling: Contá una historia corta y verdadera sobre algo que salió mal en un viaje. Usá simple past. Audio o video de 2-3 minutos.",
    gameType:"crossword",
    unitImageSeed:"flight",
    warmupQuestions:[
      "What happened after the narrator missed his flight in Lima?",
      "Give the simple past of: go / see / tell / buy / run",
      "Tell a 3-sentence story using: First... Then... Finally..."
    ],
    quickCheck:[
      {statement:"The narrator missed his flight because he was tired.",answer:false},
      {statement:"The stranger laughed at the narrator in a cruel way.",answer:false},
      {statement:"The narrator and the stranger took the same flight the next day.",answer:true}
    ],
    speakingChallenge:'Storytelling circle: Each person adds one sentence to a shared story in simple past. Start with: "Last Saturday, I woke up and something was wrong..."',
    grammarExtra:{
      icon:"📅", title:"Time Words — Anchoring your story in the past",
      intro:"Time words are the anchors of a past story. They tell your listener WHEN something happened. Without them, a story floats. With them, it lands.",
      table:[
        ["Time word","Español","Example"],
        ["yesterday","ayer","I missed my flight yesterday."],
        ["last night","anoche","We talked until last night."],
        ["last week / month / year","la semana / mes / año pasado","She moved last year."],
        ["ago","hace (+ tiempo)","It happened three years ago."],
        ["in + year","en + año","I was born in 1995."],
        ["in + month","en + mes","We met in March."],
        ["on + date","el + fecha","It happened on December 18th."],
        ["when I was…","cuando era / tenía…","When I was a kid, I loved football."],
        ["that day / night","ese día / esa noche","That night changed everything."],
        ["the day before","el día anterior","The day before, everything was fine."],
        ["once","una vez","I missed my flight once."],
        ["back then","en esa época","Back then, I was very different."]
      ],
      structureNotes:[
        "TIME WORD + subject + simple past verb + (rest) — \"Three years ago, I arrived in Lima.\"",
        "\"Last night, she called me and told me everything.\"",
        "\"When I was twenty, I didn't know what I wanted.\""
      ],
      watch:"Time words usually go at the START or the END of the sentence — not in the middle.<br/>✓ <strong>\"Last year, I moved to Córdoba.\"</strong><br/>✓ <strong>\"I moved to Córdoba last year.\"</strong><br/>✗ <em>\"I last year moved to Córdoba.\"</em>",
      practice:[
        "Tell us something funny or strange that happened last week.",
        "What did you do three years ago that you'd never do today?",
        "\"When I was a kid, I always…\" — finish that sentence."
      ]
    }
  },
  {num:"04",title:"Where were you when it happened?",grammar:"Past Continuous",month:2,
    reading:`<p>Where were you on December 18th, 2022? Every Argentine remembers. I was sitting on my abuela's old sofa, and the whole family was screaming at the television.</p><p>Messi was running, the clock was ticking, and my mother was praying with her eyes closed. My uncle was not even watching — he was walking around the kitchen because he was too nervous. Outside, the city was holding its breath. Nobody was driving. Nobody was working. Even the dogs were quiet.</p><p>When France scored, my cousin was crying. When we scored again, the neighbours were banging pots from their windows. We were all sweating, laughing, and shaking at the same time.</p><p>I don't remember the exact minute we won. I only remember that my dad was hugging me while tears were falling down his face, and he wasn't saying anything. He didn't need to. Some moments are too big for words. You don't watch them — you live inside them while they are happening.</p>`,
    vocab:[{word:"to scream",trans:"gritar",ex:'"The kids were screaming with joy."'},{word:"to tick",trans:"correr (el reloj)",ex:'"The clock was ticking and we had no time left."'},{word:"to pray",trans:"rezar",ex:'"She prays every night before bed."'},{word:"to hold your breath",trans:"contener la respiración",ex:'"The whole stadium held its breath."'},{word:"to bang",trans:"golpear",ex:'"People were banging pots out of their windows."'},{word:"to shake",trans:"temblar",ex:'"My hands were shaking from the cold."'},{word:"tears",trans:"lágrimas",ex:'"Tears of joy are the best kind."'},{word:"neighbour",trans:"vecino",ex:'"Our neighbours invited us to watch the game."'}],
    grammarExamples:['"I was sitting on my abuela\'s old sofa."','"Messi was running and the clock was ticking."','"My mother was praying with her eyes closed."','"The neighbours were banging pots from their windows."','"Tears were falling down his face."'],
    grammarRule:"We form the past continuous with was / were + verb -ing. It describes an action in progress at a moment in the past — the background of a scene.",
    grammarTable:[["Subject","was / were","verb + -ing"],["I / He / She / It","was","running"],["You / We / They","were","crying"]],
    grammarWatch:"Mix it with simple past for a sudden event: <em>\"When France scored (quick), my cousin was crying (in progress).\"</em>",
    grammarTip:"Use <strong>while</strong> + past continuous · <strong>when</strong> + simple past.",
    listeningTitle:"December 18, 2022",
    listeningDesc:"Escuchá el relato del Mundial y respondé.",
    listeningQ:[{q:"What was the narrator doing when the game started?",opts:["Standing outside","Sitting on his abuela's sofa","Walking around the kitchen","Watching from a bar"],correct:1},{q:"What was the narrator's uncle doing?",opts:["Praying","Crying","Walking around the kitchen","Screaming at the TV"],correct:2},{q:"What were the neighbours doing when Argentina scored?",opts:["Driving home","Sleeping","Banging pots from their windows","Watching in silence"],correct:2},{q:"What was the narrator's father doing at the end?",opts:["Calling someone","Hugging the narrator while crying","Laughing loudly","Leaving the room"],correct:1}],
    talkQ:["What was the narrator's family doing during the game?","Where were you during a big national or world event? What were you doing at that exact moment?","Do you prefer living big moments alone or surrounded by people? Why?","The narrator says some moments are 'too big for words.' Have you lived one? Describe the scene around you.","Why do you think we remember exactly where we were during important moments, even years later?"],
    talkTip:"Model: \"It was raining hard. I was waiting at the bus stop. A woman next to me was singing quietly, and a child was jumping in the puddles. Then my phone rang…\"",
    hwTask:"Elegí un momento que nunca vas a olvidar y describí la escena. ¿Qué estaban haciendo las personas a tu alrededor? Audio o video de 2 minutos.",
    gameType:"wordsearch",
    unitImageSeed:"football",
    warmupQuestions:[
      "What was the narrator's family doing during the World Cup final?",
      'Complete: "I was cooking _____ the phone rang."',
      "Describe where you were and what you were doing on a memorable day."
    ],
    quickCheck:[
      {statement:"The narrator's uncle was watching the game calmly.",answer:false},
      {statement:"The narrator remembers the exact minute Argentina won.",answer:false},
      {statement:"The narrator's father was crying when they won.",answer:true}
    ],
    speakingChallenge:'"Where were you?" game: The teacher names a famous event. Each student describes where they were and what they were doing when it happened.'
  },
  {num:"05",title:"My 2026 challenge",grammar:"Will / Going to",month:3,reading:`<p>This year I am going to change my life — for real this time. Every January I make promises and break them by February. But 2026 will be different. I can feel it.</p><p>First, I am going to learn to swim. I am thirty-four and I still can't swim, and that's embarrassing. I already paid for the classes, so I will not run away this time.</p><p>I am also going to call my father more often. He is getting older, and one day the phone will ring and it will be too late. I don't want that.</p><p>Will I become a millionaire? No. Will I run a marathon? Probably not. But I am going to read one book a month, and I am going to say "yes" to things that scare me a little.</p><p>People say small changes don't matter. I disagree. I think the small ones are the only ones that last. By December, I will be a slightly better version of myself. And honestly, that's enough.</p>`,
    vocab:[{word:"challenge",trans:"desafío, reto",ex:'"Learning a language is a beautiful challenge."'},{word:"promise",trans:"promesa",ex:'"He made a promise and he kept it."'},{word:"to break (a promise)",trans:"romper, incumplir",ex:'"Don\'t make plans you know you\'ll break."'},{word:"embarrassing",trans:"vergonzoso",ex:'"Forgetting his name was so embarrassing."'},{word:"to run away",trans:"escaparse, huir",ex:'"When things get hard, don\'t run away."'},{word:"to scare",trans:"asustar",ex:'"Big decisions always scare me a little."'},{word:"slightly",trans:"un poco, ligeramente",ex:'"The soup is slightly too salty."'},{word:"to last",trans:"durar",ex:'"Good habits are hard to build, but they last."'}],
    grammarExamples:['"This year I am going to change my life."','"2026 will be different."','"I am going to learn to swim."','"I will not run away this time."','"One day the phone will ring."'],
    grammarRule:"English has two main ways to talk about the future. Use going to for plans already decided; use will for predictions, promises, and decisions made in the moment.",
    grammarTable:[["Form","Use it for","Example"],["going to","plan already decided","I'm going to learn to swim."],["will","prediction or promise","2026 will be different."]],
    grammarWatch:"In speech, will usually shrinks to 'll: <strong>I'll, you'll, we'll, it'll</strong>.",
    grammarTip:"<strong>going to</strong> = decided before now · <strong>will</strong> = predicting or deciding right now.",
    listeningTitle:"Plans for 2026",
    listeningDesc:"Escuchá y respondé sobre los planes del narrador.",
    listeningQ:[{q:"What is the narrator going to learn this year?",opts:["To cook","To swim","To drive","To play guitar"],correct:1},{q:"How many books does the narrator plan to read per month?",opts:["Two","Three","One","Four"],correct:2},{q:"What does the narrator say about small changes?",opts:["They don't matter","They are impossible","They are the ones that last","They are boring"],correct:2},{q:"What does the narrator want to say 'yes' to?",opts:["More money","Things that scare him a little","Going to the gym","Working more hours"],correct:1}],
    talkQ:["What three changes does the narrator want to make this year?","Do you usually make New Year's resolutions? Do you keep them?","What is one small change you are going to make this year — starting soon?","The narrator believes small changes matter most. Do you agree, or do big leaps work better?","Where do you see yourself in five years, and what will you have to do to get there?"],
    talkTip:"Model: \"This year I'm going to walk every morning, and I'm going to cook at home more. I think I will feel healthier, and I'll probably save some money too.\"",
    hwTask:"Mini-presentación: Contá tu desafío personal para este año. ¿Qué vas a hacer? ¿Qué crees que va a pasar? Usá going to y will. Audio o video de 2 minutos.",
    gameType:"matching",
    unitImageSeed:"goals2026",
    warmupQuestions:[
      'What\'s the difference between "will" and "going to"?',
      "What are 3 of the narrator's plans for 2026?",
      'Make 2 predictions about your life using "will" and 2 plans using "going to."'
    ],
    quickCheck:[
      {statement:"The narrator has learned to swim already.",answer:false},
      {statement:"She plans to read two books a month.",answer:false},
      {statement:"She believes small changes are the ones that last.",answer:true}
    ],
    speakingChallenge:"Vision board in words: Describe your life in 5 years using will and going to. Be as specific and ambitious as possible."
  },
  {num:"06",title:"A letter to my younger self",grammar:"Modal Verbs",month:3,reading:`<p>Dear sixteen-year-old me, I have to tell you a few things, and you must listen carefully — even though you never listen to anyone.</p><p>First: you can do more than you think. That fear in your stomach before you speak? Everyone has it. You should talk anyway. You don't have to be perfect; you just have to start.</p><p>You should call your grandmother this Sunday. I won't tell you why, but trust me — you must not wait.</p><p>You can say "no" to people. Really. You don't have to go to every party, and you mustn't spend money you don't have just to look cool. Nobody remembers the shoes.</p><p>You should study, yes, but you must also rest. You can't pour from an empty cup. And please — you have to forgive yourself faster. You will make mistakes, big ones. That's fine. You should learn, and then you should move on.</p><p>You can't see it yet, but everything will be okay. With love, your older, calmer self.</p>`,
    vocab:[{word:"to forgive",trans:"perdonar",ex:'"It took years, but she finally forgave him."'},{word:"fear",trans:"miedo",ex:'"Fear is normal; let it sit next to you."'},{word:"to trust",trans:"confiar",ex:'"I trust my best friend completely."'},{word:"perfect",trans:"perfecto",ex:'"Don\'t wait for the perfect moment; it won\'t come."'},{word:"to rest",trans:"descansar",ex:'"You worked all week; you should rest now."'},{word:"mistake",trans:"error",ex:'"Everyone makes mistakes at the start."'},{word:"to move on",trans:"seguir adelante",ex:'"After the breakup, it took time to move on."'},{word:"calm",trans:"tranquilo",ex:'"Take a breath and try to stay calm."'}],
    grammarExamples:['"You can do more than you think."','"You should call your grandmother this Sunday."','"You must listen carefully."','"You don\'t have to be perfect."','"You mustn\'t spend money you don\'t have."'],
    grammarRule:"Modal verbs (can, should, must, have to) add meaning — ability, advice, or obligation. They are followed by the base verb, with no -s.",
    grammarTable:[["Modal","Meaning","Example"],["can","ability / possibility","You can do it."],["should","advice (good idea)","You should rest."],["must / have to","obligation","You must listen."],["mustn't","prohibition","You mustn't lie."],["don't have to","not necessary","You don't have to come."]],
    grammarWatch:"Big trap: <strong>mustn't = forbidden</strong>, but <strong>don't have to = optional</strong>. They look similar but mean opposite things.",
    grammarTip:"modal + base verb — no 'to', no -s: <strong>\"She can swim\"</strong>, never \"She cans swim.\"",
    listeningTitle:"Advice to your past self",
    listeningDesc:"Escuchá la carta y respondé.",
    listeningQ:[{q:"What does the writer say about fear before speaking?",opts:["You should avoid it","Everyone has it and you should talk anyway","It means you're not ready","Only beginners feel it"],correct:1},{q:"According to the letter, what should you do on Sunday?",opts:["Rest and don't work","Study","Call your grandmother","Go to a party"],correct:2},{q:"What does 'you can't pour from an empty cup' mean?",opts:["You shouldn't drink too much coffee","You need to take care of yourself first","Cups are fragile","Money runs out quickly"],correct:1},{q:"What should you do after making a big mistake?",opts:["Ignore it","Never forgive yourself","Learn and then move on","Tell everyone about it"],correct:2}],
    talkQ:["What does the writer say about fear and speaking up?","If you could send one message to your sixteen-year-old self, what would it be?","What is something young people today should do — and something they shouldn't?","Is there a rule in your life you have to follow but secretly disagree with?","The letter says 'you can't pour from an empty cup.' What does that line mean to you?"],
    talkTip:"Model: \"You should travel while you're young. You should save a little money every month. You have to call your mom — she misses you. But you mustn't compare your life to people on the internet.\"",
    hwTask:"Role-play: Imaginá que un amigo más joven te pide consejos de vida. Dale 3 consejos con should, 2 cosas que tiene que hacer, y 1 cosa que no debe hacer. Grabá el audio.",
    gameType:"crossword",
    unitImageSeed:"letter",
    warmupQuestions:[
      'What\'s the difference between "mustn\'t" and "don\'t have to"?',
      "Give 2 examples of things you should do and 1 thing you mustn't do.",
      "Which modal would you use to give advice? To express impossibility?"
    ],
    quickCheck:[
      {statement:"The writer says you have to be perfect before you start.",answer:false},
      {statement:"The writer says you should call your grandmother.",answer:true},
      {statement:"The writer says you must spend money to look cool.",answer:false}
    ],
    speakingChallenge:"Advice column: A friend has these problems — give them advice using can, should, must, and don't have to: (a) they can't sleep / (b) they're spending too much money / (c) they want to learn English faster."
  },
  {num:"07",title:"Things I've done that surprised me",grammar:"Present Perfect",month:4,reading:`<p>I've lived for forty years, and I've learned one thing: I don't really know myself.</p><p>I've done things I never expected. I've eaten ants in the north of Argentina (they taste like lemon, believe it or not). I've cried during a cartoon. I've forgiven people I swore I would hate forever.</p><p>I've travelled to twelve countries, but I've never been to Brazil — our neighbour! Isn't that strange? I've climbed a small mountain, and I've fainted at the sight of my own blood.</p><p>I've started learning the guitar four times and I've quit four times. But this year feels different. I've already practised every day for two months.</p><p>I've made big mistakes. I've hurt people I love, and some of them have forgiven me. That still amazes me.</p><p>The truth is, life is long enough to surprise you and short enough to matter. I haven't done everything I want yet. I still have a list. But I've already lived more than I ever planned — and that's a good problem to have.</p>`,
    vocab:[{word:"to expect",trans:"esperar (anticipar)",ex:'"I didn\'t expect such a warm welcome."'},{word:"to forgive",trans:"perdonar",ex:'"Have you ever forgiven someone who hurt you?"'},{word:"to faint",trans:"desmayarse",ex:'"She faints at the sight of needles."'},{word:"to quit",trans:"abandonar, dejar",ex:'"He quit smoking last year."'},{word:"to hurt",trans:"lastimar, herir",ex:'"I never meant to hurt you."'},{word:"to amaze",trans:"asombrar",ex:'"The view from the top amazed us."'},{word:"already",trans:"ya",ex:'"We\'ve already finished the first chapter."'},{word:"yet",trans:"todavía, aún",ex:'"I haven\'t read it yet."'}],
    grammarExamples:['"I\'ve lived for forty years."','"I\'ve never been to Brazil."','"I\'ve climbed a small mountain."','"I\'ve already practised every day for two months."','"I haven\'t done everything I want yet."'],
    grammarRule:"We form the present perfect with have / has + past participle. We use it for life experiences with no specific time, and for past actions that still matter now.",
    grammarTable:[["Subject","have / has","past participle"],["I / You / We / They","have ('ve)","done · been · lived"],["He / She / It","has ('s)","done · been · lived"]],
    grammarWatch:"Don't use it with a finished time word. <em>\"I've been to Peru\"</em> (experience) vs. <em>\"I went to Peru in 2019\"</em> (specific time).",
    grammarTip:"Signal words: <strong>ever, never, already, yet, just, for, since</strong>.",
    listeningTitle:"Life surprises",
    listeningDesc:"Escuchá y respondé sobre las experiencias del narrador.",
    listeningQ:[{q:"What do ants taste like, according to the narrator?",opts:["Chocolate","Lemon","Garlic","Nothing"],correct:1},{q:"How many countries has the narrator travelled to?",opts:["Ten","Eight","Twelve","Fifteen"],correct:2},{q:"Which country has the narrator NEVER visited?",opts:["Chile","Colombia","Brazil","Paraguay"],correct:2},{q:"How long has the narrator been practising guitar this time?",opts:["Two weeks","One month","Six months","Two months every day"],correct:3}],
    talkQ:["What are some of the surprising things the narrator has done?","What is something surprising you've done that people wouldn't expect?","Have you ever forgiven someone you were sure you never could?","Is there a place you've never visited but really want to see? Why that one?","What's still on your personal list — something you haven't done yet but plan to?"],
    talkTip:"Model: \"I've never eaten sushi, I've never broken a bone, and I've never seen the sea. But I've already run a 10k, I've already learned to drive, and I've already forgiven my brother — that's the big one.\"",
    hwTask:"Compartí 3 'I've never…' y 3 'I've already…' sobre tu vida. Después elegí el más sorprendente y contá la historia completa. Audio o video de 2-3 minutos.",
    gameType:"wordsearch",
    unitImageSeed:"travel",
    warmupQuestions:[
      'What\'s the difference between "I went" and "I\'ve been"?',
      'Use "already," "yet," and "just" in three different sentences.',
      'Share one "I\'ve never..." and explain why.'
    ],
    quickCheck:[
      {statement:"The narrator has been to Brazil.",answer:false},
      {statement:"The narrator has started learning guitar once.",answer:false},
      {statement:"The narrator says life is long enough to surprise you.",answer:true}
    ],
    speakingChallenge:'"Life bingo": Make a list of 5 experiences. Find classmates who have done each thing — "Have you ever...?" The first to find all 5 wins.',
    grammarExtra:{
      icon:"🔗", title:"Time Words — Connecting past to present",
      intro:"Present perfect time words don't anchor a story to a specific point — they connect experience to NOW. They're the reason we use \"have\" instead of \"did.\"",
      table:[
        ["Time word","Español","Use","Example"],
        ["ever","alguna vez","questions about life experience","Have you ever eaten insects?"],
        ["never","nunca","negative life experience","I've never been to Brazil."],
        ["already","ya","something done before expected","I've already finished the book."],
        ["yet","todavía / aún","something expected but not done","I haven't called her yet."],
        ["just","recién / justo","very recently completed","She's just arrived."],
        ["recently","recientemente","in the recent past","I've recently started exercising."],
        ["lately","últimamente","in the recent period","Have you been sleeping well lately?"],
        ["for + period","hace / desde hace","duration up to now","I've lived here for ten years."],
        ["since + point","desde","starting point up to now","I've known him since 2018."],
        ["so far","hasta ahora","up to this point","I've made three mistakes so far."],
        ["up to now","hasta ahora","same as so far","Up to now, everything is fine."]
      ],
      extraBlocks:[
        {
          heading:"FOR vs SINCE — the classic confusion",
          rows:[
            {label:"FOR = duration (how long)", examples:['"I\'ve studied English FOR two years."','"She\'s lived here FOR six months."']},
            {label:"SINCE = starting point (from when)", examples:['"I\'ve studied English SINCE 2022."','"She\'s lived here SINCE March."']}
          ],
          note:"Trick: FOR + period of time / SINCE + specific moment"
        },
        {
          heading:"ALREADY, YET, JUST — position matters",
          rows:[
            {label:"already → before the past participle (or end)", examples:['"I\'ve already eaten." / "I\'ve eaten already."']},
            {label:"yet → at the end, only in negatives and questions", examples:['"I haven\'t eaten yet." / "Have you eaten yet?"']},
            {label:"just → before the past participle", examples:['"I\'ve just eaten. I\'m not hungry."']}
          ]
        }
      ],
      watch:"NEVER use present perfect with a finished time word.<br/>✗ <em>\"I've been to Lima last year.\"</em><br/>✓ <strong>\"I went to Lima last year.\"</strong> (specific time → simple past)<br/>✓ <strong>\"I've been to Lima.\"</strong> (no specific time → present perfect)",
      practice:[
        "Have you ever done something that really surprised you? Tell us.",
        "What haven't you done yet that you really want to do?",
        "How long have you been living in your current city?"
      ]
    }
  },
  {
    num:"08", title:"Shopping in Palermo — how much and how many?", grammar:"Countable & Uncountable Nouns", month:4,
    reading:`<p>My favourite Sunday plan is walking around Palermo Soho and spending money I don't have.</p>
<p>First stop: the market on Plaza Serrano. There is always a lot of fruit — mangoes, strawberries, figs. How many mangoes do I need? Probably three. How much money do I have? Not enough.</p>
<p>I buy some coffee beans too. Coffee is uncountable, so you can't say "a coffee bean is an uncountable noun" — the bean is countable, but the coffee inside it is not. Language is strange.</p>
<p>Then I walk into a little bookshop. There are a few books about cooking, a couple of travel guides, and one very old dictionary. Books are countable. Knowledge is not.</p>
<p>At lunch, I sit at a café. The waiter asks: "How much water do you want?" and "How many glasses?" Both questions make sense, but they ask about different things. Water flows; glasses stand still.</p>
<p>I walk home with too many bags and too little money. But I have a lot of happiness. And happiness, like water and knowledge and coffee, is uncountable.</p>`,
    vocab:[
      {word:"countable",trans:"contable",ex:'"Books are countable nouns."'},
      {word:"uncountable",trans:"incontable",ex:'"Water is an uncountable noun."'},
      {word:"a few",trans:"algunos/as (poco)",ex:'"I have a few friends in this city."'},
      {word:"a little",trans:"un poco de",ex:'"She drinks a little coffee every morning."'},
      {word:"a lot of",trans:"mucho/a/os/as",ex:'"There is a lot of fruit at the market."'},
      {word:"how many",trans:"cuántos/as",ex:'"How many eggs do you need?"'},
      {word:"how much",trans:"cuánto/a",ex:'"How much time do we have?"'},
      {word:"enough",trans:"suficiente",ex:'"I don\'t have enough money."'},
    ],
    grammarExamples:[
      '"There is a lot of fruit."',
      '"How many mangoes do I need?"',
      '"How much money do I have?"',
      '"There are a few books about cooking."',
      '"I have a lot of happiness."'
    ],
    grammarRule:"Nouns in English are either countable (you can count them: one book, two books) or uncountable (you can't count them: water, money, music, knowledge). This changes the words you use before them.",
    grammarTable:[
      ["","Countable","Uncountable"],
      ["Singular","a book / one book","—"],
      ["Plural","books / three books","—"],
      ["Some (affirmative)","some books","some water"],
      ["Any (negative/question)","any books?","any water?"],
      ["A few / a little","a few books","a little water"],
      ["A lot of","a lot of books","a lot of water"],
      ["How many / how much","How many books?","How much water?"],
      ["Enough","enough books","enough water"]
    ],
    grammarWatch:"<strong>Common uncountable nouns:</strong> advice, bread, coffee, furniture, hair, homework, information, knowledge, luggage, money, music, news, progress, rain, research, rice, sugar, time, traffic, travel, water, weather, work.<br/>✗ <em>\"I need an information.\"</em> → ✓ <strong>\"I need some information.\"</strong><br/>✗ <em>\"She gave me an advice.\"</em> → ✓ <strong>\"She gave me some advice.\"</strong><br/>✗ <em>\"How many money?\"</em> → ✓ <strong>\"How much money?\"</strong>",
    grammarTip:"\"News\" looks plural but it's always singular and uncountable: <strong>\"The news IS bad today,\"</strong> never \"the news ARE bad.\" Same with information, advice, furniture, and homework.",
    listeningTitle:"Sunday in Palermo",
    listeningDesc:"Escuchá el paseo por Palermo y respondé las preguntas.",
    listeningQ:[
      {q:"What does the narrator buy at the market?",opts:["Vegetables and bread","Mangoes, strawberries, figs and coffee beans","Books and water","Clothes and shoes"],correct:1},
      {q:"Why can't you say \"a coffee\" to mean the substance?",opts:["Because coffee is too expensive","Because coffee is an uncountable noun","Because you always order two","Because it's always in a cup"],correct:1},
      {q:"What does the narrator buy at the bookshop?",opts:["Travel guides only","A dictionary only","Nothing — she just looks","Some books about cooking, travel guides, and a dictionary"],correct:3},
      {q:"What does the narrator say about happiness?",opts:["You can count it easily","It is like books — countable","It is uncountable, like water and knowledge","It costs a lot of money"],correct:2},
    ],
    talkQ:[
      "What is a countable noun from your home? And an uncountable one?",
      "How many cups of coffee (or tea) do you drink a day? How much sugar do you use?",
      "The narrator says books are countable but knowledge is not. What do you think — is that a good way to think about it?",
      "Look around the room right now. Name five countable things and three uncountable things.",
      '"I have a lot of happiness but not enough money." Do you agree that some of the most important things in life are uncountable?'
    ],
    talkTip:"Model: \"In my kitchen there is a lot of food. There are a few apples and some bread. There isn't much sugar, but there are enough cups for everyone.\"",
    hwTask:"Grabá un audio o video de 2 minutos describiendo tu cocina, tu mochila o tu cuarto usando sustantivos contables e incontables. Usá: there is/are, a lot of, a few, a little, how much/many, enough.",
    gameType:"matching",
    unitImageSeed:"market",
    warmupQuestions:[
      "Name 5 uncountable nouns from memory.",
      'What\'s the difference between "a few" and "a little"?',
      'Ask 3 questions using "how much" and 3 using "how many."'
    ],
    quickCheck:[
      {statement:"The narrator goes to the market to save money.",answer:false},
      {statement:'"Coffee" as a substance is a countable noun.',answer:false},
      {statement:"The narrator says happiness is uncountable.",answer:true}
    ],
    speakingChallenge:"Supermarket challenge: Without using numbers, describe what you need to buy — using some, a lot of, a few, a little, enough. Your partner has to write the shopping list."
  },
  {num:"09",title:"The best city to live in — is it yours?",grammar:"Comparatives & Superlatives",month:4,reading:`<p>Everybody thinks their city is the best — and everybody is a little bit right. I was born in Córdoba, but I've lived in Buenos Aires, Mendoza, and Montevideo. People always ask me which one is better. Honestly? It's the hardest question in the world.</p><p>Buenos Aires is bigger, louder, and more exciting than anywhere else. But it's also more stressful and more expensive. Mendoza is calmer and cleaner, and the wine is cheaper and better. Montevideo is the most relaxed city I know — slower, friendlier, and safer than the rest.</p><p>Córdoba? It has the funniest people in the country and the worst traffic. But it's home, so for me it will always be the most beautiful.</p><p>The truth is, there is no "best" city. The happiest people aren't in the richest places. The best city is the one where you sleep well, laugh often, and feel less alone. Sometimes that's a huge capital. Sometimes it's a small town nobody has heard of. The best city is the one that feels like yours.</p>`,
    vocab:[{word:"loud / louder",trans:"ruidoso / más ruidoso",ex:'"The party next door is louder than ours."'},{word:"stressful",trans:"estresante",ex:'"December is the most stressful month at work."'},{word:"expensive",trans:"caro",ex:'"Flights are more expensive in summer."'},{word:"calm / calmer",trans:"tranquilo / más tranquilo",ex:'"I feel calmer near the mountains."'},{word:"cheap / cheaper",trans:"barato / más barato",ex:'"The market is cheaper than the supermarket."'},{word:"friendly / friendlier",trans:"amable / más amable",ex:'"Small towns are usually friendlier."'},{word:"traffic",trans:"tráfico",ex:'"The traffic here is a nightmare at six."'},{word:"alone",trans:"solo",ex:'"A good city makes you feel less alone."'}],
    grammarExamples:['"Buenos Aires is bigger and louder than anywhere else."','"Mendoza is calmer and cleaner."','"The wine is cheaper and better."','"Montevideo is the most relaxed city I know."','"It has the funniest people and the worst traffic."'],
    grammarRule:"To compare two things use comparatives (-er or more); to talk about the top of a group use superlatives (the -est or the most).",
    grammarTable:[["Adjective","Comparative","Superlative"],["Short (big, calm)","bigger, calmer","the biggest, the calmest"],["Ends in -y (funny)","funnier","the funniest"],["Long (expensive)","more expensive","the most expensive"],["Irregular (good/bad)","better / worse","the best / the worst"]],
    grammarWatch:"Never say <strong>\"more better\"</strong> or <strong>\"most biggest\"</strong> — that's a double comparison. Choose one: either the ending OR more/most.",
    grammarTip:"<strong>A is -er than B</strong> · <strong>A is the -est of all</strong>.",
    listeningTitle:"City comparison",
    listeningDesc:"Escuchá y respondé sobre las ciudades.",
    listeningQ:[{q:"Which city does the narrator describe as the most relaxed?",opts:["Buenos Aires","Mendoza","Córdoba","Montevideo"],correct:3},{q:"What is Mendoza known for, according to the text?",opts:["Nightlife and culture","Cheaper wine and calmer lifestyle","The biggest airport","The best football"],correct:1},{q:"What is the 'worst' thing about Córdoba?",opts:["The food","The people","The traffic","The weather"],correct:2},{q:"What makes a city 'the best', according to the narrator?",opts:["Size and population","Famous landmarks","Where you sleep well, laugh, and feel less alone","The economy"],correct:3}],
    talkQ:["Which cities has the narrator lived in, and how does he compare them?","What's the best city or town you've ever visited? What made it special?","Is your city better or worse than it was ten years ago? In what way?","The narrator says the best city 'feels like yours.' Do you agree? Where feels like yours?","If you could live anywhere in the world, where would it be — and why would it be better than where you are now?"],
    talkTip:"Model: \"My city is greener than yours, and the food is cheaper. We have the friendliest people in the country. Your city is more exciting, sure — but it's also more dangerous and much louder.\"",
    hwTask:"Debate: Defendé tu ciudad favorita comparándola con otra. Usá al menos 5 comparativos y 2 superlativos. Audio o video de 2 minutos.",
    gameType:"crossword",
    unitImageSeed:"citylife",
    warmupQuestions:[
      "What's the comparative and superlative of: good / bad / far / expensive?",
      "Compare two cities you know using 3 comparatives.",
      "What's the most beautiful place you've ever been? Use superlatives."
    ],
    quickCheck:[
      {statement:"Buenos Aires is calmer than Mendoza, according to the text.",answer:false},
      {statement:"The narrator says there is no single 'best' city.",answer:true},
      {statement:"Montevideo is described as the most relaxed city.",answer:true}
    ],
    speakingChallenge:"City battle: Each student picks a city and has 90 seconds to convince the class it's the best place to live — using comparatives and superlatives only."
  },
  {num:"10",title:"The restaurant I'll never forget",grammar:"Adjectives & Adverbs",month:5,reading:`<p>It was a small, ugly restaurant on a quiet street in Salta, and it served the best food I've ever eaten.</p><p>We almost didn't go in. The sign was old, the door was heavy, and the lights were dim. But we were terribly hungry, so we walked in slowly and sat down nervously in the corner.</p><p>The owner, an old woman with bright eyes, moved quickly between the tables. She didn't give us a menu. She simply looked at us carefully and said, "I'll decide."</p><p>We laughed nervously and agreed. The food came out hot, fresh, and beautiful. The empanadas were perfectly crispy. The wine was deep and warm. We ate hungrily and talked loudly, like old friends, even though we had just met that morning.</p><p>She cooked everything herself, slowly and lovingly, like it actually mattered. And it did. We finished happily, paid almost nothing, and stepped outside into the cold mountain air.</p><p>Some places feed your stomach. The truly special ones feed something deeper, quietly, when you least expect it.</p>`,
    vocab:[{word:"ugly",trans:"feo",ex:'"It was an ugly building with a beautiful soul."'},{word:"dim",trans:"tenue (luz)",ex:'"The light was dim and romantic."'},{word:"nervously",trans:"nerviosamente",ex:'"He waited nervously for the results."'},{word:"crispy",trans:"crocante",ex:'"I love crispy fried potatoes."'},{word:"deep",trans:"profundo",ex:'"She has a deep, calm voice."'},{word:"lovingly",trans:"con cariño",ex:'"She wrapped the gift lovingly."'},{word:"quietly",trans:"en silencio, en voz baja",ex:'"He closed the door quietly."'},{word:"to feed",trans:"alimentar",ex:'"Good music feeds the soul."'}],
    grammarExamples:['"It was a small, ugly restaurant on a quiet street."','"The owner moved quickly between the tables."','"We walked in slowly and sat down nervously."','"The empanadas were perfectly crispy."','"She cooked everything slowly and lovingly."'],
    grammarRule:"Adjectives describe nouns (a quiet street). Adverbs describe verbs — how something is done (she moved quickly). Most adverbs = adjective + -ly.",
    grammarTable:[["Describes","Example"],["Adjective — a noun","a quiet street · hot food"],["Adverb — a verb","she moved quickly · terribly hungry"]],
    grammarWatch:"<strong>\"Good\"</strong> is an adjective; <strong>\"well\"</strong> is its adverb. Say <em>\"She's a good cook\"</em> but <em>\"She cooks well.\"</em>",
    grammarTip:"Adjective <strong>before a noun</strong> (a deep voice) or after be (the voice is deep). Adverb usually <strong>after the verb</strong> (she sings beautifully).",
    listeningTitle:"The restaurant in Salta",
    listeningDesc:"Escuchá la descripción y respondé.",
    listeningQ:[{q:"How did the restaurant look from the outside?",opts:["Modern and bright","Small, ugly, and dim","Big and colourful","Clean and expensive"],correct:1},{q:"Who chose the food for the visitors?",opts:["The waiter","The narrator","The old woman owner","Their friend"],correct:2},{q:"How did the empanadas taste?",opts:["Soft and sweet","Spicy and salty","Perfectly crispy","Too salty"],correct:2},{q:"What does the narrator mean by 'feeding something deeper'?",opts:["The food was very filling","The experience touched them emotionally","The portions were large","They were very hungry"],correct:1}],
    talkQ:["Why was the restaurant unforgettable, even though it looked ugly?","Describe the best meal you've ever had. Where were you, and who were you with?","Do you prefer fancy restaurants or simple, hidden places? Why?","The owner chose the food for them. Would you trust a cook to decide for you? Why or why not?","The narrator says some places 'feed something deeper.' Tell us about a place that did that for you."],
    talkTip:"Model: \"It was a noisy, colourful market. People walked quickly and shouted cheerfully. An old man played the guitar softly in the corner. The fruit smelled sweet, and everything felt wonderfully alive.\"",
    hwTask:"Describí un lugar memorable (un restaurante, una casa, un mercado). Usá al menos 5 adjetivos y 5 adverbios. Audio o video de 2 minutos.",
    gameType:"matching",
    unitImageSeed:"restaurant",
    warmupQuestions:[
      "Name 5 adjectives and their adverb forms.",
      "Describe a memorable place using 3 adjectives and 3 adverbs.",
      'What\'s the adverb form of "good"? Use it in a sentence.'
    ],
    quickCheck:[
      {statement:"The restaurant in Salta looked beautiful from outside.",answer:false},
      {statement:"The owner gave them a menu to choose from.",answer:false},
      {statement:"The narrator says some places feed something deeper.",answer:true}
    ],
    speakingChallenge:"Sensory description game: Close your eyes. The teacher describes a place using adjectives and adverbs. Students draw what they imagine, then compare."
  },
  {num:"11",title:"From zero to conversation — student stories",grammar:"All Tenses",month:5,reading:`<p>Three years ago, Marcela couldn't say "hello" in English. Today she works as a tour guide in Cartagena.</p><p>"I was so scared at the beginning," she says. "I am still learning, but now I talk to tourists every single day. Last week I helped a family from Canada find their hotel. They were lost, and I understood everything. I almost cried."</p><p>Diego started later, at fifty-two. "People told me I was too old. I didn't listen. I've studied for two years now, and next month I'm going to give a presentation in English at work. I will probably make mistakes, and that's fine."</p><p>And Sofía? She was failing every class. "I hated English. Then I met a teacher who made me laugh. Everything changed. I've made friends from six countries. I am writing a blog now, and one day I will live abroad."</p><p>Three people. Three stories. One truth: nobody is born speaking English. Everybody starts at zero. The ones who succeed are simply the ones who keep going, one imperfect sentence at a time.</p>`,
    vocab:[{word:"scared",trans:"asustado",ex:'"I was scared, but I did it anyway."'},{word:"tour guide",trans:"guía turístico",ex:'"Our tour guide knew every street by name."'},{word:"lost",trans:"perdido",ex:'"We got completely lost in the old town."'},{word:"to fail",trans:"reprobar, fracasar",ex:'"I failed the test, then I tried again."'},{word:"to succeed",trans:"tener éxito, lograrlo",ex:'"You succeed by not giving up."'},{word:"abroad",trans:"en el extranjero",ex:'"She has always wanted to live abroad."'},{word:"to keep going",trans:"seguir adelante",ex:'"It\'s hard, but keep going."'},{word:"imperfect",trans:"imperfecto",ex:'"An imperfect sentence is better than silence."'}],
    grammarExamples:['"Simple present — Today she works as a tour guide."','"Simple past — Last week I helped a family from Canada."','"Past continuous — She was failing every class."','"Present continuous — I am writing a blog now."','"Present perfect — I\'ve made friends from six countries."','"Future — Next month I\'m going to give a presentation."'],
    grammarRule:"This unit pulls everything together. Each tense answers a different question about time: is it a habit, happening now, finished, in progress, linked to now, or still ahead?",
    grammarTable:[["Tense","Use it for","Signal words"],["Simple present","habits, facts","every day, usually"],["Present continuous","now / near future","right now, at the moment"],["Simple past","finished past","yesterday, last week, ago"],["Past continuous","background in past","while, when"],["Present perfect","past linked to now","ever, never, already, since"],["Will / going to","the future","tomorrow, next month, one day"]],
    grammarWatch:"Choose your tense by asking: <strong>when did it happen?</strong> and <strong>is it still connected to now?</strong>",
    grammarTip:"<strong>One idea, one tense — then keep moving.</strong> Fluency is choosing, not freezing.",
    listeningTitle:"Student success stories",
    listeningDesc:"Escuchá las historias de los tres estudiantes y respondé.",
    listeningQ:[{q:"What does Marcela do today?",opts:["She's a teacher","She works as a tour guide in Cartagena","She lives in Canada","She's a translator"],correct:1},{q:"How old was Diego when he started learning English?",opts:["Thirty","Forty","Fifty-two","Sixty-five"],correct:2},{q:"What changed everything for Sofía?",opts:["A new app","Moving to another country","Meeting a teacher who made her laugh","Watching movies in English"],correct:2},{q:"What is the main message of the text?",opts:["English is only for young people","You need a talent for languages","Everyone starts at zero; keep going","Grammar is the most important thing"],correct:2}],
    talkQ:["Which of the three stories do you connect with most, and why?","Diego ignored people who said he was 'too old.' Were they wrong? Is there a right age to start?","What made the difference for Sofía? Have you ever had a teacher who changed everything?","Where are you right now in your own English journey — and where do you want to be?","The text says 'nobody is born speaking English.' What advice would you give a beginner who feels like giving up?"],
    talkTip:"Model: \"Two years ago I couldn't understand a song in English. Now I watch series with subtitles, and I'm practising every week. I've already learned so much. Next year I'm going to travel and order food in English — without my phone.\"",
    hwTask:"Proyecto final: Contá TU historia de aprendizaje. Usá el pasado (cómo empezaste), el presente (qué hacés ahora) y el futuro (qué vas a hacer). Audio o video de 3-5 minutos.",
    gameType:"crossword",
    unitImageSeed:"students",
    warmupQuestions:[
      'What tense does each signal word belong to: "yesterday / ever / right now / since / will / was...ing"?',
      "Tell your language learning story using at least 4 different tenses.",
      "What's your best piece of advice for a new English student?"
    ],
    quickCheck:[
      {statement:"The narrator has always loved English.",answer:false},
      {statement:"Diego is going to give a presentation in English next month.",answer:true},
      {statement:"Sofía has made friends from three countries.",answer:false}
    ],
    speakingChallenge:'Full circle: Students present their "English journey story" — where they started, what they\'ve learned, and where they\'re going. Use all tenses. 3 minutes each.'
  }
];

export const MONTHS = [
  {label:"Mes 1 — My everyday life"},
  {label:"Mes 2 — Stories from the past"},
  {label:"Mes 3 — Looking ahead"},
  {label:"Mes 4 — Experience & change"},
  {label:"Mes 5 — Express yourself"}
];

// Narrator gender per unit index (11 units): male (0,2,4,6,8,10) / female (1,3,5,7,9)
export const NARRATOR_GENDER = ['male','female','male','female','male','female','male','female','male','female','male'];
