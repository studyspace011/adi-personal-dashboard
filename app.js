// --- MASTER CONFIGURATION ---
const GITHUB_USER = "studyspace011";
const GITHUB_REPO = "adi-personal-dashboard";

// PDF.js Worker Configuration
if (window['pdfjs-dist/build/pdf']) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
}

// --- MASTER ACADEMIC DATABASE (Unchanged) ---
const academicDatabase = {
    'MJC-5-Phil': {
        name: 'पाश्चात्य दर्शन (Western Philosophy)',
        tag: 'mjc-5-philosophy',
        units: [
            {
                title: 'यूनिट 1: ग्रीक दर्शन (Greek Philosophy)',
                topics: [
                    { code: '1.1', name: 'प्लेटो: प्रत्यय सिद्धांत / विचार का सिद्धांत (Theory of Ideas / Forms)' },
                    { code: '1.2', name: 'प्लेटो: ज्ञान बनाम मत (Knowledge vs. Opinion)' },
                    { code: '1.3', name: 'प्लेटो: द्रव्य की अवधारणा (Concept of Substance)' },
                    { code: '1.4', name: 'प्लेटो: गुफा का रूपक (Allegory of the Cave)' }
                ]
            },
            {
                title: 'यूनिट 2: अरस्तू और बुद्धिवाद (Aristotle & Rationalism)',
                topics: [
                    { code: '2.1', name: 'अरस्तू: कारणता सिद्धांत (Theory of Causation)' },
                    { code: '2.2', name: 'अरस्तू: प्लेटो के प्रत्यय सिद्धांत का खंडन' },
                    { code: '2.3', name: 'अरस्तू: रूप और पदार्थ, गति (Form and Matter, Motion)' },
                    { code: '2.4', name: 'डेकार्ट: ज्ञानमीमांसा और संदेह पद्धति (Method of Doubt)' },
                    { code: '2.5', name: 'डेकार्ट: "मैं सोचता हूँ, इसलिए मैं हूँ" (Cogito, Ergo Sum)' },
                    { code: '2.6', name: 'डेकार्ट: तत्वमीमांसा, ईश्वर और द्वैतवाद (Interactionism)' },
                    { code: '2.7', name: 'स्पिनोज़ा: ज्यामितीय पद्धति और ज्ञान के स्तर' },
                    { code: '2.8', name: 'स्पिनोज़ा: सर्वेश्वरवाद (Pantheism) और समानांतरवाद (Parallelism)' },
                    { code: '2.9', name: 'लाइब्नित्ज़: ज्ञान का सिद्धांत और विचार/तथ्य के सत्य' },
                    { code: '2.10', name: 'लाइब्नित्ज़: चिदणुवाद (Monads) और पूर्व-स्थापित सामंजस्य' }
                ]
            },
            {
                title: 'यूनिट 3: अनुभववाद (Empiricism)',
                topics: [
                    { code: '3.1', name: 'लॉक: जन्मजात विचारों का खंडन और ज्ञान के स्रोत (Tabula Rasa)' },
                    { code: '3.2', name: 'लॉक: प्राथमिक व द्वितीयक गुण और द्रव्य का सिद्धांत' },
                    { code: '3.3', name: 'बरकले: सत्ता दृश्यता है (Esse-est-percipi) और आत्मनिष्ठ प्रत्ययवाद' },
                    { code: '3.4', name: 'बरकले: जड़ तत्व का खंडन, आत्मा और ईश्वर की सत्ता' },
                    { code: '3.5', name: 'ह्यूम: संस्कार, विचार और संदेहवाद (Scepticism)' },
                    { code: '3.6', name: 'ह्यूम: कारणता का सिद्धांत (Constant Conjunction)' }
                ]
            },
            {
                title: 'यूनिट 4: कांट (Kant)',
                topics: [
                    { code: '4.1', name: 'कांट: समीक्षात्मक दर्शन और बुद्धिवाद-अनुभववाद का समन्वय' },
                    { code: '4.2', name: 'कांट: प्रागनुभविक संश्लेषणात्मक निर्णय (Synthetic Judgement a priori)' },
                    { code: '4.3', name: 'कांट: ज्ञान के सोपान (संवेदनशीलता और बुद्धि)' },
                    { code: '4.4', name: 'कांट: प्रतिभास और वस्तु-स्वतः (Phenomena and Noumena)' }
                ]
            }
        ]
    },
    'MJC-6-Phil': {
        name: 'पाश्चात्य नीतिशास्त्र (Western Ethics)',
        tag: 'mjc-6-philosophy',
        units: [
            {
                title: 'यूनिट 1: नीतिशास्त्र का स्वरूप और ऐच्छिक क्रिया (Nature of Ethics & Voluntary Action)',
                topics: [
                    { code: '1.1', name: 'नीतिशास्त्र का स्वरूप और क्षेत्र, मानक नीतिशास्त्र, अधिनीतिशास्त्र (Normative & Meta-Ethics)' },
                    { code: '1.2', name: 'ऐच्छिक क्रिया का मनोवैज्ञानिक विश्लेषण (Psychological Analysis of Voluntary Action)' }
                ]
            },
            {
                title: 'यूनिट 2: नैतिक निर्णय और नैतिकता की मान्यताएं (Moral Judgment & Postulates)',
                topics: [
                    { code: '2.1', name: 'नैतिक निर्णय का स्वरूप और विषय (Nature and Object of Moral Judgment)' },
                    { code: '2.2', name: 'नैतिकता की पूर्व-मान्यताएं / आधारभूत मान्यताएं (Postulates of Morality)' },
                    { code: '2.3', name: 'प्रयोजन और अभिप्राय (Motive and Intention)' }
                ]
            },
            {
                title: 'यूनिट 3: नैतिकता के मापदंड (Standard of Morality)',
                topics: [
                    { code: '3.1', name: 'सुखवाद: बेंथम और मिल (Hedonism - Bentham and Mill)' },
                    { code: '3.2', name: 'अंतःप्रज्ञावाद / अंतःस्फूर्तिवाद (Intuitionism)' },
                    { code: '3.3', name: 'कठोरतावाद / कर्तव्यवाद (Rigorism)' }
                ]
            },
            {
                title: 'यूनिट 4: दंड के सिद्धांत (Theories of Punishment)',
                topics: [
                    { code: '4.1', name: 'प्रतिशोधात्मक सिद्धांत (Retributive Theory)' },
                    { code: '4.2', name: 'सुधारात्मक सिद्धांत (Reformative Theory)' },
                    { code: '4.3', name: 'प्रतिरोधात्मक / भयानक सिद्धांत (Deterrent Theory)' }
                ]
            }
        ]
    },
    'MJC-7-Phil': {
        name: 'दर्शनशास्त्र के मूल सिद्धांत (Basic Concepts of Philosophy)',
        tag: 'mjc-7-philosophy',
        units: [
            {
                title: 'यूनिट 1: परिचय (Introduction)',
                topics: [
                    { code: '1.1', name: 'दर्शनशास्त्र का स्वरूप, व्युत्पत्तिपरक अर्थ और पाश्चात्य-भारतीय दृष्टिकोण में अंतर' },
                    { code: '1.2', name: 'विज्ञान और धर्म के साथ दर्शनशास्त्र का संबंध' },
                    { code: '1.3', name: 'दर्शनशास्त्र की मुख्य शाखाएं (तत्वमीमांसा, ज्ञानमीमांसा, मूल्यमीमांसा, तर्कशास्त्र)' }
                ]
            },
            {
                title: 'यूनिट 2: तत्वमीमांसा - पाश्चात्य दर्शन (Ontology - Western Philosophy)',
                topics: [
                    { code: '2.1', name: 'परम यथार्थ की अवधारणा एवं संख्यात्मक वर्गीकरण (एकतत्ववाद, द्वैतवाद, बहुतत्ववाद)' },
                    { code: '2.2', name: 'परम यथार्थ और जगत का संबंध: आभास बनाम यथार्थ' },
                    { code: '2.3', name: 'सृष्टि के स्वरूप के सिद्धांत: भौतिकवाद, प्रत्ययवाद और द्वैतवाद' },
                    { code: '2.4', name: 'सृष्टि की उत्पत्ति: सृष्टिवाद और विकासवाद (यांत्रिक व सप्रयोजन)' }
                ]
            },
            {
                title: 'यूनिट 3: ज्ञानमीमांसा - पाश्चात्य दर्शन (Epistemology - Western Philosophy)',
                topics: [
                    { code: '3.1', name: 'ज्ञान के स्रोत: बुद्धिवाद (Rationalism)' },
                    { code: '3.2', name: 'ज्ञान के स्रोत: अनुभववाद (Empiricism - Tabula Rasa)' },
                    { code: '3.3', name: 'ज्ञान के स्रोत: समीक्षावाद (Criticism - Kant)' }
                ]
            },
            {
                title: 'यूनिट 4: तत्वमीमांसीय अवधारणाएं - भारतीय दर्शन (Ontological Concepts - Indian Philosophy)',
                topics: [
                    { code: '4.1', name: 'ब्रह्म: शंकर का निर्गुण ब्रह्म और रामानुज का सगुण ब्रह्म' },
                    { code: '4.2', name: 'आत्मन: जैन (जीव), सांख्य (पुरुष), और न्याय दर्शन की अवधारणा' },
                    { code: '4.3', name: 'कारणता सिद्धांत: सत्कार्यवाद (परिणाम/विवर्त) और असत्कार्यवाद (आरंभवाद)' },
                    { code: '4.4', name: 'ईश्वर: न्याय (अस्तित्व के प्रमाण) और योग दर्शन (पुरुष विशेष)' }
                ]
            },
            {
                title: 'यूनिट 5: ज्ञानमीमांसीय अवधारणाएं - भारतीय दर्शन (Epistemological Concepts - Indian Philosophy)',
                topics: [
                    { code: '5.1', name: 'प्रमा (यथार्थ ज्ञान) और अप्रमा (अयथार्थ ज्ञान) की अवधारणा' },
                    { code: '5.2', name: 'प्रमाण: प्रत्यक्ष, अनुमान, शब्द, उपमान, अर्थापत्ति और अनुपलब्धि' },
                    { code: '5.3', name: 'ख्यातिवाद (भ्रम/त्रुटि का सिद्धांत): विभिन्न भारतीय मतों का परिचय' }
                ]
            }
        ]
    },
    'MIC-4-Hindi': {
        name: 'आधुनिक हिन्दी कविता : छायावाद के बाद',
        tag: 'mic-4-hindi',
        units: [
            {
                title: 'Unit 1: प्रगतिवादी कविता',
                topics: [
                    { code: '1.1.1', name: 'केदारनाथ अग्रवाल: माँझी! न बजाओ वंशी' },
                    { code: '1.1.2', name: 'केदारनाथ अग्रवाल: वह जन मारे नहीं मरेगा' },
                    { code: '1.2.1', name: 'नागार्जुन: बादल को घिरते देखा है' },
                    { code: '1.2.2', name: 'नागार्जुन: शासन की बंदूक' },
                    { code: '1.2.3', name: 'नागार्जुन: अकाल और उसके बाद' }
                ]
            },
            {
                title: 'Unit 2: राष्ट्रीय सांस्कृतिक काव्यधारा एवं प्रबन्ध काव्य',
                topics: [
                    { code: '2.1.1', name: 'रामधारी सिंह "दिनकर": रश्मिरथी (तृतीय सर्ग)' },
                    { code: '2.2.1', name: 'माखनलाल चतुर्वेदी: झरना' },
                    { code: '2.2.2', name: 'माखनलाल चतुर्वेदी: कैदी और कोकिला' },
                    { code: '2.2.3', name: 'माखनलाल चतुर्वेदी: नाशा का त्यौहार (हिमकिरीटिनी)' }
                ]
            },
            {
                title: 'Unit 3: प्रयोगवाद एवं नई कविता',
                topics: [
                    { code: '3.1.1', name: 'भवानीप्रसाद मिश्र: सतपुड़ा के जंगल' },
                    { code: '3.1.2', name: 'भवानीप्रसाद मिश्र: गीत-फ़रोश (दूसरा सप्तक)' },
                    { code: '3.2.1', name: 'रघुवीर सहाय: पढ़िए गीता' },
                    { code: '3.2.2', name: 'रघुवीर सहाय: रामदास' },
                    { code: '3.2.3', name: 'रघुवीर सहाय: हाँसो हाँसो जल्दी हाँसो, नेता क्षमा करें' }
                ]
            }
        ]
    },
    'AEC-4': {
    name: 'Social Service / Scout & Guide / Sports',
    tag: 'aec-4',
    units: [
        {
            title: 'Unit 1: NCC General',
            topics: [
                { code: '1.1', name: 'Introduction to NCC' },
                { code: '1.2', name: 'Provisions for Cadets' },
                { code: '1.3', name: 'Training Camps' }
            ]
        },
        {
            title: 'Unit 2: National Integration',
            topics: [
                { code: '2.1', name: 'Concept of Unity' },
                { code: '2.2', name: 'Challenges' }
            ]
        },
        {
            title: 'Unit 3: Personality Development',
            topics: [
                { code: '3.1', name: 'Personal Traits' },
                { code: '3.2', name: 'Mental Skills' }
            ]
        },
        {
            title: 'Unit 4: Social Service and Community Development',
            topics: [
                { code: '4.1', name: 'Basics of Service' },
                { code: '4.2', name: 'Rural and Youth Development' }
            ]
        },
        {
            title: 'Practical Component',
            topics: [
                { code: 'P.1.1', name: 'Military Training: Drill' },
                { code: 'P.1.2', name: 'Military Training: Field Craft & Battle Craft' },
                { code: 'P.1.3', name: 'Military Training: Map Reading' },
                { code: 'P.1.4', name: 'Military Training: Weapon Training' },
                { code: 'P.2.1', name: 'Social Activity: Social Service & Community Development' },
                { code: 'P.2.2', name: 'Social Activity: Any other Practical/Practice' }
            ]
        }
    ]
}
};

