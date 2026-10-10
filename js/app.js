/* MindLift — © 2026 Yacine Belalia. All rights reserved. */
(function () {
'use strict';

const LESSONS = [];   // filled from data/lessons.json at start-up

/* ================= Static content ================= */
const CATS = ['science', 'history', 'body', 'tech', 'money', 'work'];
const CAT_NAME = {
  en: { science: 'Science & Nature', history: 'History & Culture', body: 'Health & the Body', tech: 'Technology & AI', money: 'Money & the Economy', work: 'Work & Communication' },
  fr: { science: 'Sciences et nature', history: 'Histoire et culture', body: 'Santé et corps humain', tech: 'Technologie et IA', money: 'Argent et économie', work: 'Travail et communication' }
};
const CAT_SHORT = {
  en: { science: 'Science', history: 'History', body: 'Body', tech: 'Tech & AI', money: 'Money', work: 'Work' },
  fr: { science: 'Sciences', history: 'Histoire', body: 'Corps', tech: 'Techno et IA', money: 'Argent', work: 'Travail' }
};
const DISCLOSURE = {
  en: 'Original lesson written for MindLift with AI assistance, built from the linked sources.',
  fr: "Leçon originale écrite pour MindLift avec l'aide de l'IA, à partir des sources citées."
};
const EVIDENCE = {};   // filled from data/lessons.json
const EV_NOTE = {};    // filled from data/lessons.json

const T = {
  en: {
    today: 'Today', explore: 'Explore', you: 'You',
    morning: 'Good morning', afternoon: 'Good afternoon', evening: 'Good evening',
    todayTitle: 'Your MindLift for today', qotd: 'Question of the day',
    min: '{n} min', cards: '{n} cards', qs: '{n} questions', optQs: '{n} optional questions',
    start: 'Start', readAgain: 'Read again', save: 'Save for later', unsave: 'Remove from saved',
    readToday: 'You read today’s question.',
    thisWeek: 'This week', week0: 'A fresh week', week1: '1 day so far', weekN: '{n} days so far',
    earlier: 'Earlier this week', other: 'From other subjects', seeAll: 'See all', showLess: 'Show less',
    thatsToday: 'That’s today. A new question arrives tomorrow morning.',
    done: 'Done', searchShort: 'Search', search: 'Search questions and subjects', searchLabel: 'Search MindLift', clearSearch: 'Clear search',
    all: 'All', subjectFilter: 'Subject', sixSubjects: 'Six subjects', nQs: '{n} questions', nRead: '{n} read',
    past: 'Past questions', allN: 'All {n}', results1: '1 question', resultsN: '{n} questions',
    noResults: 'No questions match “{q}”.', searchNote: 'Searches titles, hooks and lesson text, in English and French.',
    coursesLater: 'Short courses come later', coursesLaterBody: 'They’ll link related questions into short series. For now, every question lives here.',
    yesterday: 'Yesterday',
    noAccount: 'Learning without an account', noAccountBody: 'Everything stays in this browser, on this device. Nothing is sent anywhere.',
    statRead: 'questions read', statSubjects: 'subjects', statSaved: 'saved',
    saved: 'Saved', emptySaved: 'Nothing saved yet', emptySavedBody: 'Tap the bookmark on any question to keep it here for later.', browse: 'Browse past questions',
    history: 'History', emptyHistory: 'Questions you finish will appear here.',
    subjectsLike: 'Subjects you like', edit: 'Edit', choose: 'Choose',
    noSubjects: 'None picked. Today’s question is the same for everyone; subjects only shape suggestions.',
    settings: 'Settings', back: 'Back', close: 'Close', closeLesson: 'Close lesson',
    welcomeTitle: 'You’re already curious.',
    voiceLabel: 'Narration voice', voiceNote: 'Who reads the lessons and articles when you listen.', voiceDefault: 'Default',
    v_ava: 'Ava', vd_ava: 'Warm and clear · English and French', v_leo: 'Leo', vd_leo: 'Calm and grounded · English (French lessons use Ava)', hearVoice: 'Hear {name}',
    listenArticle: 'Listen to the summary', voiceSoon: '{name}’s recordings are coming soon. For now you’ll hear the current voice.',
    youHi: 'Hi, {name}', youHiNone: 'Make MindLift yours', youSub: 'Voice: {voice} · {lang}', youSubNone: 'Add your name, pick a voice and set the mood.', prefsSaved: 'Saved.', saveBtn: 'Save', langName: 'English',
    obPages: 'Introduction pages', obPage: 'Page {i} of {n}', obStart: 'Show me around',
    wp0o: 'Welcome to MindLift', wp0t: 'You’re already curious.',
    wp0p: ['One fascinating question a day, answered in about 4 minutes.'],
    wp1o: 'Learn', wp1t: 'Why do we yawn? Why is the sky blue?',
    wp1p: ['Short cards, real sources, no fluff. A new question every morning.'],
    wp2o: 'Listen', wp2t: 'Let Ava or Leo read it to you',
    wp2p: ['Calm voices, soft lo-fi music. Perfect for the bus or your coffee break.'],
    wp3o: 'The news', wp3t: 'One great story a day',
    wp3p: ['A fresh article from the news, explained in a minute.'],
    wp4o: 'Just you', wp4t: 'Free. No account. No pressure.',
    wp4p: ['A quick game for fun, and everything stays on your phone.'],
    welcomeBody: 'One good question a day, answered in about four minutes, with the sources to back it up. No account needed.',
    startToday: 'Start today’s question', chooseFirst: 'Choose subjects first',
    welcomeFoot: 'In English or French. Your progress stays on this device.',
    language: 'Language', optional: 'Optional', interestsTitle: 'What are you curious about?',
    interestsBody: 'Pick a few subjects to shape your suggestions. Today’s question stays the same for everyone, and you can change this anytime.',
    continueN: 'Continue with {n} selected', cont: 'Continue', skip: 'Skip', surprise: 'Surprise me instead', saveChanges: 'Save',
    cardOf: 'Card {i} of {n}', next: 'Next', prevCard: 'Previous card', listen: 'Listen', stop: 'Stop', read: 'Read',
    lessonMode: 'Lesson mode', textSize: 'Text size', cardHint: 'Tap Next when you’re ready. Nothing moves on its own.',
    progress: 'Lesson progress',
    keyPoints: 'Key points', keepTitle: 'Three things worth keeping', meansForYou: 'What this means for you',
    checkYourself: 'Check yourself · 3', qOf: 'Question {i} of {n} · optional',
    correct: 'Correct.', notQuite: 'Not quite.', rightAnswer: 'Correct answer', yourAnswer: 'Your answer',
    nextQ: 'Next question', seeSources: 'See the sources', skipQs: 'Skip the questions',
    whereFrom: 'Where this came from', sources: 'Sources', howSure: 'How sure is this?',
    ev_established: 'Well established', ev_leading: 'Still debated', ev_early: 'Early evidence',
    evDefault: 'Standard knowledge, explained the same way by the sources above.',
    mistake: 'Spotted a mistake? Tell us', finish: 'Finish', newTab: 'opens in a new tab',
    doneToday: 'That’s today’s question.', doneOther: 'Question finished.', doneLine: 'A new question arrives tomorrow.',
    moreSame: 'More in this subject · optional', backToday: 'Done — back to Today',
    learning: 'Learning', interests: 'Interests', none: 'None', lessonFormat: 'Lesson format',
    lessonFormatNote: 'Listen plays a narrated recording of each card.',
    showWeek: 'Show weekly rhythm', showWeekNote: 'A quiet count of the days you learned this week. No streaks, no warnings.',
    display: 'Display', appearance: 'Appearance', system: 'System', light: 'Light', dark: 'Dark',
    smaller: 'Smaller text', defaultSize: 'Default text size', larger: 'Larger text',
    privacy: 'Privacy', knows: 'What MindLift knows about you',
    knowsBody: 'Your name (if you added one), language, subjects, saved questions, reading history and practice scores. It stays in this browser and is never sent anywhere.',
    clear: 'Clear learning history', clearTitle: 'Clear your learning history?',
    clearBody: 'This removes your history, weekly rhythm, saved questions and practice scores from this device. It can’t be undone.',
    clearYes: 'Clear history', cancel: 'Cancel', cleared: 'History cleared',
    about: 'About', howMade: 'How lessons are made', howMadeNote: 'Sources, AI use and fact-checking',
    howMadeP: [
      'Each lesson answers one question people often wonder about. It’s written for MindLift with AI assistance, using only the sources listed at the end of the lesson.',
      'Every lesson says how settled the science is: Well established, Still debated or Early evidence.',
      'The narration you hear with Listen is an AI voice reading the same text: Ava or Leo, made with Kokoro, a free open-source voice model. You choose the voice in Settings.',
      'Article summaries can be listened to as well. If a summary has no recording yet, your device’s own voice reads it.',
      'The background music is a set of original, calm lo-fi tracks composed for MindLift, played in a shuffled order.',
      'This is a beta. Each fact is still being re-checked against its sources by a person, so if something looks wrong, please report it.'
    ],
    report: 'Report a problem', reportBody: 'Describe what’s wrong, then copy the report and send it to the person who shared MindLift with you.',
    reportLabel: 'What’s wrong?', reportPh: 'For example: the date in card 2 looks wrong.',
    copy: 'Copy report', copied: 'Copied. Paste it into a message.', copyFail: 'Select the text below and copy it.',
    version: 'Version', versionVal: 'Beta · October 2026',
    savedToast: 'Saved for later', removedToast: 'Removed from saved',
    noVoice: 'The narration couldn’t load. Check your connection and try again.',
    practice: 'Practice', todaysPractice: 'Today’s practice', aboutShort: 'About', practiceMeta: 'Practice · {n} min',
    practiceHonest: 'These games are for practice and fun; they aren’t proven to improve memory or thinking in everyday life.',
    otherGames: 'Other games · optional', play: 'Play', playAgain: 'Play again', playedToday: 'Played today',
    g_y3: 'Yesterday in 3', g_cw: 'Colour-word', g_nm: 'Number memory',
    d_y3: 'Three quick questions on your last lesson.', d_cw: 'Tap the colour of the ink, not the word.', d_nm: 'Watch the digits, then type them back.',
    y3Locked: 'Opens the day after you read a lesson.', fromYesterday: 'From yesterday', fromDate: 'Lesson from {date}',
    howToPlay: 'How to play',
    y3r1: 'Three questions about this lesson. The answers are shuffled.', y3r2: 'Take your time. There’s no clock.',
    cwr1: 'A colour word appears, printed in a colour.', cwr2: 'Tap the colour of the ink. Ignore what the word says.', cwr3: '{n} words. Go at your own pace.',
    cwrLang: 'Some words are in French.', cwrMove: 'The buttons change places each time.',
    colourNote: 'This game relies on colour. If some colours are hard to tell apart, Number memory may suit you better.',
    levelOf: 'Level {n} of 4',
    nmr1: 'Digits appear one at a time.', nmr2f: 'Type them back in the same order.', nmr2b: 'Type them back in reverse, last one first.',
    nmr3: '{n} rounds. Get one right and the next is one digit longer.',
    startsAt: 'Starts at {n} digits', direction: 'Direction', forwards: 'Forwards', backwards: 'Backwards',
    backLocked: 'Backwards opens once you reach 6 digits.',
    closePractice: 'Close practice', practiceProgress: 'Practice progress', qOfPlain: 'Question {i} of {n}', seeResult: 'See how you did',
    inkPrompt: 'Tap the ink colour', trialOf: '{i} of {n}', watch: 'Watch', roundOf: 'Round {i} of {n}', nmCount: '{n} digits',
    typeThem: 'Type the {n} digits.', typeBack: 'Type the {n} digits, last one first.', digits: 'Digits', del: 'Delete', checkBtn: 'Check',
    nmRight: 'Right.', nmWrong: 'Not this time.', youTyped: 'You typed', itWas: 'It was', nmNext: 'Next round: {n} digits.', nextRound: 'Next round',
    practiceDone: 'Practice done.', greatRound: 'Nicely done.',
    sounds: 'Sounds', soundsNote: 'A soft chime for right answers and good rounds.', practiceFinish: 'Done',
    statRight: 'right', statAvg: 'average time', statLevel: 'level', statLongest: 'longest today', statBest: 'your best', statRounds: 'rounds right', statLast: 'last time',
    firstRound: 'Your first round. Next time, you’ll have your own score to compare with.',
    fastestYet: 'Your fastest yet at this level.', fasterThanLast: 'Faster than your last round at this level.', lastRoundAt: 'Your last round at this level: {s}.',
    newBest: 'A new personal best.', yourLongest: 'Your longest so far: {n} digits.', lastTimeLine: 'Last time: {s}.',
    ofN: '{n} of {of}', levelUp: 'Next time starts a little harder.', levelDown: 'Next time starts a little easier.', levelSame: 'Next time stays at this level.',
    nextStarts: 'Next time starts at {n} digits.', backOpen: 'Backwards is now open. You can choose it next time.',
    rereadLesson: 'Read it again', tryAnother: 'Try another · optional',
    notPlayed: 'Not played yet', lastTime: 'Last time: {s}', levelN: 'Level {n}', bestTime: 'best {s}', longest: 'Longest: {n} digits', longestBack: 'backwards: {n}', noFullYet: 'No full round yet',
    ownPast: 'Compared only with your own past rounds. No leaderboards, no streaks.',
    showPractice: 'Show daily practice', showPracticeNote: 'One short game on the Today screen, for practice and fun.',
    aboutPractice: 'About practice',
    aboutPracticeP: [
      'These games are for practice and fun; they aren’t proven to improve memory or thinking in everyday life.',
      'Large reviews of brain-training studies found that people get better at the games they practise, but there’s little evidence that this carries over to everyday life. That’s why we call them practice, not training.',
      'Yesterday in 3 is a little different: it asks about a lesson you’ve already read. Trying to recall what you learned, rather than rereading it, is one of the best-studied ways to remember it. It won’t train your memory in general.',
      'Your scores stay on this device and are only compared with your own past rounds. No leaderboards, no streaks.'
    ],
    introLead: 'One good question a day, answered in about four minutes, with the sources to back it up.',
    f1t: 'One question a day', f1d: 'A short lesson in a few cards, then three optional questions.',
    f2t: 'Read or listen', f2d: 'Every card is narrated, in English or French.',
    f3t: 'A little practice', f3d: 'A one-minute game each day, just for fun.',
    f4t: 'One article from the news', f4d: 'Summed up for you, with a link to the original.',
    noAccountLine: 'No account. Everything stays on this device.',
    makeItMine: 'Make it mine', skipStart: 'Skip and start today’s question',
    logoAlt: 'MindLift logo: a dot lifting off a line', madeBy: 'Made by Yacine Belalia', madeByLabel: 'Made by', rights: '© 2026 Yacine Belalia. All rights reserved.',
    setupOver: 'Make it yours', setupTitle: 'A few quick choices', setupBody: 'You can change any of this later in Settings.',
    nameLabel: 'What should we call you?', namePh: 'Your first name', nameNote: 'Optional. It stays on this device.', yourName: 'Your name',
    learnHow: 'How you like to learn',
    music: 'Lo-fi music', musicNote: 'Soft background music while you use the app.', musicBtn: 'Lo-fi music',
    musicVolume: 'Music volume', volQuiet: 'Quiet', volMedium: 'Medium', volFull: 'Full',
    musicFail: 'The music couldn’t load. Check your connection.',
    replayIntro: 'Show the introduction again',
    allSet: 'All set.', allSetName: 'All set, {name}.', greatRoundName: 'Nicely done, {name}.',
    letters: ['M', 'T', 'W', 'T', 'F', 'S', 'S'], learnedOn: 'learned', todayWord: 'today',
    articles: 'Articles', todaysRead: 'Today’s read', latestRead: 'Latest read', fromNews: 'From the news', photoBy: 'Photo: {s}', allArticles: 'All articles',
    articlesIntro: 'One article from the news each day, picked from the past few days and summed up in English and French.',
    notInYet: 'Today’s pick isn’t in yet. Here’s the most recent one.',
    readSummary: 'Read the summary', earlierPicks: 'Earlier picks', pickedFor: 'Picked for {d}', published: 'Published {d}',
    minRead: '{n} min read', whyRead: 'Why it’s interesting', fullArticle: 'The full article', readFull: 'Read the full article',
    orig_en: 'Article in English', orig_fr: 'Article in French', artDone: 'Read',
    artDisclosure: 'Summary written for MindLift with AI assistance, from the original article. The article itself belongs to its publisher.',
    howPicked: 'How articles are picked',
    howPickedBody: 'Each morning, MindLift looks through news from the past few days and picks one free-to-read article worth your time. You get a short summary here. The full story stays on the publisher’s site.',
    artLoading: 'Loading today’s article…',
    artEmptyTitle: 'The first article is on its way', artEmptyBody: 'A new article from the news arrives every morning. Check back soon.',
    closeArticle: 'Close article', artGone: 'This article is no longer available.'
  },
  fr: {
    today: 'Aujourd’hui', explore: 'Explorer', you: 'Vous',
    morning: 'Bonjour', afternoon: 'Bon après-midi', evening: 'Bonsoir',
    todayTitle: 'Votre MindLift du jour', qotd: 'Question du jour',
    min: '{n} min', cards: '{n} cartes', qs: '{n} questions', optQs: '{n} questions facultatives',
    start: 'Commencer', readAgain: 'Relire', save: 'Garder pour plus tard', unsave: 'Retirer des questions gardées',
    readToday: 'Vous avez lu la question du jour.',
    thisWeek: 'Cette semaine', week0: 'Nouvelle semaine', week1: '1 jour jusqu’ici', weekN: '{n} jours jusqu’ici',
    earlier: 'Plus tôt cette semaine', other: 'D’autres sujets', seeAll: 'Tout voir', showLess: 'Voir moins',
    thatsToday: 'C’est tout pour aujourd’hui. Une nouvelle question arrive demain matin.',
    done: 'Lue', searchShort: 'Rechercher', search: 'Chercher une question ou un sujet', searchLabel: 'Chercher dans MindLift', clearSearch: 'Effacer la recherche',
    all: 'Tout', subjectFilter: 'Sujet', sixSubjects: 'Six sujets', nQs: '{n} questions', nRead: '{n} lues',
    past: 'Questions passées', allN: 'Les {n}', results1: '1 question', resultsN: '{n} questions',
    noResults: 'Aucune question ne correspond à « {q} ».', searchNote: 'Cherche dans les titres, les accroches et le texte des leçons, en français et en anglais.',
    coursesLater: 'Les courts parcours viendront plus tard', coursesLaterBody: 'Ils relieront des questions apparentées en courtes séries. Pour l’instant, toutes les questions sont ici.',
    yesterday: 'Hier',
    noAccount: 'Apprendre sans compte', noAccountBody: 'Tout reste dans ce navigateur, sur cet appareil. Rien n’est envoyé ailleurs.',
    statRead: 'questions lues', statSubjects: 'sujets', statSaved: 'gardées',
    saved: 'Gardées', emptySaved: 'Rien de gardé pour l’instant', emptySavedBody: 'Touchez le signet d’une question pour la garder ici.', browse: 'Parcourir les questions',
    history: 'Historique', emptyHistory: 'Les questions que vous terminez apparaîtront ici.',
    subjectsLike: 'Vos sujets', edit: 'Modifier', choose: 'Choisir',
    noSubjects: 'Aucun sujet choisi. La question du jour est la même pour tous; les sujets orientent seulement les suggestions.',
    settings: 'Paramètres', back: 'Retour', close: 'Fermer', closeLesson: 'Fermer la leçon',
    welcomeTitle: 'La curiosité, vous l’avez déjà.',
    voiceLabel: 'Voix de narration', voiceNote: 'La voix qui lit les leçons et les articles quand vous écoutez.', voiceDefault: 'Par défaut',
    v_ava: 'Ava', vd_ava: 'Chaleureuse et claire · français et anglais', v_leo: 'Leo', vd_leo: 'Calme et posé · anglais seulement (Ava lit en français)', hearVoice: 'Écouter {name}',
    listenArticle: 'Écouter le résumé', voiceSoon: 'Les enregistrements de {name} arrivent bientôt. Pour l’instant, vous entendez la voix actuelle.',
    youHi: 'Bonjour, {name}', youHiNone: 'Faites de MindLift le vôtre', youSub: 'Voix : {voice} · {lang}', youSubNone: 'Ajoutez votre prénom, choisissez une voix et l’ambiance.', prefsSaved: 'C’est enregistré.', saveBtn: 'Enregistrer', langName: 'Français',
    obPages: 'Pages d’introduction', obPage: 'Page {i} sur {n}', obStart: 'Faire le tour',
    wp0o: 'Bienvenue dans MindLift', wp0t: 'La curiosité, vous l’avez déjà.',
    wp0p: ['Une question fascinante par jour, expliquée en 4 minutes environ.'],
    wp1o: 'Apprendre', wp1t: 'Pourquoi bâille-t-on? Pourquoi le ciel est-il bleu?',
    wp1p: ['De courtes cartes, de vraies sources, rien de superflu. Une nouvelle question chaque matin.'],
    wp2o: 'Écouter', wp2t: 'Ava ou Leo vous la lisent',
    wp2p: ['Des voix calmes, une douce musique lo-fi. Parfait dans l’autobus ou avec votre café.'],
    wp3o: 'L’actualité', wp3t: 'Une belle histoire par jour',
    wp3p: ['Un article récent de l’actualité, expliqué en une minute.'],
    wp4o: 'Rien que vous', wp4t: 'Gratuit. Sans compte. Sans pression.',
    wp4p: ['Un petit jeu pour le plaisir, et tout reste sur votre téléphone.'],
    welcomeBody: 'Une bonne question par jour, expliquée en quatre minutes environ, avec les sources à l’appui. Aucun compte requis.',
    startToday: 'Commencer la question du jour', chooseFirst: 'Choisir mes sujets d’abord',
    welcomeFoot: 'En français ou en anglais. Votre progression reste sur cet appareil.',
    language: 'Langue', optional: 'Facultatif', interestsTitle: 'Qu’est-ce qui pique votre curiosité?',
    interestsBody: 'Choisissez quelques sujets pour orienter vos suggestions. La question du jour reste la même pour tous, et vous pouvez changer d’avis en tout temps.',
    continueN: 'Continuer avec {n} sujets', continue1: 'Continuer avec 1 sujet', cont: 'Continuer', skip: 'Passer', surprise: 'Surprenez-moi plutôt', saveChanges: 'Enregistrer',
    cardOf: 'Carte {i} sur {n}', next: 'Suivant', prevCard: 'Carte précédente', listen: 'Écouter', stop: 'Arrêter', read: 'Lire',
    lessonMode: 'Mode de lecture', textSize: 'Taille du texte', cardHint: 'Touchez Suivant quand vous voulez. Rien ne défile tout seul.',
    progress: 'Progression de la leçon',
    keyPoints: 'Points clés', keepTitle: 'Trois choses à retenir', meansForYou: 'Ce que ça change pour vous',
    checkYourself: 'Vérifier · 3', qOf: 'Question {i} sur {n} · facultatif',
    correct: 'Exact.', notQuite: 'Pas tout à fait.', rightAnswer: 'Bonne réponse', yourAnswer: 'Votre réponse',
    nextQ: 'Question suivante', seeSources: 'Voir les sources', skipQs: 'Passer les questions',
    whereFrom: 'D’où ça vient', sources: 'Sources', howSure: 'À quel point est-ce sûr?',
    ev_established: 'Bien établi', ev_leading: 'Encore débattu', ev_early: 'Premiers indices',
    evDefault: 'Connaissances reconnues, expliquées de la même façon par les sources ci-dessus.',
    mistake: 'Une erreur? Dites-le-nous', finish: 'Terminer', newTab: 's’ouvre dans un nouvel onglet',
    doneToday: 'C’est tout pour la question du jour.', doneOther: 'Question terminée.', doneLine: 'Une nouvelle question arrive demain.',
    moreSame: 'Du même sujet · facultatif', backToday: 'Terminé — retour à Aujourd’hui',
    learning: 'Apprentissage', interests: 'Centres d’intérêt', none: 'Aucun', lessonFormat: 'Format des leçons',
    lessonFormatNote: 'Écouter fait jouer une narration enregistrée de chaque carte.',
    showWeek: 'Afficher le rythme de la semaine', showWeekNote: 'Un compte discret des jours où vous avez appris cette semaine. Pas de séries, pas d’avertissements.',
    display: 'Affichage', appearance: 'Apparence', system: 'Système', light: 'Clair', dark: 'Sombre',
    smaller: 'Texte plus petit', defaultSize: 'Taille par défaut', larger: 'Texte plus grand',
    privacy: 'Confidentialité', knows: 'Ce que MindLift sait de vous',
    knowsBody: 'Votre prénom (si vous l’avez indiqué), votre langue, vos sujets, vos questions gardées, votre historique et vos scores de pratique. Tout reste dans ce navigateur et n’est jamais envoyé ailleurs.',
    clear: 'Effacer l’historique', clearTitle: 'Effacer votre historique?',
    clearBody: 'Ça supprime votre historique, votre rythme de la semaine, vos questions gardées et vos scores de pratique sur cet appareil. C’est irréversible.',
    clearYes: 'Effacer', cancel: 'Annuler', cleared: 'Historique effacé',
    about: 'À propos', howMade: 'Comment les leçons sont faites', howMadeNote: 'Sources, IA et vérification',
    howMadeP: [
      'Chaque leçon répond à une question qu’on se pose souvent. Elle est écrite pour MindLift avec l’aide de l’IA, uniquement à partir des sources citées à la fin.',
      'Chaque leçon indique à quel point la science est fixée : Bien établi, Encore débattu ou Premiers indices.',
      'La narration que vous entendez avec Écouter est une voix d’IA qui lit le même texte : Ava ou Leo, créées avec Kokoro, un modèle de voix libre et gratuit. Vous choisissez la voix dans les paramètres.',
      'Les résumés d’articles peuvent aussi s’écouter. Si un résumé n’a pas encore d’enregistrement, c’est la voix de votre appareil qui le lit.',
      'La musique de fond est une série de pièces lo-fi originales et calmes, composées pour MindLift et jouées dans un ordre aléatoire.',
      'Ceci est une version bêta. Une personne revérifie encore chaque fait à partir des sources; si quelque chose vous semble faux, signalez-le.'
    ],
    report: 'Signaler un problème', reportBody: 'Décrivez le problème, puis copiez le signalement et envoyez-le à la personne qui vous a fait découvrir MindLift.',
    reportLabel: 'Qu’est-ce qui ne va pas?', reportPh: 'Par exemple : la date de la carte 2 semble erronée.',
    copy: 'Copier le signalement', copied: 'Copié. Collez-le dans un message.', copyFail: 'Sélectionnez le texte ci-dessous et copiez-le.',
    version: 'Version', versionVal: 'Bêta · octobre 2026',
    savedToast: 'Gardée pour plus tard', removedToast: 'Retirée des questions gardées',
    noVoice: 'La narration n’a pas pu se charger. Vérifiez votre connexion et réessayez.',
    practice: 'Pratique', todaysPractice: 'Pratique du jour', aboutShort: 'À propos', practiceMeta: 'Pratique · {n} min',
    practiceHonest: 'Ces jeux servent à pratiquer et à s’amuser; il n’est pas prouvé qu’ils améliorent la mémoire ou la réflexion dans la vie de tous les jours.',
    otherGames: 'Autres jeux · facultatif', play: 'Jouer', playAgain: 'Rejouer', playedToday: 'Joué aujourd’hui',
    g_y3: 'Hier en 3', g_cw: 'Couleur-mot', g_nm: 'Mémoire des chiffres',
    d_y3: 'Trois questions rapides sur votre dernière leçon.', d_cw: 'Touchez la couleur de l’encre, pas le mot.', d_nm: 'Regardez les chiffres, puis retapez-les.',
    y3Locked: 'S’ouvre le lendemain d’une leçon lue.', fromYesterday: 'Leçon d’hier', fromDate: 'Leçon du {date}',
    howToPlay: 'Comment jouer',
    y3r1: 'Trois questions sur cette leçon. Les réponses sont mélangées.', y3r2: 'Prenez votre temps : il n’y a pas de chrono.',
    cwr1: 'Un nom de couleur apparaît, écrit en couleur.', cwr2: 'Touchez la couleur de l’encre. Ignorez ce que dit le mot.', cwr3: '{n} mots. Allez à votre rythme.',
    cwrLang: 'Certains mots sont en anglais.', cwrMove: 'Les boutons changent de place à chaque mot.',
    colourNote: 'Ce jeu repose sur les couleurs. Si certaines sont difficiles à distinguer, Mémoire des chiffres vous conviendra peut-être mieux.',
    levelOf: 'Niveau {n} sur 4',
    nmr1: 'Des chiffres apparaissent un à la fois.', nmr2f: 'Retapez-les dans le même ordre.', nmr2b: 'Retapez-les à l’envers, du dernier au premier.',
    nmr3: '{n} manches. Une manche réussie, et la suivante a un chiffre de plus.',
    startsAt: 'Commence à {n} chiffres', direction: 'Sens', forwards: 'À l’endroit', backwards: 'À l’envers',
    backLocked: 'Le sens inverse s’ouvre quand vous atteignez 6 chiffres.',
    closePractice: 'Fermer la pratique', practiceProgress: 'Progression de la pratique', qOfPlain: 'Question {i} sur {n}', seeResult: 'Voir le résultat',
    inkPrompt: 'Touchez la couleur de l’encre', trialOf: '{i} sur {n}', watch: 'Regardez', roundOf: 'Manche {i} sur {n}', nmCount: '{n} chiffres',
    typeThem: 'Tapez les {n} chiffres.', typeBack: 'Tapez les {n} chiffres, du dernier au premier.', digits: 'Chiffres', del: 'Effacer', checkBtn: 'Vérifier',
    nmRight: 'Exact.', nmWrong: 'Pas cette fois.', youTyped: 'Vous avez tapé', itWas: 'C’était', nmNext: 'Manche suivante : {n} chiffres.', nextRound: 'Manche suivante',
    practiceDone: 'Pratique terminée.', greatRound: 'Bien joué.',
    sounds: 'Sons', soundsNote: 'Un léger carillon pour les bonnes réponses et les belles parties.', practiceFinish: 'Terminé',
    statRight: 'bonnes réponses', statAvg: 'temps moyen', statLevel: 'niveau', statLongest: 'meilleure série du jour', statBest: 'votre record', statRounds: 'manches réussies', statLast: 'la dernière fois',
    firstRound: 'Votre première partie. La prochaine fois, vous pourrez vous comparer à vous-même.',
    fastestYet: 'Votre meilleur temps à ce niveau.', fasterThanLast: 'Plus rapide que votre dernière partie à ce niveau.', lastRoundAt: 'Votre dernière partie à ce niveau : {s}.',
    newBest: 'Un nouveau record personnel.', yourLongest: 'Votre record jusqu’ici : {n} chiffres.', lastTimeLine: 'La dernière fois : {s}.',
    ofN: '{n} sur {of}', levelUp: 'La prochaine fois sera un peu plus difficile.', levelDown: 'La prochaine fois sera un peu plus facile.', levelSame: 'La prochaine fois reste à ce niveau.',
    nextStarts: 'La prochaine fois commence à {n} chiffres.', backOpen: 'Le sens inverse est maintenant ouvert. Vous pourrez le choisir la prochaine fois.',
    rereadLesson: 'Relire la leçon', tryAnother: 'Un autre jeu · facultatif',
    notPlayed: 'Pas encore joué', lastTime: 'La dernière fois : {s}', levelN: 'Niveau {n}', bestTime: 'meilleur temps {s}', longest: 'Record : {n} chiffres', longestBack: 'à l’envers : {n}', noFullYet: 'Aucune manche réussie pour l’instant',
    ownPast: 'Comparé seulement à vos propres parties. Pas de classement, pas de séries.',
    showPractice: 'Afficher la pratique du jour', showPracticeNote: 'Un court jeu sur l’écran Aujourd’hui, pour pratiquer et s’amuser.',
    aboutPractice: 'À propos de la pratique',
    aboutPracticeP: [
      'Ces jeux servent à pratiquer et à s’amuser; il n’est pas prouvé qu’ils améliorent la mémoire ou la réflexion dans la vie de tous les jours.',
      'De grandes revues des études sur l’entraînement cérébral ont montré qu’on s’améliore aux jeux qu’on pratique, mais qu’il y a peu de preuves que ça se transpose à la vie de tous les jours. C’est pourquoi on parle de pratique, pas d’entraînement.',
      'Hier en 3 est un peu différent : il porte sur une leçon que vous avez déjà lue. Essayer de se rappeler ce qu’on a appris, plutôt que de le relire, est l’une des façons les mieux étudiées de s’en souvenir. Ça n’entraîne pas la mémoire en général.',
      'Vos scores restent sur cet appareil et ne sont comparés qu’à vos propres parties. Pas de classement, pas de séries.'
    ],
    introLead: 'Une bonne question par jour, expliquée en quatre minutes environ, avec les sources à l’appui.',
    f1t: 'Une question par jour', f1d: 'Une courte leçon en quelques cartes, puis trois questions facultatives.',
    f2t: 'Lire ou écouter', f2d: 'Chaque carte est narrée, en français ou en anglais.',
    f3t: 'Un peu de pratique', f3d: 'Un petit jeu d’une minute par jour, juste pour le plaisir.',
    f4t: 'Un article de l’actualité', f4d: 'Résumé pour vous, avec un lien vers l’original.',
    noAccountLine: 'Aucun compte. Tout reste sur cet appareil.',
    makeItMine: 'Personnaliser', skipStart: 'Passer et commencer la question du jour',
    logoAlt: 'Logo de MindLift : un point qui s’élève au-dessus d’une ligne', madeBy: 'Créé par Yacine Belalia', madeByLabel: 'Créé par', rights: '© 2026 Yacine Belalia. Tous droits réservés.',
    setupOver: 'À votre goût', setupTitle: 'Quelques choix rapides', setupBody: 'Vous pourrez tout changer plus tard dans les paramètres.',
    nameLabel: 'Comment voulez-vous qu’on vous appelle?', namePh: 'Votre prénom', nameNote: 'Facultatif. Il reste sur cet appareil.', yourName: 'Votre prénom',
    learnHow: 'Votre façon d’apprendre',
    music: 'Musique lo-fi', musicNote: 'Une douce musique de fond pendant que vous utilisez l’application.', musicBtn: 'Musique lo-fi',
    musicVolume: 'Volume de la musique', volQuiet: 'Doux', volMedium: 'Moyen', volFull: 'Fort',
    musicFail: 'La musique n’a pas pu se charger. Vérifiez votre connexion.',
    replayIntro: 'Revoir la présentation',
    allSet: 'C’est prêt.', allSetName: 'C’est prêt, {name}.', greatRoundName: 'Bien joué, {name}.',
    letters: ['L', 'M', 'M', 'J', 'V', 'S', 'D'], learnedOn: 'jour d’apprentissage', todayWord: 'aujourd’hui',
    articles: 'Articles', todaysRead: 'La lecture du jour', latestRead: 'Dernière lecture', fromNews: 'Dans l’actualité', photoBy: 'Photo : {s}', allArticles: 'Tous les articles',
    articlesIntro: 'Un article de l’actualité chaque jour, choisi parmi ceux des derniers jours et résumé en français et en anglais.',
    notInYet: 'Le choix du jour n’est pas encore arrivé. Voici le plus récent.',
    readSummary: 'Lire le résumé', earlierPicks: 'Choix précédents', pickedFor: 'Choisi pour le {d}', published: 'Publié le {d}',
    minRead: '{n} min de lecture', whyRead: 'Pourquoi c’est intéressant', fullArticle: 'L’article complet', readFull: 'Lire l’article complet',
    orig_en: 'Article en anglais', orig_fr: 'Article en français', artDone: 'Lu',
    artDisclosure: 'Résumé écrit pour MindLift avec l’aide de l’IA, à partir de l’article original. L’article appartient à son éditeur.',
    howPicked: 'Comment les articles sont choisis',
    howPickedBody: 'Chaque matin, MindLift parcourt l’actualité des derniers jours et choisit un article gratuit qui vaut le détour. Vous lisez ici un court résumé. L’article complet reste sur le site de l’éditeur.',
    artLoading: 'Chargement de l’article du jour…',
    artEmptyTitle: 'Le premier article arrive bientôt', artEmptyBody: 'Un nouvel article de l’actualité arrive chaque matin. Revenez bientôt.',
    closeArticle: 'Fermer l’article', artGone: 'Cet article n’est plus disponible.'
  }
};

/* ================= Icons ================= */
const IC = {
  today: '<circle cx="12" cy="9.5" r="4"/><path d="M4 19h16"/>',
  explore: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  you: '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c1.2-3.5 4-5 7-5s5.8 1.5 7 5"/>',
  articles: '<path d="M4 5h12v14H6a2 2 0 0 1-2-2z"/><path d="M16 9h4v8a2 2 0 0 1-2 2h-2"/><path d="M7.5 9h5M7.5 12.5h5M7.5 16h3"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',
  play: '<path class="fill" d="M8 5.5v13l10.5-6.5z"/>',
  save: '<path d="M7 4h10v16l-5-3.5L7 20z"/>',
  saved: '<path class="fill" d="M7 4h10v16l-5-3.5L7 20z"/><path d="M7 4h10v16l-5-3.5L7 20z"/>',
  listen: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3.5" y="14" width="4" height="6" rx="1.5"/><rect x="16.5" y="14" width="4" height="6" rx="1.5"/>',
  read: '<path d="M3 5.5c3-1 6-1 9 1 3-2 6-2 9-1V19c-3-1-6-1-9 1-3-2-6-2-9-1z"/><path d="M12 6.5V20"/>',
  textsize: '<path d="M3 18l4.5-11L12 18M4.6 14h5.8"/><circle cx="16.8" cy="14.8" r="2.8"/><path d="M19.6 11.5V18"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  cards: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  go: '<path d="M9 6l6 6-6 6"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  source: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.6v.4"/>',
  privacy: '<path d="M12 3l7.5 3v5.5c0 4.5-3.2 8-7.5 9.5-4.3-1.5-7.5-5-7.5-9.5V6z"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
  surprise: '<path d="M3 7h3.5c4.5 0 6.5 10 11 10H21M3 17h3.5c1.8 0 3-1.6 4.2-3.5M13.3 10.5C14.5 8.6 15.7 7 17.5 7H21"/><path d="M18.5 4.5L21 7l-2.5 2.5M18.5 14.5L21 17l-2.5 2.5"/>',
  report: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
  history: '<path d="M3.5 12a8.5 8.5 0 1 0 2.5-6"/><path d="M3.5 3.5V7H7"/><path d="M12 8v4l3 2"/>',
  pause: '<path d="M9 5v14M15 5v14"/>',
  backspace: '<path d="M9 5h11v14H9l-6-7z"/><path d="M12.5 9.5l5 5M17.5 9.5l-5 5"/>',
  music: '<path d="M9 18V6l10-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/>',
  spark: '<path d="M12 3.5l1.8 5.2 5.2 1.8-5.2 1.8-1.8 5.2-1.8-5.2-5.2-1.8 5.2-1.8z"/><path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/>'
};
function icon(name, cls) {
  const sw = (name === 'check') ? ' style="stroke-width:2.25"' : '';
  return '<svg class="i' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true"' + sw + '>' + IC[name] + '</svg>';
}
const MARK = '<svg width="26" height="26" viewBox="0 0 28 28" aria-hidden="true"><circle class="mark-dot" cx="14" cy="10" r="5.5"/><rect class="mark-bar" x="4" y="19.5" width="20" height="2.6" rx="1.3"/></svg>';

/* ================= Subject art ================= */
function artInner(cat) {
  let s = '';
  if (cat === 'tech') {
    for (let x = 40; x <= 360; x += 40) for (let y = 44; y <= 196; y += 38) s += '<circle class="d" cx="' + x + '" cy="' + y + '" r="2.5" fill-opacity="0.35"/>';
    s += '<path class="s" d="M80 82L160 120L240 82L320 158M160 120L200 196" stroke-width="2.5"/><circle class="v" cx="160" cy="120" r="11"/><circle class="sf" cx="240" cy="82" r="11"/><circle class="d" cx="80" cy="82" r="8"/><circle class="s" cx="320" cy="158" r="10" stroke-width="2.5"/><circle class="d" cx="200" cy="196" r="7"/>';
  } else if (cat === 'body') {
    s = '<circle class="sf" cx="238" cy="126" r="70"/><circle class="d" cx="168" cy="126" r="70" fill-opacity="0.82"/><circle class="v" cx="204" cy="36" r="9"/>';
  } else if (cat === 'history') {
    s = '<circle class="sf" cx="318" cy="66" r="30"/>';
    for (let x = 40; x <= 296; x += 64) s += '<path class="s" d="M' + x + ' 206V132A28 28 0 0 1 ' + (x + 56) + ' 132V206" stroke-width="3"/>';
    s += '<rect class="k" x="30" y="206" width="340" height="3"/>';
  } else if (cat === 'science') {
    s = '<ellipse class="s" cx="200" cy="120" rx="150" ry="52" stroke-width="2.5"/><ellipse class="s" cx="200" cy="120" rx="150" ry="52" stroke-width="2.5" transform="rotate(-24 200 120)" stroke-opacity="0.5"/><circle class="d" cx="200" cy="120" r="26"/><circle class="v" cx="342" cy="104" r="9"/><circle class="sf" cx="70" cy="146" r="8"/>';
  } else if (cat === 'work') {
    s = '<path class="d" fill-opacity="0.85" d="M70 60h160a20 20 0 0 1 20 20v50a20 20 0 0 1-20 20H130l-30 26v-26H70a20 20 0 0 1-20-20V80a20 20 0 0 1 20-20z"/><path class="sf" d="M190 120h130a20 20 0 0 1 20 20v36a20 20 0 0 1-20 20h-20v22l-26-22H190a20 20 0 0 1-20-20v-36a20 20 0 0 1 20-20z"/><circle class="v" cx="330" cy="62" r="9"/>';
  } else if (cat === 'money') {
    const hs = [14, 18, 24, 32, 43, 56, 74, 98];
    hs.forEach((h, i) => { s += '<rect class="d" x="' + (60 + i * 38) + '" y="' + (205 - h) + '" width="24" height="' + h + '" rx="3" fill-opacity="' + (0.35 + i * 0.08).toFixed(2) + '"/>'; });
    s += '<circle class="v" cx="338" cy="38" r="9"/><rect class="k" x="40" y="210" width="330" height="3"/>';
  }
  return s;
}
// Painted covers: key = lesson day ('01'..'60') or subject name -> index in the thumbnail sheet (img/thumbs.jpg).
const COVERS = {};     // filled from data/media.json (painted covers: key -> thumbnail index)
const COVER_GRID = [12, 6];
function coverKey(lessonOrCat) {
  if (!lessonOrCat) return null;
  const k = typeof lessonOrCat === 'string' ? lessonOrCat : pad2(lessonOrCat.day);
  return k in COVERS ? k : null;
}
function coverImg(k, cls, eager) { return '<img class="' + cls + '" src="img/c/' + k + '.jpg" alt=""' + (eager ? ' fetchpriority="high"' : ' loading="lazy"') + ' decoding="async">'; }
function art(lessonOrCat, fit, label) {
  const ck = coverKey(lessonOrCat);
  if (ck) {
    if (fit === 'thumb') {
      const i = COVERS[ck], cols = COVER_GRID[0], rows = COVER_GRID[1];
      return '<span class="art-th" aria-hidden="true" style="background-size:' + cols * 100 + '% ' + rows * 100 + '%;background-position:' + ((i % cols) / (cols - 1) * 100).toFixed(3) + '% ' + (Math.floor(i / cols) / (rows - 1) * 100).toFixed(3) + '%"></span>';
    }
    return coverImg(ck, 'art-img', fit === 'eager');
  }
  const cat = typeof lessonOrCat === 'string' ? lessonOrCat : lessonOrCat.cat;
  const a11y = label ? ' role="img" aria-label="' + esc(label) + '"' : ' aria-hidden="true"';
  return '<svg class="art cat-' + cat + '" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid ' + (fit === 'thumb' ? 'slice' : 'meet') + '"' + a11y + '><rect class="t" width="400" height="240"/>' + artInner(cat) + '</svg>';
}
const WELCOME_ART = (function () {
  let s = '<svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" role="img" aria-label="A saffron circle lifted above a line" class="art" style="background:var(--surface-2)"><rect width="400" height="240" style="fill:var(--surface-2)"/>';
  for (let y = 20; y <= 220; y += 20) s += '<path class="ks" d="M20 ' + y + 'H380" stroke-opacity="0.07"/>';
  s += '<circle class="sf" cx="200" cy="104" r="72"/><circle class="v" cx="250" cy="52" r="14"/><rect class="k" x="70" y="196" width="260" height="6" rx="3"/></svg>';
  return s;
})();

/* ================= Helpers ================= */
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function fmt(s, v) { return String(s).replace(/\{(\w+)\}/g, (m, k) => (v && k in v) ? v[k] : m); }
function t(k, v) { const d = T[S.lang] || T.en; return fmt(d[k] != null ? d[k] : T.en[k], v); }
function L(lesson) { return lesson[S.lang] || lesson.en; }
function catName(c) { return CAT_NAME[S.lang][c]; }
function ymd(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function addDays(d, n) { const x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); x.setDate(x.getDate() + n); return x; }
function startOfWeek(d) { return addDays(d, -((d.getDay() + 6) % 7)); }
function dayOfYear(d) { return Math.round((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - Date.UTC(d.getFullYear(), 0, 1)) / 864e5) + 1; }
// Until Oct 10, 2026 the cycle was the first 30 lessons. From Oct 11 it's a 60-day cycle that alternates six first-month
// lessons with six newer ones (same subject order: science, history, body, tech, money, work). Oct 11 = position 31 (lesson 44).
const MIX_START = Date.UTC(2026, 9, 11);
function cyclePos(d) { return Math.round((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - MIX_START) / 864e5); }
function dayAtPos(p) { const r = Math.floor(p / 6), c = p % 6; return 1 + 6 * Math.floor(r / 2) + c + (r % 2 ? 30 : 0); }
function byDay(n) { return LESSONS.find(l => l.day === n); }
function lessonFor(d) {
  const k = cyclePos(d), first = LESSONS.filter(l => l.day <= 30);
  if (k < 0) return first[(dayOfYear(d) - 1) % first.length];
  return byDay(dayAtPos(((31 + k) % 60 + 60) % 60)) || first[k % first.length];
}
function byId(id) { return LESSONS.find(l => l.id === id); }
function locale() { return S.lang === 'fr' ? 'fr-CA' : 'en-CA'; }
function fold(s) { return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }
function hash(str) { let h = 2166136261; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function plural(n, one, many) { return n === 1 ? t(one, { n }) : t(many, { n }); }

/* ================= Practice: data ================= */
const GAME_IDS = ['y3', 'cw', 'nm'];
const CW_N = 16, NM_ROUNDS = 5, HIST_MAX = 60;
const GAME_MIN = { y3: 1, cw: 1, nm: 2 };
const CW_COLOURS = ['red', 'blue', 'green', 'yellow'];
const CW_WORDS = { en: { red: 'RED', blue: 'BLUE', green: 'GREEN', yellow: 'YELLOW' }, fr: { red: 'ROUGE', blue: 'BLEU', green: 'VERT', yellow: 'JAUNE' } };
const CW_NAMES = { en: { red: 'Red', blue: 'Blue', green: 'Green', yellow: 'Yellow' }, fr: { red: 'Rouge', blue: 'Bleu', green: 'Vert', yellow: 'Jaune' } };
const PRACTICE_SRC = [
  ['Do “Brain-Training” Programs Work?', 'Psychological Science in the Public Interest (Simons et al., 2016)', 'https://doi.org/10.1177/1529100616661983'],
  ['Test-enhanced learning: taking memory tests improves long-term retention', 'Psychological Science (Roediger & Karpicke, 2006)', 'https://pubmed.ncbi.nlm.nih.gov/16507066/']
];
function practiceDefaults() {
  return { y3: { hist: [] }, cw: { level: 1, hist: [] }, nm: { start: 4, startB: 3, bestF: 0, bestB: 0, dir: 'f', hist: [] } };
}
function normPractice(p) {
  const d = practiceDefaults();
  if (!p || typeof p !== 'object') return d;
  const num = (v, lo, hi, def) => (typeof v === 'number' && isFinite(v)) ? Math.min(hi, Math.max(lo, Math.round(v))) : def;
  const hist = h => Array.isArray(h) ? h.filter(e => e && typeof e === 'object' && typeof e.d === 'string').slice(-HIST_MAX) : [];
  if (p.y3 && typeof p.y3 === 'object') d.y3.hist = hist(p.y3.hist);
  if (p.cw && typeof p.cw === 'object') { d.cw.level = num(p.cw.level, 1, 4, 1); d.cw.hist = hist(p.cw.hist); }
  if (p.nm && typeof p.nm === 'object') {
    d.nm.start = num(p.nm.start, 3, 10, 4); d.nm.startB = num(p.nm.startB, 3, 10, 3);
    d.nm.bestF = num(p.nm.bestF, 0, 20, 0); d.nm.bestB = num(p.nm.bestB, 0, 20, 0);
    d.nm.dir = p.nm.dir === 'b' ? 'b' : 'f'; d.nm.hist = hist(p.nm.hist);
  }
  return d;
}
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
function pushHist(list, e) { list.push(e); while (list.length > HIST_MAX) list.shift(); }
function isOrderedNumeric(opts) { return opts.every(o => /^[\d$−\-]/.test(String(o).trim())); }

/* ================= State ================= */
const KEY = 'mindlift.beta.v1';
const VOICES = ['ava', 'leo'];
const OLD_VOICE = { jade: 'ava', peter: 'leo' };
const SETUP_V = 3;   // bump to show the introduction + setup again to everyone (3: multi-page intro + voices)
function defaults() {
  let lang = 'en';
  try { if ((navigator.language || '').toLowerCase().startsWith('fr')) lang = 'fr'; } catch (e) { }
  return { lang, theme: 'system', size: 1, mode: 'read', showWeek: true, showPractice: true, sound: true, music: true, musicVol: 1, voice: 'ava', name: '', setup: 0, interests: [], onboarded: false, log: [], saved: [], artRead: [], practice: practiceDefaults() };
}
function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const d = Object.assign(defaults(), JSON.parse(raw));
      if (!Array.isArray(d.log)) d.log = [];
      if (!Array.isArray(d.saved)) d.saved = [];
      if (!Array.isArray(d.interests)) d.interests = [];
      if (!Array.isArray(d.artRead)) d.artRead = [];
      d.artRead = d.artRead.filter(x => typeof x === 'string');
      d.log = d.log.filter(e => e && typeof e.id === 'string' && typeof e.d === 'string');
      d.saved = d.saved.filter(x => typeof x === 'string');
      d.practice = normPractice(d.practice);
      d.showPractice = d.showPractice !== false;
      d.sound = d.sound !== false;
      d.music = d.music !== false;
      d.musicVol = [0, 1, 2].includes(d.musicVol) ? d.musicVol : 1;
      d.voice = VOICES.includes(d.voice) ? d.voice : (OLD_VOICE[d.voice] || 'ava');
      d.name = typeof d.name === 'string' ? d.name.replace(/\s+/g, ' ').trim().slice(0, 30) : '';
      d.setup = typeof d.setup === 'number' ? d.setup : 0;
      return d;
    }
  } catch (e) { }
  return defaults();
}
const S = load();
function persist() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } }

