# 🍊 TrojanExp Ltd — African Fruit Import Company

A bilingual corporate website built for a fruit import company sourcing products from Africa. Clean, professional, and fully functional with a working contact system.

**[→ Live Site](https://trojanexpltd.netlify.app/)**

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d85134ce-b62f-4d31-9bc5-58aaf68425ca" />


---

## Overview

TrojanExp Ltd needed a professional web presence to represent their import business and make it easy for potential partners and buyers to get in touch. The site supports both Arabic and English audiences with a seamless language toggle and a contact form that delivers messages directly to the client's Gmail inbox.

---

## Features

- 🌍 **Bilingual support** — full Arabic and English versions with instant language switching
- 📬 **Working contact form** — messages delivered directly to client's email via EmailJS, no backend required
- 🏢 **Company profile** — services, product catalog, and about sections
- ⚡ **Fast & responsive** — optimized across all screen sizes and devices

---

## Tech Stack

| | |
|---|---|
| Framework | React.js |
| Styling | CSS / SASS |
| Email | EmailJS |
| i18n | React i18next |
| Hosting | Netlify |

---

## How the contact form works

Instead of building a backend just to send emails, the form uses **EmailJS** — which connects directly to the client's Gmail account and delivers form submissions as formatted emails. Zero server costs, zero maintenance.

---

## Running locally
```bash
git clone https://github.com/YousefMohamed117/TrojanExpLtd.git
cd TrojanExpLtd
npm install
# Add your EmailJS credentials to .env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
npm start
```

---

## Screenshots

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/557c8179-7f8b-43ac-9e5d-cf547f947d9b" />