// --- STORAGE SYSTEM ---
function safeReadStorage(key, fallback) {
    if (key !== 'syllabusTracker') return fallback;
    try {
        const savedValue = localStorage.getItem(key);
        return savedValue ? JSON.parse(savedValue) : fallback;
    } catch (error) { return fallback; }
}

function safeWriteStorage(key, value) {
    if (key !== 'syllabusTracker') return;
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) {}
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
    const keepKey = 'syllabusTracker';
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key !== keepKey) keysToRemove.push(key);
    }
    keysToRemove.forEach((key) => localStorage.removeItem(key));
    syllabusTracker = safeReadStorage('syllabusTracker', {});
}

// --- MODAL ENGINE FOR IN-APP PREVIEW ---
function setupPdfModal() {
    if (document.getElementById('pdf-modal-wrapper')) return;

    const modalHtml = `
    <div id="pdf-modal-wrapper" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.85); z-index:9999; flex-direction:column; align-items:center; justify-content:center;">
        <div style="width:95%; max-width:900px; height:90vh; background:var(--bg-card, #1e293b); color:#fff; border-radius:8px; display:flex; flex-direction:column; overflow:hidden;">
            <div style="padding:10px 16px; background:var(--bg-hover, #0f172a); display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #334155;">
                <span id="pdf-modal-title" style="font-weight:bold; font-size:0.95rem;">Document Viewer</span>
                <button onclick="closePdfModal()" style="background:#ef4444; color:#fff; border:none; padding:6px 14px; border-radius:4px; cursor:pointer; font-weight:bold;">Close ✕</button>
            </div>
            <div id="pdf-canvas-container" style="flex:1; overflow:auto; padding:15px; text-align:center; background:#525659;">
                <div id="pdf-loader-text" style="color:#fff; margin-top:20px;">Loading PDF Document...</div>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closePdfModal() {
    const modal = document.getElementById('pdf-modal-wrapper');
    if (modal) modal.style.display = 'none';
    const container = document.getElementById('pdf-canvas-container');
    if (container) container.innerHTML = '<div id="pdf-loader-text" style="color:#fff; margin-top:20px;">Loading PDF Document...</div>';
}

function getCdnReleaseUrl(tag, filename) {
    return `https://cdn.jsdelivr.net/gh/${GITHUB_USER}/${GITHUB_REPO}@${tag}/${filename}`;
}