const V = { tab: 'today', layer: (S.onboarded && S.setup >= SETUP_V) ? null : 'welcome', lesson: null, interestsFrom: 'welcome', draft: [], search: '', filter: 'all', historyAll: false, sheet: null, game: null, article: null, wp: 0, setupFrom: 'welcome' };

/* ================= Articles (one news pick a day) =================
   A scheduled task finds one article from the past few days each morning, adds it to the
   data/articles.json (newest first, one per date) and republishes it.
   The page only reads that block. Every field is treated as untrusted and escaped on render. */
const A = { state: 'ready', list: [] };
function str(v, max) { return typeof v === 'string' ? v.slice(0, max || 2000) : ''; }
function normArticle(id, d) {
  if (!d || typeof d !== 'object') return null;
  const date = str(d.date, 10) || id;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
  const url = str(d.url, 1000);
  if (!/^https:\/\//i.test(url)) return null;
  const side = (x) => (x && typeof x === 'object') ? { t: str(x.t, 200), h: str(x.h, 400), s: str(x.s, 2000), w: str(x.w, 800) } : null;
  const en = side(d.en), fr = side(d.fr);
  if (!en || !en.t || !en.s) return null;
  return {
    id, date, url,
    title: str(d.title, 300), source: str(d.source, 120), author: str(d.author, 160),
    published: /^\d{4}-\d{2}-\d{2}$/.test(str(d.published, 10)) ? d.published : '',
    lang: d.lang === 'fr' ? 'fr' : 'en',
    cat: CATS.includes(d.cat) ? d.cat : 'science',
    min: Math.max(1, Math.min(60, Math.round(Number(d.readMin) || 4))),
    en, fr: (fr && fr.t && fr.s) ? fr : en,
    audio: Array.isArray(d.audio) ? d.audio.map(v => OLD_VOICE[v] || v).filter(v => VOICES.includes(v)) : [],
    photo: /^img\/a\/[\w-]+\.(jpg|webp|png)$/.test(str(d.photo, 80)) ? d.photo : '', credit: str(d.credit, 200)
  };
}
function AL(a) { return a[S.lang] || a.en; }
// Article photo: a copy of the news site's own lead image, stored with the app in img/a/ (credited where shown large).
// Articles without one (or a photo that fails to load) show the subject art underneath.
function artPic(a, fit, credit) {
  if (!a.photo) return art(a.cat, fit);
  return '<span class="art-pic">' + art(a.cat, fit) + '<img class="pic" src="' + esc(a.photo) + '" alt="" loading="lazy" decoding="async">' + (credit ? '<span class="pic-credit">' + esc(t('photoBy', { s: a.credit || a.source })) + '</span>' : '') + '</span>';
}
document.addEventListener('error', e => { const el = e.target; if (el && el.classList && el.classList.contains('pic')) { const c = el.nextElementSibling; if (c && c.classList.contains('pic-credit')) c.remove(); el.remove(); } }, true);
function articleById(id) { return A.list.find(a => a.id === id) || null; }
function visibleArticles() { const d = ymd(new Date()); return A.list.filter(a => a.date <= d).sort((x, y) => (x.date < y.date ? 1 : x.date > y.date ? -1 : 0)); }
function currentArticle() { return visibleArticles()[0] || null; }
function isArtRead(id) { return S.artRead.includes(id); }
function markArtRead(id) { if (!isArtRead(id)) { S.artRead = [id].concat(S.artRead).slice(0, 200); persist(); } }
function dateOf(s) { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); }
function shortDate(s) { return dateOf(s).toLocaleDateString(locale(), { month: 'short', day: 'numeric' }); }
function longDate(s) { return dateOf(s).toLocaleDateString(locale(), { weekday: 'long', month: 'long', day: 'numeric' }); }
function loadArticles() {
  let arr = [];
  try {
    const raw = DATA.articles || {};
    arr = Array.isArray(raw) ? raw : (raw && Array.isArray(raw.articles) ? raw.articles : []);
  } catch (e) { arr = []; }
  const seen = new Set();
  A.list = arr.map(d => normArticle(d && typeof d.date === 'string' ? d.date.slice(0, 10) : '', d))
    .filter(a => a && !seen.has(a.id) && (seen.add(a.id), true));
  A.state = 'ready';
}

