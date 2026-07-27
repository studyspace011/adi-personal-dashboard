// --- MASTER CONFIGURATION ---
const GITHUB_USER = "studyspace011";
const GITHUB_REPO = "adi-personal-dashboard";

// --- MASTER ACADEMIC DATABASE (Unchanged) ---
const academicDatabase = {
    "MJC-5-Phil": {
    name: "पाश्चात्य दर्शन (Western Philosophy)",
    tag: "mjc-5-philosophy",
    units: [
        {
            title: "यूनिट 1: ग्रीक दर्शन (Greek Philosophy)",
            topics: [
                { code: "1.1", name: "प्लेटो: प्रत्यय सिद्धांत / विचार का सिद्धांत (Theory of Ideas / Forms)" },
                { code: "1.2", name: "प्लेटो: ज्ञान बनाम मत (Knowledge vs. Opinion)" },
                { code: "1.3", name: "प्लेटो: द्रव्य की अवधारणा (Concept of Substance)" },
                { code: "1.4", name: "प्लेटो: गुफा का रूपक (Allegory of the Cave)" }
            ]
        },
        {
            title: "यूनिट 2: अरस्तू और बुद्धिवाद (Aristotle & Rationalism)",
            topics: [
                { code: "2.1", name: "अरस्तू: कारणता सिद्धांत (Theory of Causation)" },
                { code: "2.2", name: "अरस्तू: प्लेटो के प्रत्यय सिद्धांत का खंडन" },
                { code: "2.3", name: "अरस्तू: रूप और पदार्थ, गति (Form and Matter, Motion)" },
                { code: "2.4", name: "डेकार्ट: ज्ञानमीमांसा और संदेह पद्धति (Method of Doubt)" },
                { code: "2.5", name: "डेकार्ट: 'मैं सोचता हूँ, इसलिए मैं हूँ' (Cogito, Ergo Sum)" },
                { code: "2.6", name: "डेकार्ट: तत्वमीमांसा, ईश्वर और द्वैतवाद (Interactionism)" },
                { code: "2.7", name: "स्पिनोज़ा: ज्यामितीय पद्धति और ज्ञान के स्तर" },
                { code: "2.8", name: "स्पिनोज़ा: सर्वेश्वरवाद (Pantheism) और समानांतरवाद (Parallelism)" },
                { code: "2.9", name: "लाइब्नित्ज़: ज्ञान का सिद्धांत और विचार/तथ्य के सत्य" },
                { code: "2.10", name: "लाइब्नित्ज़: चिदणुवाद (Monads) और पूर्व-स्थापित सामंजस्य" }
            ]
        },
        {
            title: "यूनिट 3: अनुभववाद (Empiricism)",
            topics: [
                { code: "3.1", name: "लॉक: जन्मजात विचारों का खंडन और ज्ञान के स्रोत (Tabula Rasa)" },
                { code: "3.2", name: "लॉक: प्राथमिक व द्वितीयक गुण और द्रव्य का सिद्धांत" },
                { code: "3.3", name: "बरकले: सत्ता दृश्यता है (Esse-est-percipi) और आत्मनिष्ठ प्रत्ययवाद" },
                { code: "3.4", name: "बरकले: जड़ तत्व का खंडन, आत्मा और ईश्वर की सत्ता" },
                { code: "3.5", name: "ह्यूम: संस्कार, विचार और संदेहवाद (Scepticism)" },
                { code: "3.6", name: "ह्यूम: कारणता का सिद्धांत (Constant Conjunction)" }
            ]
        },
        {
            title: "यूनिट 4: कांट (Kant)",
            topics: [
                { code: "4.1", name: "कांट: समीक्षात्मक दर्शन और बुद्धिवाद-अनुभववाद का समन्वय" },
                { code: "4.2", name: "कांट: प्रागनुभविक संश्लेषणात्मक निर्णय (Synthetic Judgement a priori)" },
                { code: "4.3", name: "कांट: ज्ञान के सोपान (संवेदनशीलता और बुद्धि)" },
                { code: "4.4", name: "कांट: प्रतिभास और वस्तु-स्वतः (Phenomena and Noumena)" }
            ]
        }
    ]
    },
    "MJC-6-Phil": {
    name: "पाश्चात्य नीतिशास्त्र (Western Ethics)",
    tag: "mjc-6-philosophy",
    units: [
        {
            title: "यूनिट 1: नीतिशास्त्र का स्वरूप और ऐच्छिक क्रिया (Nature of Ethics & Voluntary Action)",
            topics: [
                { code: "1.1", name: "नीतिशास्त्र का स्वरूप और क्षेत्र, मानक नीतिशास्त्र, अधिनीतिशास्त्र (Normative & Meta-Ethics)" },
                { code: "1.2", name: "ऐच्छिक क्रिया का मनोवैज्ञानिक विश्लेषण (Psychological Analysis of Voluntary Action)" }
            ]
        },
        {
            title: "यूनिट 2: नैतिक निर्णय और नैतिकता की मान्यताएं (Moral Judgment & Postulates)",
            topics: [
                { code: "2.1", name: "नैतिक निर्णय का स्वरूप और विषय (Nature and Object of Moral Judgment)" },
                { code: "2.2", name: "नैतिकता की पूर्व-मान्यताएं / आधारभूत मान्यताएं (Postulates of Morality)" },
                { code: "2.3", name: "प्रयोजन और अभिप्राय (Motive and Intention)" }
            ]
        },
        {
            title: "यूनिट 3: नैतिकता के मापदंड (Standard of Morality)",
            topics: [
                { code: "3.1", name: "सुखवाद: बेंथम और मिल (Hedonism - Bentham and Mill)" },
                { code: "3.2", name: "अंतःप्रज्ञावाद / अंतःस्फूर्तिवाद (Intuitionism)" },
                { code: "3.3", name: "कठोरतावाद / कर्तव्यवाद (Rigorism)" }
            ]
        },
        {
            title: "यूनिट 4: दंड के सिद्धांत (Theories of Punishment)",
            topics: [
                { code: "4.1", name: "प्रतिशोधात्मक सिद्धांत (Retributive Theory)" },
                { code: "4.2", name: "सुधारात्मक सिद्धांत (Reformative Theory)" },
                { code: "4.3", name: "प्रतिरोधात्मक / भयानक सिद्धांत (Deterrent Theory)" }
            ]
        }
    ]
    },
    "MJC-7-Phil": {
    name: "दर्शनशास्त्र के मूल सिद्धांत (Basic Concepts of Philosophy)",
    tag: "mjc-7-philosophy",
    units: [
        {
            title: "यूनिट 1: परिचय (Introduction)",
            topics: [
                { code: "1.1", name: "दर्शनशास्त्र का स्वरूप, व्युत्पत्तिपरक अर्थ और पाश्चात्य-भारतीय दृष्टिकोण में अंतर" },
                { code: "1.2", name: "विज्ञान और धर्म के साथ दर्शनशास्त्र का संबंध" },
                { code: "1.3", name: "दर्शनशास्त्र की मुख्य शाखाएं (तत्वमीमांसा, ज्ञानमीमांसा, मूल्यमीमांसा, तर्कशास्त्र)" }
            ]
        },
        {
            title: "यूनिट 2: तत्वमीमांसा - पाश्चात्य दर्शन (Ontology - Western Philosophy)",
            topics: [
                { code: "2.1", name: "परम यथार्थ की अवधारणा एवं संख्यात्मक वर्गीकरण (एकतत्ववाद, द्वैतवाद, बहुतत्ववाद)" },
                { code: "2.2", name: "परम यथार्थ और जगत का संबंध: आभास बनाम यथार्थ" },
                { code: "2.3", name: "सृष्टि के स्वरूप के सिद्धांत: भौतिकवाद, प्रत्ययवाद और द्वैतवाद" },
                { code: "2.4", name: "सृष्टि की उत्पत्ति: सृष्टिवाद और विकासवाद (यांत्रिक व सप्रयोजन)" }
            ]
        },
        {
            title: "यूनिट 3: ज्ञानमीमांसा - पाश्चात्य दर्शन (Epistemology - Western Philosophy)",
            topics: [
                { code: "3.1", name: "ज्ञान के स्रोत: बुद्धिवाद (Rationalism)" },
                { code: "3.2", name: "ज्ञान के स्रोत: अनुभववाद (Empiricism - Tabula Rasa)" },
                { code: "3.3", name: "ज्ञान के स्रोत: समीक्षावाद (Criticism - Kant)" }
            ]
        },
        {
            title: "यूनिट 4: तत्वमीमांसीय अवधारणाएं - भारतीय दर्शन (Ontological Concepts - Indian Philosophy)",
            topics: [
                { code: "4.1", name: "ब्रह्म: शंकर का निर्गुण ब्रह्म और रामानुज का सगुण ब्रह्म" },
                { code: "4.2", name: "आत्मन: जैन (जीव), सांख्य (पुरुष), और न्याय दर्शन की अवधारणा" },
                { code: "4.3", name: "कारणता सिद्धांत: सत्कार्यवाद (परिणाम/विवर्त) और असत्कार्यवाद (आरंभवाद)" },
                { code: "4.4", name: "ईश्वर: न्याय (अस्तित्व के प्रमाण) और योग दर्शन (पुरुष विशेष)" }
            ]
        },
        {
            title: "यूनिट 5: ज्ञानमीमांसीय अवधारणाएं - भारतीय दर्शन (Epistemological Concepts - Indian Philosophy)",
            topics: [
                { code: "5.1", name: "प्रमा (यथार्थ ज्ञान) और अप्रमा (अयथार्थ ज्ञान) की अवधारणा" },
                { code: "5.2", name: "प्रमाण: प्रत्यक्ष, अनुमान, शब्द, उपमान, अर्थापत्ति और अनुपलब्धि" },
                { code: "5.3", name: "ख्यातिवाद (भ्रम/त्रुटि का सिद्धांत): विभिन्न भारतीय मतों का परिचय" }
            ]
        }
    ]
    },
    "MIC-4-Hindi": {
        name: "आधुनिक हिन्दी कविता : छायावाद के बाद",
        tag: "mic-4-hindi",
        units: [
            { 
                title: "Unit 1: प्रगतिवादी कविता", 
                topics: [
                    { code: "1.1.1", name: "केदारनाथ अग्रवाल: माँझी! न बजाओ वंशी" },
                    { code: "1.1.2", name: "केदारनाथ अग्रवाल: वह जन मारे नहीं मरेगा" },
                    { code: "1.2.1", name: "नागार्जुन: बादल को घिरते देखा है" },
                    { code: "1.2.2", name: "नागार्जुन: शासन की बंदूक" },
                    { code: "1.2.3", name: "नागार्जुन: अकाल और उसके बाद" }
                ] 
            },
            { 
                title: "Unit 2: राष्ट्रीय सांस्कृतिक काव्यधारा एवं प्रबन्ध काव्य", 
                topics: [
                    { code: "2.1.1", name: "रामधारी सिंह 'दिनकर': रश्मिरथी (तृतीय सर्ग)" },
                    { code: "2.2.1", name: "माखनलाल चतुर्वेदी: झरना" },
                    { code: "2.2.2", name: "माखनलाल चतुर्वेदी: कैदी और कोकिला" },
                    { code: "2.2.3", name: "माखनलाल चतुर्वेदी: नाशा का त्यौहार (हिमकिरीटिनी)" }
                ] 
            },
            { 
                title: "Unit 3: प्रयोगवाद एवं नई कविता", 
                topics: [
                    { code: "3.1.1", name: "भवानीप्रसाद मिश्र: सतपुड़ा के जंगल" },
                    { code: "3.1.2", name: "भवानीप्रसाद मिश्र: गीत-फ़रोश (दूसरा सप्तक)" },
                    { code: "3.2.1", name: "रघुवीर सहाय: पढ़िए गीता" },
                    { code: "3.2.2", name: "रघुवीर सहाय: रामदास" },
                    { code: "3.2.3", name: "रघुवीर सहाय: हाँसो हाँसो जल्दी हाँसो, नेता क्षमा करें" }
                ] 
            }
        ]
    },
    "AEC-4": {
        name: "Social Service / Scout & Guide / Sports",
        tag: "aec-4",
        units: [
            { title: "Unit 1: NCC General", topics: [{ code: "1.1", name: "Introduction to NCC: Aims & Organization" }] },
            { title: "Unit 2: National Integration", topics: [{ code: "2.1", name: "Concept of Unity & Threats to National Security" }] },
            { title: "Unit 3: Personality Development", topics: [{ code: "3.1", name: "Personal Traits, Empathy & Creative Thinking" }] },
            { title: "Unit 4: Social Service", topics: [{ code: "4.1", name: "Basics of Social Service, NGOs & Youth Role" }] },
            { title: "Practical Component", topics: [
                { code: "P.1", name: "Military Training (Drill, Map Reading)" }
            ]}
        ]
    }
};