function getGithubReleaseUrl(tag, filename) {
    return `https://github.com/${GITHUB_USER}/${GITHUB_REPO}/releases/download/${tag}/${filename}`;
}

async function openReleaseAsset(tag, filename) {
    setupPdfModal();
    const modal = document.getElementById('pdf-modal-wrapper');
    const container = document.getElementById('pdf-canvas-container');
    const title = document.getElementById('pdf-modal-title');
    
    modal.style.display = 'flex';
    title.innerText = filename;
    container.innerHTML = '<div style="color:#fff; margin-top:20px;">Fetching document...</div>';

    const url = getCdnReleaseUrl(tag, filename);

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("File fetch failed");
        const arrayBuffer = await response.arrayBuffer();

        if (window.pdfjsLib) {
            const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
            const pdf = await loadingTask.promise;
            
            container.innerHTML = '';
            
            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const viewport = page.getViewport({ scale: 1.2 });
                const canvas = document.createElement('canvas');
                canvas.style.margin = "10px auto";
                canvas.style.display = "block";
                canvas.style.boxShadow = "0 4px 8px rgba(0,0,0,0.4)";
                
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                await page.render({ canvasContext: context, viewport: viewport }).promise;
                container.appendChild(canvas);
            }
        } else {
            const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
            const blobUrl = URL.createObjectURL(blob);
            container.innerHTML = `<iframe src="${blobUrl}" style="width:100%; height:100%; border:none;"></iframe>`;
        }
    } catch (e) {
        console.error("PDF View Error:", e);
        const directDownloadUrl = getGithubReleaseUrl(tag, filename);
        container.innerHTML = `<div style="color:#f87171; margin-top:20px;">Unable to preview file.<br><br><a href="${directDownloadUrl}" target="_blank" style="color:#60a5fa; text-decoration:underline;">Click here to download file directly</a></div>`;
    }
}

