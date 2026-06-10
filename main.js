// ─── Language toggle ───────────────────────────────────────────────────────
let currentLang = 'fr';

function toggleLang() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    applyLang();
}

function applyLang() {
    document.getElementById('langLabel').textContent = currentLang === 'fr' ? 'EN' : 'FR';
    document.querySelectorAll('[data-fr][data-en]').forEach(el => {
        const text = el.getAttribute('data-' + currentLang);
        if (text) el.textContent = text;
    });
    showCV(currentLang);
}

// ─── CV tabs ───────────────────────────────────────────────────────────────
function showCV(lang) {
    document.getElementById('cv-fr').style.display = lang === 'fr' ? 'block' : 'none';
    document.getElementById('cv-en').style.display = lang === 'en' ? 'block' : 'none';
    document.getElementById('tab-fr').classList.toggle('active', lang === 'fr');
    document.getElementById('tab-en').classList.toggle('active', lang === 'en');
}

// ─── Projects data ─────────────────────────────────────────────────────────
const PROJECTS = [
    {
        github: 'https://github.com/GamaSpeed/E-Emotion-Detection',
        image:  './images/edusense.jpg',
        alt:    'EduSense',
        title:  { fr: 'EduSense', en: 'EduSense' },
        role:   null,
        desc: {
            fr: "Système temps réel de détection d'états affectifs (ennui, engagement, confusion, frustration) via webcam. Architecture EfficientNet-B2 + GRU Bidirectionnel déployée en multi-VM avec tableau de bord enseignant live.",
            en: "Real-time system for detecting affective states (boredom, engagement, confusion, frustration) via webcam. EfficientNet-B2 + Bidirectional GRU architecture deployed on multi-VM with live teacher dashboard."
        },
        tags: [
            { icon: 'devicon-pytorch-plain colored',  label: 'PyTorch' },
            { icon: 'devicon-fastapi-plain colored',  label: 'FastAPI' },
            { icon: 'devicon-react-original colored', label: 'React' },
            { icon: null,                             label: 'WebSocket' },
            { icon: 'devicon-docker-plain colored',   label: 'Docker' },
            { icon: null,                             label: 'SQLAlchemy' }
        ]
    },
    {
        github: 'https://github.com/GamaSpeed/Parking-lot-classification',
        image:  './images/projet1.png',
        alt:    'Projet 1',
        title:  { fr: "Classification d'Images", en: 'Image Classification' },
        role:   null,
        desc: {
            fr: "Développement d'un modèle de deep learning pour classifier des places de parking avec une précision de 86%. Utilisation de CNN et transfer learning avec GoogleNet.",
            en: "Deep learning model to classify parking spaces with 86% accuracy. CNN and transfer learning with GoogleNet."
        },
        tags: [
            { icon: 'devicon-python-plain colored',  label: 'Python' },
            { icon: 'devicon-pytorch-plain colored', label: 'PyTorch' },
            { icon: 'devicon-opencv-plain colored',  label: 'OpenCV' }
        ]
    },
    {
        github: 'https://github.com/GamaSpeed/Analyse-des-sentiments',
        image:  './images/projet2.png',
        alt:    'Projet 2',
        title:  { fr: 'Analyse de Sentiments', en: 'Sentiment Analysis' },
        role:   null,
        desc: {
            fr: "Application web d'analyse de sentiments en temps réel sur des tweets. Intégration d'un modèle BERT fine-tuné et déploiement avec Flask.",
            en: "Real-time web application for sentiment analysis on tweets. Fine-tuned BERT model integration with Flask deployment."
        },
        tags: [
            { icon: 'devicon-python-plain colored', label: 'Python' },
            { icon: null,                           label: 'NLTK' },
            { icon: null,                           label: 'TextBlob' },
            { icon: null,                           label: 'spaCy' }
        ]
    },
    {
        github: 'https://github.com/GamaSpeed/RAG-with-Ollama',
        image:  './images/projet4.png',
        alt:    'Projet RAG',
        title:  { fr: 'Système RAG', en: 'Système RAG' },
        role:   null,
        desc: {
            fr: "Développement d'un système de Retrieval-Augmented Generation pour la recherche documentaire intelligente avec base de connaissances.",
            en: "Development of a Retrieval-Augmented Generation system for intelligent document search with a knowledge base."
        },
        tags: [
            { icon: 'devicon-python-plain colored',  label: 'Python' },
            { icon: null,                            label: 'Ollama' },
            { icon: null,                            label: 'ChromaDB' },
            { icon: 'devicon-fastapi-plain colored', label: 'FastAPI' }
        ]
    },
    {
        github: 'https://github.com/Martinien07/projet_app_web',
        image:  './images/projet5.png',
        alt:    'Projet 5',
        title:  { fr: 'Application Santé & Sécurité Chantiers', en: 'Construction Health & Safety App' },
        role:   null,
        desc: {
            fr: "Application web pour la gestion santé et sécurité sur les chantiers. Suivi des incidents, inspections, notifications et affectations selon les rôles utilisateurs.",
            en: "Web application for managing health and safety on construction sites. Incident tracking, inspections, notifications and role-based user assignment."
        },
        tags: [
            { icon: 'devicon-javascript-plain colored', label: 'JavaScript' },
            { icon: 'devicon-html5-plain colored',      label: 'HTML5' },
            { icon: 'devicon-css3-plain colored',       label: 'CSS3' },
            { icon: 'devicon-bootstrap-plain colored',  label: 'Bootstrap' }
        ]
    },
    {
        github: 'https://github.com/GamaSpeed/ProjectIA_mlflow_dagshub_2025',
        image:  './images/projet6.png',
        alt:    'Projet 6',
        title:  { fr: 'Prédiction Prix Immobilier', en: 'Real Estate Price Prediction' },
        role:   null,
        desc: {
            fr: "Estimation immobilière grâce à l'IA. Valeur marchande précise pour maison, appartement, terrain ou investissement locatif, avec tracking MLflow sur DagsHub.",
            en: "AI-powered real estate valuation. Accurate market value for houses, apartments, land or rental investment, with MLflow tracking on DagsHub."
        },
        tags: [
            { icon: 'devicon-python-plain colored',      label: 'Python' },
            { icon: 'devicon-scikitlearn-plain colored', label: 'Scikit-learn' },
            { icon: 'devicon-flask-original',            label: 'Flask' },
            { icon: null,                                label: 'MLflow' }
        ]
    },
    {
        github: 'https://github.com/YvanJaures/ProfMatchAI',
        image:  './images/rec-ai.png',
        alt:    'ProfMatchAI',
        title:  { fr: 'ProfMatchAI', en: 'ProfMatchAI' },
        role:   { fr: 'Développeur — Module IA', en: 'Developer — AI Module' },
        desc: {
            fr: "Plateforme intelligente d'affectation des professeurs aux cours. Algorithme de scoring de compatibilité, extraction automatique de CV par IA, matching sémantique avec ChromaDB, clustering KMeans des profils, et justifications en langage naturel pour les RH.",
            en: "Intelligent professor-to-course assignment platform. Compatibility scoring algorithm, automatic CV extraction by AI, semantic matching with ChromaDB, KMeans profile clustering, and natural language justifications for HR decisions."
        },
        tags: [
            { icon: 'devicon-python-plain colored',      label: 'Python' },
            { icon: 'devicon-fastapi-plain colored',     label: 'FastAPI' },
            { icon: null,                                label: 'ChromaDB' },
            { icon: 'devicon-scikitlearn-plain colored', label: 'Scikit-learn' },
            { icon: null,                                label: 'Ollama' },
            { icon: 'devicon-nodejs-plain colored',      label: 'Node.js' },
            { icon: 'devicon-nextjs-plain',              label: 'Next.js' },
            { icon: 'devicon-react-original colored',    label: 'React' },
            { icon: 'devicon-typescript-plain colored',  label: 'TypeScript' },
            { icon: null,                                label: 'Prisma' }
        ]
    },
    {
        github: 'https://github.com/GamaSpeed/vendorwatch',
        image:  './images/vendorwatch.jpg',
        alt:    'VendorWatch',
        title:  { fr: 'VendorWatch', en: 'VendorWatch' },
        role:   { fr: 'Hackathon Agency 2026 · Défi 5', en: 'Agency 2026 Hackathon · Challenge 5' },
        desc: {
            fr: "Agent autonome multi-modèles (AWS Bedrock + Strands SDK) surveillant les dépenses publiques canadiennes. Détecte la concentration de fournisseurs, le verrouillage technologique et la concurrence fictive. Génère des notes de politique bilingues avec export PDF.",
            en: "Multi-model autonomous agent (AWS Bedrock + Strands SDK) monitoring Canadian public procurement. Detects vendor concentration, technology lock-in, and fictitious competition. Generates bilingual policy briefs with PDF export."
        },
        tags: [
            { icon: 'devicon-python-plain colored',            label: 'Python' },
            { icon: 'devicon-fastapi-plain colored',           label: 'FastAPI' },
            { icon: null,                                      label: 'Strands SDK' },
            { icon: 'devicon-amazonwebservices-plain colored', label: 'AWS Bedrock' },
            { icon: null,                                      label: 'Streamlit' },
            { icon: 'devicon-postgresql-plain colored',        label: 'PostgreSQL' },
            { icon: 'devicon-pandas-original colored',         label: 'Pandas' },
            { icon: null,                                      label: 'ChromaDB' }
        ]
    },
    {
        github: 'https://github.com/kevin-tchinda/competition-innovacite',
        image:  './images/innovacode.webp',
        alt:    'InnovaCode 2026',
        title:  { fr: 'Sécurité Routière Ottawa', en: 'Ottawa Road Safety' },
        role:   { fr: 'InnovaCode 2026', en: 'InnovaCode 2026' },
        desc: {
            fr: "Analyse de 94 406 collisions (Ottawa, 2017–2024) par clustering spatial DBSCAN. Identification de 1 404 zones à risque, caractérisation des clusters et carte interactive Google Maps avec heatmap et points cliquables détaillés.",
            en: "Analysis of 94,406 road collisions (Ottawa, 2017–2024) using DBSCAN spatial clustering. Identification of 1,404 risk zones, cluster characterization, and interactive Google Maps with heatmap and detailed clickable points."
        },
        tags: [
            { icon: 'devicon-python-plain colored',      label: 'Python' },
            { icon: 'devicon-pandas-original colored',   label: 'Pandas' },
            { icon: 'devicon-scikitlearn-plain colored', label: 'DBSCAN' },
            { icon: 'devicon-jupyter-plain colored',     label: 'Jupyter' },
            { icon: null,                                label: 'Google Maps API' }
        ]
    },
    {
        github: 'https://github.com/GamaSpeed/fraud-predict-api',
        image:  './images/fraudpredict.jpg',
        alt:    'Fraud Predict API',
        title:  { fr: 'Fraud Predict API', en: 'Fraud Predict API' },
        role:   null,
        desc: {
            fr: "Détection de fraude sur les transactions Ethereum. Modèle de régression logistique (96% de précision, 88% de rappel fraude) entraîné sur 19 682 transactions, avec interface web pour analyser les 18 métriques comportementales d'un portefeuille blockchain.",
            en: "Fraud detection on Ethereum transactions. Logistic regression model (96% accuracy, 88% fraud recall) trained on 19,682 transactions, with a web interface to analyze 18 behavioral metrics of a blockchain wallet."
        },
        tags: [
            { icon: 'devicon-python-plain colored',      label: 'Python' },
            { icon: 'devicon-flask-original',            label: 'Flask' },
            { icon: 'devicon-scikitlearn-plain colored', label: 'Scikit-learn' },
            { icon: 'devicon-pandas-original colored',   label: 'Pandas' },
            { icon: 'devicon-numpy-original colored',    label: 'NumPy' },
            { icon: 'devicon-bootstrap-plain colored',   label: 'Bootstrap' },
            { icon: 'devicon-jupyter-plain colored',     label: 'Jupyter' }
        ]
    }
];

