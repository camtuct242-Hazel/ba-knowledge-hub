# Hazel BA Hub — Bilingual Business Analysis Knowledge Hub

**Author**: Nguyễn Đăng Cẩm Tú (Hazel)  
**Role**: Business Analyst  
**Architecture**: Pure Static Multi-Page Web Architecture (HTML5 / Modern Modular CSS / Vanilla ES6 JavaScript)  
**Standards Alignment**: BABOK® v3, OMG BPMN™ 2.0, OMG UML® 2.5, Agile Scrum, ANSI SQL, IETF RFC HTTP, ISTQB®  

---

## 🌟 Overview

**Hazel BA Hub** is an independent, bilingual (Vietnamese / English) technical knowledge repository, practice guide, and interview preparation platform for IT Business Analysts. It systematically covers:
- **8 Core Knowledge Domains**: From BA Fundamentals & SDLC to Stakeholder Engagement, Root Cause Analysis, Requirements Engineering, Specifications, BPMN/UML Modeling, Relational SQL, and REST APIs & QA.
- **48 Active-Recall Flashcards**: Categorized by 8 domains and 5 question archetypes with 3D card flips.
- **Requirements Templates Handbook**: Production-ready templates for User Story/Gherkin, BRD, SFS, Test Case, and Change Request.
- **Independent Downloads Hub**: Direct downloads of RFC 4180 CSV decks and Markdown documentation.
- **Open Standards Alignment**: Explicitly mapped to international engineering standards.

---

## 🚀 Local Preview

Because this project is built on pure static web standards, it requires zero package installations and zero build steps:

```bash
# Using Python's built-in HTTP server:
python -m http.server 3000

# Then open in your browser:
http://localhost:3000
```

---

## 📦 Project Structure

```
ba-study-materials/
├── index.html                           # Home Page: 8 Domains & Platform Highlights
├── knowledge-map/index.html             # 8-Domain Knowledge Map & Competency Matrix
├── flashcards/index.html                # Interactive 3D Flashcard Engine (48 Cards)
├── study-guide/index.html               # Practical Handbook & 7-Part Module Guide
├── downloads/index.html                 # Open Format Downloads Hub (CSV, MD)
├── about/index.html                     # Author Profile & Open Standards Governance
├── vercel.json                          # Clean URLs & Security Headers for Vercel
├── README.md                            # Project Overview & Architecture Guide
├── .gitignore                           # Standard Web, OS & IDE Ignore Rules
└── assets/
    ├── css/
    │   ├── main.css                     # Base palette, typography, layout, i18n
    │   ├── components.css               # Cards, badges, buttons, callouts
    │   └── flashcards.css               # 3D Flip card styling and study controls
    ├── js/
    │   ├── i18n.js                      # Bilingual toggle & persistent localStorage
    │   ├── flashcards-data.js           # 48 bilingual flashcards dataset
    │   ├── flashcards.js                # Interactive study engine & filters
    │   └── app.js                       # Mobile menu & interactive accordions
    └── docs/
        ├── ITBA_Requirements_Templates_Guide.md # Independent Requirements Templates
        └── ITBA_Flashcards_Deck.csv             # RFC 4180 CSV Flashcard Deck
```

---

## ⚖️ Academic Integrity & Independence

Hazel BA Hub is an independent personal portfolio and learning hub authored by Nguyễn Đăng Cẩm Tú (Hazel). It is compiled from open international standards (BABOK v3, UML 2.5, BPMN 2.0, Agile Alliance, ANSI SQL, IETF HTTP, ISTQB) and personal technical analysis. It does not publish, reproduce, or represent any proprietary course curriculum or commercial training program.