function readSet() { return new Set(S.log.map(e => e.id)); }
function daySet() { return new Set(S.log.map(e => e.d)); }
function isRead(id) { return S.log.some(e => e.id === id); }
function isSaved(id) { return S.saved.includes(id); }
function markRead(id) {
  const d = ymd(new Date());
  if (!S.log.some(e => e.id === id && e.d === d)) { S.log.push({ id, d }); persist(); }
}
function toggleSave(id) {
  const on = isSaved(id);
  S.saved = on ? S.saved.filter(x => x !== id) : [id].concat(S.saved);
  persist();
  toast(on ? t('removedToast') : t('savedToast'));
  return !on;
}

/* ================= Theme & text size ================= */
function applyPrefs() {
  const r = document.documentElement;
  if (S.theme === 'light' || S.theme === 'dark') r.setAttribute('data-theme', S.theme); else r.removeAttribute('data-theme');
  r.classList.remove('size-0', 'size-1', 'size-2');
  r.classList.add('size-' + S.size);
  r.lang = S.lang;
}

/* ================= Narration =================
   Free recorded narration made with Kokoro (open source): Ava = af_heart (EN) / ff_siwis (FR); Leo = am_michael
   (EN only). One file per lesson: audio/s/<voice>/<lang>/DD.mp3. SPRITES gives [start, end] seconds for each part:
   index 0 is the question itself (title + hook), 1..n are the cards. Samples in audio/voices/, articles in audio/articles/<voice>/<lang>/<date>.mp3.
   Each play tries the chosen voice, then the other one, so French with Leo falls back to Ava.
   Articles without a recording are read by the device's own voice. */
const TTS = { ok: true, speaking: false, el: null, what: null, synth: false };
function pad2(n) { return String(n).padStart(2, '0'); }
const SPRITES = {};    // filled from data/media.json (narration: [start, end] seconds of each part)
function seg(v, lang, lesson, k) {
  const key = v + '/' + lang + '/' + pad2(lesson.day), m = SPRITES[key], r = m && m[k];
  return r ? { url: 'audio/s/' + key + '.mp3', s: r[0], e: r[1] } : null;
}
function segs(lesson, k) { return voiceOrder().map(v => seg(v, S.lang, lesson, k)).filter(Boolean); }
function voiceOrder() { return [S.voice].concat(VOICES.filter(v => v !== S.voice)); }
function cardUrls(lesson, i) { return segs(lesson, i + 1); }
function audioUrl(lesson, i) { const u = cardUrls(lesson, i)[0]; return u ? u.url : ''; }
function articleUrls(a) {
  const have = Array.isArray(a.audio) ? a.audio : [];
  return voiceOrder().filter(v => have.includes(v) && !(v === 'leo' && S.lang === 'fr')).map(v => 'audio/articles/' + v + '/' + S.lang + '/' + a.date + '.mp3');
}
function articleScript(a) {
  const x = AL(a);
  return [x.t, x.h, x.s, x.w ? t('whyRead') + '. ' + x.w : ''].filter(Boolean).join(' \n');
}
function playUrls(urls, what, fallbackText, onDone) {
  stopSpeak();
  let a;
  try { a = new Audio(); } catch (e) { return; }
  TTS.el = a; TTS.what = what || null;
  let idx = 0;
  a.preload = 'auto';
  let cur = null, fin = false;
  const finish = () => { if (fin || TTS.el !== a) return; fin = true; TTS.speaking = false; syncListen(); if (onDone) onDone(); };
  const load = u => {
    cur = typeof u === 'string' ? null : u;
    a.src = cur ? cur.url + '#t=' + cur.s : u;
    if (cur) a.muted = true;
  };
  // If the server can't jump inside the file, load the whole lesson file once into memory and jump there.
  const toStart = () => {
    if (!cur || TTS.el !== a) return;
    if (Math.abs(a.currentTime - cur.s) > 0.3) {
      const sk = a.seekable, ok = sk && sk.length && sk.end(sk.length - 1) > cur.s;
      if (!ok && !a.src.startsWith('blob:')) {
        try { a.pause(); } catch (e) { }
        const c = cur, B = playUrls.blobs = playUrls.blobs || {};
        (B[c.url] || (B[c.url] = fetch(c.url).then(r => r.ok ? r.blob() : Promise.reject()).then(b => URL.createObjectURL(b))))
          .then(bu => { if (TTS.el === a && cur === c) { a.src = bu; tryPlay(); } }, () => { delete B[c.url]; next(); });
        return;
      }
      try { a.currentTime = cur.s; } catch (e) { }
    }
    a.muted = false;
  };
  a.addEventListener('loadedmetadata', toStart);
  a.addEventListener('timeupdate', () => {
    if (!cur || TTS.el !== a || fin) return;
    if (a.muted && Math.abs(a.currentTime - cur.s) < 0.3) a.muted = false;
    if (a.currentTime >= cur.e) { a.pause(); finish(); }
  });
  a.addEventListener('playing', () => { if (TTS.el === a && !fin) { TTS.speaking = true; syncListen(); } });
  a.addEventListener('ended', finish);
  a.addEventListener('pause', () => { if (TTS.el === a && !a.ended && !fin) { TTS.speaking = false; syncListen(); } });
  const next = () => {
    if (TTS.el !== a) return;
    idx++;
    if (idx < urls.length) { load(urls[idx]); tryPlay(); return; }
    TTS.speaking = false; syncListen();
    if (fallbackText) speakText(fallbackText, what, onDone); else toast(t('noVoice'));
  };
  const tryPlay = () => { try { const p = a.play(); if (p && p.catch) p.catch(err => { if (err && err.name === 'NotAllowedError' && TTS.el === a) { TTS.speaking = false; syncListen(); } }); } catch (e) { } };
  a.addEventListener('error', next);
  if (!urls.length) { TTS.el = null; if (fallbackText) speakText(fallbackText, what, onDone); return; }
  load(urls[0]);
  TTS.speaking = true; syncListen();
  tryPlay();
}
// Device voice, used only for articles that don't have a recording yet.
function speakText(text, what, onDone) {
  const ss = window.speechSynthesis;
  if (!ss || typeof SpeechSynthesisUtterance === 'undefined') { if (onDone) onDone(); else toast(t('noVoice')); return; }
  stopSpeak();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = S.lang === 'fr' ? 'fr-CA' : 'en-CA';
  try {
    const vs = ss.getVoices().filter(v => v.lang && v.lang.toLowerCase().startsWith(S.lang));
    const pick = vs.find(v => /natural|premium|enhanced/i.test(v.name)) || vs[0];
    if (pick) u.voice = pick;
  } catch (e) { }
  u.rate = 0.97;
  // Some devices never start or never report the end of device speech: guard so listening keeps going.
  let started = false, finished = false;
  const finish = (ok) => { if (finished) return; finished = true; clearTimeout(g1); clearTimeout(g2); if (TTS.synth && TTS.what === what) { TTS.synth = false; TTS.speaking = false; syncListen(); if (onDone) onDone(); } void ok; };
  const g1 = setTimeout(() => { if (!started) { try { ss.cancel(); } catch (e) { } finish(false); } }, 2500);
  const g2 = setTimeout(() => finish(true), 4000 + text.length * 95);
  u.onstart = () => { started = true; };
  u.onerror = () => finish(false);
  u.onend = () => finish(true);
  TTS.synth = true; TTS.speaking = true; TTS.what = what || null;
  ss.speak(u); syncListen();
}
function autoNext(lesson, i) {
  return () => setTimeout(() => {
    if (S.mode !== 'listen' || V.layer !== 'lesson' || !V.lesson || V.lesson.id !== lesson.id || V.lesson.step !== 'card' || V.lesson.i !== i || V.sheet) return;
    nextCard();
  }, 700);
}
function playCard(lesson, i) { playUrls(cardUrls(lesson, i), 'card', (L(lesson).s[i] || []).join('. '), S.mode === 'listen' ? autoNext(lesson, i) : null); }
// The question itself (title + hook), read before card 1: a recorded intro (DD-0.mp3) if one exists, otherwise the device voice.
function playIntroThenCard(lesson) {
  const x = L(lesson);
  playUrls(segs(lesson, 0), 'card', x.t + ' ' + x.h, () => setTimeout(() => {
    if (V.layer === 'lesson' && V.lesson && V.lesson.id === lesson.id && V.lesson.step === 'card' && V.lesson.i === 0) playCard(lesson, 0);
  }, 500));
}
function playArticle(a) { playUrls(articleUrls(a), 'article', articleScript(a)); }
// Voice preview (audio/voices/<voice>-<lang>.mp3). If a sample is missing, it plays the current narration
// (first card of today's lesson) and says so, instead of failing silently.
function playSample(v) {
  const urls = [S.lang, S.lang === 'fr' ? 'en' : 'fr'].map(l => 'audio/voices/' + v + '-' + l + '.mp3');
  const legacy = seg('ava', S.lang, todayLesson(), 1);
  const head = u => fetch(u, { method: 'HEAD' }).then(r => r.ok).catch(() => false);
  Promise.all(urls.map(head)).then(ok => {
    const have = urls.filter((u, k) => ok[k]);
    if (have.length) { playUrls(have, 'sample-' + v); return; }
    playUrls(legacy ? [legacy] : [], 'sample-' + v);
    toast(t('voiceSoon', { name: t('v_' + v) }));
  });
}
function preloadCard(lesson, i) {
  try { const u = i < L(lesson).s.length && audioUrl(lesson, i); if (u && !preloadCard.done[u]) { preloadCard.done[u] = 1; const a = new Audio(); a.preload = 'auto'; a.src = u; } } catch (e) { }
}
preloadCard.done = {};
function stopSpeak() {
  const a = TTS.el; TTS.el = null;
  if (a) { try { a.pause(); a.removeAttribute('src'); a.load(); } catch (e) { } }
  if (TTS.synth) { TTS.synth = false; try { window.speechSynthesis.cancel(); } catch (e) { } }
  TTS.speaking = false; syncListen();
  TTS.what = null;
}
function syncListen() {
  musicLevel();
  document.querySelectorAll('[data-act="voice-sample"]').forEach(s => {
    const on = TTS.speaking && TTS.what === 'sample-' + s.dataset.v;
    s.setAttribute('aria-pressed', String(on));
    s.innerHTML = icon(on ? 'pause' : 'listen', 'i-md');
  });
  const ab = document.getElementById('art-listen');
  if (ab) {
    const on = TTS.speaking && TTS.what === 'article';
    ab.setAttribute('aria-pressed', String(on));
    ab.innerHTML = icon(on ? 'pause' : 'listen', 'i-md') + '<span>' + esc(on ? t('stop') : t('listenArticle')) + '</span>';
  }
  const b = document.getElementById('listen-btn');
  if (!b) return;
  const on = TTS.speaking && TTS.what === 'card';
  b.setAttribute('aria-pressed', on ? 'true' : 'false');
  b.innerHTML = icon(on ? 'pause' : 'listen', 'i-md') + '<span>' + esc(on ? t('stop') : t('listen')) + '</span>';
}

/* ================= Toast ================= */
let toastTimer = null;
function toast(msg) {
  const host = document.getElementById('toast-host');
  if (!host) return;
  const long = msg.length > 40;
  host.innerHTML = '<div class="toast' + (long ? ' long' : '') + '">' + (long ? '' : icon('check', 'i-sm')) + esc(msg) + '</div>';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { host.innerHTML = ''; }, long ? 4500 : 2200);
}

/* ================= Derived lists ================= */
function todayLesson() { return lessonFor(new Date()); }
function weekLessons() {
  const now = new Date(), mon = startOfWeek(now), out = [];
  for (let d = mon; ymd(d) !== ymd(now); d = addDays(d, 1)) out.push({ date: d, lesson: lessonFor(d) });
  return out;
}
function recencyOrder() {
  const now = new Date(), seen = new Set(), out = [];
  for (let k = 0; k < 400 && out.length < LESSONS.length; k++) {
    const l = lessonFor(addDays(now, -k));
    if (!seen.has(l.id)) { seen.add(l.id); out.push({ lesson: l, k }); }
  }
  LESSONS.forEach(l => { if (!seen.has(l.id)) out.push({ lesson: l, k: 999 }); });
  return out;
}
function suggestions() {
  const today = todayLesson(), week = new Set(weekLessons().map(w => w.lesson.id)), read = readSet(), seed = ymd(new Date());
  const cands = LESSONS.filter(l => l.cat !== today.cat && !week.has(l.id) && l.id !== today.id)
    .map(l => ({ l, score: (S.interests.includes(l.cat) ? 4 : 0) + (read.has(l.id) ? 0 : 2) + (hash(seed + l.id) % 1000) / 1000 }))
    .sort((a, b) => b.score - a.score);
  const out = [], cats = new Set();
  for (const c of cands) { if (!cats.has(c.l.cat)) { out.push(c.l); cats.add(c.l.cat); } if (out.length === 3) break; }
  return out;
}
function related(lesson) {
  const read = readSet();
  return LESSONS.filter(l => l.cat === lesson.cat && l.id !== lesson.id)
    .sort((a, b) => (read.has(a.id) ? 1 : 0) - (read.has(b.id) ? 1 : 0) || a.day - b.day).slice(0, 2);
}
function searchLessons(q, filter) {
  const f = fold(q.trim());
  return recencyOrder().map(x => x.lesson).filter(l => {
    if (filter !== 'all' && l.cat !== filter) return false;
    if (!f) return true;
    const hay = [l.en, l.fr].map(x => [x.t, x.h, x.w, x.k.join(' '), x.s.map(s => s.join(' ')).join(' ')].join(' ')).join(' ') + ' ' + CAT_NAME.en[l.cat] + ' ' + CAT_NAME.fr[l.cat];
    return f.split(/\s+/).every(w => fold(hay).includes(w));
  });
}

/* ================= Shared fragments ================= */
function metaLine(l, optional) {
  const x = L(l);
  return '<div class="meta t-caption"><span>' + icon('clock', 'i-sm') + esc(t('min', { n: l.min })) + '</span><span>' + icon('cards', 'i-sm') + esc(t('cards', { n: x.s.length })) + '</span><span>' + icon('check', 'i-sm') + esc(t(optional ? 'optQs' : 'qs', { n: x.q.length })) + '</span></div>';
}
function tag(cat, pill) { return '<span class="tag cat-' + cat + (pill ? ' pill' : '') + '">' + esc(catName(cat)) + '</span>'; }
function evChip(l) {
  const ev = EVIDENCE[l.id] || 'established';
  const ic = ev === 'established' ? icon('check', 'i-sm') : icon('info', 'i-sm');
  return '<span class="ev ev-' + ev + '">' + ic + esc(t('ev_' + ev)) + '</span>';
}
function saveBtn(id, cls) {
  const on = isSaved(id);
  return '<button type="button" class="iconbtn ' + (cls || '') + '" data-act="save" data-id="' + id + '" aria-pressed="' + on + '" aria-label="' + esc(on ? t('unsave') : t('save')) + '">' + icon(on ? 'saved' : 'save', 'i-md') + '</button>';
}
function row(l, opts) {
  opts = opts || {};
  const x = L(l), read = isRead(l.id);
  const meta = (opts.prefix ? esc(opts.prefix) + ' · ' : '') + esc(catName(l.cat)) + ' · ' + esc(t('min', { n: l.min }));
  return '<button type="button" class="row" data-act="open" data-id="' + l.id + '"><div class="thumb">' + art(l, 'thumb') + '</div><div class="row-txt"><span class="row-title">' + esc(x.t) + '</span><span class="t-caption">' + meta + '</span></div><span class="row-end">' + (read ? '<span class="row-done">' + icon('check', 'i-sm') + esc(t('done')) + '</span>' : '') + icon('go', 'i-md') + '</span></button>';
}
function weekStrip(asCard) {
  const now = new Date(), mon = startOfWeek(now), days = daySet(), letters = T[S.lang].letters;
  let n = 0, dots = '';
  for (let i = 0; i < 7; i++) {
    const d = addDays(mon, i), k = ymd(d), done = days.has(k), isToday = k === ymd(now);
    if (done) n++;
    const name = d.toLocaleDateString(locale(), { weekday: 'long' });
    const lab = name + (done ? ', ' + t('learnedOn') : '') + (isToday ? ', ' + t('todayWord') : '');
    dots += '<span class="dot' + (done ? ' done' : (isToday ? ' today' : '')) + '" role="img" aria-label="' + esc(lab) + '">' + (done ? icon('check', 'i-sm') : esc(letters[i])) + '</span>';
  }
  const label = n === 0 ? t('week0') : (n === 1 ? t('week1') : t('weekN', { n }));
  if (asCard) return { n, dots: '<div class="dots">' + dots + '</div>', label };
  return '<div class="week"><div class="week-txt"><span style="font-size:14px;font-weight:600">' + esc(t('thisWeek')) + '</span><span class="t-caption" style="font-weight:400">' + esc(label) + '</span></div><div class="dots">' + dots + '</div></div>';
}
function brand(withBeta) { return '<span class="brand">' + MARK + '<span class="brand-name">MindLift</span></span>' + (withBeta ? '<span class="beta">' + esc(S.lang === 'fr' ? 'Bêta' : 'Beta') + '</span>' : ''); }
function langSeg(id) {
  return '<div class="seg inline" role="group" aria-label="' + esc(t('language')) + '" id="' + id + '"><button type="button" data-act="lang" data-v="en" aria-pressed="' + (S.lang === 'en') + '" lang="en">EN</button><button type="button" data-act="lang" data-v="fr" aria-pressed="' + (S.lang === 'fr') + '" lang="fr">FR</button></div>';
}

function artMeta(a) {
  const parts = [];
  if (a.source) parts.push('<span>' + icon('source', 'i-sm') + esc(a.source) + '</span>');
  parts.push('<span>' + icon('clock', 'i-sm') + esc(t('minRead', { n: a.min })) + '</span>');
  if (a.published) parts.push('<span>' + esc(t('published', { d: shortDate(a.published) })) + '</span>');
  return '<div class="meta t-caption">' + parts.join('') + '</div>';
}
function newsCard(a) {
  const x = AL(a), isToday = a.date === ymd(new Date());
  const over = isToday ? t('fromNews') : t('fromNews') + ' · ' + shortDate(a.date);
  return '<button type="button" class="news" data-act="article" data-id="' + esc(a.id) + '"><div class="news-art">' + art(a.cat, 'thumb') + '</div><div class="news-body"><span class="t-over spark">' + esc(over) + '</span><span class="news-title">' + esc(x.t) + '</span>' + (x.h ? '<span class="news-hook">' + esc(x.h) + '</span>' : '') + '<span class="t-caption">' + esc([a.source, t('minRead', { n: a.min })].filter(Boolean).join(' · ')) + (isArtRead(a.id) ? ' · ' + esc(t('artDone')) : '') + '</span></div></button>';
}
function artRow(a) {
  const x = AL(a);
  const meta = esc(shortDate(a.date)) + ' · ' + esc(catName(a.cat)) + (a.source ? ' · ' + esc(a.source) : '');
  return '<button type="button" class="row" data-act="article" data-id="' + esc(a.id) + '"><div class="thumb">' + artPic(a, 'thumb') + '</div><div class="row-txt"><span class="row-title">' + esc(x.t) + '</span><span class="t-caption">' + meta + '</span></div><span class="row-end">' + (isArtRead(a.id) ? '<span class="row-done">' + icon('check', 'i-sm') + esc(t('artDone')) + '</span>' : '') + icon('go', 'i-md') + '</span></button>';
}
function artStateBox() {
  return '<div class="empty">' + icon('articles') + '<strong>' + esc(t('artEmptyTitle')) + '</strong><p>' + esc(t('artEmptyBody')) + '</p></div>';
}

