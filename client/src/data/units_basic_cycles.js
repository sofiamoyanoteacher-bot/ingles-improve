// Cycle 2 and Cycle 3 content for Basic units.
// Indexed to match UNITS array in units.js (0 = Unit 01, 1 = Unit 02, ...).
export const BASIC_CYCLES = [

  // ── 0: Unit 01 – Simple Present ─────────────────────────────────────────
  {
    cycle2: {
      reading:`<p>My name is Valentina and I talk to strangers for a living. Every morning at six I sit in front of a microphone and ask questions. Do people wake up early? Do they drink coffee? Does the city feel different before nine? I find out.</p>
<p>My guests come from everywhere. A taxi driver on Mondays. A nurse on Tuesdays. A student, a chef, a grandmother — each one has a story. Do they get nervous? Sometimes. Does it matter? Not really. The microphone makes everyone brave.</p>
<p>People ask me: "Do you get bored?" Never. Does this job feel like work? Honestly, no. I just listen, I ask, and the world talks back. That's my morning routine, one honest conversation at a time.</p>`,
      vocab:[
        {word:"microphone",trans:"micrófono",ex:'"She speaks clearly into the microphone."'},
        {word:"guest",trans:"invitado/a",ex:'"Our guest today is a marine biologist."'},
        {word:"brave",trans:"valiente",ex:'"It takes something brave to tell the truth in public."'},
        {word:"to get bored",trans:"aburrirse",ex:'"I never get bored at a live concert."'},
        {word:"to find out",trans:"descubrir, enterarse",ex:'"I need to find out what time the bus leaves."'},
      ],
      quickCheck:[
        {statement:"Valentina talks to the same guests every week.",answer:false},
        {statement:"The microphone helps guests feel more comfortable.",answer:true},
        {statement:"Valentina finds her job boring.",answer:false},
      ],
      listeningTitle:"The voice behind the morning",
      listeningDesc:"Listen to Valentina's story and answer.",
      listeningQ:[
        {q:"What time does Valentina start work?",opts:["At 5 AM","At 6 AM","At 7 AM","At 8 AM"],correct:1},
        {q:"Where do her guests come from?",opts:["Only from journalism","Only from politics","From everywhere — all kinds of people","From the same neighbourhood"],correct:2},
        {q:"How does Valentina feel about her job?",opts:["She finds it boring","She thinks it is too easy","She feels it is not real work","She loves it"],correct:3},
        {q:"What does Valentina do besides ask questions?",opts:["She sings","She listens","She cooks","She travels"],correct:1},
      ],
      grammarExamples:[
        '"Do people wake up early?"',
        '"Does the city feel different before nine?"',
        '"Does it matter? Not really."',
        '"Do you get bored? Never."',
      ],
      grammarRule:"We use DO or DOES to form questions and negatives in the Simple Present. Use DO with I / you / we / they and DOES with he / she / it. The main verb always stays in the base form.",
      grammarTable:[["Question","Short answer (yes)","Short answer (no)"],["Do you work early?","Yes, I do.","No, I don't."],["Does she get nervous?","Yes, she does.","No, she doesn't."],["Do they listen?","Yes, they do.","No, they don't."]],
      grammarWatch:"When you use DOES, the main verb loses the -s: <strong>\"Does she work?\"</strong> — NOT <em>\"Does she works?\"</em>",
      grammarTip:"Structure: <strong>Do / Does + subject + base verb?</strong> For negatives: <strong>subject + don't / doesn't + base verb.</strong>",
      talkQ:[
        "Does Valentina know her guests before the interview?",
        "Do you ever listen to the radio or a podcast? What kind do you prefer?",
        "Ask your partner: 'Do you usually wake up before seven?' 'Does your family eat breakfast together?'",
        "What questions would you ask a famous person if you had one minute on the radio?",
      ],
      talkTip:`Model: "Does my family eat dinner together? Yes, usually. Do my parents watch TV at night? Almost always. Do I sleep enough? Honestly, no."`,
      speakingChallenge:"Interview challenge: Ask your partner five 'Do you…?' questions to discover their daily routine. Write down the answers.",
    },
    cycle3: {
      reading:`<p>My name is Clara and I don't own a car. I don't have a dishwasher, a television, or a sofa. People think my apartment is empty. I think it's honest.</p>
<p>I don't need a lot of things to feel happy. I know this sounds strange. But I believe that objects don't make us free — they make us busy. I have books, a bed, a desk, and one excellent kitchen knife. That's enough.</p>
<p>I don't spend money on things I don't want. I don't keep items I don't use. People ask me: "Don't you feel lonely?" I don't, actually. I know my neighbours, I like my walks, and I always have time because I'm not busy looking after things.</p>`,
      vocab:[
        {word:"minimalist",trans:"minimalista",ex:'"She lives a minimalist life with very few possessions."'},
        {word:"to own",trans:"poseer, tener",ex:'"Do you own your apartment or rent it?"'},
        {word:"possessions",trans:"pertenencias",ex:'"He sold all his possessions before moving abroad."'},
        {word:"to look after",trans:"cuidar",ex:'"Who looks after your plants when you travel?"'},
        {word:"item",trans:"objeto, artículo",ex:'"Each item on the list costs under ten dollars."'},
      ],
      quickCheck:[
        {statement:"Clara owns a television.",answer:false},
        {statement:"Clara buys things when they are on sale.",answer:false},
        {statement:"Clara feels lonely without many objects.",answer:false},
      ],
      listeningTitle:"Less is more",
      listeningDesc:"Listen to Clara's story and answer.",
      listeningQ:[
        {q:"What does Clara NOT have in her apartment?",opts:["Books","A kitchen knife","A television","A bed"],correct:2},
        {q:"What does Clara believe objects do?",opts:["Make us happy","Make us busy","Make us free","Make us creative"],correct:1},
        {q:"Why does Clara always have time?",opts:["She works from home","She doesn't own a phone","She isn't busy looking after things","She sleeps a lot"],correct:2},
        {q:"How does Clara feel about her lifestyle?",opts:["Lonely","Embarrassed","Content","Confused"],correct:2},
      ],
      grammarExamples:[
        '"I don\'t own a car."',
        '"I don\'t need a lot of things to feel happy."',
        '"I believe that objects don\'t make us free."',
        '"I don\'t spend money on things I don\'t want."',
      ],
      grammarRule:"For negatives in the Simple Present, use don't (I/you/we/they) or doesn't (he/she/it) + the base verb. Stative verbs like know, believe, want, need, own, and like describe states — not actions — so they always use the Simple Present, never the -ing form.",
      grammarTable:[["Subject","Negative","Stative verb examples"],["I / You / We / They","don't + base verb","know, believe, want, need"],["He / She / It","doesn't + base verb","own, like, feel, understand"]],
      grammarWatch:"Never use stative verbs with -ing: <em>\"I am knowing\"</em> ✗ → <strong>\"I know\"</strong> ✓ &nbsp;|&nbsp; <em>\"She is believing\"</em> ✗ → <strong>\"She believes\"</strong> ✓",
      grammarTip:"Stative verbs describe a state, not an action: <strong>know, believe, want, need, own, like, prefer, understand, mean, seem, agree.</strong>",
      talkQ:[
        "What does Clara NOT have in her home? Why does she choose this?",
        "Do you agree that 'less is more'? Or do you enjoy having nice things around you?",
        "What's one thing you own that you don't need but love anyway?",
        "Name three things you don't do in your daily routine and explain why using: I don't… because I believe / know / feel…",
      ],
      talkTip:`Model: "I don't need expensive things to feel comfortable. I know that sounds strange, but I don't really care about brands. I believe life is more about experiences than objects."`,
      speakingChallenge:"List five things you don't do every day. Then pick one and explain it in three sentences using stative verbs: know, believe, feel, understand.",
    },
  },

  // ── 1: Unit 02 – Present Continuous ─────────────────────────────────────
  {
    cycle2: {
      reading:`<p>This week is insane. I'm having dinner with my boss on Tuesday — she is flying in from Montevideo and we are meeting at a restaurant in Palermo. On Wednesday my sister is arriving from Rosario with her three kids. Three kids. She is staying until Sunday.</p>
<p>I'm also starting a new project on Thursday. My team is presenting to the client at ten in the morning, and I am preparing the slides right now, at midnight. This is not ideal.</p>
<p>The good news: on Saturday I'm going to a concert with my old friend Diego. We are celebrating fifteen years of friendship. Life is busy and beautiful and completely out of control. But I'm not complaining.</p>`,
      vocab:[
        {word:"insane",trans:"una locura, alucinante",ex:'"This week is insane — I have five meetings a day."'},
        {word:"to fly in",trans:"llegar en avión",ex:'"My parents are flying in from Madrid next Friday."'},
        {word:"to present",trans:"presentar",ex:'"She is presenting the project to the board tomorrow."'},
        {word:"slides",trans:"diapositivas",ex:'"I am still preparing the slides for the meeting."'},
        {word:"to celebrate",trans:"celebrar",ex:'"We are celebrating our anniversary this weekend."'},
      ],
      quickCheck:[
        {statement:"The narrator's boss is coming from Buenos Aires.",answer:false},
        {statement:"The narrator is preparing slides at midnight.",answer:true},
        {statement:"The narrator is complaining about the week.",answer:false},
      ],
      listeningTitle:"A very full week",
      listeningDesc:"Listen to the story and answer.",
      listeningQ:[
        {q:"Where is the boss flying in from?",opts:["Rosario","Córdoba","Montevideo","Madrid"],correct:2},
        {q:"How many kids is the narrator's sister bringing?",opts:["One","Two","Three","Four"],correct:2},
        {q:"When is the team presentation?",opts:["Tuesday morning","Wednesday night","Thursday at ten","Friday at noon"],correct:2},
        {q:"What is happening on Saturday?",opts:["A work dinner","A concert with Diego","A family lunch","A football match"],correct:1},
      ],
      grammarExamples:[
        '"I\'m having dinner with my boss on Tuesday."',
        '"She is flying in from Montevideo."',
        '"My sister is arriving from Rosario."',
        '"We are celebrating fifteen years of friendship."',
      ],
      grammarRule:"We can use the Present Continuous for fixed future arrangements — plans we have already organised. These are personal diary events, not open possibilities. We almost always say when they happen.",
      grammarTable:[["Use","Signal words","Example"],["Future arrangement","on Monday / tomorrow / next week","I'm meeting her on Tuesday."],["Current action","now / at the moment","I am preparing the slides right now."],["Changing situation","these days / this week","Life is getting busier."]],
      grammarWatch:"The Present Continuous for the future is for <strong>arrangements already made</strong>. For open predictions or decisions made now, use <strong>will</strong>: <em>\"I'll call you later.\"</em>",
      grammarTip:"Ask: <strong>Is this planned and fixed?</strong> If yes → Present Continuous. If it's a prediction or spontaneous decision → will.",
      talkQ:[
        "What is the narrator doing this week? Name three arrangements.",
        "What are you doing this weekend? Describe two real plans using the Present Continuous.",
        "What arrangements does your family have for next month?",
        "Is your week usually this full? How do you manage a busy schedule?",
      ],
      talkTip:`Model: "I'm having lunch with my sister on Saturday. She's coming from Córdoba. On Sunday I'm going to the gym — I'm trying to go three times a week."`,
      speakingChallenge:"Write your diary for next week. Use Present Continuous for at least five fixed arrangements. Then describe your week to a partner.",
    },
    cycle3: {
      reading:`<p>My name is Rodrigo and I teach history. Usually I teach in a classroom, I use a projector, and I finish at three. I walk home, I eat lunch, I read. That's my life, Monday to Friday.</p>
<p>But today is different. Today I am teaching outside, in the park, because our classroom has a broken heater. My students are sitting on the grass. One of them is feeding pigeons instead of taking notes. I am pretending not to see him.</p>
<p>Usually I speak clearly and slowly. Today I am speaking loudly because the traffic is noisy. Usually my students are quiet. Today they are laughing — a lot. It is chaos, honestly. But they are learning. And so am I.</p>`,
      vocab:[
        {word:"projector",trans:"proyector",ex:'"The projector is not working today."'},
        {word:"heater",trans:"calefactor",ex:'"The heater broke in the middle of winter."'},
        {word:"pigeon",trans:"paloma",ex:'"There are pigeons everywhere in the square."'},
        {word:"chaos",trans:"caos",ex:'"The market was absolute chaos on Saturday."'},
        {word:"loudly",trans:"en voz alta, fuerte",ex:'"She was speaking so loudly that everyone heard."'},
      ],
      quickCheck:[
        {statement:"Rodrigo usually teaches outside.",answer:false},
        {statement:"A student is feeding pigeons during the class.",answer:true},
        {statement:"Rodrigo's students are usually very noisy.",answer:false},
      ],
      listeningTitle:"History class in the park",
      listeningDesc:"Listen to Rodrigo's story and answer.",
      listeningQ:[
        {q:"Why is Rodrigo teaching in the park today?",opts:["He prefers outdoor classes","The classroom heater is broken","The school is closed","It is a special school event"],correct:1},
        {q:"What is one student doing instead of taking notes?",opts:["Sleeping","Listening to music","Feeding pigeons","Drawing"],correct:2},
        {q:"How is Rodrigo speaking today compared to usual?",opts:["More slowly","More quietly","More loudly","More formally"],correct:2},
        {q:"How does Rodrigo feel about the chaotic class?",opts:["Angry","Completely negative","Positive — they are learning","He wants to go home"],correct:2},
      ],
      grammarExamples:[
        '"Usually I teach in a classroom. Today I am teaching outside."',
        '"Usually I speak clearly and slowly. Today I am speaking loudly."',
        '"Usually my students are quiet. Today they are laughing."',
      ],
      grammarRule:"The Simple Present describes permanent routines and general truths. The Present Continuous describes what is happening right now or a temporary situation around the present time. We often contrast them using words like usually, always, today, right now, at the moment.",
      grammarTable:[["Tense","Use","Signal words"],["Simple Present","routine, habit, always true","usually, always, every day, never"],["Present Continuous","happening now / temporary","now, at the moment, today, this week"]],
      grammarWatch:"Don't use the Present Continuous for routines: <em>\"I am working every day\"</em> ✗ → <strong>\"I work every day\"</strong> ✓. Don't use Simple Present for right now: <em>\"I eat\"</em> when you mean this exact moment ✗ → <strong>\"I am eating\"</strong> ✓",
      grammarTip:"The contrast is clear: <strong>I work in an office</strong> (always) vs <strong>I'm working from home this week</strong> (temporary).",
      talkQ:[
        "How is Rodrigo's day today different from his usual routine?",
        "Is there something you usually do but are NOT doing this week? Why?",
        "Describe your usual morning. Then describe what you are doing differently today.",
        "Do you prefer routines or days that are different from normal? Why?",
      ],
      talkTip:`Model: "I usually take the bus to work. But this week I'm walking because the bus drivers are on strike. It's actually quite nice — I'm discovering streets I've never seen."`,
      speakingChallenge:"Describe a day when everything was different from your routine. Use both Simple Present (your usual habits) and Present Continuous (what was different that day).",
    },
  },

  // ── 2: Unit 03 – Simple Past ─────────────────────────────────────────────
  {
    cycle2: {
      reading:`<p>"Did you sleep last night?" my friend Ana asked me this morning. "No," I said. "Did something happen?" she asked. Yes. Something happened.</p>
<p>I got home at midnight, made tea, and sat down to watch one episode of a series. Did I watch one episode? No. I watched six. Did I feel good about it? At the time, yes. At seven in the morning, absolutely not.</p>
<p>The series ended. I turned off the TV. Did I go to bed? No — I started thinking about the ending. Did the ending make sense? I'm not sure. Did I fall asleep before four? I didn't. This is not my proudest night. But I regret nothing.</p>`,
      vocab:[
        {word:"episode",trans:"episodio",ex:'"I only watched one episode, then I fell asleep."'},
        {word:"ending",trans:"final (de historia)",ex:'"The ending of the film surprised everyone."'},
        {word:"proudest",trans:"más orgulloso",ex:'"That was not my proudest moment."'},
        {word:"to regret",trans:"arrepentirse",ex:'"I don\'t regret the decision I made."'},
        {word:"to make sense",trans:"tener sentido",ex:'"The instructions don\'t make sense to me."'},
      ],
      quickCheck:[
        {statement:"The narrator watched only one episode.",answer:false},
        {statement:"The narrator fell asleep before four in the morning.",answer:false},
        {statement:"The narrator regrets the night.",answer:false},
      ],
      listeningTitle:"Six episodes",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"What time did the narrator get home?",opts:["At ten","At eleven","At midnight","At one"],correct:2},
        {q:"How many episodes did the narrator watch?",opts:["One","Three","Five","Six"],correct:3},
        {q:"What did the narrator do after the series ended?",opts:["Went to bed immediately","Started thinking about the ending","Watched another series","Called a friend"],correct:1},
        {q:"How does the narrator feel about the night?",opts:["Guilty and upset","Proud and happy","Not proud but no regrets","Tired and angry"],correct:2},
      ],
      grammarExamples:[
        '"Did you sleep last night?"',
        '"Did something happen?"',
        '"Did I watch one episode? No."',
        '"Did I fall asleep before four? I didn\'t."',
      ],
      grammarRule:"To make questions in the Simple Past, use DID + subject + base verb. For short answers, use did / didn't. For negatives, use didn't + base verb. The main verb never changes form in questions and negatives.",
      grammarTable:[["Structure","Example"],["Question","Did you go? / Did she sleep?"],["Short answer yes","Yes, I did. / Yes, she did."],["Short answer no","No, I didn't. / No, she didn't."],["Negative sentence","I didn't sleep. / He didn't go."]],
      grammarWatch:"In questions and negatives, the main verb returns to the base form: <em>\"Did she went?\"</em> ✗ → <strong>\"Did she go?\"</strong> ✓ &nbsp;|&nbsp; <em>\"I didn't watched\"</em> ✗ → <strong>\"I didn't watch\"</strong> ✓",
      grammarTip:"<strong>Did + subject + base verb?</strong> / <strong>Subject + didn't + base verb.</strong> DID does all the work — the main verb stays clean.",
      talkQ:[
        "Did the narrator plan to watch six episodes? What happened?",
        "Did you stay up late recently? What were you doing?",
        "Ask your partner: 'Did you sleep well last night?' 'Did you watch anything good recently?' 'Did you eat breakfast today?'",
        "Tell a story about one night when you did something you didn't plan to do.",
      ],
      talkTip:`Model: "Did I plan to stay up? No, I didn't. I just wanted to relax. Did I regret it the next morning? A little. But honestly, it was worth it."`,
      speakingChallenge:"Interview a partner about their last weekend using only past questions: Did you...? Where did you...? What did you...? Write down five things you discovered.",
    },
    cycle3: {
      reading:`<p>Last night I found a box of old photos under my bed. I opened it and travelled back in time. There we were — my parents, young and smiling. My father wore a terrible moustache. My mother had long hair. This was 1987, probably.</p>
<p>I saw a photo of my first birthday. I sat in a high chair and I cried — loudly, it seemed. My grandmother stood next to me and laughed. She left us eight years ago. I held the photo for a long time.</p>
<p>I found a photo of my first day at school. I stood at the door with a backpack that was bigger than me. My mother took the photo. My father drove me there. I was terrified. Three months later, I loved school. Time changes everything, and then it keeps the evidence in a box under your bed.</p>`,
      vocab:[
        {word:"moustache",trans:"bigote",ex:'"He grew a moustache last year and then shaved it off."'},
        {word:"high chair",trans:"silla alta (de bebé)",ex:'"The baby sat in the high chair and ate happily."'},
        {word:"evidence",trans:"evidencia, prueba",ex:'"The photos are evidence of how much we\'ve changed."'},
        {word:"terrified",trans:"aterrorizado",ex:'"I was terrified before my first job interview."'},
        {word:"to hold (held)",trans:"sostener, tener en la mano",ex:'"She held the letter and read it slowly."'},
      ],
      quickCheck:[
        {statement:"The narrator found the photos in a drawer.",answer:false},
        {statement:"The narrator's grandmother is still alive.",answer:false},
        {statement:"The narrator loved school from the very first day.",answer:false},
      ],
      listeningTitle:"A box of old photos",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"Where did the narrator find the box?",opts:["In the attic","In a drawer","Under the bed","In the kitchen"],correct:2},
        {q:"What did the narrator's father have in the 1987 photo?",opts:["A beard","A moustache","Long hair","A hat"],correct:1},
        {q:"How did the narrator feel at the first day of school?",opts:["Excited","Calm","Terrified","Happy"],correct:2},
        {q:"How long did it take to love school?",opts:["One week","One month","Three months","One year"],correct:2},
      ],
      grammarExamples:[
        '"Last night I found a box of old photos."',
        '"My father wore a terrible moustache."',
        '"She left us eight years ago."',
        '"My mother took the photo. My father drove me there."',
      ],
      grammarRule:"Many common verbs in the Simple Past are irregular — they don't follow the -ed pattern. You need to learn them as pairs: find→found, wear→wore, leave→left, drive→drove, hold→held, take→took, stand→stood, see→saw.",
      grammarTable:[["Base form","Simple Past","Base form","Simple Past"],["find","found","leave","left"],["wear","wore","drive","drove"],["hold","held","take","took"],["stand","stood","see","saw"]],
      grammarWatch:"Irregular verbs only change in positive sentences. Questions and negatives use DID + base form: <em>\"She didn't left\"</em> ✗ → <strong>\"She didn't leave\"</strong> ✓",
      grammarTip:"Time expressions that signal Simple Past: <strong>last night / last year / yesterday / three months ago / in 1987 / when I was young.</strong>",
      talkQ:[
        "What did the narrator find under the bed? What did the photos show?",
        "Do you have old photos at home? What do they show? How do they make you feel?",
        "Think of a memory from five or ten years ago. What happened? Use: 'I was... / I went... / I saw... / I felt...'",
        "What changed in your life between ten years ago and today?",
      ],
      talkTip:`Model: "Ten years ago I lived in a different city. I worked in a small office and I drove to work every day. Last year I moved here. Everything changed — slowly, then all at once."`,
      speakingChallenge:"Tell the story of an old photo — real or imaginary. Use at least six irregular past verbs and three time expressions: ago, last, in + year.",
    },
  },

  // ── 3: Unit 04 – Past Continuous ────────────────────────────────────────
  {
    cycle2: {
      reading:`<p>I was making coffee this morning when my phone fell into the sink. I was standing at the counter, half asleep, when it slipped out of my hand. It landed in the water with a very final sound.</p>
<p>While I was drying it with a towel, my neighbour knocked on the door. He was looking for his cat. While we were talking in the doorway, the cat walked past us from inside my apartment. Nobody knows how it got in.</p>
<p>Later, while I was reading on the sofa, the phone turned itself on. It worked perfectly. My neighbour's cat was sleeping next to me. I was too tired to ask questions. Some mornings are just like that — small disasters that fix themselves before lunch.</p>`,
      vocab:[
        {word:"to slip",trans:"resbalarse, caerse",ex:'"The glass slipped out of my hands."'},
        {word:"to land",trans:"aterrizar, caer",ex:'"The phone landed in the water with a loud noise."'},
        {word:"towel",trans:"toalla",ex:'"I dried my hands with a clean towel."'},
        {word:"doorway",trans:"entrada, umbral",ex:'"She stood in the doorway and watched the rain."'},
        {word:"to fix itself",trans:"arreglarse solo",ex:'"Don\'t worry — this kind of problem usually fixes itself."'},
      ],
      quickCheck:[
        {statement:"The narrator dropped their phone into the sink on purpose.",answer:false},
        {statement:"The neighbour's cat came in through the front door.",answer:false},
        {statement:"The phone eventually started working again.",answer:true},
      ],
      listeningTitle:"Small disasters before lunch",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"What was the narrator doing when the phone fell?",opts:["Eating breakfast","Making coffee","Reading a book","Talking on the phone"],correct:1},
        {q:"Why did the neighbour knock on the door?",opts:["To borrow sugar","To complain about noise","To look for his cat","To say good morning"],correct:2},
        {q:"Where did they find the cat?",opts:["In the garden","On the roof","Walking out of the narrator's apartment","Under the sofa"],correct:2},
        {q:"How did the morning end?",opts:["In total disaster","Calmly, with the cat and a working phone","With the narrator going to buy a new phone","With a fight with the neighbour"],correct:1},
      ],
      grammarExamples:[
        '"I was making coffee when my phone fell into the sink."',
        '"I was standing at the counter when it slipped out of my hand."',
        '"While I was drying it, my neighbour knocked on the door."',
        '"While we were talking, the cat walked past us."',
      ],
      grammarRule:"We use the Past Continuous (was/were + -ing) for an action IN PROGRESS when another shorter action interrupted it. The interrupting action uses the Simple Past. We connect them with WHEN or WHILE.",
      grammarTable:[["Connector","Use","Example"],["when","before the interruption (Simple Past)","I was sleeping WHEN the alarm rang."],["while","during the longer action (Past Continuous)","WHILE I was cooking, she arrived."]],
      grammarWatch:"WHEN introduces the short interrupting action (Simple Past): <em>\"I was cooking when she called\"</em> — not <em>\"I was cooking when she was calling.\"</em> WHILE introduces the background action (Past Continuous).",
      grammarTip:"The pattern: <strong>was/were + -ing (long action) + when + Simple Past (short interruption).</strong>",
      talkQ:[
        "What was the narrator doing when the phone fell? What interrupted each action in the story?",
        "What were you doing yesterday at 8 pm? Did anything interrupt you?",
        "Tell a story: you were doing something ordinary when something unexpected happened. Use: 'I was… when…'",
        "Has your phone ever broken at the worst possible moment? What were you doing?",
      ],
      talkTip:`Model: "I was having a video call with my boss when the power went out. While I was trying to reconnect, she sent me a message. It was embarrassing."`,
      speakingChallenge:"Tell the story of a day when things kept interrupting each other. Use 'was/were -ing' + 'when' at least four times.",
    },
    cycle3: {
      reading:`<p>The night was quiet and ordinary. In the kitchen, my mother was cooking. My father was reading the newspaper at the table. My brother was doing his homework in his bedroom. And I was drawing at my desk, as always.</p>
<p>Then the lights went out. All of us stopped at the same moment. My mother was still stirring the pot when it happened. My father was turning a page. My brother was writing a sentence. And I was colouring a tree — I remember this clearly, because I never finished it.</p>
<p>We found candles. We sat together in the kitchen. While my mother was finishing dinner by candlelight, my father was telling old stories and we were listening. The blackout lasted two hours. It became one of the best evenings of my childhood.</p>`,
      vocab:[
        {word:"blackout",trans:"apagón",ex:'"There was a blackout in the whole neighbourhood."'},
        {word:"to stir",trans:"revolver, mezclar",ex:'"She was stirring the soup when the phone rang."'},
        {word:"candlelight",trans:"luz de vela",ex:'"We ate dinner by candlelight."'},
        {word:"childhood",trans:"infancia, niñez",ex:'"I have very clear memories of my childhood."'},
        {word:"ordinary",trans:"ordinario, común",ex:'"It started as an ordinary Tuesday."'},
      ],
      quickCheck:[
        {statement:"The father was watching TV when the lights went out.",answer:false},
        {statement:"The narrator was drawing when the blackout happened.",answer:true},
        {statement:"The blackout lasted all night.",answer:false},
      ],
      listeningTitle:"The night of the blackout",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"What was the mother doing when the lights went out?",opts:["Reading","Stirring the pot","Talking on the phone","Washing dishes"],correct:1},
        {q:"What was the narrator drawing?",opts:["A house","A face","A tree","A cat"],correct:2},
        {q:"What did they do after finding candles?",opts:["Went to sleep","Sat together in the kitchen","Went outside","Called the neighbours"],correct:1},
        {q:"How did the narrator remember the evening?",opts:["As a frightening night","As one of the best of childhood","As boring and long","As a disaster"],correct:1},
      ],
      grammarExamples:[
        '"My mother was cooking. My father was reading."',
        '"My brother was doing his homework. I was drawing."',
        '"While my mother was finishing dinner, my father was telling stories."',
        '"We were listening."',
      ],
      grammarRule:"We can use the Past Continuous to describe TWO or more actions happening at the same time in the past. We connect them with WHILE. This creates a sense of background and atmosphere — the scene was already happening.",
      grammarTable:[["Pattern","Example"],["Action A while Action B","While she was cooking, he was reading."],["Multiple parallel actions","I was drawing. He was writing. She was stirring."],["Background + event","While we were talking, the lights went out."]],
      grammarWatch:"WHILE connects two Past Continuous actions of similar duration: <em>\"While I was sleeping, she was working.\"</em> Don't use WHILE with two very short actions — those use the Simple Past.",
      grammarTip:"Picture it like a scene in a film: <strong>everyone was doing something</strong> — use Past Continuous for the whole background description.",
      talkQ:[
        "Describe what each family member was doing when the blackout happened.",
        "Think of a specific moment from your childhood. What was everyone around you doing?",
        "Describe a family dinner or gathering: what was each person doing / saying / eating?",
        "Do you have a clear memory of where you were and what you were doing during an important event?",
      ],
      talkTip:`Model: "I remember one Sunday clearly. My grandmother was cooking in the kitchen. My cousins were playing in the garden. My uncle was sleeping on the sofa. And I was reading a comic book on the stairs."`,
      speakingChallenge:"Describe a scene from your past — a family moment, a school day, a trip — where multiple things were happening at the same time. Use Past Continuous for at least five people or actions.",
    },
  },

  // ── 4: Unit 05 – Like / As / Alike ──────────────────────────────────────
  {
    cycle2: {
      reading:`<p>He walked onto the stage as if he owned the place. He moved slowly, as though time itself was waiting for him. The audience was silent. He hadn't even spoken yet, and already we felt as if we were watching something important.</p>
<p>His voice, when it came, was low and measured. He spoke as if each word had been selected from a small, precious collection. He paused as though he was listening to something only he could hear.</p>
<p>After the performance, we stood outside in the cold. "Was it as good as you expected?" someone asked. It was better. It felt as if we had been somewhere else entirely — another time, another world. Great theatre does that. It makes reality feel like the dream, and the dream feel like the only truth.</p>`,
      vocab:[
        {word:"stage",trans:"escenario",ex:'"She walked onto the stage and the crowd cheered."'},
        {word:"measured",trans:"mesurado, pausado",ex:'"He spoke in a measured, calm voice."'},
        {word:"precious",trans:"precioso, valioso",ex:'"Every word she said felt precious."'},
        {word:"performance",trans:"actuación, función",ex:'"The performance lasted two hours without a break."'},
        {word:"entirely",trans:"completamente, por completo",ex:'"The plan changed entirely."'},
      ],
      quickCheck:[
        {statement:"The actor seemed nervous when he walked on stage.",answer:false},
        {statement:"The narrator thought the performance was worse than expected.",answer:false},
        {statement:"The narrator felt as if they had been in another world.",answer:true},
      ],
      listeningTitle:"A night at the theatre",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"How did the actor move on stage?",opts:["Quickly and nervously","Slowly, as if he owned the place","Awkwardly","Running"],correct:1},
        {q:"How is his voice described?",opts:["Loud and dramatic","High and clear","Low and measured","Soft and shy"],correct:2},
        {q:"What did someone ask after the performance?",opts:["Was it long?","Was it expensive?","Was it as good as expected?","Was it in Spanish?"],correct:2},
        {q:"What does great theatre do, according to the narrator?",opts:["Makes you feel bored","Makes reality feel like the dream","Makes you fall asleep","Teaches you grammar"],correct:1},
      ],
      grammarExamples:[
        '"He walked as if he owned the place."',
        '"He moved as though time itself was waiting for him."',
        '"We felt as if we were watching something important."',
        '"It felt as if we had been somewhere else entirely."',
      ],
      grammarRule:"We use AS IF and AS THOUGH to describe how something seems or feels — comparing a situation to an imaginary one. After as if / as though, we often use the past tense to show the situation is unreal or hypothetical.",
      grammarTable:[["Structure","Use","Example"],["as if + past","unreal comparison in present","She talks as if she knew everything."],["as though + past","same — slightly more formal","He moved as though time was waiting."],["as if + past perfect","unreal comparison about the past","It felt as if we had been there before."]],
      grammarWatch:"AS IF / AS THOUGH are followed by a clause (subject + verb), not a noun: <em>\"She looks as if tired\"</em> ✗ → <strong>\"She looks as if she is tired\"</strong> ✓",
      grammarTip:"<strong>As if / as though + subject + past verb</strong> = the comparison is unreal or imagined. The past form signals unreality, not past time.",
      talkQ:[
        "How does the writer describe the actor's presence? What comparisons does the text use?",
        "Describe a person you admire using 'as if / as though': 'She speaks as if…' / 'He moves as though…'",
        "Have you ever left a film, book, or concert feeling as if you had been somewhere else?",
        "Complete: 'Sometimes I feel as if…' and 'My city looks as though…'",
      ],
      talkTip:`Model: "My grandmother cooks as if she invented the recipe herself. She moves in the kitchen as though she has all the time in the world. It feels as if time slows down when I'm there."`,
      speakingChallenge:"Describe a real person — someone you know or admire — using at least three 'as if / as though' comparisons. Try to create a vivid image.",
    },
    cycle3: {
      reading:`<p>Buenos Aires and Barcelona look similar from the air — wide avenues, dense blocks, a harbour nearby. But once you land, they feel completely different from each other.</p>
<p>Buenos Aires is unlike any European city. It has the same energy as Barcelona — the cafés, the football, the passion for food — but the rhythm is different. Buenos Aires is louder, more chaotic, more melancholic. Barcelona is more organised, but perhaps less spontaneous.</p>
<p>The people are similar in some ways: both are warm, direct, and opinionated. But Argentines tend to talk more about feelings, while Catalans talk more about plans. Neither is better — they are simply different versions of the same Southern European soul. Visit both. They will feel familiar and foreign at the same time, which is exactly the point of travelling.</p>`,
      vocab:[
        {word:"dense",trans:"denso, compacto",ex:'"The city centre has very dense blocks of buildings."'},
        {word:"harbour",trans:"puerto",ex:'"We watched the boats from the harbour."'},
        {word:"melancholic",trans:"melancólico",ex:'"There\'s something melancholic about rainy autumn afternoons."'},
        {word:"spontaneous",trans:"espontáneo",ex:'"She\'s very spontaneous — she never plans anything in advance."'},
        {word:"opinionated",trans:"con opiniones fuertes",ex:'"He\'s very opinionated about food and music."'},
      ],
      quickCheck:[
        {statement:"Buenos Aires and Barcelona feel the same once you arrive.",answer:false},
        {statement:"The writer says Argentines talk more about feelings than Catalans.",answer:true},
        {statement:"The writer thinks one city is clearly better than the other.",answer:false},
      ],
      listeningTitle:"Two cities, one soul",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"What do Buenos Aires and Barcelona have in common from the air?",opts:["They are both near mountains","They both have wide avenues and a harbour","They have the same size","They both have cold weather"],correct:1},
        {q:"How is Buenos Aires described compared to Barcelona?",opts:["Quieter and more organised","Louder and more melancholic","Smaller and calmer","Colder and less passionate"],correct:1},
        {q:"What do the people of both cities have in common?",opts:["They are quiet and reserved","They are warm, direct and opinionated","They love the same food","They speak the same language"],correct:1},
        {q:"What does the writer recommend?",opts:["Staying in one city","Visiting Barcelona only","Visiting both cities","Moving to Buenos Aires"],correct:2},
      ],
      grammarExamples:[
        '"Buenos Aires is unlike any European city."',
        '"It has the same energy as Barcelona."',
        '"They feel completely different from each other."',
        '"The people are similar in some ways."',
      ],
      grammarRule:"Use these structures to compare things: SIMILAR TO (parecido a), THE SAME AS (igual que), DIFFERENT FROM (diferente de), UNLIKE (a diferencia de). These are fixed prepositions — they don't change.",
      grammarTable:[["Expression","Preposition","Example"],["similar to","to","Her voice is similar to her sister's."],["the same as","as","This is the same as what I ordered."],["different from","from","My city is very different from yours."],["unlike","—","Unlike him, she loves cold weather."]],
      grammarWatch:"Different is followed by FROM in formal and standard English: <em>\"different than\"</em> is used informally in American English, but <strong>different from</strong> is always safe.",
      grammarTip:"Remember the prepositions: <strong>similar TO · the same AS · different FROM · unlike [no preposition].</strong>",
      talkQ:[
        "What are two similarities and two differences between Buenos Aires and Barcelona according to the text?",
        "Compare two cities or places you know. Use: 'X is similar to Y in…' / 'X is different from Y because…'",
        "Is your life now similar to or different from what you imagined five years ago?",
        "Think of two people you know well. How are they alike? How are they unlike each other?",
      ],
      talkTip:`Model: "My hometown is very different from Buenos Aires. It's smaller and much quieter. But it's similar to BA in one way — the food is incredible. Unlike in the capital, everything closes at nine."`,
      speakingChallenge:"Compare two things that seem similar but are actually different. Use at least four expressions: similar to, the same as, different from, unlike.",
    },
  },

  // ── 5: Unit 06 – Will / Going to ────────────────────────────────────────
  {
    cycle2: {
      reading:`<p>If the rain stops, we will go to the market. If the market is open, I'll buy tomatoes and fish. If the fish is fresh, I'll make a stew. And if the stew turns out well — which it probably won't — I'll invite the neighbours.</p>
<p>That's the plan. Or half a plan. My mother says I plan too many things that depend on other things. She's right. But this is how I think: every decision opens a door, and behind each door there are more doors.</p>
<p>If everything works out, we will have a perfect Sunday. If it doesn't work out, we will order pizza and watch a film. Either way, the day will be fine. If you always have a plan B, plan A becomes less frightening. That's the real lesson, I think.</p>`,
      vocab:[
        {word:"stew",trans:"guiso",ex:'"She made a lamb stew with vegetables."'},
        {word:"to depend on",trans:"depender de",ex:'"Whether we go depends on the weather."'},
        {word:"to turn out",trans:"resultar, salir",ex:'"The dinner turned out better than expected."'},
        {word:"frightening",trans:"atemorizante",ex:'"The exam results were frightening to read."'},
        {word:"either way",trans:"de todas formas, en cualquier caso",ex:'"Either way, we\'ll be there by eight."'},
      ],
      quickCheck:[
        {statement:"The narrator has a very fixed, certain plan.",answer:false},
        {statement:"The narrator's mother agrees that he plans well.",answer:false},
        {statement:"The narrator believes having a plan B makes plan A less scary.",answer:true},
      ],
      listeningTitle:"If it rains",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"What will the narrator do if the market is open?",opts:["Buy fruit","Buy tomatoes and fish","Buy bread","Nothing — just look"],correct:1},
        {q:"What does the narrator's mother say?",opts:["He plans too little","He plans too many things that depend on others","He is very organised","He should invite more people"],correct:1},
        {q:"What is plan B for Sunday?",opts:["Go to the cinema","Call the neighbours","Order pizza and watch a film","Cook something simple"],correct:2},
        {q:"What is the narrator's real lesson?",opts:["Always cook fish","Never make plans","Having a plan B makes plan A less frightening","Markets are unreliable"],correct:3},
      ],
      grammarExamples:[
        '"If the rain stops, we will go to the market."',
        '"If the market is open, I\'ll buy tomatoes."',
        '"If the stew turns out well, I\'ll invite the neighbours."',
        '"If everything works out, we will have a perfect Sunday."',
      ],
      grammarRule:"The first conditional describes a real, possible future situation and its likely result. The structure is: IF + Simple Present, WILL + base verb. We use the present in the IF clause (not will), even though we're talking about the future.",
      grammarTable:[["Clause","Tense","Example"],["IF clause (condition)","Simple Present","If it rains…"],["Result clause","will + base verb","…I will stay home."],["Result clause (negative)","won't + base verb","…I won't go out."]],
      grammarWatch:"Never use WILL in the IF clause: <em>\"If it will rain, I'll stay home\"</em> ✗ → <strong>\"If it rains, I'll stay home\"</strong> ✓",
      grammarTip:"You can reverse the clauses: <strong>I'll stay home if it rains.</strong> (No comma needed when IF clause comes second.)",
      talkQ:[
        "What does the narrator plan to do? How many 'if' conditions are in the plan?",
        "Make three first conditional sentences about your weekend: 'If the weather is good, I'll…'",
        "What will you do if you finish work early today? If you get a free afternoon this week?",
        "Do you always have a plan B? Give an example from your real life.",
      ],
      talkTip:`Model: "If I wake up early on Saturday, I'll go for a run. If it's cold, I'll go to the gym instead. If the gym is closed, I'll just make a big breakfast. Either way, I won't be bored."`,
      speakingChallenge:"Create a chain of first conditional sentences — each result becomes the next condition. Try to chain at least five: 'If A, I'll B. If B, I'll C…'",
    },
    cycle3: {
      reading:`<p>I have a rule: when I finish a book, I write a note inside the cover. Just one sentence. The date and how it made me feel. When I open an old book, I time-travel.</p>
<p>As soon as I get home tonight, I'll make tea and sit in my reading chair. I won't check my phone until I finish the chapter. Before I go to bed, I'll write the note — even if the chapter was boring. Especially if it was boring.</p>
<p>After I retire, I'm going to read one book a week. I'll have shelves and shelves of notes. When I'm very old and can't travel, I'll read and remember. Before I die, I want to have read enough to fill ten lives. That's not a small ambition. But as soon as you decide what you want, the plan writes itself.</p>`,
      vocab:[
        {word:"cover",trans:"tapa (de libro)",ex:'"She wrote her name on the cover of the notebook."'},
        {word:"to time-travel",trans:"viajar en el tiempo",ex:'"Old photos make me time-travel to my childhood."'},
        {word:"chapter",trans:"capítulo",ex:'"I always read one more chapter before sleeping."'},
        {word:"to retire",trans:"jubilarse",ex:'"She plans to retire at sixty and travel the world."'},
        {word:"ambition",trans:"ambición",ex:'"His ambition is to write a novel before he turns forty."'},
      ],
      quickCheck:[
        {statement:"The narrator writes a long summary inside each book.",answer:false},
        {statement:"The narrator checks their phone while reading.",answer:false},
        {statement:"The narrator wants to read a lot after retiring.",answer:true},
      ],
      listeningTitle:"The reading chair",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"What does the narrator write inside each book?",opts:["The plot summary","A review","One sentence with the date and feeling","The author's name"],correct:2},
        {q:"What will the narrator do as soon as they get home tonight?",opts:["Call a friend","Make tea and sit in the reading chair","Watch a film","Cook dinner"],correct:1},
        {q:"When will the narrator check their phone?",opts:["Before reading","Never","After finishing the chapter","Every ten minutes"],correct:2},
        {q:"What is the narrator's big ambition?",opts:["To write a book","To have read enough to fill ten lives","To travel to ten countries","To open a bookshop"],correct:1},
      ],
      grammarExamples:[
        '"When I finish a book, I write a note."',
        '"As soon as I get home, I\'ll make tea."',
        '"Before I go to bed, I\'ll write the note."',
        '"After I retire, I\'m going to read one book a week."',
      ],
      grammarRule:"In future time clauses introduced by WHEN, AS SOON AS, BEFORE, AFTER, and UNTIL, we use the Simple Present — not will. The result clause (the main action) uses WILL or GOING TO. This is the same rule as the first conditional IF clause.",
      grammarTable:[["Connector","Example"],["when","When I finish, I'll call you."],["as soon as","As soon as she arrives, we'll start."],["before","Before you go, I'll show you something."],["after","After I eat, I'm going to rest."],["until","I won't leave until it stops raining."]],
      grammarWatch:"Don't use WILL in the time clause: <em>\"When I will finish, I'll call\"</em> ✗ → <strong>\"When I finish, I'll call\"</strong> ✓",
      grammarTip:"These connectors all follow the same rule as IF: <strong>simple present in the clause, will/going to in the result.</strong>",
      talkQ:[
        "What rule does the narrator have about books? Do you have any personal rules or habits like this?",
        "Make three sentences using: 'As soon as I…', 'Before I…', 'When I…' about your plans for today or this week.",
        "What are you going to do after you finish this course? Use 'after' and 'when' in your answer.",
        "What small ritual do you have that makes daily life feel more intentional?",
      ],
      talkTip:`Model: "As soon as I get home, I change my clothes — that's my way of separating work from home. Before I sleep, I write three things I'm grateful for. When I do this every day, I feel calmer."`,
      speakingChallenge:"Describe your ideal day using future time clauses: When I wake up… As soon as I… Before I… After I… Until… Use all five connectors at least once.",
    },
  },

  // ── 6: Unit 07 – Modal Verbs ─────────────────────────────────────────────
  {
    cycle2: {
      reading:`<p>I might take the job in Santiago. Or I might not. The salary is good, the city looks beautiful, and the company seems serious. But I could be making a mistake. I could be running away from something instead of running toward something new.</p>
<p>My friend Lucía thinks I should go. "You might regret it if you don't," she says. She could be right. My brother thinks I should stay. "You could find something just as good here," he says. He could be right too.</p>
<p>The thing about big decisions is that you can't know. You might be wrong either way. You could be right either way. The only thing that's certain is that you have to decide. And I might just have to trust my gut — even if my gut is currently confused, eating too much ice cream, and watching reality TV at 2 AM.</p>`,
      vocab:[
        {word:"salary",trans:"salario, sueldo",ex:'"The salary for this position is competitive."'},
        {word:"to run away from",trans:"huir de",ex:'"Are you running away from the problem or facing it?"'},
        {word:"to regret",trans:"arrepentirse",ex:'"I don\'t want to regret not trying."'},
        {word:"certain",trans:"seguro, cierto",ex:'"One thing is certain: we need a plan."'},
        {word:"to trust your gut",trans:"confiar en tu instinto",ex:'"When in doubt, trust your gut."'},
      ],
      quickCheck:[
        {statement:"The narrator has already decided to take the job.",answer:false},
        {statement:"Lucía and the narrator's brother give opposite advice.",answer:true},
        {statement:"The narrator feels completely calm about the decision.",answer:false},
      ],
      listeningTitle:"Maybe Santiago",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"What does the narrator think might be the problem with taking the job?",opts:["The salary is too low","They might be running away from something","The city is too far","The company seems unreliable"],correct:1},
        {q:"What does Lucía think?",opts:["Stay home","Take the job — you might regret it otherwise","Wait another year","Talk to the brother first"],correct:1},
        {q:"What does the brother think?",opts:["Go to Santiago","There could be something just as good here","The company is dangerous","Lucía is wrong"],correct:1},
        {q:"What does the narrator decide to do?",opts:["Definitely take the job","Definitely stay","Trust their gut","Ask someone else"],correct:2},
      ],
      grammarExamples:[
        '"I might take the job. Or I might not."',
        '"I could be making a mistake."',
        '"You might regret it if you don\'t."',
        '"You could find something just as good here."',
      ],
      grammarRule:"MIGHT and COULD both express possibility — something is possible but not certain. They are very similar in meaning. MIGHT is slightly less certain than COULD. Both are followed by the base verb (no -s, no -ing, no to).",
      grammarTable:[["Modal","Meaning","Example"],["might","possible (less certain)","I might go. / She might be right."],["might not","possible negative","I might not take the job."],["could","possible alternative","You could be wrong. / It could rain."],["couldn't","impossibility","That couldn't be true."]],
      grammarWatch:"Don't confuse COULD (possibility now) with COULD (past of CAN): <em>\"When I was young, I could swim\"</em> (past ability) vs <em>\"I could be wrong\"</em> (present possibility).",
      grammarTip:"Use <strong>might / could</strong> when you're not sure: <strong>\"It might rain\"</strong> (maybe it will). Use <strong>will</strong> when you are sure: <strong>\"It will rain\"</strong> (you're certain).",
      talkQ:[
        "What are the narrator's reasons for and against taking the job?",
        "Have you ever had to make a big decision without being sure? How did you decide?",
        "Complete: 'I might… this year' / 'I could… if I wanted to' / 'That couldn't be…'",
        "Is there something you're currently unsure about? Use might and could to talk about the possibilities.",
      ],
      talkTip:`Model: "I might change jobs this year — I'm not sure yet. It could be a good move. But I might stay where I am if things improve. There's a chance I could do both part-time."`,
      speakingChallenge:"Think of a real or imaginary big decision. Present both sides using might and could. Then say what you think the person should do and why.",
    },
    cycle3: {
      reading:`<p>The waiter came to the table. "Would you like to hear the specials?" he asked. We said yes, even though we had already decided. It's polite to listen.</p>
<p>My grandmother would always order the same thing wherever we went: grilled fish, no sauce, sparkling water, and a small dessert. She would say: "I know what I like. Why pretend otherwise?" I loved that about her.</p>
<p>I ordered something I had never tried. "Would you like any recommendations?" the waiter asked. "Yes, please," I said. He suggested three things. I chose the strangest one. I would rather try something new and fail than order the same thing for the rest of my life. The food was interesting. Not good, exactly. But interesting. I'd do it again.</p>`,
      vocab:[
        {word:"specials",trans:"platos del día / especiales",ex:'"The waiter described the specials with great enthusiasm."'},
        {word:"grilled",trans:"a la parrilla",ex:'"I\'d like the grilled salmon, please."'},
        {word:"sparkling water",trans:"agua con gas",ex:'"Would you like still or sparkling water?"'},
        {word:"recommendation",trans:"recomendación",ex:'"Do you have any recommendations for a first-time visitor?"'},
        {word:"to pretend",trans:"pretender, fingir",ex:'"He pretended to know the answer."'},
      ],
      quickCheck:[
        {statement:"The grandmother liked to try different things every time.",answer:false},
        {statement:"The narrator asked for recommendations.",answer:true},
        {statement:"The narrator regrets ordering the unusual dish.",answer:false},
      ],
      listeningTitle:"What would you like?",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"Why did they listen to the specials even though they had decided?",opts:["They changed their minds","It is polite to listen","The specials were interesting","The waiter insisted"],correct:1},
        {q:"What would the grandmother always order?",opts:["Pasta with sauce","Steak and red wine","Grilled fish, no sauce, sparkling water, small dessert","Soup and salad"],correct:2},
        {q:"What did the narrator choose?",opts:["The first recommendation","The most popular dish","The strangest option","Grilled fish like the grandmother"],correct:2},
        {q:"How was the food?",opts:["Terrible and disappointing","Delicious and perfect","Interesting — not good exactly, but interesting","Exactly what was expected"],correct:2},
      ],
      grammarExamples:[
        '"Would you like to hear the specials?"',
        '"Would you like any recommendations?"',
        '"She would always order the same thing."',
        '"I would rather try something new than order the same thing."',
      ],
      grammarRule:"WOULD has three main uses: (1) polite requests and offers: 'Would you like…?'; (2) past habits (things we did regularly in the past): 'She would always order…'; (3) preferences with WOULD RATHER: 'I would rather X than Y.'",
      grammarTable:[["Use","Structure","Example"],["Polite request/offer","Would you like + noun/to-verb?","Would you like some water?"],["Past habit","would + base verb (always/often)","He would always bring flowers."],["Preference","would rather + base verb + than","I'd rather walk than take the bus."]],
      grammarWatch:"WOULD for past habit is only for repeated actions, not single past events: <em>\"We would go every summer\"</em> ✓ (repeated) / <em>\"We would go last summer\"</em> ✗ (single event → use went).",
      grammarTip:"<strong>Would rather + base verb</strong> for preferences: <em>\"I'd rather stay home than go out.\"</em> The subject after THAN stays the same: <em>\"I'd rather you came early.\"</em>",
      talkQ:[
        "How does the narrator's grandmother use 'would' to describe her habits?",
        "What would you always order at your favourite restaurant? Use: 'I would always…'",
        "Ask your partner: 'Would you rather live in a big city or a small town?' 'Would you rather cook or eat out?'",
        "Describe a habit someone in your family had using 'would': 'My father would always…' / 'My grandmother would…'",
      ],
      talkTip:`Model: "My grandfather would always read the newspaper at breakfast — the whole thing, slowly, with coffee. He would never check his phone. He would say: 'The news can wait until I finish my coffee.'"`,
      speakingChallenge:"Use all three WOULD forms in one story: make a polite offer, describe a past habit, and express a preference. Aim for at least six 'would' sentences.",
    },
  },

  // ── 7: Unit 08 – Present Perfect ─────────────────────────────────────────
  {
    cycle2: {
      reading:`<p>We haven't spoken in three years. Not since the argument — the one neither of us wanted to have, but both of us needed to. I've thought about calling her for three years. I've had the phone in my hand a hundred times.</p>
<p>She's lived in Valencia since she moved there in 2022. I've lived here since long before that. We've both changed, I think. I've grown. I hope she has too.</p>
<p>I've known her since we were seven. That's thirty-one years of history. For three years I've carried this silence like something heavy. I don't know how much longer I can carry it. I picked up the phone again this morning. I've held it for ten minutes. I still haven't dialled. But this time, I think I will.</p>`,
      vocab:[
        {word:"argument",trans:"discusión, pelea",ex:'"We had an argument and didn\'t speak for a week."'},
        {word:"to dial",trans:"marcar (un número)",ex:'"I dialled the number three times but nobody answered."'},
        {word:"silence",trans:"silencio",ex:'"The silence between them was uncomfortable."'},
        {word:"to carry",trans:"cargar, llevar",ex:'"She\'s been carrying that secret for years."'},
        {word:"to grow (grew, grown)",trans:"crecer, madurar",ex:'"I\'ve grown a lot since I left home."'},
      ],
      quickCheck:[
        {statement:"The narrator has called the other person several times since the argument.",answer:false},
        {statement:"The other person has lived in Valencia for three years.",answer:true},
        {statement:"The narrator has known this person since childhood.",answer:true},
      ],
      listeningTitle:"Three years of silence",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"How long have they not spoken?",opts:["One year","Two years","Three years","Five years"],correct:2},
        {q:"Where has she lived since 2022?",opts:["Madrid","Valencia","Barcelona","Sevilla"],correct:1},
        {q:"How long have they known each other?",opts:["Ten years","Twenty years","Thirty-one years","Five years"],correct:2},
        {q:"What does the narrator do at the end?",opts:["Calls her immediately","Decides never to call","Holds the phone but hasn't dialled yet, but thinks they will","Sends a message"],correct:2},
      ],
      grammarExamples:[
        '"We haven\'t spoken for three years."',
        '"She\'s lived in Valencia since she moved there in 2022."',
        '"I\'ve known her since we were seven."',
        '"For three years I\'ve carried this silence."',
      ],
      grammarRule:"Use FOR to say how long something has lasted (a duration): 'for three years / for ten minutes / for a long time.' Use SINCE to say when something started (a point in time): 'since 2022 / since we were children / since last Monday.' Both are used with the Present Perfect.",
      grammarTable:[["Word","Use","Example"],["for","duration (how long)","I've known her for thirty years."],["since","starting point (when)","I've lived here since 2019."],["How long…?","asking for duration","How long have you been here?"]],
      grammarWatch:"FOR + period: <em>for three years, for a week, for ages.</em> SINCE + point: <em>since Monday, since 2020, since I was a child.</em> Don't swap them: <em>\"since three years\"</em> ✗ / <em>\"for 2020\"</em> ✗",
      grammarTip:"Ask: <strong>how long?</strong> → FOR. Ask: <strong>when did it start?</strong> → SINCE. Both answer questions about present perfect situations.",
      talkQ:[
        "How long have the narrator and the other person been out of contact? Since when?",
        "How long have you known your best friend? Since when?",
        "Ask your partner: 'How long have you lived here?' 'Since when have you been studying English?'",
        "Is there someone you haven't spoken to for a long time? Why?",
      ],
      talkTip:`Model: "I've known my best friend since primary school — so for about twenty-five years. We've lived in different cities since 2018, but we've stayed close. We've spoken every week for years."`,
      speakingChallenge:"Talk for two minutes about a relationship — friendship, family, colleague — using for and since at least four times each. Focus on how long things have lasted.",
    },
    cycle3: {
      reading:`<p>The journalist leaned forward. "You've had an extraordinary career," she said. "When did it start?"</p>
<p>"It started in 1998," he said. "I was twenty-two. I wrote my first article for a small newspaper in Mendoza. Nobody read it." He smiled. "Have you kept a copy?" she asked. "Of course," he said. "I've kept every copy."</p>
<p>He's written fourteen books. He wrote the first in 2001 — "it came out of nowhere," he says. He's won three major prizes. He won the last one in 2019. "Have you changed as a writer?" she asked. "Yes. I've changed completely since those early years. But I haven't lost the fear. The fear of the blank page. That's never changed."</p>`,
      vocab:[
        {word:"extraordinary",trans:"extraordinario",ex:'"She\'s had an extraordinary life full of surprises."'},
        {word:"article",trans:"artículo",ex:'"He wrote his first article at twenty-two."'},
        {word:"blank page",trans:"página en blanco",ex:'"The blank page is terrifying for many writers."'},
        {word:"prize",trans:"premio",ex:'"She won the prize for best novel of the year."'},
        {word:"to lean forward",trans:"inclinarse hacia adelante",ex:'"He leaned forward to hear the answer better."'},
      ],
      quickCheck:[
        {statement:"The writer's career started in 2001.",answer:false},
        {statement:"He has won three prizes.",answer:true},
        {statement:"He has completely lost the fear of writing.",answer:false},
      ],
      listeningTitle:"The interview",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"When did his career start?",opts:["1995","1998","2001","2005"],correct:1},
        {q:"How many books has he written?",opts:["Seven","Ten","Fourteen","Twenty"],correct:2},
        {q:"When did he win his last major prize?",opts:["2015","2017","2019","2021"],correct:2},
        {q:"What has never changed for him?",opts:["His style","His fear of the blank page","His publisher","His city"],correct:1},
      ],
      grammarExamples:[
        '"You\'ve had an extraordinary career." (no specific time → Present Perfect)',
        '"It started in 1998." (specific time → Simple Past)',
        '"He\'s written fourteen books." (result matters → Present Perfect)',
        '"He won the last one in 2019." (specific time → Simple Past)',
      ],
      grammarRule:"Use the Present Perfect (have/has + past participle) when no specific time is given and the result or experience matters NOW. Use the Simple Past when you say WHEN something happened. A specific time word (in 1998, last year, yesterday) forces the Simple Past.",
      grammarTable:[["Tense","When to use","Example"],["Present Perfect","no specific time / result matters now","He's won three prizes."],["Simple Past","specific finished time","He won the last one in 2019."],["Question","asking about experience (ever)","Have you ever won a prize?"],["Question","asking about specific time","When did you win it?"]],
      grammarWatch:"'Have you ever…?' uses Present Perfect. 'When did you…?' forces Simple Past. Once you give a time, you must switch: <em>\"I've gone yesterday\"</em> ✗ → <strong>\"I went yesterday\"</strong> ✓",
      grammarTip:"No time = Present Perfect. Time word = Simple Past. Ask yourself: <strong>does WHEN matter, or does the FACT matter?</strong>",
      talkQ:[
        "Why does the text switch between Present Perfect and Simple Past? Find two examples of each.",
        "Tell a partner about your achievements without saying when. Then add the specific times: notice how the tense changes.",
        "Ask: 'Have you ever won something?' If yes: 'When did you win it? What did you win?'",
        "What's the most important thing you've done in your life? When did it happen?",
      ],
      talkTip:`Model: "I've lived abroad twice. The first time was in 2015 — I went to Dublin for six months. I've also worked in another country since 2020. I've learned a lot from both experiences."`,
      speakingChallenge:"Tell a life story (real or invented) using both tenses correctly. Use Present Perfect for general achievements and Simple Past whenever you give a specific date or time.",
    },
  },

  // ── 8: Unit 09 – Connectors (B1-B2) ─────────────────────────────────────
  {
    cycle2: {
      reading:`<p>I was terrified of flying. Even so, I bought a ticket to Tokyo — alone, overnight, fourteen hours. Although I spent the first hour gripping the armrest, I eventually fell asleep. Despite my fear, I made it. In spite of three turbulence moments that felt like the end, the plane landed smoothly.</p>
<p>Although the city was overwhelming at first, I found my footing within two days. Even though I spoke no Japanese, people were patient and kind. Despite not understanding a single menu, I ate extraordinarily well — I just pointed and hoped for the best.</p>
<p>I came home changed. Even though nothing in my real life had moved, something inside me had. Although fear doesn't disappear, you can learn to walk alongside it. In spite of everything that could go wrong, most things go right. And that, I think, is the best argument for buying a ticket you're not sure about.</p>`,
      vocab:[
        {word:"to grip",trans:"aferrarse, agarrar fuerte",ex:'"She gripped the handrail as the boat rocked."'},
        {word:"armrest",trans:"apoyabrazos",ex:'"He held the armrest during the whole flight."'},
        {word:"turbulence",trans:"turbulencia",ex:'"The pilot warned us about turbulence ahead."'},
        {word:"to find one's footing",trans:"encontrar el ritmo, adaptarse",ex:'"It took me a week to find my footing in the new city."'},
        {word:"overwhelming",trans:"abrumador",ex:'"The noise of the market was overwhelming at first."'},
      ],
      quickCheck:[
        {statement:"The narrator was afraid of flying but went to Tokyo anyway.",answer:true},
        {statement:"The narrator spoke Japanese fluently.",answer:false},
        {statement:"The narrator came back exactly the same as before.",answer:false},
      ],
      listeningTitle:"Tokyo despite everything",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"How long was the flight to Tokyo?",opts:["Eight hours","Eleven hours","Fourteen hours","Sixteen hours"],correct:2},
        {q:"How did the narrator manage to eat well?",opts:["Spoke Japanese","Used a translation app","Just pointed at the menu","Only ate at tourist restaurants"],correct:2},
        {q:"How long did it take to feel comfortable in the city?",opts:["Two hours","Two days","One week","Two weeks"],correct:1},
        {q:"What lesson did the narrator learn?",opts:["Never travel alone","Always book business class","Fear doesn't disappear but you can walk alongside it","Japan is too difficult for tourists"],correct:2},
      ],
      grammarExamples:[
        '"Although I spent the first hour gripping the armrest, I fell asleep."',
        '"Despite my fear, I made it."',
        '"In spite of three turbulence moments, the plane landed smoothly."',
        '"Even though I spoke no Japanese, people were patient."',
      ],
      grammarRule:"ALTHOUGH and EVEN THOUGH introduce a subordinate clause (subject + verb) expressing concession — something surprising given the circumstances. DESPITE and IN SPITE OF are followed by a noun or -ing form (not a full clause). All four mean roughly the same thing.",
      grammarTable:[["Connector","Followed by","Example"],["although","subject + verb","Although it was cold, we went out."],["even though","subject + verb","Even though he tried, he failed."],["despite","noun / -ing","Despite the rain, we went out."],["in spite of","noun / -ing","In spite of trying, he failed."]],
      grammarWatch:"DESPITE and IN SPITE OF must NOT be followed by a full clause: <em>\"Despite that I was tired\"</em> ✗ → <strong>\"Despite being tired\"</strong> ✓ or <strong>\"Although I was tired\"</strong> ✓",
      grammarTip:"Quick check: if the next word is a verb with a subject → use <strong>although / even though</strong>. If it's a noun or -ing → use <strong>despite / in spite of</strong>.",
      talkQ:[
        "What did the narrator do despite being afraid? What surprised them about Tokyo?",
        "Tell your partner about something you did even though you were nervous or unsure: 'Although I was scared, I…'",
        "In spite of what fears or difficulties have you achieved something you're proud of?",
        "Do you think fear should stop us from doing things? Use 'although' or 'even though' in your answer.",
      ],
      talkTip:`Model: "Although I'm not good at directions, I travelled alone for the first time last year. Despite getting lost twice, I had an amazing time. Even though it was hard, I'd do it again."`,
      speakingChallenge:"Tell a story about something you did despite a difficulty or fear. Use all four concession connectors at least once: although, even though, despite, in spite of.",
    },
    cycle3: {
      reading:`<p>Travel changes the brain — this is not a metaphor; it is neuroscience. When we are in an unfamiliar environment, our brain creates new connections. As a result, we become more creative and more adaptable. Furthermore, people who travel regularly report higher levels of empathy.</p>
<p>This happens because novelty forces us to pay attention. At home, we move on autopilot. Abroad, everything requires thought: the menu, the transport, the social rules. Therefore, the brain wakes up. In addition, we meet people with completely different stories, which expands our understanding of what a normal life can look like.</p>
<p>Moreover, the effects last. Studies show that the cognitive benefits of travel continue for months after returning. Consequently, even a short trip to an unfamiliar place can rewire your thinking. Travel is not an escape. It is, in fact, one of the most productive things you can do for your mind.</p>`,
      vocab:[
        {word:"neuroscience",trans:"neurociencia",ex:'"Neuroscience explains why habits are hard to break."'},
        {word:"adaptable",trans:"adaptable",ex:'"People who travel tend to be more adaptable."'},
        {word:"empathy",trans:"empatía",ex:'"Living abroad develops empathy for different cultures."'},
        {word:"novelty",trans:"novedad",ex:'"The brain responds strongly to novelty and surprise."'},
        {word:"cognitive",trans:"cognitivo",ex:'"Cognitive skills improve with regular mental challenges."'},
      ],
      quickCheck:[
        {statement:"The text says travel changes the brain — only as a metaphor.",answer:false},
        {statement:"At home we often move on autopilot, according to the text.",answer:true},
        {statement:"The cognitive benefits of travel disappear immediately after returning.",answer:false},
      ],
      listeningTitle:"Your brain on travel",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"What happens in the brain when we're in an unfamiliar environment?",opts:["It shuts down","It creates new connections","It becomes less active","It forgets old memories"],correct:1},
        {q:"Why does novelty help the brain, according to the text?",opts:["It is relaxing","It reduces stress","It forces us to pay attention","It feels like home"],correct:2},
        {q:"How long do the cognitive benefits of travel last?",opts:["Only during the trip","A few days","Months after returning","Exactly one year"],correct:2},
        {q:"What does the writer say travel really is?",opts:["An escape from reality","A waste of money","One of the most productive things for your mind","Overrated"],correct:2},
      ],
      grammarExamples:[
        '"As a result, we become more creative and more adaptable."',
        '"Furthermore, people who travel regularly report higher empathy."',
        '"Therefore, the brain wakes up."',
        '"In addition, we meet people with completely different stories."',
        '"Moreover, the effects last."',
        '"Consequently, even a short trip can rewire your thinking."',
      ],
      grammarRule:"Result connectors show a consequence: THEREFORE, AS A RESULT, CONSEQUENTLY. Addition connectors add a new supporting point: FURTHERMORE, MOREOVER, IN ADDITION. These are used mainly in formal and written English, but also in organised spoken arguments.",
      grammarTable:[["Function","Connectors","Position"],["Result / consequence","therefore, as a result, consequently","Start of new sentence or after semicolon"],["Addition","furthermore, moreover, in addition","Start of new sentence or paragraph"],["Both","followed by comma","Therefore, the brain wakes up."]],
      grammarWatch:"These connectors go at the START of a new sentence or clause — not in the middle: <em>\"The brain, therefore, wakes up\"</em> is possible but formal. In speech, place them at the start: <strong>\"Therefore, the brain wakes up.\"</strong>",
      grammarTip:"Build arguments in three steps: <strong>make a claim → give a reason → add a result or more evidence</strong>. Use result + addition connectors to link these steps clearly.",
      talkQ:[
        "What is the main argument of the text? Summarise it in two sentences using 'therefore' and 'furthermore'.",
        "Make your own short argument about something you believe in. Use: 'Furthermore… / As a result… / Moreover…'",
        "Do you agree that travel is productive for the mind? Build a counter-argument if you disagree.",
        "What other activities — besides travel — have similar benefits for the brain? Argue your point using result and addition connectors.",
      ],
      talkTip:`Model: "I think reading has similar benefits to travel. It exposes you to different perspectives. Furthermore, it improves focus and vocabulary. As a result, regular readers tend to be more empathetic. Moreover, it's cheaper than a plane ticket."`,
      speakingChallenge:"Argue a position on any topic you care about. Use at least two result connectors (therefore, as a result, consequently) and two addition connectors (furthermore, moreover, in addition).",
    },
  },

  // ── 9: Unit 10 – Countable & Uncountable ─────────────────────────────────
  {
    cycle2: {
      reading:`<p>I'm having twelve people for dinner on Saturday and I have almost nothing in the fridge. I have some eggs, a lot of butter, and a little bit of salt. That's it. There isn't much time, and there isn't any bread. This is not ideal.</p>
<p>I need a lot of things. I need some tomatoes — not many, just six or seven. I need some cheese and some olive oil. Is there any pasta left? There isn't any. Do I have much flour? Not much. I need to go to the market.</p>
<p>The good news: I have plenty of wine. Is there any water? There's some, but not a lot. There are a few good glasses left — I broke three last week. There aren't many candles, but there are some. It will be a good dinner. It always is, somehow, even when there's almost nothing to start with.</p>`,
      vocab:[
        {word:"fridge",trans:"heladera, nevera",ex:'"There\'s almost nothing in the fridge."'},
        {word:"flour",trans:"harina",ex:'"Do you have any flour? I need to make bread."'},
        {word:"olive oil",trans:"aceite de oliva",ex:'"Use a little olive oil in the pan."'},
        {word:"plenty of",trans:"un montón de, de sobra",ex:'"We have plenty of time — don\'t rush."'},
        {word:"to run out of",trans:"quedarse sin",ex:'"We\'ve run out of coffee — can you buy some?"'},
      ],
      quickCheck:[
        {statement:"The narrator has a lot of pasta at home.",answer:false},
        {statement:"The narrator has plenty of wine.",answer:true},
        {statement:"The narrator broke three glasses last week.",answer:true},
      ],
      listeningTitle:"Dinner for twelve",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"How many people is the narrator cooking for?",opts:["Six","Eight","Ten","Twelve"],correct:3},
        {q:"What does the narrator have a lot of?",opts:["Pasta","Bread","Butter and eggs","Tomatoes"],correct:2},
        {q:"How many tomatoes does the narrator need?",opts:["Two or three","Six or seven","Ten","A whole bag"],correct:1},
        {q:"What does the narrator have plenty of?",opts:["Water","Wine","Candles","Pasta"],correct:1},
      ],
      grammarExamples:[
        '"I have some eggs and a lot of butter."',
        '"There isn\'t much time, and there isn\'t any bread."',
        '"I need some tomatoes — not many, just six or seven."',
        '"Is there any pasta left? There isn\'t any."',
      ],
      grammarRule:"SOME is used in positive sentences (I have some eggs). ANY is used in questions and negatives (Is there any pasta? There isn't any). MUCH is used with uncountable nouns; MANY with countable nouns. A LOT OF works with both.",
      grammarTable:[["Quantifier","Used with","Sentence type","Example"],["some","count + uncount","positive","I have some cheese."],["any","count + uncount","question / negative","Is there any oil? / There isn't any bread."],["much","uncountable only","question / negative","How much flour? / Not much."],["many","countable only","question / negative","How many eggs? / Not many."],["a lot of","count + uncount","positive (large qty)","I have a lot of wine."]],
      grammarWatch:"In positive sentences, use SOME, not ANY: <em>\"I have any tomatoes\"</em> ✗ → <strong>\"I have some tomatoes\"</strong> ✓. But in offers and requests, ANY can appear in questions: <em>\"Would you like any help?\"</em> ✓",
      grammarTip:"<strong>Some</strong> = positive. <strong>Any</strong> = questions and negatives. <strong>Much/Many</strong> = large questions/negatives. <strong>A lot of</strong> = large positive.",
      talkQ:[
        "What does the narrator have and what does she need? List three of each.",
        "What do you have in your fridge right now? Use: 'I have some… / There isn't any… / There's a lot of…'",
        "Ask your partner: 'How much coffee do you drink a day?' 'Do you have any plans for the weekend?' 'How many people do you live with?'",
        "When was the last time you cooked for many people? What did you need? What did you run out of?",
      ],
      talkTip:`Model: "I have some pasta and a lot of onions, but there isn't any cheese. There isn't much olive oil either. I don't have many fresh vegetables. I think I need to go shopping."`,
      speakingChallenge:"Describe the contents of your kitchen using some, any, much, many, a lot of, and plenty of. Then plan a meal with what you have — or explain what you need to buy.",
    },
    cycle3: {
      reading:`<p>The café had a few tables and very little decoration. A few old prints on the wall, a little natural light from one window. The menu had only a few options — four coffees, two teas, one cake. That was it.</p>
<p>Few cafés survive on so little. But this one had survived for thirty years. The owner, an older man with few words and a great deal of patience, made every drink himself. There was little noise. Few customers talked loudly. Most people came to think, or to read, or to do nothing at all.</p>
<p>I ordered the cake. There was a little left — just two pieces. I got the last one. I ate slowly. There was little reason to rush. Few experiences in life are as simple and as good as a quiet afternoon with something sweet and nowhere to be. I went back the following week. And the week after that.</p>`,
      vocab:[
        {word:"print",trans:"lámina, grabado",ex:'"There were a few old prints on the café walls."'},
        {word:"a great deal of",trans:"una gran cantidad de",ex:'"It takes a great deal of patience to learn a language."'},
        {word:"to survive",trans:"sobrevivir, mantenerse",ex:'"The small shop has survived for decades."'},
        {word:"to rush",trans:"apurarse, tener prisa",ex:'"There\'s no need to rush — we have time."'},
        {word:"decoration",trans:"decoración",ex:'"The room had very little decoration — just white walls."'},
      ],
      quickCheck:[
        {statement:"The café had many options on the menu.",answer:false},
        {statement:"The café had been open for thirty years.",answer:true},
        {statement:"The narrator only visited the café once.",answer:false},
      ],
      listeningTitle:"The quiet café",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"How many items were on the menu?",opts:["Two coffees and one cake","Four coffees, two teas, one cake","Six drinks and three cakes","Only coffee"],correct:1},
        {q:"How long had the café been open?",opts:["Ten years","Twenty years","Thirty years","Fifty years"],correct:2},
        {q:"How much cake was left when the narrator ordered?",opts:["None — it had sold out","One piece","Two pieces","A lot"],correct:2},
        {q:"Why did most people come to the café?",opts:["To meet friends","To work loudly","To think, read, or do nothing","To eat a big meal"],correct:2},
      ],
      grammarExamples:[
        '"The café had a few tables and very little decoration."',
        '"Few cafés survive on so little."',
        '"There was a little left — just two pieces."',
        '"Few customers talked loudly."',
      ],
      grammarRule:"A FEW and A LITTLE have a positive meaning — there is some, even if not much. FEW and LITTLE (without 'a') have a negative meaning — there is not enough, hardly any. A FEW is used with countable nouns; A LITTLE with uncountable nouns.",
      grammarTable:[["Expression","Noun type","Meaning","Example"],["a few","countable","some (positive)","I have a few friends here."],["few","countable","not enough (negative)","Few people know this."],["a little","uncountable","some (positive)","There's a little milk left."],["little","uncountable","not enough (negative)","There's little hope."]],
      grammarWatch:"The difference is subtle but important: <em>\"I have few friends\"</em> = sadly, not many. <em>\"I have a few friends\"</em> = I do have some friends. The article <strong>a</strong> changes the meaning completely.",
      grammarTip:"<strong>A few / a little</strong> = enough, some. <strong>Few / little</strong> = not enough. When in doubt: if it sounds pessimistic → no article. If it sounds hopeful or neutral → use 'a'.",
      talkQ:[
        "How does the café in the story create atmosphere with very little? What does 'little' suggest emotionally?",
        "Describe a place you love that has few things but feels complete. Use 'a few', 'few', 'a little', 'little'.",
        "Complete: 'I have a few… but little… in my life right now.' What does that tell you?",
        "Is there something you have very little of that you wish you had more? And something you have a little of that feels like enough?",
      ],
      talkTip:`Model: "I have a little time this week — just enough to read before bed. I have few real commitments, which I love. But I have little patience for traffic, I have to admit. A few things bother me."`,
      speakingChallenge:"Describe your life right now using all four expressions: a few, few, a little, little. Make sure the positive and negative meanings are clear from context.",
    },
  },

  // ── 10: Unit 11 – Comparatives & Superlatives ────────────────────────────
  {
    cycle2: {
      reading:`<p>The new apartment is not as big as the old one. The ceilings aren't as high, and the kitchen is less spacious. But the light is better. In the old apartment, the light was never as good as this — grey and indirect, like an apology.</p>
<p>The neighbourhood isn't as quiet as before. It's noisier and less safe after midnight, or so people say. But it's less isolated. In my old street, I didn't know a single neighbour. Here, the baker knows my name. That's not a small thing.</p>
<p>Is the new apartment as comfortable as the old one? Not yet. Is it as expensive? No, it's considerably less expensive, which was the whole point. Is it as perfect? Nothing ever is. But it's mine in a different way — newer, smaller, and not quite as polished. I think I'm going to be happy here. Not as happy as I was before, maybe. Happier, actually. Just differently so.</p>`,
      vocab:[
        {word:"spacious",trans:"espacioso, amplio",ex:'"The new office is more spacious than the old one."'},
        {word:"isolated",trans:"aislado",ex:'"The village is beautiful but very isolated."'},
        {word:"indirect",trans:"indirecto",ex:'"The light in the room was soft and indirect."'},
        {word:"considerably",trans:"considerablemente",ex:'"The new version is considerably better."'},
        {word:"polished",trans:"prolijo, refinado",ex:'"Her presentation was polished and professional."'},
      ],
      quickCheck:[
        {statement:"The new apartment has better light than the old one.",answer:true},
        {statement:"The new neighbourhood is less noisy than the old one.",answer:false},
        {statement:"The new apartment is more expensive than the old one.",answer:false},
      ],
      listeningTitle:"A new apartment",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"What is better about the new apartment?",opts:["The size","The ceilings","The light","The kitchen"],correct:2},
        {q:"Why does the narrator like the new neighbourhood more?",opts:["It is quieter","It is safer","The baker knows their name","It has a bigger park"],correct:2},
        {q:"Why did the narrator move?",opts:["The old apartment was too noisy","The new one is less expensive","The neighbourhood was dangerous","They wanted more space"],correct:1},
        {q:"How does the narrator feel at the end?",opts:["Unhappy and regretful","Neutral","Expecting to be happier","Exactly as happy as before"],correct:2},
      ],
      grammarExamples:[
        '"The new apartment is not as big as the old one."',
        '"The light was never as good as this."',
        '"The kitchen is less spacious."',
        '"It is considerably less expensive."',
      ],
      grammarRule:"NOT AS + adjective + AS expresses that two things are not equal — the first is less than the second. LESS + adjective (+ THAN) is another way to show the first is inferior. THE LEAST + adjective identifies the lowest degree in a group of three or more.",
      grammarTable:[["Structure","Meaning","Example"],["not as + adj + as","first is less than second","This room is not as big as that one."],["less + adj (+ than)","first is inferior","This is less spacious than before."],["the least + adj","lowest in a group","This is the least expensive option."],["nowhere near as","emphatic — very different","It's nowhere near as good."]],
      grammarWatch:"NOT AS…AS is not the same as NOT SO…AS (more formal and literary). In everyday speech, always use <strong>not as…as</strong>. Don't confuse LESS (inferior) with FEWER (for countable nouns): <em>\"less problems\"</em> ✗ → <strong>\"fewer problems\"</strong> ✓",
      grammarTip:"<strong>Not as + adj + as</strong> = the same idea as <strong>less + adj + than</strong>: 'not as big' = 'less big.' Use whichever flows better in context.",
      talkQ:[
        "Compare the narrator's old and new apartment. What is less good? What is not as good? What is better?",
        "Compare two places you've lived or two cities you know. Use 'not as…as' and 'less…than' at least twice each.",
        "Is your life now less stressful than five years ago? Not as busy? Less complicated? Explain.",
        "What is the least stressful part of your week? And the least enjoyable?",
      ],
      talkTip:`Model: "My current job is less stressful than my last one, but it's not as well-paid. The commute is not as long, which is great. I think my old job was the least flexible — I could never say no to anything."`,
      speakingChallenge:"Compare three options — three jobs, three cities, three restaurants — using not as…as, less…than, and the least. Make a recommendation at the end.",
    },
    cycle3: {
      reading:`<p>The more I travel, the less I need. This is the traveller's paradox: you go looking for more, and you come back wanting less. The more time I spend in small guesthouses with thin walls and shared bathrooms, the more I appreciate a quiet room of my own. But the more I appreciate it, the less I actually need it to be perfect.</p>
<p>Studies confirm this. The more connected people are to a community, the happier they tend to be — far happier than those with more money but less belonging. The richer the experience, the poorer the substitute. A much stronger predictor of happiness than income is how often you laugh with people you love.</p>
<p>This is not anti-materialism. It's just evidence. The more you pay attention, the more you see. And the more you see, the much smaller your problems tend to feel — which is a much more useful shift than buying something new.</p>`,
      vocab:[
        {word:"paradox",trans:"paradoja",ex:'"It\'s a paradox: the more you know, the more uncertain you feel."'},
        {word:"guesthouse",trans:"pensión, hospedaje",ex:'"We stayed in a small guesthouse near the coast."'},
        {word:"belonging",trans:"pertenencia",ex:'"A sense of belonging is essential for wellbeing."'},
        {word:"predictor",trans:"predictor, indicador",ex:'"Exercise is a strong predictor of good mental health."'},
        {word:"substitute",trans:"sustituto",ex:'"Money is a poor substitute for connection."'},
      ],
      quickCheck:[
        {statement:"The text argues that more money is the strongest predictor of happiness.",answer:false},
        {statement:"According to the text, the more connected people are, the happier they tend to be.",answer:true},
        {statement:"The writer is saying that material things have no value.",answer:false},
      ],
      listeningTitle:"The traveller's paradox",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"What is 'the traveller's paradox' according to the text?",opts:["Travel is expensive but worth it","You go looking for more and come back wanting less","The more you travel, the more you spend","Travel makes you unhappy"],correct:1},
        {q:"What does the text say is a much stronger predictor of happiness than income?",opts:["Having a good job","Living in a rich country","Laughing often with people you love","Owning a comfortable home"],correct:2},
        {q:"What happens the more you pay attention?",opts:["You spend more money","Your problems get bigger","Your problems feel much smaller","You travel less"],correct:2},
        {q:"What is the writer's main point?",opts:["Travel is the only path to happiness","Buying things makes you happy","Experience and connection matter more than things","Everyone should live with less"],correct:2},
      ],
      grammarExamples:[
        '"The more I travel, the less I need."',
        '"The more time I spend in small guesthouses, the more I appreciate a quiet room."',
        '"Far happier than those with more money but less belonging."',
        '"A much stronger predictor than income."',
      ],
      grammarRule:"THE MORE…THE MORE (or THE MORE…THE LESS) shows that two things change together. We also use MUCH, FAR, A LOT, EVEN, and CONSIDERABLY before comparatives to emphasise the degree of difference.",
      grammarTable:[["Structure","Example"],["the more…the more","The more you read, the more you know."],["the more…the less","The more you travel, the less you worry."],["the less…the better","The less noise, the better I sleep."],["much / far + comparative","This is much easier than I thought."],["even + comparative","She's even taller than her brother."]],
      grammarWatch:"The double comparative needs THE before BOTH parts: <em>\"More you read, more you know\"</em> ✗ → <strong>\"The more you read, the more you know\"</strong> ✓",
      grammarTip:"To emphasise a comparative: <strong>much, far, a lot, considerably, slightly, even + comparative adjective.</strong> Choose the intensifier that matches the degree: 'slightly better' vs 'far better.'",
      talkQ:[
        "Do you agree with the paradox 'the more you travel, the less you need'? Has this happened to you?",
        "Complete with your own ideas: 'The more I…, the more I…' / 'The less I…, the better I…'",
        "What makes you far happier than other things? Use: 'X makes me much happier than Y.'",
        "Is there something in your life that has become considerably less important over time?",
      ],
      talkTip:`Model: "The more I work from home, the less I want to commute. The less time I spend in traffic, the much better my mornings are. And the better my mornings are, the more productive I feel. It's a much better system for me."`,
      speakingChallenge:"Use the double comparative (the more…the more/less) to describe something that changes gradually in your life. Then use much/far + comparative at least twice to emphasise your point.",
    },
  },

  // ── 11: Unit 12 – Adjectives, Adverbs & Time Words ───────────────────────
  {
    cycle2: {
      reading:`<p>The renovation took eight months and three arguments with the architect. But the result was worth every difficult conversation. The café now has a long, narrow, wooden bar along the left wall. Above it, three small, round, vintage pendant lights cast a warm glow.</p>
<p>The chairs are mismatched — deliberately so. There is a heavy, old, green velvet armchair in the corner. Next to it, two lightweight, modern, white plastic chairs. Against the back wall: a beautiful, large, black-and-white photograph of the neighbourhood in 1960.</p>
<p>It works because nothing matches perfectly, and yet everything belongs. The owner — a tall, young, Peruvian architect with excellent taste — says she designed it to feel like a living room where you just happen to find good coffee. She succeeded. This is no longer just a café. It is a destination.</p>`,
      vocab:[
        {word:"renovation",trans:"renovación",ex:'"The renovation of the old building took two years."'},
        {word:"pendant light",trans:"lámpara colgante",ex:'"The pendant lights gave the room a warm atmosphere."'},
        {word:"mismatched",trans:"desparejos, sin combinar",ex:'"The chairs were mismatched but it looked intentional."'},
        {word:"velvet",trans:"terciopelo",ex:'"The sofa was covered in deep blue velvet."'},
        {word:"destination",trans:"destino, lugar de referencia",ex:'"The restaurant has become a destination in the city."'},
      ],
      quickCheck:[
        {statement:"The chairs in the café all match perfectly.",answer:false},
        {statement:"The architect designed the café to feel like a living room.",answer:true},
        {statement:"The renovation was quick and conflict-free.",answer:false},
      ],
      listeningTitle:"The renovated café",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"How long did the renovation take?",opts:["Three months","Six months","Eight months","One year"],correct:2},
        {q:"How are the chairs described?",opts:["All matching and modern","All wooden and old","Deliberately mismatched","All the same colour"],correct:2},
        {q:"What is on the back wall?",opts:["A mirror","A vintage map","A large black-and-white photograph","A painting"],correct:2},
        {q:"What was the architect's design goal?",opts:["A modern and minimal space","A space that feels like a living room","A traditional café","A children's café"],correct:1},
      ],
      grammarExamples:[
        '"A long, narrow, wooden bar."',
        '"Three small, round, vintage pendant lights."',
        '"A heavy, old, green velvet armchair."',
        '"A tall, young, Peruvian architect."',
      ],
      grammarRule:"When several adjectives describe a noun, they follow a fixed order: Opinion → Size → Age → Shape → Colour → Origin → Material → Purpose + Noun. You don't need to use all categories, but the order must be respected.",
      grammarTable:[["Category","Examples","Example phrase"],["Opinion","beautiful, lovely, heavy","a beautiful old lamp"],["Size","large, small, long","a long narrow bar"],["Age","old, young, vintage","an old green chair"],["Shape","round, square, narrow","a round wooden table"],["Colour","green, white, black","a green velvet armchair"],["Origin","Peruvian, Italian, French","a French vintage clock"],["Material","wooden, velvet, plastic","a wooden pendant light"]],
      grammarWatch:"Putting adjectives in the wrong order sounds unnatural to a native speaker: <em>\"a wooden old small table\"</em> ✗ → <strong>\"a small old wooden table\"</strong> ✓",
      grammarTip:"Remember the sequence with: <strong>O-S-A-Sh-C-O-M</strong> — Opinion, Size, Age, Shape, Colour, Origin, Material.",
      talkQ:[
        "Find three noun phrases with multiple adjectives in the text. What order do they follow?",
        "Describe a room you love using at least three noun phrases with 2-3 adjectives each.",
        "How would you describe your ideal café, restaurant, or workspace? Use ordered adjectives.",
        "Describe a person you admire using ordered adjectives: appearance, personality, origin.",
      ],
      talkTip:`Model: "My favourite room has a large, old, wooden desk by the window. On it, there's a small, round, silver clock from my grandmother. The walls are covered in beautiful, vintage, black-and-white photographs."`,
      speakingChallenge:"Describe a real or imaginary space — a room, a café, a garden — using at least six noun phrases with multiple adjectives in the correct order.",
    },
    cycle3: {
      reading:`<p>The review was absolutely brutal. "The food was completely cold," it said. "The service was utterly slow, the pasta was totally overcooked, and the dessert was absolutely inedible." I read it three times. It was, undeniably, about my restaurant.</p>
<p>My chef was rather upset. My manager was quite concerned. I was slightly less worried than both of them, which was either wisdom or denial. The reviewer had been to us on a Tuesday in January. January is always rather difficult. Tuesdays are slightly quieter. That particular Tuesday had been completely chaotic — a broken oven, two sick staff members.</p>
<p>We responded publicly, politely, and honestly. We invited the reviewer back. They came. They ordered the same things. They left a new review: "Absolutely exceptional. Completely transformed. Rather impressed." Completely worth the effort. Restaurants, like people, are not always at their best on a Tuesday in January.</p>`,
      vocab:[
        {word:"brutal",trans:"brutal, muy duro",ex:'"The review was absolutely brutal — one star."'},
        {word:"inedible",trans:"incomible",ex:'"The fish was completely inedible."'},
        {word:"denial",trans:"negación, negación de la realidad",ex:'"He was in denial about how serious the problem was."'},
        {word:"publicly",trans:"públicamente",ex:'"She responded publicly and professionally."'},
        {word:"exceptional",trans:"excepcional",ex:'"The second visit was absolutely exceptional."'},
      ],
      quickCheck:[
        {statement:"The restaurant reviewer left a positive review the first time.",answer:false},
        {statement:"The restaurant responded to the review by ignoring it.",answer:false},
        {statement:"The reviewer came back and was impressed the second time.",answer:true},
      ],
      listeningTitle:"The brutal review",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"When did the reviewer visit?",opts:["A Saturday in summer","A Monday in December","A Tuesday in January","A Friday in March"],correct:2},
        {q:"What was the problem that night?",opts:["A power cut and no water","A broken oven and two sick staff","An argument in the kitchen","A menu mistake"],correct:1},
        {q:"How did the restaurant respond?",opts:["Angrily and defensively","They ignored it","Publicly, politely, and honestly","They reported the reviewer"],correct:2},
        {q:"What was the second review like?",opts:["Still negative","Mixed — some good, some bad","Absolutely exceptional","The same as the first"],correct:2},
      ],
      grammarExamples:[
        '"The review was absolutely brutal."',
        '"The food was completely cold."',
        '"My chef was rather upset."',
        '"My manager was quite concerned."',
        '"I was slightly less worried."',
      ],
      grammarRule:"Gradable adjectives (cold, upset, good) can be made stronger or weaker with intensifiers: VERY, QUITE, RATHER, SLIGHTLY (weaker → stronger). Non-gradable adjectives (perfect, inedible, exceptional, brutal, exhausted) already mean 'completely' — use ABSOLUTELY, COMPLETELY, UTTERLY, TOTALLY — never VERY.",
      grammarTable:[["Type","Adjectives","Correct intensifiers","Wrong intensifiers"],["Gradable","cold, busy, good, big","very, quite, rather, slightly","absolutely ✗"],["Non-gradable","freezing, exhausted, perfect","absolutely, completely, utterly","very ✗"]],
      grammarWatch:"<em>\"Very perfect\"</em> ✗ / <em>\"very exhausted\"</em> ✗ / <em>\"very brilliant\"</em> ✗ — these adjectives are already at maximum. Use <strong>absolutely perfect / completely exhausted / truly brilliant</strong> ✓",
      grammarTip:"Quick test: if the adjective has a weaker and stronger version (hot / cold / warm), it's gradable → very/quite/rather. If it's an extreme or absolute (boiling, freezing, perfect, terrible), it's non-gradable → absolutely/completely.",
      talkQ:[
        "Find three gradable and three non-gradable adjectives in the text. Which intensifiers are used with each?",
        "Describe a terrible meal or service experience using non-gradable adjectives: 'The food was absolutely… / The service was completely…'",
        "Tell your partner about something that was quite good, rather surprising, and absolutely unexpected this week.",
        "Do you ever write reviews? What do you think makes a review fair and useful?",
      ],
      talkTip:`Model: "Last weekend I went to a restaurant that was quite good — the pasta was very fresh. But the dessert was absolutely terrible. Completely inedible. The service was rather slow too, though the waiter was utterly charming."`,
      speakingChallenge:"Write and deliver a restaurant (or hotel, or product) review using at least four gradable adjectives with appropriate intensifiers and four non-gradable adjectives with absolutely/completely/utterly.",
    },
  },

  // ── 12: Unit 13 – Adjectives & Adverbs ───────────────────────────────────
  {
    cycle2: {
      reading:`<p>My driving instructor is a patient man. He speaks quietly and moves calmly, even when I brake hard and accidentally turn right instead of left. He never raises his voice. He teaches well — better than anyone who has ever sat in that passenger seat, I suspect.</p>
<p>My previous instructor spoke fast and got nervous easily. She drove well, but she taught badly. She would say "go left!" and then grab the wheel. I learned slowly under her. With Rodrigo, I learn quickly.</p>
<p>Yesterday I parallel parked for the first time. I did it badly the first two times, then hardly looked at my mirrors — and it worked. Rodrigo nodded. He doesn't smile easily, but when he does, you know you've done something right. I'm not a good driver yet. But I'm getting better. Slowly, carefully, and with a lot of deep breaths.</p>`,
      vocab:[
        {word:"instructor",trans:"instructor",ex:'"My driving instructor is extremely patient."'},
        {word:"to brake",trans:"frenar",ex:'"She braked hard when the light turned red."'},
        {word:"passenger seat",trans:"asiento del acompañante",ex:'"He sat in the passenger seat and gave directions."'},
        {word:"to parallel park",trans:"estacionar en paralelo",ex:'"Parallel parking is the hardest part of the test."'},
        {word:"to nod",trans:"asentir con la cabeza",ex:'"She nodded slowly to show she understood."'},
      ],
      quickCheck:[
        {statement:"Rodrigo raises his voice when the narrator makes mistakes.",answer:false},
        {statement:"The narrator's previous instructor taught well.",answer:false},
        {statement:"The narrator successfully parallel parked on the third attempt.",answer:true},
      ],
      listeningTitle:"Learning to drive",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"How does Rodrigo teach?",opts:["Loudly and quickly","Quietly and calmly","Nervously and fast","Badly and impatiently"],correct:1},
        {q:"What was wrong with the previous instructor?",opts:["She drove badly","She taught badly","She spoke too quietly","She was always late"],correct:1},
        {q:"What did the narrator do for the first time yesterday?",opts:["Drove on the motorway","Made a U-turn","Parallel parked","Drove at night"],correct:2},
        {q:"How does Rodrigo show approval?",opts:["He claps","He says 'well done'","He nods","He smiles broadly"],correct:2},
      ],
      grammarExamples:[
        '"He speaks quietly and moves calmly."',
        '"She drove well, but she taught badly."',
        '"He teaches well — better than anyone."',
        '"I learned slowly under her. With Rodrigo, I learn quickly."',
      ],
      grammarRule:"Adjectives describe nouns (a patient man, a fast driver). Adverbs describe verbs, adjectives, or other adverbs (he speaks quietly, she drove fast, incredibly well). Most adverbs add -ly to the adjective. Some are irregular: good → well, fast → fast, hard → hard, late → late.",
      grammarTable:[["Adjective","Adverb","Notes"],["quiet","quietly","+ ly"],["calm","calmly","+ ly"],["good","well","irregular"],["fast","fast","no change"],["hard","hard","no change ('hardly' = almost not)"],["late","late","no change ('lately' = recently)"]],
      grammarWatch:"HARD and HARDLY are completely different: <em>\"She works hard\"</em> = she puts in great effort. <em>\"She hardly works\"</em> = she does almost nothing. Same for LATE (not early) vs LATELY (recently).",
      grammarTip:"After verbs of action, use adverbs: <em>\"she drives fast.\"</em> After linking verbs (be, feel, seem, look, taste), use adjectives: <em>\"she seems calm,\"</em> not <em>\"calmly.\"</em>",
      talkQ:[
        "How does the text contrast Rodrigo with the previous instructor? What adverbs are used?",
        "Describe how you do three things: 'I work… / I speak… / I drive…' Use adverbs.",
        "What's something you used to do badly that you now do well? What changed?",
        "Ask your partner: 'Do you drive? Do you drive fast or carefully? What did you find hard to learn?'",
      ],
      talkTip:`Model: "I work quite quickly, but I don't always work carefully. I speak confidently in meetings now — I used to speak so softly that people asked me to repeat myself. I've improved a lot, but I still present badly when I'm nervous."`,
      speakingChallenge:"Compare how two people you know do the same thing — work, cook, drive, speak. Use at least six adverbs and pay attention to good/well, fast/fast, hard/hardly.",
    },
    cycle3: {
      reading:`<p>Honestly, I wasn't going to go. The invitation arrived two weeks ago, and honestly, I almost said no immediately. Surprisingly, what changed my mind was a text from someone I hadn't heard from in years.</p>
<p>The event was a reunion of old classmates. Personally, I find reunions uncomfortable. Obviously, everyone is curious about everyone else's life. Inevitably, someone asks about your job, your relationship, your plans. Frankly, I don't always have good answers.</p>
<p>But I went. And interestingly, it was nothing like I feared. Nobody was competing. Everyone was, surprisingly, just glad to be there. Admittedly, there were one or two awkward conversations. But overall, it was warm and funny and — strangely — exactly what I needed. I went home feeling, unexpectedly, lighter. I would go again. Honestly.</p>`,
      vocab:[
        {word:"reunion",trans:"reunión (de personas que no se ven)",ex:'"Our class reunion is next month — twenty years!"'},
        {word:"invitation",trans:"invitación",ex:'"I received an invitation to the wedding last week."'},
        {word:"inevitably",trans:"inevitablemente",ex:'"Inevitably, the conversation turned to work."'},
        {word:"to compete",trans:"competir",ex:'"Nobody was competing — it was a friendly atmosphere."'},
        {word:"admittedly",trans:"hay que admitirlo, a decir verdad",ex:'"Admittedly, I was nervous at first."'},
      ],
      quickCheck:[
        {statement:"The narrator was excited about the reunion from the start.",answer:false},
        {statement:"The narrator found the reunion competitive and stressful.",answer:false},
        {statement:"The narrator felt better after the reunion than before.",answer:true},
      ],
      listeningTitle:"The reunion",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"Why did the narrator almost say no?",opts:["They had other plans","They find reunions uncomfortable","They didn't remember the classmates","They were sick"],correct:1},
        {q:"What changed the narrator's mind?",opts:["A phone call from a family member","An email from the organiser","A text from someone they hadn't heard from in years","A dream"],correct:2},
        {q:"What was the atmosphere actually like at the reunion?",opts:["Competitive and formal","Warm and funny","Quiet and awkward","Boring and short"],correct:1},
        {q:"How did the narrator feel going home?",opts:["Exhausted and annoyed","The same as before","Unexpectedly lighter","Disappointed"],correct:2},
      ],
      grammarExamples:[
        '"Honestly, I wasn\'t going to go."',
        '"Surprisingly, what changed my mind was a text."',
        '"Personally, I find reunions uncomfortable."',
        '"Admittedly, there were one or two awkward conversations."',
        '"Interestingly, it was nothing like I feared."',
      ],
      grammarRule:"Comment adverbs (sentence adverbs) express the speaker's attitude toward the whole sentence, not just one verb. They usually come at the start of the sentence, followed by a comma. Common ones: honestly, frankly, personally, obviously, surprisingly, inevitably, admittedly, interestingly, unexpectedly, strangely.",
      grammarTable:[["Adverb","Meaning","Example"],["honestly / frankly","expressing truth","Honestly, I don't know."],["personally","my own opinion","Personally, I prefer tea."],["obviously / clearly","stating something clear","Obviously, this is a mistake."],["surprisingly / unexpectedly","expressing surprise","Surprisingly, she agreed."],["admittedly","conceding a point","Admittedly, it wasn't perfect."],["interestingly / strangely","noting something unusual","Interestingly, nobody disagreed."]],
      grammarWatch:"Comment adverbs express the SPEAKER'S view, not the action's manner. Compare: <em>\"She spoke honestly\"</em> (= she was honest while speaking) vs <em>\"Honestly, she spoke\"</em> (= I'm being honest about what happened). Position changes the meaning.",
      grammarTip:"Place comment adverbs at the <strong>start of a sentence</strong> for maximum effect. They signal your attitude before the listener/reader even gets to the main point.",
      talkQ:[
        "Count how many comment adverbs appear in the text. What attitude does each one signal?",
        "Retell an experience using at least four comment adverbs to colour your opinion.",
        "Complete with real feelings: 'Honestly, I… / Surprisingly, I… / Personally, I think… / Admittedly, I sometimes…'",
        "Do you ever feel one way about something before it happens and then completely differently after? Describe using comment adverbs.",
      ],
      talkTip:`Model: "Honestly, I was dreading the presentation. Personally, I hate speaking in public. Surprisingly, once I started, I felt fine. Admittedly, I spoke too fast. But interestingly, people said it was the clearest talk of the day."`,
      speakingChallenge:"Tell a story where your expectations were wrong. Use at least six different comment adverbs to show how your attitude changed. Make sure each adverb comes at the start of a sentence.",
    },
  },

  // ── 13: Unit 14 – All Tenses ─────────────────────────────────────────────
  {
    cycle2: {
      reading:`<p>When I was eight, I wanted to be an astronaut. By the time I was twelve, I had changed my mind — I was going to be a chef. At fifteen I started a band. We were terrible, but we practised every weekend and we believed, completely, that we were going to be famous.</p>
<p>At twenty-two I graduated and moved to a city I didn't know. I have lived here for fourteen years now. I have changed careers twice. I am currently working in education, which is not what I planned, but it is what I am good at. I teach in the mornings and I write in the afternoons.</p>
<p>Next year I'm going to apply for a sabbatical. I might travel. I might write a book. I will probably do neither, and instead I will discover something I haven't thought of yet. That has always been the pattern: you plan A, life offers B, and you end up grateful for C.</p>`,
      vocab:[
        {word:"astronaut",trans:"astronauta",ex:'"When I was little, I wanted to be an astronaut."'},
        {word:"to graduate",trans:"graduarse",ex:'"She graduated at the top of her class."'},
        {word:"sabbatical",trans:"año sabático",ex:'"He took a sabbatical to write a book."'},
        {word:"pattern",trans:"patrón, esquema",ex:'"I noticed the same pattern repeating in my life."'},
        {word:"career",trans:"carrera (profesional)",ex:'"She changed careers at forty and never looked back."'},
      ],
      quickCheck:[
        {statement:"The narrator wanted to be a chef at age eight.",answer:false},
        {statement:"The narrator has lived in the same city for fourteen years.",answer:true},
        {statement:"The narrator has a completely fixed plan for next year.",answer:false},
      ],
      listeningTitle:"A life in tenses",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"What did the narrator want to be at age twelve?",opts:["An astronaut","A musician","A chef","A teacher"],correct:2},
        {q:"How long has the narrator lived in the current city?",opts:["Seven years","Ten years","Fourteen years","Twenty years"],correct:2},
        {q:"What is the narrator doing currently?",opts:["Working as a chef","Travelling","Teaching in the mornings and writing in the afternoons","Looking for a job"],correct:2},
        {q:"What is the narrator's pattern in life?",opts:["Always following plan A","Achieving everything planned","Planning A, getting B, ending up grateful for C","Never making plans"],correct:3},
      ],
      grammarExamples:[
        '"When I was eight, I wanted to be an astronaut." (Simple Past)',
        '"I have lived here for fourteen years." (Present Perfect)',
        '"I am currently working in education." (Present Continuous)',
        '"Next year I\'m going to apply for a sabbatical." (Going to future)',
        '"I will probably do neither." (Will future)',
      ],
      grammarRule:"In natural storytelling, we move between tenses to show time relationships: Simple Past for completed events in the past; Present Perfect for past experiences that are still relevant now; Simple Present for current facts; Present Continuous for current temporary situations; will/going to for future plans.",
      grammarTable:[["Tense","Used for","Signal words"],["Simple Past","finished past event","when I was, at fifteen, in 2010"],["Present Perfect","past → still relevant now","for fourteen years, have changed"],["Simple Present","current fact / habit","I teach, it is what I am good at"],["Present Continuous","current / temporary","I am currently working"],["Going to / Will","future plan or prediction","next year, I'm going to, I will"]],
      grammarWatch:"Don't use the same tense for everything. Switch tenses to reflect actual time relationships: past → present → future. A common mistake is using Simple Past for everything.",
      grammarTip:"Ask yourself about every sentence: <strong>When? Finished or ongoing? Relevant now? Future?</strong> Let the answers guide your tense choice.",
      talkQ:[
        "Identify the tense used in each paragraph of the text. What time period does each describe?",
        "Tell your own life story using at least four different tenses. Include past, present, and future.",
        "At what age did you know what you wanted to do? Has that changed? What are you planning next?",
        "What's a plan that became something completely different? Use the pattern: I planned A / life gave me B / I'm glad I got C.",
      ],
      talkTip:`Model: "When I was young, I wanted to be a doctor. I studied biology for two years, then changed direction. I have worked in marketing for eight years now. I am currently learning something new. Next year I'm going to take a course."`,
      speakingChallenge:"Tell your life story in exactly two minutes. You must use five different tenses, each at least once. Ask your partner to note each tense as you use it.",
    },
    cycle3: {
      reading:`<p>Interviewer: You've worked in five different countries. Has that changed you?</p>
<p>Elena: It has changed everything. When I started my first job abroad, I was twenty-five and I didn't speak the local language. I made mistakes every day. Now I work in four languages and I feel at home in most airports.</p>
<p>Interviewer: What has been the hardest part?</p>
<p>Elena: The hardest part was leaving my family. I left Argentina in 2010. I've been back many times, but I haven't lived there since. My parents are getting older and that worries me. I'm going to move back one day — I've decided that. But not yet.</p>
<p>Interviewer: What advice would you give someone starting out?</p>
<p>Elena: Go. Even if you're not ready. Especially if you're not ready. You will make mistakes. You won't understand everything. But you'll learn faster than you ever thought possible. And one day you'll realise you haven't thought about going home in weeks. That's when you know you've grown.</p>`,
      vocab:[
        {word:"abroad",trans:"en el exterior, en otro país",ex:'"She has worked abroad for most of her career."'},
        {word:"to feel at home",trans:"sentirse como en casa",ex:'"After a year, I started to feel at home in the city."'},
        {word:"to start out",trans:"empezar, dar los primeros pasos",ex:'"What advice would you give someone starting out?"'},
        {word:"to realise",trans:"darse cuenta",ex:'"One day you\'ll realise how much you\'ve changed."'},
        {word:"to worry",trans:"preocupar(se)",ex:'"Her parents\' health worries her."'},
      ],
      quickCheck:[
        {statement:"Elena has lived in Argentina since 2010.",answer:false},
        {statement:"Elena now speaks four languages.",answer:true},
        {statement:"Elena advises people to wait until they are completely ready before going abroad.",answer:false},
      ],
      listeningTitle:"The interview with Elena",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"How old was Elena when she first worked abroad?",opts:["Twenty","Twenty-two","Twenty-five","Thirty"],correct:2},
        {q:"When did Elena leave Argentina?",opts:["2005","2008","2010","2015"],correct:2},
        {q:"What worries Elena now?",opts:["Her job","Her parents getting older","Not speaking enough languages","Airports"],correct:1},
        {q:"What is Elena's main advice?",opts:["Wait until you're ready","Learn the language first","Go, even if you're not ready","Stay close to family"],correct:2},
      ],
      grammarExamples:[
        '"You\'ve worked in five countries." (Present Perfect)',
        '"I left Argentina in 2010." (Simple Past)',
        '"I haven\'t lived there since." (Present Perfect)',
        '"I\'m going to move back one day." (Going to)',
        '"You will make mistakes." (Will)',
      ],
      grammarRule:"In interviews and conversation, we switch tenses constantly. The interviewer uses Present Perfect to ask about life experience (Have you ever…?). The interviewee responds with Present Perfect for general experience, then switches to Simple Past to tell specific stories with dates and times.",
      grammarTable:[["Context","Tense","Example"],["Asking about experience","Present Perfect","Have you worked abroad?"],["Answering generally","Present Perfect","I have worked in five countries."],["Telling a specific story","Simple Past","I left Argentina in 2010."],["Talking about now","Present Simple / Continuous","I work in four languages."],["Future intention","Going to / Will","I'm going to move back one day."]],
      grammarWatch:"Start with Present Perfect for the general question, then switch to Simple Past when you give specific details: <em>\"Yes, I've been to Japan. I went in 2019 and I stayed for a month.\"</em> Don't stay in one tense throughout.",
      grammarTip:"Interviews are a great context for practising tense switching: general claim (PP) → specific story (SP) → current situation (simple/continuous present) → future (will/going to).",
      talkQ:[
        "Find each tense switch in the interview. Why does it change at each point?",
        "Practise in pairs: one person interviews, one answers. Topic: your career or study. Use at least four tenses.",
        "Tell a partner about the most interesting job or experience you've had. Use Present Perfect to introduce it, then Simple Past to tell the story.",
        "If someone interviewed you right now about your English learning journey, what would you say? Prepare three answers.",
      ],
      talkTip:`Model: "I've studied English for three years. I started because I needed it for work. I've improved a lot since then — I can follow films now. Currently I'm focusing on speaking. One day I'm going to take an international exam."`,
      speakingChallenge:"In pairs: conduct a real interview about your life, work, or studies. The interviewer must ask questions in Present Perfect. The interviewee must switch to Simple Past for stories and use at least three other tenses.",
    },
  },

  // ── 14: Unit 15 – Full Consolidation ─────────────────────────────────────
  {
    cycle2: {
      reading:`<p>Why do we remember some teachers and forget others? I've thought about this for years, and I think the answer is simple: the ones we remember made us feel something. Not necessarily comfortable — often the opposite.</p>
<p>My best teacher was a woman named Graciela. She taught history and she never used the textbook. She would walk in, write one question on the board, and say: "You have fifteen minutes to think." Then she would walk out. Despite this — or because of it — we learned more than in any other class. Although she gave us few facts, we developed the habit of finding them ourselves. In spite of her unconventional methods, every one of her students passed the final exam.</p>
<p>Furthermore, she remembered our names twenty years later. As a result of knowing her, I became a teacher. Consequently, I walk in every morning and I write one question on the board. I haven't stopped doing that since my first day in the classroom. Some lessons, it turns out, are not about the subject. They are about the person.</p>`,
      vocab:[
        {word:"textbook",trans:"libro de texto",ex:'"She never used the textbook — she created her own materials."'},
        {word:"unconventional",trans:"poco convencional",ex:'"His unconventional methods worked surprisingly well."'},
        {word:"to develop a habit",trans:"desarrollar un hábito",ex:'"He developed the habit of reading every morning."'},
        {word:"to pass an exam",trans:"aprobar un examen",ex:'"Every student passed the final exam."'},
        {word:"it turns out",trans:"resulta que",ex:'"It turns out the meeting was cancelled."'},
      ],
      quickCheck:[
        {statement:"Graciela used the textbook as her main teaching tool.",answer:false},
        {statement:"All of Graciela's students passed the final exam.",answer:true},
        {statement:"The narrator became a teacher because of Graciela's influence.",answer:true},
      ],
      listeningTitle:"The teacher we remember",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"What does Graciela do at the start of each class?",opts:["Give a lecture","Hand out the textbook","Write one question on the board and leave","Show a film"],correct:2},
        {q:"According to the narrator, what did Graciela's method develop?",opts:["Fear of exams","The habit of finding facts themselves","A love of textbooks","Good memory"],correct:1},
        {q:"What did the narrator become because of Graciela?",opts:["A historian","A writer","A teacher","A journalist"],correct:2},
        {q:"What is the narrator's lesson from this story?",opts:["Unconventional methods don't work","History is the most important subject","Some lessons are about the person, not the subject","Exams are not important"],correct:3},
      ],
      grammarExamples:[
        '"Despite this — or because of it — we learned more than in any other class."',
        '"Although she gave us few facts, we developed the habit."',
        '"Furthermore, she remembered our names twenty years later."',
        '"As a result of knowing her, I became a teacher."',
        '"I haven\'t stopped doing that since my first day."',
      ],
      grammarRule:"In extended writing and speech, we hold a text together with cohesion devices: connectors (although, furthermore, as a result), pronoun reference (she → her → this), and tense consistency. Well-organised texts move from a general claim → specific evidence → conclusion.",
      grammarTable:[["Device","Function","Example from text"],["Concession connectors","contrast","Although she gave us few facts…"],["Addition connectors","add evidence","Furthermore, she remembered our names…"],["Result connectors","show consequence","As a result, I became a teacher."],["Present Perfect for relevance","link past → present","I haven't stopped since my first day."],["Pronoun reference","avoid repetition","Graciela → she → her → this"]],
      grammarWatch:"Avoid repeating the same connector: don't use 'however' or 'furthermore' three times in a row. Vary your connectors to keep the reader engaged.",
      grammarTip:"A strong paragraph has three parts: <strong>claim → evidence → result</strong>. Use connectors to signal each transition clearly.",
      talkQ:[
        "What connectors does the text use? Find one of each type: concession, addition, result.",
        "Describe a teacher or mentor who influenced you. Use at least three different types of connectors.",
        "Build a short argument: 'The best way to learn English is…' Use: although, furthermore, as a result, consequently.",
        "What lesson from a person (not from a book) has stayed with you? Organise your answer with connectors.",
      ],
      talkTip:`Model: "My best teacher was strict and demanding. Although I was afraid of her at first, I learned to respect her completely. Furthermore, her feedback was always honest. As a result, I improved faster than in any other class. I've used her methods ever since."`,
      speakingChallenge:"Deliver a two-minute opinion on any topic using: a clear claim, evidence with 'although' and 'even though', additional points with 'furthermore' and 'moreover', and a conclusion with 'as a result' or 'consequently'.",
    },
    cycle3: {
      reading:`<p>A woman walks into a library and says: "I need a book that will change my life." The librarian thinks for a moment and hands her a thin volume. The woman reads the title: <em>How to Ask Better Questions.</em></p>
<p>She laughs. She has been looking for answers all her life — not questions. But she takes it. She has been coming to this library since she was twelve, so she trusts the librarian. She reads the book in one sitting. By page forty, she is taking notes. By page eighty, she is writing questions she has never asked herself before.</p>
<p>She finishes it on a Sunday afternoon. She calls her daughter, who she hasn't spoken to in three months, even though they live in the same city. They talk for two hours. Although they don't resolve everything, they understand each other a little more. When she returns the book the following week, she says: "You were right." The librarian smiles. "I usually am," she says. "The question is always whether people are ready to ask."</p>`,
      vocab:[
        {word:"volume",trans:"tomo, libro",ex:'"She handed me a thin volume with a blue cover."'},
        {word:"in one sitting",trans:"de una sola vez",ex:'"I read the whole book in one sitting."'},
        {word:"to resolve",trans:"resolver",ex:'"They didn\'t resolve the argument, but they understood each other better."'},
        {word:"to trust",trans:"confiar en",ex:'"She trusts the librarian completely."'},
        {word:"to take notes",trans:"tomar notas",ex:'"She started taking notes by page forty."'},
      ],
      quickCheck:[
        {statement:"The woman wanted a book that would give her better answers.",answer:true},
        {statement:"The woman reads the book over several weeks.",answer:false},
        {statement:"The phone call with her daughter completely resolves all problems.",answer:false},
      ],
      listeningTitle:"The right question",
      listeningDesc:"Listen and answer.",
      listeningQ:[
        {q:"What does the woman ask the librarian for?",opts:["A mystery novel","A self-help book","A book that will change her life","A history book"],correct:2},
        {q:"Since when has the woman been visiting the library?",opts:["Since she was eight","Since she was twelve","Since she was eighteen","Since last year"],correct:1},
        {q:"What does the woman do after finishing the book?",opts:["Returns it immediately","Calls her daughter","Buys her own copy","Writes a review"],correct:1},
        {q:"What does the librarian say at the end?",opts:["The book is always right","The answer is never clear","The question is whether people are ready to ask","Books can't change lives"],correct:2},
      ],
      grammarExamples:[
        '"She has been looking for answers all her life." (Present Perfect)',
        '"She has been coming to this library since she was twelve." (Present Perfect)',
        '"She hasn\'t spoken to in three months, even though they live in the same city." (PP + concession)',
        '"Although they don\'t resolve everything, they understand each other more." (concession)',
        '"I usually am — the question is always whether people are ready." (Simple Present for truth)',
      ],
      grammarRule:"This story uses ALL the main structures of B1-B2 English: all tenses, connectors (although, even though), comparatives (a little more), modals (she trusts), quantifiers (all her life, a thin volume), and adverbs (usually, completely). Good English is not about using complicated structures — it is about choosing the right one at the right moment.",
      grammarTable:[["Structure","Example from text"],["Present Perfect","She has been looking for answers."],["Concession connector","Although they don't resolve everything…"],["Quantifier","a thin volume / all her life"],["Adverb of frequency","I usually am"],["Time clause","since she was twelve"],["Modal for past habit","She has been coming since…"]],
      grammarWatch:"The mark of a B1-B2 speaker is not using big words — it's using the right grammar for the right meaning. Accuracy, not complexity, is the goal.",
      grammarTip:"When you speak or write, choose grammar with purpose: <strong>which tense tells the reader WHEN? which connector shows the relationship? which quantifier shows HOW MUCH?</strong> These choices build clear, natural English.",
      talkQ:[
        "Find one example of each grammar structure from the table in the text. Explain why that structure was the right choice.",
        "What question would YOU ask a librarian or a wise person? How would they answer?",
        "Tell your partner a story that uses five different grammar structures on purpose. Pause and name each one.",
        "Final reflection: what has improved most in your English since you started? What do you still find challenging?",
      ],
      talkTip:`Model: "When I started this course, I used to make a lot of mistakes with tenses. I've improved a lot since then — especially with the Present Perfect. Although I still sometimes mix up 'since' and 'for', I notice the mistake now. I'm going to keep practising. The question isn't whether I'll improve — it's how fast."`,
      speakingChallenge:"Final challenge — free topic, five minutes: Tell a complete story or give an opinion using all five of these structures: (1) a concession connector, (2) a result connector, (3) Present Perfect + for/since, (4) a gradable adjective with an intensifier, and (5) a future form. Your partner checks each one off as you use it.",
    },
  },
];
