<div align="center">

# 📚 RuralEd

### Bridging the education gap for rural communities through accessible, offline-friendly technology

<img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
<img src="https://img.shields.io/badge/Built%20in-2025-2c5364?style=for-the-badge" />
<img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" />

</div>

---

## 📖 Overview

**RuralEd** is a web platform built to bring quality education to students in rural and low-connectivity areas. Many rural schools struggle with unreliable internet, so RuralEd is designed around **offline-friendly video lessons, quizzes, and progress tracking**, delivered through lightweight, low-bandwidth REST APIs so it stays usable even on limited school infrastructure.

The entire application is containerized with **Docker**, making it easy to deploy on low-resource computers commonly found in rural school labs, without complicated setup.

---

## ✨ Features

- 🎥 **Offline-Friendly Video Lessons** — Lessons are optimized for low-bandwidth environments, reducing dependency on constant high-speed internet.
- 📝 **Interactive Quizzes** — Students can test their understanding right after lessons to reinforce learning.
- 📊 **Progress Tracking** — Tracks each student's learning journey so teachers and students can see growth over time.
- ⚡ **Low-Bandwidth REST APIs** — Backend APIs designed specifically for areas with poor or unstable internet connectivity.
- 🐳 **Dockerized Deployment** — Runs in containers, making it simple to deploy on low-resource school computers.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React.js |
| **Backend** | Node.js, Express.js |
| **Database** | MySQL |
| **API Testing** | Postman |
| **Deployment** | Docker |
| **Version Control** | Git & GitHub |

---

## 🏗️ Architecture

```text
┌─────────────────┐        ┌──────────────────┐        ┌─────────────────┐
│   React.js       │  API   │  Node.js /        │  SQL   │     MySQL        │
│   Frontend        │◄─────►│  Express.js Backend│◄─────►│    Database      │
│  (Lessons/Quizzes)│        │  (REST APIs)      │        │ (Users/Progress) │
└─────────────────┘        └──────────────────┘        └─────────────────┘
                                     │
                                     ▼
                            ┌──────────────────┐
                            │  Dockerized       │
                            │  Deployment       │
                            │  (School Labs)    │
                            └──────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MySQL installed and running
- Docker (optional, for containerized deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/devprakashsingh26/RuralEd.git
cd RuralEd

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Running Locally

```bash
# Start backend server
cd backend
npm start

# Start frontend (in a new terminal)
cd frontend
npm start
```

### Running with Docker

```bash
docker-compose up --build
```

---

## 📸 Screenshots

<div align="center">

*Add screenshots of your lesson viewer, quiz page, and progress dashboard here*

</div>

---

## 🗺️ Roadmap

- [ ] Add multi-language support for regional languages
- [ ] Offline-first sync when connectivity is restored
- [ ] Teacher dashboard for classroom management
- [ ] Mobile app version

---

## 🤝 Contributing

Contributions are welcome. If you'd like to improve RuralEd:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

**Dev Prakash Singh**

<a href="https://www.linkedin.com/in/dev-prakash-singh-63293a337"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="mailto:devsinghrajpootd007@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
<a href="https://github.com/devprakashsingh26"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" /></a>

---

<div align="center">

⭐ If you find this project meaningful, consider giving it a star!

</div>
