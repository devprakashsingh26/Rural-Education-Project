const API_BASE = "http://localhost:3000"; 
 // adjust if different backend port

export async function postLesson(data) {
  try {
    const res = await fetch(`${API_BASE}/api/lessons`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const text = await res.text();
    return text ? JSON.parse(text) : null;
  } catch (err) {
    console.error("Failed to post lesson", err);
    return null;
  }
}

// Fetch all lessons
export async function fetchLessons() {
  try {
    const res = await fetch(`${API_BASE}/lessons`);
    return await res.json();
  } catch (err) {
    console.error("Error fetching lessons:", err);
    return [];
  }
}

export async function fetchAnnouncements() {
  try {
    const res = await fetch(`${API_BASE}/api/announcements`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const text = await res.text();
    return text ? JSON.parse(text) : [];
  } catch (err) {
    console.error("Failed to fetch announcements", err);
    return [];
  }
}

// Submit quiz
export async function submitQuiz(data) {
  try {
    const res = await fetch(`${API_BASE}/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.error("Error submitting quiz:", err);
    return { success: false };
  }
}