function downloadReleaseAsset(tag, filename, displayName) {
    showToast("Starting download...");
    const downloadUrl = getGithubReleaseUrl(tag, filename);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', displayName || filename);
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// --- THEME & NAV CONTROLLERS ---
const sunSVG = `<path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>`;
const moonSVG = `<path fill="currentColor" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-5.4-5.4c0-1.81.89-3.42 2.26-4.4C12.92 3.04 12.46 3 12 3z"/>`;

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-icon-svg').forEach(icon => {
        icon.innerHTML = theme === 'dark' ? sunSVG : moonSVG;
    });
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
    refreshVisibleView();
}

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

function navigateTo(target) {
    document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active'));
    const targetEl = document.getElementById(`nav-${target}`);
    if (targetEl) targetEl.classList.add('active');

    document.querySelectorAll('.content-view').forEach(view => view.classList.add('hidden'));
    const dest = document.getElementById(`view-${target}`);
    if (dest) dest.classList.remove('hidden');

    if (window.innerWidth < 768) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.add('collapsed');
        const overlay = document.getElementById('sidebar-overlay');
        if (overlay) overlay.style.display = 'none';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (target === 'dashboard') renderDashboard();
    else if (target === 'syllabus') renderSyllabusPage();
    else if (target === 'notes') renderNotesPage();
    else if (target === 'slides') renderSlidesSubjectLanding();
}

