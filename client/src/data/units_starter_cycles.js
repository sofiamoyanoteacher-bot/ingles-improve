// Cycle 2 and Cycle 3 content for Starter units (A1–A2).
// Indexed to match UNITS array in units_starter.js (0 = Unit 01 … 10 = Unit 11).
// All scenarios are deliberately different from units_basic_cycles.js.
export const STARTER_CYCLES = [

  // ── 0: Unit 01 – Verb To Be + Subject Pronouns ───────────────────────────
  {
    cycle2: {
      reading:`<p>It is the first day of school. There is a new student in the classroom. His name is Sam. He is not from Buenos Aires. He is from Mendoza.</p>
<p>The teacher is Ms Torres. She is not young — she is forty-five years old. But she is very kind and she is not strict.</p>
<p>Sam: "I am nervous. This school is not small. It is very big!"<br/>
Ms Torres: "Don't worry, Sam. Are you from Mendoza?"<br/>
Sam: "Yes, I am."<br/>
Ms Torres: "That is wonderful! Mendoza is not far. Are your parents here in Buenos Aires?"<br/>
Sam: "Yes, they are. They are at home."<br/>
Ms Torres: "Perfect. You are not alone here. We are your new family!"<br/>
Sam: "Thank you! I am happy now."</p>`,
      vocab:[
        {word:"new student",trans:"alumno nuevo",ex:'"There is a new student in our class today."'},
        {word:"classroom",trans:"salón de clases, aula",ex:'"The classroom is big and very bright."'},
        {word:"strict",trans:"estricto",ex:'"Our maths teacher is not strict — she is very patient."'},
        {word:"nervous",trans:"nervioso",ex:'"I am nervous on the first day of school."'},
        {word:"wonderful",trans:"maravilloso",ex:'"That is wonderful news! Congratulations!"'},
      ],
      quickCheck:[
        {statement:"Sam is from Buenos Aires.",answer:false},
        {statement:"Ms Torres is strict.",answer:false},
        {statement:"Sam feels happy at the end of the conversation.",answer:true},
      ],
      listeningTitle:"First day at school",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"Where is Sam from?",opts:["Buenos Aires","Rosario","Córdoba","Mendoza"],correct:3},
        {q:"How old is Ms Torres?",opts:["Thirty-five","Forty","Forty-five","Fifty"],correct:2},
        {q:"Are Sam's parents in Buenos Aires?",opts:["No, they are in Mendoza.","Yes, they are.","The text doesn't say.","No, they are abroad."],correct:1},
        {q:"How does Sam feel at the end?",opts:["Still nervous","Sad","Happy","Tired"],correct:2},
      ],
      grammarExamples:[
        '"He is not from Buenos Aires."',
        '"She is not strict."',
        '"I am nervous."',
        '"Are you from Mendoza? Yes, I am."',
        '"Are your parents here? Yes, they are."',
      ],
      grammarRule:"To make a NEGATIVE with To Be, add NOT after the verb: I am not, He is not (isn't), They are not (aren't). For QUESTIONS, put the verb before the subject: Are you happy? Is she a nurse?",
      grammarTable:[["","Negative","Short negative"],["I am","I am not","I'm not"],["He / She / It is","He is not","He isn't"],["You / We / They are","They are not","They aren't"]],
      grammarWatch:"Short answer: <em>Are you from here?</em> → <strong>Yes, I am.</strong> (NOT 'Yes, I'm.') / <strong>No, I'm not.</strong> Never say <em>Yes, I'm</em> — you CANNOT contract a positive short answer.",
      grammarTip:"Remember: <strong>am not</strong> has no contraction (no 'amn't'). Only <strong>isn't</strong> and <strong>aren't</strong> are used.",
      talkQ:[
        "Is Sam happy at school? Is Ms Torres kind? Answer using To Be.",
        "Say three true sentences about yourself using 'I am not': I am not from…, I am not…",
        "Ask your partner three yes/no questions with To Be: Are you…? Is your…?",
        "What is your school or workplace like? Use is/is not, are/are not.",
      ],
      talkTip:`Model: "I am not from the capital. I am from a small city. My teacher is not strict — she is very patient. My classroom is not big, but it is comfortable. Are you happy at your school? Yes, I am!"`,
      speakingChallenge:"Describe yourself on the first day of a new course or job. Use To Be — positive, negative, and questions. Include: name, city, feeling, and one question for your partner.",
    },
    cycle3: {
      reading:`<p>At the sports club — registration day.</p>
<p>Receptionist: "Good afternoon! Are you here for the swimming class?"<br/>
New member: "Yes, I am!"<br/>
Receptionist: "Is this your membership card?"<br/>
New member: "No, it isn't. I am a new member. I am not registered yet."<br/>
Receptionist: "No problem! Is your name Lucas Pérez?"<br/>
New member: "No, it isn't. I am Lucas Moreno."<br/>
Receptionist: "Oh, sorry! Are you ten years old?"<br/>
Lucas: "No, I am not. I am eleven."<br/>
Receptionist: "Perfect. Is the swimming pool on the left?"<br/>
Lucas: "I don't know — I am not from here! Is it near the entrance?"<br/>
Receptionist: "Yes, it is! Just around the corner."<br/>
Lucas: "Thank you! Are the other children already there?"<br/>
Receptionist: "Yes, they are. Go! The class starts in five minutes."</p>`,
      vocab:[
        {word:"sports club",trans:"club deportivo",ex:'"I go to the sports club every Saturday."'},
        {word:"membership card",trans:"tarjeta de socio",ex:'"Is this your membership card?"'},
        {word:"registered",trans:"inscripto, registrado",ex:'"I am not registered yet — it is my first day."'},
        {word:"entrance",trans:"entrada",ex:'"The swimming pool is near the entrance."'},
        {word:"around the corner",trans:"a la vuelta",ex:'"The changing rooms are just around the corner."'},
      ],
      quickCheck:[
        {statement:"Lucas has a membership card.",answer:false},
        {statement:"Lucas is eleven years old.",answer:true},
        {statement:"The swimming class has not started yet.",answer:true},
      ],
      listeningTitle:"At the sports club",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What class is Lucas there for?",opts:["Football","Tennis","Swimming","Basketball"],correct:2},
        {q:"Is Lucas's name in the system?",opts:["Yes, Lucas Pérez.","Yes, Lucas Moreno.","No, it is not there.","The text doesn't say."],correct:2},
        {q:"How old is Lucas?",opts:["Nine","Ten","Eleven","Twelve"],correct:2},
        {q:"Where is the swimming pool?",opts:["On the right","Upstairs","Far from the entrance","Just around the corner"],correct:3},
      ],
      grammarExamples:[
        '"Is this your membership card? No, it isn\'t."',
        '"Is your name Lucas Pérez? No, it isn\'t. I am Lucas Moreno."',
        '"Are you ten years old? No, I am not."',
        '"Are the other children there? Yes, they are."',
      ],
      grammarRule:"To Be QUESTIONS: Is it your card? Are you ten? Are they there? SHORT ANSWERS: Yes, it is. / No, it isn't. / Yes, I am. / No, I'm not. / Yes, they are. / No, they aren't.",
      grammarTable:[["Question","Yes answer","No answer"],["Is it your card?","Yes, it is.","No, it isn't."],["Are you ten?","Yes, I am.","No, I'm not."],["Are they there?","Yes, they are.","No, they aren't."]],
      grammarWatch:"Don't say <em>Yes, it's.</em> Short answers NEVER use contractions in the YES form: <strong>Yes, it IS.</strong> / <strong>Yes, they ARE.</strong>",
      grammarTip:"In a new place, use: <strong>Is it…? / Are you…? / Are they…?</strong> for yes/no information. It's the fastest way to get answers!",
      talkQ:[
        "Find five questions in the text. What is the answer to each one?",
        "Role-play: one person is a receptionist at a sports club, one is a new member. Ask and answer five questions.",
        "What questions would you ask on the first day of a new class or club?",
        "Are you a member of any club or gym? Is it big? Are the people friendly?",
      ],
      talkTip:`Model: "Is this the English class? Yes, it is. Are you the teacher? No, I'm not — I'm a student! Is the teacher here? Yes, she is. Is there a registration list? No, there isn't. Am I late? No, you aren't!"`,
      speakingChallenge:"Role-play: you are a new student at a sports or language club. Ask and answer at least six questions using Is / Are. Include one mistake and one correction.",
    },
  },

  // ── 1: Unit 02 – Possessive Adjectives + This/That/These/Those ───────────
  {
    cycle2: {
      reading:`<p>It is Sofía's birthday today. She is eight years old. There are many presents on the table.</p>
<p>Sofía: "Wow! Is this my present from Grandma?"<br/>
Mum: "Yes! It is Grandma's present. Open it!"<br/>
Sofía: "It is a book! I love it. And what about those big balloons? Are they Dad's idea?"<br/>
Mum: "Yes, they are. That is your father's decoration."<br/>
Sofía: "And this cake — is it Grandma's cake?"<br/>
Mum: "No! It is the baker's cake. Grandma's cake is in the kitchen."<br/>
Sofía: "Two cakes! And whose idea is that?"<br/>
Mum: "Your uncle's idea! He always brings too much food."<br/>
Sofía: "I love my uncle's ideas."</p>`,
      vocab:[
        {word:"present / gift",trans:"regalo",ex:'"There are five presents on the table."'},
        {word:"balloons",trans:"globos",ex:'"The balloons are red and yellow."'},
        {word:"decoration",trans:"decoración",ex:'"That is my father\'s decoration — he loves balloons."'},
        {word:"baker",trans:"pastelero, panadero",ex:'"The baker\'s cake is very big and beautiful."'},
        {word:"whose idea",trans:"de quién es la idea",ex:'"Whose idea is the party? It is my sister\'s idea."'},
      ],
      quickCheck:[
        {statement:"The birthday girl's name is Sofía.",answer:true},
        {statement:"The cake on the table is Grandma's cake.",answer:false},
        {statement:"The balloons are Sofía's dad's idea.",answer:true},
      ],
      listeningTitle:"Sofía's birthday",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"How old is Sofía today?",opts:["Six","Seven","Eight","Nine"],correct:2},
        {q:"What is Grandma's present?",opts:["A cake","Balloons","A book","A toy"],correct:2},
        {q:"Where is Grandma's cake?",opts:["On the table","In the car","At the bakery","In the kitchen"],correct:3},
        {q:"Whose idea is having two cakes?",opts:["Mum's","Dad's","Grandma's","The uncle's"],correct:3},
      ],
      grammarExamples:[
        '"It is Grandma\'s present."',
        '"That is your father\'s decoration."',
        '"It is the baker\'s cake."',
        '"Your uncle\'s idea!"',
      ],
      grammarRule:"The POSSESSIVE 'S shows that something belongs to a person: Grandma's present = the present of Grandma. Add 's after the name or noun. For plurals ending in -s, just add the apostrophe: my parents' car.",
      grammarTable:[["Person","Possessive 's","Example"],["Sofía","Sofía's","Sofía's birthday"],["Dad","Dad's","Dad's decoration"],["the baker","the baker's","the baker's cake"]],
      grammarWatch:"Don't confuse <strong>it's</strong> (= it is) and <strong>its</strong> (possession): <em>\"It's a big cake.\"</em> vs <em>\"The cake and its colour.\"</em>",
      grammarTip:"To ask about possession: <strong>Whose + noun + is/are + this/that/these/those?</strong> → <em>Whose present is this?</em> → <em>It's Grandma's present.</em>",
      talkQ:[
        "What belongs to Grandma? What belongs to Dad? What belongs to the baker?",
        "Think of a birthday party. Who brings what? 'This cake is my aunt's. Those balloons are…'",
        "Describe five things in your classroom or home using possessive 's: 'This is the teacher's book.'",
        "Ask your partner: 'Whose phone is that? Whose bag is this?' Answer with possessive 's.",
      ],
      talkTip:`Model: "This is my teacher's notebook. That is my partner's phone. These are the teacher's markers. That bag near the door — it's my classmate's bag. Whose birthday is it today? It's nobody's birthday!"`,
      speakingChallenge:"Describe five objects around you. For each one, say who it belongs to using possessive 's: 'This is Ana's notebook. That is the teacher's marker...'",
    },
    cycle3: {
      reading:`<p>PE class — equipment mix-up.</p>
<p>Teacher: "OK, class! Pick up your equipment. Whose ball is this?"<br/>
Student 1: "It is not mine. Maybe it is hers." (points to Clara)<br/>
Clara: "No, it is not mine either. My ball is green. That one is yellow."<br/>
Teacher: "Is this your ball, Tomás?"<br/>
Tomás: "Yes! That is mine! Thank you."<br/>
Teacher: "And whose are these goggles?"<br/>
Student 2: "Those are ours — they are from our team."<br/>
Teacher: "And this whistle? Is it yours?"<br/>
Teacher's assistant: "Yes! That is mine. Sorry, I left it here."<br/>
Clara: "Teacher, are those trainers yours too?"<br/>
Teacher: "No, they are not mine. They are his." (points to the assistant)<br/>
Assistant: "Yes! Those are mine too. Today is not my day!"</p>`,
      vocab:[
        {word:"equipment",trans:"equipamiento, materiales",ex:'"Pick up your sports equipment."'},
        {word:"goggles",trans:"antiparras, googles",ex:'"Swimming goggles are in the bag."'},
        {word:"whistle",trans:"silbato, pito",ex:'"The teacher blows the whistle to start the game."'},
        {word:"trainers",trans:"zapatillas deportivas",ex:'"Are those trainers yours or mine?"'},
        {word:"assistant",trans:"asistente, auxiliar",ex:'"The teacher\'s assistant helps during PE class."'},
      ],
      quickCheck:[
        {statement:"The yellow ball belongs to Clara.",answer:false},
        {statement:"The goggles belong to the teacher.",answer:false},
        {statement:"The assistant lost both his whistle and his trainers.",answer:true},
      ],
      listeningTitle:"PE class mix-up",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What colour is Tomás's ball?",opts:["Green","Red","Blue","Yellow"],correct:3},
        {q:"Whose goggles are they?",opts:["Tomás's","Clara's","The teacher's team","A team of students"],correct:3},
        {q:"Whose whistle is it?",opts:["The teacher's","A student's","Tomás's","The assistant's"],correct:3},
        {q:"How does the assistant feel?",opts:["Happy","Angry","Not having a great day","Surprised"],correct:2},
      ],
      grammarExamples:[
        '"It is not mine. Maybe it is hers."',
        '"That one is mine! Thank you."',
        '"Those are ours — they are from our team."',
        '"That is mine. Sorry, I left it here."',
        '"They are his." / "Those are mine too."',
      ],
      grammarRule:"POSSESSIVE PRONOUNS replace 'possessive adjective + noun': my ball → mine / your ball → yours / his/her ball → his/hers / our ball → ours / their ball → theirs.",
      grammarTable:[["Adjective","Pronoun","Example"],["my","mine","This is mine."],["your","yours","Is that yours?"],["his","his","It is his."],["her","hers","It is hers."],["our","ours","That bag is ours."],["their","theirs","Those goggles are theirs."]],
      grammarWatch:"Don't add 's to possessive pronouns: <em>mines</em> ✗ → only <strong>mine</strong> is irregular. All others (yours, his, hers, ours, theirs) are already correct.",
      grammarTip:"Use possessive pronouns when the noun is clear from context: <em>Is this your ball?</em> → <em>Yes, it's mine.</em> (= my ball) — you don't need to repeat the noun.",
      talkQ:[
        "Find all the possessive pronouns in the text: mine, yours, hers, his, ours. What noun does each one replace?",
        "Pick up three objects near you. Your partner asks: 'Is this yours?' You answer with possessive pronouns.",
        "Complete: 'This pen is ___. That book is ___. These keys are ___.' (Use pronouns.)",
        "Has something of yours ever got mixed up with someone else's? What happened?",
      ],
      talkTip:`Model: "Is this your book? No, it's not mine. Maybe it's his. Whose bag is this? It's mine — thank you! Are these your glasses? No, those are hers — she was looking for them all morning!"`,
      speakingChallenge:"Play 'Whose is it?' Put 5 objects on the table. Point to each and ask your partner: 'Whose is this?' They must answer with a possessive pronoun.",
    },
  },

  // ── 2: Unit 03 – Simple Present (I/You/We/They) ──────────────────────────
  {
    cycle2: {
      reading:`<p>My name is Diego and I play in a football team. We always train on Mondays and Wednesdays. We usually meet at the sports ground at five in the afternoon.</p>
<p>I usually arrive early. I never miss training. My friend Pablo sometimes arrives late — the coach is never happy about this!</p>
<p>On Saturdays, we always play a match. We sometimes win and we sometimes lose. We never fight with the other team — we always shake hands at the end.</p>
<p>After the match, we usually go to a café near the ground. We always order the same thing: orange juice and a sandwich. We never eat pizza before a match — the coach says it is bad for us!</p>`,
      vocab:[
        {word:"sports ground",trans:"campo deportivo, cancha",ex:'"We always meet at the sports ground at five."'},
        {word:"to miss",trans:"faltar a, perderse",ex:'"I never miss training — I always go."'},
        {word:"coach",trans:"entrenador",ex:'"The coach is never happy when we arrive late."'},
        {word:"to shake hands",trans:"dar la mano",ex:'"We always shake hands with the other team."'},
        {word:"to lose",trans:"perder",ex:'"We sometimes lose, but we always try our best."'},
      ],
      quickCheck:[
        {statement:"Diego's team trains on Tuesdays and Thursdays.",answer:false},
        {statement:"Pablo sometimes arrives late to training.",answer:true},
        {statement:"The team always eats pizza after the match.",answer:false},
      ],
      listeningTitle:"Diego's football team",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"When does the team train?",opts:["Tuesdays and Thursdays","Mondays and Wednesdays","Every day","Only on Saturdays"],correct:1},
        {q:"What time do they usually meet?",opts:["At four","At five","At six","At seven"],correct:1},
        {q:"What does the team do after the match?",opts:["Go home","Go to the cinema","Go to a café near the ground","Train again"],correct:2},
        {q:"What does the coach say about pizza?",opts:["It is good before a match","It is good after a match","It is bad for them","It is their favourite food"],correct:2},
      ],
      grammarExamples:[
        '"We always train on Mondays."',
        '"I never miss training."',
        '"Pablo sometimes arrives late."',
        '"We usually go to a café."',
        '"We never eat pizza before a match."',
      ],
      grammarRule:"FREQUENCY ADVERBS go BEFORE the main verb but AFTER the verb To Be. Order from most to least frequent: always (100%) → usually → often → sometimes → never (0%).",
      grammarTable:[["Adverb","Frequency","Example"],["always","100%","We always train on Mondays."],["usually","~80%","I usually arrive early."],["often","~60%","We often win."],["sometimes","~40%","We sometimes lose."],["never","0%","I never miss training."]],
      grammarWatch:"With To Be, frequency adverbs come AFTER: <em>\"The coach is never happy\"</em> ✓ (not <em>\"The coach never is happy\"</em>). With all other verbs: BEFORE.",
      grammarTip:"To ask about frequency: <strong>How often do you…?</strong> → <em>I usually… / I sometimes… / I never…</em>",
      talkQ:[
        "What does Diego always do? What does he never do? What does Pablo sometimes do?",
        "Tell your partner about a sport or activity you do. Use frequency adverbs.",
        "Ask: 'How often do you play sport? Do you ever miss your training? Do you always arrive on time?'",
        "What do you always, usually, sometimes, and never do on Saturdays?",
      ],
      talkTip:`Model: "I always go to the gym on Mondays. I usually do thirty minutes of running. I sometimes swim too. I often forget my water bottle! I never go to the gym on Sundays — that is my rest day."`,
      speakingChallenge:"Describe your weekly routine using all five frequency adverbs: always, usually, often, sometimes, never. Say one true thing for each one.",
    },
    cycle3: {
      reading:`<p>At school, we have a big production of the play "The Lion King." Mr García is the director. He helps us every week.</p>
<p>Mr García: "OK, everyone! Listen to me. I need you to stand in two lines."<br/>
The students follow him. They stand in two lines.<br/>
Mr García: "Good. Now — he gives her the flowers." (He points to Marco and Lucia.)<br/>
Marco gives Lucia the flowers. Lucia smiles at him.<br/>
Mr García: "Perfect! Now, they follow him." (He points to the group.)<br/>
The students follow Marco.<br/>
Mr García: "Excellent! Now I need all of you to sing with me. Can you hear me?"<br/>
Students: "Yes, we can hear you!"<br/>
Mr García: "Great. Now, Lucia — look at him." (He points to Marco.)<br/>
Lucia looks at Marco. Marco looks at her.<br/>
Mr García: "Beautiful! You are all amazing. I am proud of you."</p>`,
      vocab:[
        {word:"production",trans:"obra, producción",ex:'"We have a school production of a famous play."'},
        {word:"director",trans:"director",ex:'"The director of the play is Mr García."'},
        {word:"to stand",trans:"pararse, ponerse de pie",ex:'"Stand in a line, please."'},
        {word:"to follow",trans:"seguir",ex:'"Follow me — the classroom is this way."'},
        {word:"proud of",trans:"orgulloso de",ex:'"I am proud of you — you did a great job!"'},
      ],
      quickCheck:[
        {statement:"The play is Cinderella.",answer:false},
        {statement:"Marco gives flowers to Lucia.",answer:true},
        {statement:"Mr García is angry with the students.",answer:false},
      ],
      listeningTitle:"The school play",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What is the name of the play?",opts:["Cinderella","The Jungle Book","The Lion King","Beauty and the Beast"],correct:2},
        {q:"Who is the director?",opts:["Marco","Lucia","A student","Mr García"],correct:3},
        {q:"Who gives the flowers?",opts:["Lucia to Marco","Marco to Lucia","Mr García to the students","All the students"],correct:1},
        {q:"How does Mr García feel about the students?",opts:["Disappointed","Angry","Bored","Proud"],correct:3},
      ],
      grammarExamples:[
        '"I need you to stand in two lines."',
        '"He gives her the flowers."',
        '"They follow him."',
        '"Can you hear me? Yes, we can hear you!"',
        '"Look at him." / "Marco looks at her."',
      ],
      grammarRule:"OBJECT PRONOUNS replace a noun that receives the action: I→me, you→you, he→him, she→her, it→it, we→us, they→them. They come AFTER the verb or preposition.",
      grammarTable:[["Subject pronoun","Object pronoun","Example"],["I","me","Listen to me."],["you","you","I need you."],["he","him","They follow him."],["she","her","He gives her flowers."],["we","us","He helps us."],["they","them","I see them."]],
      grammarWatch:"Don't use subject pronouns where object pronouns are needed: <em>\"He gives she flowers\"</em> ✗ → <strong>\"He gives her flowers\"</strong> ✓. After prepositions, always use object pronouns: <em>look at him / listen to me</em>.",
      grammarTip:"Quick check: if the pronoun comes AFTER a verb or preposition, use the OBJECT form (me, him, her, us, them).",
      talkQ:[
        "Find all the object pronouns in the text. What noun does each one replace?",
        "Tell your partner what you do in class. Use object pronouns: 'My teacher helps me. I listen to her. She explains it to us.'",
        "Complete: 'My partner sits next to ___. I often ask ___ for help. The teacher explains things to ___.'",
        "Describe something you did in a school event or performance using object pronouns.",
      ],
      talkTip:`Model: "In our school play, the teacher directs us. She helps me with my lines. I listen to her carefully. My partner stands next to me and I look at her when I forget the words. The audience watches us!"`,
      speakingChallenge:"Tell a story about a class activity or school event using at least five different object pronouns (me, him, her, us, them, it).",
    },
  },

  // ── 3: Unit 04 – Simple Present (He/She/It) — 3rd Person -s ──────────────
  {
    cycle2: {
      reading:`<p>At the zoo, there is a zookeeper called Ana. She wakes up at five o'clock every morning. She goes to the zoo at six. She works with the big animals — the lions, the elephants, and the giraffes.</p>
<p>Ana feeds the lions at seven. The lion eats ten kilos of meat! It drinks a lot of water too. Then Ana watches the elephants. The big elephant always splashes water. It does this every morning. Ana washes her uniform after!</p>
<p>The giraffe eats leaves from a tall tree. It reaches very high — it stretches its neck and grabs the leaves. Ana watches and takes notes. She studies the animals' behaviour every day. She teaches the new zookeepers too. She loves her job.</p>`,
      vocab:[
        {word:"zookeeper",trans:"cuidador de zoológico",ex:'"The zookeeper feeds the animals every morning."'},
        {word:"to feed",trans:"dar de comer, alimentar",ex:'"She feeds the lions at seven o\'clock."'},
        {word:"to splash",trans:"salpicar",ex:'"The elephant splashes water in the morning."'},
        {word:"to stretch",trans:"estirar",ex:'"The giraffe stretches its neck to reach the leaves."'},
        {word:"behaviour",trans:"comportamiento",ex:'"She studies the animals\' behaviour every day."'},
      ],
      quickCheck:[
        {statement:"Ana works with small animals at the zoo.",answer:false},
        {statement:"The elephant splashes water every morning.",answer:true},
        {statement:"The giraffe eats meat.",answer:false},
      ],
      listeningTitle:"Ana the zookeeper",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What time does Ana wake up?",opts:["At four","At five","At six","At seven"],correct:1},
        {q:"How much does the lion eat?",opts:["Five kilos","Eight kilos","Ten kilos","Twelve kilos"],correct:2},
        {q:"What does the giraffe eat?",opts:["Meat","Fruit","Leaves from a tall tree","Grass"],correct:2},
        {q:"Who else does Ana teach?",opts:["School children","New zookeepers","The animals","Nobody"],correct:1},
      ],
      grammarExamples:[
        '"She goes to the zoo at six."',
        '"She feeds the lions at seven."',
        '"The lion eats ten kilos of meat."',
        '"It does this every morning."',
        '"She studies the animals\' behaviour."',
      ],
      grammarRule:"3rd person -s spelling rules: most verbs add -s (works, reads, plays). Verbs ending in -ch, -sh, -ss, -x, -o add -ES (watches, washes, does, goes). Verbs ending in consonant + y change y→IES (studies, tries).",
      grammarTable:[["Rule","Verb","3rd person"],["Add -s","read, eat, drink","reads, eats, drinks"],["Add -es (-ch/-sh/-o)","watch, wash, do, go","watches, washes, does, goes"],["y → ies","study, try","studies, tries"],["Irregular","have","has"]],
      grammarWatch:"<em>She studys</em> ✗ → <strong>She studies</strong> ✓. <em>He dos</em> ✗ → <strong>He does</strong> ✓. <em>It reachs</em> ✗ → <strong>It reaches</strong> ✓.",
      grammarTip:"Two key irregular verbs: <strong>go → goes</strong> and <strong>have → has</strong>. All others follow the spelling rules.",
      talkQ:[
        "Find five 3rd person verbs in the text. What is the spelling rule for each?",
        "Describe an animal's daily life using 3rd person: 'The dog wakes up early. It eats… It plays…'",
        "What does your favourite animal do? Tell your partner using 3rd person singular.",
        "Ask: 'What does a lion eat? What does an elephant drink? How does a giraffe eat?'",
      ],
      talkTip:`Model: "My cat wakes up late — it never gets up before nine! It goes to its food bowl first. Then it sits in the sun. It watches birds through the window. It never catches them. It always tries, though!"`,
      speakingChallenge:"Describe an animal's full day using only 3rd person singular (he/she/it). Include 6 verbs, and make sure at least two use -es and one uses -ies.",
    },
    cycle3: {
      reading:`<p>This is Luna, my cat. Luna always wakes up before me — at six in the morning! She never sleeps in.</p>
<p>Luna usually sits on the window sill and watches the birds in the garden. She sometimes tries to catch them through the glass. She never catches them, of course!</p>
<p>At lunchtime, my neighbour Mrs Rojas always feeds Luna when I am at work. She gives her a bowl of food. Luna eats it very fast. She never leaves any food in the bowl. She always asks for more!</p>
<p>In the evening, Luna usually sleeps on my bed. She never sleeps on the floor. She sometimes sleeps on my pillow. This is not always comfortable for me! But Luna always looks so happy that I never move her.</p>`,
      vocab:[
        {word:"window sill",trans:"alféizar de la ventana",ex:'"The cat sits on the window sill and watches the birds."'},
        {word:"bowl",trans:"tazón, cuenco",ex:'"She gives the cat a bowl of food."'},
        {word:"to leave",trans:"dejar (algo sin terminar)",ex:'"Luna never leaves any food in the bowl."'},
        {word:"pillow",trans:"almohada",ex:'"The cat sometimes sleeps on my pillow."'},
        {word:"to move",trans:"mover",ex:'"I never move her because she looks so happy."'},
      ],
      quickCheck:[
        {statement:"Luna always sleeps in the morning.",answer:false},
        {statement:"Mrs Rojas feeds Luna at lunchtime.",answer:true},
        {statement:"Luna often leaves food in her bowl.",answer:false},
      ],
      listeningTitle:"Luna the cat",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What time does Luna wake up?",opts:["At five","At six","At seven","At eight"],correct:1},
        {q:"What does Luna watch through the window?",opts:["People walking","Other cats","Birds in the garden","Cars"],correct:2},
        {q:"Who feeds Luna when the owner is at work?",opts:["A friend","A family member","Mrs Rojas","Nobody"],correct:2},
        {q:"Where does Luna usually sleep?",opts:["On the sofa","On the floor","On the owner's bed","On the window sill"],correct:2},
      ],
      grammarExamples:[
        '"Luna always wakes up before me."',
        '"She never sleeps in."',
        '"She usually sits on the window sill."',
        '"She sometimes tries to catch them."',
        '"She never leaves any food."',
      ],
      grammarRule:"FREQUENCY ADVERBS with 3rd person: they go BEFORE the main verb. She always wakes up. She never sleeps. He usually sits. Remember: the verb still needs -s/es/ies in 3rd person.",
      grammarTable:[["Adverb","Example — I","Example — She/He"],["always","I always wake up.","Luna always wakes up."],["usually","I usually sit.","She usually sits."],["sometimes","I sometimes try.","She sometimes tries."],["never","I never leave.","She never leaves."]],
      grammarWatch:"Don't forget the -s on the verb: <em>\"Luna always wake up early\"</em> ✗ → <strong>\"Luna always wakes up early\"</strong> ✓. The adverb doesn't remove the 3rd person -s.",
      grammarTip:"Build sentences with: <strong>[name] + [adverb] + [verb+s/es/ies]</strong>. Example: Luna always sleeps. She never catches birds. She sometimes sits on my pillow.",
      talkQ:[
        "Describe Luna's good habits and funny habits. Use frequency adverbs.",
        "Tell your partner about a pet or animal you know. Use adverbs + 3rd person verbs.",
        "What does a cat, dog, or bird usually do? Use always/usually/sometimes/never.",
        "Do you have a pet? Or would you like one? What does it (or would it) usually do?",
      ],
      talkTip:`Model: "My dog always wakes up happy. He usually runs to the door when I come home. He sometimes barks at the postman. He never barks at children. He always sleeps near my feet at night."`,
      speakingChallenge:"Describe a real or imaginary pet's daily habits. Use at least four different frequency adverbs and four different 3rd person verbs (with correct spelling).",
    },
  },

  // ── 4: Unit 05 – Simple Present — Questions and Negatives ────────────────
  {
    cycle2: {
      reading:`<p>At the health centre — a check-up.</p>
<p>Doctor: "Good morning! Please sit down. What is your name?"<br/>
Patient: "My name is Valeria."<br/>
Doctor: "How old are you, Valeria?"<br/>
Valeria: "I am twenty-six."<br/>
Doctor: "What do you eat for breakfast?"<br/>
Valeria: "I usually eat fruit and yoghurt. I don't eat much bread."<br/>
Doctor: "What time do you usually go to sleep?"<br/>
Valeria: "I usually go to sleep at eleven. I don't sleep much — only six hours."<br/>
Doctor: "How much water do you drink every day?"<br/>
Valeria: "Not much. Maybe two glasses."<br/>
Doctor: "Where do you feel pain?"<br/>
Valeria: "I don't feel pain — I just feel very tired all the time."<br/>
Doctor: "How often do you do exercise?"<br/>
Valeria: "I don't do exercise. I don't have time."<br/>
Doctor: "That explains everything!"</p>`,
      vocab:[
        {word:"health centre",trans:"centro de salud, clínica",ex:'"I have an appointment at the health centre at ten."'},
        {word:"check-up",trans:"chequeo, control médico",ex:'"My annual check-up is every October."'},
        {word:"yoghurt",trans:"yogur",ex:'"I have yoghurt and fruit for breakfast."'},
        {word:"pain",trans:"dolor",ex:'"Where do you feel pain? In my back."'},
        {word:"That explains everything!",trans:"¡Eso lo explica todo!",ex:'"You don\'t sleep and don\'t exercise. That explains everything!"'},
      ],
      quickCheck:[
        {statement:"Valeria eats a lot of bread for breakfast.",answer:false},
        {statement:"Valeria sleeps only six hours a night.",answer:true},
        {statement:"Valeria exercises three times a week.",answer:false},
      ],
      listeningTitle:"At the health centre",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"How old is Valeria?",opts:["Twenty-two","Twenty-four","Twenty-six","Twenty-eight"],correct:2},
        {q:"What does Valeria eat for breakfast?",opts:["Bread and coffee","Eggs and toast","Fruit and yoghurt","Nothing"],correct:2},
        {q:"Why is Valeria tired?",opts:["She is sick","She sleeps too much","She doesn't sleep or exercise enough","She eats too much"],correct:2},
        {q:"How much water does Valeria drink?",opts:["A lot","About two glasses","More than five glasses","Almost nothing"],correct:1},
      ],
      grammarExamples:[
        '"What do you eat for breakfast?"',
        '"What time do you usually go to sleep?"',
        '"How much water do you drink?"',
        '"Where do you feel pain?"',
        '"How often do you do exercise?"',
      ],
      grammarRule:"WH- QUESTIONS with Simple Present: Question word + DO/DOES + subject + verb. What do you eat? Where does she work? When do they start? Who do you live with? How often do you exercise?",
      grammarTable:[["Question word","Use","Example"],["What","things / actions","What do you eat?"],["Where","places","Where do you feel pain?"],["When","time","When do you sleep?"],["Why","reasons","Why are you tired?"],["How much","uncountable qty","How much water?"],["How often","frequency","How often do you exercise?"]],
      grammarWatch:"Don't forget DO/DOES in questions: <em>\"Where you sleep?\"</em> ✗ → <strong>\"Where do you sleep?\"</strong> ✓. And DOES drops the -s from the main verb: <em>\"Where does she works?\"</em> ✗ → <strong>\"Where does she work?\"</strong> ✓.",
      grammarTip:"Word order for WH- questions: <strong>WH- word + do/does + subject + base verb + ?</strong> → What do you eat for breakfast?",
      talkQ:[
        "Find five WH- questions in the doctor's questions. What question word starts each one?",
        "Practise in pairs: one person is the doctor, one is the patient. Interview your partner about their health habits.",
        "What are three healthy habits Valeria should start? Write questions a doctor might ask.",
        "Answer the doctor's questions with YOUR real habits.",
      ],
      talkTip:`Model: "What do I eat for breakfast? Usually eggs and toast. How much water do I drink? About three litres. How often do I exercise? Three times a week. Where do I feel pain? In my shoulders — I sit all day!"`,
      speakingChallenge:"Interview your partner about their health habits using five different WH- question words (what, where, when, how much, how often). Then swap.",
    },
    cycle3: {
      reading:`<p>Quiz time! — A school science quiz.</p>
<p>Teacher: "OK class, let's play! Question one: Does water boil at one hundred degrees?"<br/>
Class: "Yes, it does!"<br/>
Teacher: "Correct! Question two: Do fish drink water?"<br/>
Student: "Yes, they do — fish drink water through their gills!"<br/>
Teacher: "Excellent! Question three: Do penguins fly?"<br/>
Class: "No, they don't!"<br/>
Teacher: "Right! Do penguins swim?"<br/>
Class: "Yes, they do! Very fast!"<br/>
Teacher: "Great! Now — does the sun move around the Earth?"<br/>
Student: "No, it doesn't! The Earth moves around the sun."<br/>
Teacher: "Perfect! Last question: do plants need light to grow?"<br/>
Class: "Yes, they do!"<br/>
Teacher: "Wonderful! You are all scientists today."</p>`,
      vocab:[
        {word:"boil",trans:"hervir",ex:'"Water boils at one hundred degrees."'},
        {word:"gill",trans:"branquia, agalla",ex:'"Fish breathe and drink through their gills."'},
        {word:"penguin",trans:"pingüino",ex:'"Penguins don\'t fly — they swim."'},
        {word:"to grow",trans:"crecer",ex:'"Plants need light and water to grow."'},
        {word:"scientist",trans:"científico",ex:'"You are all scientists today — great answers!"'},
      ],
      quickCheck:[
        {statement:"Penguins can fly.",answer:false},
        {statement:"The Earth moves around the sun.",answer:true},
        {statement:"Plants do not need light to grow.",answer:false},
      ],
      listeningTitle:"Science quiz",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"At what temperature does water boil?",opts:["Eighty degrees","Ninety degrees","One hundred degrees","One hundred and ten degrees"],correct:2},
        {q:"How do fish drink water?",opts:["Through their mouths only","Through their fins","Through their gills","They don't drink water"],correct:2},
        {q:"Can penguins swim fast?",opts:["No, they can't.","Yes, they can.","The text doesn't say.","Only in cold water."],correct:1},
        {q:"What do plants need to grow?",opts:["Only water","Only soil","Light and water","Warm temperatures only"],correct:2},
      ],
      grammarExamples:[
        '"Does water boil at one hundred degrees? Yes, it does!"',
        '"Do fish drink water? Yes, they do!"',
        '"Do penguins fly? No, they don\'t!"',
        '"Does the sun move around the Earth? No, it doesn\'t!"',
      ],
      grammarRule:"SHORT ANSWERS with Simple Present: Do you/they…? → Yes, I/they DO. / No, I/they DON'T. Does he/she/it…? → Yes, he/she/it DOES. / No, he/she/it DOESN'T. Never repeat the main verb in a short answer.",
      grammarTable:[["Question","Yes","No"],["Do they fly?","Yes, they do.","No, they don't."],["Do plants need light?","Yes, they do.","No, they don't."],["Does water boil at 100°?","Yes, it does.","No, it doesn't."],["Does the sun move?","No, it doesn't.","—"]],
      grammarWatch:"Never say <em>\"Yes, they fly.\"</em> or <em>\"No, it doesn't moves.\"</em> Short answers use only DO/DOES/DON'T/DOESN'T: <strong>\"Yes, they do.\"</strong> / <strong>\"No, it doesn't.\"</strong>",
      grammarTip:"Short answers are polite and natural. After YES or NO, always add the auxiliary: <strong>Yes + , + I/he/she/it/we/they + do/does.</strong>",
      talkQ:[
        "Find all the short answers in the quiz. Which use DO and which use DOES?",
        "Write five more science quiz questions using Do/Does. Answer them with short answers.",
        "Ask your partner: 'Does a cat sleep a lot? Do birds sing at night? Do sharks attack people often?' Answer with short answers.",
        "What do you know about animals? Play the quiz game with your partner.",
      ],
      talkTip:`Model: "Does a whale breathe air? Yes, it does! Do dolphins jump out of the water? Yes, they do! Does an octopus have eight arms? Yes, it does! Do elephants forget things? No, they don't — they have great memories!"`,
      speakingChallenge:"Create your own five-question quiz about animals, science, or nature. Use Does/Do for each question. Your partner answers with short answers only.",
    },
  },

  // ── 5: Unit 06 – Prepositions of Place + There is/There are ──────────────
  {
    cycle2: {
      reading:`<p>My favourite place in the city is the park near my school. It is a big, green park.</p>
<p>Student: "Is there a swimming pool in the park?"<br/>
Friend: "No, there isn't. But there is a small lake. You can see ducks on the water."<br/>
Student: "Are there any benches near the lake?"<br/>
Friend: "Yes, there are! There are many benches. And there are some picnic tables too."<br/>
Student: "Is there a café in the park?"<br/>
Friend: "No, there isn't a café. But there is a small kiosk near the entrance. It sells water and snacks."<br/>
Student: "Are there any swings or slides for children?"<br/>
Friend: "Yes! There are lots of swings. There is a very big slide too — it is brilliant!"<br/>
Student: "Is there a place to play football?"<br/>
Friend: "Yes, there is a small football pitch on the left side."</p>`,
      vocab:[
        {word:"lake",trans:"lago",ex:'"There is a small lake in the park."'},
        {word:"ducks",trans:"patos",ex:'"I can see ducks on the lake every morning."'},
        {word:"picnic table",trans:"mesa de picnic",ex:'"There are some picnic tables near the trees."'},
        {word:"kiosk",trans:"kiosko",ex:'"There is a small kiosk near the entrance."'},
        {word:"pitch",trans:"cancha, campo",ex:'"There is a small football pitch on the left side."'},
      ],
      quickCheck:[
        {statement:"There is a swimming pool in the park.",answer:false},
        {statement:"There are picnic tables in the park.",answer:true},
        {statement:"There is a café in the park.",answer:false},
      ],
      listeningTitle:"The park near school",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"Is there a swimming pool in the park?",opts:["Yes, a big one.","No, but there is a lake.","Yes, a small one.","The text doesn't say."],correct:1},
        {q:"What is near the entrance?",opts:["A café","A kiosk","A swimming pool","A big slide"],correct:1},
        {q:"Are there swings in the park?",opts:["No, there aren't.","Yes, there are lots.","Just one.","The text doesn't say."],correct:1},
        {q:"Where is the football pitch?",opts:["On the right","Near the lake","On the left side","Behind the kiosk"],correct:2},
      ],
      grammarExamples:[
        '"Is there a swimming pool in the park? No, there isn\'t."',
        '"Are there any benches? Yes, there are!"',
        '"Is there a café? No, there isn\'t."',
        '"Are there any swings? Yes, there are lots!"',
      ],
      grammarRule:"THERE IS / THERE ARE — questions and negatives: Is there a bench? → Yes, there is. / No, there isn't. Are there any shops? → Yes, there are. / No, there aren't. Use IS for singular and ARE for plural.",
      grammarTable:[["","Positive","Negative","Question"],["Singular","There is a café.","There isn't a café.","Is there a café?"],["Plural","There are benches.","There aren't any benches.","Are there any benches?"]],
      grammarWatch:"In questions and negatives, use <strong>any</strong>: <em>Are there any swings?</em> / <em>There aren't any benches.</em> In positive sentences, use <strong>some</strong>: <em>There are some picnic tables.</em>",
      grammarTip:"To describe a park or public place: <strong>Is there a _____ in the park?</strong> / <strong>Are there any _____ near the entrance?</strong>",
      talkQ:[
        "Find three IS THERE questions and three ARE THERE questions in the text. Are the answers positive or negative?",
        "Describe a park or public space near you. Is there a café? Are there any benches?",
        "Ask your partner: 'In your neighbourhood, is there a park? Are there any swings? Is there a football pitch?'",
        "Describe the perfect park. What should be there? What shouldn't be there?",
      ],
      talkTip:`Model: "In my neighbourhood, there is a big park. There are some benches and a small kiosk. There isn't a swimming pool, but there is a fountain. There are lots of trees. There aren't any slides — the park is for adults mostly."`,
      speakingChallenge:"Describe your ideal park or playground using IS THERE / ARE THERE in at least three questions and answering them yourself. Include positive and negative sentences.",
    },
    cycle3: {
      reading:`<p>In the school art room, there is always something interesting.</p>
<p>Today there are some pencils on the table, but there aren't any paintbrushes — they are all in the cupboard. There is some white paper, but there isn't any coloured paper.</p>
<p>Teacher: "Is there enough glue for everyone?"<br/>
Student: "No! There isn't enough glue. There are only two bottles."<br/>
Teacher: "Are there any scissors?"<br/>
Student: "Yes, there are some scissors. But there aren't enough for all the students — there are only five pairs."<br/>
Teacher: "OK. Are there any pencils left?"<br/>
Student: "Yes, there are some. But there aren't any red ones — only blue and green."<br/>
Teacher: "That's fine! We can work with what we have. Art is about being creative, not about having everything perfect."</p>`,
      vocab:[
        {word:"art room",trans:"sala de arte, taller",ex:'"The school art room has pencils, paper, and glue."'},
        {word:"paintbrush",trans:"pincel",ex:'"The paintbrushes are in the cupboard."'},
        {word:"glue",trans:"pegamento, cola",ex:'"There isn\'t enough glue for everyone."'},
        {word:"scissors",trans:"tijeras",ex:'"Are there any scissors in the art room?"'},
        {word:"creative",trans:"creativo",ex:'"Art is about being creative."'},
      ],
      quickCheck:[
        {statement:"There are paintbrushes on the table.",answer:false},
        {statement:"There isn't enough glue for everyone.",answer:true},
        {statement:"There are red pencils in the art room.",answer:false},
      ],
      listeningTitle:"The art room",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"Where are the paintbrushes?",opts:["On the table","In the bag","In the cupboard","On the floor"],correct:2},
        {q:"Is there any coloured paper?",opts:["Yes, lots.","Yes, some.","No, there isn't any.","The text doesn't say."],correct:2},
        {q:"How many bottles of glue are there?",opts:["One","Two","Three","Five"],correct:1},
        {q:"What does the teacher say about art?",opts:["You need everything perfect.","Art needs lots of glue.","Art is about being creative.","You need red pencils."],correct:2},
      ],
      grammarExamples:[
        '"There are some pencils on the table."',
        '"There aren\'t any paintbrushes on the table."',
        '"There is some white paper."',
        '"There isn\'t any coloured paper."',
        '"There isn\'t enough glue."',
      ],
      grammarRule:"SOME is used in positive sentences with plural/uncountable nouns: There are some pencils. There is some paper. ANY is used in negatives and questions: There aren't any paintbrushes. Is there any glue? ENOUGH shows quantity: There isn't enough glue.",
      grammarTable:[["","Countable plural","Uncountable"],["Positive","some pencils","some paper"],["Negative","any pencils / not enough","any paper / not enough"],["Question","any pencils?","any paper?"]],
      grammarWatch:"<em>There are some pencils</em> ✓ but <em>There are any pencils</em> ✗. In a question, use ANY: <em>Are there any pencils?</em> In a positive, use SOME: <em>Yes, there are some pencils.</em>",
      grammarTip:"ENOUGH = the right amount. NOT ENOUGH = too little. <em>There's enough paper.</em> / <em>There isn't enough glue.</em> ENOUGH goes BEFORE a noun: enough glue / enough scissors.",
      talkQ:[
        "Describe the art room using SOME and ANY. What IS there? What ISN'T there?",
        "Describe your classroom: 'There are some… / There aren't any… / There isn't enough…'",
        "Ask your partner: 'Is there enough light in this room? Are there any plants? Is there any water?'",
        "What does your ideal classroom have? Use SOME, ENOUGH, and NOT ENOUGH.",
      ],
      talkTip:`Model: "In my classroom, there are some desks and some chairs. There aren't any computers — we use our phones. There is some natural light from one big window, but there isn't enough on cloudy days. There are some plants — that's nice!"`,
      speakingChallenge:"Describe three rooms at school or at home. In each room, use SOME (positive), ANY (negative), and ENOUGH at least once.",
    },
  },

  // ── 6: Unit 07 – Telling the Time + At / On / In ─────────────────────────
  {
    cycle2: {
      reading:`<p>The cinema programme for this weekend:</p>
<p>On Saturday, the children's film "The Magic Forest" starts at three in the afternoon. There is a second showing at six in the evening.</p>
<p>On Sunday, the adventure film "Space Heroes" starts at two in the afternoon and again at five. In the evening, the film for adults starts at eight-thirty.</p>
<p>Reporter: "Do you go to the cinema often?"<br/>
Child: "Yes! I go with my family on Saturdays. We always go to the three o'clock showing. In summer, we sometimes go on Sundays too."<br/>
Reporter: "What time does your film finish?"<br/>
Child: "It finishes at around five. Then we have dinner at seven."<br/>
Reporter: "Do you like going in the morning?"<br/>
Child: "No! In the morning I sleep. The cinema is for the afternoon and evening!"</p>`,
      vocab:[
        {word:"programme",trans:"cartelera, programa",ex:'"The cinema programme for this weekend."'},
        {word:"showing",trans:"función",ex:'"There is a second showing at six in the evening."'},
        {word:"adventure film",trans:"película de aventuras",ex:'"An adventure film about heroes in space."'},
        {word:"reporter",trans:"reportero, periodista",ex:'"The reporter asked about weekend plans."'},
        {word:"to finish",trans:"terminar",ex:'"The film finishes at around five."'},
      ],
      quickCheck:[
        {statement:"The children's film is on Sunday.",answer:false},
        {statement:"The family always goes to the three o'clock showing.",answer:true},
        {statement:"The child likes going to the cinema in the morning.",answer:false},
      ],
      listeningTitle:"The cinema programme",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What time does 'The Magic Forest' start on Saturday?",opts:["At two","At three","At four","At six"],correct:1},
        {q:"When does the adult film start on Sunday evening?",opts:["At seven","At eight","At eight-thirty","At nine"],correct:2},
        {q:"What time does the family's film finish?",opts:["At four","Around five","At six","At seven"],correct:1},
        {q:"What time does the family have dinner?",opts:["At five","At six","At seven","At eight"],correct:2},
      ],
      grammarExamples:[
        '"The film starts at three in the afternoon."',
        '"There is a showing at six in the evening."',
        '"We go on Saturdays."',
        '"In summer, we sometimes go on Sundays."',
        '"In the morning I sleep."',
      ],
      grammarRule:"Prepositions of time: AT for specific times (at three, at eight-thirty, at noon). ON for days (on Saturday, on Sunday). IN for parts of the day, seasons, and months (in the afternoon, in summer, in December).",
      grammarTable:[["Preposition","Use","Examples"],["AT","specific time","at three, at eight-thirty"],["ON","day","on Saturday, on Sunday"],["IN","part of day / season","in the afternoon, in summer"]],
      grammarWatch:"<em>\"In Saturday\"</em> ✗ / <em>\"On the evening\"</em> ✗ / <em>\"At afternoon\"</em> ✗. Remember: <strong>ON Saturday, IN the afternoon, AT three.</strong>",
      grammarTip:"AT night (not 'in the night'). IN the morning / afternoon / evening. ON specific days.",
      talkQ:[
        "Find five examples of AT, ON, and IN in the text. Why is each preposition used?",
        "Tell your partner about your weekend plans using at, on, and in: 'On Saturday I… / In the evening I… / At eight…'",
        "Ask your partner: 'What time do you usually go to sleep? Do you go out on Sundays? What do you do in the afternoon?'",
        "Do you like going to the cinema? When do you usually go — in the afternoon or in the evening?",
      ],
      talkTip:`Model: "On Saturdays I usually go to the gym in the morning. In the afternoon I sometimes meet friends. In the evening I watch a film at home — I prefer watching films on Saturday nights. On Sundays I rest in the morning and see my family at lunchtime."`,
      speakingChallenge:"Tell your partner your real weekend plans using AT (times), ON (days), and IN (parts of day) at least twice each.",
    },
    cycle3: {
      reading:`<p>The school events calendar for term two:</p>
<p>The science fair is on the fifteenth of May — that is a Friday. All students from the first to the fifth year take part. It is the biggest event of the term.</p>
<p>Sports day is on the third of June, a Wednesday. There are running races, a long jump, and a team relay. The winner gets a trophy on the twenty-first of June — the last day of term.</p>
<p>Teacher: "Who can tell me when the science fair is?"<br/>
Student: "It is on the fifteenth of May!"<br/>
Teacher: "Correct! And when is the second school trip?"<br/>
Student: "On the seventh of June."<br/>
Teacher: "Excellent. And the last day of school?"<br/>
Student: "On the twenty-first of June!"<br/>
Teacher: "Well done! These dates are very important. Write them in your planner."</p>`,
      vocab:[
        {word:"science fair",trans:"feria de ciencias",ex:'"The science fair is the biggest event of the term."'},
        {word:"to take part",trans:"participar",ex:'"All students take part in the science fair."'},
        {word:"relay",trans:"carrera de postas",ex:'"In a relay, each runner passes the baton."'},
        {word:"trophy",trans:"trofeo",ex:'"The winner gets a trophy on the last day."'},
        {word:"planner",trans:"agenda, planificador",ex:'"Write these dates in your planner."'},
      ],
      quickCheck:[
        {statement:"The science fair is on the fifteenth of June.",answer:false},
        {statement:"Sports day is on a Wednesday.",answer:true},
        {statement:"The last day of term is the twenty-first of June.",answer:true},
      ],
      listeningTitle:"The school calendar",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"When is the science fair?",opts:["3 June","7 June","15 May","21 June"],correct:2},
        {q:"What year groups take part in the science fair?",opts:["Only first year","First to third year","First to fifth year","Only final year"],correct:2},
        {q:"When do the sports day winners get their trophies?",opts:["On sports day","On 7 June","On 21 June","In July"],correct:2},
        {q:"What does the teacher ask students to do?",opts:["Study hard","Write the dates in their planner","Go home early","Draw a calendar"],correct:1},
      ],
      grammarExamples:[
        '"The science fair is on the fifteenth of May."',
        '"Sports day is on the third of June."',
        '"The trophy is awarded on the twenty-first of June."',
      ],
      grammarRule:"ORDINAL NUMBERS for dates: 1st (first), 2nd (second), 3rd (third), 4th (fourth)... 20th (twentieth), 21st (twenty-first). Say: ON the THIRD of JUNE. Write: 3rd June or June 3rd.",
      grammarTable:[["Number","Ordinal","Abbreviation"],["1","first","1st"],["2","second","2nd"],["3","third","3rd"],["5","fifth","5th"],["20","twentieth","20th"],["21","twenty-first","21st"]],
      grammarWatch:"Irregular: 1st (NOT oneth), 2nd (NOT twoth), 3rd (NOT threeth). Special: fifth (not fiveth), eighth (one t), ninth (no e), twelfth (not twelveth).",
      grammarTip:"To say a date aloud: <strong>ON the [ordinal] OF [month]</strong>. Example: on the fifteenth of May. To ask: <strong>When is the science fair?</strong>",
      talkQ:[
        "When is the science fair? When is sports day? When is the last day of term? Answer using ordinal numbers.",
        "When is your birthday? Say it in full: 'My birthday is on the _____ of _____.'",
        "What are three important dates at your school or workplace? Tell your partner using ordinal numbers.",
        "Ask your partner: 'When is your next holiday? What date is it?'",
      ],
      talkTip:`Model: "The school year ends on the twenty-eighth of November. The first day back is the first of March. Our English exam is on the fourteenth of October. My favourite day is the twenty-fifth of December — Christmas!"`,
      speakingChallenge:"Tell your partner about five important dates using ordinal numbers: a birthday, a school or work event, a holiday, a special memory, and today's date.",
    },
  },

  // ── 7: Unit 08 – Can — Ability and Permission ─────────────────────────────
  {
    cycle2: {
      reading:`<p>It is sports day at school. Everyone is excited!</p>
<p>"I can run really fast," says Marco. "Can you run fast, Lucia?"<br/>
"Yes, I can! But I can't jump very high. My legs are not strong enough for the high jump."<br/>
"I can do the high jump," says Pablo. "But I can't swim. We don't have a swimming race today, do we?"<br/>
"No, we don't!" says the teacher, Mr Ruiz. "Today we have running, jumping, and throwing."<br/>
"Can I throw the ball?" asks Sofía. "I can't throw far, but I always try!"<br/>
"Of course you can," says Mr Ruiz. "The most important thing is not winning — it is taking part. Everyone can do something."<br/>
"Can you run, Mr Ruiz?" asks Marco.<br/>
Mr Ruiz laughs. "I can run… a little. I am fifty-two years old. But I can still jump! Watch!"</p>`,
      vocab:[
        {word:"sports day",trans:"día de deportes / de campo",ex:'"Sports day is my favourite day of the school year."'},
        {word:"high jump",trans:"salto en alto",ex:'"I can do the high jump — I am very tall."'},
        {word:"throwing",trans:"lanzamiento",ex:'"Today there is running, jumping, and throwing."'},
        {word:"taking part",trans:"participar",ex:'"The most important thing is taking part."'},
        {word:"still",trans:"todavía",ex:'"I am fifty-two, but I can still jump!"'},
      ],
      quickCheck:[
        {statement:"Lucia can jump very high.",answer:false},
        {statement:"Pablo can't swim.",answer:true},
        {statement:"Mr Ruiz cannot jump at all.",answer:false},
      ],
      listeningTitle:"Sports day",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What can't Lucia do?",opts:["Run fast","Jump high","Throw the ball","Swim"],correct:1},
        {q:"What sport can't Pablo do?",opts:["Running","High jump","Throwing","Swimming"],correct:3},
        {q:"What does Mr Ruiz say is the most important thing?",opts:["Winning","Running fast","Taking part","Jumping high"],correct:2},
        {q:"How old is Mr Ruiz?",opts:["Forty-two","Forty-eight","Fifty-two","Sixty"],correct:2},
      ],
      grammarExamples:[
        '"I can run really fast."',
        '"I can\'t jump very high."',
        '"I can\'t swim."',
        '"Can I throw the ball? Of course you can."',
        '"I can still jump!"',
      ],
      grammarRule:"CAN'T / CANNOT = inability or impossibility. CAN'T is used in speaking; CANNOT is more formal. The structure is the same as CAN: subject + can't + base verb (no -s, no -ing, no to).",
      grammarTable:[["","Structure","Example"],["Positive","can + base verb","I can run fast."],["Negative","can't + base verb","I can't jump high."],["Question","Can + subject + base verb?","Can you swim?"],["Short answer","Yes, I can. / No, I can't.","Can you run? Yes, I can!"]],
      grammarWatch:"<em>\"I can't to swim\"</em> ✗ → <strong>\"I can't swim\"</strong> ✓. No TO after CAN/CAN'T. Also: no -s in 3rd person: <em>\"She cans run\"</em> ✗ → <strong>\"She can run\"</strong> ✓.",
      grammarTip:"TOO + adjective = problem: TOO SHORT = not tall enough. Use it to explain why you CAN'T do something.",
      talkQ:[
        "What can each person do? What can't they do? List three of each.",
        "What can you do well at sports? What can't you do? Tell your partner.",
        "Ask: 'Can you run fast? Can you jump high? Can you swim?' Answer with Yes, I can / No, I can't.",
        "What is something you can't do yet but want to learn?",
      ],
      talkTip:`Model: "I can swim quite well. I can't dive — the water is too deep and I'm scared! I can ride a bike but I can't do tricks. I can play football but I can't run for a long time. I get tired too fast!"`,
      speakingChallenge:"Tell your partner six true things about yourself: three things you CAN do and three things you CAN'T do. Explain why with TOO + adjective for at least two.",
    },
    cycle3: {
      reading:`<p>At the school library — what can you do here?</p>
<p>Librarian: "Welcome! Can I help you?"<br/>
Student: "Yes, please. Can I borrow this book?"<br/>
Librarian: "Of course! You can borrow up to three books at a time."<br/>
Student: "Can I keep it for two weeks?"<br/>
Librarian: "Yes, you can. But you can't keep it for more than two weeks without renewing it."<br/>
Student: "Can I use the computers here?"<br/>
Librarian: "Yes, you can. But you can't use social media on the library computers — only for study."<br/>
Student: "Can I eat my sandwich here?"<br/>
Librarian: "Sorry, you can't eat in the library. But you can eat outside in the garden."<br/>
Student: "Can my little brother come in? He is five."<br/>
Librarian: "Of course he can! Children can use the children's section. But he can't be noisy."<br/>
Student: "He is always noisy. Sorry in advance!"</p>`,
      vocab:[
        {word:"librarian",trans:"bibliotecario/a",ex:'"The librarian helps students find books."'},
        {word:"to borrow",trans:"pedir prestado",ex:'"Can I borrow this book for two weeks?"'},
        {word:"to renew",trans:"renovar (un préstamo)",ex:'"You can renew the book if you need more time."'},
        {word:"social media",trans:"redes sociales",ex:'"You can\'t use social media on library computers."'},
        {word:"sorry in advance",trans:"perdón de antemano",ex:'"He is very noisy. Sorry in advance!"'},
      ],
      quickCheck:[
        {statement:"Students can borrow up to five books at a time.",answer:false},
        {statement:"Students can use the computers for studying.",answer:true},
        {statement:"Students can eat in the library.",answer:false},
      ],
      listeningTitle:"At the library",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"How many books can a student borrow at once?",opts:["One","Two","Three","Five"],correct:2},
        {q:"Can students use social media on the library computers?",opts:["Yes, always.","Yes, but only for one hour.","No, only for study.","The text doesn't say."],correct:2},
        {q:"Where can students eat?",opts:["At the computers","In the children's section","Outside in the garden","Nowhere"],correct:2},
        {q:"Why does the student apologise for the brother?",opts:["He is too young","He is always noisy","He doesn't like books","He breaks things"],correct:1},
      ],
      grammarExamples:[
        '"Can I borrow this book? Of course!"',
        '"You can borrow up to three books."',
        '"You can\'t keep it for more than two weeks."',
        '"Can I eat here? Sorry, you can\'t."',
        '"He can use the children\'s section. But he can\'t be noisy."',
      ],
      grammarRule:"CAN for REQUESTS and PERMISSION: Can I…? = Is it okay if I…? The answer is: Yes, you can. / Of course! / Sorry, you can't. Use CAN'T to say something is not allowed.",
      grammarTable:[["Request","Permission","Refusal"],["Can I borrow a book?","Yes, of course!","Sorry, you can't."],["Can I eat here?","Yes, in the garden.","Sorry, you can't eat here."],["Can he come in?","Of course he can!","Sorry, children can't come in."]],
      grammarWatch:"CAN for requests is informal and common. COULD I…? is more polite. Both are correct: <em>\"Can I borrow this?\"</em> ✓ / <em>\"Could I borrow this?\"</em> ✓ (more polite).",
      grammarTip:"In a library, museum, or school: ask before doing something: <strong>Can I + base verb?</strong> 'Can I sit here?' 'Can I take a photo?' 'Can I use this?'",
      talkQ:[
        "Find all the CAN/CAN'T uses in the text. Which ones are about requests and which about rules?",
        "What are the rules in your English class? What can students do? What can't they do?",
        "Practise asking for permission: Can I open the window? Can I use my phone? Can I leave early?",
        "Role-play: one person is a librarian, the other is a student. Ask five Can I? questions.",
      ],
      talkTip:`Model: "Can I sit here? Of course! Can I use this computer? Yes, you can. Can I print something? Sorry, you can't — the printer is broken. Can I come back tomorrow? Yes, the library opens at nine."`,
      speakingChallenge:"Create the rules for a new place (your own school, gym, or library). Tell your partner: 'You can… / You can't…' Use at least six rules. Your partner asks: 'Can I…?' questions.",
    },
  },

  // ── 8: Unit 09 – Comparative Adjectives ──────────────────────────────────
  {
    cycle2: {
      reading:`<p>At the school zoo project — students compare animals.</p>
<p>Teacher: "OK class — which animal is the biggest in our project?"<br/>
Student: "The elephant is the biggest!"<br/>
Teacher: "Correct. And which is the smallest?"<br/>
Student: "The mouse! It is the smallest animal on our list."<br/>
Teacher: "Good. Now — which is the fastest?"<br/>
Student: "The cheetah is the fastest animal in the world — it runs at one hundred kilometres per hour!"<br/>
Teacher: "Excellent! And the slowest?"<br/>
Student: "The tortoise. It is the slowest — but it lives the longest!"<br/>
Teacher: "Which is the most dangerous?"<br/>
Student: "Mosquitoes! They are the most dangerous animal in the world — more dangerous than sharks or lions."<br/>
Teacher: "Amazing! And the most intelligent?"<br/>
Student: "Chimpanzees, dolphins, and elephants are the most intelligent animals — after humans, of course!"</p>`,
      vocab:[
        {word:"cheetah",trans:"guepardo",ex:'"The cheetah is the fastest land animal."'},
        {word:"tortoise",trans:"tortuga (de tierra)",ex:'"The tortoise is the slowest but it lives the longest."'},
        {word:"mosquito",trans:"mosquito",ex:'"Mosquitoes are the most dangerous animal for humans."'},
        {word:"chimpanzee",trans:"chimpancé",ex:'"Chimpanzees are among the most intelligent animals."'},
        {word:"per hour",trans:"por hora",ex:'"The cheetah runs at one hundred kilometres per hour."'},
      ],
      quickCheck:[
        {statement:"The elephant is the smallest animal in the project.",answer:false},
        {statement:"The cheetah is the fastest animal in the world.",answer:true},
        {statement:"Lions are the most dangerous animals for humans.",answer:false},
      ],
      listeningTitle:"Animal facts",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"Which is the smallest animal on the list?",opts:["The ant","The mouse","The mosquito","The cat"],correct:1},
        {q:"How fast can a cheetah run?",opts:["Fifty km/h","Eighty km/h","One hundred km/h","One hundred and fifty km/h"],correct:2},
        {q:"Which animal lives the longest?",opts:["The elephant","The cheetah","The whale","The tortoise"],correct:3},
        {q:"Which animals are named as the most intelligent?",opts:["Lions and tigers","Elephants and bears","Chimpanzees, dolphins, and elephants","Dogs and cats"],correct:2},
      ],
      grammarExamples:[
        '"The elephant is the biggest."',
        '"The mouse is the smallest animal."',
        '"The cheetah is the fastest."',
        '"Mosquitoes are the most dangerous."',
        '"Chimpanzees are the most intelligent."',
      ],
      grammarRule:"SUPERLATIVE adjectives describe the TOP or BOTTOM of a group of three or more. Short adjectives: THE + adj + EST. Long adjectives (2+ syllables): THE MOST + adj.",
      grammarTable:[["Type","Comparative","Superlative"],["Short (1 syllable)","bigger than","the biggest"],["Short ending -y","faster than","the fastest"],["Long (2+ syllables)","more dangerous","the most dangerous"],["Irregular","better / worse","the best / the worst"]],
      grammarWatch:"<em>\"The most big\"</em> ✗ → <strong>\"The biggest\"</strong> ✓. <em>\"The most fast\"</em> ✗ → <strong>\"The fastest\"</strong> ✓. Double the consonant for short vowel+consonant: big → biggest.",
      grammarTip:"Superlative = THE + [short adj]+EST / THE MOST + [long adj]. Always use THE before a superlative.",
      talkQ:[
        "Find all the superlatives in the text. Which rule applies to each one?",
        "What is the biggest/most intelligent/most dangerous animal you know? Tell your partner.",
        "Compare three animals: Which is the biggest? The most colourful? The most interesting?",
        "What is the best and worst thing about having a pet? Use superlatives.",
      ],
      talkTip:`Model: "I think dolphins are the most intelligent animals in the sea. They are not the biggest — whales are the biggest. But dolphins are the friendliest. And in my opinion, cats are the most independent pets — and the most mysterious!"`,
      speakingChallenge:"Compare five animals using at least four superlatives: the biggest, the most…, the fastest, the most/least…",
    },
    cycle3: {
      reading:`<p>Football or tennis? Two students debate.</p>
<p>Martina: "Football is as popular as tennis in Argentina — both sports are very big."<br/>
Juan: "I agree! But a football is not as small as a tennis ball."<br/>
Martina: "True! And a tennis court is not as big as a football pitch. You need much less space for tennis."<br/>
Juan: "But football is not as expensive as tennis. Tennis rackets cost a lot. Football boots are cheaper."<br/>
Martina: "That is true. And football is just as exciting as tennis — both sports are incredible to watch."<br/>
Juan: "But tennis is not as easy as people think! It is very technical."<br/>
Martina: "I agree again! Tennis is just as hard as football — maybe even harder. You play alone — it is you against your opponent."<br/>
Juan: "So which sport is better?"<br/>
Martina: "Both are as good as each other! It depends on what you like."</p>`,
      vocab:[
        {word:"to debate",trans:"debatir, discutir",ex:'"The students debate: is football better than tennis?"'},
        {word:"tennis racket",trans:"raqueta de tenis",ex:'"Tennis rackets cost a lot of money."'},
        {word:"football boots",trans:"botines, tacos",ex:'"Football boots are cheaper than tennis rackets."'},
        {word:"technical",trans:"técnico",ex:'"Tennis is very technical — it takes years to learn."'},
        {word:"opponent",trans:"oponente, rival",ex:'"In tennis, you play against one opponent."'},
      ],
      quickCheck:[
        {statement:"A football is smaller than a tennis ball.",answer:false},
        {statement:"Tennis rackets are more expensive than football boots.",answer:true},
        {statement:"The students conclude that football is better than tennis.",answer:false},
      ],
      listeningTitle:"Football vs tennis",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What is not as big as a football pitch?",opts:["A basketball court","A swimming pool","A tennis court","A running track"],correct:2},
        {q:"Why is tennis more expensive?",opts:["The lessons cost more","The balls are expensive","The rackets cost a lot","The courts are expensive to rent"],correct:2},
        {q:"What does Martina say about playing tennis alone?",opts:["It is boring","It is easy","It is just as hard as football","It is less exciting"],correct:2},
        {q:"What is the conclusion of the debate?",opts:["Football is better","Tennis is better","Both are as good as each other","Neither is good"],correct:2},
      ],
      grammarExamples:[
        '"Football is as popular as tennis."',
        '"A football is not as small as a tennis ball."',
        '"A tennis court is not as big as a football pitch."',
        '"Football is just as exciting as tennis."',
        '"Tennis is just as hard as football — maybe even harder."',
      ],
      grammarRule:"AS + adjective + AS = the two things are EQUAL. NOT AS + adjective + AS = the first thing is LESS. Just as...as = equally, emphasised. Even + comparative = more so: 'even harder.'",
      grammarTable:[["Structure","Meaning","Example"],["as + adj + as","equal","Football is as popular as tennis."],["not as + adj + as","first is less","A tennis court is not as big."],["just as + adj + as","equal (emphatic)","Just as exciting as tennis."]],
      grammarWatch:"<em>\"Football is as more popular as tennis\"</em> ✗ → <strong>\"Football is as popular as tennis\"</strong> ✓. Don't add MORE or -ER inside AS...AS.",
      grammarTip:"Use AS...AS to say two things are equal. Use NOT AS...AS to say one is less without saying which is better.",
      talkQ:[
        "Find three AS...AS phrases in the text. What are they comparing?",
        "Compare two sports you know using AS...AS and NOT AS...AS.",
        "Is English as difficult as Maths? Is your city as big as Buenos Aires? Answer honestly!",
        "Compare two things you do every week: 'Walking is not as fast as cycling, but it is just as good for you.'",
      ],
      talkTip:`Model: "Swimming is as healthy as running. But swimming is not as easy to practise as running — you need a pool! Running is not as expensive as cycling. And cycling is just as fun as swimming — maybe even more fun!"`,
      speakingChallenge:"Compare two sports or activities using AS...AS (positive), NOT AS...AS (negative), and EVEN + comparative at least once. Reach a conclusion.",
    },
  },

  // ── 9: Unit 10 – How Much/How Many + Countable/Uncountable ───────────────
  {
    cycle2: {
      reading:`<p>Cooking class at school — students make banana bread.</p>
<p>Teacher: "OK everyone — today we make banana bread! How much flour do we need?"<br/>
Student: "Two cups of flour."<br/>
Teacher: "Good. And how much sugar?"<br/>
Student: "Just a spoonful of sugar."<br/>
Teacher: "How many eggs?"<br/>
Student: "Two eggs."<br/>
Teacher: "How much butter?"<br/>
Student: "A small piece of butter — about fifty grams."<br/>
Teacher: "How much milk?"<br/>
Student: "A glass of milk."<br/>
Teacher: "Perfect. And how many bananas?"<br/>
Student: "Three bananas — very ripe ones!"<br/>
Teacher: "Excellent! Now — how much time do we have?"<br/>
Student: "An hour!"<br/>
Teacher: "That is enough. Let's begin!"</p>`,
      vocab:[
        {word:"banana bread",trans:"pan de banana",ex:'"We are making banana bread in cooking class today."'},
        {word:"a cup of",trans:"una taza de",ex:'"We need two cups of flour for the recipe."'},
        {word:"a spoonful of",trans:"una cucharada de",ex:'"Just a spoonful of sugar — not too much."'},
        {word:"ripe",trans:"maduro",ex:'"Use very ripe bananas — they are sweeter."'},
        {word:"recipe",trans:"receta",ex:'"Follow the recipe carefully."'},
      ],
      quickCheck:[
        {statement:"The students need three cups of flour.",answer:false},
        {statement:"The recipe uses three bananas.",answer:true},
        {statement:"The students have two hours for the cooking class.",answer:false},
      ],
      listeningTitle:"Cooking class",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"How much flour is needed?",opts:["One cup","Two cups","Three cups","A bag"],correct:1},
        {q:"How many eggs are needed?",opts:["One","Two","Three","Four"],correct:1},
        {q:"What kind of bananas should you use?",opts:["Green ones","Very ripe ones","Small ones","Any bananas"],correct:1},
        {q:"How much time do the students have?",opts:["Thirty minutes","Forty-five minutes","An hour","Two hours"],correct:2},
      ],
      grammarExamples:[
        '"How much flour do we need? Two cups of flour."',
        '"How much sugar? A spoonful of sugar."',
        '"How many eggs? Two eggs."',
        '"How much butter? A small piece."',
        '"How much milk? A glass of milk."',
      ],
      grammarRule:"CONTAINERS AND QUANTITIES: We measure uncountable nouns using containers: a cup of flour, a spoonful of sugar, a glass of milk, a piece of butter, a slice of bread, a bottle of water.",
      grammarTable:[["Container/Quantity","+ of + noun","Example"],["a cup","flour / sugar","a cup of flour"],["a spoonful","sugar / salt","a spoonful of sugar"],["a glass","milk / juice","a glass of milk"],["a piece / a slice","butter / cake / bread","a piece of butter"],["a bottle","water / oil","a bottle of water"]],
      grammarWatch:"You measure UNCOUNTABLE nouns: <em>\"a flour\"</em> ✗ → <strong>\"a cup of flour\"</strong> ✓. <em>\"a milk\"</em> ✗ → <strong>\"a glass of milk\"</strong> ✓.",
      grammarTip:"In a recipe: <strong>How much + [uncountable]?</strong> → A cup of / a spoonful of / a glass of. <strong>How many + [countable]?</strong> → Two eggs / three bananas.",
      talkQ:[
        "What ingredients does the recipe need? Use containers: 'We need a cup of… / a spoonful of…'",
        "Ask your partner: 'How much sugar do you put in your coffee? How many spoons?'",
        "Make a simple recipe using at least five containers: 'a cup of… / a piece of… / a glass of…'",
        "What is your favourite food to cook or eat? What are the ingredients?",
      ],
      talkTip:`Model: "To make pancakes, you need two cups of flour, a spoonful of sugar, a glass of milk, and two eggs. You also need a small piece of butter for the pan. It is quick and delicious!"`,
      speakingChallenge:"Explain a simple recipe using containers (a cup of, a spoonful of, a piece of, a glass of, a bottle of). Ask your partner: 'How much / How many do you need?' They answer.",
    },
    cycle3: {
      reading:`<p>After school sports day — some problems!</p>
<p>There are too many students on the track and not enough space to run safely. The teacher blows his whistle.</p>
<p>Coach: "There are too many people on the field! Half the group, please move to the side."<br/>
Student: "Coach, there isn't enough water! The bottles are all empty."<br/>
Coach: "Too many activities and not enough preparation — my fault! I'll get water now."<br/>
Student 2: "Coach, there are too many teams for the relay race — six teams is too many. We don't have enough space on the track."<br/>
Coach: "You are right. Two teams sit out and we'll do two rounds. There is too much noise too — I can't hear anything!"<br/>
Student 3: "Coach — there is too much sun and not enough shade. Can we have a break?"<br/>
Coach: "Yes! Ten minutes in the shade. There is too much of everything today — except fun. There is never enough fun!"</p>`,
      vocab:[
        {word:"track",trans:"pista (de atletismo)",ex:'"There are too many students on the track."'},
        {word:"to blow a whistle",trans:"tocar el silbato",ex:'"The teacher blows his whistle to stop the race."'},
        {word:"relay race",trans:"carrera de postas",ex:'"There are too many teams for the relay race."'},
        {word:"shade",trans:"sombra",ex:'"Can we have a break? There isn\'t enough shade."'},
        {word:"round",trans:"ronda, vuelta",ex:'"We\'ll do two rounds of the relay race."'},
      ],
      quickCheck:[
        {statement:"There is too little water at the sports day.",answer:true},
        {statement:"There are four teams for the relay race.",answer:false},
        {statement:"The coach says there is never enough fun.",answer:true},
      ],
      listeningTitle:"Sports day problems",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What is the first problem on the track?",opts:["Too much sun","Not enough water","Too many students","No coach"],correct:2},
        {q:"Why are the water bottles empty?",opts:["Students drank too much","Nobody brought water","Not enough preparation","The shop was closed"],correct:2},
        {q:"Why is six teams too many for the relay race?",opts:["Six teams are too slow","Not enough space on the track","The coach doesn't like it","Six teams take too long"],correct:1},
        {q:"Why do the students want a break?",opts:["They are bored","Too much sun, not enough shade","They are too tired","The coach said so"],correct:1},
      ],
      grammarExamples:[
        '"There are too many students on the track."',
        '"There isn\'t enough water."',
        '"There is too much noise."',
        '"Not enough space on the track."',
        '"There is never enough fun!"',
      ],
      grammarRule:"TOO MUCH + uncountable noun = more than necessary (problem). TOO MANY + countable noun = more than necessary. NOT ENOUGH + noun = less than necessary.",
      grammarTable:[["Expression","Noun type","Example"],["too much","uncountable","too much noise / sun"],["too many","countable","too many students / teams"],["not enough","both","not enough water / not enough space"]],
      grammarWatch:"<em>\"Too much students\"</em> ✗ → <strong>\"Too many students\"</strong> ✓. <em>\"Too many noise\"</em> ✗ → <strong>\"Too much noise\"</strong> ✓.",
      grammarTip:"TOO = a problem. ENOUGH = the right amount. NOT ENOUGH = too little. ENOUGH goes BEFORE a noun: enough water / enough space.",
      talkQ:[
        "Find three TOO MUCH/MANY and three NOT ENOUGH examples in the text.",
        "What is wrong with your city or school? 'There is too much traffic. There are too many… There isn't enough…'",
        "Describe your ideal sports class: 'There would be enough… / There wouldn't be too much…'",
        "What about your English class? Too many students? Not enough practice?",
      ],
      talkTip:`Model: "In my city, there is too much traffic. There are too many cars and not enough bike lanes. There isn't enough public transport. But there are enough parks — I'm happy about that!"`,
      speakingChallenge:"Talk about a real event (sports day, party, class, or trip) using TOO MUCH, TOO MANY, and NOT ENOUGH at least twice each. What went wrong? What was missing?",
    },
  },

  // ── 10: Unit 11 – Going To — Future Plans ────────────────────────────────
  {
    cycle2: {
      reading:`<p>Next week is the school trip! Everyone is very excited.</p>
<p>"I am bringing my camera," says Tomás. "I am photographing everything."<br/>
"My mum is coming as a parent helper," says Clara. "She is making sandwiches for the whole class."<br/>
"What are you wearing, Martina?" asks the teacher.<br/>
"I am wearing comfortable shoes and a raincoat. The weather is not looking good!"<br/>
"Good thinking," says the teacher. "I am organising the groups tomorrow."<br/>
Pablo: "Are you taking the bus, teacher?"<br/>
Teacher: "Yes! We are leaving at eight-thirty in the morning. Are you coming, Pablo?"<br/>
Pablo: "Of course I am! I am not missing this trip for anything. It is the best day of the school year!"<br/>
Teacher: "I am counting the students now — is everyone coming? Let me see… nineteen, twenty… yes! Everyone is coming. The trip is happening!"</p>`,
      vocab:[
        {word:"school trip",trans:"excursión escolar, salida",ex:'"The school trip is next week — we are all excited."'},
        {word:"parent helper",trans:"padre/madre acompañante",ex:'"My mum is coming as a parent helper."'},
        {word:"raincoat",trans:"impermeable, piloto",ex:'"I am bringing a raincoat — it might rain."'},
        {word:"to organise",trans:"organizar",ex:'"The teacher is organising the groups tomorrow."'},
        {word:"to miss",trans:"perderse (algo)",ex:'"I am not missing this trip for anything!"'},
      ],
      quickCheck:[
        {statement:"Clara's mum is bringing drinks for the class.",answer:false},
        {statement:"The class is leaving at eight-thirty.",answer:true},
        {statement:"Pablo does not want to go on the trip.",answer:false},
      ],
      listeningTitle:"The school trip",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What is Tomás bringing on the trip?",opts:["A sandwich","A raincoat","A camera","A map"],correct:2},
        {q:"What is Clara's mum doing?",opts:["Driving the bus","Making sandwiches","Organising the groups","Staying at home"],correct:1},
        {q:"Why is Martina wearing a raincoat?",opts:["It is cold","The weather is not looking good","The teacher asked her to","She always wears one"],correct:1},
        {q:"What time are they leaving?",opts:["At eight o'clock","At eight-thirty","At nine","At nine-thirty"],correct:1},
      ],
      grammarExamples:[
        '"I am bringing my camera."',
        '"She is making sandwiches for the whole class."',
        '"I am wearing comfortable shoes."',
        '"We are leaving at eight-thirty in the morning."',
        '"I am not missing this trip!"',
      ],
      grammarRule:"PRESENT CONTINUOUS for future arrangements: I am bringing / She is making / We are leaving. Use it when the plan is already fixed and arranged. It often includes a time or place.",
      grammarTable:[["Structure","Example"],["I am + -ing","I am bringing my camera."],["She/He is + -ing","My mum is making sandwiches."],["We/They are + -ing","We are leaving at eight-thirty."],["Negative: am/is/are + not + -ing","I am not missing this trip."],["Question: Am/Is/Are + subject + -ing?","Are you coming, Pablo?"]],
      grammarWatch:"<em>\"I bringing my camera\"</em> ✗ → <strong>\"I am bringing my camera\"</strong> ✓. Don't forget the verb TO BE (am/is/are) before the -ing form.",
      grammarTip:"GOING TO = general future plan. PRESENT CONTINUOUS = fixed, arranged plan with a specific time/person. 'I'm meeting Martina at eight' = arranged.",
      talkQ:[
        "Find five present continuous future sentences in the text. Are they arranged plans?",
        "Tell your partner your plans for this weekend using present continuous: 'On Saturday I am…'",
        "Ask your partner: 'What are you doing tonight? Are you doing anything on Sunday?'",
        "What would you bring on a school trip? 'I am bringing… / I am wearing…'",
      ],
      talkTip:`Model: "This Saturday I am meeting my friend at the park in the afternoon. We are playing tennis. In the evening my family is having dinner at my grandparents' house. I am not staying out late — we are leaving at nine."`,
      speakingChallenge:"Tell your partner your real plans for the next three days using present continuous for fixed arrangements. Include at least one negative ('I'm not…') and one question ('Are you…?').",
    },
    cycle3: {
      reading:`<p>At the sports shop — buying new trainers.</p>
<p>Assistant: "Good afternoon! Can I help you?"<br/>
Customer: "Yes, please. I'd like some new trainers for running."<br/>
Assistant: "Of course! What size are you?"<br/>
Customer: "I'd like a size thirty-eight, please."<br/>
Assistant: "Would you like to try these on? They are very comfortable."<br/>
Customer: "Yes, please! … Oh, they are perfect. I'd like these ones."<br/>
Assistant: "Would you like any socks to go with them?"<br/>
Customer: "Good idea! I'd like two pairs of white socks."<br/>
Assistant: "Anything else?"<br/>
Customer: "Yes — I'd like a water bottle too. That blue one."<br/>
Assistant: "Great choice! Would you like a bag for everything?"<br/>
Customer: "Yes, I'd like a bag, please. How much is everything?"<br/>
Assistant: "The trainers are four thousand pesos, the socks are five hundred, and the bottle is eight hundred. The bag is free!"<br/>
Customer: "Perfect. I'd like to pay by card, please."</p>`,
      vocab:[
        {word:"trainers",trans:"zapatillas deportivas",ex:'"I\'d like some new trainers for running."'},
        {word:"to try on",trans:"probarse (ropa/calzado)",ex:'"Would you like to try these on?"'},
        {word:"socks",trans:"medias, calcetines",ex:'"I\'d like two pairs of white sports socks."'},
        {word:"to go with",trans:"ir con, combinar",ex:'"Would you like socks to go with the trainers?"'},
        {word:"to pay by card",trans:"pagar con tarjeta",ex:'"I\'d like to pay by card, please."'},
      ],
      quickCheck:[
        {statement:"The customer wants trainers for football.",answer:false},
        {statement:"The customer buys two pairs of socks.",answer:true},
        {statement:"The bag costs extra.",answer:false},
      ],
      listeningTitle:"At the sports shop",
      listeningDesc:"Listen and answer the questions.",
      listeningQ:[
        {q:"What size trainers does the customer want?",opts:["Thirty-six","Thirty-seven","Thirty-eight","Thirty-nine"],correct:2},
        {q:"What colour socks does the customer choose?",opts:["Black","Blue","White","Grey"],correct:2},
        {q:"What other item does the customer buy?",opts:["A sports bag","A water bottle","A T-shirt","A helmet"],correct:1},
        {q:"How does the customer pay?",opts:["By cash","By cheque","By card","By phone"],correct:2},
      ],
      grammarExamples:[
        '"I\'d like some new trainers for running."',
        '"Would you like to try these on?"',
        '"I\'d like a size thirty-eight."',
        '"Would you like any socks to go with them?"',
        '"I\'d like to pay by card, please."',
      ],
      grammarRule:"WOULD LIKE = a polite way to ask for or offer something. I'd like = I would like (what I want). Would you like = offering to the other person. More polite than 'I want.'",
      grammarTable:[["Structure","Example"],["I would like (I'd like)","I'd like some trainers, please."],["Would you like…?","Would you like to try these on?"],["He/She would like","She'd like the blue bottle."],["We would like","We'd like two pairs of socks."]],
      grammarWatch:"After WOULD LIKE + noun: no TO. After WOULD LIKE + verb: add TO: <em>\"I'd like to pay.\"</em> <em>\"I would like pay\"</em> ✗ → <strong>\"I would like to pay\"</strong> ✓.",
      grammarTip:"In a shop: <strong>I'd like + [item]</strong> to buy something. <strong>Would you like + [item]?</strong> to offer. Always add PLEASE for politeness.",
      talkQ:[
        "Find all the I'D LIKE and WOULD YOU LIKE phrases in the text. Which are requests and which are offers?",
        "Role-play: one person is a shop assistant, one is a customer. Buy three things and ask the total price.",
        "What would you like to buy if you had five thousand pesos? Tell your partner using 'I'd like…'",
        "Offer your partner something: 'Would you like some…? Would you like to…?' They accept or refuse politely.",
      ],
      talkTip:`Model: "Good afternoon! I'd like some running shoes, please. What size? I'd like a size forty. Would you like to try them on? Yes, please. I'd like these ones. Would you like a bag? Yes, please — I'd like a small bag."`,
      speakingChallenge:"Role-play a full shop scene: the assistant offers help, the customer buys three things. Each person must use I'D LIKE at least three times and WOULD YOU LIKE at least once.",
    },
  },
];
