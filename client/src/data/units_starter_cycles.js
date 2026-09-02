// Cycle 2 and Cycle 3 content for Starter units (A1–A2).
// Indexed to match UNITS array in units_starter.js (0 = Unit 01 … 10 = Unit 11).
export const STARTER_CYCLES = [

  // ── 0: Unit 01 – Verb To Be + Subject Pronouns ───────────────────────────
  {
    cycle2: {
      reading:`<p>My name is Carlos. I am not a student. I am a waiter. I am twenty-two years old.</p>
<p>This is my sister, Elena. She is not a waiter. She is a nurse. She is twenty-eight years old.</p>
<p>Carlos and Elena are not from Buenos Aires. They are from Córdoba. But they are in Buenos Aires now.</p>
<p>Carlos: "Are you happy in Buenos Aires, Elena?"<br/>
Elena: "Yes, I am! The city is very exciting."<br/>
Carlos: "Are our parents happy here too?"<br/>
Elena: "No, they are not. They are in Córdoba. They are not here."<br/>
Carlos: "I know. But we are here. And we are fine."</p>`,
      vocab:[
        {word:"waiter",trans:"mozo, camarero",ex:'"He is a waiter at a café."'},
        {word:"nurse",trans:"enfermera/o",ex:'"She is a nurse at the hospital."'},
        {word:"exciting",trans:"emocionante",ex:'"Buenos Aires is a very exciting city."'},
        {word:"happy",trans:"feliz",ex:'"Are you happy in your new job?"'},
        {word:"fine",trans:"bien",ex:'"I am fine, thank you."'},
      ],
      quickCheck:[
        {statement:"Carlos is a student.",answer:false},
        {statement:"Elena is a nurse.",answer:true},
        {statement:"Carlos and Elena are from Buenos Aires.",answer:false},
      ],
      listeningTitle:"Carlos and Elena in Buenos Aires",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What is Carlos's job?",opts:["A doctor","A student","A waiter","A teacher"],correct:2},
        {q:"Where are Carlos and Elena from?",opts:["Buenos Aires","Rosario","Mendoza","Córdoba"],correct:3},
        {q:"Is Elena happy in Buenos Aires?",opts:["No, she is not.","Yes, she is!","She is not sure.","She is tired."],correct:1},
        {q:"Where are their parents?",opts:["In Buenos Aires","In Rosario","In Córdoba","In Mendoza"],correct:2},
      ],
      grammarExamples:[
        '"I am not a student. I am a waiter."',
        '"She is not a waiter. She is a nurse."',
        '"They are not from Buenos Aires."',
        '"Are you happy in Buenos Aires?"',
        '"Yes, I am! / No, they are not."',
      ],
      grammarRule:"To make a NEGATIVE with To Be, add NOT after the verb: I am not, He is not (isn't), They are not (aren't). For QUESTIONS, put the verb before the subject: Are you happy? Is she a nurse?",
      grammarTable:[["","Negative","Short negative"],["I am","I am not","I'm not"],["He / She / It is","He is not","He isn't"],["You / We / They are","They are not","They aren't"]],
      grammarWatch:"Short answer: <em>Are you from here?</em> → <strong>Yes, I am.</strong> (NOT 'Yes, I'm.') / <strong>No, I'm not.</strong> Never say <em>Yes, I'm</em> — you CANNOT contract a positive short answer.",
      grammarTip:"Remember: <strong>am not</strong> has no contraction (no 'amn't'). Only <strong>isn't</strong> and <strong>aren't</strong> are used.",
      talkQ:[
        "What is Carlos's job? Is he happy? Use 'is' and 'is not' in your answer.",
        "Say three things about yourself using 'I am not': job, place, or feelings.",
        "Ask your partner three yes/no questions using To Be: Are you…? Is your…?",
        "Look at the picture at the top. Is the person a man or a woman? Is he/she young or old? Where is he/she?",
      ],
      talkTip:`Model: "I am not a teacher. I am a student. I am not from Buenos Aires. I am from Rosario. Are you from a big city? Is your family here?"`,
      speakingChallenge:"Describe a person you know using To Be — positive, negative, and a question. Example: 'My brother is a chef. He is not young — he is thirty-five. Is he happy? Yes, he is!'",
    },
    cycle3: {
      reading:`<p>At a coffee shop — a short conversation.</p>
<p>Server: "Good morning! Are you ready to order?"<br/>
Customer: "Yes! Is the orange juice fresh?"<br/>
Server: "Yes, it is. It is very good today."<br/>
Customer: "Great. And is the coffee hot?"<br/>
Server: "Yes, of course it is!"<br/>
Customer: "Perfect. One orange juice and one coffee, please."<br/>
Server: "Of course! Are you here alone?"<br/>
Customer: "No, I am not. My friend is on the way."<br/>
Server: "No problem. Here you are!"<br/>
Customer: "Thank you very much. How much is it?"<br/>
Server: "It is five hundred pesos."<br/>
Customer: "Here you are!"</p>`,
      vocab:[
        {word:"ready to order",trans:"listo para pedir",ex:'"Are you ready to order? Yes, one coffee please."'},
        {word:"fresh",trans:"fresco",ex:'"Is the juice fresh? Yes, it is very fresh."'},
        {word:"of course",trans:"por supuesto",ex:'"Of course! Here you are."'},
        {word:"on the way",trans:"en camino",ex:'"My friend is on the way — five minutes!"'},
        {word:"here you are",trans:"aquí tiene / acá va",ex:'"One coffee. Here you are!"'},
      ],
      quickCheck:[
        {statement:"The customer orders a tea and a coffee.",answer:false},
        {statement:"The orange juice is fresh today.",answer:true},
        {statement:"The customer is alone at the coffee shop.",answer:false},
      ],
      listeningTitle:"At the coffee shop",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What does the customer order?",opts:["Tea and cake","Orange juice and coffee","Water and coffee","Juice and tea"],correct:1},
        {q:"Is the orange juice fresh?",opts:["No, it is not.","The server doesn't know.","Yes, it is.","It is yesterday's juice."],correct:2},
        {q:"Is the customer alone?",opts:["Yes, he is.","No, a friend is coming.","Yes, but a friend called.","No, the server sits down."],correct:1},
        {q:"How much is the order?",opts:["Three hundred pesos","Five hundred pesos","One thousand pesos","Four hundred pesos"],correct:1},
      ],
      grammarExamples:[
        '"Is the orange juice fresh? Yes, it is."',
        '"Is the coffee hot? Yes, of course it is."',
        '"Are you here alone? No, I am not."',
        '"How much is it? It is five hundred pesos."',
      ],
      grammarRule:"To Be QUESTIONS: Is it fresh? Are you alone? How much is it? SHORT ANSWERS: Yes, it is. / No, I am not. / No, it isn't. Use IS for He/She/It and ARE for You/We/They.",
      grammarTable:[["Question","Yes answer","No answer"],["Is it fresh?","Yes, it is.","No, it isn't."],["Are you alone?","Yes, I am.","No, I'm not."],["Are they ready?","Yes, they are.","No, they aren't."]],
      grammarWatch:"Don't say <em>Yes, it's.</em> Short answers NEVER use contractions in the YES form: <strong>Yes, it IS.</strong> / <strong>Yes, they ARE.</strong>",
      grammarTip:"In a café or shop, use: <strong>Is there…? / Are there…?</strong> for things and <strong>Is it…? / Are you…?</strong> for yes/no information.",
      talkQ:[
        "What does the customer ask about? Find three yes/no questions in the text.",
        "Practise in pairs: one person is a server, one is a customer. Order two things. Ask about price.",
        "What questions can you ask in a café? Write three questions using Is/Are.",
        "How do you ask for the price in English? How do you say thank you politely?",
      ],
      talkTip:`Model: "Good morning! Is the coffee good today? Yes, it is! One coffee, please. How much is it? It is three hundred pesos. Thank you very much!"`,
      speakingChallenge:"Role-play: You are in a café. Ask three questions using Is/Are. Give short answers. Order something and ask for the price. Swap roles.",
    },
  },

  // ── 1: Unit 02 – Possessive Adjectives + This/That/These/Those ───────────
  {
    cycle2: {
      reading:`<p>My name is Valentina. This is my bag. It is brown and very old. Inside my bag there is my phone, my keys, and my wallet.</p>
<p>My sister's name is Rosa. That is her umbrella — the red one near the door. Her umbrella is very big.</p>
<p>Our mother's bag is blue. It is on the table. Our father's keys are on the chair.</p>
<p>Valentina: "Rosa, is that your umbrella?"<br/>
Rosa: "Yes! It is my umbrella. And is this your bag?"<br/>
Valentina: "Yes, it is. But look — this is NOT my phone. Whose phone is this?"<br/>
Rosa: "It is our mother's phone!"<br/>
Valentina: "Oh no! I have her phone. And she has my keys!"</p>`,
      vocab:[
        {word:"wallet",trans:"billetera",ex:'"My wallet is in my bag."'},
        {word:"umbrella",trans:"paraguas",ex:'"It is raining. Where is my umbrella?"'},
        {word:"keys",trans:"llaves",ex:'"I have my keys in my pocket."'},
        {word:"inside",trans:"adentro de",ex:'"Inside the bag there is a book and a pen."'},
        {word:"whose",trans:"¿de quién?",ex:'"Whose phone is this? It is my sister\'s phone."'},
      ],
      quickCheck:[
        {statement:"Valentina's bag is red.",answer:false},
        {statement:"Rosa's umbrella is near the door.",answer:true},
        {statement:"Valentina has her own phone in the bag.",answer:false},
      ],
      listeningTitle:"Whose things are these?",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What colour is Valentina's bag?",opts:["Red","Black","Brown","Blue"],correct:2},
        {q:"Where is Rosa's umbrella?",opts:["In the bag","On the chair","Near the door","On the table"],correct:2},
        {q:"Whose phone does Valentina find in her bag?",opts:["Her own phone","Her sister's phone","Her mother's phone","Her father's phone"],correct:2},
        {q:"What does Valentina's mother have by mistake?",opts:["Valentina's bag","Valentina's keys","Valentina's wallet","Rosa's umbrella"],correct:1},
      ],
      grammarExamples:[
        '"This is my bag."',
        '"That is her umbrella — the red one."',
        '"Our mother\'s bag is blue."',
        '"Our father\'s keys are on the chair."',
        '"It is our mother\'s phone!"',
      ],
      grammarRule:"The POSSESSIVE 'S shows that something belongs to a person: my mother's bag = the bag of my mother. Add 's after the name or noun. For plurals ending in -s, just add the apostrophe: my parents' car.",
      grammarTable:[["Person","Possessive adjective","Possessive 's"],["Sofia","her","Sofia's bag"],["Carlos","his","Carlos's keys"],["My parents","their","my parents' car"]],
      grammarWatch:"Don't confuse <strong>it's</strong> (= it is) and <strong>its</strong> (possession): <em>\"It's a big bag.\"</em> vs <em>\"The bag and its colour.\"</em>",
      grammarTip:"To ask about possession: <strong>Whose + noun + is/are + this/that/these/those?</strong> → <em>Whose bag is this?</em> → <em>It's Sofia's bag.</em>",
      talkQ:[
        "What belongs to Valentina in the story? What belongs to Rosa?",
        "Look around you. Point to three things and say whose they are: 'This is my teacher's book.'",
        "What is in your bag right now? Use: 'My ___'s ___ is in my bag.'",
        "Ask your partner: 'Whose ___ is that?' Your partner answers with possessive 's.",
      ],
      talkTip:`Model: "This is my phone. That is my partner's book. These are my teacher's pens. That umbrella near the door — it is my friend's umbrella."`,
      speakingChallenge:"Describe five objects in the room. For each one, say who it belongs to using possessive 's: 'This is Ana's notebook. That is the teacher's marker...'",
    },
    cycle3: {
      reading:`<p>A: "Excuse me — is this your jacket?"<br/>
B: "No, it is not mine. Maybe it is Pablo's jacket."<br/>
A: "Whose jacket is this, Pablo?"<br/>
Pablo: "It is not mine either. Look — it is not my size."<br/>
A: "Hmm. These gloves are here too. Are they yours, Pablo?"<br/>
Pablo: "Yes! Those are mine. Thank you!"<br/>
A: "And what about this scarf? Is it yours or hers?"<br/>
Pablo: "It is hers — it is Laura's scarf. She is always losing things!"</p>
<p>Later…</p>
<p>Laura: "Oh! That jacket is mine! I was looking for it everywhere!"</p>`,
      vocab:[
        {word:"jacket",trans:"campera, chaqueta",ex:'"My jacket is black and very warm."'},
        {word:"gloves",trans:"guantes",ex:'"These gloves are mine — they are very warm."'},
        {word:"scarf",trans:"bufanda",ex:'"It is cold. Wear your scarf!"'},
        {word:"mine / yours / hers / his",trans:"el mío / el tuyo / el de ella / el de él",ex:'"Is this yours? No, it is not mine — it is hers."'},
        {word:"to lose",trans:"perder",ex:'"She is always losing her keys."'},
      ],
      quickCheck:[
        {statement:"The jacket belongs to Pablo.",answer:false},
        {statement:"The gloves belong to Pablo.",answer:true},
        {statement:"The scarf belongs to Laura.",answer:true},
      ],
      listeningTitle:"Lost things",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"Whose jacket is it?",opts:["Pablo's","A's","Nobody's — it is lost","Laura's"],correct:3},
        {q:"Whose gloves are they?",opts:["Laura's","The stranger's","Pablo's","Nobody's"],correct:2},
        {q:"What does Pablo say about the jacket?",opts:["It is very nice","It is not his size","It is old","He likes it"],correct:1},
        {q:"What does Laura say at the end?",opts:["The jacket is Pablo's","She is angry","That jacket is hers","The scarf is hers"],correct:2},
      ],
      grammarExamples:[
        '"Is this your jacket? — No, it is not mine."',
        '"Are they yours, Pablo? — Yes, those are mine."',
        '"It is hers — it is Laura\'s scarf."',
      ],
      grammarRule:"POSSESSIVE PRONOUNS replace 'possessive adjective + noun': my jacket → mine / your jacket → yours / his jacket → his / her jacket → hers / our jacket → ours / their jacket → theirs.",
      grammarTable:[["Adjective","Pronoun","Example"],["my","mine","This is mine."],["your","yours","Is that yours?"],["his","his","It is his."],["her","hers","It is hers."],["our","ours","That bag is ours."],["their","theirs","Those keys are theirs."]],
      grammarWatch:"Don't add 's to possessive pronouns: <em>mines / yours / hers</em> ✗ → only <strong>mine</strong> is irregular. All others (yours, his, hers, ours, theirs) are already correct without 's.",
      grammarTip:"Use possessive pronouns when the noun is clear from context: <em>Is this your bag?</em> → <em>Yes, it's mine.</em> (= my bag) — you don't need to repeat the noun.",
      talkQ:[
        "Find all the possessive pronouns in the text: mine, yours, hers, his. What noun do they replace?",
        "Pick up three objects near you. Your partner asks: 'Is this yours?' You answer with possessive pronouns.",
        "Complete: 'This pen is ___. That book is ___. These keys are ___.' (Use pronouns, not adjectives.)",
        "Is there something you often lose? What is it? Tell your partner.",
      ],
      talkTip:`Model: "Is this your phone? No, it's not mine. Maybe it's hers. Whose book is that? It's mine — thank you! Are these your keys? No, those are his."`,
      speakingChallenge:"Play 'Whose is it?' Put 5 objects on the table. Point to each and ask your partner: 'Whose is this?' They must answer with a possessive pronoun.",
    },
  },

  // ── 2: Unit 03 – Simple Present (I/You/We/They) ──────────────────────────
  {
    cycle2: {
      reading:`<p>I always wake up at seven o'clock. I usually have breakfast at home — eggs and toast. I never drink coffee in the morning. I drink tea.</p>
<p>My friends and I sometimes go to the gym before work. We often walk to the gym — it is not far. We never take the bus on Mondays.</p>
<p>In the afternoon, I usually eat lunch at work. My colleagues and I often eat together. We sometimes order food from a restaurant. We never cook at the office!</p>
<p>At night, I always watch TV for one hour. I sometimes read a book. I never go to sleep after midnight. Sleep is important!</p>`,
      vocab:[
        {word:"always",trans:"siempre",ex:'"I always brush my teeth before bed."'},
        {word:"usually",trans:"generalmente, usualmente",ex:'"I usually have breakfast at seven."'},
        {word:"often",trans:"seguido, a menudo",ex:'"We often go to the park on Sundays."'},
        {word:"sometimes",trans:"a veces",ex:'"I sometimes listen to music on the bus."'},
        {word:"never",trans:"nunca",ex:'"She never eats meat."'},
      ],
      quickCheck:[
        {statement:"The narrator drinks coffee every morning.",answer:false},
        {statement:"The narrator and friends sometimes walk to the gym.",answer:false},
        {statement:"The narrator always goes to sleep before midnight.",answer:true},
      ],
      listeningTitle:"My daily habits",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What does the narrator drink in the morning?",opts:["Coffee","Juice","Tea","Milk"],correct:2},
        {q:"How do the narrator and friends get to the gym?",opts:["By bus","By car","They usually walk","By bike"],correct:2},
        {q:"Where does the narrator usually eat lunch?",opts:["At home","At a restaurant","At the park","At work"],correct:3},
        {q:"What does the narrator always do at night?",opts:["Read a book","Cook dinner","Watch TV for one hour","Go to the gym"],correct:2},
      ],
      grammarExamples:[
        '"I always wake up at seven."',
        '"I usually have breakfast at home."',
        '"We often walk to the gym."',
        '"I sometimes read a book."',
        '"I never drink coffee in the morning."',
      ],
      grammarRule:"FREQUENCY ADVERBS go BEFORE the main verb but AFTER the verb To Be. Order from most to least frequent: always (100%) → usually → often → sometimes → never (0%).",
      grammarTable:[["Adverb","Frequency","Position","Example"],["always","100%","before verb","I always eat breakfast."],["usually","~80%","before verb","I usually walk."],["often","~60%","before verb","We often cook."],["sometimes","~40%","before verb","They sometimes order food."],["never","0%","before verb","I never cook at the office."]],
      grammarWatch:"With To Be, frequency adverbs come AFTER: <em>\"I am always late\"</em> ✓ (not <em>\"I always am late\"</em>). With all other verbs: BEFORE.",
      grammarTip:"To ask about frequency: <strong>How often do you…?</strong> → <em>I usually… / I sometimes… / I never…</em>",
      talkQ:[
        "What does the narrator always do? What does he/she never do?",
        "Tell your partner about your morning routine using frequency adverbs.",
        "Ask: 'How often do you cook?' 'Do you ever go to the gym?' Use always/usually/sometimes/never in your answers.",
        "What do you never do in the morning? What do you always do at night?",
      ],
      talkTip:`Model: "I always wake up at six-thirty. I usually have mate for breakfast. I sometimes go for a walk before work. I never eat lunch at a restaurant — I always bring food from home."`,
      speakingChallenge:"Describe your week using all five frequency adverbs: always, usually, often, sometimes, never. Say one true thing for each one.",
    },
    cycle3: {
      reading:`<p>I like football. I watch it on TV every weekend. My team is Boca Juniors. I love them!</p>
<p>My brother likes football too. He plays it with his friends on Saturdays. I sometimes watch him. He invites me to the park and I go with him.</p>
<p>My parents don't like football. My mother prefers cooking. My father likes reading. They don't watch sport on TV. But they support us — they know football makes us happy.</p>
<p>My friend Diego loves music. He plays the guitar. He teaches us some songs. We sing them together. We love it!</p>`,
      vocab:[
        {word:"to support",trans:"apoyar",ex:'"My parents support me in everything I do."'},
        {word:"to prefer",trans:"preferir",ex:'"I prefer tea. I don\'t like coffee."'},
        {word:"to invite",trans:"invitar",ex:'"He invites me to the park every Saturday."'},
        {word:"to teach",trans:"enseñar",ex:'"She teaches us English every Monday."'},
        {word:"together",trans:"juntos",ex:'"We sing songs together at the party."'},
      ],
      quickCheck:[
        {statement:"The narrator's parents love football.",answer:false},
        {statement:"The narrator's brother plays football on Saturdays.",answer:true},
        {statement:"Diego teaches the narrator to play guitar.",answer:true},
      ],
      listeningTitle:"Hobbies and family",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What is the narrator's football team?",opts:["River Plate","San Lorenzo","Boca Juniors","Racing"],correct:2},
        {q:"When does the narrator's brother play football?",opts:["On Sundays","Every day","On Saturdays","On Fridays"],correct:2},
        {q:"What does the narrator's mother prefer?",opts:["Football","Reading","Cooking","Music"],correct:2},
        {q:"What instrument does Diego play?",opts:["Piano","Drums","Violin","Guitar"],correct:3},
      ],
      grammarExamples:[
        '"I like football. I watch it on TV."',
        '"He invites me to the park and I go with him."',
        '"They support us."',
        '"He teaches us some songs. We sing them together."',
      ],
      grammarRule:"OBJECT PRONOUNS replace a noun that receives the action: I→me, you→you, he→him, she→her, it→it, we→us, they→them. They come AFTER the verb.",
      grammarTable:[["Subject pronoun","Object pronoun","Example"],["I","me","He invites me."],["you","you","I see you."],["he","him","I watch him."],["she","her","I know her."],["it","it","I love it!"],["we","us","They support us."],["they","them","I love them!"]],
      grammarWatch:"Don't use subject pronouns where object pronouns are needed: <em>\"He invites I\"</em> ✗ → <strong>\"He invites me\"</strong> ✓. After prepositions, always use object pronouns: <em>with him / to us / for them</em>.",
      grammarTip:"Quick check: if the pronoun comes AFTER a verb or preposition, use the OBJECT form (me, him, her, us, them).",
      talkQ:[
        "Find all the object pronouns in the text. What noun does each one replace?",
        "Tell your partner about a person you know. Use object pronouns: 'My friend likes… I visit him/her…'",
        "Complete: 'My teacher helps ___. My friends invite ___. I like ___.' (Use object pronouns.)",
        "What do your parents/friends like? What do you do together with them?",
      ],
      talkTip:`Model: "My sister loves cooking. I visit her on Sundays. She always cooks for us — she makes pasta and we love it. My brother plays football. I sometimes watch him at the park. I cheer for him!"`,
      speakingChallenge:"Tell a story about your family or friends using at least five different object pronouns (me, him, her, us, them, it).",
    },
  },

  // ── 3: Unit 04 – Simple Present (He/She/It) — 3rd Person -s ──────────────
  {
    cycle2: {
      reading:`<p>My neighbour is a baker. He wakes up at four in the morning. He goes to his bakery at five. He makes bread and croissants. The bread smells wonderful!</p>
<p>His wife watches the shop. She opens it at seven. She sells the bread to the customers. She gives change and she always smiles. Everyone in the neighbourhood loves her.</p>
<p>Their daughter studies at school. She goes to school at eight. She does her homework in the afternoon. She watches TV after dinner. She never misses a class.</p>
<p>On Sundays, the family rests. The father reads the newspaper. The mother fixes things around the house. The daughter plays with the dog.</p>`,
      vocab:[
        {word:"baker",trans:"panadero",ex:'"He is a baker — he makes bread every day."'},
        {word:"bakery",trans:"panadería",ex:'"The bakery opens at six in the morning."'},
        {word:"to sell",trans:"vender",ex:'"She sells bread and croissants."'},
        {word:"change",trans:"vuelto, cambio",ex:'"She gives change to every customer."'},
        {word:"to miss",trans:"faltar a, perderse",ex:'"She never misses a class."'},
      ],
      quickCheck:[
        {statement:"The baker wakes up at six in the morning.",answer:false},
        {statement:"The baker's wife opens the shop at seven.",answer:true},
        {statement:"The daughter studies at university.",answer:false},
      ],
      listeningTitle:"The baker's family",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What time does the baker go to the bakery?",opts:["At four","At five","At six","At seven"],correct:1},
        {q:"What does the baker's wife do at the shop?",opts:["She makes bread","She cleans the shop","She sells bread and gives change","She goes home early"],correct:2},
        {q:"When does the daughter do her homework?",opts:["In the morning","At school","In the afternoon","After midnight"],correct:2},
        {q:"What does the father do on Sundays?",opts:["He goes to the bakery","He reads the newspaper","He fixes things","He plays with the dog"],correct:1},
      ],
      grammarExamples:[
        '"He goes to his bakery at five."',
        '"She opens it at seven."',
        '"She sells the bread."',
        '"She does her homework."',
        '"She watches TV after dinner."',
      ],
      grammarRule:"3rd person -s spelling rules: most verbs add -s (works, reads, plays). Verbs ending in -ch, -sh, -ss, -x, -o add -ES (watches, fixes, does, goes). Verbs ending in consonant + y change y→IES (studies, tries).",
      grammarTable:[["Rule","Verb","3rd person"],["Add -s","read, play, sell","reads, plays, sells"],["Add -es (-ch/-sh/-ss/-o)","watch, fix, do, go","watches, fixes, does, goes"],["y → ies","study, try","studies, tries"],["Irregular","have","has"]],
      grammarWatch:"<em>She studys</em> ✗ → <strong>She studies</strong> ✓. <em>He dos</em> ✗ → <strong>He does</strong> ✓. <em>She haves</em> ✗ → <strong>She has</strong> ✓.",
      grammarTip:"Two key irregular verbs: <strong>go → goes</strong> and <strong>have → has</strong>. All others follow the spelling rules.",
      talkQ:[
        "Find five 3rd person verbs in the text. What is the spelling rule for each?",
        "Describe a person in your family. Use 5 different verbs with the -s/es/-ies ending.",
        "What does your neighbour/friend/colleague do every day? Tell your partner.",
        "Ask: 'What does your best friend do in the morning?' Your partner answers with 3rd person.",
      ],
      talkTip:`Model: "My neighbour has a dog. She walks it every morning. She goes to the park near our building. The dog runs and plays. She watches it and reads her phone."`,
      speakingChallenge:"Describe a person's full day using only 3rd person singular (he/she). Include 6 verbs, and make sure at least two use -es and one uses -ies.",
    },
    cycle3: {
      reading:`<p>Pedro usually wakes up late. He never sets an alarm. He always misses breakfast.</p>
<p>At work, Pedro often arrives five minutes late. His boss sometimes waits for him. His boss never says anything — she is very patient.</p>
<p>But Pedro is a very good worker. He always finishes his projects on time. He never makes mistakes. He usually works very hard.</p>
<p>After work, Pedro always goes to the gym. He often runs for thirty minutes. He sometimes swims. He never sits on the sofa all evening — he is very active.</p>
<p>Pedro has good habits and bad habits. But everyone does!</p>`,
      vocab:[
        {word:"alarm",trans:"alarma, despertador",ex:'"He never sets an alarm. He wakes up naturally."'},
        {word:"to arrive",trans:"llegar",ex:'"She always arrives on time."'},
        {word:"patient",trans:"paciente",ex:'"His boss is very patient with him."'},
        {word:"on time",trans:"a tiempo",ex:'"He always finishes his projects on time."'},
        {word:"active",trans:"activo",ex:'"He is very active — he goes to the gym every day."'},
      ],
      quickCheck:[
        {statement:"Pedro always sets an alarm.",answer:false},
        {statement:"Pedro's boss is impatient with him.",answer:false},
        {statement:"Pedro goes to the gym after work.",answer:true},
      ],
      listeningTitle:"Pedro's habits",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What does Pedro never do in the morning?",opts:["Shower","Eat breakfast","Read","Sleep late"],correct:1},
        {q:"How late does Pedro often arrive at work?",opts:["Ten minutes","Twenty minutes","Five minutes","One hour"],correct:2},
        {q:"What does Pedro always do with his projects?",opts:["He leaves them unfinished","He always finishes them on time","He gives them to his colleague","He is always late with them"],correct:1},
        {q:"What does Pedro never do in the evening?",opts:["Go to the gym","Run","Swim","Sit on the sofa all evening"],correct:3},
      ],
      grammarExamples:[
        '"He never sets an alarm."',
        '"He often arrives five minutes late."',
        '"She never says anything."',
        '"He always finishes his projects on time."',
        '"He sometimes swims."',
      ],
      grammarRule:"FREQUENCY ADVERBS with 3rd person: they go BEFORE the main verb. He always finishes. She never says. He often arrives. Remember: the verb still needs -s/es/ies in 3rd person.",
      grammarTable:[["Adverb","Example — I","Example — He/She"],["always","I always finish.","He always finishes."],["usually","I usually arrive.","She usually arrives."],["often","I often run.","He often runs."],["sometimes","I sometimes swim.","She sometimes swims."],["never","I never miss.","He never misses."]],
      grammarWatch:"Don't forget the -s on the verb: <em>\"He always arrive late\"</em> ✗ → <strong>\"He always arrives late\"</strong> ✓. The adverb doesn't remove the 3rd person -s.",
      grammarTip:"Build sentences with: <strong>[name] + [adverb] + [verb+s/es/ies]</strong>. Example: Pedro always finishes. She never misses. He often studies.",
      talkQ:[
        "Describe Pedro's good habits and bad habits. Use frequency adverbs.",
        "Tell your partner about a friend or family member's habits. Use adverbs + 3rd person verbs.",
        "What is the opposite of Pedro? Describe 'perfect Pedro' who has no bad habits.",
        "Do you have a bad habit? Describe it using 1st person: 'I sometimes / I never / I always…'",
      ],
      talkTip:`Model: "My brother always wakes up late. He usually skips breakfast. He sometimes arrives late to his meetings. But he never forgets his phone! He usually finishes work on time."`,
      speakingChallenge:"Describe a real or imaginary person's daily habits. Use at least four different frequency adverbs and four different 3rd person verbs (with correct spelling).",
    },
  },

  // ── 4: Unit 05 – Simple Present — Questions and Negatives ────────────────
  {
    cycle2: {
      reading:`<p>An interview for a new job — at a small restaurant.</p>
<p>Manager: "Good morning! Please sit down. What is your name?"<br/>
Applicant: "My name is Rodrigo."<br/>
Manager: "Where do you live, Rodrigo?"<br/>
Rodrigo: "I live in Almagro, near the restaurant."<br/>
Manager: "What do you do at the moment?"<br/>
Rodrigo: "I work at a hotel. I don't work in a restaurant yet."<br/>
Manager: "What time do you usually start work?"<br/>
Rodrigo: "I usually start at eight. I don't like to be late."<br/>
Manager: "Why do you want this job?"<br/>
Rodrigo: "I love food. I want to work with people. And this restaurant is fantastic!"<br/>
Manager: "Who do you live with?"<br/>
Rodrigo: "I live with my flatmate, Pedro."<br/>
Manager: "When can you start?"<br/>
Rodrigo: "I can start next Monday!"</p>`,
      vocab:[
        {word:"applicant",trans:"postulante, candidato",ex:'"The applicant has five years of experience."'},
        {word:"at the moment",trans:"en este momento, actualmente",ex:'"What do you do at the moment?"'},
        {word:"yet",trans:"todavía (en negativas)",ex:'"I don\'t work here yet — I start on Monday."'},
        {word:"flatmate",trans:"compañero/a de departamento",ex:'"My flatmate and I share the rent."'},
        {word:"fantastic",trans:"fantástico",ex:'"This restaurant is fantastic!"'},
      ],
      quickCheck:[
        {statement:"Rodrigo lives far from the restaurant.",answer:false},
        {statement:"Rodrigo currently works at a hotel.",answer:true},
        {statement:"Rodrigo usually arrives late to work.",answer:false},
      ],
      listeningTitle:"The job interview",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"Where does Rodrigo live?",opts:["In Palermo","Near the restaurant, in Almagro","Far from the restaurant","With his family in Córdoba"],correct:1},
        {q:"Where does Rodrigo work now?",opts:["At a restaurant","At a café","At a hotel","At a school"],correct:2},
        {q:"What time does Rodrigo usually start work?",opts:["At seven","At eight","At nine","At ten"],correct:1},
        {q:"When can Rodrigo start the new job?",opts:["Immediately","Next Friday","Next Monday","Next month"],correct:2},
      ],
      grammarExamples:[
        '"Where do you live?"',
        '"What do you do at the moment?"',
        '"What time do you usually start?"',
        '"Why do you want this job?"',
        '"Who do you live with?"',
      ],
      grammarRule:"WH- QUESTIONS with Simple Present: Question word + DO/DOES + subject + verb. What do you eat? Where does she work? When do they start? Who do you live with? Why does he study?",
      grammarTable:[["Question word","Use","Example"],["What","things / actions","What do you do?"],["Where","places","Where do you live?"],["When","time","When do you start?"],["Why","reasons","Why do you want this?"],["Who","people","Who do you live with?"],["How much/many","quantity","How much do you earn?"]],
      grammarWatch:"Don't forget DO/DOES in questions: <em>\"Where you live?\"</em> ✗ → <strong>\"Where do you live?\"</strong> ✓. And DOES drops the -s from the main verb: <em>\"Where does she works?\"</em> ✗ → <strong>\"Where does she work?\"</strong> ✓.",
      grammarTip:"Word order for WH- questions: <strong>WH- word + do/does + subject + base verb + ?</strong> → What do you eat for breakfast?",
      talkQ:[
        "Find five WH- questions in the interview. What question word starts each one?",
        "Practise in pairs: one person is the manager, one is the applicant. Interview your partner for a job.",
        "Write three WH- questions to ask a new classmate: What? Where? When?",
        "Tell your partner: What do you do? Where do you live? Why do you study English?",
      ],
      talkTip:`Model: "What do you do? I'm a teacher. Where do you work? I work at a school in Palermo. When do you start? At eight. Why do you like your job? Because I love helping people."`,
      speakingChallenge:"Interview your partner about their daily life using five different WH- question words (what, where, when, why, who). Then swap.",
    },
    cycle3: {
      reading:`<p>A: "Do you like your new apartment?"<br/>
B: "Yes, I do! It is very sunny."<br/>
A: "Does it have a balcony?"<br/>
B: "No, it doesn't. But it has a big kitchen."<br/>
A: "Do your neighbours make noise?"<br/>
B: "No, they don't. They are very quiet."<br/>
A: "Does the building have a lift?"<br/>
B: "Yes, it does! That's very important for me."<br/>
A: "Do you live alone?"<br/>
B: "No, I don't. I live with my cat. His name is Mochi."<br/>
A: "Does Mochi like the new apartment?"<br/>
B: "Yes, he does! He sits in the sun all day. He is very happy."</p>`,
      vocab:[
        {word:"apartment",trans:"departamento",ex:'"My apartment is on the fourth floor."'},
        {word:"sunny",trans:"soleado",ex:'"The new apartment is very sunny."'},
        {word:"balcony",trans:"balcón",ex:'"I love having breakfast on the balcony."'},
        {word:"lift",trans:"ascensor",ex:'"Does the building have a lift? Yes, it does."'},
        {word:"noise",trans:"ruido",ex:'"My neighbours don\'t make noise. They are quiet."'},
      ],
      quickCheck:[
        {statement:"The new apartment has a balcony.",answer:false},
        {statement:"The building has a lift.",answer:true},
        {statement:"Person B lives alone.",answer:false},
      ],
      listeningTitle:"The new apartment",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"Does the apartment have a balcony?",opts:["Yes, it does.","No, but it has a big kitchen.","Yes, a small one.","The text doesn't say."],correct:1},
        {q:"Are the neighbours noisy?",opts:["Yes, very noisy.","Sometimes noisy.","No, they are quiet.","The text doesn't say."],correct:2},
        {q:"Does the building have a lift?",opts:["No, it doesn't.","Yes, it does.","The text doesn't say.","Only on some floors."],correct:1},
        {q:"Who does Person B live with?",opts:["A flatmate","Their family","Nobody","A cat called Mochi"],correct:3},
      ],
      grammarExamples:[
        '"Do you like your new apartment? Yes, I do!"',
        '"Does it have a balcony? No, it doesn\'t."',
        '"Do your neighbours make noise? No, they don\'t."',
        '"Does Mochi like the apartment? Yes, he does!"',
      ],
      grammarRule:"SHORT ANSWERS with Simple Present: Do you like it? → Yes, I DO. / No, I DON'T. Does it have a lift? → Yes, it DOES. / No, it DOESN'T. Never repeat the main verb in a short answer.",
      grammarTable:[["Question","Yes","No"],["Do you like it?","Yes, I do.","No, I don't."],["Do they make noise?","Yes, they do.","No, they don't."],["Does it have a balcony?","Yes, it does.","No, it doesn't."],["Does Mochi like it?","Yes, he does.","No, he doesn't."]],
      grammarWatch:"Never say <em>\"Yes, I like.\"</em> or <em>\"No, it doesn't have.\"</em> Short answers use only DO/DOES/DON'T/DOESN'T: <strong>\"Yes, I do.\"</strong> / <strong>\"No, it doesn't.\"</strong>",
      grammarTip:"Short answers are polite and natural. After YES or NO, always add the auxiliary: <strong>Yes + , + I/he/she/it/we/they + do/does.</strong>",
      talkQ:[
        "Find all the short answers in the text. Which use DO and which use DOES?",
        "Ask your partner 5 yes/no questions about their home. They answer with short answers: Yes, I do / No, it doesn't…",
        "Do you have a pet? Does it do funny things? Tell your partner using short answers.",
        "Ask: 'Does your neighbourhood have a park? Do you like your neighbourhood?' Answer in short.",
      ],
      talkTip:`Model: "Do I like my apartment? Yes, I do! Does it have a balcony? No, it doesn't. But it has a great view. Does my cat like it? Yes, he does — he sleeps in the sun all day!"`,
      speakingChallenge:"Ask your partner 8 yes/no questions about their life (home, family, habits, likes). They must use short answers only: Yes, I do / No, she doesn't / Yes, it does…",
    },
  },

  // ── 5: Unit 06 – Prepositions of Place + There is/There are ──────────────
  {
    cycle2: {
      reading:`<p>Excuse me — is there a pharmacy near here?</p>
<p>Yes! There is a pharmacy on Corrientes Street, next to the bank. Is there a cash machine near the pharmacy? Yes, there is one inside the bank.</p>
<p>Are there any restaurants near here? Yes, there are many restaurants on this street. There is a pizza place on the corner, and there are two or three small cafés near the square.</p>
<p>Is there a bus stop near here? No, there isn't one on this street. But there are two stops on the next street, near the school.</p>
<p>Is there a park nearby? Yes, there is a small park behind the supermarket. There are benches and trees. It is very nice!</p>`,
      vocab:[
        {word:"pharmacy",trans:"farmacia",ex:'"Is there a pharmacy near here?"'},
        {word:"cash machine",trans:"cajero automático",ex:'"There is a cash machine inside the bank."'},
        {word:"bus stop",trans:"parada de colectivo",ex:'"There are two bus stops on the next street."'},
        {word:"square",trans:"plaza",ex:'"There are cafés near the square."'},
        {word:"bench",trans:"banco (de plaza)",ex:'"There are benches and trees in the park."'},
      ],
      quickCheck:[
        {statement:"There is a pharmacy on Corrientes Street.",answer:true},
        {statement:"There is a bus stop on the same street.",answer:false},
        {statement:"There are benches in the park behind the supermarket.",answer:true},
      ],
      listeningTitle:"Is there a pharmacy near here?",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"Where is the pharmacy?",opts:["Behind the bank","On Corrientes Street, next to the bank","Inside the supermarket","Near the school"],correct:1},
        {q:"Where is the cash machine?",opts:["On the street","Near the pharmacy","Inside the bank","In the park"],correct:2},
        {q:"Are there bus stops nearby?",opts:["No, there aren't any.","Yes, one on this street.","Yes, two on the next street.","No, but there's a taxi."],correct:2},
        {q:"Where is the park?",opts:["In front of the bank","Behind the supermarket","Next to the bus stop","Near the school"],correct:1},
      ],
      grammarExamples:[
        '"Is there a pharmacy near here? Yes, there is."',
        '"Are there any restaurants? Yes, there are many."',
        '"Is there a bus stop? No, there isn\'t one on this street."',
        '"There are two stops on the next street."',
      ],
      grammarRule:"THERE IS / THERE ARE — questions and negatives: Is there a bank? → Yes, there is. / No, there isn't. Are there any shops? → Yes, there are. / No, there aren't. Use IS for singular and ARE for plural.",
      grammarTable:[["","Positive","Negative","Question"],["Singular","There is a café.","There isn't a café.","Is there a café?"],["Plural","There are shops.","There aren't any shops.","Are there any shops?"]],
      grammarWatch:"In questions and negatives, use <strong>any</strong>: <em>Are there any restaurants?</em> / <em>There aren't any bus stops.</em> In positive sentences, use <strong>some</strong>: <em>There are some restaurants.</em>",
      grammarTip:"To ask for directions or location: <strong>Is there a _____ near here?</strong> / <strong>Are there any _____ on this street?</strong>",
      talkQ:[
        "Find three IS THERE questions and three ARE THERE questions in the text.",
        "Describe your neighbourhood: Is there a park? Are there any restaurants? Use positive and negative answers.",
        "Ask your partner: 'In your street, is there a café? Are there any trees?' Answer truthfully.",
        "Practise asking for directions. Ask about a pharmacy, a bank, a bus stop, and a supermarket.",
      ],
      talkTip:`Model: "In my street, there is a small café and a supermarket. There aren't any restaurants. Is there a park? Yes, there is — it's two blocks away. Are there any bus stops? Yes, there are three on the main road."`,
      speakingChallenge:"Describe your neighbourhood from memory. Use IS THERE / ARE THERE in at least three questions and answer them yourself. Include positive and negative sentences.",
    },
    cycle3: {
      reading:`<p>My flat is small but nice. In the living room, there is a sofa and a coffee table. There are some plants on the shelf. There aren't any armchairs — there isn't enough space.</p>
<p>In the kitchen, there is a fridge and a small oven. There are some cups in the cupboard. There isn't a dishwasher — I wash the dishes by hand.</p>
<p>In the bedroom, there is one bed, a wardrobe, and a small desk. There are some books on the desk. There aren't any pictures on the walls — I prefer white walls.</p>
<p>Is there a garden? No, there isn't. But there is a small balcony. There are two chairs on it. It is my favourite place in the flat.</p>`,
      vocab:[
        {word:"sofa",trans:"sofá",ex:'"There is a comfortable sofa in the living room."'},
        {word:"shelf",trans:"estante",ex:'"There are some plants on the shelf."'},
        {word:"cupboard",trans:"alacena, placard",ex:'"The cups are in the cupboard."'},
        {word:"wardrobe",trans:"ropero",ex:'"My wardrobe is full of clothes."'},
        {word:"by hand",trans:"a mano",ex:'"I wash the dishes by hand — I don\'t have a dishwasher."'},
      ],
      quickCheck:[
        {statement:"There are armchairs in the living room.",answer:false},
        {statement:"There is a dishwasher in the kitchen.",answer:false},
        {statement:"There are two chairs on the balcony.",answer:true},
      ],
      listeningTitle:"My small flat",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What is in the living room?",opts:["A sofa and armchairs","A sofa and a coffee table","Only a sofa","A TV and a sofa"],correct:1},
        {q:"Why isn't there a dishwasher?",opts:["It's broken","It's in another room","The flat doesn't have one","The narrator doesn't like it"],correct:2},
        {q:"What is in the bedroom?",opts:["Two beds and a wardrobe","A bed, wardrobe, and small desk","A bed and armchair","Only a bed"],correct:1},
        {q:"What is the narrator's favourite place?",opts:["The kitchen","The living room","The bedroom","The balcony"],correct:3},
      ],
      grammarExamples:[
        '"There are some plants on the shelf."',
        '"There aren\'t any armchairs — there isn\'t enough space."',
        '"There are some cups in the cupboard."',
        '"There isn\'t a dishwasher."',
      ],
      grammarRule:"SOME is used in positive sentences with plural nouns: There are some books. ANY is used in negatives and questions: There aren't any armchairs. Is there any milk? ENOUGH shows quantity is sufficient (or not): There isn't enough space.",
      grammarTable:[["","Countable plural","Uncountable"],["Positive","some books","some milk"],["Negative","any books / not enough books","any milk / not enough milk"],["Question","any books?","any milk?"]],
      grammarWatch:"<em>There are some books</em> ✓ but <em>There are any books</em> ✗. In a question, use ANY: <em>Are there any books?</em> In a positive, use SOME: <em>Yes, there are some books.</em>",
      grammarTip:"ENOUGH = the right amount. NOT ENOUGH = too little. <em>There's enough space for a sofa.</em> / <em>There isn't enough space for an armchair.</em>",
      talkQ:[
        "Describe the rooms in the story using SOME and ANY. What IS there? What ISN'T there?",
        "Describe your bedroom or kitchen. Use: 'There are some… / There aren't any… / There isn't enough…'",
        "Ask your partner: 'Is there enough space in your flat? Are there any plants?'",
        "What would your ideal flat have? There would be some… / There wouldn't be any…",
      ],
      talkTip:`Model: "In my room, there are some books on my desk. There aren't any pictures on the walls. There is some space under the bed. There isn't enough light — I need a lamp!"`,
      speakingChallenge:"Describe three rooms of a real or dream home. In each room, use SOME (positive), ANY (negative), and ENOUGH at least once.",
    },
  },

  // ── 6: Unit 07 – Telling the Time + At / On / In ─────────────────────────
  {
    cycle2: {
      reading:`<p>My name is Luciana. I am a nurse. Here is my weekly schedule.</p>
<p>In the morning, I start work at seven o'clock. I have a short break at ten thirty. I eat lunch at one o'clock in the afternoon.</p>
<p>I finish work at three in the afternoon on Monday, Wednesday, and Friday. On Tuesday and Thursday, I finish at six in the evening.</p>
<p>In the evening, I usually have dinner at eight. I sometimes go for a walk at night, around nine.</p>
<p>On the weekend, I sleep late. I wake up at ten on Saturday. On Sunday, I sometimes visit my parents in the morning. I meet them at eleven o'clock. We have lunch together at two in the afternoon.</p>`,
      vocab:[
        {word:"schedule",trans:"horario, agenda",ex:'"My work schedule is from eight to five."'},
        {word:"break",trans:"descanso, pausa",ex:'"I have a break at ten thirty in the morning."'},
        {word:"to finish",trans:"terminar",ex:'"I finish work at three on Fridays."'},
        {word:"to visit",trans:"visitar",ex:'"I visit my parents every Sunday."'},
        {word:"around",trans:"alrededor de, a eso de",ex:'"I go for a walk around nine at night."'},
      ],
      quickCheck:[
        {statement:"Luciana starts work at eight o'clock.",answer:false},
        {statement:"On Tuesdays, Luciana finishes work at six in the evening.",answer:true},
        {statement:"Luciana visits her parents every Saturday.",answer:false},
      ],
      listeningTitle:"Luciana's schedule",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What time does Luciana start work?",opts:["At six","At seven","At eight","At nine"],correct:1},
        {q:"What time does she finish on Fridays?",opts:["At three","At four","At five","At six"],correct:0},
        {q:"What time does Luciana have dinner?",opts:["At seven","At eight","At nine","At six"],correct:1},
        {q:"What time does she meet her parents on Sundays?",opts:["At ten","At eleven","At twelve","At two"],correct:1},
      ],
      grammarExamples:[
        '"I start work at seven o\'clock."',
        '"I finish work at three in the afternoon."',
        '"On Tuesday and Thursday, I finish at six."',
        '"On the weekend, I sleep late."',
        '"In the morning, I have a break at ten thirty."',
      ],
      grammarRule:"Prepositions of time: AT for specific times (at seven, at noon, at midnight). ON for days and dates (on Monday, on the weekend, on 3 March). IN for parts of the day, months, and years (in the morning, in April, in 2024).",
      grammarTable:[["Preposition","Use","Examples"],["AT","specific time","at seven, at noon, at night"],["ON","day / date","on Monday, on the weekend, on 3 March"],["IN","part of day / month / year","in the morning, in April, in 2024"]],
      grammarWatch:"<em>\"In Monday\"</em> ✗ / <em>\"On the morning\"</em> ✗ / <em>\"At Friday\"</em> ✗. Remember: <strong>ON Monday, IN the morning, AT seven.</strong>",
      grammarTip:"Night is special: AT night (not 'in the night'). Exception: IN the middle of the night (specific situation).",
      talkQ:[
        "Find five examples of AT, ON, and IN in the text. Why is each preposition used?",
        "Describe your daily schedule using at, on, and in: 'I start at… / On Mondays I… / In the evening I…'",
        "Ask your partner: 'What time do you start work/school? Do you work on the weekend?'",
        "What do you do in the morning / in the afternoon / at night? Tell your partner.",
      ],
      talkTip:`Model: "In the morning I start work at eight-thirty. On Mondays I have a meeting at nine. I eat lunch at one in the afternoon. On Fridays I finish early — at five. In the evening I usually cook at home."`,
      speakingChallenge:"Tell your partner your real weekly schedule. Use AT (times), ON (days), and IN (parts of day) at least twice each.",
    },
    cycle3: {
      reading:`<p>My birthday is on the third of July. This year it is on a Wednesday. I like birthdays!</p>
<p>My sister's birthday is on the twenty-first of March. My brother's birthday is on the first of January — New Year's Day! He always says it is the best day to have a birthday.</p>
<p>In Argentina, we celebrate Independence Day on the ninth of July. It is a national holiday. There are parades in the streets. On the twenty-fifth of May, we celebrate the first National Government.</p>
<p>My favourite month is December because we celebrate Christmas on the twenty-fifth. There are no classes in December. School ends in the first week of December.</p>`,
      vocab:[
        {word:"birthday",trans:"cumpleaños",ex:'"My birthday is on the third of July."'},
        {word:"parade",trans:"desfile",ex:'"There are parades in the streets on Independence Day."'},
        {word:"national holiday",trans:"feriado nacional",ex:'"The ninth of July is a national holiday in Argentina."'},
        {word:"to celebrate",trans:"celebrar",ex:'"We celebrate Christmas on the twenty-fifth of December."'},
        {word:"to end",trans:"terminar",ex:'"School ends in the first week of December."'},
      ],
      quickCheck:[
        {statement:"The narrator's birthday is on the third of June.",answer:false},
        {statement:"Argentina celebrates Independence Day on the ninth of July.",answer:true},
        {statement:"The narrator's favourite month is July.",answer:false},
      ],
      listeningTitle:"Birthdays and holidays",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"When is the narrator's birthday?",opts:["21 March","9 July","3 July","25 December"],correct:2},
        {q:"When is the narrator's brother's birthday?",opts:["25 December","1 January","21 March","9 July"],correct:1},
        {q:"When is Argentina's Independence Day?",opts:["25 May","3 July","9 July","25 December"],correct:2},
        {q:"Why is December the narrator's favourite month?",opts:["It is summer","School ends","Christmas is on the 25th","All of the above"],correct:3},
      ],
      grammarExamples:[
        '"My birthday is on the third of July."',
        '"This year it is on a Wednesday."',
        '"We celebrate Independence Day on the ninth of July."',
        '"School ends in the first week of December."',
      ],
      grammarRule:"ORDINAL NUMBERS for dates: 1st (first), 2nd (second), 3rd (third), 4th (fourth)... 20th (twentieth), 21st (twenty-first). Say: ON the THIRD of JULY. Write: 3rd July or July 3rd.",
      grammarTable:[["Number","Ordinal","Abbreviation"],["1","first","1st"],["2","second","2nd"],["3","third","3rd"],["4–9","fourth, fifth…ninth","4th–9th"],["20","twentieth","20th"],["21","twenty-first","21st"]],
      grammarWatch:"Irregular: 1st (NOT oneth), 2nd (NOT twoth), 3rd (NOT threeth). All others are regular: + th. Special: fifth (not fiveth), eighth (one t), ninth (no e), twelfth (not twelveth).",
      grammarTip:"To say a date aloud: <strong>ON the [ordinal] OF [month]</strong>. Example: on the twenty-fifth of December. To ask: <strong>When is your birthday?</strong>",
      talkQ:[
        "When is your birthday? Say it in full: 'My birthday is on the _____ of _____.'",
        "Name three national holidays in your country. When are they?",
        "What is your favourite month? Why? Tell your partner using ordinal numbers and prepositions.",
        "Ask your partner: 'When is your birthday? What day is it on this year? What do you do on your birthday?'",
      ],
      talkTip:`Model: "My birthday is on the fourteenth of August. This year it is on a Thursday. My sister's birthday is on the second of November. My favourite holiday is the ninth of July — we always have a big family lunch!"`,
      speakingChallenge:"Tell your partner about five important dates in your life using ordinal numbers: a birthday, a holiday, a special memory, the date you started a job or course, and today's date.",
    },
  },

  // ── 7: Unit 08 – Can — Ability and Permission ─────────────────────────────
  {
    cycle2: {
      reading:`<p>My name is Tomás. I am twelve years old. Here are some things I can and cannot do.</p>
<p>I can read and write in English — a little! I can play football very well. I can swim but I can't dive — the pool is too deep for me.</p>
<p>I can cook pasta. I can't cook meat — it is too difficult. My grandmother can cook everything. She is amazing!</p>
<p>I can ride a bike. I can't drive a car — I am too young. My father can drive. He takes me to school every morning because I can't take the bus alone.</p>
<p>I can't speak French or Chinese. But I can say "hello" and "thank you" in five languages. That is a start!</p>`,
      vocab:[
        {word:"to dive",trans:"tirarse, zambullirse",ex:'"I can swim but I can\'t dive."'},
        {word:"amazing",trans:"increíble, asombroso",ex:'"My grandmother is an amazing cook."'},
        {word:"too (adjective)",trans:"demasiado (+ adjetivo)",ex:'"I can\'t drive. I am too young."'},
        {word:"alone",trans:"solo/a",ex:'"I can\'t take the bus alone."'},
        {word:"a start",trans:"un comienzo",ex:'"I know five words. That is a start!"'},
      ],
      quickCheck:[
        {statement:"Tomás can dive in the pool.",answer:false},
        {statement:"Tomás can ride a bike.",answer:true},
        {statement:"Tomás can speak French.",answer:false},
      ],
      listeningTitle:"What Tomás can and can't do",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"Can Tomás dive in the pool?",opts:["Yes, very well.","Yes, a little.","No, the pool is too deep.","No, he doesn't like it."],correct:2},
        {q:"What can Tomás cook?",opts:["Meat","Pasta","Everything","Nothing"],correct:1},
        {q:"Why can't Tomás drive?",opts:["He doesn't like it.","He is too young.","He is scared.","He doesn't have a car."],correct:1},
        {q:"How many languages can Tomás say hello in?",opts:["Two","Three","Four","Five"],correct:3},
      ],
      grammarExamples:[
        '"I can play football very well."',
        '"I can\'t dive — the pool is too deep."',
        '"My grandmother can cook everything."',
        '"I can\'t drive a car — I am too young."',
      ],
      grammarRule:"CAN'T / CANNOT = inability or impossibility. CAN'T is used in speaking; CANNOT is more formal. The structure is the same as CAN: subject + can't + base verb (no -s, no -ing).",
      grammarTable:[["","Structure","Example"],["Positive","can + base verb","I can swim."],["Negative","can't / cannot + base verb","I can't dive."],["Question","Can + subject + base verb?","Can you cook?"],["Short answer","Yes, I can. / No, I can't.","Can you swim? No, I can't."]],
      grammarWatch:"<em>\"I can't to swim\"</em> ✗ → <strong>\"I can't swim\"</strong> ✓. No TO after CAN/CAN'T. Also: no -s in 3rd person: <em>\"She cans\"</em> ✗ → <strong>\"She can\"</strong> ✓.",
      grammarTip:"TOO + adjective = problem. TOO YOUNG = not old enough. TOO DIFFICULT = more difficult than you can manage. Use it to explain why you CAN'T do something.",
      talkQ:[
        "What can Tomás do? What can't he do? List three of each.",
        "What can you do well? What can't you do yet? Tell your partner.",
        "Ask: 'Can you cook? Can you drive? Can you play an instrument?' Answer with Yes, I can / No, I can't.",
        "What is something you can't do yet but want to learn?",
      ],
      talkTip:`Model: "I can speak Spanish and English. I can't speak French — it's too difficult for me. I can cook a few things: pasta and salad. I can't cook meat. Can you cook? What can you make?"`,
      speakingChallenge:"Tell your partner six true things about yourself: three things you CAN do and three things you CAN'T do. Explain why with TOO + adjective for at least two.",
    },
    cycle3: {
      reading:`<p>Signs and situations — what can you do here?</p>
<p>In a library: "Can I use my phone here?" — "You can read and study here, but you can't make calls. You can use your phone on silent."</p>
<p>In a park: "Can we have a picnic here?" — "Yes, you can! You can sit on the grass. But you can't have a barbecue — there is a sign."</p>
<p>In a cinema: "Can I eat here?" — "Yes, you can eat popcorn. But you can't bring hot food. And you can't use your phone during the film."</p>
<p>In a café: "Can I sit here with my dog?" — "Of course! Dogs can come in. But your dog can't sit on the chair — only on the floor, please."</p>`,
      vocab:[
        {word:"silent",trans:"silencio / modo silencio",ex:'"Please put your phone on silent."'},
        {word:"picnic",trans:"picnic",ex:'"Can we have a picnic in the park?"'},
        {word:"barbecue",trans:"parrillada, asado",ex:'"You can\'t have a barbecue here — there is a sign."'},
        {word:"popcorn",trans:"pochoclos, palomitas",ex:'"You can eat popcorn at the cinema."'},
        {word:"sign",trans:"cartel, letrero",ex:'"There is a sign: no barbecues."'},
      ],
      quickCheck:[
        {statement:"You can make phone calls in the library.",answer:false},
        {statement:"You can sit on the grass in the park.",answer:true},
        {statement:"Dogs can sit on the chairs in the café.",answer:false},
      ],
      listeningTitle:"Can I do this here?",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"Can you use your phone in the library?",opts:["No, not at all.","Yes, on silent.","Yes, freely.","Only to take photos."],correct:1},
        {q:"Can you have a barbecue in the park?",opts:["Yes, of course.","Only on Sundays.","No, there is a sign.","Yes, but only small ones."],correct:2},
        {q:"What can you eat at the cinema?",opts:["Hot food","Popcorn","Sandwiches","Nothing"],correct:1},
        {q:"Where can the dog sit in the café?",opts:["On any chair","On the owner's lap","Only on the floor","Outside the café"],correct:2},
      ],
      grammarExamples:[
        '"Can I use my phone here?"',
        '"You can read here, but you can\'t make calls."',
        '"Can we have a picnic here? Yes, you can!"',
        '"Dogs can come in. But your dog can\'t sit on the chair."',
      ],
      grammarRule:"CAN for REQUESTS and PERMISSION: Can I…? = Is it okay if I…? Can we…? = Is it okay if we…? The answer is: Yes, you can. / No, you can't. / Of course! / Sorry, you can't.",
      grammarTable:[["Request","Permission","Refusal"],["Can I sit here?","Yes, of course!","Sorry, this seat is taken."],["Can we eat here?","Yes, you can.","No, you can't eat here."],["Can I bring my dog?","Of course! Dogs are welcome.","Sorry, no dogs allowed."]],
      grammarWatch:"CAN for requests is informal and common. COULD I…? is more polite. Both are correct: <em>\"Can I open the window?\"</em> ✓ / <em>\"Could I open the window?\"</em> ✓ (more polite).",
      grammarTip:"In a public place, ask: <strong>Can I + base verb?</strong> In a shop or restaurant, it's polite to ask before doing something. 'Can I sit here?' 'Can I see the menu?'",
      talkQ:[
        "Find all the CAN/CAN'T uses in the text. Which ones are about ability and which about permission?",
        "Practise asking for permission: Can I open the window? Can we take a photo? Can I use your pen?",
        "What are the rules in your English class? What can students do? What can't they do?",
        "Role-play: one person is a manager, the other is a customer. Ask three Can I? questions.",
      ],
      talkTip:`Model: "Can I sit here? Of course! Can I use my laptop? Yes, you can. Can I eat my lunch at this table? Sorry, you can't — we only serve food from the café."`,
      speakingChallenge:"Create the rules for a new place (your own café, gym, or school). Tell your partner: 'You can… / You can't…' Use at least six rules. Your partner asks: 'Can I…?' questions.",
    },
  },

  // ── 8: Unit 09 – Comparative Adjectives ──────────────────────────────────
  {
    cycle2: {
      reading:`<p>My city, Córdoba, is a beautiful city. But Buenos Aires is bigger than Córdoba. It has more people. The buildings are taller and the streets are wider.</p>
<p>I think Córdoba is quieter than Buenos Aires. It is less stressful. The traffic is not as bad. Life is more relaxed.</p>
<p>But Buenos Aires has the biggest football stadium in Argentina — the Monumental. It is more famous than any stadium in Córdoba. The concerts there are more spectacular.</p>
<p>Which city is better for a young person? I think Buenos Aires is more exciting. But Córdoba is cheaper and more comfortable for students. It depends on what you want!</p>`,
      vocab:[
        {word:"stressful",trans:"estresante",ex:'"Big cities are often more stressful than small towns."'},
        {word:"relaxed",trans:"relajado",ex:'"Life in the countryside is more relaxed."'},
        {word:"stadium",trans:"estadio",ex:'"The Monumental is the biggest stadium in Argentina."'},
        {word:"spectacular",trans:"espectacular",ex:'"The concerts are more spectacular in big cities."'},
        {word:"it depends on",trans:"depende de",ex:'"Which is better? It depends on what you want."'},
      ],
      quickCheck:[
        {statement:"Córdoba is bigger than Buenos Aires.",answer:false},
        {statement:"The writer thinks Córdoba is quieter than Buenos Aires.",answer:true},
        {statement:"The Monumental is the biggest stadium in South America.",answer:false},
      ],
      listeningTitle:"Córdoba vs Buenos Aires",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"Which city is bigger?",opts:["Córdoba","Buenos Aires","They are the same size","The text doesn't say"],correct:1},
        {q:"What is the Monumental?",opts:["A museum","A park","The biggest football stadium in Argentina","A famous restaurant"],correct:2},
        {q:"Which city does the writer say is cheaper?",opts:["Buenos Aires","Córdoba","They are the same","Rosario"],correct:1},
        {q:"Which city is more exciting, according to the writer?",opts:["Córdoba","Buenos Aires","They are equally exciting","Neither one"],correct:1},
      ],
      grammarExamples:[
        '"Buenos Aires is bigger than Córdoba."',
        '"The buildings are taller and the streets are wider."',
        '"Córdoba is quieter than Buenos Aires."',
        '"Buenos Aires is more exciting."',
        '"Córdoba is cheaper and more comfortable for students."',
      ],
      grammarRule:"SUPERLATIVE adjectives — the biggest, the most beautiful, the best — describe the TOP or BOTTOM of a group of three or more. Short adjectives: THE + adj + EST. Long adjectives (2+ syllables): THE MOST + adj.",
      grammarTable:[["Type","Comparative","Superlative"],["Short (1 syllable)","bigger than","the biggest"],["Short ending -y","quieter than","the quietest"],["Long (2+ syllables)","more exciting","the most exciting"],["Irregular","better / worse","the best / the worst"]],
      grammarWatch:"<em>\"The more big\"</em> ✗ → <strong>\"The biggest\"</strong> ✓. <em>\"The most big\"</em> ✗ → <strong>\"The biggest\"</strong> ✓. Double the consonant for short vowel+consonant words: big → biggest, hot → hottest.",
      grammarTip:"Superlative = THE + [short adj]+EST / THE MOST + [long adj]. Always use THE before a superlative.",
      talkQ:[
        "Find all the superlatives in the text. Which rule applies to each one?",
        "What is the biggest/most famous/most beautiful thing in your city? Tell your partner.",
        "Compare three cities you know. Which is the biggest? The most expensive? The most interesting?",
        "What is the best and worst thing about living in a big city?",
      ],
      talkTip:`Model: "My city is Rosario. It is not the biggest city in Argentina, but it is one of the most beautiful. The weather is warmer than in Buenos Aires. The most famous thing about Rosario is that Messi is from here!"`,
      speakingChallenge:"Compare three places you know (cities, neighbourhoods, or towns) using at least four superlatives: the biggest, the most…, the best, the most/least…",
    },
    cycle3: {
      reading:`<p>Mia has two options for her holiday. She can go to the beach or to the mountains.</p>
<p>The beach is as hot as the mountains in summer. But the beach is not as quiet as the mountains — it is much noisier.</p>
<p>The hotel at the beach is as big as the one in the mountains. But the beach hotel is not as cheap as the mountain hotel. The mountain option is less expensive.</p>
<p>Mia's friend Leo says: "The beach is as beautiful as the mountains. They are both fantastic!" But he also says: "The mountain air is as fresh as the sea air — maybe even fresher."</p>
<p>In the end, Mia chooses the mountains. "The mountains are just as beautiful as the beach," she says, "and they are quieter and cheaper. For me, that is enough!"</p>`,
      vocab:[
        {word:"option",trans:"opción",ex:'"She has two options: the beach or the mountains."'},
        {word:"in the end",trans:"al final",ex:'"In the end, she chooses the mountains."'},
        {word:"fresh",trans:"fresco",ex:'"The mountain air is fresh and clean."'},
        {word:"even",trans:"incluso, aún más",ex:'"The mountains are even more beautiful than I expected."'},
        {word:"enough",trans:"suficiente",ex:'"For me, quiet and cheap is enough!"'},
      ],
      quickCheck:[
        {statement:"The beach hotel is cheaper than the mountain hotel.",answer:false},
        {statement:"Leo thinks the beach is more beautiful than the mountains.",answer:false},
        {statement:"Mia chooses the mountains in the end.",answer:true},
      ],
      listeningTitle:"Beach or mountains?",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"Why is the beach not as quiet as the mountains?",opts:["It is hotter","It is much noisier","It has no hotels","It is too cold"],correct:1},
        {q:"Which option is cheaper?",opts:["The beach hotel","They are the same price","The mountain hotel","The text doesn't say"],correct:2},
        {q:"What does Leo say about the two places?",opts:["The beach is better","The mountains are better","They are both fantastic","Neither is good"],correct:2},
        {q:"Why does Mia choose the mountains?",opts:["They are bigger","They are quieter and cheaper","They are hotter","They are more famous"],correct:1},
      ],
      grammarExamples:[
        '"The beach is as hot as the mountains."',
        '"The beach is not as quiet as the mountains."',
        '"The hotel is as big as the one in the mountains."',
        '"The mountain air is as fresh as the sea air — maybe even fresher."',
      ],
      grammarRule:"AS + adjective + AS = the two things are EQUAL. NOT AS + adjective + AS = the first thing is LESS. Just as...as = equally, emphasised: 'The mountains are just as beautiful as the beach.'",
      grammarTable:[["Structure","Meaning","Example"],["as + adj + as","equal","The beach is as hot as the mountains."],["not as + adj + as","first is less","The beach is not as quiet."],["just as + adj + as","equal (emphatic)","Just as beautiful as the beach."]],
      grammarWatch:"<em>\"The beach is as more hot as the mountains\"</em> ✗ → <strong>\"The beach is as hot as the mountains\"</strong> ✓. Don't add MORE or -ER inside AS...AS.",
      grammarTip:"Use AS...AS to say two things are equal. Use NOT AS...AS to say one is less without saying which is better: 'The beach is not as cheap' = the beach is more expensive.",
      talkQ:[
        "Find three AS...AS phrases in the text. What are they comparing?",
        "Compare two places you know using AS...AS and NOT AS...AS.",
        "Is your English as good as your Spanish? Is your city as expensive as Buenos Aires? Answer honestly!",
        "Compare two things you use every day: 'My phone is not as fast as a computer, but it is lighter.'",
      ],
      talkTip:`Model: "My neighbourhood is not as busy as the city centre. It is not as noisy. But it is just as friendly — maybe even friendlier. It is not as expensive either. For me, that is perfect!"`,
      speakingChallenge:"Compare two things (places, people, objects) using AS...AS (positive), NOT AS...AS (negative), and EVEN + comparative at least once.",
    },
  },

  // ── 9: Unit 10 – How Much/How Many + Countable/Uncountable ───────────────
  {
    cycle2: {
      reading:`<p>At the market — a shopping conversation.</p>
<p>Customer: "Good morning! I need a bottle of olive oil. How much is it?"<br/>
Seller: "It is two hundred pesos for a small bottle."<br/>
Customer: "And how much is a large bottle?"<br/>
Seller: "Three hundred and fifty pesos."<br/>
Customer: "I'll take the large one. Can I also have a kilo of tomatoes?"<br/>
Seller: "Of course. And would you like a bag of rice? We have a special offer today."<br/>
Customer: "Yes! How much is the rice?"<br/>
Seller: "A kilo of rice is one hundred and twenty pesos."<br/>
Customer: "Perfect. And can I have a piece of cheese? A small piece, please."<br/>
Seller: "Of course! Anything else?"<br/>
Customer: "No, that's all. How much is everything?"<br/>
Seller: "Six hundred and seventy pesos in total."</p>`,
      vocab:[
        {word:"a bottle of",trans:"una botella de",ex:'"I need a bottle of water, please."'},
        {word:"a kilo of",trans:"un kilo de",ex:'"Can I have a kilo of tomatoes?"'},
        {word:"a bag of",trans:"una bolsa de",ex:'"A bag of rice is very cheap here."'},
        {word:"a piece of",trans:"un trozo / una porción de",ex:'"Can I have a small piece of cheese?"'},
        {word:"special offer",trans:"oferta especial",ex:'"There is a special offer on rice today."'},
      ],
      quickCheck:[
        {statement:"The customer buys a small bottle of olive oil.",answer:false},
        {statement:"A kilo of rice costs one hundred and twenty pesos.",answer:true},
        {statement:"The total comes to six hundred pesos.",answer:false},
      ],
      listeningTitle:"Shopping at the market",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"How much is the large bottle of olive oil?",opts:["Two hundred pesos","Two hundred and fifty pesos","Three hundred pesos","Three hundred and fifty pesos"],correct:3},
        {q:"Why does the seller suggest the rice?",opts:["It is the most popular item","There is a special offer","It is the last bag","The customer asks for it"],correct:1},
        {q:"What kind of cheese does the customer ask for?",opts:["A large piece","A medium piece","A small piece","A kilo"],correct:2},
        {q:"What is the total?",opts:["Five hundred and seventy pesos","Six hundred pesos","Six hundred and seventy pesos","Seven hundred pesos"],correct:2},
      ],
      grammarExamples:[
        '"A bottle of olive oil."',
        '"A kilo of tomatoes."',
        '"A bag of rice."',
        '"A piece of cheese."',
        '"How much is everything?"',
      ],
      grammarRule:"CONTAINERS AND QUANTITIES: We can count uncountable nouns using containers or measurements: a bottle of water, a kilo of rice, a cup of tea, a piece of bread, a bag of flour, a slice of pizza, a glass of juice.",
      grammarTable:[["Container/Quantity","+ of + noun","Example"],["a bottle","water / oil","a bottle of water"],["a kilo / 500 grams","tomatoes / cheese","a kilo of tomatoes"],["a bag","rice / flour / crisps","a bag of rice"],["a piece / a slice","bread / cake / pizza","a piece of cake"],["a cup / a glass","tea / juice","a cup of tea"]],
      grammarWatch:"You measure UNCOUNTABLE nouns: <em>\"a water\"</em> ✗ → <strong>\"a bottle of water\"</strong> ✓. <em>\"a bread\"</em> ✗ → <strong>\"a piece of bread\"</strong> ✓.",
      grammarTip:"At a shop or market: <strong>Can I have a [container] of [noun]?</strong> / <strong>How much is a [container] of [noun]?</strong>",
      talkQ:[
        "What does the customer buy? Use containers: 'He/she buys a bottle of… / a kilo of…'",
        "Ask your partner: 'How much is a kilo of tomatoes in your neighbourhood? And a litre of milk?'",
        "Make a shopping list for dinner. Use at least five containers: 'a bottle of… / a piece of…'",
        "Role-play: one person is the customer, one is the seller. Buy three items and ask the total price.",
      ],
      talkTip:`Model: "Can I have a kilo of apples, please? And a bottle of water. How much is a piece of that cake? Two hundred pesos? Great, I'll take a small piece. How much is everything in total?"`,
      speakingChallenge:"You are at a market. Buy five things using containers (a bottle of, a kilo of, a piece of, a bag of, a cup of). Ask the price of each one and the total.",
    },
    cycle3: {
      reading:`<p>There is too much sugar in this dessert. It is too sweet. I don't like it.</p>
<p>There are too many chairs in this room. We only have ten people. We don't need forty chairs!</p>
<p>There isn't enough milk for the coffee. Can you buy more? There are only two spoons left — that is not enough for everyone.</p>
<p>In the kitchen: too much oil in the pan, not enough salt in the soup, too many pots and not enough space on the stove.</p>
<p>At the party: too many people in a small flat, not enough food, too much noise, and not enough music. But everyone is happy anyway!</p>`,
      vocab:[
        {word:"dessert",trans:"postre",ex:'"There is too much sugar in this dessert."'},
        {word:"spoon",trans:"cuchara",ex:'"There are only two spoons left."'},
        {word:"stove",trans:"cocina (el artefacto), hornalla",ex:'"There are too many pots on the stove."'},
        {word:"pan",trans:"sartén",ex:'"There is too much oil in the pan."'},
        {word:"anyway",trans:"de todas formas, igual",ex:'"The party is noisy, but everyone is happy anyway."'},
      ],
      quickCheck:[
        {statement:"The dessert doesn't have enough sugar.",answer:false},
        {statement:"There are too many chairs in the room.",answer:true},
        {statement:"Everyone is unhappy at the party.",answer:false},
      ],
      listeningTitle:"Too much and not enough",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What is the problem with the dessert?",opts:["Not enough sugar","Too much sugar","Not enough cream","Too much chocolate"],correct:1},
        {q:"How many people are in the room?",opts:["Four","Ten","Twenty","Forty"],correct:1},
        {q:"What is missing in the soup?",opts:["Oil","Sugar","Water","Salt"],correct:3},
        {q:"What is there not enough of at the party?",opts:["People","Food and music","Chairs","Noise"],correct:1},
      ],
      grammarExamples:[
        '"There is too much sugar in this dessert."',
        '"There are too many chairs in this room."',
        '"There isn\'t enough milk for the coffee."',
        '"There are only two spoons — not enough for everyone."',
      ],
      grammarRule:"TOO MUCH + uncountable noun = more than necessary (problem). TOO MANY + countable noun = more than necessary. NOT ENOUGH + noun = less than necessary.",
      grammarTable:[["Expression","Noun type","Meaning","Example"],["too much","uncountable","more than needed","too much sugar"],["too many","countable","more than needed","too many chairs"],["not enough","both","less than needed","not enough milk / not enough chairs"]],
      grammarWatch:"<em>\"Too much chairs\"</em> ✗ → <strong>\"Too many chairs\"</strong> ✓. <em>\"Too many milk\"</em> ✗ → <strong>\"Too much milk\"</strong> ✓. Too much = uncountable; too many = countable.",
      grammarTip:"Remember: TOO = a problem (more or less than is good). ENOUGH = the right amount. NOT ENOUGH = a problem (too little). ENOUGH goes BEFORE a noun: enough milk / enough chairs.",
      talkQ:[
        "Find three TOO MUCH/MANY and three NOT ENOUGH examples in the text.",
        "What is wrong with your city? 'There is too much traffic. There are too many… There isn't enough…'",
        "Describe your ideal city: 'There wouldn't be too much… There would be enough…'",
        "What about your English class? Too many students? Not enough practice? Tell your partner.",
      ],
      talkTip:`Model: "In my city, there is too much traffic in the morning. There are too many cars and not enough bike lanes. There isn't enough public transport. But there are enough parks — I love that!"`,
      speakingChallenge:"Talk about a real place (city, school, home, or office) using TOO MUCH, TOO MANY, and NOT ENOUGH at least twice each.",
    },
  },

  // ── 10: Unit 11 – Going To — Future Plans ────────────────────────────────
  {
    cycle2: {
      reading:`<p>Tomorrow is Saturday. I have plans.</p>
<p>In the morning I am meeting my friend Laura at the café at ten. We are having breakfast together. After that, we are going to the market. Laura is buying vegetables and I am buying fruit.</p>
<p>In the afternoon, my family is coming to my flat for lunch. My mother is cooking — she is making her famous pasta. I am not cooking. I am only cleaning the flat this morning.</p>
<p>In the evening, I am seeing a film with my flatmate. We are not going to the cinema — we are watching it at home. I am making popcorn.</p>
<p>Sunday I have no plans. I am doing nothing. I am going to sleep late and rest. That is my favourite plan!</p>`,
      vocab:[
        {word:"to meet",trans:"encontrarse con",ex:'"I am meeting my friend at ten."'},
        {word:"market",trans:"mercado, feria",ex:'"We are going to the market on Saturday morning."'},
        {word:"famous",trans:"famoso",ex:'"My mother makes her famous pasta for the family."'},
        {word:"flatmate",trans:"compañero/a de departamento",ex:'"I am watching the film with my flatmate."'},
        {word:"to rest",trans:"descansar",ex:'"On Sunday I am going to sleep late and rest."'},
      ],
      quickCheck:[
        {statement:"The narrator is cooking lunch on Saturday.",answer:false},
        {statement:"The narrator and flatmate are going to the cinema in the evening.",answer:false},
        {statement:"The narrator has no plans for Sunday.",answer:true},
      ],
      listeningTitle:"Saturday plans",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What time is the narrator meeting Laura?",opts:["At nine","At ten","At eleven","At twelve"],correct:1},
        {q:"What is the narrator buying at the market?",opts:["Vegetables","Bread","Fruit","Meat"],correct:2},
        {q:"Who is cooking lunch?",opts:["The narrator","Laura","The flatmate","The narrator's mother"],correct:3},
        {q:"Where are they watching the film?",opts:["At the cinema","At Laura's flat","At home","At the café"],correct:2},
      ],
      grammarExamples:[
        '"I am meeting my friend at ten."',
        '"We are having breakfast together."',
        '"My family is coming to my flat."',
        '"I am not cooking."',
        '"We are not going to the cinema."',
      ],
      grammarRule:"PRESENT CONTINUOUS for future arrangements: I am meeting / She is coming / We are having. Use it when the plan is already fixed and arranged. It often includes a time or place.",
      grammarTable:[["Structure","Example"],["I am + -ing","I am meeting Laura tomorrow."],["She/He is + -ing","My mother is cooking lunch."],["We/They are + -ing","We are watching a film at home."],["Negative: am/is/are + not + -ing","I am not cooking."],["Question: Am/Is/Are + subject + -ing?","Are you working on Saturday?"]],
      grammarWatch:"<em>\"I meeting my friend\"</em> ✗ → <strong>\"I am meeting my friend\"</strong> ✓. Don't forget the verb TO BE (am/is/are) before the -ing form.",
      grammarTip:"GOING TO = general future plan or intention. PRESENT CONTINUOUS = fixed, arranged plan (with a time and person): I'm going to learn French = intention. I'm meeting Ana at six = arranged.",
      talkQ:[
        "Find five present continuous future sentences in the text. Are they arranged plans?",
        "Tell your partner your plans for this weekend using present continuous: 'On Saturday I am…'",
        "Ask your partner: 'What are you doing tonight? Are you working tomorrow? Are you meeting anyone this week?'",
        "What is the difference between 'I'm going to see a film' and 'I'm seeing a film'? Discuss.",
      ],
      talkTip:`Model: "This Saturday I am meeting a friend in the afternoon. We are having coffee and then we are going to a bookshop. In the evening I am cooking dinner at home. I am not going out — I am staying in."`,
      speakingChallenge:"Tell your partner your real plans for the next three days using present continuous for fixed arrangements. Include at least one negative ('I'm not…') and one question ('Are you…?').",
    },
    cycle3: {
      reading:`<p>At a restaurant — ordering food.</p>
<p>Waiter: "Good evening! What would you like to drink?"<br/>
Customer A: "I'd like a glass of water, please."<br/>
Customer B: "I'd like a mineral water too. Actually — would you like a glass of wine, Ana?"<br/>
Customer A (Ana): "Mmm, yes! I'd like a red wine."<br/>
Waiter: "Of course. And what would you like to eat?"<br/>
Ana: "I'd like the pasta, please."<br/>
Customer B: "I'd like the steak. And would you like a starter, Ana?"<br/>
Ana: "No, thank you — I'd just like the pasta. But I'd like some bread, if possible."<br/>
Waiter: "Of course. Would you like anything else?"<br/>
Customer B: "I'd like some more water, please."<br/>
Waiter: "Certainly! I'll be right back."</p>`,
      vocab:[
        {word:"mineral water",trans:"agua mineral",ex:'"I\'d like a mineral water, please."'},
        {word:"starter",trans:"entrada",ex:'"Would you like a starter before the main course?"'},
        {word:"if possible",trans:"si es posible",ex:'"I\'d like some bread, if possible."'},
        {word:"certainly",trans:"por supuesto, claro",ex:'"Certainly! I\'ll be right back."'},
        {word:"I'll be right back",trans:"ya vuelvo",ex:'"One moment — I\'ll be right back!"'},
      ],
      quickCheck:[
        {statement:"Ana orders a white wine.",answer:false},
        {statement:"Customer B orders the pasta.",answer:false},
        {statement:"Ana would like some bread.",answer:true},
      ],
      listeningTitle:"At the restaurant",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What does Ana order to drink?",opts:["Water only","Mineral water and red wine","White wine","Orange juice"],correct:1},
        {q:"What does Customer B order to eat?",opts:["Pasta","Salad","Steak","Fish"],correct:2},
        {q:"Does Ana order a starter?",opts:["Yes, a salad.","Yes, soup.","No, just pasta and bread.","Yes, pasta."],correct:2},
        {q:"What does Customer B ask for at the end?",opts:["The bill","A dessert","More wine","More water"],correct:3},
      ],
      grammarExamples:[
        '"I\'d like a glass of water, please."',
        '"Would you like a glass of wine?"',
        '"I\'d like the pasta, please."',
        '"I\'d like some bread, if possible."',
        '"Would you like anything else?"',
      ],
      grammarRule:"WOULD LIKE = a polite way to ask for or offer something. I'd like = I would like (what I want). Would you like = ? (offering to the other person). It is more polite than 'I want'.",
      grammarTable:[["Structure","Example"],["I would like (I'd like)","I'd like the pasta, please."],["Would you like…?","Would you like some wine?"],["He/She would like","She'd like a coffee."],["We would like","We'd like the bill, please."]],
      grammarWatch:"<em>\"I would like to the pasta\"</em> ✗ → <strong>\"I would like the pasta\"</strong> ✓. After WOULD LIKE + noun (no TO). After WOULD LIKE + verb: add TO: <em>\"I'd like to order.\"</em>",
      grammarTip:"In a restaurant: <strong>I'd like + [food/drink]</strong> to order. <strong>Would you like + [food/drink]?</strong> to offer. Always add PLEASE for politeness.",
      talkQ:[
        "Find all the I'D LIKE and WOULD YOU LIKE phrases in the text. Which are orders and which are offers?",
        "Role-play a restaurant scene: one person is the waiter, two are customers. Use I'd like and Would you like.",
        "What would you like to eat tonight? Tell your partner politely: 'I'd like…'",
        "Offer your partner something: 'Would you like some…? Would you like to…?' They accept or refuse politely.",
      ],
      talkTip:`Model: "Good evening! What would you like? I'd like the chicken, please. Would you like a starter? No, thank you — I'd just like the main course and some water, if possible."`,
      speakingChallenge:"Role-play a full restaurant scene: the waiter asks, the customers order. Each customer must use I'D LIKE at least three times and ask 'WOULD YOU LIKE…?' at least once.",
    },
  },
];