// ─── Render ────────────────────────────────────────────────────────────────
function renderProjects() {
    const delays = ['delay-3', 'delay-1', 'delay-2'];
    document.getElementById('projects-grid').innerHTML = PROJECTS.map((p, i) => {
        const delay = delays[i % 3];
        const roleHtml = p.role
            ? `<span class="project-role" data-fr="${p.role.fr}" data-en="${p.role.en}">${p.role.fr}</span>`
            : '';
        const tagsHtml = p.tags.map(t =>
            t.icon
                ? `<span class="tech-tag"><i class="${t.icon}"></i> ${t.label}</span>`
                : `<span class="tech-tag">${t.label}</span>`
        ).join('');
        return `
        <div class="col-md-6 col-lg-4 fade-in ${delay}">
            <a href="${p.github}" target="_blank" class="project-card">
                <div class="project-image-container">
                    <i class="fab fa-github github-icon"></i>
                    <img src="${p.image}" alt="${p.alt}" class="project-image">
                    <div class="project-overlay"></div>
                </div>
                <div class="project-body">
                    <h3 class="project-title" data-fr="${p.title.fr}" data-en="${p.title.en}">${p.title.fr}</h3>
                    ${roleHtml}
                    <p class="project-description" data-fr="${p.desc.fr}" data-en="${p.desc.en}">${p.desc.fr}</p>
                    <div class="project-tech">${tagsHtml}</div>
                </div>
            </a>
        </div>`;
    }).join('');
}

// ─── Init ──────────────────────────────────────────────────────────────────
renderProjects();

// ─── Scroll animations (after render) ─────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