// --- CORE UTILITIES ---
function safeReadStorage(key, fallback) {
    if (key !== 'syllabusTracker' && key !== 'theme') return fallback;
    try {
        const savedValue = localStorage.getItem(key);
        if (key === 'theme') return savedValue || fallback;
        return savedValue ? JSON.parse(savedValue) : fallback;
    } catch (error) {
        console.warn(`Unable to read ${key}:`, error);
        return fallback;
    }
}

function safeWriteStorage(key, value) {
    if (key !== 'syllabusTracker' && key !== 'theme') return;
    try {
        if (key === 'theme') {
            localStorage.setItem(key, value);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    } catch (error) {
        console.warn(`Unable to save ${key}:`, error);
    }
}

function showToast(message) {
    const toast = document.getElementById('app-toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('show'), 2400);
}

let syllabusTracker = {};

function resetBrowserAppData() {
    if (typeof localStorage === 'undefined') return;
    syllabusTracker = safeReadStorage('syllabusTracker', {});
}

// --- HELPER: GITHUB RELEASE URL CONVERTER FOR BROWSER VIEWING ---
function getGithubPdfViewerUrl(tag, filename) {
    const rawDownloadUrl = `https://github.com/${GITHUB_USER}/${GITHUB_REPO}/releases/download/${tag}/${filename}`;
    return `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(rawDownloadUrl)}`;
}

function getGithubPdfDownloadUrl(tag, filename) {
    return `https://github.com/${GITHUB_USER}/${GITHUB_REPO}/releases/download/${tag}/${filename}`;
}

async function openReleaseAsset(tag, filename) {
    const viewUrl = getGithubPdfViewerUrl(tag, filename);
    window.open(viewUrl, '_blank', 'noopener,noreferrer');
}

async function downloadReleaseAsset(tag, filename, displayName) {
    const downloadUrl = getGithubPdfDownloadUrl(tag, filename);
    try {
        showToast('Initiating download...');
        const response = await fetch(downloadUrl, {
            method: 'GET',
            headers: { 'User-Agent': 'StudyWorkspaceApp' }
        });

        if (!response.ok) throw new Error(`Download failed with ${response.status}`);

        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = displayName || filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
        showToast('Download started successfully.');
    } catch (error) {
        console.warn('Unable to download asset:', error);
        window.open(downloadUrl, '_blank'); // Fallback to direct link
        showToast('Redirecting to direct link.');
    }
}

// --- DARK / LIGHT THEME CONTROLLER (PHILOSOPHY THEMED) ---
// Changed to Candle and Sun icons for better vibe
const themeIcons = {
    light: `<svg class="icon-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8zm0-13a5 5 0 1 0 5 5a5 5 0 0 0-5-5z"/></svg>`, // Sun
    dark: `<svg class="icon-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 11.5a1 1 0 1 0 1 1a1 1 0 0 0-1-1zm-6 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1zM19 19H5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zm-1.5-3.5A3.5 3.5 0 1 1 14 12a3.5 3.5 0 0 1 3.5 3.5zM12 17a3 3 0 1 0-3-3a3 3 0 0 0 3 3z"/></svg>` // Candle or Owl vibe
};

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-icon-svg').forEach(icon => {
        icon.innerHTML = theme === 'dark' ? themeIcons.light : themeIcons.dark;
    });
    safeWriteStorage('theme', theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
}