/* ================= Tabs ================= */
function renderToday() {
  const now = new Date(), l = todayLesson(), x = L(l), read = isRead(l.id);
  const h = now.getHours();
  const greet = h < 12 ? t('morning') : (h < 18 ? t('afternoon') : t('evening'));
  const date = now.toLocaleDateString(locale(), { weekday: 'short', month: 'short', day: 'numeric' });
  let html = '<div class="page">';
  html += '<div style="display:flex;flex-direction:column;gap:18px"><div class="topline"><span class="mobile-only" style="display:flex;align-items:center;gap:10px">' + brand(true) + '</span><span style="display:flex;align-items:center;gap:4px"><span class="t-caption">' + esc(date) + '</span>' + musicBtn() + '</span></div>';
  html += '<div class="greet"><p class="muted" style="font-size:15px;line-height:20px">' + esc(greet + (S.name ? ', ' + S.name : '')) + '</p><h1 class="t-h1" tabindex="-1" id="page-h">' + esc(t('todayTitle')) + '</h1></div></div>';

  const dk = coverKey(l);
  html += '<div style="display:flex;flex-direction:column;gap:14px;margin-top:-14px"><article class="daily' + (dk ? ' has-cover' : '') + '">' + (dk ? coverImg(dk, 'cover-img', true) + '<div class="cover-shade"></div>' : '<div class="daily-art">' + art(l) + '</div>') + '<div class="daily-body">';
  html += '<div class="daily-top"><span class="t-over spark">' + esc(t('qotd')) + '</span>' + tag(l.cat) + '</div>';
  html += '<h2 class="daily-title">' + esc(x.t) + '</h2><p class="daily-hook">' + esc(x.h) + '</p>' + metaLine(l);
  if (read) html += '<p class="daily-done">' + icon('check', 'i-sm') + esc(t('readToday')) + '</p>';
  html += '<div class="daily-actions"><button type="button" class="btn ' + (read ? '' : 'btn-primary') + '" style="flex:1" data-act="open" data-id="' + l.id + '">' + (read ? '' : icon('play', 'i-md')) + '<span>' + esc(read ? t('readAgain') : t('start')) + '</span></button>' + saveBtn(l.id, 'raised lg') + '</div>';
  html += '</div></article>';
  if (S.showWeek) html += weekStrip();
  html += '</div>';

  const cur = A.state === 'ready' ? currentArticle() : null;
  if (cur) {
    const head = cur.date === ymd(now) ? t('todaysRead') : t('latestRead');
    html += '<section class="section" style="gap:12px"><div class="section-head"><h2 class="t-h2">' + esc(head) + '</h2><button type="button" class="link" data-act="tab" data-v="articles">' + esc(t('allArticles')) + '</button></div>' + newsCard(cur) + '</section>';
  }
  if (S.showPractice) html += practiceSection();

  const wk = weekLessons();
  if (wk.length) {
    html += '<section class="section"><h2 class="t-h2" style="min-height:44px;display:flex;align-items:center">' + esc(t('earlier')) + '</h2><div class="rows">';
    wk.slice().reverse().forEach(w => {
      const isY = ymd(w.date) === ymd(addDays(now, -1));
      const label = isY ? t('yesterday') : w.date.toLocaleDateString(locale(), { weekday: 'long' });
      html += row(w.lesson, { prefix: label.charAt(0).toUpperCase() + label.slice(1) });
    });
    html += '</div></section>';
  }

  const sug = suggestions();
  html += '<section class="section" style="gap:12px"><div class="section-head"><h2 class="t-h2">' + esc(t('other')) + '</h2><button type="button" class="link" data-act="tab" data-v="explore">' + esc(t('seeAll')) + '</button></div><div class="tiles">';
  sug.forEach(s => {
    html += '<button type="button" class="tile" data-act="open" data-id="' + s.id + '"><div class="tile-art">' + art(s) + '</div><div class="tile-body">' + tag(s.cat) + '<span class="tile-title">' + esc(L(s).t) + '</span><span class="t-caption">' + esc(t('min', { n: s.min })) + (isRead(s.id) ? ' · ' + esc(t('done')) : '') + '</span></div></button>';
  });
  html += '</div></section>';
  html += '<p class="endnote">' + MARK + '<span>' + esc(t('thatsToday')) + '</span></p>';
  return html + '</div>';
}

function exploreResults() {
  const q = V.search, f = V.filter, read = readSet();
  let html = '';
  if (!q.trim() && f === 'all') {
    html += '<section class="section" style="gap:12px"><h2 class="t-h2">' + esc(t('sixSubjects')) + '</h2><div class="subjects">';
    CATS.forEach(c => {
      const ls = LESSONS.filter(l => l.cat === c), r = ls.filter(l => read.has(l.id)).length;
      html += '<button type="button" class="subject" data-act="filter" data-v="' + c + '"><div class="subject-art">' + art(c) + '</div><div class="subject-body"><span class="subject-name">' + esc(catName(c)) + '</span><span class="t-caption">' + esc(t('nQs', { n: ls.length })) + (r ? ' · ' + esc(t('nRead', { n: r })) : '') + '</span></div></button>';
    });
    html += '</div></section>';
    const all = recencyOrder();
    html += '<section class="section"><div class="section-head"><h2 class="t-h2">' + esc(t('past')) + '</h2><span class="t-caption">' + esc(t('allN', { n: all.length })) + '</span></div><div class="rows">';
    all.forEach(o => { html += row(o.lesson, { prefix: o.k === 0 ? t('today') : (o.k === 1 ? t('yesterday') : '') }); });
    html += '</div></section>';
    html += '<div class="note">' + icon('cards', 'i-md') + '<p><strong>' + esc(t('coursesLater')) + '</strong>' + esc(t('coursesLaterBody')) + '</p></div>';
  } else {
    const res = searchLessons(q, f);
    const head = q.trim() ? (res.length === 1 ? t('results1') : t('resultsN', { n: res.length })) : catName(f);
    html += '<section class="section"><div class="section-head"><h2 class="t-h2" role="status">' + esc(head) + '</h2></div>';
    if (res.length) { html += '<div class="rows">' + res.map(l => row(l, { prefix: l.id === todayLesson().id ? t('today') : '' })).join('') + '</div>'; }
    else html += '<div class="empty"><p>' + esc(t('noResults', { q: q.trim() })) + '</p></div>';
    html += '</section>';
    if (q.trim()) html += '<p class="t-caption" style="font-weight:400">' + esc(t('searchNote')) + '</p>';
  }
  return html;
}
function renderExplore() {
  let html = '<div class="page">';
  html += '<h1 class="t-h1" tabindex="-1" id="page-h">' + esc(t('explore')) + '</h1>';
  html += '<div style="display:flex;flex-direction:column;gap:14px;margin-top:-14px"><label class="search" for="q">' + icon('search', 'i-md') + '<span class="sr">' + esc(t('searchLabel')) + '</span><input id="q" type="search" autocomplete="off" placeholder="' + esc(t('search')) + '" value="' + esc(V.search) + '">' + (V.search ? '<button type="button" class="iconbtn" data-act="clearsearch" aria-label="' + esc(t('clearSearch')) + '">' + icon('x', 'i-md') + '</button>' : '') + '</label>';
  html += '<div class="chips" role="group" aria-label="' + esc(t('subjectFilter')) + '"><button type="button" class="chip" data-act="filter" data-v="all" aria-pressed="' + (V.filter === 'all') + '">' + (V.filter === 'all' ? icon('check', 'i-sm') : '') + esc(t('all')) + '</button>';
  CATS.forEach(c => { html += '<button type="button" class="chip" data-act="filter" data-v="' + c + '" aria-pressed="' + (V.filter === c) + '">' + (V.filter === c ? icon('check', 'i-sm') : '') + esc(CAT_SHORT[S.lang][c]) + '</button>'; });
  html += '</div></div><div id="explore-results" class="page" style="gap:36px">' + exploreResults() + '</div>';
  return html + '</div>';
}

function renderYou() {
  const read = readSet(), ws = weekStrip(true);
  const subjectsRead = new Set(LESSONS.filter(l => read.has(l.id)).map(l => l.cat)).size;
  let html = '<div class="page narrow">';
  html += '<div class="topline"><h1 class="t-h1" tabindex="-1" id="page-h" style="overflow-wrap:anywhere">' + esc(S.name || t('you')) + '</h1><button type="button" class="iconbtn raised" data-act="layer" data-v="settings" aria-label="' + esc(t('settings')) + '">' + icon('settings') + '</button></div>';
  html += '<div class="card" style="margin-top:-6px"><div style="display:flex;gap:12px;align-items:flex-start"><span style="color:var(--teal)">' + icon('privacy') + '</span><div style="display:flex;flex-direction:column;gap:4px"><span style="font-weight:600">' + esc(t('noAccount')) + '</span><span class="muted" style="font-size:14px;line-height:20px">' + esc(t('noAccountBody')) + '</span></div></div></div>';
  html += '<div class="card">';
  if (S.showWeek) html += '<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap"><div style="display:flex;flex-direction:column"><span style="font-weight:600">' + esc(t('thisWeek')) + '</span><span class="t-caption" style="font-weight:400">' + esc(ws.label) + '</span></div>' + ws.dots + '</div><div class="divider"></div>';
  html += '<div class="stats"><div><div class="stat-n">' + read.size + '</div><div class="stat-l">' + esc(t('statRead')) + '</div></div><div><div class="stat-n">' + subjectsRead + '</div><div class="stat-l">' + esc(t('statSubjects')) + '</div></div><div><div class="stat-n">' + S.saved.length + '</div><div class="stat-l">' + esc(t('statSaved')) + '</div></div></div></div>';

  html += '<section class="section"><h2 class="t-h2" style="min-height:44px;display:flex;align-items:center">' + esc(t('saved')) + '</h2>';
  const saved = S.saved.map(byId).filter(Boolean);
  if (saved.length) html += '<div class="rows">' + saved.map(l => row(l)).join('') + '</div>';
  else html += '<div class="empty">' + icon('save') + '<strong>' + esc(t('emptySaved')) + '</strong><p>' + esc(t('emptySavedBody')) + '</p><button type="button" class="btn btn-sm" data-act="tab" data-v="explore">' + esc(t('browse')) + '</button></div>';
  html += '</section>';

  const seen = new Set(), hist = [];
  S.log.slice().reverse().forEach(e => { if (!seen.has(e.id) && byId(e.id)) { seen.add(e.id); hist.push(e); } });
  html += '<section class="section"><div class="section-head"><h2 class="t-h2">' + esc(t('history')) + '</h2>' + (hist.length > 5 ? '<button type="button" class="link" data-act="histall">' + esc(V.historyAll ? t('showLess') : t('seeAll')) + '</button>' : '') + '</div>';
  if (hist.length) {
    html += '<div>';
    const now = new Date();
    (V.historyAll ? hist : hist.slice(0, 5)).forEach(e => {
      const [y, m, d] = e.d.split('-').map(Number), dt = new Date(y, m - 1, d);
      let lab;
      if (e.d === ymd(now)) lab = t('today'); else if (e.d === ymd(addDays(now, -1))) lab = t('yesterday');
      else lab = dt.toLocaleDateString(locale(), { month: 'short', day: 'numeric' });
      html += '<button type="button" class="hist" data-act="open" data-id="' + e.id + '"><span class="hist-date">' + esc(lab) + '</span><span class="hist-title">' + esc(L(byId(e.id)).t) + '</span></button>';
    });
    html += '</div>';
  } else html += '<p class="muted" style="font-size:15px;padding:4px 0">' + esc(t('emptyHistory')) + '</p>';
  html += '</section>';

  html += youPractice();

  html += '<section class="section" style="gap:12px"><div class="section-head"><h2 class="t-h2">' + esc(t('subjectsLike')) + '</h2><button type="button" class="link" data-act="interests" data-v="you">' + esc(S.interests.length ? t('edit') : t('choose')) + '</button></div>';
  if (S.interests.length) html += '<div style="display:flex;flex-wrap:wrap;gap:8px">' + CATS.filter(c => S.interests.includes(c)).map(c => tag(c, true)).join('') + '</div>';
  else html += '<p class="muted" style="font-size:15px;line-height:22px">' + esc(t('noSubjects')) + '</p>';
  html += '</section>';
  return html + '</div>';
}

function renderArticles() {
  const today = ymd(new Date());
  let html = '<div class="page">';
  html += '<div class="greet"><h1 class="t-h1" tabindex="-1" id="page-h">' + esc(t('articles')) + '</h1><p class="muted" style="font-size:15px;line-height:22px;max-width:60ch">' + esc(t('articlesIntro')) + '</p></div>';
  const list = A.state === 'ready' ? visibleArticles() : [];
  if (!list.length) {
    html += '<div style="margin-top:-14px">' + artStateBox() + '</div>';
  } else {
    const a = list[0], x = AL(a), isToday = a.date === today, read = isArtRead(a.id);
    html += '<div style="display:flex;flex-direction:column;gap:14px;margin-top:-14px">';
    if (!isToday) html += '<p class="t-caption" style="font-weight:400">' + esc(t('notInYet')) + '</p>';
    html += '<article class="daily"><div class="daily-art">' + artPic(a, null, true) + '</div><div class="daily-body">';
    html += '<div class="daily-top"><span class="t-over spark">' + esc(isToday ? t('todaysRead') : t('latestRead') + ' · ' + shortDate(a.date)) + '</span>' + tag(a.cat) + '</div>';
    html += '<h2 class="daily-title">' + esc(x.t) + '</h2>' + (x.h ? '<p class="daily-hook">' + esc(x.h) + '</p>' : '') + artMeta(a);
    html += '<div class="daily-actions"><button type="button" class="btn ' + (read ? '' : 'btn-primary') + '" style="flex:1" data-act="article" data-id="' + esc(a.id) + '">' + (read ? '' : icon('read', 'i-md')) + '<span>' + esc(read ? t('readAgain') : t('readSummary')) + '</span></button></div>';
    html += '</div></article></div>';
    if (list.length > 1) {
      html += '<section class="section"><div class="section-head"><h2 class="t-h2">' + esc(t('earlierPicks')) + '</h2><span class="t-caption">' + esc(String(list.length - 1)) + '</span></div><div class="rows">';
      list.slice(1).forEach(o => { html += artRow(o); });
      html += '</div></section>';
    }
  }
  html += '<div class="note">' + icon('articles', 'i-md') + '<p><strong>' + esc(t('howPicked')) + '</strong>' + esc(t('howPickedBody')) + '</p></div>';
  return html + '</div>';
}

function tabbar() {
  const tabs = ['today', 'explore', 'articles', 'you'];
  let html = '<nav class="tabbar" aria-label="Main"><div class="rail-brand">' + brand(true) + '</div><button type="button" class="rail-search" data-act="railsearch">' + icon('search', 'i-md') + esc(t('searchShort')) + '</button>';
  tabs.forEach(k => { html += '<button type="button" class="tab" data-act="tab" data-v="' + k + '"' + (V.tab === k ? ' aria-current="page"' : '') + '><span class="pillwrap">' + icon(k) + '</span><span>' + esc(t(k)) + '</span></button>'; });
  html += '<div class="rail-foot"><p>' + esc(t('noAccountBody')) + '</p><p class="signature">' + esc(t('madeBy')) + '</p></div></nav>';
  return html;
}