function refreshVisibleView() {
    const activeView = document.querySelector('.content-view:not(.hidden)');
    if (!activeView) return;

    if (activeView.id === 'view-dashboard') {
        renderDashboard();
    } else if (activeView.id === 'view-syllabus') {
        renderSyllabusPage();
    } else if (activeView.id === 'view-notes') {
        renderNotesPage();
    } else if (activeView.id === 'view-slides') {
        renderSlidesSubjectLanding();
    }
}

// --- RENDERERS ---
function renderDashboard() {
    const trackerContainer = document.getElementById('dashboard-tracker-list');
    if (!trackerContainer) return;
    trackerContainer.innerHTML = '';
    let totalTopics = 0, completedTopics = 0;

    Object.keys(academicDatabase).forEach(subCode => {
        const subjectBox = document.createElement('div');
        subjectBox.style.marginBottom = '1.25rem';
        subjectBox.innerHTML = `<h3 style="font-size:0.95rem; border-bottom: 2px solid var(--border); padding-bottom: 0.3rem; margin-bottom: 0.5rem; color:var(--accent); font-weight:700;">${subCode}</h3>`;

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
                    <input type="checkbox" ${isChecked ? 'checked' : ''} style="width:18px; height:18px; pointer-events:none;">
                `;
                subjectBox.appendChild(row);
            });
        });
        trackerContainer.appendChild(subjectBox);
    });

    const percent = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    const statsPercent = document.getElementById('stats-syllabus-percent');
    if (statsPercent) statsPercent.innerText = `${percent}%`;
    
    const progressBar = document.getElementById('syllabus-progress-bar');
    if (progressBar) progressBar.style.width = `${percent}%`;

    const statsDecks = document.getElementById('stats-decks-total');
    if (statsDecks) statsDecks.innerText = `${completedTopics} / ${totalTopics}`;
}

function toggleTrackItem(key) {
    syllabusTracker[key] = !syllabusTracker[key];
    safeWriteStorage('syllabusTracker', syllabusTracker);
    refreshVisibleView();
}

const eyeIcon = `<svg class="icon-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"/></svg>`;
const downloadIcon = `<svg class="icon-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7l7-7zM5 18v2h14v-2H5z"/></svg>`;

function renderSyllabusPage() {
    const container = document.getElementById('syllabus-cards-container');
    if (!container) return;
    container.innerHTML = '';
    Object.keys(academicDatabase).forEach(code => {
        const tag = academicDatabase[code].tag;
        const fileName = `${code}_Syllabus.pdf`;
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.innerHTML = `
            <h3>${code}</h3>
            <p style="color: var(--text-muted); font-size:0.85rem; margin: 0.2rem 0 1rem;">${academicDatabase[code].name}</p>
            <div class="btn-container">
                <button type="button" class="btn-action" data-action="view">${eyeIcon} View</button>
                <button type="button" class="btn-action btn-secondary" data-action="download">${downloadIcon} Download</button>
            </div>
        `;
        card.querySelector('[data-action="view"]').onclick = () => openReleaseAsset(tag, fileName);
        card.querySelector('[data-action="download"]').onclick = () => downloadReleaseAsset(tag, fileName, fileName);
        container.appendChild(card);
    });
}

function renderNotesPage() {
    const container = document.getElementById('notes-cards-container');
    if (!container) return;
    container.innerHTML = '';
    Object.keys(academicDatabase).forEach(code => {
        const tag = academicDatabase[code].tag;
        const fileName = `${code}_Notes.pdf`;
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.style.borderLeftColor = "#059669";
        card.innerHTML = `
            <h3>${code}</h3>
            <p style="color: var(--text-muted); font-size:0.85rem; margin: 0.2rem 0 1rem;">${academicDatabase[code].name}</p>
            <div class="btn-container">
                <button type="button" class="btn-action" style="background:#059669" data-action="view">${eyeIcon} Read Notes</button>
                <button type="button" class="btn-action btn-secondary" data-action="download">${downloadIcon} PDF</button>
            </div>
        `;
        card.querySelector('[data-action="view"]').onclick = () => openReleaseAsset(tag, fileName);
        card.querySelector('[data-action="download"]').onclick = () => downloadReleaseAsset(tag, fileName, fileName);
        container.appendChild(card);
    });
}

function renderSlidesSubjectLanding() {
    const slidesTitle = document.getElementById('slides-title');
    if (slidesTitle) slidesTitle.innerText = "Revision Slide Decks";

    const slidesSubtitle = document.getElementById('slides-subtitle');
    if (slidesSubtitle) slidesSubtitle.innerText = "Select a subject folder below.";

    const container = document.getElementById('slides-container');
    if (!container) return;
    container.innerHTML = `<div class="grid-cards"></div>`;
    const grid = container.querySelector('.grid-cards');

    Object.keys(academicDatabase).forEach(code => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.style.cursor = 'pointer';
        card.style.borderLeftColor = "#9333ea";
        card.innerHTML = `
            <h3>${code}</h3>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.3rem;">${academicDatabase[code].name}</p>
            <div style="font-size:0.8rem; margin-top:0.8rem; color:#9333ea; font-weight:600; display:flex; align-items:center; gap:4px;">
                Open Folder 
                <svg class="icon-svg" style="width:16px; height:16px;" viewBox="0 0 24 24"><path fill="currentColor" d="M5 13h11.86l-5.43 5.43L13 19.84L20.84 12L13 4.16l-1.43 1.41L16.86 11H5v2z"/></svg>
            </div>
        `;
        card.onclick = () => renderSlideTopicsList(code);
        grid.appendChild(card);
    });
}

function renderSlideTopicsList(subCode) {
    const tag = academicDatabase[subCode].tag;
    const slidesTitle = document.getElementById('slides-title');
    if (slidesTitle) slidesTitle.innerText = `${subCode} Slides`;

    const container = document.getElementById('slides-container');
    if (!container) return;
    
    container.innerHTML = `
        <button class="btn-action btn-secondary" onclick="renderSlidesSubjectLanding()" style="margin-bottom: 1rem; width:auto; padding:0.5rem 1rem;">
            <svg class="icon-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"/></svg>
            Back to Folders
        </button>
    `;

    academicDatabase[subCode].units.forEach(unit => {
        const box = document.createElement('div');
        box.className = 'card';
        box.innerHTML = `<h3 style="margin-bottom:0.75rem; border-bottom:1px solid var(--border); padding-bottom:0.4rem; font-size:1rem;">${unit.title}</h3>`;

        unit.topics.forEach(topic => {
            const fileName = `${topic.code}.pdf`;
            const row = document.createElement('div');
            row.className = 'tracker-item';
            row.style.padding = '0.6rem 0';
            row.innerHTML = `
                <span style="font-size:0.85rem;"><strong>File: ${topic.code}.pdf</strong><br><span style="color:var(--text-muted);">${topic.name}</span></span>
                <div class="btn-container" style="flex:none; width:auto; margin-top:0;">
                    <button type="button" class="btn-action" style="padding:0.4rem 0.6rem; font-size:0.75rem; background:#9333ea" data-action="view">${eyeIcon} View</button>
                    <button type="button" class="btn-action btn-secondary" style="padding:0.4rem 0.6rem; font-size:0.75rem;" data-action="download">${downloadIcon} Download</button>
                </div>
            `;
            row.querySelector('[data-action="view"]').onclick = () => openReleaseAsset(tag, fileName);
            row.querySelector('[data-action="download"]').onclick = () => downloadReleaseAsset(tag, fileName, fileName);
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