// --- MOBILE SIDEBAR CONTROLLER ---
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    if (sidebar.classList.contains('collapsed')) {
        sidebar.classList.remove('collapsed');
        if (window.innerWidth < 768) overlay.style.display = 'block';
    } else {
        sidebar.classList.add('collapsed');
        overlay.style.display = 'none';
    }
}

// --- ROUTER ENGINE ---
function navigateTo(target) {
    document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active'));
    const targetEl = document.getElementById(`nav-${target}`);
    if (targetEl) targetEl.classList.add('active');

    document.querySelectorAll('.content-view').forEach(view => view.classList.add('hidden'));
    document.getElementById(`view-${target}`).classList.remove('hidden');

    if (window.innerWidth < 768) {
        document.getElementById('sidebar').classList.add('collapsed');
        document.getElementById('sidebar-overlay').style.display = 'none';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (target === 'dashboard') renderDashboard();
    else if (target === 'syllabus') renderSyllabusPage();
    else if (target === 'notes') renderNotesPage();
    else if (target === 'slides') renderSlidesSubjectLanding();
}

// --- 1. DASHBOARD CONTROLLER ---
function renderDashboard() {
    const trackerContainer = document.getElementById('dashboard-tracker-list');
    trackerContainer.innerHTML = '';

    let totalTopics = 0;
    let completedTopics = 0;

    Object.keys(academicDatabase).forEach(subCode => {
        const subjectBox = document.createElement('div');
        subjectBox.className = 'subject-checklist-box';
        subjectBox.innerHTML = `<h3 class="subject-header">${subCode}</h3>`;

        academicDatabase[subCode].units.forEach(unit => {
            unit.topics.forEach(topic => {
                totalTopics++;
                const key = `${subCode}_${topic.code}`;
                const isChecked = syllabusTracker[key] || false;
                if (isChecked) completedTopics++;

                const row = document.createElement('div');
                row.className = `tracker-item ${isChecked ? 'checked' : ''}`;
                row.onclick = () => toggleTrackItem(key);
                row.innerHTML = `
                    <span><strong>${topic.code}</strong> ${topic.name}</span>
                    <input type="checkbox" ${isChecked ? 'checked' : ''} class="phil-checkbox">
                `;
                subjectBox.appendChild(row);
            });
        });
        trackerContainer.appendChild(subjectBox);
    });

    const percent = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    document.getElementById('stats-syllabus-percent').innerText = `${percent}%`;
    document.getElementById('syllabus-progress-bar').style.width = `${percent}%`;
    document.getElementById('stats-decks-total').innerText = `${completedTopics} / ${totalTopics}`;
}

function toggleTrackItem(key) {
    syllabusTracker[key] = !syllabusTracker[key];
    safeWriteStorage('syllabusTracker', syllabusTracker);
    renderDashboard();
}

// NEW PHILOSOPHY ICONS
const eyeIcon = `<svg class="icon-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"/></svg>`;
const downloadIcon = `<svg class="icon-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7l7-7zM5 18v2h14v-2H5z"/></svg>`;
const bookIcon = `<svg class="icon-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>`;

// --- 2. SYLLABUS CONTROLLER ---
function renderSyllabusPage() {
    const container = document.getElementById('syllabus-cards-container');
    container.innerHTML = '';

    Object.keys(academicDatabase).forEach(code => {
        const tag = academicDatabase[code].tag;
        const fileName = `${code}_Syllabus.pdf`;
        
        const card = document.createElement('div');
        card.className = 'subject-card syllabus-style';
        card.innerHTML = `
            <div class="card-icon-header">${bookIcon}</div>
            <h3>${code}</h3>
            <p class="subject-full-name">${academicDatabase[code].name}</p>
            <div class="btn-container">
                <button type="button" class="btn-phil" data-action="view">${eyeIcon} Study</button>
                <button type="button" class="btn-phil btn-secondary" data-action="download">${downloadIcon}</button>
            </div>
        `;
        card.querySelector('[data-action="view"]').addEventListener('click', () => openReleaseAsset(tag, fileName));
        card.querySelector('[data-action="download"]').addEventListener('click', () => downloadReleaseAsset(tag, fileName, fileName));
        container.appendChild(card);
    });
}

// --- 3. NOTES CONTROLLER ---
function renderNotesPage() {
    const container = document.getElementById('notes-cards-container');
    container.innerHTML = '';

    Object.keys(academicDatabase).forEach(code => {
        const tag = academicDatabase[code].tag;
        const fileName = `${code}_Notes.pdf`;

        const card = document.createElement('div');
        card.className = 'subject-card notes-style';
        card.innerHTML = `
            <div class="card-icon-header"><svg class="icon-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3 13h18v-2H3v2zm0-7v2h18V6H3zm0 12h12v-2H3v2z"/></svg></div>
            <h3>${code}</h3>
            <p class="subject-full-name">${academicDatabase[code].name}</p>
            <div class="btn-container">
                <button type="button" class="btn-phil" data-action="view">${bookIcon} Read Notes</button>
                <button type="button" class="btn-phil btn-secondary" data-action="download">${downloadIcon} PDF</button>
            </div>
        `;
        card.querySelector('[data-action="view"]').addEventListener('click', () => openReleaseAsset(tag, fileName));
        card.querySelector('[data-action="download"]').addEventListener('click', () => downloadReleaseAsset(tag, fileName, fileName));
        container.appendChild(card);
    });
}

// --- 4. REVISION SLIDES CONTROLLER ---
const folderIcon = `<svg class="icon-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>`;

function renderSlidesSubjectLanding() {
    document.getElementById('slides-title').innerText = "Revision Slide Decks";
    document.getElementById('slides-subtitle').innerText = "Select a subject folder below.";

    const container = document.getElementById('slides-container');
    container.innerHTML = `<div class="grid-cards"></div>`;
    const grid = container.querySelector('.grid-cards');

    Object.keys(academicDatabase).forEach(code => {
        const card = document.createElement('div');
        card.className = 'subject-card slides-style folder-card';
        card.innerHTML = `
            <div class="card-icon-header">${folderIcon}</div>
            <h3>${code}</h3>
            <p class="subject-full-name">${academicDatabase[code].name}</p>
            <div class="folder-action-text">Open Vault →</div>
        `;
        card.onclick = () => renderSlideTopicsList(code);
        grid.appendChild(card);
    });
}

function renderSlideTopicsList(subCode) {
    const tag = academicDatabase[subCode].tag;
    document.getElementById('slides-title').innerText = `${subCode} Slides`;
    
    const container = document.getElementById('slides-container');
    const backBtnHtml = `
        <button class="btn-phil btn-secondary back-btn" onclick="renderSlidesSubjectLanding()">
            ← Back to Folders
        </button>
    `;
    
    container.innerHTML = backBtnHtml;

    academicDatabase[subCode].units.forEach(unit => {
        const box = document.createElement('div');
        box.className = 'card revision-unit-box';
        box.innerHTML = `<h3 class="unit-header">${unit.title}</h3>`;

        unit.topics.forEach(topic => {
            const fileName = `${topic.code}.pdf`;
            const row = document.createElement('div');
            row.className = 'tracker-item slide-topic-row';
            row.innerHTML = `
                <span class="topic-info"><strong>${topic.code}.pdf</strong><br><span class="topic-name">${topic.name}</span></span>
                <div class="btn-container row-actions">
                    <button type="button" class="btn-phil btn-sm" data-action="view">${eyeIcon}</button>
                    <button type="button" class="btn-phil btn-secondary btn-sm" data-action="download">${downloadIcon}</button>
                </div>
            `;
            row.querySelector('[data-action="view"]').addEventListener('click', () => openReleaseAsset(tag, fileName));
            row.querySelector('[data-action="download"]').addEventListener('click', () => downloadReleaseAsset(tag, fileName, fileName));
            box.appendChild(row);
        });
        container.appendChild(box);
    });
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    resetBrowserAppData();
    const savedTheme = safeReadStorage('theme', 'light');
    applyTheme(savedTheme);
    navigateTo('dashboard');
});