/* ================= Layers ================= */
// Animated logo for the welcome screen: the line draws in, the dot lifts off it, a warm glow appears,
// the name settles underneath, then the dot keeps floating gently. Same proportions as the MindLift mark.
function logoArt() {
  let s = '<svg class="art logo-anim" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid meet" role="img" aria-label="' + esc(t('logoAlt')) + '" style="background:var(--surface-2)"><rect x="-800" width="2000" height="240" style="fill:var(--surface-2)"/>';
  for (let y = 20, i = 0; y <= 220; y += 20, i++) s += '<path class="ks la-line" d="M-800 ' + y + 'H1200" stroke-opacity="0.07" style="animation-delay:' + (i * 45) + 'ms"/>';
  s += '<circle class="sf la-tw" cx="104" cy="58" r="4" style="animation-delay:2.4s"/><circle class="v la-tw" cx="300" cy="44" r="3" style="animation-delay:3.3s"/><circle class="d la-tw" cx="318" cy="128" r="3.5" style="fill:var(--teal);animation-delay:4.1s"/>';
  s += '<g class="la-float"><g class="la-breathe"><circle class="sf la-halo la-in" cx="200" cy="84" r="44" fill-opacity="0.55"/></g><circle class="v la-dot la-in" cx="200" cy="84" r="26"/></g>';
  s += '<rect class="k la-bar la-in" x="152" y="129" width="96" height="12" rx="6"/>';
  s += '<text class="la-word la-in" x="200" y="190" text-anchor="middle" style="font-family:var(--serif);font-size:34px;font-weight:600;letter-spacing:-0.01em;fill:var(--ink)">MindLift</text>';
  return s + '</svg>';
}
const WP = [
  { k: 'wp0', art: 'logo' },
  { k: 'wp1', art: 'cards' },
  { k: 'wp2', art: 'listen' },
  { k: 'wp3', art: 'articles' },
  { k: 'wp4', art: 'spark' }
];
function obArt(p) {
  if (p.art === 'logo') return logoArt();
  return '<div class="ob-logo">' + logoArt() + '<span class="ob-badge">' + icon(p.art) + '</span></div>';
}
function renderWelcome() {
  const n = WP.length, i = Math.max(0, Math.min(n - 1, V.wp || 0)), p = WP[i], last = i === n - 1;
  let html = '<div class="layer" role="dialog" aria-modal="true" aria-labelledby="welcome-h"><div class="flow">';
  html += '<div class="flow-bar" style="margin-inline:0">' + (i > 0 ? '<button type="button" class="iconbtn" data-act="wp-back" aria-label="' + esc(t('back')) + '" style="margin-left:-8px">' + icon('back') + '</button>' : '') + brand(true) + '<span style="flex:1"></span>' + langSeg('lang-w') + (last ? '' : '<button type="button" class="btn btn-ghost btn-sm" data-act="wp-skip" style="margin-right:-12px">' + esc(t('skip')) + '</button>') + '</div>';
  html += '<div class="flow-body step ob" data-swipe="wp">';
  html += '<div class="ob-art">' + obArt(p) + '</div>';
  html += '<div class="ob-text"><span class="t-over' + (i === 0 ? ' spark' : '') + '">' + esc(t(p.k + 'o', { i: i + 1, n })) + '</span><h1 class="' + (i === 0 ? 't-display' : 't-h1') + '" id="welcome-h" tabindex="-1">' + esc(t(p.k + 't')) + '</h1>';
  (T[S.lang][p.k + 'p'] || T.en[p.k + 'p']).forEach(par => { html += '<p>' + esc(par) + '</p>'; });
  html += '</div>';
  if (last) html += '<div class="ob-foot"><p class="signature">' + esc(t('madeBy')) + '</p><p class="t-caption" style="text-align:center;font-weight:400">' + esc(t('rights')) + '</p></div>';
  html += '</div>';
  html += '<div class="flow-foot"><div class="ob-dots" role="group" aria-label="' + esc(t('obPages')) + '">';
  for (let k = 0; k < n; k++) html += '<button type="button" class="ob-dot" data-act="wp-go" data-v="' + k + '"' + (k === i ? ' aria-current="step"' : '') + ' aria-label="' + esc(t('obPage', { i: k + 1, n })) + '"></button>';
  html += '</div>';
  if (last) html += '<button type="button" class="btn btn-primary btn-block" data-act="setup"><span>' + esc(t('makeItMine')) + '</span>' + icon('arrow', 'i-md') + '</button><button type="button" class="btn btn-ghost btn-block" data-act="welcome-start">' + esc(t('skipStart')) + '</button>';
  else html += '<button type="button" class="btn btn-primary btn-block" data-act="wp-next"><span>' + esc(i === 0 ? t('obStart') : t('next')) + '</span>' + icon('arrow', 'i-md') + '</button>';
  return html + '</div></div></div>';
}
function voicePicker() {
  let h = '<div class="voice-opts" role="radiogroup" aria-label="' + esc(t('voiceLabel')) + '">';
  VOICES.forEach(v => {
    const on = S.voice === v;
    h += '<div class="voice-opt" data-on="' + on + '"><button type="button" class="voice-pick" role="radio" aria-checked="' + on + '" data-act="voice" data-v="' + v + '"><span class="voice-radio" aria-hidden="true"></span><span class="voice-txt"><span class="voice-name">' + esc(t('v_' + v)) + (v === 'ava' ? '<span class="voice-badge">' + esc(t('voiceDefault')) + '</span>' : '') + '</span><span class="voice-desc">' + esc(t('vd_' + v)) + '</span></span></button>';
    h += '<button type="button" class="iconbtn" data-act="voice-sample" data-v="' + v + '" aria-pressed="false" aria-label="' + esc(t('hearVoice', { name: t('v_' + v) })) + '">' + icon('listen', 'i-md') + '</button></div>';
  });
  return h + '</div>';
}
function setSeg(act, cur, opts, label) {
  return '<div class="seg inline" role="group" aria-label="' + esc(label) + '">' + opts.map(o => '<button type="button" data-act="' + act + '" data-v="' + o[0] + '" aria-pressed="' + (String(cur) === String(o[0])) + '">' + o[1] + '</button>').join('') + '</div>';
}
function renderSetup() {
  let html = '<div class="layer" role="dialog" aria-modal="true" aria-labelledby="setup-h"><div class="flow">';
  const fromYou = V.setupFrom === 'you';
  html += '<div class="flow-bar"><button type="button" class="iconbtn" data-act="setup-back" aria-label="' + esc(t('back')) + '">' + icon('back') + '</button><span style="flex:1"></span>' + (fromYou ? '' : '<button type="button" class="btn btn-ghost btn-sm" data-act="setup-skip">' + esc(t('skip')) + '</button>') + '</div>';
  html += '<div class="flow-body step" style="gap:22px"><span class="t-over">' + esc(t('setupOver')) + '</span><h1 class="t-h1" id="setup-h" tabindex="-1" style="margin-top:-14px">' + esc(t('setupTitle')) + '</h1><p class="muted" style="margin-top:-8px">' + esc(t('setupBody')) + '</p>';
  html += '<div class="field"><label for="name-input" class="t-h3">' + esc(t('nameLabel')) + '</label><input id="name-input" class="text-in" type="text" maxlength="30" autocomplete="given-name" autocapitalize="words" spellcheck="false" placeholder="' + esc(t('namePh')) + '" value="' + esc(S.name) + '"><span class="ctx">' + esc(t('nameNote')) + '</span></div>';
  html += '<div class="list">';
  html += '<div class="item"><span class="item-label">' + esc(t('language')) + '</span>' + langSeg('lang-setup') + '</div>';
  html += '<div class="item col"><span class="item-label">' + esc(t('learnHow')) + '</span>' + setSeg('mode', S.mode, [['read', icon('read', 'i-md') + esc(t('read'))], ['listen', icon('listen', 'i-md') + esc(t('listen'))]], t('learnHow')) + '</div>';
  html += '<div class="item col"><span class="item-txt"><span class="item-label">' + esc(t('voiceLabel')) + '</span><span class="item-note">' + esc(t('voiceNote')) + '</span></span>' + voicePicker() + '</div>';
  html += '<div class="item"><span class="item-txt"><span class="item-label" id="mus-l1">' + esc(t('music')) + '</span><span class="item-note">' + esc(t('musicNote')) + '</span></span><button type="button" class="switch" role="switch" aria-labelledby="mus-l1" aria-checked="' + S.music + '" data-act="music-pref"></button></div>';
  html += '<div class="item"><span class="item-txt"><span class="item-label" id="snd-l1">' + esc(t('sounds')) + '</span><span class="item-note">' + esc(t('soundsNote')) + '</span></span><button type="button" class="switch" role="switch" aria-labelledby="snd-l1" aria-checked="' + S.sound + '" data-act="sound"></button></div>';
  html += '<div class="item col"><span class="item-label">' + esc(t('appearance')) + '</span>' + setSeg('theme', S.theme, [['system', esc(t('system'))], ['light', esc(t('light'))], ['dark', esc(t('dark'))]], t('appearance')) + '</div>';
  html += '</div></div>';
  html += '<div class="flow-foot">' + (fromYou ? '<button type="button" class="btn btn-primary btn-block" data-act="setup-save"><span>' + esc(t('saveBtn')) + '</span>' + icon('check', 'i-md') + '</button>' : '<button type="button" class="btn btn-primary btn-block" data-act="setup-next"><span>' + esc(t('cont')) + '</span>' + icon('arrow', 'i-md') + '</button>') + '</div>';
  return html + '</div></div>';
}
function renderInterests() {
  const n = V.draft.length, fromWelcome = V.interestsFrom === 'welcome';
  let html = '<div class="layer" role="dialog" aria-modal="true" aria-labelledby="int-h"><div class="flow">';
  html += '<div class="flow-bar"><button type="button" class="iconbtn" data-act="int-back" aria-label="' + esc(t('back')) + '">' + icon('back') + '</button><span style="flex:1"></span>' + (fromWelcome ? '<button type="button" class="btn btn-ghost btn-sm" data-act="int-skip">' + esc(t('skip')) + '</button>' : '') + '</div>';
  html += '<div class="flow-body"><span class="t-over">' + esc(t('optional')) + '</span><h1 class="t-h1" id="int-h" tabindex="-1" style="margin-top:-8px">' + esc(t('interestsTitle')) + '</h1><p class="muted">' + esc(t('interestsBody')) + '</p>';
  html += '<div class="stack" style="margin-top:6px">';
  CATS.forEach(c => { const on = V.draft.includes(c); html += '<button type="button" class="pick cat-' + c + '" data-act="pick" data-v="' + c + '" aria-pressed="' + on + '"><span class="sw"></span><span class="pl">' + esc(catName(c)) + '</span>' + (on ? icon('check', 'i-md') : '') + '</button>'; });
  html += '</div></div>';
  const label = n ? (S.lang === 'fr' && n === 1 ? t('continue1') : t('continueN', { n })) : t('cont');
  html += '<div class="flow-foot"><button type="button" class="btn btn-primary btn-block" data-act="int-done">' + esc(fromWelcome ? label : t('saveChanges')) + '</button>';
  if (fromWelcome) html += '<button type="button" class="btn btn-ghost btn-block" data-act="surprise">' + icon('surprise', 'i-md') + esc(t('surprise')) + '</button>';
  return html + '</div></div></div>';
}
function progressBar(filled, total, label) {
  let s = '<div class="progress" role="progressbar" aria-label="' + esc(label || t('progress')) + '" aria-valuemin="0" aria-valuemax="' + total + '" aria-valuenow="' + filled + '">';
  for (let i = 0; i < total; i++) s += '<span' + (i < filled ? ' class="on"' : '') + '></span>';
  return s + '</div>';
}
function renderLesson() {
  const st = V.lesson, l = byId(st.id), x = L(l), n = x.s.length, total = n + 3;
  const close = '<button type="button" class="iconbtn" data-act="close-lesson" aria-label="' + esc(t('closeLesson')) + '">' + icon('x') + '</button>';
  const ik = st.step === 'intro' ? coverKey(l) : null;
  let html = '<div class="layer' + (ik ? ' has-cover' : '') + '" id="lesson-layer" role="dialog" aria-modal="true" aria-labelledby="step-h">' + (ik ? coverImg(ik, 'cover-img', true) + '<div class="cover-shade"></div>' : '') + '<div class="flow">';

  if (st.step === 'intro' && ik) {
    html += '<div class="cover-bar"><button type="button" class="iconbtn raised" data-act="close-lesson" aria-label="' + esc(t('closeLesson')) + '">' + icon('x') + '</button>' + saveBtn(l.id, 'raised') + '</div>';
    html += '<div class="cover-text step"><div class="intro-tags">' + tag(l.cat) + evChip(l) + '</div><h1 class="t-h1" id="step-h" tabindex="-1">' + esc(x.t) + '</h1><p class="t-hook">' + esc(x.h) + '</p>' + metaLine(l, true) + '</div>';
    html += '<div class="flow-foot">';
    if (TTS.ok) html += '<div class="seg lg" role="group" aria-label="' + esc(t('lessonMode')) + '"><button type="button" data-act="mode" data-v="read" aria-pressed="' + (S.mode !== 'listen') + '">' + icon('read', 'i-md') + esc(t('read')) + '</button><button type="button" data-act="mode" data-v="listen" aria-pressed="' + (S.mode === 'listen') + '">' + icon('listen', 'i-md') + esc(t('listen')) + '</button></div>';
    html += '<button type="button" class="btn btn-primary btn-block" data-act="step" data-v="card0">' + icon('play', 'i-md') + '<span>' + esc(t('start')) + '</span></button></div>';
  } else if (st.step === 'intro') {
    html += '<div class="intro-art">' + art(l) + '<div class="float"><button type="button" class="iconbtn raised" data-act="close-lesson" aria-label="' + esc(t('closeLesson')) + '">' + icon('x') + '</button>' + saveBtn(l.id, 'raised') + '</div></div>';
    html += '<div class="flow-body step"><div class="intro-tags">' + tag(l.cat) + evChip(l) + '</div><h1 class="t-h1" id="step-h" tabindex="-1">' + esc(x.t) + '</h1><p class="t-hook">' + esc(x.h) + '</p>' + metaLine(l, true) + '</div>';
    html += '<div class="flow-foot">';
    if (TTS.ok) html += '<div class="seg lg" role="group" aria-label="' + esc(t('lessonMode')) + '"><button type="button" data-act="mode" data-v="read" aria-pressed="' + (S.mode !== 'listen') + '">' + icon('read', 'i-md') + esc(t('read')) + '</button><button type="button" data-act="mode" data-v="listen" aria-pressed="' + (S.mode === 'listen') + '">' + icon('listen', 'i-md') + esc(t('listen')) + '</button></div>';
    html += '<button type="button" class="btn btn-primary btn-block" data-act="step" data-v="card0">' + icon('play', 'i-md') + '<span>' + esc(t('start')) + '</span></button></div>';
  } else if (st.step === 'card') {
    const sec = x.s[st.i];
    html += '<div class="flow-bar">' + close + progressBar(st.i + 1, total) + '<button type="button" class="iconbtn" data-act="size" aria-label="' + esc(t('textSize')) + '">' + icon('textsize') + '</button></div>';
    html += '<div class="flow-body step" style="gap:18px"><div class="card-art">' + art(l) + '</div><span class="t-over">' + esc(t('cardOf', { i: st.i + 1, n })) + '</span><h2 class="card-heading" id="step-h" tabindex="-1">' + esc(sec[0]) + '</h2><p class="reading">' + esc(sec[1]) + '</p></div>';
    html += '<div class="flow-foot"><div class="row-btns"><button type="button" class="iconbtn lg raised" data-act="prev" aria-label="' + esc(t('prevCard')) + '">' + icon('back') + '</button>';
    if (TTS.ok) html += '<button type="button" class="btn" id="listen-btn" data-act="listen" aria-pressed="false">' + icon('listen', 'i-md') + '<span>' + esc(t('listen')) + '</span></button>';
    html += '<button type="button" class="btn btn-primary" data-act="next"><span>' + esc(t('next')) + '</span>' + icon('arrow', 'i-md') + '</button></div>';
    if (st.i === 0) html += '<p class="hint">' + esc(t('cardHint')) + '</p>';
    html += '</div>';
  } else if (st.step === 'keys') {
    html += '<div class="flow-bar">' + close + progressBar(n + 1, total) + saveBtn(l.id) + '</div>';
    html += '<div class="flow-body step" style="gap:22px"><span class="t-over">' + esc(t('keyPoints')) + '</span><h1 class="t-h1" id="step-h" tabindex="-1" style="margin-top:-12px">' + esc(t('keepTitle')) + '</h1>';
    html += '<ol class="keys">' + x.k.map((k, i) => '<li><span class="n" aria-hidden="true">' + (i + 1) + '</span><span class="kt">' + esc(k) + '</span></li>').join('') + '</ol>';
    html += '<div class="box"><span class="t-over">' + esc(t('meansForYou')) + '</span><p class="reading">' + esc(x.w) + '</p></div></div>';
    html += '<div class="flow-foot"><div class="row-btns"><button type="button" class="btn" data-act="step" data-v="sources">' + esc(t('skip')) + '</button><button type="button" class="btn btn-primary" data-act="step" data-v="quiz">' + esc(t('checkYourself')) + '</button></div></div>';
  } else if (st.step === 'quiz') {
    const q = x.q[st.qi], picked = st.picked, answered = picked != null, last = st.qi === x.q.length - 1;
    html += '<div class="flow-bar">' + close + progressBar(n + 2, total) + '<span style="width:44px;flex:none"></span></div>';
    html += '<div class="flow-body step" style="gap:20px" data-qi="' + st.qi + '"><span class="t-over">' + esc(t('qOf', { i: st.qi + 1, n: x.q.length })) + '</span><h1 class="question" id="step-h" tabindex="-1" style="margin-top:-8px">' + esc(q[0]) + '</h1><div class="opts">';
    q[1].forEach((o, k) => {
      let cls = 'opt', mark = '', sr = '';
      if (answered) {
        if (k === q[2]) { cls += ' right'; mark = icon('check', 'i-sm'); sr = ' (' + t('rightAnswer') + ')'; }
        else if (k === picked) { cls += ' wrong'; mark = icon('x', 'i-sm'); sr = ' (' + t('yourAnswer') + ')'; }
        else cls += ' dim';
      }
      html += '<button type="button" class="' + cls + '" data-act="answer" data-v="' + k + '"' + (answered ? ' disabled' : '') + '><span class="radio">' + mark + '</span><span class="ot">' + esc(o) + '<span class="sr">' + esc(sr) + '</span></span></button>';
    });
    html += '</div><div role="status">' + (answered ? '<div class="feedback' + (picked === q[2] ? '' : ' bad') + '"><strong class="' + (picked === q[2] ? 'good' : '') + '">' + esc(picked === q[2] ? t('correct') : t('notQuite')) + '</strong><span>' + esc(q[3]) + '</span></div>' : '') + '</div></div>';
    html += '<div class="flow-foot">';
    if (answered) html += '<button type="button" class="btn btn-primary btn-block" data-act="' + (last ? 'step' : 'nextq') + '" data-v="sources"><span>' + esc(last ? t('seeSources') : t('nextQ')) + '</span>' + icon('arrow', 'i-md') + '</button>';
    else html += '<button type="button" class="btn btn-ghost btn-block" data-act="step" data-v="sources">' + esc(t('skipQs')) + '</button>';
    html += '</div>';
  } else if (st.step === 'sources') {
    const ev = EVIDENCE[l.id] || 'established', note = EV_NOTE[l.id] ? EV_NOTE[l.id][S.lang] : t('evDefault');
    html += '<div class="flow-bar">' + close + progressBar(total, total) + '<span style="width:44px;flex:none"></span></div>';
    html += '<div class="flow-body step" style="gap:18px"><span class="t-over">' + esc(t('whereFrom')) + '</span><h1 class="t-h1" id="step-h" tabindex="-1" style="margin-top:-8px">' + esc(t('sources')) + '</h1>';
    html += '<div class="info">' + icon('info', 'i-md') + '<span>' + esc(DISCLOSURE[S.lang]) + '</span></div><div class="srcs">';
    l.src.forEach(s => { html += '<a class="src" href="' + esc(s[2]) + '" target="_blank" rel="noopener noreferrer"><span class="src-ic">' + icon('source', 'i-md') + '</span><span class="src-txt"><span class="src-pub">' + esc(s[1]) + '</span><span class="src-title" lang="en">' + esc(s[0]) + '</span><span class="sr">(' + esc(t('newTab')) + ')</span></span></a>'; });
    html += '</div><div class="sure"><span class="t-h3">' + esc(t('howSure')) + '</span><div>' + evChip(l) + '</div><p>' + esc(note) + '</p></div>';
    html += '<button type="button" class="btn btn-ghost" style="align-self:flex-start;margin-inline:-12px;padding:0 12px" data-act="report">' + icon('report', 'i-md') + esc(t('mistake')) + '</button></div>';
    html += '<div class="flow-foot"><button type="button" class="btn btn-primary btn-block" data-act="step" data-v="done">' + esc(t('finish')) + '</button></div>';
    void ev;
  } else if (st.step === 'done') {
    const isToday = l.id === todayLesson().id, rel = related(l);
    html += '<div class="flow-bar">' + close + '<span style="flex:1"></span></div>';
    html += '<div class="flow-body step" style="gap:28px"><div class="done-top"><span class="done-check">' + icon('check') + '</span><h1 class="t-h1" id="step-h" tabindex="-1">' + esc(isToday ? t('doneToday') : t('doneOther')) + '</h1><p class="muted" style="font-size:17px;line-height:26px">' + esc(t('doneLine')) + '</p></div>';
    if (S.showWeek) html += weekStrip();
    if (rel.length) html += '<section class="section"><span class="t-over" style="min-height:28px">' + esc(t('moreSame')) + '</span><div class="rows">' + rel.map(r => row(r)).join('') + '</div></section>';
    html += '</div><div class="flow-foot"><button type="button" class="btn btn-primary btn-block" data-act="close-lesson">' + esc(t('backToday')) + '</button></div>';
  }
  return html + '</div></div>';
}
function renderArticle() {
  const a = articleById(V.article);
  const close = '<button type="button" class="iconbtn" data-act="close-article" aria-label="' + esc(t('closeArticle')) + '">' + icon('x') + '</button>';
  let html = '<div class="layer" id="article-layer" role="dialog" aria-modal="true" aria-labelledby="art-h"><div class="flow">';
  html += '<div class="flow-bar">' + close + '<span style="flex:1"></span><button type="button" class="iconbtn" data-act="size" aria-label="' + esc(t('textSize')) + '">' + icon('textsize') + '</button></div>';
  if (!a) {
    html += '<div class="flow-body"><h1 class="t-h2" id="art-h" tabindex="-1">' + esc(A.state === 'loading' ? t('artLoading') : t('artGone')) + '</h1></div>';
    return html + '</div></div>';
  }
  const x = AL(a);
  const by = [a.source, a.author, a.published ? dateOf(a.published).toLocaleDateString(locale(), { year: 'numeric', month: 'short', day: 'numeric' }) : ''].filter(Boolean).join(' · ');
  html += '<div class="flow-body step" style="gap:18px"><div class="card-art">' + artPic(a, null, true) + '</div>';
  html += '<div class="intro-tags">' + tag(a.cat) + '<span class="pill-n">' + icon('articles', 'i-sm') + esc(t('fromNews')) + '</span></div>';
  html += '<span class="t-over">' + esc(t('pickedFor', { d: longDate(a.date) })) + '</span>';
  html += '<h1 class="t-h1" id="art-h" tabindex="-1" style="margin-top:-8px">' + esc(x.t) + '</h1>' + (x.h ? '<p class="t-hook">' + esc(x.h) + '</p>' : '');
  html += '<button type="button" class="btn btn-sm" id="art-listen" data-act="art-listen" aria-pressed="false" style="align-self:flex-start">' + icon('listen', 'i-md') + '<span>' + esc(t('listenArticle')) + '</span></button>';
  html += '<p class="art-lead">' + esc(x.s) + '</p>';
  if (x.w) html += '<div class="box"><span class="t-over">' + esc(t('whyRead')) + '</span><p class="reading">' + esc(x.w) + '</p></div>';
  html += '<span class="t-over" style="margin-top:6px">' + esc(t('fullArticle')) + '</span><div class="srcs"><a class="src" href="' + esc(a.url) + '" target="_blank" rel="noopener noreferrer"><span class="src-ic">' + icon('source', 'i-md') + '</span><span class="src-txt"><span class="src-pub">' + esc(by) + '</span><span class="src-title" lang="' + a.lang + '">' + esc(a.title || x.t) + '</span><span class="sr">(' + esc(t('newTab')) + ')</span></span></a>';
  html += '<div class="src-foot"><span>' + esc(t('orig_' + a.lang)) + '</span><span>' + esc(t('minRead', { n: a.min })) + '</span></div></div>';
  html += '<div class="info">' + icon('info', 'i-md') + '<span>' + esc(t('artDisclosure')) + '</span></div>';
  html += '<button type="button" class="btn btn-ghost" style="align-self:flex-start;margin-inline:-12px;padding:0 12px" data-act="report">' + icon('report', 'i-md') + esc(t('mistake')) + '</button></div>';
  html += '<div class="flow-foot"><a class="btn btn-primary btn-block" href="' + esc(a.url) + '" target="_blank" rel="noopener noreferrer"><span>' + esc(t('readFull')) + '</span>' + icon('source', 'i-md') + '<span class="sr">(' + esc(t('newTab')) + ')</span></a></div>';
  return html + '</div></div>';
}
function renderSettings() {
  const seg = (act, cur, opts, label) => '<div class="seg inline" role="group" aria-label="' + esc(label) + '">' + opts.map(o => '<button type="button" data-act="' + act + '" data-v="' + o[0] + '" aria-pressed="' + (String(cur) === String(o[0])) + '"' + (o[2] ? ' aria-label="' + esc(o[2]) + '"' : '') + '>' + o[1] + '</button>').join('') + '</div>';
  const interests = S.interests.length ? CATS.filter(c => S.interests.includes(c)).map(c => CAT_SHORT[S.lang][c]).join(', ') : t('none');
  let html = '<div class="layer" role="dialog" aria-modal="true" aria-labelledby="set-h"><div class="flow">';
  html += '<div class="flow-bar"><button type="button" class="iconbtn" data-act="close-layer" aria-label="' + esc(t('back')) + '">' + icon('back') + '</button></div>';
  html += '<div class="flow-body" style="gap:28px"><h1 class="t-h1" id="set-h" tabindex="-1">' + esc(t('settings')) + '</h1>';

  html += '<div class="group"><span class="t-over">' + esc(t('learning')) + '</span><div class="list">';
  html += '<div class="item col"><label class="item-label" for="name-set">' + esc(t('yourName')) + '</label><input id="name-set" class="text-in" type="text" maxlength="30" autocomplete="given-name" autocapitalize="words" spellcheck="false" placeholder="' + esc(t('namePh')) + '" value="' + esc(S.name) + '"></div>';
  html += '<div class="item"><span class="item-txt"><span class="item-label">' + esc(t('language')) + '</span></span>' + langSeg('lang-s') + '</div>';
  html += '<button type="button" class="item" data-act="interests" data-v="settings"><span class="item-txt"><span class="item-label">' + esc(t('interests')) + '</span></span><span class="item-val">' + esc(interests) + icon('go', 'i-md') + '</span></button>';
  if (TTS.ok) html += '<div class="item col"><div style="display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap"><span class="item-label">' + esc(t('lessonFormat')) + '</span>' + seg('mode', S.mode, [['read', esc(t('read'))], ['listen', esc(t('listen'))]], t('lessonFormat')) + '</div><span class="item-note">' + esc(t('lessonFormatNote')) + '</span></div>';
  html += '<div class="item col"><span class="item-txt"><span class="item-label">' + esc(t('voiceLabel')) + '</span><span class="item-note">' + esc(t('voiceNote')) + '</span></span>' + voicePicker() + '</div>';
  html += '<div class="item"><span class="item-txt"><span class="item-label" id="wk-l">' + esc(t('showWeek')) + '</span><span class="item-note">' + esc(t('showWeekNote')) + '</span></span><button type="button" class="switch" role="switch" aria-labelledby="wk-l" aria-checked="' + S.showWeek + '" data-act="showweek"></button></div>';
  html += '<div class="item"><span class="item-txt"><span class="item-label" id="pr-l">' + esc(t('showPractice')) + '</span><span class="item-note">' + esc(t('showPracticeNote')) + '</span></span><button type="button" class="switch" role="switch" aria-labelledby="pr-l" aria-checked="' + S.showPractice + '" data-act="showpractice"></button></div>';
  html += '<div class="item"><span class="item-txt"><span class="item-label" id="snd-l">' + esc(t('sounds')) + '</span><span class="item-note">' + esc(t('soundsNote')) + '</span></span><button type="button" class="switch" role="switch" aria-labelledby="snd-l" aria-checked="' + S.sound + '" data-act="sound"></button></div>';
  html += '<div class="item"><span class="item-txt"><span class="item-label" id="mus-l">' + esc(t('music')) + '</span><span class="item-note">' + esc(t('musicNote')) + '</span></span><button type="button" class="switch" role="switch" aria-labelledby="mus-l" aria-checked="' + S.music + '" data-act="music-pref"></button></div>';
  if (S.music) html += '<div class="item col"><span class="item-label">' + esc(t('musicVolume')) + '</span>' + seg('musicvol', S.musicVol, [[0, esc(t('volQuiet'))], [1, esc(t('volMedium'))], [2, esc(t('volFull'))]], t('musicVolume')) + '</div>';
  html += '</div></div>';

  html += '<div class="group"><span class="t-over">' + esc(t('display')) + '</span><div class="list">';
  html += '<div class="item col"><span class="item-label">' + esc(t('appearance')) + '</span>' + seg('theme', S.theme, [['system', esc(t('system'))], ['light', esc(t('light'))], ['dark', esc(t('dark'))]], t('appearance')) + '</div>';
  html += '<div class="item" style="flex-wrap:wrap"><span class="item-label">' + esc(t('textSize')) + '</span>' + seg('setsize', S.size, [[0, '<span class="size-a" style="font-size:14px">A</span>', t('smaller')], [1, '<span class="size-a" style="font-size:18px">A</span>', t('defaultSize')], [2, '<span class="size-a" style="font-size:22px">A</span>', t('larger')]], t('textSize')) + '</div>';
  html += '</div></div>';

  html += '<div class="group"><span class="t-over">' + esc(t('privacy')) + '</span><div class="list">';
  html += '<div class="item"><span class="item-txt"><span class="item-label">' + esc(t('knows')) + '</span><span class="item-note">' + esc(t('knowsBody')) + '</span></span></div>';
  html += '<button type="button" class="item danger" data-act="clear"><span class="item-txt"><span class="item-label">' + esc(t('clear')) + '</span></span>' + icon('history', 'i-md') + '</button>';
  html += '</div></div>';

  html += '<div class="group"><span class="t-over">' + esc(t('about')) + '</span><div class="list">';
  html += '<button type="button" class="item" data-act="howmade"><span class="item-txt"><span class="item-label">' + esc(t('howMade')) + '</span><span class="item-note">' + esc(t('howMadeNote')) + '</span></span>' + icon('go', 'i-md') + '</button>';
  html += '<button type="button" class="item" data-act="report"><span class="item-txt"><span class="item-label">' + esc(t('report')) + '</span></span>' + icon('report', 'i-md') + '</button>';
  html += '<button type="button" class="item" data-act="replay-intro"><span class="item-txt"><span class="item-label">' + esc(t('replayIntro')) + '</span></span>' + icon('go', 'i-md') + '</button>';
  html += '<div class="item"><span class="item-label">' + esc(t('version')) + '</span><span class="item-val">' + esc(t('versionVal')) + '</span></div>';
  html += '<div class="item"><span class="item-label">' + esc(t('madeByLabel')) + '</span><span class="item-val signature" style="font-size:16px">Yacine Belalia</span></div>';
  html += '<div class="item"><span class="item-note">' + esc(t('rights')) + '</span></div>';
  html += '</div></div></div>';
  return html + '</div></div>';
}

