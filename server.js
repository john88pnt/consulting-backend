const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Serve static images
app.use("/images", express.static(path.join(__dirname, "images")));

// Projects array
const projects = [
    {
        title: "Debitare scaune fibră de sticlă cu robot ABB",
        description: "Celulă robotizată pentru debitarea scaunelor din fibră de sticlă.",
        longDescription: "Acest proiect a presupus integrarea unui robot ABB într-o celulă robotizată de debitare a scaunelor din fibră de sticlă. Procesul a fost optimizat pentru precizie ridicată și viteză, reducând erorile de tăiere și îmbunătățind siguranța operatorilor.",
        image: "/images/proiect1.jpg",
    },
    {
        title: "Vopsire cu gelcoat a matrițelor",
        description: "Robot ABB pentru aplicarea de gelcoat pe matrițe.",
        longDescription: "Am implementat o celulă robotizată cu robot ABB pentru aplicarea uniformă a gelcoat-ului pe matrițele din fibră de sticlă. Sistemul a permis reducerea pierderilor de material, calitate superioară a finisajului și repetabilitate ridicată.",
        image: "/images/proiect2.jpg",
    },
    {
        title: "Frezare modele mari cu ABB",
        description: "Robot ABB pentru frezarea matrițelor de până la 5m.",
        longDescription: "Proiect complex de frezare a matrițelor mari (până la 5 metri) pentru rezervoare de utilaje agricole. Am configurat robotul ABB să execute operații de frezare de mare precizie pe piese de dimensiuni industriale, eliminând necesitatea unor centre de prelucrare foarte costisitoare.",
        image: "/images/proiect3.jpg",
    },
    {
        title: "Paletizare flexibilă cu KUKA",
        description: "Celulă de paletizare cu înălțime variabilă a paletului.",
        longDescription: "Am realizat o celulă robotizată cu roboți KUKA pentru paletizare flexibilă, unde înălțimea paletului putea fi variată în funcție de tipul produsului. Soluția a dus la creșterea eficienței și adaptabilitate la mai multe tipuri de ambalaje.",
        image: "/images/proiect4.jpg",
    },
    {
        title: "Paletizare și depaletizare baterii",
        description: "Sistem KUKA cu senzori de scanare pentru baterii.",
        longDescription: "Un proiect avansat cu roboți KUKA, unde am implementat paletizare pe categorii și depaletizare rapidă de baterii. Sistemul folosea senzori de scanare simultană a mai multor laturi, pentru recunoaștere automată și sortare pe categorii.",
        image: "/images/proiect5.jpg",
    },
    {
        title: "Automatizare grupare pachete de placi",
        description: "Sistem Mitsubishi PLC și servo pentru grupare pachete de placi.",
        longDescription: "Automatizare completă pentru gruparea pachetelor de plăci, folosind PLC și servodrivere Mitsubishi. Soluția a permis sincronizare precisă, reducerea timpilor de ciclu și creșterea productivității liniei.",
        image: "/images/proiect6.jpg",
    },
    {
        title: "Celule robotizate KUKA KRC1",
        description: "Integrarea roboților KUKA KRC4 și KRC5 folosind vechile programe KRC1.",
        longDescription: "Am implementat celule robotizate folosind roboți KUKA KRC4 și KRC5 adaptând vechile programe de KRC1, optimizând procese de producție în fabrici existente.",
        image: "/images/proiect7.jpg",
    },
    {
        title: "Sistem vision pentru măsurare bandă",
        description: "Keyence vision + Siemens PLC pentru măsurare lățime bandă.",
        longDescription: "Un sistem de măsurare continuă a lățimii benzii expandate, realizat cu sistem vision Keyence și control cu PLC Siemens. Soluția a permis monitorizare în timp real și ajustare automată a procesului.",
        image: "/images/proiect8.jpg",
    },
    {
        title: "Sortare cu robot ABB și deep learning",
        description: "Sortare plastic și metal cu deep learning.",
        longDescription: "Proiect inovativ de sortare folosind un robot ABB integrat cu un model de deep learning antrenat pentru recunoașterea plasticului și metalului. Sistemul permite sortarea automată pe baza imaginilor video, crescând viteza și acuratețea procesului.",
        image: "/images/proiect9.jpg",
    },
];

// Endpoint
app.get("/projects", (req, res) => {
    res.json(projects);
});

// Health check optional
app.get("/", (req, res) => {
    res.send("Consult Robotics Backend OK ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
