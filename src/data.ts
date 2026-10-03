// Content for repeated portfolio cards lives here so it can be edited without touching layout.
export const projects = [
  {
    number: "01",
    type: "FASTAPI · QDRANT · GEMINI",
    name: "VendorGuard",
    description:
      "A RAG-based compliance analysis system that turns vendor documents into traceable controls, risk scores, and remediation actions.",
    tags: ["RAG", "FastAPI", "Qdrant", "Gemini"],
    variant: "analytics",
    githubUrl: "https://github.com/kartikeyaswarup-m1/VendorGuard",
  },
  {
    number: "02",
    type: "FASTAPI · REACT · FAISS",
    name: "RagTube",
    description:
      "A full-stack YouTube Q&A system with timestamp-aware retrieval, grounded streaming answers, and deployment-ready infrastructure.",
    tags: ["Python", "React", "FAISS", "Groq"],
    variant: "commerce",
    githubUrl: "https://github.com/kartikeyaswarup-m1/RagTube",
  },
  {
    number: "03",
    type: "PYTHON · OPENCV · FIREBASE",
    name: "Face Recognition Attendance",
    description:
      "A real-time attendance system that matches webcam faces, prevents duplicate check-ins, and persists student records and attendance history.",
    tags: ["OpenCV", "Firebase", "Python", "face_recognition"],
    variant: "collab",
    githubUrl: "https://github.com/kartikeyaswarup-m1/OpenCV_FaceAttendance_py",
  },
];

export const stack: [string, string[]][] = [
  ["AI / ML", ["LLMs", "RAG", "Embeddings", "Semantic Search", "OpenCV"]],
  ["Backend", ["Python", "FastAPI", "Qdrant", "FAISS", "MySQL"]],
  ["Frontend / Tools", ["React", "Next.js", "JavaScript", "Docker", "Git"]],
];