/* ================= Sheets ================= */
function renderSheet() {
  const sh = V.sheet;
  if (!sh) return '';
  let body = '';
  const head = (title) => '<div class="grabber"></div><div class="sheet-head"><h2 class="t-h2" id="sheet-h" tabindex="-1">' + esc(title) + '</h2><button type="button" class="iconbtn" data-act="close-sheet" aria-label="' + esc(t('close')) + '">' + icon('x') + '</button></div>';
  if (sh.type === 'howmade') {
    body = head(t('howMade')) + T[S.lang].howMadeP.map(p => '<p>' + esc(p) + '</p>').join('') + '<div style="display:flex;gap:8px;flex-wrap:wrap"><span class="ev ev-established">' + icon('check', 'i-sm') + esc(t('ev_established')) + '</span><span class="ev ev-leading">' + icon('info', 'i-sm') + esc(t('ev_leading')) + '</span><span class="ev ev-early">' + icon('info', 'i-sm') + esc(t('ev_early')) + '</span></div>';
  } else if (sh.type === 'aboutpractice') {
    body = head(t('aboutPractice')) + T[S.lang].aboutPracticeP.map(p => '<p>' + esc(p) + '</p>').join('') + '<span class="t-over">' + esc(t('sources')) + '</span><div class="srcs">' + PRACTICE_SRC.map(s => '<a class="src" href="' + esc(s[2]) + '" target="_blank" rel="noopener noreferrer"><span class="src-ic">' + icon('source', 'i-md') + '</span><span class="src-txt"><span class="src-pub">' + esc(s[1]) + '</span><span class="src-title" lang="en">' + esc(s[0]) + '</span><span class="sr">(' + esc(t('newTab')) + ')</span></span></a>').join('') + '</div>';
  } else if (sh.type === 'clear') {
    body = head(t('clearTitle')) + '<p class="muted">' + esc(t('clearBody')) + '</p><div class="stack"><button type="button" class="btn btn-primary btn-block" data-act="clear-yes">' + esc(t('clearYes')) + '</button><button type="button" class="btn btn-block" data-act="close-sheet">' + esc(t('cancel')) + '</button></div>';
  } else if (sh.type === 'report') {
    body = head(t('report')) + '<p class="muted">' + esc(t('reportBody')) + '</p><div class="field"><label for="report-text">' + esc(t('reportLabel')) + '</label><textarea id="report-text" class="textarea" placeholder="' + esc(t('reportPh')) + '">' + esc(sh.text || '') + '</textarea><span class="ctx">' + esc(reportContext()) + '</span></div><button type="button" class="btn btn-primary btn-block" data-act="copy-report">' + esc(t('copy')) + '</button><p class="status-line" role="status" id="report-status"></p><div id="report-fallback"></div>';
  }
  return '<div class="scrim" data-act="scrim"><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-h">' + body + '</div></div>';
}
function reportContext() {
  const parts = ['MindLift beta', S.lang.toUpperCase()];
  if (V.layer === 'article' && V.article) {
    const a = articleById(V.article);
    parts.push((S.lang === 'fr' ? 'Article du ' : 'Article for ') + V.article + (a ? ' ' + AL(a).t : ''));
  } else if (V.lesson) {
    const l = byId(V.lesson.id), x = L(l);
    parts.push('#' + l.day + ' ' + x.t);
    if (V.lesson.step === 'card') parts.push((S.lang === 'fr' ? 'carte ' : 'card ') + (V.lesson.i + 1));
    else parts.push(V.lesson.step);
  }
  if (V.game) parts.push((S.lang === 'fr' ? 'pratique : ' : 'practice: ') + gameName(V.game.id));
  return parts.join(' · ');
}

/* ================= Render ================= */
let prevKey = '', prevLayer = '';
function render(focusSel) {
  applyPrefs();
  const root = document.getElementById('root');
  const oldLayer = root.querySelector('.layer');
  const oldScroll = oldLayer ? oldLayer.scrollTop : 0;
  const layerKey = V.layer || '';
  const key = layerKey + '|' + (V.lesson ? V.lesson.id + V.lesson.step + V.lesson.i + '-' + V.lesson.qi : '') + (V.layer === 'game' && V.game ? gameKey() : '') + (V.layer === 'article' ? V.article : '') + (V.layer === 'welcome' ? V.wp : '');
  let html = '';
  if (V.layer !== 'welcome' && V.layer !== 'setup' && !(V.layer === 'interests' && V.interestsFrom === 'welcome')) {
    html += tabbar() + '<main class="main" id="main">' + (V.tab === 'today' ? renderToday() : V.tab === 'explore' ? renderExplore() : V.tab === 'articles' ? renderArticles() : renderYou()) + '</main>';
  }
  if (V.layer === 'welcome') html += renderWelcome();
  else if (V.layer === 'setup') html += renderSetup();
  else if (V.layer === 'interests') html += renderInterests();
  else if (V.layer === 'lesson') html += renderLesson();
  else if (V.layer === 'settings') html += renderSettings();
  else if (V.layer === 'game' && V.game) html += renderGame();
  else if (V.layer === 'article') html += renderArticle();
  root.innerHTML = html;
  const layerEl = root.querySelector('.layer');
  if (layerEl) {
    if (layerKey === prevLayer) layerEl.classList.add('still-layer');
    if (key === prevKey) { layerEl.classList.add('still'); layerEl.scrollTop = oldScroll; }
    layerEl.inert = !!V.sheet;
  }
  prevKey = key; prevLayer = layerKey;
  const main = document.getElementById('main');
  if (main) main.inert = !!V.layer || !!V.sheet;
  const nav = root.querySelector('.tabbar');
  if (nav) nav.inert = !!V.layer || !!V.sheet;
  document.getElementById('sheet-host').innerHTML = renderSheet();
  document.documentElement.classList.toggle('locked', !!V.layer || !!V.sheet);
  if (focusSel) {
    const el = (V.sheet && document.getElementById('sheet-h')) || document.querySelector(focusSel);
    if (el) { try { el.focus({ preventScroll: true }); } catch (e) { el.focus(); } }
  }
}
function go(fn, focusSel) { fn(); render(focusSel); }

/* ================= Actions ================= */
function openLesson(id) {
  stopSpeak();
  V.lesson = { id, step: 'intro', i: 0, qi: 0, picked: null };
  V.layer = 'lesson';
  render('#step-h');
  const layer = document.getElementById('lesson-layer'); if (layer) layer.scrollTop = 0;
}
function setStep(step, extra) {
  stopSpeak();
  Object.assign(V.lesson, { step }, extra || {});
  const l = byId(V.lesson.id);
  if (step === 'keys') markRead(l.id);
  render('#step-h');
  const layer = document.getElementById('lesson-layer'); if (layer) layer.scrollTop = 0;
  if (step === 'card') { if (S.mode === 'listen') { if (extra && extra.intro) playIntroThenCard(l); else playCard(l, V.lesson.i); } preloadCard(l, V.lesson.i + 1); }
}
function nextCard() {
  const l = byId(V.lesson.id), n = L(l).s.length;
  if (V.lesson.i < n - 1) setStep('card', { i: V.lesson.i + 1 }); else setStep('keys');
}
function prevCard() {
  if (V.lesson.i > 0) setStep('card', { i: V.lesson.i - 1 }); else setStep('intro');
}
function closeLesson() {
  stopSpeak();
  V.lesson = null; V.layer = null; V.sheet = null;
  render('#page-h');
}
function openArticle(id) {
  stopSpeak();
  V.article = id; V.layer = 'article';
  if (articleById(id)) markArtRead(id);
  render('#art-h');
  const layer = document.getElementById('article-layer'); if (layer) layer.scrollTop = 0;
}
function closeArticle() {
  const id = V.article;
  V.article = null; V.layer = null; V.sheet = null;
  render();
  const el = document.querySelector('[data-act="article"][data-id="' + (window.CSS && CSS.escape ? CSS.escape(id || '') : id) + '"]') || document.getElementById('page-h');
  if (el) { try { el.focus({ preventScroll: true }); } catch (e) { el.focus(); } }
}
function setTab(k) {
  if (!['today', 'explore', 'articles', 'you'].includes(k)) k = 'today';
  V.tab = k; V.layer = null;
  render('#page-h');
  window.scrollTo(0, 0);
}
function openSheet(type) { V.sheet = { type, ret: '[data-act="' + type + '"]' }; render('#sheet-h'); }
function closeSheet() {
  const ret = V.sheet && V.sheet.ret;
  V.sheet = null; render();
  const el = ret && document.querySelector(ret);
  if (el) { try { el.focus({ preventScroll: true }); } catch (e) { el.focus(); } }
}
function copyReport(btn) {
  const ta = document.getElementById('report-text');
  const text = 'MindLift — ' + reportContext() + '\n\n' + (ta ? ta.value.trim() : '');
  const status = document.getElementById('report-status');
  const fallback = () => {
    if (status) status.textContent = t('copyFail');
    const fb = document.getElementById('report-fallback');
    if (fb) { fb.innerHTML = '<textarea class="textarea" readonly aria-label="' + esc(t('report')) + '"></textarea>'; const f = fb.firstChild; f.value = text; f.focus(); f.select(); }
  };
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => { if (status) status.textContent = t('copied'); }, fallback);
    } else fallback();
  } catch (e) { fallback(); }
  void btn;
}

