// מאגר הכלים. עורכים רק את התוכן. לא משנים את השורה הבאה (window.TOOLS_DATA) ולא את הנקודה-פסיק שבסוף הקובץ.
window.TOOLS_DATA = {
  "meta": {
    "title": "ארגז כלים דיגיטליים חכמים למורים",
    "version": "1.0",
    "lastUpdated": "2026-11-26",
    "myGroups": [
      { "name": "הוראה חכמה בעידן ה-AI", "subtitle": "הקבוצה הסגורה - בינה מלאכותית בהוראה", "type": "whatsapp", "url": "https://chat.whatsapp.com/LRYpWU937uF8WR7eBZISw1" },
      { "name": "הקסם של קנבה עם דפנה", "subtitle": "קהילת וואטסאפ - כל הקסמים של קנבה", "type": "whatsapp", "url": "https://chat.whatsapp.com/CFXXUFvnaDQJzHRbqur7cp" },
      { "name": "הוראה חכמה בעידן ה-AI", "subtitle": "הקבוצה הפתוחה - לשאלות והתייעצויות", "type": "whatsapp", "url": "https://chat.whatsapp.com/DjB1AfZrg8YDAWnFtm6Ie0" },
      { "name": "הוראה חכמה בעידן ה-AI", "subtitle": "קבוצת הפייסבוק שלי", "type": "facebook", "url": "https://www.facebook.com/groups/dafnarot" }
    ],
    "allMyLinks": "https://files.instinct.com/n2vq9elgv2pn",
    "generalNotes": [
      "הכלים במאגר מיועדים לשימוש מורים. לפני שימוש תלמידים בכלי כלשהו, על המורה לבדוק את הגבלות הגיל לשימוש תלמידים באתר משרד החינוך.",
      "תנאי השימוש החינמי (מכסות, קרדיטים, מגבלות) שונים מכלי לכלי ומשתנים מעת לעת. המידע במאגר נבדק בתאריך המצוין לכל כלי.",
      "חלק מיכולות ה-AI תלויות בסוג החשבון (אישי / חינוכי / מנוי) ובהגדרות מנהל המערכת.",
      "בחשבון Google החינוכי (חשבון משרד החינוך) המורים עובדים בסביבה מאובטחת: לפי Google, הנתונים ב-Gemini וב-NotebookLM לחינוך אינם נבדקים על ידי בני אדם ואינם משמשים לאימון מודלים. בחלק מהכלים ניתן לקבל מכסות גבוהות יותר כשהמוסד רוכש תוסף ייעודי."
    ]
  },

  "categories": [
    { "id": "ai-assistants", "name": "עוזרי AI ומחקר", "tagline": "שיחה, כתיבה, מחקר ומקורות", "icon": "ti-message-chatbot", "color": "#7F77DD", "tint": "#EEEDFE", "ink": "#3C3489", "order": 1 },
    { "id": "presentations", "name": "יצירת מצגות", "tagline": "מצגות מעוצבות בדקות", "icon": "ti-presentation", "color": "#E07A4F", "tint": "#FDF0EA", "ink": "#712B13", "order": 2 },
    { "id": "images", "name": "תמונות ואינפוגרפיקות", "tagline": "איורים, תרשימים ואינפוגרפיקות", "icon": "ti-photo", "color": "#D4537E", "tint": "#FBEAF0", "ink": "#72243E", "order": 3 },
    { "id": "videos", "name": "וידאו ושמע", "tagline": "סרטונים, פודקאסטים, הקראה ושירים", "icon": "ti-movie", "color": "#E24B4A", "tint": "#FCEBEB", "ink": "#791F1F", "order": 4 },
    { "id": "quizzes", "name": "חידונים ומשחקים", "tagline": "בחנים, משחקי למידה ומשוב", "icon": "ti-puzzle", "color": "#EF9F27", "tint": "#FDF3E2", "ink": "#633806", "order": 5 },
    { "id": "worksheets", "name": "דפי עבודה ותכנון הוראה", "tagline": "מערכי שיעור, דפי עבודה ומחוונים", "icon": "ti-file-pencil", "color": "#639922", "tint": "#EEF6E4", "ink": "#27500A", "order": 6 },
    { "id": "spaces", "name": "לוחות שיתופיים ומרחבי למידה", "tagline": "לוחות, כיתות ואתרים שיתופיים", "icon": "ti-users-group", "color": "#1D9E75", "tint": "#E1F5EE", "ink": "#085041", "order": 7 },
    { "id": "building", "name": "בניית אתרים ואפליקציות", "tagline": "אתרים וכלים אינטראקטיביים מתיאור", "icon": "ti-code", "color": "#4B4FA8", "tint": "#E8E9F7", "ink": "#2B2E6E", "order": 8 }
  ],

  "tools": [
    {
      "id": "chatgpt",
      "name": "ChatGPT",
      "url": "https://chatgpt.com",
      "isGoogle": false,
      "description": "עוזר AI של OpenAI לשיחה, כתיבה, הסבר וניתוח קבצים.",
      "capabilities": ["כתיבה ועריכת טקסטים", "הסבר מושגים ברמות שונות", "ניסוח שאלות ומשימות", "ניתוח קבצים ותמונות", "יצירת תמונות", "שיחה קולית", "מחקר מעמיק (Deep Research)", "Canvas – בניית דף או משחק קטן עם תצוגה מקדימה"],
      "categories": [
        { "id": "ai-assistants", "highlight": "שיחה, כתיבה, הסבר וסיכום", "example": "ניסוח הסבר על מחזור המים בשלוש רמות קושי" },
        { "id": "images", "highlight": "יצירת תמונות ואיורים מתיאור", "example": "איור לסיפור שנקרא בכיתה" },
        { "id": "worksheets", "highlight": "מערכי שיעור, דפי עבודה ומחוונים", "example": "מערך שיעור על מחזור המים כולל מחוון הערכה" },
        { "id": "building", "highlight": "Canvas – משחק או כלי אינטראקטיבי קטן מתיאור, עם תצוגה מקדימה", "example": "משחק התאמה בין מושגים להגדרות, שנבנה ונבדק ישירות בשיחה" }
      ],
      "keywords": ["צ'אט", "בינה מלאכותית", "כתיבה", "סיכום", "מערך שיעור", "שאלות", "תמונה", "מכתב להורים", "תרגום", "הסבר", "vibe coding", "וייב קודינג", "קנבס"],
      "access": {
        "summary": "גרסה חינמית: שיחת טקסט ללא הגבלה מעשית; יצירת תמונות, העלאת קבצים, מחקר מעמיק ומצב קולי – במכסות מוגבלות. Canvas זמין גם בחשבון חינמי, באתר ובאפליקציה למחשב (לא באפליקציה לנייד). מכסות גבוהות יותר במנוי.",
        "verifiedOn": "2026-11-26",
        "sources": ["https://help.openai.com/en/articles/9275245", "https://help.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it"]
      },
      "note": ""
    },
    {
      "id": "gemini",
      "name": "Gemini",
      "url": "https://gemini.google.com",
      "isGoogle": true,
      "description": "עוזר AI של Google לשיחה, כתיבה, מחקר ויצירת תוכן, משולב בכלי Google.",
      "capabilities": ["שיחה וכתיבה", "ניתוח קבצים ותמונות", "יצירת תמונות", "Canvas – יצירת מסמכים, מצגות ואפליקציות קטנות", "Deep Research – מחקר מעמיק עם מקורות", "Gems – עוזרים מותאמים אישית", "ייצוא ל-Google Docs ו-Slides"],
      "categories": [
        { "id": "ai-assistants", "highlight": "שיחה, כתיבה ו-Deep Research עם מקורות", "example": "ניסוח משימת חקר לקבוצות, וסקירת רקע עדכנית עם מקורות לפני הוראת נושא חדש" },
        { "id": "presentations", "highlight": "יצירת מצגת ב-Canvas וייצוא ל-Google Slides", "example": "מצגת פתיחה לנושא חדש מתוך קובץ סיכום שהועלה" },
        { "id": "images", "highlight": "יצירת תמונות ואיורים", "example": "איור של תא צמחי עם כיתוב בעברית" },
        { "id": "worksheets", "highlight": "דפי עבודה ו-Gems קבועים לתכנון", "example": "Gem קבוע שמכין דפי תרגול בעברית ברמות שונות" },
        { "id": "building", "highlight": "Canvas – אפליקציה או משחק קטן מתיאור", "example": "משחק תרגול אינטראקטיבי לשינון מושגים" }
      ],
      "keywords": ["ג'מיני", "גוגל", "בינה מלאכותית", "מחקר", "מצגת", "תמונה", "Gem", "עוזר אישי", "דף עבודה", "סיכום", "vibe coding", "וייב קודינג"],
      "access": {
        "summary": "חינמי עם חשבון Google, במכסות.",
        "personalAccount": "גרסה חינמית עם מכסות; מכסות ויכולות מתקדמות יותר במנוי Google AI.",
        "educationAccount": "אפליקציית Gemini כלולה בכל מהדורות Google Workspace for Education ללא עלות, עם הגנת נתונים ארגונית. מכסות גבוהות יותר דורשות תוסף Google AI Pro for Education שרוכש המוסד. הזמינות תלויה בהפעלה על ידי מנהל המערכת.",
        "verifiedOn": "2026-11-22",
        "sources": ["https://edu.google.com/ai/gemini-for-education/", "https://workspaceupdates.googleblog.com/2025/10/generate-presentations-in-gemini-app.html"]
      },
      "note": ""
    },
    {
      "id": "claude",
      "name": "Claude",
      "url": "https://claude.ai",
      "isGoogle": false,
      "description": "עוזר AI של Anthropic לכתיבה, ניתוח מסמכים ויצירת קבצים וכלים אינטראקטיביים.",
      "capabilities": ["כתיבה ועריכה", "ניתוח מסמכים ארוכים", "Artifacts – יצירת כלים אינטראקטיביים בשיחה", "יצירת קבצי Word, PowerPoint, Excel ו-PDF", "פרויקטים עם חומרי רקע קבועים"],
      "categories": [
        { "id": "ai-assistants", "highlight": "כתיבה, עריכה וניתוח מסמכים", "example": "ניתוח תוכנית לימודים והצעת חלוקה ליחידות" },
        { "id": "presentations", "highlight": "יצירת קובץ מצגת PowerPoint", "example": "מצגת סיכום יחידה להורדה ועריכה" },
        { "id": "worksheets", "highlight": "דפי עבודה כקובץ Word מוכן", "example": "דף עבודה מודפס עם שאלות הבנה לטקסט" },
        { "id": "building", "highlight": "Artifacts – חידון או סימולציה אינטראקטיבית", "example": "חידון אינטראקטיבי לחזרה לפני מבחן" }
      ],
      "keywords": ["קלוד", "בינה מלאכותית", "כתיבה", "מסמך", "חידון אינטראקטיבי", "סימולציה", "מצגת", "קובץ וורד", "vibe coding", "וייב קודינג"],
      "access": {
        "summary": "גרסה חינמית עם מגבלות שימוש; Artifacts ויצירת קבצים זמינים גם בגרסה החינמית. מכסות גבוהות יותר במנוי.",
        "verifiedOn": "2026-11-22",
        "sources": ["https://support.claude.com/en/articles/12111783", "https://support.claude.com/en/articles/17153992"]
      },
      "note": ""
    },
    {
      "id": "copilot",
      "name": "Copilot",
      "url": "https://copilot.microsoft.com",
      "isGoogle": false,
      "description": "עוזר AI של Microsoft לשיחה, כתיבה, סיכום ויצירת תמונות.",
      "capabilities": ["שיחה וכתיבה", "סיכום טקסטים", "יצירת תמונות", "שילוב בתוך Word ו-PowerPoint – רק עם רישוי Microsoft 365 מתאים"],
      "categories": [
        { "id": "ai-assistants", "highlight": "שיחה, כתיבה וסיכום", "example": "ניסוח מכתב להורים וסיכום ישיבת צוות" },
        { "id": "images", "highlight": "יצירת תמונות מתיאור", "example": "תמונת פתיחה לשיעור על ירושלים העתיקה" }
      ],
      "keywords": ["קופיילוט", "מיקרוסופט", "בינה מלאכותית", "כתיבה", "סיכום", "תמונה"],
      "access": {
        "summary": "Copilot הבסיסי זמין בחינם עם חשבון Microsoft. Copilot בתוך אפליקציות Office תלוי במנוי או ברישוי ארגוני.",
        "verifiedOn": null,
        "sources": []
      },
      "note": ""
    },
    {
      "id": "canva",
      "name": "Canva",
      "url": "https://www.canva.com/education/",
      "isGoogle": false,
      "description": "פלטפורמת עיצוב עם מאגר תבניות ענק ליצירת כמעט כל תוצר חזותי, כולל כלי AI.",
      "capabilities": ["מצגות", "דפי עבודה ופוסטרים", "אינפוגרפיקות", "עריכת וידאו", "לוח לבן שיתופי", "הקצאת משימות לתלמידים ושילוב עם Google Classroom", "כלי AI (Magic Studio)", "Canva Code – יצירת כלים אינטראקטיביים ואתרים מתיאור"],
      "categories": [
        { "id": "presentations", "highlight": "מצגות מעוצבות מתבנית או בעזרת AI", "example": "מצגת שיעור בעיצוב אחיד עם דף העבודה" },
        { "id": "images", "highlight": "אינפוגרפיקות, פוסטרים ואיורים", "example": "אינפוגרפיקה על שלבי מחזור החיים של הפרפר" },
        { "id": "videos", "highlight": "עריכת סרטונים קצרים מתבניות", "example": "סרטון סיכום קצר לפרויקט כיתתי" },
        { "id": "worksheets", "highlight": "דפי עבודה מעוצבים להדפסה או לשיתוף", "example": "דף עבודה מעוצב לשיעור בהיסטוריה" },
        { "id": "quizzes", "highlight": "Canva Code – משחק או חידון אינטראקטיבי מתיאור", "example": "משחק זיכרון על מושגי היחידה שמוטמע ישירות במצגת השיעור" },
        { "id": "spaces", "highlight": "לוח לבן שיתופי ומשימות לתלמידים", "example": "לוח סיעור מוחות קבוצתי שממנו התלמידים מעצבים פוסטר מסכם" },
        { "id": "building", "highlight": "Canva Code – כלי אינטראקטיבי או אתר מתיאור", "example": "סימולציה או מחשבון אינטראקטיבי לשיעור, שנבנים מתיאור במילים" }
      ],
      "keywords": ["קנבה", "עיצוב", "מצגת", "פוסטר", "דף עבודה", "אינפוגרפיקה", "תעודה", "הזמנה", "סרטון", "תבניות", "קנבה קוד", "לוח שיתופי", "לוח לבן", "סיעור מוחות", "משחק", "vibe coding", "וייב קודינג"],
      "access": {
        "summary": "Canva for Education חינמי למורים מאומתים בבתי ספר (יסודי עד תיכון). כלי AI מסוימים מוגבלים או מוגדרים כתוספים.",
        "verifiedOn": "2026-11-22",
        "sources": ["https://www.canva.com/education/", "https://www.canva.com/pricing/?tab=education"]
      },
      "note": ""
    },
    {
      "id": "notebooklm",
      "name": "NotebookLM",
      "url": "https://notebooklm.google.com",
      "isGoogle": true,
      "description": "מחברת מחקר של Google שעובדת רק מתוך המקורות שהעליתם ויוצרת מהם מגוון תוצרי למידה.",
      "capabilities": ["תשובות מבוססות מקורות עם הפניות", "מצגות (Slide Decks) עם ייצוא ל-PowerPoint ו-PDF", "אינפוגרפיקות", "סקירות וידאו מוסברות", "סקירה קולית בסגנון פודקאסט", "חידונים וכרטיסיות זיכרון", "מדריכי לימוד ותדריכים", "מפת חשיבה"],
      "categories": [
        { "id": "presentations", "highlight": "יצירת מצגת מתוך המקורות", "example": "מצגת סיכום פרק מתוך ספר הלימוד" },
        { "id": "images", "highlight": "אינפוגרפיקה מתוך המקורות", "example": "אינפוגרפיקה המסכמת את גורמי המהפכה הצרפתית" },
        { "id": "videos", "highlight": "סקירת וידאו מוסברת וסקירה קולית בסגנון פודקאסט", "example": "סרטון הסבר לחזרה לפני מבחן, או פודקאסט קצר על פרק בספר לשמיעה בבית" },
        { "id": "quizzes", "highlight": "חידונים וכרטיסיות זיכרון מתוך החומר", "example": "חידון תרגול על פרק בספר הלימוד" },
        { "id": "worksheets", "highlight": "מדריכי לימוד ותדריכים", "example": "מדריך לימוד מסכם ליחידה" },
        { "id": "ai-assistants", "highlight": "שאלות ותשובות על המקורות שלכם, עם הפניות", "example": "ניתוח מספר מאמרים לקראת בניית יחידת לימוד" }
      ],
      "keywords": ["נוטבוק", "מחברת", "פודקאסט", "סיכום", "מקורות", "מצגת", "אינפוגרפיקה", "חידון", "כרטיסיות", "מפת חשיבה", "סרטון הסבר", "מדריך לימוד"],
      "access": {
        "summary": "חינמי עם חשבון Google, במכסות.",
        "personalAccount": "חינמי, עם מכסות על מספר המצגות, האינפוגרפיקות וסקירות הווידאו. מכסות גבוהות יותר במנוי Google AI. חלק מהיכולות החדשות (כמו סקירות וידאו קולנועיות) מיועדות לבני 18 ומעלה.",
        "educationAccount": "שירות ליבה בכל מהדורות Google Workspace for Education, מופעל כברירת מחדל, עם הגנת נתונים ארגונית. מכסות גבוהות יותר דורשות תוסף Google AI Pro for Education שרוכש המוסד.",
        "verifiedOn": "2026-11-22",
        "sources": ["https://workspaceupdates.googleblog.com/2025/08/notebooklm-is-now-available-to-all.html", "https://workspaceupdates.googleblog.com/2026/03/new-ways-to-customize-and-interact-with-your-content-in-NotebookLM.html"]
      },
      "note": ""
    },
    {
      "id": "gamma",
      "name": "Gamma",
      "url": "https://gamma.app",
      "isGoogle": false,
      "description": "יוצר מצגות, מסמכים ודפי אינטרנט מעוצבים מתוך הנחיה או טקסט.",
      "capabilities": ["מצגת מהנחיה או מטקסט", "עיצוב אוטומטי", "ייבוא קבצים", "ייצוא ל-PowerPoint ו-PDF", "דפי אינטרנט ואתרים פשוטים"],
      "categories": [
        { "id": "presentations", "highlight": "מצגת מעוצבת מהנחיה בכמה שניות", "example": "הפיכת סיכום שיעור למצגת מעוצבת" },
        { "id": "building", "highlight": "דף אינטרנט פשוט מתוך טקסט", "example": "דף נחיתה לפרויקט כיתתי" }
      ],
      "keywords": ["גאמה", "מצגת", "שקופיות", "עיצוב אוטומטי", "דף אינטרנט"],
      "access": {
        "summary": "גרסה חינמית ללא הגבלת זמן, עם מכסת קרדיטים חד-פעמית שאינה מתחדשת; עד 10 שקופיות להנחיה.",
        "verifiedOn": "2026-11-22",
        "sources": ["https://help.gamma.app/en/articles/8077107", "https://gamma.app/pricing"]
      },
      "note": ""
    },
    {
      "id": "google-slides",
      "name": "Google Slides",
      "url": "https://slides.google.com",
      "isGoogle": true,
      "description": "מצגות בענן עם עבודה שיתופית בזמן אמת.",
      "capabilities": ["עריכה שיתופית בזמן אמת", "תגובות", "שאלות קהל", "הטמעת וידאו", "יכולות Gemini – בהתאם לחשבון"],
      "categories": [
        { "id": "presentations", "highlight": "מצגת שיתופית לכל הכיתה", "example": "מצגת כיתתית שבה כל קבוצה ממלאת שקופית" }
      ],
      "keywords": ["מצגת", "שקופיות", "גוגל", "שיתופי", "עבודה בקבוצות"],
      "access": {
        "summary": "חינמי עם חשבון Google.",
        "personalAccount": "חינמי. יכולות Gemini בתוך Slides תלויות במנוי.",
        "educationAccount": "חינמי. זמינות יכולות Gemini בתוך Slides תלויה במהדורת החשבון ובהגדרות המנהל.",
        "verifiedOn": null,
        "sources": []
      },
      "note": ""
    },
    {
      "id": "powerpoint",
      "name": "PowerPoint",
      "url": "https://www.microsoft.com/microsoft-365/powerpoint",
      "isGoogle": false,
      "description": "תוכנת המצגות של Microsoft, כולל גרסת דפדפן.",
      "capabilities": ["עיצוב ואנימציות", "Designer – הצעות עיצוב", "הקלטת מצגת עם קריינות", "כתוביות חיות", "Copilot – לפי רישוי"],
      "categories": [
        { "id": "presentations", "highlight": "מצגת עם קריינות מוקלטת", "example": "שיעור מוקלט עם קריינות לתלמידים שנעדרו" }
      ],
      "keywords": ["פאוורפוינט", "מצגת", "מיקרוסופט", "הקלטה", "קריינות", "אנימציה"],
      "access": {
        "summary": "גרסת הדפדפן חינמית עם חשבון Microsoft. הגרסה המלאה ו-Copilot במנוי Microsoft 365 או ברישוי בית ספרי.",
        "verifiedOn": null,
        "sources": []
      },
      "note": ""
    },
    {
      "id": "napkin",
      "name": "Napkin AI",
      "url": "https://www.napkin.ai",
      "isGoogle": false,
      "description": "הופך טקסט לתרשימים ואינפוגרפיקות הניתנים לעריכה.",
      "capabilities": ["תרשים מטקסט", "אינפוגרפיקה", "ציר זמן", "תרשים זרימה", "עריכה וייצוא"],
      "categories": [
        { "id": "images", "highlight": "המרת טקסט לתרשים בלחיצה", "example": "פסקה על גורמי מלחמת העולם הראשונה הופכת לתרשים סיבה-תוצאה" }
      ],
      "keywords": ["נאפקין", "תרשים", "אינפוגרפיקה", "ציר זמן", "תרשים זרימה", "ויזואליזציה"],
      "access": {
        "summary": "יש גרסה חינמית עם מכסת קרדיטים; בגרסה החינמית הייצוא מוגבל. כדאי לבדוק הצגת עברית.",
        "verifiedOn": null,
        "sources": ["https://www.napkin.ai/pricing"]
      },
      "note": ""
    },
    {
      "id": "google-vids",
      "name": "Google Vids",
      "url": "https://workspace.google.com/products/vids/",
      "isGoogle": true,
      "description": "יצירת סרטוני הסבר והדרכה בדפדפן.",
      "capabilities": ["תבניות סרטונים", "הקלטת מסך ומצלמה", "ספריית מדיה", "עבודה שיתופית", "יכולות AI – תסריט, קריינות, אווטארים (לפי חשבון)"],
      "categories": [
        { "id": "videos", "highlight": "סרטון הסבר מתבנית או מהקלטת מסך", "example": "סרטון הסבר קצר על נוהל מעבדה" }
      ],
      "keywords": ["וידס", "סרטון", "וידאו", "הקלטת מסך", "סרטון הדרכה", "גוגל", "אווטאר"],
      "access": {
        "summary": "העורך הבסיסי זמין בחשבון אישי ובחשבון חינוכי; יכולות ה-AI מוגבלות ותלויות בסוג החשבון.",
        "personalAccount": "עורך בסיסי חינמי, עם מכסה חודשית קטנה ליכולות AI (אווטארים וקטעי וידאו).",
        "educationAccount": "גישה בסיסית לכל משתמשי Google Workspace for Education (כולל חשבונות משרד החינוך). המנהל יכול לחסום יכולות AI; היקפן תלוי במהדורה.",
        "verifiedOn": "2026-11-22",
        "sources": ["https://support.google.com/docs/answer/15609411", "https://workspaceupdates.googleblog.com/2025/09/expanded-access-vids-ai-education.html"]
      },
      "note": ""
    },
    {
      "id": "flow",
      "name": "Flow",
      "url": "https://labs.google/flow",
      "isGoogle": true,
      "description": "כלי AI של Google ליצירת קטעי וידאו מתיאור טקסטואלי או מתמונות, עם מודלי Veo.",
      "capabilities": ["וידאו מטקסט", "וידאו מתמונות", "חיבור קטעים לסצנה רציפה", "שליטה בתנועת המצלמה"],
      "categories": [
        { "id": "videos", "highlight": "קטע וידאו קצר מתיאור", "example": "קטע פתיחה הממחיש אירוע היסטורי לעורר סקרנות" }
      ],
      "keywords": ["פלואו", "וידאו", "סרטון AI", "Veo", "אנימציה", "גוגל"],
      "access": {
        "summary": "חינמי עם חשבון Google אישי, עם קרדיטים יומיים. מיועד לבני 18 ומעלה.",
        "personalAccount": "קרדיטים יומיים חינמיים; יותר קרדיטים במנויי Google AI.",
        "educationAccount": "לא זמין בחשבון משרד החינוך.",
        "verifiedOn": "2026-11-22",
        "sources": ["https://labs.google/flow"]
      },
      "note": ""
    },
    {
      "id": "capcut",
      "name": "CapCut",
      "url": "https://www.capcut.com",
      "isGoogle": false,
      "description": "עורך וידאו לנייד, למחשב ולדפדפן.",
      "capabilities": ["חיתוך ועריכה", "מעברים ואפקטים", "כתוביות אוטומטיות", "תבניות", "הקראת טקסט", "הסרת רקע"],
      "categories": [
        { "id": "videos", "highlight": "עריכת סרטון עם כתוביות אוטומטיות", "example": "סרטון סיכום פרויקט עם כתוביות" }
      ],
      "keywords": ["קאפקאט", "עריכת וידאו", "סרטון", "כתוביות", "רילס"],
      "access": {
        "summary": "גרסה חינמית; חלק מהתבניות, החומרים ויכולות ה-AI מוגבלים לגרסה בתשלום.",
        "verifiedOn": "2026-11-22",
        "sources": ["https://www.capcut.com/resource/capcut-standard-vs-pro"]
      },
      "note": ""
    },
    {
      "id": "genially",
      "name": "Genially",
      "url": "https://genially.com",
      "isGoogle": false,
      "description": "יצירת תוכן אינטראקטיבי: מצגות, משחקים, חדרי בריחה ותמונות לחיצות.",
      "capabilities": ["מצגות אינטראקטיביות", "חדרי בריחה", "משחקי לוח", "תמונות ומפות לחיצות", "אינפוגרפיקות", "מאגר תבניות", "הזמנת תלמידים לסביבת העבודה"],
      "categories": [
        { "id": "quizzes", "highlight": "חדרי בריחה ומשחקים", "example": "חדר בריחה דיגיטלי לחזרה בהיסטוריה" },
        { "id": "presentations", "highlight": "מצגת אינטראקטיבית עם שכבות", "example": "מצגת שבה התלמידים לוחצים לגילוי מידע" },
        { "id": "spaces", "highlight": "מרחב לימוד אינטראקטיבי", "example": "מפה לחיצה של ארץ ישראל עם משימות בכל אתר" }
      ],
      "keywords": ["ג'ניאלי", "חדר בריחה", "משחק", "אינטראקטיבי", "תמונה לחיצה", "מצגת אינטראקטיבית"],
      "access": {
        "summary": "גרסה חינמית עם מאגר תבניות ומכסת קרדיטים ל-AI; מגבלות על אחסון ועל חלק מאפשרויות הפרסום.",
        "verifiedOn": "2026-11-22",
        "sources": ["https://genially.com/plans/education"]
      },
      "note": ""
    },
    {
      "id": "wordwall",
      "name": "Wordwall",
      "url": "https://wordwall.net",
      "isGoogle": false,
      "description": "יוצר משחקי למידה ומאפשר להחליף ביניהם תבניות על אותו תוכן.",
      "capabilities": ["גלגל מזל", "התאמה", "חידון", "תפזורת", "מיון לקבוצות", "החלפת תבנית על אותו תוכן", "הקצאת משימה ותוצאות", "גרסאות להדפסה"],
      "categories": [
        { "id": "quizzes", "highlight": "משחקי למידה וחידונים מתבניות, עם דוח תוצאות", "example": "גלגל שאלות לפתיחת שיעור, או חידון חזרה כשיעורי בית עם דוח תוצאות" },
        { "id": "worksheets", "highlight": "גרסה להדפסה של כל פעילות", "example": "אותו תוכן כדף עבודה מודפס" }
      ],
      "keywords": ["וורדוול", "גלגל מזל", "משחק", "התאמה", "תפזורת", "חידון", "הדפסה"],
      "access": {
        "summary": "תוכנית Basic חינמית: עד 3 פעילויות ומבחר תבניות מצומצם.",
        "verifiedOn": "2026-11-22",
        "sources": ["https://wordwall.net/price-plans"]
      },
      "note": ""
    },
    {
      "id": "learningapps",
      "name": "LearningApps",
      "url": "https://learningapps.org",
      "isGoogle": false,
      "description": "יצירה ושיתוף של תרגילים אינטראקטיביים קצרים, ומאגר פעילויות מוכנות.",
      "capabilities": ["התאמה", "ציר זמן", "השלמת חסר", "תפזורת", "מאגר פעילויות מוכנות"],
      "categories": [
        { "id": "quizzes", "highlight": "תרגיל אינטראקטיבי קצר", "example": "ציר זמן לסידור אירועים בסיפור" }
      ],
      "keywords": ["לרנינג אפס", "תרגיל", "ציר זמן", "התאמה", "השלמה", "משחק"],
      "access": {
        "summary": "חינמי.",
        "verifiedOn": null,
        "sources": []
      },
      "note": ""
    },
    {
      "id": "wayground",
      "name": "Wayground (לשעבר Quizizz)",
      "url": "https://wayground.com",
      "isGoogle": false,
      "description": "חידונים ושיעורים אינטראקטיביים בזמן אמת או בקצב אישי, עם דוחות.",
      "capabilities": ["חידונים חיים ובקצב אישי", "שיעורים אינטראקטיביים", "סוגי שאלות מגוונים", "דוחות מפורטים", "מאגר פעילויות", "יצירת שאלות בעזרת AI"],
      "categories": [
        { "id": "quizzes", "highlight": "חידון חי בכיתה או בוחן בקצב אישי, עם דוחות", "example": "תחרות חידון לסיום יחידה, או בוחן חזרה לבית עם דוח טעויות נפוצות" }
      ],
      "keywords": ["וויגראונד", "קוויזיז", "חידון", "בוחן", "שיעורי בית", "דוחות"],
      "access": {
        "summary": "תוכנית חינמית למורים, עם מגבלות על מספר משתתפים, אחסון וסוגי שאלות.",
        "verifiedOn": null,
        "sources": []
      },
      "note": ""
    },
    {
      "id": "kahoot",
      "name": "Kahoot!",
      "url": "https://kahoot.com",
      "isGoogle": false,
      "description": "משחקי חידון חיים בכיתה עם ניקוד וטבלת מובילים.",
      "capabilities": ["חידון חי בכיתה", "ניקוד וטבלת מובילים", "משימה בקצב אישי", "מאגר משחקים מוכנים"],
      "categories": [
        { "id": "quizzes", "highlight": "משחק חידון תחרותי ובדיקת ידע מהירה", "example": "חידון פתיחה לבדיקת ידע קודם, או משחק סיכום שבועי עם טבלת מובילים" }
      ],
      "keywords": ["כהוט", "קהוט", "חידון", "משחק", "תחרות"],
      "access": {
        "summary": "תוכנית Basic חינמית למורים: עד 40 משתתפים במשחק.",
        "verifiedOn": "2026-11-22",
        "sources": ["https://kahoot.com/schools/plans/", "https://support.kahoot.com/hc/en-us/articles/115003072287"]
      },
      "note": ""
    },
    {
      "id": "quizlet",
      "name": "Quizlet",
      "url": "https://quizlet.com",
      "isGoogle": false,
      "description": "כרטיסיות זיכרון, מצבי תרגול ומבחן ומשחקים לשינון.",
      "capabilities": ["כרטיסיות זיכרון", "מצב Learn (תרגול מותאם)", "מצב Test (מבחן)", "משחק Match", "Quizlet Live – משחק קבוצתי בכיתה", "מאגר סטים מוכנים"],
      "categories": [
        { "id": "quizzes", "highlight": "כרטיסיות, משחקי שינון ומבחני תרגול", "example": "תחרות Quizlet Live על אוצר מילים באנגלית, ומבחן תרגול על המונחים לפני מבחן" }
      ],
      "keywords": ["קוויזלט", "כרטיסיות", "אוצר מילים", "שינון", "אנגלית", "משחק"],
      "access": {
        "summary": "גרסה חינמית עם כרטיסיות ומשחקים; מצבי Learn ו-Test מוגבלים בגרסה החינמית. תלמידים בכיתה שהמורה פתחה מקבלים גישה ל-Learn ו-Test לסטים של הכיתה.",
        "verifiedOn": "2026-11-22",
        "sources": ["https://help.quizlet.com/hc/en-us/articles/360041181691"]
      },
      "note": ""
    },
    {
      "id": "google-forms",
      "name": "Google Forms",
      "url": "https://forms.google.com",
      "isGoogle": true,
      "description": "טפסים ובחנים עם בדיקה אוטומטית ומשוב.",
      "capabilities": ["בוחן עם בדיקה אוטומטית", "משוב לכל תשובה", "סוגי שאלות מגוונים", "ניתוח תוצאות ב-Sheets", "שילוב עם Classroom"],
      "categories": [
        { "id": "quizzes", "highlight": "בוחן עם ציון ומשוב מיידי", "example": "מבחן מסכם עם ציון אוטומטי, או שאלון היכרות בתחילת שנה" }
      ],
      "keywords": ["טופס", "גוגל פורמס", "בוחן", "מבחן", "שאלון", "סקר", "משוב"],
      "access": {
        "summary": "חינמי עם חשבון Google.",
        "personalAccount": "חינמי.",
        "educationAccount": "חינמי, עם שילוב מלא ב-Classroom.",
        "verifiedOn": null,
        "sources": []
      },
      "note": ""
    },
    {
      "id": "diffit",
      "name": "Diffit",
      "url": "https://web.diffit.me",
      "isGoogle": false,
      "description": "מכין חומרי קריאה ותרגול מותאמים לרמות מתוך נושא, טקסט או קישור.",
      "capabilities": ["טקסט מותאם לרמות קריאה", "אוצר מילים", "שאלות הבנה", "פעילויות", "ייצוא לדף עבודה"],
      "categories": [
        { "id": "worksheets", "highlight": "התאמת טקסט לרמות", "example": "מאמר אחד בשלוש רמות קריאה לכיתה הטרוגנית" }
      ],
      "keywords": ["דיפיט", "הוראה מותאמת", "דיפרנציאציה", "רמות קריאה", "הבנת הנקרא", "כיתה הטרוגנית"],
      "access": {
        "summary": "גרסה בסיסית חינמית; בהרשמה ניתנת תקופת ניסיון לכל יכולות הפרימיום. כדאי לבדוק את איכות העברית.",
        "verifiedOn": "2026-11-22",
        "sources": ["https://web.diffit.me/pricing", "https://web.diffit.me/faq"]
      },
      "note": ""
    },
    {
      "id": "perplexity",
      "name": "Perplexity",
      "url": "https://www.perplexity.ai",
      "isGoogle": false,
      "description": "מנוע חיפוש מבוסס AI שעונה עם הפניות למקורות.",
      "capabilities": ["תשובות עם הפניות למקורות", "חיפוש מתקדם (Pro Search)", "מחקר מעמיק", "העלאת קבצים"],
      "categories": [
        { "id": "ai-assistants", "highlight": "חיפוש עם מקורות מצוטטים", "example": "איתור מקורות עדכניים לעבודת חקר" }
      ],
      "keywords": ["פרפלקסיטי", "חיפוש", "מקורות", "מחקר", "ציטוט", "עובדות"],
      "access": {
        "summary": "חיפוש בסיסי חינמי; חיפושים מתקדמים ומחקר מעמיק במכסה מוגבלת.",
        "verifiedOn": null,
        "sources": []
      },
      "note": ""
    },
    {
      "id": "suno",
      "name": "Suno",
      "url": "https://suno.com",
      "isGoogle": false,
      "description": "יוצר שירים שלמים – לחן, שירה ועיבוד – מתוך מילים או תיאור.",
      "capabilities": ["שיר מתוך מילים", "שיר מתיאור", "סגנונות מוזיקליים מגוונים"],
      "categories": [
        { "id": "videos", "highlight": "שיר מקורי ממילים", "example": "שיר לשינון מושגים במדעים עם מילים שהכיתה כתבה" }
      ],
      "keywords": ["סונו", "שיר", "מוזיקה", "לחן", "שינון"],
      "access": {
        "summary": "גרסה חינמית עם קרדיטים יומיים מתחדשים, לשימוש לא מסחרי בלבד.",
        "verifiedOn": "2026-11-22",
        "sources": ["https://help.suno.com/en/articles/9601601", "https://help.suno.com/en/articles/2418177"]
      },
      "note": ""
    },
    {
      "id": "elevenlabs",
      "name": "ElevenLabs",
      "url": "https://elevenlabs.io",
      "isGoogle": false,
      "description": "המרת טקסט לדיבור בקולות טבעיים, דיבוב ותמלול.",
      "capabilities": ["הקראת טקסט", "דיבוב לשפות אחרות", "ספרי שמע", "אפקטים קוליים", "תמלול (כולל עברית)", "שיבוט קול – בהסכמת בעל הקול בלבד"],
      "categories": [
        { "id": "videos", "highlight": "הקראה בקול טבעי", "example": "הקראת סיפור לתלמידים מתקשים בקריאה" }
      ],
      "keywords": ["אילבן לאבס", "הקראה", "קריינות", "טקסט לדיבור", "דיבוב", "תמלול", "קול"],
      "access": {
        "summary": "גרסה חינמית עם מכסה חודשית, לשימוש לא מסחרי. כדאי לבדוק את איכות ההקראה בעברית.",
        "verifiedOn": null,
        "sources": []
      },
      "note": ""
    },
    {
      "id": "padlet",
      "name": "Padlet",
      "url": "https://padlet.com",
      "isGoogle": false,
      "description": "לוח שיתופי לאיסוף רעיונות, תוצרים ותגובות.",
      "capabilities": ["תצורות קיר, טור, ציר זמן ומפה", "טקסט, תמונות, וידאו והקלטות", "תגובות ודירוג", "שיתוף ללא הגבלת משתתפים"],
      "categories": [
        { "id": "spaces", "highlight": "לוח שיתופי לכל הכיתה", "example": "קיר סיעור מוחות לפתיחת נושא, או גלריית עבודות" }
      ],
      "keywords": ["פדלט", "לוח שיתופי", "סיעור מוחות", "קיר", "גלריה", "ציר זמן"],
      "access": {
        "summary": "תוכנית Neon חינמית: עד 3 לוחות.",
        "verifiedOn": "2026-11-22",
        "sources": ["https://padlet.help/l/en/article/fu2nn6v4op-neon"]
      },
      "note": ""
    },
    {
      "id": "google-classroom",
      "name": "Google Classroom",
      "url": "https://classroom.google.com",
      "isGoogle": true,
      "description": "ניהול כיתה מקוונת והפצת חומרים ומשימות.",
      "capabilities": ["הודעות", "משימות ושיעורי בית", "בחנים", "ציונים ומשוב", "שילוב עם Drive, Forms ו-Meet", "כלי Gemini למורים – בהתאם לחשבון"],
      "categories": [
        { "id": "spaces", "highlight": "מרחב כיתתי להפצת משימות ומשוב", "example": "משימה שבועית עם עותק אישי ומשוב לכל תלמיד" }
      ],
      "keywords": ["קלאסרום", "כיתה", "משימות", "שיעורי בית", "ציונים", "גוגל", "הפצה"],
      "access": {
        "summary": "חינמי במסגרת Google Workspace for Education.",
        "personalAccount": "ניתן לשימוש, אך מיועד בעיקר לחשבונות חינוכיים.",
        "educationAccount": "חינמי. כלי Gemini ב-Classroom כלולים במהדורות החינוך ללא עלות, אך לפי Google הם זמינים כרגע באנגלית ולבני 18 ומעלה, ובכפוף להגדרות המנהל.",
        "verifiedOn": "2026-11-22",
        "sources": ["https://workspaceupdates.googleblog.com/2025/06/gemini-google-classroom-all-edu-editions.html"]
      },
      "note": ""
    },
    {
      "id": "google-sites",
      "name": "Google Sites",
      "url": "https://sites.google.com",
      "isGoogle": true,
      "description": "בניית אתר פשוט ללא קוד.",
      "capabilities": ["גרירת רכיבים", "הטמעת מסמכים, סרטונים וטפסים", "עריכה שיתופית", "פרסום בלחיצה"],
      "categories": [
        { "id": "spaces", "highlight": "אתר כיתתי לחומרי לימוד", "example": "אתר כיתתי עם חומרים לכל יחידה" },
        { "id": "building", "highlight": "אתר ללא קוד", "example": "אתר פרויקט שהכיתה בונה יחד" }
      ],
      "keywords": ["גוגל סייטס", "אתר", "אתר כיתתי", "ללא קוד", "הטמעה"],
      "access": {
        "summary": "חינמי עם חשבון Google.",
        "personalAccount": "חינמי.",
        "educationAccount": "חינמי; הגדרות השיתוף והפרסום נקבעות על ידי המנהל.",
        "verifiedOn": null,
        "sources": []
      },
      "note": ""
    },
    {
      "id": "lovable",
      "name": "Lovable",
      "url": "https://lovable.dev",
      "isGoogle": false,
      "description": "בונה אתרים ואפליקציות מתוך תיאור בשפה רגילה.",
      "capabilities": ["אפליקציה מתיאור טקסטואלי", "תצוגה מקדימה", "עריכה בצ'אט", "פרסום בלחיצה"],
      "categories": [
        { "id": "building", "highlight": "אפליקציה מלאה מתיאור", "example": "אתר תיק עבודות כיתתי" }
      ],
      "keywords": ["לאבבל", "אפליקציה", "אתר", "ללא קוד", "בנייה", "vibe coding", "וייב קודינג"],
      "access": {
        "summary": "גרסה חינמית עם קרדיטים יומיים ומגבלה חודשית.",
        "verifiedOn": "2026-11-22",
        "sources": ["https://docs.lovable.dev/introduction/plans-and-credits"]
      },
      "note": ""
    },
    {
      "id": "base44",
      "name": "Base44",
      "url": "https://base44.com",
      "isGoogle": false,
      "description": "בונה אפליקציות מתוך תיאור במילים, בלי קוד. חברה ישראלית (בבעלות Wix).",
      "capabilities": ["אפליקציה מתיאור טקסטואלי", "עריכה בצ'אט", "שמירת נתונים ומשתמשים בתוך האפליקציה", "פרסום בלחיצה בכתובת של Base44"],
      "categories": [
        { "id": "building", "highlight": "אפליקציה שימושית מתיאור, כולל שמירת נתונים", "example": "מערכת קטנה לרישום השאלת ספרים מספריית הכיתה" }
      ],
      "keywords": ["בייס 44", "אפליקציה", "ללא קוד", "בנייה", "vibe coding", "וייב קודינג", "ישראלי", "Wix"],
      "access": {
        "summary": "גרסה חינמית: 25 הודעות בחודש (עד 5 ביום), ופרסום בכתובת של Base44 בלבד. Base44 עוברת בהדרגה למודל קרדיטים חדש, ולכן המכסה עשויה להשתנות.",
        "verifiedOn": "2026-11-26",
        "sources": ["https://base44.com/guides/is-base44-free", "https://docs.base44.com/Account-and-billing/Billing-and-plans.md"]
      },
      "note": ""
    },
    {
      "id": "google-ai-studio",
      "name": "Google AI Studio",
      "url": "https://aistudio.google.com",
      "isGoogle": true,
      "description": "סביבת העבודה של Google עם מודלי Gemini, כולל בניית אפליקציות מתיאור.",
      "capabilities": ["מצב Build – אפליקציית ווב מתיאור", "שיתוף האפליקציה", "ניסוי במודלי Gemini"],
      "categories": [
        { "id": "building", "highlight": "אפליקציה אינטראקטיבית מתיאור", "example": "סימולציה אינטראקטיבית לניסוי בפיזיקה" }
      ],
      "keywords": ["AI סטודיו", "אפליקציה", "סימולציה", "גוגל", "ג'מיני", "בנייה", "vibe coding", "וייב קודינג"],
      "access": {
        "summary": "חינמי עם חשבון Google, במכסות. מיועד לבני 18 ומעלה.",
        "personalAccount": "חינמי במכסות.",
        "educationAccount": "הזמינות תלויה בהגדרות המנהל – לא אומת.",
        "verifiedOn": null,
        "sources": []
      },
      "note": ""
    }
  ]
}
;
