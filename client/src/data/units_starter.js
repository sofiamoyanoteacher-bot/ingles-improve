// Improve Starter — A1–A2 program content (11 units)
// NARRATOR_GENDER indexed by unit position (0–10)
export const NARRATOR_GENDER = ['female','male','female','male','female','female','male','female','male','female','male'];

export const MONTHS = [
  { label: 'Month 1 — My everyday life', color: 'from-sky/20 to-sky/5' },
  { label: 'Month 2 — Work and habits', color: 'from-mag/15 to-mag/5' },
  { label: 'Month 3 — My world', color: 'from-green-400/15 to-green-400/5' },
  { label: 'Month 4 — Abilities and places', color: 'from-yellow-400/15 to-yellow-400/5' },
  { label: 'Month 5 — Shopping and future', color: 'from-purple-400/15 to-purple-400/5' },
];

export const UNITS = [
  // ─── UNIT 01 ────────────────────────────────────────────────────────────────
  {
    num:"01", title:"Hello, World! — First Conversations", grammar:"Verb To Be + Subject Pronouns", month:1,
    gameType:"matching", unitImageSeed:"greetings",
    reading:`<p>My name is Sofia. I am twenty-five years old. I am from Argentina. I am a teacher.</p>
<p>This is my friend Lucas. He is thirty years old. He is a doctor. He is very kind.</p>
<p>Sofia and Lucas meet for the first time at a café in Buenos Aires.</p>
<p>Sofia: "Hello! My name is Sofia. Nice to meet you."<br/>
Lucas: "Hello, Sofia! I am Lucas. Nice to meet you too."<br/>
Sofia: "Are you from Buenos Aires?"<br/>
Lucas: "Yes, I am! And you?"<br/>
Sofia: "I am from Córdoba, but I live here now."<br/>
Lucas: "Great! Welcome to the city."</p>
<p>They have a coffee and talk for a long time. It is a very good first meeting.</p>`,
    vocab:[
      {word:"hello",trans:"a friendly greeting when you meet someone",ex:'"Hello! My name is Sofia."'},
      {word:"nice to meet you",trans:"a polite phrase for first meetings",ex:'"Nice to meet you! Are you from here?"'},
      {word:"my name is",trans:"how you introduce yourself",ex:'"My name is Lucas. I am a doctor."'},
      {word:"I am from",trans:"tells where you are from",ex:'"I am from Argentina."'},
      {word:"please",trans:"a polite word when you ask for something",ex:'"One coffee, please."'},
      {word:"thank you",trans:"what you say when someone helps you",ex:'"Thank you for the coffee!"'},
      {word:"sorry",trans:"what you say when you make a mistake",ex:'"Sorry, I do not understand."'},
      {word:"goodbye",trans:"what you say when you leave",ex:'"Goodbye! See you tomorrow!"'},
    ],
    grammarExamples:[
      '"I am Sofia."',
      '"He is thirty years old."',
      '"She is a teacher."',
      '"We are from Argentina."',
      '"Are you from Buenos Aires?"',
    ],
    grammarRule:"We use the verb TO BE (am / is / are) to talk about names, age, jobs, and where we are from. It is one of the most important verbs in English.",
    grammarTable:[
      ["Subject","To Be","Example"],
      ["I","am","I am Sofia."],
      ["He / She / It","is","He is a doctor."],
      ["You / We / They","are","They are friends."],
    ],
    grammarWatch:"Questions: flip the subject and verb — <strong>Are you</strong> from here? / <strong>Is he</strong> a teacher? Negatives: add <strong>not</strong> — I am <strong>not</strong> from here. She is <strong>not</strong> a nurse.",
    grammarTip:"Short answers: \"Are you from Argentina?\" → <strong>Yes, I am.</strong> / <strong>No, I'm not.</strong>",
    listeningTitle:"First meeting at the café",
    listeningDesc:"Listen to Sofia and Lucas meeting for the first time and answer the questions.",
    listeningQ:[
      {q:"How old is Sofia?",opts:["Twenty years old","Twenty-five years old","Thirty years old","Twenty-two years old"],correct:1},
      {q:"What is Lucas's job?",opts:["A teacher","A chef","A doctor","An engineer"],correct:2},
      {q:"Where is Sofia from?",opts:["Buenos Aires","Rosario","Córdoba","Mendoza"],correct:2},
      {q:"What do they drink at the café?",opts:["Tea","Juice","Water","Coffee"],correct:3},
    ],
    talkQ:[
      "What is your name? Where are you from?",
      "How old are you? What is your job?",
      "What do you usually say when you meet someone for the first time?",
      "Are you shy or outgoing when you meet new people? Why?",
      "Tell me about a friend. Who is he/she? What is his/her job?",
    ],
    talkTip:'Model: "My name is Ana. I am thirty years old. I am from Rosario. I am a nurse. When I meet new people I say: Hello, nice to meet you!"',
    hwTask:"Write 5 sentences about yourself: your name, age, city, job, and one thing you like. Example: 'My name is Marcos. I am thirty-one years old. I am from Mendoza. I am an accountant. I like football.'",
    warmupQuestions:[
      "How do you say your name and age in English?",
      "What is the verb 'to be' in the sentence: 'She ___ a doctor'?",
      "How do you ask someone's name in English?",
    ],
    quickCheck:[
      {statement:"'I am' is used with He and She.",answer:false},
      {statement:"'Nice to meet you' is a polite greeting for first meetings.",answer:true},
      {statement:"In the story, Lucas and Sofia meet at a restaurant.",answer:false},
    ],
    speakingChallenge:"1-minute challenge: Introduce yourself in English. Say your name, age, where you are from, and your job. Then describe one friend or family member.",
  },

  // ─── UNIT 02 ────────────────────────────────────────────────────────────────
  {
    num:"02", title:"This is My Family", grammar:"Possessive Adjectives + This / That / These / Those", month:1,
    gameType:"matching", unitImageSeed:"family",
    reading:`<p>My name is Ana. I want to show you my family.</p>
<p>This is my mother. Her name is Elena. She is fifty years old. She is a nurse. This is my father. His name is Roberto. He is fifty-three years old. He is an engineer.</p>
<p>That is my brother over there. His name is Pablo. He is twenty years old. He is a student. Those are his books on the table.</p>
<p>This is my grandmother. Her name is Rosa. She is seventy-eight years old. She is very funny and very kind. We love her very much.</p>
<p>These are my cousins, Lucia and Mateo. Their mother is my aunt. Her name is Silvia. They are thirteen and fifteen years old.</p>
<p>My family is big, but we are very close. We eat together every Sunday.</p>`,
    vocab:[
      {word:"mother",trans:"the woman who is your parent",ex:'"My mother is a nurse."'},
      {word:"father",trans:"the man who is your parent",ex:'"My father is an engineer."'},
      {word:"brother",trans:"a male sibling",ex:'"My brother is twenty years old."'},
      {word:"sister",trans:"a female sibling",ex:'"Her sister lives in Córdoba."'},
      {word:"grandmother",trans:"your mother's or father's mother",ex:'"My grandmother is very funny."'},
      {word:"cousin",trans:"the child of your aunt or uncle",ex:'"My cousins live in Rosario."'},
      {word:"close",trans:"with a strong and loving relationship",ex:'"We are a very close family."'},
      {word:"together",trans:"with each other at the same time",ex:'"We eat together every Sunday."'},
    ],
    grammarExamples:[
      '"This is my mother."',
      '"Her name is Elena."',
      '"His name is Pablo."',
      '"Those are his books."',
      '"Their mother is my aunt."',
    ],
    grammarRule:"Possessive adjectives (my, your, his, her, our, their) show who something belongs to. This / that refer to one thing (near / far). These / those refer to many things (near / far).",
    grammarTable:[
      ["Subject","Possessive Adj.","Example"],
      ["I","my","my mother"],
      ["you","your","your brother"],
      ["he","his","his name"],
      ["she","her","her cousin"],
      ["we","our","our family"],
      ["they","their","their books"],
    ],
    grammarWatch:"Don't mix up <strong>this/that</strong> (singular) and <strong>these/those</strong> (plural). ✗ <em>These is my book.</em> → ✓ <strong>This is my book.</strong>",
    grammarTip:"<strong>This/These</strong> = near you. <strong>That/Those</strong> = far from you. \"This is my phone.\" (in my hand) vs. \"That is my bag.\" (across the room.)",
    listeningTitle:"Ana's family photo",
    listeningDesc:"Listen to Ana describe her family and answer the questions.",
    listeningQ:[
      {q:"What is Ana's mother's job?",opts:["A teacher","An engineer","A nurse","A chef"],correct:2},
      {q:"How old is Ana's brother Pablo?",opts:["Fifteen","Eighteen","Twenty","Twenty-five"],correct:2},
      {q:"How old is Ana's grandmother Rosa?",opts:["Sixty-eight","Seventy-two","Seventy-eight","Eighty"],correct:2},
      {q:"When does the family eat together?",opts:["Every Saturday","Every Sunday","Every Friday","Every day"],correct:1},
    ],
    talkQ:[
      "Describe one person in your family. Who is he/she?",
      "Is your family big or small?",
      "Do you have brothers or sisters? Tell me about them.",
      "Who is the funniest person in your family? Why?",
      "Does your family spend a lot of time together? What do you do?",
    ],
    talkTip:'Model: "This is my family. My father\'s name is Carlos. He is fifty years old. He is a teacher. My mother\'s name is Marta. She is a nurse. We are very close."',
    hwTask:"Draw or find a photo of your family. Write 6–8 sentences describing the people: name, age, job, and one interesting fact about each person.",
    warmupQuestions:[
      "What is the difference between 'his' and 'her'?",
      "When do you use 'this' and when do you use 'that'?",
      "How do you say 'nuestra familia' in English?",
    ],
    quickCheck:[
      {statement:"'His' is used for female subjects.",answer:false},
      {statement:"'These' is the plural of 'this'.",answer:true},
      {statement:"Ana's family eats together every Saturday.",answer:false},
    ],
    speakingChallenge:"2-minute challenge: Describe your family using possessive adjectives and this/that/these/those. Show a photo if you have one.",
  },

  // ─── UNIT 03 ────────────────────────────────────────────────────────────────
  {
    num:"03", title:"My Daily Routine", grammar:"Simple Present (I / You / We / They)", month:1,
    gameType:"wordsearch", unitImageSeed:"routine",
    reading:`<p>My name is Carla. I have a very busy day, every day!</p>
<p>I wake up at seven o'clock every morning. I wash my face and I brush my teeth. Then I eat breakfast. I usually have toast and orange juice. Sometimes I have eggs.</p>
<p>I go to work at eight thirty. I take the bus. The trip takes about twenty minutes. I work in an office. I start work at nine o'clock.</p>
<p>At twelve thirty, I have lunch with my colleagues. We usually go to a small restaurant near the office. We talk and we laugh a lot.</p>
<p>I finish work at six o'clock. I come home and I cook dinner. After dinner, I watch TV or I read a book. I go to bed at ten thirty.</p>
<p>My routine is simple, but I like it. Every day is a new day!</p>`,
    vocab:[
      {word:"wake up",trans:"to stop sleeping and open your eyes",ex:'"I wake up at seven every morning."'},
      {word:"have breakfast",trans:"to eat your first meal of the day",ex:'"We have breakfast at eight o\'clock."'},
      {word:"go to work",trans:"to travel to your job",ex:'"She goes to work by bus."'},
      {word:"have lunch",trans:"to eat your midday meal",ex:'"I have lunch at twelve thirty."'},
      {word:"come home",trans:"to return to your house",ex:'"I come home at six in the evening."'},
      {word:"cook dinner",trans:"to prepare the evening meal",ex:'"He cooks dinner for the family."'},
      {word:"watch TV",trans:"to look at programs on television",ex:'"They watch TV after dinner."'},
      {word:"go to bed",trans:"to get into bed to sleep",ex:'"I go to bed at ten thirty."'},
    ],
    grammarExamples:[
      '"I wake up at seven o\'clock."',
      '"I eat breakfast every morning."',
      '"We go to a restaurant for lunch."',
      '"They talk and laugh a lot."',
      '"You take the bus to work."',
    ],
    grammarRule:"The simple present describes daily routines, habits, and facts. With I / You / We / They, we use the base form of the verb. No changes needed!",
    grammarTable:[
      ["Subject","Verb","Example"],
      ["I","wake","I wake up at seven."],
      ["You","eat","You eat breakfast."],
      ["We","have","We have lunch together."],
      ["They","go","They go to work by bus."],
    ],
    grammarWatch:"Questions: use <strong>Do</strong> + subject + verb. <strong>Do you</strong> eat breakfast? <strong>Do they</strong> take the bus? Negatives: <strong>I don't</strong> eat breakfast. <strong>They don't</strong> take the bus.",
    grammarTip:"Time words for routines: <strong>every day, always, usually, sometimes, never, in the morning, at night, on weekdays.</strong>",
    listeningTitle:"Carla's busy day",
    listeningDesc:"Listen to Carla describe her daily routine and answer the questions.",
    listeningQ:[
      {q:"What time does Carla wake up?",opts:["Six o'clock","Seven o'clock","Eight o'clock","Seven thirty"],correct:1},
      {q:"What does Carla usually have for breakfast?",opts:["Eggs and coffee","Fruit and milk","Toast and orange juice","Cereal and tea"],correct:2},
      {q:"How does Carla get to work?",opts:["By car","By train","On foot","By bus"],correct:3},
      {q:"What time does Carla finish work?",opts:["Five o'clock","Six o'clock","Seven o'clock","Six thirty"],correct:1},
    ],
    talkQ:[
      "What time do you wake up on weekdays? And on weekends?",
      "What do you usually have for breakfast?",
      "How do you get to work or school?",
      "What do you do in the evening?",
      "Is your daily routine similar to Carla's or very different?",
    ],
    talkTip:'Model: "I wake up at six thirty. I have breakfast — usually coffee and bread. I take the bus to work at seven thirty. I come home at five. In the evening I cook and then I watch TV. I go to bed at ten."',
    hwTask:"Write 8 sentences about your daily routine. Use time expressions (at, in the morning, every day, usually). Describe from when you wake up to when you go to bed.",
    warmupQuestions:[
      "What verb follows 'I' in the simple present — wake or wakes?",
      "How do you make a question with 'go'? Example: '___ you go to work by bus?'",
      "Name three things Carla does before she leaves for work.",
    ],
    quickCheck:[
      {statement:"Carla takes the train to work.",answer:false},
      {statement:"Carla has lunch with her colleagues.",answer:true},
      {statement:"Carla goes to bed at eleven o'clock.",answer:false},
    ],
    speakingChallenge:"2-minute challenge: Describe your morning routine from the moment you wake up. Use at least 6 different verbs and time expressions.",
  },

  // ─── UNIT 04 ────────────────────────────────────────────────────────────────
  {
    num:"04", title:"I Work and Study", grammar:"Simple Present (He / She / It) — 3rd Person -s", month:2,
    gameType:"wordsearch", unitImageSeed:"jobs",
    reading:`<p>Let me tell you about three of my friends. They all have very different jobs.</p>
<p>Maria is a teacher. She works at a primary school in the city center. She teaches thirty children every day. She loves her job. She arrives at school at seven forty-five. She always brings a big bag full of books and pencils.</p>
<p>Pedro is a chef. He works at a busy restaurant. He starts work at four in the afternoon and finishes at midnight. He cooks many different dishes. He loves to experiment with new flavors. He says: "Cooking is my art."</p>
<p>Diana is a nurse. She works at the public hospital. She starts her shift at seven in the morning. She checks patients, gives medicine, and helps the doctors. She works very hard. She says: "I love helping people."</p>
<p>All three of my friends work hard and love what they do. They are a big inspiration to me!</p>`,
    vocab:[
      {word:"teacher",trans:"a person who teaches at school",ex:'"Maria is a teacher. She loves her job."'},
      {word:"chef",trans:"a professional cook in a restaurant",ex:'"Pedro is a chef. He cooks amazing food."'},
      {word:"nurse",trans:"a healthcare worker who helps patients",ex:'"Diana is a nurse. She works at the hospital."'},
      {word:"arrives",trans:"gets to a place (3rd person -s)",ex:'"She arrives at school at seven forty-five."'},
      {word:"teaches",trans:"shows or explains something to students",ex:'"She teaches thirty children every day."'},
      {word:"shift",trans:"a period of work time at a job",ex:'"Her shift starts at seven in the morning."'},
      {word:"experiment",trans:"to try something new to see what happens",ex:'"He loves to experiment with new recipes."'},
      {word:"inspiration",trans:"someone or something that motivates you",ex:'"She is a big inspiration to her students."'},
    ],
    grammarExamples:[
      '"She works at a primary school."',
      '"He cooks many different dishes."',
      '"She loves her job."',
      '"He starts work at four in the afternoon."',
      '"She checks patients and gives medicine."',
    ],
    grammarRule:"With he / she / it in the simple present, we add -s (or -es) to the verb. This is the only change in the simple present — it only happens with the 3rd person singular.",
    grammarTable:[
      ["Verb","I / You / We / They","He / She / It"],
      ["work","work","works"],
      ["teach","teach","teaches"],
      ["cook","cook","cooks"],
      ["arrive","arrive","arrives"],
      ["finish","finish","finishes"],
    ],
    grammarWatch:"Spelling rules: verbs ending in -sh, -ch, -x, -o, -ss add <strong>-es</strong> (teaches, finishes, goes). Verbs ending in consonant + y change to <strong>-ies</strong> (study → studies).",
    grammarTip:"Negatives: <strong>doesn't</strong> + base verb. \"She <strong>doesn't work</strong> at night.\" Questions: <strong>Does</strong> + he/she/it + base verb? \"<strong>Does he cook</strong> Italian food?\"",
    listeningTitle:"Three friends, three jobs",
    listeningDesc:"Listen to the descriptions of Maria, Pedro, and Diana and answer the questions.",
    listeningQ:[
      {q:"Where does Maria work?",opts:["A hospital","A university","A primary school","An office"],correct:2},
      {q:"What time does Pedro start work?",opts:["In the morning","At noon","At four in the afternoon","At eight in the evening"],correct:2},
      {q:"What does Diana do at the hospital?",opts:["She teaches patients","She checks patients and gives medicine","She cooks for patients","She cleans the rooms"],correct:1},
      {q:"What does Pedro say about cooking?",opts:['"It is my science"','"It is my life"','"It is my art"','"It is my hobby"'],correct:2},
    ],
    talkQ:[
      "What do you do for work? Where do you work?",
      "What time do you start and finish work?",
      "Does your friend or family member have an interesting job? Describe it.",
      "What job do you think is the most important in society? Why?",
      "If you could have any job in the world, what would it be?",
    ],
    talkTip:'Model: "My friend Carla is a doctor. She works at the public hospital. She starts work at eight in the morning. She checks patients and talks to them. She finishes at six. She loves her job very much."',
    hwTask:"Write a paragraph (6–8 sentences) about someone you know — their name, their job, where they work, and what they do every day. Use he/she and the 3rd person -s.",
    warmupQuestions:[
      "What do you add to a verb with 'she' in the simple present?",
      "How do you say 'ella trabaja' in English?",
      "Make a question: 'Pedro / cook / Italian food' → ___?",
    ],
    quickCheck:[
      {statement:"We say 'she work' in the simple present.",answer:false},
      {statement:"Pedro is a chef who works at a restaurant.",answer:true},
      {statement:"Diana starts her shift at four in the afternoon.",answer:false},
    ],
    speakingChallenge:"2-minute challenge: Describe a typical workday for someone you know (friend, family member, or a famous person). Use he/she and the 3rd person -s.",
  },

  // ─── UNIT 05 ────────────────────────────────────────────────────────────────
  {
    num:"05", title:"Do You Like Coffee?", grammar:"Simple Present — Questions and Negatives", month:2,
    gameType:"matching", unitImageSeed:"food",
    reading:`<p>Everyone has different tastes. Some people love coffee. Other people hate it. I think food and drink are a big part of who we are.</p>
<p>My friend Tomás loves coffee. He drinks three cups a day. He doesn't like tea at all. He says tea is too weak. But he loves food. He eats everything!</p>
<p>"Do you eat meat?" I ask him.<br/>
"Yes, I do. I love a good steak," he says.<br/>
"Do you eat vegetables?"<br/>
"Sometimes. I don't eat salad very often, but I like potatoes."</p>
<p>My sister is very different. She doesn't eat meat. She is a vegetarian. She loves vegetables, fruit, and pasta. She doesn't drink coffee either. She prefers herbal tea.</p>
<p>"Does your sister like spicy food?" Tomás asks me.<br/>
"No, she doesn't. She doesn't like anything spicy," I say.</p>
<p>We are all different, and that is what makes life interesting!</p>`,
    vocab:[
      {word:"love",trans:"to like something very very much",ex:'"I love chocolate ice cream!"'},
      {word:"hate",trans:"to dislike something very strongly",ex:'"He hates getting up early."'},
      {word:"prefer",trans:"to like one thing more than another",ex:'"She prefers tea to coffee."'},
      {word:"taste",trans:"the flavor of food or your personal preferences",ex:'"We all have different tastes."'},
      {word:"vegetarian",trans:"a person who does not eat meat",ex:'"My sister is a vegetarian."'},
      {word:"spicy",trans:"food with a hot, strong flavor",ex:'"I love spicy food!"'},
      {word:"steak",trans:"a thick piece of beef/meat",ex:'"He orders a steak every Saturday."'},
      {word:"weak",trans:"not strong in flavor or strength",ex:'"This coffee is too weak for me."'},
    ],
    grammarExamples:[
      '"Do you eat meat?" "Yes, I do."',
      '"Does your sister like spicy food?" "No, she doesn\'t."',
      '"I don\'t eat salad very often."',
      '"She doesn\'t drink coffee."',
      '"He doesn\'t like tea at all."',
    ],
    grammarRule:"To make questions in the simple present, use DO (I/you/we/they) or DOES (he/she/it) + the base verb. For negatives, use DON'T or DOESN'T + the base verb.",
    grammarTable:[
      ["","Positive","Question","Negative"],
      ["I/You/We/They","I eat meat.","Do you eat meat?","I don't eat meat."],
      ["He/She/It","She likes coffee.","Does she like coffee?","She doesn't like coffee."],
    ],
    grammarWatch:"In questions and negatives with <strong>does/doesn't</strong>, the main verb goes back to the base form (no -s): \"Does she <strong>like</strong>\" — NOT \"Does she <strong>likes</strong>.\"",
    grammarTip:"Short answers: \"Do you eat meat?\" → <strong>Yes, I do.</strong> / <strong>No, I don't.</strong> \"Does she drink coffee?\" → <strong>Yes, she does.</strong> / <strong>No, she doesn't.</strong>",
    listeningTitle:"Different tastes",
    listeningDesc:"Listen to the conversation about food and drink preferences and answer the questions.",
    listeningQ:[
      {q:"How many cups of coffee does Tomás drink per day?",opts:["One","Two","Three","Four"],correct:2},
      {q:"Why doesn't Tomás like tea?",opts:["It's too sweet","It's too cold","It's too weak","It's too bitter"],correct:2},
      {q:"Why doesn't the narrator's sister eat meat?",opts:["She is allergic","She is a vegetarian","She doesn't like the flavor","She is on a diet"],correct:1},
      {q:"Does the narrator's sister like spicy food?",opts:["Yes, she loves it","Yes, sometimes","No, she doesn't","The text doesn't say"],correct:2},
    ],
    talkQ:[
      "Do you drink coffee or tea? How do you take it?",
      "What food do you love? What food do you hate?",
      "Are you a vegetarian, or do you eat meat?",
      "Does anyone in your family have special food preferences?",
      "What is your favorite meal of the day and why?",
    ],
    talkTip:'Model: "I love coffee. I drink two cups every day. I don\'t like tea very much. I eat everything — I am not a vegetarian. I love pasta and pizza. I don\'t eat very spicy food because it upsets my stomach."',
    hwTask:"Write 8 sentences about your food preferences. Use love, like, don't like, hate, and prefer. Include what you eat for breakfast, lunch, and dinner on a typical day.",
    warmupQuestions:[
      "How do you make a question with 'she'? Complete: '___ she like spicy food?'",
      "What is the negative of 'He eats meat every day'?",
      "Short answer: 'Do you drink coffee?' → 'Yes, ___ ___.'",
    ],
    quickCheck:[
      {statement:"Tomás loves tea and drinks it every day.",answer:false},
      {statement:"The narrator's sister is a vegetarian.",answer:true},
      {statement:"We say 'Does she likes' in English questions.",answer:false},
    ],
    speakingChallenge:"2-minute challenge: Interview your teacher (or imagine you're interviewing a famous person). Ask 5 questions about their food preferences using Do/Does.",
  },

  // ─── UNIT 06 ────────────────────────────────────────────────────────────────
  {
    num:"06", title:"Where Is the Cat?", grammar:"Prepositions of Place + There is / There are", month:3,
    gameType:"wordsearch", unitImageSeed:"house",
    reading:`<p>Welcome to my apartment! I am so happy to show you around.</p>
<p>When you come in, there is a small entrance hall. On the left, there is the living room. In the living room, there is a sofa, a coffee table, and a big television. My cat, Luna, is usually on the sofa. There is a bookshelf next to the window. There are many books on it — I love reading.</p>
<p>The kitchen is next to the living room. There is a table in the center of the kitchen. There are four chairs around the table. The refrigerator is between the sink and the stove.</p>
<p>My bedroom is at the end of the corridor. My bed is near the window. There is a desk in the corner. My laptop is on the desk. There is a wardrobe next to the door. My cat Luna loves to sleep under the bed!</p>
<p>There are two bathrooms. One is inside my bedroom. The other is in the corridor.</p>
<p>I love my apartment. It is small, but it has everything I need.</p>`,
    vocab:[
      {word:"living room",trans:"the main room for relaxing and watching TV",ex:'"The sofa is in the living room."'},
      {word:"kitchen",trans:"the room where you cook food",ex:'"The table is in the center of the kitchen."'},
      {word:"bedroom",trans:"the room where you sleep",ex:'"My bedroom is at the end of the corridor."'},
      {word:"next to",trans:"very close beside something",ex:'"The bookshelf is next to the window."'},
      {word:"between",trans:"in the middle of two things",ex:'"The refrigerator is between the sink and the stove."'},
      {word:"in the corner",trans:"in the place where two walls meet",ex:'"There is a desk in the corner."'},
      {word:"under",trans:"below something",ex:'"The cat sleeps under the bed."'},
      {word:"wardrobe",trans:"a large piece of furniture to keep clothes in",ex:'"My wardrobe is next to the door."'},
    ],
    grammarExamples:[
      '"There is a sofa in the living room."',
      '"There are four chairs around the table."',
      '"The cat is on the sofa."',
      '"The desk is in the corner."',
      '"The refrigerator is between the sink and the stove."',
    ],
    grammarRule:"We use THERE IS (singular) and THERE ARE (plural) to say that something exists in a place. Prepositions of place (in, on, under, next to, between, in front of, behind) tell us WHERE things are.",
    grammarTable:[
      ["Preposition","Meaning","Example"],
      ["in","inside something","The cat is in the box."],
      ["on","on the surface of","The book is on the table."],
      ["under","below something","The shoes are under the bed."],
      ["next to","very close beside","The lamp is next to the sofa."],
      ["between","in the middle of two things","The chair is between the desks."],
      ["in front of","before / facing","The cat is in front of the TV."],
      ["behind","at the back of","The bags are behind the door."],
    ],
    grammarWatch:"<strong>There is</strong> = singular / uncountable: \"There is a sofa.\" \"There is water.\" <strong>There are</strong> = plural: \"There are four chairs.\" Don't say \"There is books.\"",
    grammarTip:"Questions: <strong>Is there</strong> a bathroom? → Yes, there is. / No, there isn't. <strong>Are there</strong> any chairs? → Yes, there are. / No, there aren't.",
    listeningTitle:"A tour of the apartment",
    listeningDesc:"Listen to the description of the apartment and answer the questions.",
    listeningQ:[
      {q:"Where is the living room?",opts:["On the right of the entrance","At the end of the corridor","On the left of the entrance","Next to the bedroom"],correct:2},
      {q:"Where does the cat Luna usually sleep?",opts:["On the bed","On the sofa","Under the desk","In the wardrobe"],correct:1},
      {q:"Where is the refrigerator?",opts:["Next to the window","Between the sink and the stove","In the living room","Behind the door"],correct:1},
      {q:"How many bathrooms are there?",opts:["One","Two","Three","Four"],correct:1},
    ],
    talkQ:[
      "Describe the room you are in right now. What is in it? Where are things?",
      "Where is your bedroom? Can you describe it?",
      "Is there a garden or balcony at your home?",
      "What is your favorite room in your home? Why?",
      "Are there any plants or animals in your home?",
    ],
    talkTip:'Model: "I live in an apartment. In the living room there is a sofa and a TV. The kitchen is next to the living room. There is a table and four chairs. My bedroom is small. The bed is near the window and the wardrobe is next to the door."',
    hwTask:"Draw a simple floor plan of your home or your bedroom. Then write 8 sentences describing it using 'there is / there are' and prepositions of place.",
    warmupQuestions:[
      "What do you say to describe something that exists in a place? 'There ___ a sofa.'",
      "Use a preposition to complete: 'The cat is ___ the bed.' (below)",
      "What is the question form? '___ there a bathroom in your apartment?'",
    ],
    quickCheck:[
      {statement:"Luna the cat sleeps on the sofa.",answer:true},
      {statement:"We say 'There are a sofa' when there is one sofa.",answer:false},
      {statement:"The narrator's desk is in the corner of the bedroom.",answer:true},
    ],
    speakingChallenge:"2-minute challenge: Describe your bedroom or your favorite room. Say where at least 6 different objects are, using prepositions of place.",
  },

  // ─── UNIT 07 ────────────────────────────────────────────────────────────────
  {
    num:"07", title:"What Time Is It?", grammar:"Telling the Time + Prepositions At / On / In", month:3,
    gameType:"matching", unitImageSeed:"clock",
    reading:`<p>Time is very important in our lives. Let me tell you about my schedule on a typical Monday.</p>
<p>I wake up at seven o'clock in the morning. I have breakfast at quarter past seven. My bus leaves at half past eight, so I need to be at the bus stop on time.</p>
<p>I arrive at work at quarter to nine — that is eight forty-five. My first meeting is at nine o'clock sharp. I work all morning and have a coffee break at eleven.</p>
<p>Lunch is at one o'clock in the afternoon. On Mondays, I usually eat with my team. In the afternoon, I have two more meetings — one at three o'clock and one at five o'clock.</p>
<p>I leave the office at six o'clock in the evening. I get home at half past six. In the evening, I cook dinner, relax a little, and go to bed at eleven o'clock at night.</p>
<p>On weekends, everything is different! On Saturdays I sleep until ten and I don't follow any schedule. I love the freedom!</p>`,
    vocab:[
      {word:"o'clock",trans:"exactly on the hour",ex:'"The meeting is at nine o\'clock."'},
      {word:"quarter past",trans:"fifteen minutes after the hour",ex:'"I have breakfast at quarter past seven."'},
      {word:"half past",trans:"thirty minutes after the hour",ex:'"The bus leaves at half past eight."'},
      {word:"quarter to",trans:"fifteen minutes before the hour",ex:'"I arrive at quarter to nine."'},
      {word:"sharp",trans:"exactly on time, not a minute late",ex:'"The meeting starts at nine o\'clock sharp."'},
      {word:"schedule",trans:"a plan that shows what you do at what time",ex:'"I have a very busy schedule on Mondays."'},
      {word:"break",trans:"a short pause from work or study",ex:'"We have a coffee break at eleven."'},
      {word:"freedom",trans:"the state of being free to do what you want",ex:'"On weekends, I love the freedom to relax."'},
    ],
    grammarExamples:[
      '"I wake up at seven o\'clock."',
      '"My bus leaves at half past eight."',
      '"On Mondays, I eat with my team."',
      '"In the morning, I have a meeting."',
      '"In the evening, I cook dinner."',
    ],
    grammarRule:"AT is used for specific times: at 9 o'clock, at half past three. ON is used for days: on Monday, on weekends. IN is used for parts of the day (in the morning, in the afternoon) and longer periods (in January, in 2024).",
    grammarTable:[
      ["Preposition","Use","Examples"],
      ["AT","specific times","at 9 o'clock · at half past six · at midnight"],
      ["ON","days and dates","on Monday · on weekends · on 5 March"],
      ["IN","parts of day / months / years","in the morning · in January · in 2024"],
    ],
    grammarWatch:"We say <strong>at night</strong> (not 'in the night'). We say <strong>in the morning / in the afternoon / in the evening</strong>. No preposition for 'today', 'tomorrow', 'yesterday', 'this week'.",
    grammarTip:"Telling the time:<br/><strong>9:00</strong> → nine o'clock<br/><strong>9:15</strong> → quarter past nine<br/><strong>9:30</strong> → half past nine<br/><strong>9:45</strong> → quarter to ten",
    listeningTitle:"A typical Monday",
    listeningDesc:"Listen to the description of a Monday schedule and answer the questions.",
    listeningQ:[
      {q:"What time does the narrator wake up?",opts:["Half past six","Seven o'clock","Quarter past seven","Eight o'clock"],correct:1},
      {q:"What time does the first meeting start?",opts:["Quarter to nine","Nine o'clock sharp","Half past nine","Ten o'clock"],correct:1},
      {q:"What time is lunch?",opts:["Twelve o'clock","Half past twelve","One o'clock","Two o'clock"],correct:2},
      {q:"What does the narrator do on Saturdays?",opts:["Works from home","Goes to the gym","Sleeps until ten and relaxes","Has a big meeting"],correct:2},
    ],
    talkQ:[
      "What time do you usually wake up on weekdays? And on weekends?",
      "What do you do in the morning / in the afternoon / in the evening?",
      "What is your favorite time of day? Why?",
      "Are you a morning person or a night person?",
      "Do you follow a strict schedule or do you prefer to be flexible?",
    ],
    talkTip:'Model: "I wake up at six thirty in the morning. I start work at eight o\'clock. I have lunch at one o\'clock. In the evening, I go to the gym at half past seven. I go to bed at eleven o\'clock. On Saturdays I sleep until ten!"',
    hwTask:"Write your ideal schedule for a perfect day. Include 8 activities with specific times. Use 'at', 'in the morning/afternoon/evening', and time expressions like 'quarter past' and 'half past'.",
    warmupQuestions:[
      "How do you say 3:30 in English?",
      "Which preposition? 'I have class ___ Monday.'",
      "Complete: 'The meeting is ___ nine o\'clock ___ the morning.'",
    ],
    quickCheck:[
      {statement:"'Quarter to nine' means 8:45.",answer:true},
      {statement:"We say 'in Monday' when talking about the day.",answer:false},
      {statement:"The narrator has a coffee break at eleven o'clock.",answer:true},
    ],
    speakingChallenge:"2-minute challenge: Tell your teacher your schedule for tomorrow. Say at least 6 activities with times, using at/on/in correctly.",
  },

  // ─── UNIT 08 ────────────────────────────────────────────────────────────────
  {
    num:"08", title:"Can You Swim?", grammar:"Modal Verb CAN — Ability and Permission", month:4,
    gameType:"matching", unitImageSeed:"abilities",
    reading:`<p>People are amazing! Everyone can do different things. Some abilities are natural — we are born with them. Others we learn over time.</p>
<p>My friend Gabriel can play the guitar very well. He can also sing. But he can't swim! He is afraid of water. He tried to learn when he was a child, but he never did.</p>
<p>"Can you cook?" I ask him.<br/>
"Yes, I can! I can make pasta and some soups. But I can't bake. Baking is too complicated for me."</p>
<p>My cousin Laura is the opposite. She can swim very fast. She can also draw beautifully — she is an artist. She can speak three languages: Spanish, English, and French. She can't drive, though. She lives in the city and doesn't need a car.</p>
<p>And what about me? I can run quite fast. I can cook well. I can't play any instrument, but I love music. I can speak English — not perfectly, but I am learning!</p>
<p>The important thing is: you can always learn a new skill. It is never too late!</p>`,
    vocab:[
      {word:"swim",trans:"to move through water using your body",ex:'"Can you swim? I can swim very fast."'},
      {word:"sing",trans:"to make music with your voice",ex:'"He can sing beautifully."'},
      {word:"drive",trans:"to operate a car or vehicle",ex:'"She can\'t drive. She uses public transport."'},
      {word:"draw",trans:"to make a picture with a pencil or pen",ex:'"My cousin can draw beautifully."'},
      {word:"bake",trans:"to cook food in the oven",ex:'"I can\'t bake — bread always comes out wrong!"'},
      {word:"instrument",trans:"an object used to make music",ex:'"Can you play a musical instrument?"'},
      {word:"skill",trans:"an ability you learn through practice",ex:'"You can always learn a new skill."'},
      {word:"afraid",trans:"feeling fear or worry about something",ex:'"He is afraid of water."'},
    ],
    grammarExamples:[
      '"Gabriel can play the guitar very well."',
      '"He can\'t swim."',
      '"Can you cook?" "Yes, I can."',
      '"She can speak three languages."',
      '"I can run quite fast."',
    ],
    grammarRule:"CAN is a modal verb used to talk about ability (things you are able to do) or permission (things you are allowed to do). It is followed by the BASE FORM of the verb — no -s, no -ing.",
    grammarTable:[
      ["","Positive","Negative","Question"],
      ["All subjects","I/You/He/She can swim","I/You/He/She can't swim","Can I/you/he/she swim?"],
      ["","(same form for all)","(can + not = can't)","Short answer: Yes, I can / No, I can't"],
    ],
    grammarWatch:"CAN never changes form. No -s for he/she: ✗ <em>\"She cans swim.\"</em> → ✓ <strong>\"She can swim.\"</strong> Can is always followed by the BASE verb: ✗ <em>\"He can to swim.\"</em> → ✓ <strong>\"He can swim.\"</strong>",
    grammarTip:"CAN for permission: <strong>Can I open the window?</strong> = Is it OK if I open the window? <strong>You can sit here.</strong> = You are allowed to sit here.",
    listeningTitle:"Different abilities",
    listeningDesc:"Listen to the story about Gabriel, Laura, and the narrator's abilities and answer the questions.",
    listeningQ:[
      {q:"What can Gabriel do well?",opts:["Swim and cook","Play guitar and sing","Drive and bake","Draw and speak languages"],correct:1},
      {q:"Why can't Gabriel swim?",opts:["He never had lessons","He is too busy","He is afraid of water","He doesn't like pools"],correct:2},
      {q:"How many languages can Laura speak?",opts:["One","Two","Three","Four"],correct:2},
      {q:"What can the narrator NOT do?",opts:["Run fast","Cook well","Play an instrument","Speak English"],correct:2},
    ],
    talkQ:[
      "What can you do well? Name three things.",
      "What can't you do? Is there something you want to learn?",
      "Can you cook? What dishes can you make?",
      "Can you speak any other languages? How many?",
      "What is a skill you learned as an adult? How did you learn it?",
    ],
    talkTip:'Model: "I can speak Spanish and some English. I can cook — I make great pasta. I can drive. But I can\'t swim very well, and I can\'t play any instrument. I want to learn to play the piano!"',
    hwTask:"Write 10 sentences about your abilities. Write 5 things you can do and 5 things you can't do. Include one ability you want to learn and explain why.",
    warmupQuestions:[
      "What is wrong with this sentence: 'She cans drive'? How do you fix it?",
      "Make a question: 'you / speak / French?' → '___?'",
      "Short answer: 'Can you swim?' → 'No, ___ ___.'",
    ],
    quickCheck:[
      {statement:"Gabriel can play the guitar but he can't swim.",answer:true},
      {statement:"We say 'He cans cook' in English.",answer:false},
      {statement:"Laura can speak Spanish, English, and French.",answer:true},
    ],
    speakingChallenge:"2-minute challenge: Play a guessing game — describe 3 things you can do and 2 things you can't do. Can your teacher guess which are true?",
  },

  // ─── UNIT 09 ────────────────────────────────────────────────────────────────
  {
    num:"09", title:"My Favorite City", grammar:"Comparative Adjectives", month:4,
    gameType:"wordsearch", unitImageSeed:"city",
    reading:`<p>I love traveling. Every city has something special. Today I want to compare two cities that I know well: Buenos Aires and a small town called Villa General Belgrano, in Córdoba.</p>
<p>Buenos Aires is bigger than Villa General Belgrano. It is more crowded and noisier. Life in the capital is faster. But is it better? That depends on you!</p>
<p>Villa General Belgrano is quieter and more peaceful. The air is cleaner. The streets are safer at night. And people are friendlier — everyone says hello when they pass you on the street.</p>
<p>Buenos Aires is more expensive than Villa General Belgrano. Restaurants, transport, and rent are all higher in the city. But Buenos Aires also has more options — more restaurants, more theaters, more museums, more parks.</p>
<p>I asked ten friends: "Which city is better to live in?"<br/>
Six said Buenos Aires. Four said a small town. <br/>
The six who chose Buenos Aires said: "It is more exciting and more dynamic."<br/>
The four who chose the small town said: "It is more relaxing and more beautiful."</p>
<p>I think both are wonderful. I love the energy of the big city, but I also need peace and quiet sometimes. What about you?</p>`,
    vocab:[
      {word:"crowded",trans:"full of many people",ex:'"The city center is very crowded on weekends."'},
      {word:"noisy",trans:"with a lot of loud sounds",ex:'"The street is too noisy to sleep."'},
      {word:"peaceful",trans:"calm and quiet, with no problems or noise",ex:'"The town is very peaceful in the morning."'},
      {word:"clean",trans:"without dirt or pollution",ex:'"The air is cleaner in the countryside."'},
      {word:"safe",trans:"not dangerous, protected from harm",ex:'"I feel safe walking here at night."'},
      {word:"friendly",trans:"kind and pleasant to other people",ex:'"The people in small towns are very friendly."'},
      {word:"exciting",trans:"causing enthusiasm and energy",ex:'"The city is exciting — there is always something to do."'},
      {word:"dynamic",trans:"energetic and always changing",ex:'"Buenos Aires is a very dynamic city."'},
    ],
    grammarExamples:[
      '"Buenos Aires is bigger than Villa General Belgrano."',
      '"Life in the capital is faster."',
      '"The air is cleaner in the small town."',
      '"Buenos Aires is more expensive than a small town."',
      '"People in the town are friendlier."',
    ],
    grammarRule:"We use comparative adjectives to compare two things. Short adjectives (1 syllable): add -er + than. Long adjectives (2+ syllables): use more + adjective + than. Irregular: good → better, bad → worse.",
    grammarTable:[
      ["Adjective","Comparative","Example"],
      ["big (short)","bigger","Buenos Aires is bigger than the town."],
      ["fast (short)","faster","Life is faster in the city."],
      ["noisy (2 syl.)","noisier","The city is noisier than the town."],
      ["expensive (long)","more expensive","The city is more expensive."],
      ["good (irregular)","better","Which city is better?"],
      ["bad (irregular)","worse","The traffic is worse in the city."],
    ],
    grammarWatch:"Double the final consonant for short adjectives ending in consonant-vowel-consonant: big → <strong>bigger</strong>, hot → <strong>hotter</strong>. Adjectives ending in -y: change y to i + er: noisy → <strong>noisier</strong>, friendly → <strong>friendlier</strong>.",
    grammarTip:"Always use <strong>than</strong> after the comparative when comparing two things: \"Buenos Aires is bigger <strong>than</strong> Villa General Belgrano.\" You can also say: \"It is <strong>much</strong> bigger\" for strong comparisons.",
    listeningTitle:"Two cities, two lifestyles",
    listeningDesc:"Listen to the comparison between Buenos Aires and Villa General Belgrano and answer the questions.",
    listeningQ:[
      {q:"Which city is bigger?",opts:["Villa General Belgrano","Both are the same size","Buenos Aires","The text doesn't say"],correct:2},
      {q:"Which city is more expensive?",opts:["Villa General Belgrano","Both are the same","Buenos Aires","Neither"],correct:2},
      {q:"What did the people who prefer the small town say about it?",opts:["More exciting and dynamic","More relaxing and beautiful","Bigger and better","Cheaper and safer"],correct:1},
      {q:"How many of the narrator's friends prefer the small town?",opts:["Two","Three","Four","Six"],correct:2},
    ],
    talkQ:[
      "Do you prefer to live in a big city or a small town? Why?",
      "Is your city bigger or smaller than Buenos Aires?",
      "Is your neighborhood noisy or quiet? Is it safe?",
      "Compare your city now with how it was 10 years ago.",
      "What is the best thing about the city or town where you live?",
    ],
    talkTip:'Model: "I live in Rosario. It is smaller than Buenos Aires, but it is also less crowded and friendlier. The streets are cleaner. But Buenos Aires has more museums and restaurants. I think Rosario is better for families."',
    hwTask:"Write a paragraph (8–10 sentences) comparing two places you know — two cities, two neighborhoods, or two countries. Use at least 6 different comparative adjectives.",
    warmupQuestions:[
      "What is the comparative of 'small'?",
      "How do you form the comparative of 'expensive'?",
      "Complete: 'This coffee is ___ than that one.' (good → irregular)",
    ],
    quickCheck:[
      {statement:"Buenos Aires is quieter and more peaceful than the small town.",answer:false},
      {statement:"The comparative of 'good' is 'gooder'.",answer:false},
      {statement:"Buenos Aires is more expensive than Villa General Belgrano.",answer:true},
    ],
    speakingChallenge:"2-minute challenge: Compare your city or neighborhood with another one you know. Use at least 5 comparative adjectives and explain your preference.",
  },

  // ─── UNIT 10 ────────────────────────────────────────────────────────────────
  {
    num:"10", title:"A Day at the Market", grammar:"How Much / How Many + Countable and Uncountable Nouns", month:5,
    gameType:"crossword", unitImageSeed:"market",
    reading:`<p>Every Saturday morning, I go to the local market. It is one of my favorite things to do. The market is colorful, noisy, and full of delicious smells.</p>
<p>I always start at the fruit and vegetable stand. "How much are the tomatoes?" I ask. "Three pesos per kilo," says the seller. I buy two kilos. Then I look at the apples. "How many apples do you want?" the seller asks. "Six, please," I say.</p>
<p>At the bread stand, I always ask: "How much bread do I need?" I think about it. My family is small — just three people. One loaf is enough.</p>
<p>I also buy milk, eggs, and cheese. The seller counts the eggs: "How many eggs do you want?" "A dozen, please," I say. "How much is the cheese?" "Fifty pesos per 100 grams," she says.</p>
<p>I spend about two hours at the market. I talk to the sellers, I try new foods, and I always buy something I didn't plan to buy!</p>
<p>At the end, my bag is full and my wallet is lighter. But I feel happy. The market is not just a place to shop — it is a place to connect with people and enjoy life.</p>`,
    vocab:[
      {word:"kilo",trans:"a unit of weight equal to 1000 grams",ex:'"I buy two kilos of tomatoes every week."'},
      {word:"loaf",trans:"a whole piece of bread, baked together",ex:'"I need one loaf of bread."'},
      {word:"dozen",trans:"a group of twelve",ex:'"Can I have a dozen eggs, please?"'},
      {word:"seller",trans:"a person who sells things at a market or shop",ex:'"The seller is very friendly and helpful."'},
      {word:"wallet",trans:"a small flat case for carrying money and cards",ex:'"My wallet is lighter after the market."'},
      {word:"stand",trans:"a table or small shop in a market",ex:'"I always start at the fruit and vegetable stand."'},
      {word:"colorful",trans:"having many bright and different colors",ex:'"The market is colorful and lively."'},
      {word:"connect",trans:"to form a relationship or bond with others",ex:'"The market is a great place to connect with people."'},
    ],
    grammarExamples:[
      '"How much are the tomatoes?"',
      '"How many apples do you want?"',
      '"How much bread do I need?"',
      '"How many eggs do you want?"',
      '"I buy two kilos of tomatoes."',
    ],
    grammarRule:"Use HOW MANY with countable nouns (things you can count: apples, eggs, chairs). Use HOW MUCH with uncountable nouns (things you can't count: bread, milk, water, money) or to ask about price.",
    grammarTable:[
      ["","Countable","Uncountable"],
      ["Examples","apple, egg, kilo, person","bread, milk, water, money, cheese"],
      ["How many / much?","How many apples?","How much milk?"],
      ["a / an","an apple · a kilo","— (no article)"],
      ["some / any","some apples · any eggs?","some milk · any bread?"],
      ["a few / a little","a few tomatoes","a little cheese"],
    ],
    grammarWatch:"Uncountable nouns don't use 'a/an' and don't have a plural form: ✗ <em>a bread / two milks / some waters</em> → ✓ <strong>a loaf of bread / two cartons of milk / some water</strong>.",
    grammarTip:"Common uncountable nouns at the market: <strong>bread, milk, cheese, butter, rice, sugar, water, meat, juice, coffee, flour, honey.</strong> You can measure them: a <strong>loaf of</strong> bread, a <strong>carton of</strong> milk, a <strong>kilo of</strong> cheese.",
    listeningTitle:"At the Saturday market",
    listeningDesc:"Listen to the market story and answer the questions.",
    listeningQ:[
      {q:"What does the narrator buy first at the market?",opts:["Bread and cheese","Milk and eggs","Tomatoes and apples","Meat and vegetables"],correct:2},
      {q:"How many eggs does the narrator buy?",opts:["Six","Eight","Twelve (a dozen)","Twenty"],correct:2},
      {q:"How long does the narrator spend at the market?",opts:["One hour","About two hours","Three hours","Half an hour"],correct:1},
      {q:"According to the narrator, what is the market for — besides shopping?",opts:["Exercise","Connecting with people and enjoying life","Finding new recipes","Saving money"],correct:1},
    ],
    talkQ:[
      "Do you go to the market? What do you usually buy?",
      "Do you prefer the market or the supermarket? Why?",
      "How much do you usually spend when you go shopping?",
      "How many people do you cook for at home?",
      "What is your favorite food to buy fresh? Why?",
    ],
    talkTip:'Model: "I go to the supermarket every week. I usually buy milk, bread, eggs, and vegetables. I don\'t often go to the market, but I love it when I do. I usually buy too many things and spend too much money!"',
    hwTask:"Write a shopping list for a week's groceries for your family. Include at least 10 items. Then write 6 sentences using 'how much' or 'how many' about the things on your list.",
    warmupQuestions:[
      "Is 'milk' countable or uncountable?",
      "Complete: '___ many eggs do you need?'",
      "How do you measure uncountable nouns? Example: '___ ___ of bread'.",
    ],
    quickCheck:[
      {statement:"We say 'How many milk?' when asking about milk.",answer:false},
      {statement:"'A dozen' means twelve.",answer:true},
      {statement:"We can use 'a few' with uncountable nouns.",answer:false},
    ],
    speakingChallenge:"2-minute challenge: You are at the market. Your teacher is the seller. Buy at least 5 items — ask prices and quantities using How much / How many.",
  },

  // ─── UNIT 11 ────────────────────────────────────────────────────────────────
  {
    num:"11", title:"My Weekend Plans", grammar:"Going To — Future Plans", month:5,
    gameType:"crossword", unitImageSeed:"future",
    reading:`<p>The weekend is almost here! I am so excited. I have lots of plans.</p>
<p>On Saturday morning, I am going to sleep late. I'm not going to set an alarm. Then I am going to have a big, slow breakfast with my family — fresh bread, eggs, and good coffee. Wonderful!</p>
<p>In the afternoon, my husband and I are going to visit his parents. They live about an hour away, in a small town. His mother is going to cook a traditional asado. We are going to eat a lot!</p>
<p>On Saturday evening, we are going to meet some friends at a café. We are going to talk, laugh, and have a great time. I am not going to go to bed late because I have plans for Sunday too.</p>
<p>On Sunday, I am going to go to the local market in the morning. Then I am going to clean the house — not my favorite activity, but it has to be done! In the afternoon, I am going to sit in the garden and read my new book.</p>
<p>On Sunday evening, my family is going to watch a movie together. We are going to make popcorn and choose the movie together.</p>
<p>Does that sound like a perfect weekend? I think so! What are you going to do?</p>`,
    vocab:[
      {word:"plan",trans:"something you decide to do in the future",ex:'"I have lots of plans for the weekend."'},
      {word:"alarm",trans:"a device that wakes you up at a set time",ex:'"On Saturdays I\'m not going to set an alarm."'},
      {word:"asado",trans:"a traditional Argentine barbecue",ex:'"His mother is going to cook a delicious asado."'},
      {word:"traditional",trans:"done in the same way as in the past",ex:'"We are going to eat a traditional meal."'},
      {word:"activity",trans:"something that you do, especially for fun",ex:'"Cleaning is not my favorite activity."'},
      {word:"popcorn",trans:"a snack made from heated corn kernels",ex:'"We are going to make popcorn for the movie."'},
      {word:"excited",trans:"feeling happy and enthusiastic about something",ex:'"I am so excited about the weekend!"'},
      {word:"wonderful",trans:"very good, beautiful, or impressive",ex:'"A big breakfast on Saturday is wonderful."'},
    ],
    grammarExamples:[
      '"I am going to sleep late on Saturday."',
      '"We are going to visit his parents."',
      '"She is going to cook an asado."',
      '"I\'m not going to set an alarm."',
      '"What are you going to do this weekend?"',
    ],
    grammarRule:"We use GOING TO to talk about plans and intentions for the future — things we have already decided to do. Structure: Subject + am/is/are + going to + base verb.",
    grammarTable:[
      ["Subject","Form","Example"],
      ["I","am going to","I am going to sleep late."],
      ["He / She / It","is going to","She is going to cook."],
      ["You / We / They","are going to","We are going to visit them."],
      ["I (negative)","am not going to","I'm not going to set an alarm."],
      ["He (question)","Is he going to...?","Is he going to come?"],
    ],
    grammarWatch:"Going to is for <strong>plans and intentions</strong> (already decided). We use <strong>will</strong> for spontaneous decisions or predictions: \"Oh! I'll help you with that.\" (decided NOW) vs. \"I'm going to help you.\" (decided before).",
    grammarTip:"Common question: <strong>\"What are you going to do this weekend?\"</strong> Answer: <strong>\"I'm going to...\"</strong> You can also ask: <strong>\"Are you going to...?\"</strong> → <strong>\"Yes, I am.\"</strong> / <strong>\"No, I'm not.\"</strong>",
    listeningTitle:"A perfect weekend",
    listeningDesc:"Listen to the description of the weekend plans and answer the questions.",
    listeningQ:[
      {q:"What is the narrator NOT going to do on Saturday morning?",opts:["Sleep late","Have breakfast","Set an alarm","Drink coffee"],correct:2},
      {q:"Where are the narrator and her husband going to visit on Saturday afternoon?",opts:["A restaurant","A café","His parents in a small town","A market"],correct:2},
      {q:"What is the narrator going to do on Sunday in the garden?",opts:["Sleep","Cook","Watch a movie","Read a book"],correct:3},
      {q:"What are they going to do on Sunday evening?",opts:["Go to a café","Watch a movie with popcorn","Cook an asado","Visit friends"],correct:1},
    ],
    talkQ:[
      "What are you going to do this weekend?",
      "Are you going to cook or eat out this weekend?",
      "Are you going to see your family or friends? Tell me about it.",
      "What are you going to do next vacation?",
      "Is there something you are going to start doing soon — a new habit, class, or project?",
    ],
    talkTip:'Model: "This weekend I am going to stay home on Saturday. I am going to clean the house in the morning and then relax in the afternoon. On Sunday I am going to visit my parents. We are going to have lunch together. I\'m not going to work at all — I need a rest!"',
    hwTask:"Write about your plans for next weekend (real or imaginary). Include at least 8 sentences using 'going to'. Use positive, negative, and question forms.",
    warmupQuestions:[
      "What structure do we use for plans? Complete: 'I ___ ___ to visit my parents.'",
      "What is the negative? 'She ___ ___ ___ go to work tomorrow.'",
      "Make a question: 'you / go / to the market / on Saturday?' → '___ ___ ___ to go...?'",
    ],
    quickCheck:[
      {statement:"'Going to' is used for spontaneous decisions made at the moment of speaking.",answer:false},
      {statement:"The narrator is going to visit her husband's parents on Saturday.",answer:true},
      {statement:"We say 'She are going to cook' for the third person.",answer:false},
    ],
    speakingChallenge:"2-minute challenge: Tell your teacher about 5 plans you have for the next week — things you are going to do and things you are not going to do.",
  },
];