/* ================= Practice: views ================= */
let GT = null;
function clearGT() { if (GT) { clearTimeout(GT); GT = null; } }
function gameName(g) { return t('g_' + g); }
function playedToday(g) { const d = ymd(new Date()), h = S.practice[g].hist; for (let i = h.length - 1; i >= 0; i--) if (h[i].d === d) return h[i]; return null; }
function recallEntry() {
  const today = ymd(new Date());
  for (let i = S.log.length - 1; i >= 0; i--) { const e = S.log[i]; if (e && typeof e.d === 'string' && e.d < today && byId(e.id)) return e; }
  return null;
}
function featuredGame() {
  const i = (dayOfYear(new Date()) - 1) % GAME_IDS.length;
  for (let k = 0; k < GAME_IDS.length; k++) { const g = GAME_IDS[(i + k) % GAME_IDS.length]; if (g !== 'y3' || recallEntry()) return g; }
  return 'cw';
}
function secs(ms) { return (ms / 1000).toLocaleString(locale(), { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' s'; }
function gameSummary(g, e) {
  if (!e) return '';
  if (g === 'y3') return t('ofN', { n: e.n, of: 3 });
  if (g === 'cw') return t('ofN', { n: e.n, of: e.of }) + (e.ms ? ' · ' + secs(e.ms) : '');
  return e.max ? t('nmCount', { n: e.max }) : '';
}
function fromLabel(e) {
  if (e.d === ymd(addDays(new Date(), -1))) return t('fromYesterday');
  const p = e.d.split('-').map(Number);
  return t('fromDate', { date: new Date(p[0], p[1] - 1, p[2]).toLocaleDateString(locale(), { month: 'long', day: 'numeric' }) });
}
function focusSelOf(el) {
  if (!el || !el.dataset || !el.dataset.act) return null;
  return '[data-act="' + el.dataset.act + '"]' + (el.dataset.v != null ? '[data-v="' + el.dataset.v + '"]' : '');
}
function gameArt(id, fit) {
  let s = '';
  if (id === 'y3') {
    s = '<rect class="d" x="112" y="62" width="150" height="110" rx="14" fill-opacity="0.22" transform="rotate(-9 187 117)"/>'
      + '<rect class="d" x="124" y="66" width="150" height="110" rx="14" fill-opacity="0.45" transform="rotate(-3 199 121)"/>'
      + '<rect class="pg" x="134" y="72" width="150" height="110" rx="14"/>'
      + '<rect class="d" x="154" y="98" width="88" height="9" rx="4.5"/><rect class="d" x="154" y="119" width="110" height="9" rx="4.5" fill-opacity="0.45"/><rect class="d" x="154" y="140" width="72" height="9" rx="4.5" fill-opacity="0.45"/>'
      + '<circle class="v" cx="284" cy="70" r="12"/>';
  } else if (id === 'cw') {
    s = '<circle class="c-red" cx="168" cy="88" r="26"/><circle class="c-blue" cx="232" cy="88" r="26"/><circle class="c-green" cx="168" cy="152" r="26"/><circle class="c-yellow" cx="232" cy="152" r="26"/>';
  } else {
    [140, 200, 260].forEach((x, i) => { s += '<rect class="pg" x="' + (x - 27) + '" y="76" width="54" height="88" rx="12"/><text class="dg' + (i === 1 ? ' v' : '') + '" x="' + x + '" y="143">' + [4, 7, 2][i] + '</text>'; });
  }
  return '<svg class="art g-' + id + '" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid ' + (fit === 'thumb' ? 'slice' : 'meet') + '" aria-hidden="true"><rect class="t" width="400" height="240"/>' + s + '</svg>';
}
function gameRow(g, sub) {
  const locked = g === 'y3' && !recallEntry();
  const cap = locked ? t('y3Locked') : (sub != null ? sub : t('d_' + g));
  return '<button type="button" class="row" data-act="game" data-v="' + g + '"' + (locked ? ' disabled' : '') + '><div class="thumb">' + gameArt(g, 'thumb') + '</div><div class="row-txt"><span class="row-title">' + esc(gameName(g)) + '</span><span class="t-caption">' + esc(cap) + '</span></div><span class="row-end">' + (locked ? '' : icon('go', 'i-md')) + '</span></button>';
}
function practiceSection() {
  const f = featuredGame(), done = playedToday(f), sum = gameSummary(f, done);
  let html = '<section class="section" style="gap:12px"><div class="section-head"><h2 class="t-h2">' + esc(t('todaysPractice')) + '</h2><button type="button" class="link" data-act="aboutpractice">' + esc(t('aboutShort')) + '</button></div>';
  html += '<article class="pcard"><div class="pcard-top"><div class="pcard-art">' + gameArt(f, 'thumb') + '</div><div class="pcard-txt"><span class="t-over">' + esc(t('practiceMeta', { n: GAME_MIN[f] })) + '</span><h3 class="pcard-title">' + esc(gameName(f)) + '</h3><p class="pcard-desc">' + esc(t('d_' + f)) + '</p>';
  if (done) html += '<p class="daily-done">' + icon('check', 'i-sm') + esc(t('playedToday') + (sum ? ' · ' + sum : '')) + '</p>';
  html += '</div></div><button type="button" class="btn btn-block" data-act="game" data-v="' + f + '">' + (done ? '' : icon('play', 'i-md')) + '<span>' + esc(done ? t('playAgain') : t('play')) + '</span></button></article>';
  html += '<div style="display:flex;flex-direction:column"><span class="t-over" style="min-height:28px;display:flex;align-items:center">' + esc(t('otherGames')) + '</span><div class="rows">' + GAME_IDS.filter(g => g !== f).map(g => gameRow(g)).join('') + '</div></div>';
  html += '<p class="practice-note">' + esc(t('practiceHonest')) + '</p>';
  return html + '</section>';
}
function bestLine(g) {
  const P = S.practice[g], h = P.hist;
  if (!h.length) return t('notPlayed');
  if (g === 'y3') return t('lastTime', { s: t('ofN', { n: h[h.length - 1].n, of: 3 }) });
  if (g === 'cw') {
    const at = h.filter(e => e.lvl === P.level && e.ms > 0), b = at.length ? Math.min.apply(null, at.map(e => e.ms)) : 0;
    return t('levelN', { n: P.level }) + (b ? ' · ' + t('bestTime', { s: secs(b) }) : '');
  }
  if (!P.bestF) return t('noFullYet');
  return t('longest', { n: P.bestF }) + (P.bestB ? ' · ' + t('longestBack', { n: P.bestB }) : '');
}
function youPractice() {
  let html = '<section class="section"><div class="section-head"><h2 class="t-h2">' + esc(t('practice')) + '</h2><button type="button" class="link" data-act="aboutpractice">' + esc(t('aboutShort')) + '</button></div>';
  html += '<div class="rows">' + GAME_IDS.map(g => gameRow(g, bestLine(g))).join('') + '</div>';
  return html + '<p class="practice-note" style="padding-top:8px">' + esc(t('ownPast')) + '</p></section>';
}

function gameKey() {
  const G = V.game;
  if (G.step !== 'play') return G.id + G.step;
  if (G.id === 'y3') return 'y3q' + G.qi;
  if (G.id === 'nm') return 'nm' + G.round + G.phase;
  return 'cwplay';
}
function renderGame() {
  const G = V.game;
  const close = '<button type="button" class="iconbtn" data-act="game-close" aria-label="' + esc(t('closePractice')) + '">' + icon('x') + '</button>';
  let html = '<div class="layer" id="game-layer" role="dialog" aria-modal="true" aria-labelledby="step-h"><div class="flow">';
  if (G.step === 'intro') html += gameIntro(G, close);
  else if (G.step === 'done') html += gameDone(G, close);
  else if (G.id === 'y3') html += y3Play(G, close);
  else if (G.id === 'cw') html += cwPlay(G, close);
  else html += nmPlay(G, close);
  return html + '</div></div>';
}
function gameIntro(G, close) {
  const id = G.id, rules = [];
  let html = '<div class="flow-bar">' + close + '<span style="flex:1"></span></div>';
  html += '<div class="flow-body step" style="gap:18px"><div class="card-art">' + gameArt(id) + '</div><span class="t-over">' + esc(t('practiceMeta', { n: GAME_MIN[id] })) + '</span><h1 class="t-h1" id="step-h" tabindex="-1" style="margin-top:-8px">' + esc(gameName(id)) + '</h1><p class="t-hook">' + esc(t('d_' + id)) + '</p>';
  if (id === 'y3') {
    const l = byId(G.lessonId);
    html += '<div class="lesson-ref"><div class="thumb">' + art(l, 'thumb') + '</div><div class="row-txt"><span class="t-caption">' + esc(fromLabel(G.entry)) + '</span><span class="row-title">' + esc(L(l).t) + '</span></div></div>';
    rules.push(t('y3r1'), t('y3r2'));
  } else if (id === 'cw') {
    const lv = S.practice.cw.level;
    html += '<div class="meta t-caption"><span>' + icon('cards', 'i-sm') + esc(t('levelOf', { n: lv })) + '</span></div>';
    rules.push(t('cwr1'), t('cwr2'), t('cwr3', { n: CW_N }));
    if (lv >= 3) rules.push(t('cwrLang'));
    if (lv >= 4) rules.push(t('cwrMove'));
  } else {
    const P = S.practice.nm, open = P.bestF >= 6, back = open && P.dir === 'b';
    html += '<div class="meta t-caption"><span>' + icon('cards', 'i-sm') + esc(t('startsAt', { n: back ? P.startB : P.start })) + '</span></div>';
    if (open) html += '<div class="seg" role="group" aria-label="' + esc(t('direction')) + '"><button type="button" data-act="nm-dir" data-v="f" aria-pressed="' + !back + '">' + esc(t('forwards')) + '</button><button type="button" data-act="nm-dir" data-v="b" aria-pressed="' + back + '">' + esc(t('backwards')) + '</button></div>';
    rules.push(t('nmr1'), back ? t('nmr2b') : t('nmr2f'), t('nmr3', { n: NM_ROUNDS }));
    if (!open) rules.push(t('backLocked'));
  }
  html += '<div class="box"><span class="t-over">' + esc(t('howToPlay')) + '</span><ul class="rules">' + rules.map(r => '<li>' + esc(r) + '</li>').join('') + '</ul></div>';
  html += '<div class="info">' + icon('info', 'i-md') + '<span>' + esc(t('practiceHonest')) + '</span></div>';
  if (id === 'cw') html += '<p class="practice-note">' + esc(t('colourNote')) + '</p>';
  html += '</div><div class="flow-foot"><button type="button" class="btn btn-primary btn-block" data-act="game-start">' + icon('play', 'i-md') + '<span>' + esc(t('start')) + '</span></button></div>';
  return html;
}
function y3Play(G, close) {
  const l = byId(G.lessonId), q = L(l).q[G.qi], picked = G.picked, answered = picked != null, last = G.qi === 2;
  let html = '<div class="flow-bar">' + close + progressBar(G.qi + (answered ? 1 : 0), 3, t('practiceProgress')) + '<span style="width:44px;flex:none"></span></div>';
  html += '<div class="flow-body step" style="gap:20px"><span class="t-over">' + esc(t('qOfPlain', { i: G.qi + 1, n: 3 })) + '</span><h1 class="question" id="step-h" tabindex="-1" style="margin-top:-8px">' + esc(q[0]) + '</h1><div class="opts">';
  G.order[G.qi].forEach(k => {
    let cls = 'opt', mark = '', sr = '';
    if (answered) {
      if (k === q[2]) { cls += ' right'; mark = icon('check', 'i-sm'); sr = ' (' + t('rightAnswer') + ')'; }
      else if (k === picked) { cls += ' wrong'; mark = icon('x', 'i-sm'); sr = ' (' + t('yourAnswer') + ')'; }
      else cls += ' dim';
    }
    html += '<button type="button" class="' + cls + '" data-act="y3-answer" data-v="' + k + '"' + (answered ? ' disabled' : '') + '><span class="radio">' + mark + '</span><span class="ot">' + esc(q[1][k]) + '<span class="sr">' + esc(sr) + '</span></span></button>';
  });
  html += '</div><div role="status">' + (answered ? '<div class="feedback' + (picked === q[2] ? '' : ' bad') + '"><strong class="' + (picked === q[2] ? 'good' : '') + '">' + esc(picked === q[2] ? t('correct') : t('notQuite')) + '</strong><span>' + esc(q[3]) + '</span></div>' : '') + '</div></div>';
  if (answered) html += '<div class="flow-foot"><button type="button" class="btn btn-primary btn-block" data-act="y3-next"><span>' + esc(last ? t('seeResult') : t('nextQ')) + '</span>' + icon('arrow', 'i-md') + '</button></div>';
  return html;
}
function cwPlay(G, close) {
  const tr = G.trials[G.i], fb = G.fb;
  let html = '<div class="flow-bar">' + close + progressBar(G.i + (fb ? 1 : 0), CW_N, t('practiceProgress')) + '<span style="width:44px;flex:none"></span></div>';
  html += '<div class="flow-body" style="gap:18px"><span class="t-over" id="step-h" tabindex="-1">' + esc(t('inkPrompt')) + '</span>';
  html += '<div class="cw-stage"><span class="cw-word' + (fb ? '' : ' in') + '" style="color:var(--cw-' + tr.ink + ')" lang="' + tr.lang + '">' + esc(CW_WORDS[tr.lang][tr.word]) + '</span></div>';
  html += '<div class="cw-opts">' + tr.order.map(c => {
    let cls = 'cw-btn', mk = '';
    if (fb) { if (c === tr.ink) { cls += ' right'; mk = icon('check', 'i-md'); } else if (c === fb.c) { cls += ' wrong'; mk = icon('x', 'i-md'); } else cls += ' dim'; }
    return '<button type="button" class="' + cls + '" data-act="cw-pick" data-v="' + c + '"' + (fb ? ' disabled' : '') + '><span class="sw" style="background:var(--cw-' + c + ')"></span><span>' + esc(CW_NAMES[S.lang][c]) + '</span>' + (mk ? '<span class="mk">' + mk + '</span>' : '') + '</button>';
  }).join('') + '</div>';
  html += '<p class="sr" role="status">' + (fb ? esc(fb.ok ? t('correct') : t('notQuite')) : '') + '</p><p class="hint">' + esc(t('trialOf', { i: G.i + 1, n: CW_N })) + '</p></div>';
  return html;
}
function slotsHtml(str, n, cls) {
  let s = '<div class="slots" aria-hidden="true">';
  for (let i = 0; i < n; i++) s += '<span class="slot' + (cls ? cls(i) : '') + '">' + (i < str.length ? esc(str[i]) : '') + '</span>';
  return s + '</div>';
}
function slotGroup(label, slots) { return '<div style="display:flex;flex-direction:column;gap:8px">' + (label ? '<span class="slot-label">' + esc(label) + '</span>' : '') + slots + '</div>'; }
function nmPlay(G, close) {
  const back = G.dir === 'b', round = t('roundOf', { i: G.round + 1, n: NM_ROUNDS });
  let html = '<div class="flow-bar">' + close + progressBar(G.round + (G.phase === 'result' ? 1 : 0), NM_ROUNDS, t('practiceProgress')) + '<span style="width:44px;flex:none"></span></div>';
  if (G.phase === 'show') {
    html += '<div class="flow-body" style="gap:18px"><span class="t-over" id="step-h" tabindex="-1">' + esc(round + ' · ' + t('watch')) + '</span>';
    html += '<div class="nm-stage">' + (G.blank ? '' : '<span class="nm-digit">' + esc(G.seq[G.shown]) + '</span>') + '</div>';
    html += '<div class="nm-dots" aria-hidden="true">' + G.seq.split('').map((_, i) => '<span' + ((i < G.shown || (i === G.shown && !G.blank)) ? ' class="on"' : '') + '></span>').join('') + '</div>';
    html += '<p class="hint">' + esc(t('nmCount', { n: G.span }) + (back ? ' · ' + t('backwards') : '')) + '</p></div>';
  } else if (G.phase === 'input') {
    const full = G.typed.length === G.span;
    html += '<div class="flow-body step" style="gap:18px"><span class="t-over">' + esc(round) + '</span><h1 class="question" id="step-h" tabindex="-1" style="margin-top:-8px">' + esc(back ? t('typeBack', { n: G.span }) : t('typeThem', { n: G.span })) + '</h1>';
    html += slotsHtml(G.typed, G.span, i => i === G.typed.length ? ' cur' : '');
    html += '<p class="sr" role="status">' + esc(G.typed.split('').join(' ')) + '</p>';
    html += '<div class="keypad" role="group" aria-label="' + esc(t('digits')) + '">';
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'].forEach(d => { html += '<button type="button" class="key" data-act="nm-key" data-v="' + d + '">' + d + '</button>'; });
    html += '<span class="key-gap"></span><button type="button" class="key" data-act="nm-key" data-v="0">0</button><button type="button" class="key" data-act="nm-del" aria-label="' + esc(t('del')) + '">' + icon('backspace') + '</button></div></div>';
    html += '<div class="flow-foot"><button type="button" class="btn btn-primary btn-block" data-act="nm-check"' + (full ? '' : ' disabled') + '>' + esc(t('checkBtn')) + '</button></div>';
  } else {
    const ok = G.lastOk, want = G.want, last = G.round === NM_ROUNDS - 1;
    html += '<div class="flow-body step" style="gap:20px"><span class="t-over">' + esc(round) + '</span><h1 class="question" id="step-h" tabindex="-1" style="margin-top:-8px">' + esc(ok ? t('nmRight') : t('nmWrong')) + '</h1>';
    html += slotGroup(t('youTyped'), slotsHtml(G.typed, G.span, i => G.typed[i] === want[i] ? ' good' : ' bad'));
    if (!ok) html += slotGroup(t('itWas'), slotsHtml(want, G.span));
    html += '<p class="sr">' + esc(t('youTyped') + ' ' + G.typed.split('').join(' ') + '. ' + t('itWas') + ' ' + want.split('').join(' ') + '.') + '</p>';
    if (!last) html += '<p class="muted" style="text-align:center">' + esc(t('nmNext', { n: G.nextSpan })) + '</p>';
    html += '</div><div class="flow-foot"><button type="button" class="btn btn-primary btn-block" data-act="nm-next"><span>' + esc(last ? t('seeResult') : t('nextRound')) + '</span>' + icon('arrow', 'i-md') + '</button></div>';
  }
  return html;
}
function gameDone(G, close) {
  const r = G.res, id = G.id;
  let line = '', stats = [], extra = '';
  if (id === 'y3') {
    line = r.prev ? t('lastTimeLine', { s: t('ofN', { n: r.prev.n, of: 3 }) }) : t('firstRound');
    stats = [[r.n + '/3', t('statRight')], [r.prev ? r.prev.n + '/3' : '—', t('statLast')]];
  } else if (id === 'cw') {
    if (!r.hadPrev) line = t('firstRound');
    else if (r.ms && r.ms < r.best) line = t('fastestYet');
    else if (r.ms && r.ms < r.last.ms) line = t('fasterThanLast');
    else line = t('lastRoundAt', { s: secs(r.last.ms) });
    stats = [[r.n + '/' + CW_N, t('statRight')], [r.ms ? secs(r.ms) : '—', t('statAvg')], [String(r.level), t('statLevel')]];
    extra = r.change > 0 ? t('levelUp') : (r.change < 0 ? t('levelDown') : t('levelSame'));
  } else {
    if (!r.hadPrev) line = t('firstRound');
    else if (r.isBest) line = t('newBest');
    else line = r.best ? t('yourLongest', { n: r.best }) : t('noFullYet');
    stats = [[r.max ? String(r.max) : '—', t('statLongest')], [r.best ? String(r.best) : '—', t('statBest')], [r.ok + '/' + NM_ROUNDS, t('statRounds')]];
    extra = (r.unlocked ? t('backOpen') + ' ' : '') + t('nextStarts', { n: r.next });
  }
  let html = '<div class="flow-bar">' + close + '<span style="flex:1"></span></div>';
  html += '<div class="flow-body step" style="gap:24px"><div class="done-top"><span class="done-check">' + icon('check') + '</span><h1 class="t-h1" id="step-h" tabindex="-1">' + esc(r.tier === 'great' ? (S.name ? t('greatRoundName', { name: S.name }) : t('greatRound')) : t('practiceDone')) + '</h1><p class="muted" style="font-size:17px;line-height:26px">' + esc(line) + '</p></div>';
  html += '<div class="card"><div class="stats">' + stats.map(s => '<div><div class="stat-n">' + esc(s[0]) + '</div><div class="stat-l">' + esc(s[1]) + '</div></div>').join('') + '</div>' + (extra ? '<div class="divider"></div><p class="muted" style="font-size:15px;line-height:22px">' + esc(extra) + '</p>' : '') + '</div>';
  if (id === 'y3') { const l = byId(G.lessonId); html += '<button type="button" class="lesson-ref" data-act="game-lesson"><div class="thumb">' + art(l, 'thumb') + '</div><div class="row-txt"><span class="t-caption">' + esc(t('rereadLesson')) + '</span><span class="row-title">' + esc(L(l).t) + '</span></div><span class="row-end">' + icon('go', 'i-md') + '</span></button>'; }
  html += '<p class="practice-note">' + esc(t('practiceHonest')) + '</p>';
  html += '<section class="section"><span class="t-over" style="min-height:28px">' + esc(t('tryAnother')) + '</span><div class="rows">' + GAME_IDS.filter(g => g !== id).map(g => gameRow(g)).join('') + '</div></section>';
  html += '</div><div class="flow-foot"><button type="button" class="btn btn-primary btn-block" data-act="game-close">' + esc(t('practiceFinish')) + '</button></div>';
  return html;
}

/* ================= Practice: actions ================= */
function gameTop() { const layer = document.getElementById('game-layer'); if (layer) layer.scrollTop = 0; }
function openGame(id) {
  if (GAME_IDS.indexOf(id) < 0) return;
  stopSpeak(); clearGT();
  const G = { id, step: 'intro' };
  if (id === 'y3') { const e = recallEntry(); if (!e) return; G.entry = e; G.lessonId = e.id; }
  V.game = G; V.layer = 'game';
  render('#step-h'); gameTop();
}
function closeGame() { clearGT(); V.game = null; V.layer = null; render('#page-h'); }
function gameToLesson() { const G = V.game; if (!G || !G.lessonId) return; const id = G.lessonId; clearGT(); V.game = null; openLesson(id); }
function startGame() {
  const G = V.game; if (!G || G.step !== 'intro') return;
  clearGT(); G.step = 'play'; audioCtx();
  if (G.id === 'y3') {
    const l = byId(G.lessonId);
    G.qi = 0; G.picked = null; G.score = 0;
    G.order = l.en.q.map(q => isOrderedNumeric(q[1]) ? q[1].map((_, i) => i) : shuffle(q[1].map((_, i) => i)));
    render('#step-h'); gameTop();
  } else if (G.id === 'cw') {
    G.level = S.practice.cw.level; G.trials = cwTrials(G.level); G.i = 0; G.fb = null; G.combo = 0;
    render('#step-h'); gameTop(); G.t0 = performance.now();
  } else {
    const P = S.practice.nm;
    G.dir = P.bestF >= 6 ? P.dir : 'f'; G.startSpan = G.dir === 'b' ? P.startB : P.start; G.span = G.startSpan; G.round = 0; G.results = [];
    nmRound();
  }
}
function y3Answer(k) {
  const G = V.game; if (!G || G.id !== 'y3' || G.step !== 'play' || G.picked != null) return;
  const ok = k === L(byId(G.lessonId)).q[G.qi][2];
  G.picked = k; if (ok) G.score++;
  render(); const b = document.querySelector('#game-layer .flow-foot .btn'); if (b) b.focus();
  if (ok) goodAnswerFx('#game-layer'); else badAnswerFx('#game-layer');
}
function y3Next() {
  const G = V.game; if (!G || G.id !== 'y3' || G.picked == null) return;
  if (G.qi < 2) { G.qi++; G.picked = null; render('#step-h'); gameTop(); } else finishY3();
}
function finishY3() {
  const G = V.game, P = S.practice.y3, prev = P.hist.length ? P.hist[P.hist.length - 1] : null;
  pushHist(P.hist, { d: ymd(new Date()), id: G.lessonId, n: G.score }); persist();
  G.res = { n: G.score, prev, tier: G.score === 3 ? 'great' : (G.score === 2 ? 'ok' : '') }; G.step = 'done'; render('#step-h'); gameTop(); celebrate(G.res.tier);
}
function cwTrials(level) {
  const n = CW_N, alt = S.lang === 'fr' ? 'en' : 'fr', out = [];
  const inc = shuffle(Array.from({ length: n }, (_, i) => i < Math.round(n * (level >= 2 ? 0.75 : 0.5))));
  const other = shuffle(Array.from({ length: n }, (_, i) => i < Math.round(n * (level >= 3 ? 0.375 : 0))));
  let pInk = null, pWord = null;
  for (let i = 0; i < n; i++) {
    let ink, word, tries = 0;
    do {
      ink = CW_COLOURS[Math.floor(Math.random() * CW_COLOURS.length)];
      const rest = CW_COLOURS.filter(c => c !== ink);
      word = inc[i] ? rest[Math.floor(Math.random() * rest.length)] : ink;
    } while ((ink === pInk || word === pWord) && ++tries < 80);
    pInk = ink; pWord = word;
    out.push({ ink, word, lang: other[i] ? alt : S.lang, order: level >= 4 ? shuffle(CW_COLOURS.slice()) : CW_COLOURS.slice() });
  }
  return out;
}
function cwPick(c) {
  const G = V.game; if (!G || G.id !== 'cw' || G.step !== 'play' || G.fb) return;
  const tr = G.trials[G.i], idx = tr.order.indexOf(c);
  if (idx < 0) return;
  tr.ok = c === tr.ink; tr.rt = performance.now() - G.t0;
  G.fb = { c, ok: tr.ok };
  render();
  if (tr.ok) { sfx('pluck', G.combo); G.combo++; fxGood(document.querySelector('#game-layer .cw-btn.right'), 10); } else { G.combo = 0; sfx('wrong'); fxBad(document.querySelector('#game-layer .cw-btn.wrong')); }
  clearGT();
  GT = setTimeout(() => {
    GT = null;
    if (V.game !== G) return;
    G.fb = null; G.i++;
    if (G.i >= CW_N) { finishCw(); return; }
    render('.cw-opts .cw-btn:nth-child(' + (idx + 1) + ')');
    G.t0 = performance.now();
  }, tr.ok ? 450 : 1000);
}
function finishCw() {
  const G = V.game, P = S.practice.cw, right = G.trials.filter(x => x.ok), n = right.length;
  const ms = n ? Math.round(right.reduce((a, x) => a + x.rt, 0) / n) : 0;
  const prevAt = P.hist.filter(e => e.lvl === G.level && e.ms > 0);
  const last = prevAt.length ? prevAt[prevAt.length - 1] : null, best = prevAt.length ? Math.min.apply(null, prevAt.map(e => e.ms)) : 0;
  const acc = n / CW_N;
  let change = 0;
  if (acc >= 0.875 && ms && ms <= 1600 && P.level < 4) change = 1;
  else if (acc < 0.7 && P.level > 1) change = -1;
  pushHist(P.hist, { d: ymd(new Date()), lvl: G.level, n, of: CW_N, ms });
  P.level = Math.min(4, Math.max(1, P.level + change));
  persist();
  G.res = { n, ms, last, best, change, level: G.level, hadPrev: prevAt.length > 0, tier: n >= 14 ? 'great' : (n >= 11 ? 'ok' : '') };
  G.step = 'done'; render('#step-h'); gameTop(); celebrate(G.res.tier);
}
function nmSeq(n) { let s = '', p = -1; while (s.length < n) { const d = Math.floor(Math.random() * 10); if (d !== p) { s += d; p = d; } } return s; }
function nmRound() {
  const G = V.game;
  G.seq = nmSeq(G.span); G.typed = ''; G.phase = 'show'; G.shown = -1; G.blank = true;
  render('#step-h'); gameTop();
  clearGT(); GT = setTimeout(nmTick, 900);
}
function nmTick() {
  GT = null;
  const G = V.game; if (!G || G.id !== 'nm' || G.step !== 'play' || G.phase !== 'show') return;
  if (G.blank) {
    G.shown++;
    if (G.shown >= G.seq.length) { G.phase = 'input'; render('#step-h'); return; }
    G.blank = false; render(); GT = setTimeout(nmTick, 1000);
  } else { G.blank = true; render(); GT = setTimeout(nmTick, 250); }
}
function nmKey(d) {
  const G = V.game; if (!G || G.id !== 'nm' || G.phase !== 'input' || G.typed.length >= G.span) return;
  G.typed += d; render(focusSelOf(document.activeElement));
}
function nmDel() {
  const G = V.game; if (!G || G.id !== 'nm' || G.phase !== 'input' || !G.typed) return;
  G.typed = G.typed.slice(0, -1); render(focusSelOf(document.activeElement));
}
function nmCheck() {
  const G = V.game; if (!G || G.id !== 'nm' || G.phase !== 'input' || G.typed.length !== G.span) return;
  const want = G.dir === 'b' ? G.seq.split('').reverse().join('') : G.seq, ok = G.typed === want;
  G.results.push({ span: G.span, ok }); G.lastOk = ok; G.want = want;
  G.nextSpan = Math.max(3, Math.min(12, G.span + (ok ? 1 : -1)));
  G.phase = 'result'; render('#step-h'); gameTop();
  if (ok) { sfx('round'); waveSlots(); } else { sfx('wrong'); const s = document.querySelector('#game-layer .slots'); fxBad(null); if (s) s.classList.add('shake'); }
}
function nmNext() {
  const G = V.game; if (!G || G.id !== 'nm' || G.phase !== 'result') return;
  G.round++;
  if (G.round >= NM_ROUNDS) { finishNm(); return; }
  G.span = G.nextSpan; nmRound();
}
function finishNm() {
  const G = V.game, P = S.practice.nm, back = G.dir === 'b';
  const okSpans = G.results.filter(r => r.ok).map(r => r.span), max = okSpans.length ? Math.max.apply(null, okSpans) : 0;
  const prevBest = back ? P.bestB : P.bestF, hadPrev = P.hist.some(e => (e.dir || 'f') === G.dir), wasOpen = P.bestF >= 6;
  const next = Math.max(3, Math.min(10, max ? max - 1 : G.startSpan - 1));
  if (back) { P.bestB = Math.max(P.bestB, max); P.startB = next; } else { P.bestF = Math.max(P.bestF, max); P.start = next; }
  pushHist(P.hist, { d: ymd(new Date()), dir: G.dir, max, ok: okSpans.length, of: NM_ROUNDS });
  persist();
  const isBest = hadPrev && max > prevBest;
  G.res = { max, ok: okSpans.length, best: back ? P.bestB : P.bestF, isBest, hadPrev, next, unlocked: !wasOpen && P.bestF >= 6, tier: (isBest || okSpans.length >= 4) ? 'great' : (okSpans.length >= 2 ? 'ok' : '') };
  G.step = 'done'; render('#step-h'); gameTop(); celebrate(G.res.tier);
}

/* ================= Feedback: sound and little animations ================= */
const SFX = { ctx: null, out: null };
function audioCtx() { return S.sound ? getCtx() : null; }
function getCtx() {
  try {
    if (!SFX.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      SFX.ctx = new AC();
      SFX.out = SFX.ctx.createGain(); SFX.out.gain.value = 0.7;
      const comp = SFX.ctx.createDynamicsCompressor();
      SFX.out.connect(comp); comp.connect(SFX.ctx.destination);
    }
    if (SFX.ctx.state === 'suspended') SFX.ctx.resume();
    return SFX.ctx;
  } catch (e) { return null; }
}
// A soft bell: a sine note plus two quiet overtones that fade faster.
function bell(ac, f, at, dur, vol) {
  [[1, 1, 1], [2, 0.28, 0.5], [3, 0.08, 0.3]].forEach(p => {
    const o = ac.createOscillator(), g = ac.createGain(), d = dur * p[2];
    o.type = 'sine'; o.frequency.value = f * p[0];
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(vol * p[1], at + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, at + d);
    o.connect(g); g.connect(SFX.out); o.start(at); o.stop(at + d + 0.05);
  });
}
const NOTE = { C5: 523.25, D5: 587.33, E5: 659.25, G5: 783.99, A5: 880, B5: 987.77, C6: 1046.5, D6: 1174.66, E6: 1318.51, G6: 1567.98 };
const LADDER = [NOTE.C5, NOTE.D5, NOTE.E5, NOTE.G5, NOTE.A5, NOTE.C6, NOTE.D6, NOTE.E6];
function thud(ac, f1, f2, at, dur, vol) {
  const o = ac.createOscillator(), g = ac.createGain(), lp = ac.createBiquadFilter();
  o.type = 'triangle'; o.frequency.setValueAtTime(f1, at); o.frequency.exponentialRampToValueAtTime(f2, at + dur);
  lp.type = 'lowpass'; lp.frequency.value = 900;
  g.gain.setValueAtTime(0.0001, at); g.gain.exponentialRampToValueAtTime(vol, at + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
  o.connect(lp); lp.connect(g); g.connect(SFX.out); o.start(at); o.stop(at + dur + 0.05);
}
function sfx(kind, n) {
  const ac = audioCtx(); if (!ac) return;
  const t0 = ac.currentTime + 0.01;
  try {
    if (kind === 'wrong') { thud(ac, 311, 262, t0, 0.18, 0.22); thud(ac, 233, 185, t0 + 0.16, 0.32, 0.22); }
    else if (kind === 'correct') { bell(ac, NOTE.E5, t0, 0.5, 0.16); bell(ac, NOTE.B5, t0 + 0.075, 0.6, 0.16); }
    else if (kind === 'pluck') bell(ac, LADDER[Math.min(n || 0, LADDER.length - 1)], t0, 0.3, 0.14);
    else if (kind === 'round') [NOTE.G5, NOTE.B5, NOTE.D6].forEach((f, i) => bell(ac, f, t0 + i * 0.065, 0.5, 0.14));
    else if (kind === 'finish') { bell(ac, NOTE.G5, t0, 0.6, 0.14); bell(ac, NOTE.C6, t0 + 0.11, 0.9, 0.14); }
    else if (kind === 'fanfare') {
      [NOTE.C5, NOTE.E5, NOTE.G5, NOTE.C6].forEach((f, i) => bell(ac, f, t0 + i * 0.09, i === 3 ? 1.3 : 0.55, 0.15));
      bell(ac, NOTE.E6, t0 + 0.36, 1.0, 0.06); bell(ac, NOTE.G6, t0 + 0.45, 0.9, 0.045);
    }
  } catch (e) { }
}
function reducedMotion() { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
function fxHost() {
  let h = document.getElementById('fx-host');
  if (!h) { h = document.createElement('div'); h.id = 'fx-host'; h.setAttribute('aria-hidden', 'true'); document.body.appendChild(h); }
  return h;
}
const FX_COLOURS = ['var(--teal)', 'var(--saffron)', 'var(--accent)', 'var(--cw-blue)', 'var(--cw-green)', 'var(--cw-red)', 'var(--cw-yellow)'];
// Small dots fly out of an element. big = confetti that drifts down.
function burst(el, n, big) {
  if (!el || reducedMotion() || !el.animate) return;
  const r = el.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2, host = fxHost();
  for (let i = 0; i < n; i++) {
    const d = document.createElement('span'), bar = big && i % 3 === 0, size = big ? 7 + Math.random() * 5 : 6 + Math.random() * 4;
    d.className = 'fx-dot' + (bar ? ' bar' : '');
    d.style.cssText = 'left:' + cx + 'px;top:' + cy + 'px;width:' + size + 'px;height:' + (bar ? size * 2 : size) + 'px;background:' + FX_COLOURS[i % FX_COLOURS.length];
    host.appendChild(d);
    const a = (Math.PI * 2 * i) / n + (Math.random() - 0.5) * 0.6, dist = big ? 90 + Math.random() * 120 : 30 + Math.random() * 34;
    const dx = Math.cos(a) * dist, dy = Math.sin(a) * dist, rot = (Math.random() - 0.5) * 540;
    const frames = big
      ? [{ transform: 'translate(-50%,-50%)', opacity: 1 },
         { transform: 'translate(-50%,-50%) translate(' + dx + 'px,' + dy + 'px) rotate(' + (rot / 2) + 'deg)', opacity: 1, offset: 0.45 },
         { transform: 'translate(-50%,-50%) translate(' + (dx * 1.15) + 'px,' + (dy + 150) + 'px) rotate(' + rot + 'deg)', opacity: 0 }]
      : [{ transform: 'translate(-50%,-50%) scale(1)', opacity: 1 },
         { transform: 'translate(-50%,-50%) translate(' + dx + 'px,' + dy + 'px) scale(0.4)', opacity: 0 }];
    try {
      const anim = d.animate(frames, { duration: big ? 1300 + Math.random() * 500 : 520 + Math.random() * 160, easing: 'cubic-bezier(0.15, 0.7, 0.3, 1)', fill: 'forwards' });
      anim.onfinish = () => d.remove();
    } catch (e) { }
    setTimeout(() => d.remove(), 2600);
  }
}
function fxGood(el, n) {
  if (!el) return;
  el.classList.add('just');
  burst(el.querySelector('.radio, .mk') || el, n);
}
function goodAnswerFx(scope) { sfx('correct'); fxGood(document.querySelector(scope + ' .opt.right'), 14); }
function fxBad(el) {
  if (el) el.classList.add('just');
  try { if (navigator.vibrate) navigator.vibrate(40); } catch (e) { }
  if (reducedMotion()) return;
  const f = document.createElement('div'); f.className = 'bad-flash'; f.setAttribute('aria-hidden', 'true');
  document.body.appendChild(f); setTimeout(() => f.remove(), 700);
}
function badAnswerFx(scope) { sfx('wrong'); fxBad(document.querySelector(scope + ' .opt.wrong')); }
function waveSlots() {
  const box = document.querySelector('#game-layer .slots');
  if (!box) return;
  box.querySelectorAll('.slot').forEach((s, i) => { s.style.animationDelay = (i * 45) + 'ms'; });
  box.classList.add('wave');
  burst(box, 12);
}
// Confetti falling from the top of the screen, for great rounds.
function confettiRain(n) {
  if (reducedMotion() || !document.body.animate) return;
  const host = fxHost(), W = window.innerWidth, H = window.innerHeight;
  for (let i = 0; i < n; i++) {
    const d = document.createElement('span'), bar = i % 2 === 0, w = 6 + Math.random() * 5;
    d.className = 'fx-dot' + (bar ? ' bar' : '');
    d.style.cssText = 'left:' + (Math.random() * W) + 'px;top:-24px;width:' + w + 'px;height:' + (bar ? w * 1.8 : w) + 'px;background:' + FX_COLOURS[i % FX_COLOURS.length];
    host.appendChild(d);
    const sway = (Math.random() - 0.5) * 140, rot = (Math.random() - 0.5) * 900, dur = 2200 + Math.random() * 1400, delay = Math.random() * 700;
    const frames = [
      { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
      { transform: 'translate(' + (sway * 0.6) + 'px,' + (H * 0.45) + 'px) rotate(' + (rot / 2) + 'deg)', opacity: 1, offset: 0.45 },
      { transform: 'translate(' + sway + 'px,' + (H + 48) + 'px) rotate(' + rot + 'deg)', opacity: 0.9 }];
    try { const a = d.animate(frames, { duration: dur, delay, easing: 'cubic-bezier(0.3, 0.1, 0.6, 1)', fill: 'both' }); a.onfinish = () => d.remove(); } catch (e) { }
    setTimeout(() => d.remove(), dur + delay + 400);
  }
}
// For people who ask their device for less motion: dots fade in and out in place, nothing flies.
function sparkle(el, n) {
  if (!el || !el.animate) return;
  const r = el.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2, host = fxHost();
  for (let i = 0; i < n; i++) {
    const d = document.createElement('span'), size = 6 + Math.random() * 4, a = Math.random() * Math.PI * 2, dist = 40 + Math.random() * 70;
    d.className = 'fx-dot';
    d.style.cssText = 'left:' + (cx + Math.cos(a) * dist) + 'px;top:' + (cy + Math.sin(a) * dist) + 'px;width:' + size + 'px;height:' + size + 'px;transform:translate(-50%,-50%);opacity:0;background:' + FX_COLOURS[i % FX_COLOURS.length];
    host.appendChild(d);
    try { const an = d.animate([{ opacity: 0 }, { opacity: 1, offset: 0.3 }, { opacity: 0 }], { duration: 1400, delay: i * 40, fill: 'both' }); an.onfinish = () => d.remove(); } catch (e) { }
    setTimeout(() => d.remove(), 2800);
  }
}
// End of a round: great = fanfare, ring, burst and a confetti shower; good = soft finish and a smaller burst.
function celebrate(tier) {
  if (!tier) return;
  const c = document.querySelector('#game-layer .done-check'), great = tier === 'great';
  sfx(great ? 'fanfare' : 'finish');
  if (c) { c.classList.add('celebrate'); if (great) c.classList.add('big'); }
  if (reducedMotion()) { sparkle(c, great ? 18 : 10); return; }
  if (c) setTimeout(() => burst(c, great ? 40 : 22, true), 160);
  if (great) confettiRain(window.innerWidth >= 700 ? 110 : 70);
}


/* ================= Music =================
   Five original calm lo-fi tracks made in code for MindLift (audio/music/lofi-02 … lofi-06, 60–76 BPM, different
   keys, chords and lead sounds). They play one after another in a shuffled order with a 5-second crossfade, so the
   music doesn't repeat for about 13 minutes. Only the current track and the next one are loaded. Starts on the first
   tap (browsers block autoplay), ducks under narration, pauses while the app is hidden and resumes where it was.
   lofi-02 was made as a seamless loop: its file has 1 s of padding at each end, so it plays from 1 s to 117.36 s. */
const MUSIC_TRACKS = [
  { url: 'audio/music/lofi-02.mp3', from: 1.0, to: 117.363628 },
  { url: 'audio/music/lofi-03.mp3' }, { url: 'audio/music/lofi-04.mp3' },
  { url: 'audio/music/lofi-05.mp3' }, { url: 'audio/music/lofi-06.mp3' }
];
const MUSIC_XF = 5;
const MUSIC_VOL = [0.10, 0.19, 0.31];
const MUSIC = { bufs: {}, loads: {}, loading: null, gain: null, playing: false, failed: false, order: null, i: 0, pos: 0, cur: null, timer: null, resume: false };
function musicTarget() { return S.music ? MUSIC_VOL[S.musicVol] * (TTS.speaking ? 0.2 : 1) : 0; }
function musicOrder() {
  if (MUSIC.order) return MUSIC.order;
  const o = MUSIC_TRACKS.map((_, k) => k);
  for (let k = o.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [o[k], o[j]] = [o[j], o[k]]; }
  return (MUSIC.order = o);
}
function trackAt(i) { return musicOrder()[((i % MUSIC_TRACKS.length) + MUSIC_TRACKS.length) % MUSIC_TRACKS.length]; }
// Fetch and decode one track; keep only the tracks we need right now (decoded audio is large).
function musicFetch(k) {
  if (MUSIC.bufs[k]) return Promise.resolve(MUSIC.bufs[k]);
  if (MUSIC.loads[k]) return MUSIC.loads[k];
  const ac = getCtx(); if (!ac) return Promise.reject(new Error('no audio'));
  MUSIC.loads[k] = fetch(MUSIC_TRACKS[k].url).then(r => { if (!r.ok) throw new Error('http'); return r.arrayBuffer(); })
    .then(ab => new Promise((res, rej) => { const p = ac.decodeAudioData(ab, res, rej); if (p && p.catch) p.catch(rej); }))
    .then(b => { MUSIC.bufs[k] = b; delete MUSIC.loads[k]; return b; }, e => { delete MUSIC.loads[k]; throw e; });
  return MUSIC.loads[k];
}
function musicTrim(keep) { Object.keys(MUSIC.bufs).forEach(k => { if (!keep.includes(Number(k))) delete MUSIC.bufs[k]; }); }
function trackSpan(k, buf) { const tr = MUSIC_TRACKS[k]; const from = tr.from || 0; return { from, len: Math.max(1, (tr.to || buf.duration) - from) }; }
// Start the track at playlist position i, offset pos seconds; fadeIn = seconds of volume ramp for this track.
function musicStartTrack(i, pos, fadeIn) {
  const ac = getCtx(), k = trackAt(i), buf = MUSIC.bufs[k];
  if (!ac || !buf || !MUSIC.playing) return;
  const span = trackSpan(k, buf); pos = Math.min(Math.max(0, pos), span.len - 0.5);
  const src = ac.createBufferSource(), g = ac.createGain(), now = ac.currentTime;
  src.buffer = buf; src.connect(g); g.connect(MUSIC.gain);
  g.gain.setValueAtTime(fadeIn ? 0 : 1, now); if (fadeIn) g.gain.linearRampToValueAtTime(1, now + fadeIn);
  try { src.start(now, span.from + pos, span.len - pos); } catch (e) { return; }
  const old = MUSIC.cur;
  if (old) { try { old.g.gain.cancelScheduledValues(now); old.g.gain.setValueAtTime(old.g.gain.value, now); old.g.gain.linearRampToValueAtTime(0, now + MUSIC_XF); old.src.stop(now + MUSIC_XF + 0.1); } catch (e) { } }
  MUSIC.cur = { src, g, t0: now - pos, len: span.len }; MUSIC.i = i;
  clearTimeout(MUSIC.timer);
  const left = span.len - pos;
  // Load the next track now; start it MUSIC_XF seconds before this one ends.
  const nk = trackAt(i + 1);
  musicFetch(nk).then(() => musicTrim([k, nk])).catch(() => { });
  MUSIC.timer = setTimeout(musicNext, Math.max(0, (left - MUSIC_XF) * 1000));
}
function musicNext() {
  if (!MUSIC.playing) return;
  const i = MUSIC.i + 1, nk = trackAt(i);
  musicFetch(nk).then(() => { if (MUSIC.playing && MUSIC.i === i - 1) musicStartTrack(i, 0, MUSIC_XF); },
    () => { if (MUSIC.playing && MUSIC.i === i - 1) { MUSIC.i = i; musicNext(); } });
}
function musicLoad() {
  if (MUSIC.loading) return MUSIC.loading;
  const k = trackAt(MUSIC.i);
  if (MUSIC.bufs[k]) return Promise.resolve();
  MUSIC.loading = musicFetch(k).then(() => { MUSIC.loading = null; }, () => { MUSIC.failed = true; MUSIC.loading = null; syncMusicBtn(); });
  syncMusicBtn();
  return MUSIC.loading;
}
function musicPlay() {
  if (!S.music || MUSIC.playing || document.visibilityState === 'hidden') return;
  const ac = getCtx(); if (!ac) return;
  if (!MUSIC.bufs[trackAt(MUSIC.i)]) { if (!MUSIC.failed) musicLoad().then(() => { if (MUSIC.bufs[trackAt(MUSIC.i)]) musicPlay(); }); return; }
  if (!MUSIC.gain) { MUSIC.gain = ac.createGain(); MUSIC.gain.gain.value = 0; MUSIC.gain.connect(ac.destination); }
  MUSIC.playing = true; MUSIC.cur = null;
  musicStartTrack(MUSIC.i, MUSIC.pos, 0);
  const now = ac.currentTime, g = MUSIC.gain.gain;
  g.cancelScheduledValues(now); g.setValueAtTime(g.value, now); g.linearRampToValueAtTime(musicTarget(), now + 2.5);
  syncMusicBtn();
}
function musicPause() {
  if (!MUSIC.playing) return;
  const ac = getCtx(), now = ac.currentTime, g = MUSIC.gain.gain, cur = MUSIC.cur;
  clearTimeout(MUSIC.timer);
  MUSIC.pos = cur ? Math.min(cur.len, now - cur.t0) : 0;
  if (cur && MUSIC.pos > cur.len - MUSIC_XF) { MUSIC.i += 1; MUSIC.pos = 0; }
  g.cancelScheduledValues(now); g.setValueAtTime(g.value, now); g.linearRampToValueAtTime(0, now + 0.6);
  if (cur) { try { cur.src.stop(now + 0.65); } catch (e) { } }
  MUSIC.cur = null; MUSIC.playing = false;
  syncMusicBtn();
}
function musicLevel() {
  if (!MUSIC.playing || !MUSIC.gain) return;
  const ac = getCtx(); if (ac) MUSIC.gain.gain.setTargetAtTime(musicTarget(), ac.currentTime, 0.35);
}
function musicOn() { return S.music && (MUSIC.playing || !!MUSIC.loading); }
function musicBtnInner() { return musicOn() ? '<span class="eq" aria-hidden="true"><i></i><i></i><i></i></span>' : icon('music', 'i-md'); }
function musicBtn() { return '<button type="button" class="iconbtn musicbtn" data-act="music" aria-pressed="' + musicOn() + '" aria-label="' + esc(t('musicBtn')) + '">' + musicBtnInner() + '</button>'; }
function syncMusicBtn() {
  document.querySelectorAll('.musicbtn').forEach(b => { b.setAttribute('aria-pressed', String(musicOn())); b.innerHTML = musicBtnInner(); });
}
function grabName() {
  const el = document.getElementById('name-input') || document.getElementById('name-set');
  if (el) S.name = el.value.replace(/\s+/g, ' ').trim().slice(0, 30);
}
function markOnboarded() { S.onboarded = true; S.setup = SETUP_V; }
function welcomeToast() { toast(S.name ? t('allSetName', { name: S.name }) : t('allSet')); }
// Browsers only allow sound after a tap: start the music on the first one (and after the app comes back).
document.addEventListener('pointerdown', (ev) => {
  if (!S.music || MUSIC.playing || MUSIC.loading) return;
  if (ev.target && ev.target.closest && ev.target.closest('[data-act="music"], [data-act="music-pref"]')) return;
  musicPlay();
}, true);
document.addEventListener('keydown', () => { if (S.music && !MUSIC.playing && !MUSIC.loading) musicPlay(); }, true);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') { if (MUSIC.playing) { MUSIC.resume = true; musicPause(); } }
  else if (MUSIC.resume) { MUSIC.resume = false; musicPlay(); }
});

document.addEventListener('click', (ev) => {
  const el = ev.target.closest('[data-act]');
  if (!el) return;
  const act = el.dataset.act, v = el.dataset.v, id = el.dataset.id;
  switch (act) {
    case 'scrim': if (ev.target === el) closeSheet(); break;
    case 'tab': setTab(v); break;
    case 'railsearch': V.tab = 'explore'; V.layer = null; render(); { const q = document.getElementById('q'); if (q) q.focus(); } break;
    case 'open': openLesson(id); break;
    case 'article': openArticle(id); break;
    case 'close-article': stopSpeak(); closeArticle(); break;
    case 'save': {
      const on = toggleSave(id);
      el.setAttribute('aria-pressed', String(on));
      el.setAttribute('aria-label', on ? t('unsave') : t('save'));
      el.innerHTML = icon(on ? 'saved' : 'save', 'i-md');
      if (!V.layer && V.tab === 'you') render();
      break;
    }
    case 'lang': S.lang = v; persist(); stopSpeak(); render(); { const b = document.querySelector('[data-act="lang"][data-v="' + v + '"]'); if (b) b.focus(); } break;
    case 'welcome-start': markOnboarded(); persist(); openLesson(todayLesson().id); break;
    case 'setup': V.setupFrom = 'welcome'; V.layer = 'setup'; render('#setup-h'); break;
    case 'make-mine': V.setupFrom = 'you'; V.layer = 'setup'; render('#setup-h'); break;
    case 'setup-save': grabName(); persist(); V.layer = null; V.tab = 'you'; render('#page-h'); toast(S.name ? t('allSetName', { name: S.name }) : t('prefsSaved')); break;
    case 'setup-back': grabName(); persist(); if (V.setupFrom === 'you') { V.layer = null; V.tab = 'you'; render('#page-h'); } else { V.layer = 'welcome'; V.wp = WP.length - 1; render('#welcome-h'); } break;
    case 'setup-skip': grabName(); markOnboarded(); persist(); V.layer = null; V.tab = 'today'; render('#page-h'); welcomeToast(); break;
    case 'setup-next': grabName(); persist(); V.interestsFrom = 'welcome'; V.draft = S.interests.slice(); V.layer = 'interests'; render('#int-h'); break;
    case 'replay-intro': V.layer = 'welcome'; V.wp = 0; render('#welcome-h'); break;
    case 'wp-next': V.wp = Math.min(WP.length - 1, V.wp + 1); render('#welcome-h'); break;
    case 'wp-back': V.wp = Math.max(0, V.wp - 1); render('#welcome-h'); break;
    case 'wp-go': V.wp = Number(v) || 0; render('#welcome-h'); break;
    case 'wp-skip': V.wp = WP.length - 1; render('#welcome-h'); break;
    case 'voice': S.voice = VOICES.includes(v) ? v : 'ava'; persist(); stopSpeak(); render(); { const b = document.querySelector('[data-act="voice"][data-v="' + S.voice + '"]'); if (b) b.focus(); } playSample(S.voice); break;
    case 'voice-sample': if (TTS.speaking && TTS.what === 'sample-' + v) stopSpeak(); else playSample(v); break;
    case 'art-listen': { const a = articleById(V.article); if (!a) break; if (TTS.speaking && TTS.what === 'article') stopSpeak(); else playArticle(a); break; }
    case 'music': if (S.music && !MUSIC.playing) musicPlay(); else { S.music = !S.music; persist(); if (S.music) musicPlay(); else musicPause(); } syncMusicBtn(); if (MUSIC.failed && S.music) toast(t('musicFail')); break;
    case 'music-pref': S.music = !S.music; persist(); if (S.music) musicPlay(); else musicPause(); render(); { const b = document.querySelector('[data-act="music-pref"]'); if (b) b.focus(); } if (MUSIC.failed && S.music) toast(t('musicFail')); break;
    case 'musicvol': S.musicVol = Number(v); persist(); musicLevel(); render(); { const b = document.querySelector('[data-act="musicvol"][data-v="' + v + '"]'); if (b) b.focus(); } break;
    case 'interests': V.interestsFrom = v; V.draft = S.interests.slice(); V.layer = 'interests'; render('#int-h'); break;
    case 'pick': V.draft = V.draft.includes(v) ? V.draft.filter(c => c !== v) : V.draft.concat([v]); render(); { const b = document.querySelector('[data-act="pick"][data-v="' + v + '"]'); if (b) b.focus(); } break;
    case 'int-back': V.layer = V.interestsFrom === 'welcome' ? 'setup' : (V.interestsFrom === 'settings' ? 'settings' : null); render(V.layer === 'setup' ? '#setup-h' : (V.layer ? '#set-h' : '#page-h')); break;
    case 'int-skip': markOnboarded(); persist(); V.layer = null; V.tab = 'today'; render('#page-h'); welcomeToast(); break;
    case 'int-done': { const fromW = V.interestsFrom === 'welcome'; S.interests = CATS.filter(c => V.draft.includes(c)); if (fromW) markOnboarded(); else S.onboarded = true; persist(); V.layer = V.interestsFrom === 'settings' ? 'settings' : null; if (!V.layer && fromW) V.tab = 'today'; render(V.layer ? '#set-h' : '#page-h'); if (fromW) welcomeToast(); break; }
    case 'surprise': {
      markOnboarded(); persist();
      const read = readSet(), pool = LESSONS.filter(l => !read.has(l.id)), list = pool.length ? pool : LESSONS;
      openLesson(list[Math.floor(Math.random() * list.length)].id); break;
    }
    case 'layer': V.layer = v; render('#set-h'); break;
    case 'close-layer': V.layer = null; render('#page-h'); break;
    case 'close-lesson': closeLesson(); break;
    case 'mode': S.mode = v; persist(); render(); { const b = document.querySelector('[data-act="mode"][data-v="' + v + '"]'); if (b) b.focus(); } break;
    case 'step':
      if (v === 'card0') setStep('card', { i: 0, intro: S.mode === 'listen' });
      else if (v === 'quiz') setStep('quiz', { qi: 0, picked: null });
      else setStep(v);
      break;
    case 'next': nextCard(); break;
    case 'prev': prevCard(); break;
    case 'listen': {
      if (TTS.speaking && TTS.what === 'card') { stopSpeak(); if (S.mode === 'listen') { S.mode = 'read'; persist(); } }
      else { if (S.mode !== 'listen') { S.mode = 'listen'; persist(); } playCard(byId(V.lesson.id), V.lesson.i); }
      break;
    }
    case 'size': S.size = (S.size + 1) % 3; persist(); applyPrefs(); break;
    case 'answer': V.lesson.picked = Number(v); render(); { const b = document.querySelector('.feedback') ? document.querySelector('.flow-foot .btn') : null; if (b) b.focus(); } if (V.lesson.picked === L(byId(V.lesson.id)).q[V.lesson.qi][2]) goodAnswerFx('#lesson-layer'); else badAnswerFx('#lesson-layer'); break;
    case 'nextq': setStep('quiz', { qi: V.lesson.qi + 1, picked: null }); break;
    case 'filter': V.filter = v; render(); { const b = document.querySelector('.chip[data-v="' + v + '"]'); if (b) { b.focus(); b.scrollIntoView({ block: 'nearest', inline: 'nearest' }); } } break;
    case 'clearsearch': V.search = ''; render(); { const q = document.getElementById('q'); if (q) q.focus(); } break;
    case 'histall': V.historyAll = !V.historyAll; render(); break;
    case 'showweek': S.showWeek = !S.showWeek; persist(); render(); { const b = document.querySelector('[data-act="showweek"]'); if (b) b.focus(); } break;
    case 'theme': S.theme = v; persist(); render(); { const b = document.querySelector('[data-act="theme"][data-v="' + v + '"]'); if (b) b.focus(); } break;
    case 'setsize': S.size = Number(v); persist(); render(); { const b = document.querySelector('[data-act="setsize"][data-v="' + v + '"]'); if (b) b.focus(); } break;
    case 'clear': openSheet('clear'); break;
    case 'clear-yes': S.log = []; S.saved = []; S.artRead = []; S.practice = practiceDefaults(); persist(); V.sheet = { ret: '[data-act="clear"]' }; closeSheet(); toast(t('cleared')); break;
    case 'howmade': openSheet('howmade'); break;
    case 'report': openSheet('report'); break;
    case 'close-sheet': closeSheet(); break;
    case 'copy-report': copyReport(el); break;
    case 'game': openGame(v); break;
    case 'game-start': startGame(); break;
    case 'game-close': closeGame(); break;
    case 'game-lesson': gameToLesson(); break;
    case 'aboutpractice': openSheet('aboutpractice'); break;
    case 'y3-answer': y3Answer(Number(v)); break;
    case 'y3-next': y3Next(); break;
    case 'cw-pick': cwPick(v); break;
    case 'nm-key': nmKey(v); break;
    case 'nm-del': nmDel(); break;
    case 'nm-check': nmCheck(); break;
    case 'nm-next': nmNext(); break;
    case 'nm-dir': S.practice.nm.dir = v === 'b' ? 'b' : 'f'; persist(); render(); { const b = document.querySelector('[data-act="nm-dir"][data-v="' + v + '"]'); if (b) b.focus(); } break;
    case 'sound': S.sound = !S.sound; persist(); render(); { const b = document.querySelector('[data-act="sound"]'); if (b) b.focus(); } if (S.sound) sfx('correct'); break;
    case 'showpractice': S.showPractice = !S.showPractice; persist(); render(); { const b = document.querySelector('[data-act="showpractice"]'); if (b) b.focus(); } break;
  }
});

['change', 'focusout'].forEach(type => document.addEventListener(type, (ev) => {
  if (ev.target && (ev.target.id === 'name-input' || ev.target.id === 'name-set')) { S.name = ev.target.value.replace(/\s+/g, ' ').trim().slice(0, 30); persist(); }
}));
window.addEventListener('pagehide', () => { grabName(); persist(); });
document.addEventListener('input', (ev) => {
  if (ev.target && ev.target.id === 'q') {
    V.search = ev.target.value;
    const box = document.getElementById('explore-results');
    if (box) box.innerHTML = exploreResults();
    const lab = ev.target.parentElement;
    const has = !!lab.querySelector('[data-act="clearsearch"]');
    if (!!V.search !== has) {
      if (V.search) lab.insertAdjacentHTML('beforeend', '<button type="button" class="iconbtn" data-act="clearsearch" aria-label="' + esc(t('clearSearch')) + '">' + icon('x', 'i-md') + '</button>');
      else lab.querySelector('[data-act="clearsearch"]').remove();
    }
  }
  if (ev.target && ev.target.id === 'report-text' && V.sheet) V.sheet.text = ev.target.value;
  if (ev.target && (ev.target.id === 'name-input' || ev.target.id === 'name-set')) { S.name = ev.target.value.replace(/\s+/g, ' ').trim().slice(0, 30); persist(); }
});

let swipeX = null, swipeY = null;
document.addEventListener('touchstart', (ev) => { if (V.layer !== 'welcome' || !ev.touches[0]) return; swipeX = ev.touches[0].clientX; swipeY = ev.touches[0].clientY; }, { passive: true });
document.addEventListener('touchend', (ev) => {
  if (V.layer !== 'welcome' || swipeX === null || !ev.changedTouches[0]) return;
  const dx = ev.changedTouches[0].clientX - swipeX, dy = ev.changedTouches[0].clientY - swipeY; swipeX = null;
  if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
  const nv = Math.max(0, Math.min(WP.length - 1, V.wp + (dx < 0 ? 1 : -1)));
  if (nv !== V.wp) { V.wp = nv; render('#welcome-h'); }
}, { passive: true });
document.addEventListener('keydown', (ev) => {
  if (V.layer === 'welcome' && !V.sheet && (ev.key === 'ArrowRight' || ev.key === 'ArrowLeft') && !(ev.target && ev.target.closest && ev.target.closest('input, textarea, .seg'))) {
    const nv = Math.max(0, Math.min(WP.length - 1, V.wp + (ev.key === 'ArrowRight' ? 1 : -1)));
    if (nv !== V.wp) { V.wp = nv; render('#welcome-h'); ev.preventDefault(); return; }
  }
}, true);
document.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape') {
    if (V.sheet) { ev.preventDefault(); closeSheet(); return; }
  }
  if (V.layer === 'game' && V.game && V.game.step === 'play' && !V.sheet) {
    const tg = (ev.target && ev.target.tagName) || '';
    if (tg !== 'INPUT' && tg !== 'TEXTAREA' && !ev.metaKey && !ev.ctrlKey && !ev.altKey) {
      const G = V.game;
      if (G.id === 'nm' && G.phase === 'input') {
        if (/^[0-9]$/.test(ev.key)) { ev.preventDefault(); nmKey(ev.key); return; }
        if (ev.key === 'Backspace') { ev.preventDefault(); nmDel(); return; }
        if (ev.key === 'Enter' && G.typed.length === G.span) { ev.preventDefault(); nmCheck(); return; }
      } else if (G.id === 'cw' && !G.fb && /^[1-4]$/.test(ev.key)) { ev.preventDefault(); cwPick(G.trials[G.i].order[Number(ev.key) - 1]); return; }
    }
  }
  if (V.layer === 'lesson' && V.lesson && V.lesson.step === 'card' && !V.sheet) {
    const tag = (ev.target && ev.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    if (ev.key === 'ArrowRight') { ev.preventDefault(); nextCard(); }
    else if (ev.key === 'ArrowLeft') { ev.preventDefault(); prevCard(); }
  }
});

let lastDay = ymd(new Date());
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && ymd(new Date()) !== lastDay) { lastDay = ymd(new Date()); if (!V.layer) render(); }
});
try {
  window.addEventListener('storage', (e) => { if (e.key === KEY) { Object.assign(S, load()); render(); } });
} catch (e) { }

