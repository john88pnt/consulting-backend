const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Servim fișierele statice (imaginile din /public/images)
app.use("/images", express.static(path.join(__dirname, "public", "images")));

// === Proiectele ===
const projects = [
    {
        id: 1,
        title: "Debitare scaune fibră de sticlă cu robot ABB",
        description: "Celulă robotizată pentru debitarea scaunelor din fibră de sticlă.",
        longDescription:
            "Integrare robot ABB pentru debitare precisă de scaune din fibră de sticlă. Proces optimizat pentru viteză și precizie ridicată.",
        image: "/images/proiect1.jpg",
    },
    {
        id: 2,
        title: "Vopsire cu gelcoat a matrițelor",
        description: "Robot ABB pentru aplicarea uniformă de gelcoat.",
        longDescription:
            "Celulă ABB pentru aplicare controlată de gelcoat pe matrițe din fibră de sticlă. Calitate superioară și pierderi reduse de material.",
        image: "/images/proiect2.jpg",
    },
    {
        id: 3,
        title: "Frezare modele mari cu ABB",
        description: "Robot ABB pentru frezarea matrițelor de până la 5m.",
        longDescription:
            "Frezare de mare precizie pentru matrițe de rezervoare agricole, cu robot ABB și traiectorii generate automat.",
        image: "/images/proiect3.jpg",
    },
    {
        id: 4,
        title: "Paletizare flexibilă cu KUKA",
        description: "Celulă de paletizare cu înălțime variabilă.",
        longDescription:
            "Soluție KUKA configurabilă pentru paletizare automată, adaptabilă la tipul produsului și înălțimea paletului.",
        image: "/images/proiect4.jpg",
    },
    {
        id: 5,
        title: "Paletizare și depaletizare baterii",
        description: "Sistem KUKA cu senzori de scanare pentru baterii.",
        longDescription:
            "Proiect cu recunoaștere automată a bateriilor prin senzori și algoritmi de clasificare, folosind roboți KUKA.",
        image: "/images/proiect5.jpg",
    },
    {
        id: 6,
        title: "Automatizare grupare pachete de plăci",
        description: "Sistem Mitsubishi PLC și servo pentru grupare.",
        longDescription:
            "Automatizare sincronizată cu Mitsubishi PLC și servo, pentru manipularea precisă a pachetelor de plăci industriale.",
        image: "/images/proiect6.jpg",
    },
    {
        id: 7,
        title: "Celule robotizate KUKA KRC1",
        description: "Integrare roboți KUKA KRC4/KRC5 cu programe vechi.",
        longDescription:
            "Adaptare programe KRC1 pentru control modern KRC4/5, optimizând procese în fabrici existente.",
        image: "/images/proiect7.jpg",
    },
    {
        id: 8,
        title: "Sistem vision pentru măsurare bandă",
        description: "Keyence vision + Siemens PLC pentru măsurare lățime bandă.",
        longDescription:
            "Monitorizare automată a benzii expandate cu Keyence Vision și control Siemens PLC.",
        image: "/images/proiect8.jpg",
    },
    {
        id: 9,
        title: "Sortare cu robot ABB și deep learning",
        description: "Sortare plastic și metal cu deep learning.",
        longDescription:
            "Proiect inovativ ABB + YOLOv8 pentru recunoașterea și sortarea obiectelor din plastic și metal în timp real.",
        image: "/images/proiect9.jpg",
    },
];

// Endpoint principal pentru proiecte
app.get("/api/projects", (req, res) => {
    res.json(projects);
});

// Endpoint de test simplu
app.get("/", (req, res) => {
    res.send("✅ Backend Consult Robotics funcționează corect!");
});

// Pornire server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
