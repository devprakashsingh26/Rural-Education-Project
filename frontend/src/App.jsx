// src/App.jsx
import React, { useState, useEffect } from "react";
import { fetchLessons, submitQuiz } from "./api";

function App() {
  const [lessons, setLessons] = useState([]);
  const [name, setName] = useState("");
  const [lessonId, setLessonId] = useState("");
  const [answer, setAnswer] = useState("");
  const [queue, setQueue] = useState(
    JSON.parse(localStorage.getItem("quizQueue") || "[]")
  );

  // Load lessons on start
  useEffect(() => {
    fetchLessons().then(setLessons);

    // Try syncing queue if online
    window.addEventListener("online", syncQueue);
    return () => window.removeEventListener("online", syncQueue);
  }, []);

  // Save queue to localStorage
  useEffect(() => {
    localStorage.setItem("quizQueue", JSON.stringify(queue));
  }, [queue]);

  // Handle quiz submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const submission = { name, lessonId, answer };

    if (!navigator.onLine) {
      alert("Offline: submission queued");
      setQueue([...queue, submission]);
      return;
    }

    const res = await submitQuiz(submission);
    if (res.success) {
      alert("Submission sent successfully");
    } else {
      alert("Failed, queued instead");
      setQueue([...queue, submission]);
    }
  };

  // Sync queued submissions
  async function syncQueue() {
    if (queue.length === 0) return;
    const remaining = [];
    for (let item of queue) {
      const res = await submitQuiz(item);
      if (!res.success) remaining.push(item);
    }
    if (remaining.length < queue.length) {
      alert("Some queued submissions synced");
    }
    setQueue(remaining);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>EduEdge: Rural Learning Platform</h1>

      <h2>Lessons</h2>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <strong>{lesson.title}</strong> —{" "}
            <a href={lesson.file} target="_blank" rel="noreferrer">
              Open
            </a>
          </li>
        ))}
      </ul>

      <h2>Quiz Submission</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Lesson ID"
          value={lessonId}
          onChange={(e) => setLessonId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {queue.length > 0 && (
        <p style={{ color: "red" }}>
          ⚠️ {queue.length} submissions waiting for internet
        </p>
      )}
    </div>
  );
}

export default App;