/* ================= Boot =================
   The page shell, styles (css/app.css) and this script load first; the content lives in data/:
   lessons.json (lessons + evidence labels), articles.json (daily news picks, written by the nightly task)
   and media.json (narration timings + which painted covers exist). Pictures and audio load only when shown or played. */
const DATA = {};
function getJSON(path) {
  return fetch(path, { cache: 'no-cache' }).then(r => { if (!r.ok) throw new Error(path + ' ' + r.status); return r.json(); });
}
function loadData() {
  return Promise.all([
    getJSON('data/lessons.json'),
    getJSON('data/media.json'),
    getJSON('data/articles.json').catch(() => ({ articles: [] }))
  ]).then(([les, media, arts]) => {
    LESSONS.length = 0; (les.lessons || []).forEach(l => LESSONS.push(l));
    Object.assign(EVIDENCE, les.evidence || {}); Object.assign(EV_NOTE, les.evNotes || {});
    Object.assign(SPRITES, media.sprites || {}); Object.assign(COVERS, media.covers || {});
    DATA.articles = arts;
  });
}
function bootError() {
  const root = document.getElementById('root');
  const fr = S.lang === 'fr';
  root.innerHTML = '<div class="boot"><p class="boot-msg">' + (fr ? 'MindLift n’a pas pu se charger. Vérifiez votre connexion.' : 'MindLift couldn’t load. Check your connection.') + '</p><button type="button" class="btn btn-primary" id="boot-retry">' + (fr ? 'Réessayer' : 'Try again') + '</button></div>';
  document.getElementById('boot-retry').onclick = () => { root.innerHTML = ''; boot(); };
}
let hotData = {};
function boot() { loadData().then(() => { loadArticles(); start(hotData); }, bootError); }
function start(data) {
  try { if (data && data.V) { Object.assign(V, data.V, { sheet: null }); if (V.lesson && !byId(V.lesson.id)) { V.lesson = null; if (V.layer === 'lesson') V.layer = null; } if (V.game || V.layer === 'game') { V.game = null; if (V.layer === 'game') V.layer = null; } } } catch (e) { }
  render();
}
try {
  const hot = window.claude && window.claude.hot;
  if (hot && typeof hot.snapshot === 'function') hot.snapshot(() => ({ V: Object.assign({}, V, { sheet: null }) }));
  if (hot && typeof hot.ready === 'function') hot.ready(d => { hotData = d || {}; boot(); });
  else { hotData = hot && hot.data ? hot.data : {}; boot(); }
} catch (e) { boot(); }

window.__mindlift = { S, V, A, MUSIC, musicPlay, musicPause, normArticle, LESSONS, lessonFor, recencyOrder, suggestions, searchLessons, dayOfYear, featuredGame, recallEntry, cwTrials, render };
})();
