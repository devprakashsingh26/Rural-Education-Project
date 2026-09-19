import React from "react";

const Features = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Our Key Features</h1>

      <h2 className="mt-4 font-bold">📚 E-Learning Modules</h2>
      <p>
        Students can access video lessons, PDFs, and quizzes in multiple languages.
        Our offline-first design ensures that content remains available even when
        internet connectivity is unstable.
      </p>

      <h2 className="mt-4 font-bold">👩‍🏫 Teacher–Student Connectivity</h2>
      <p>
        Teachers can host live classes with low-bandwidth video and audio,
        while students can ask questions, submit assignments, and receive feedback.
        This fosters an interactive and engaging learning experience.
      </p>

      <h2 className="mt-4 font-bold">📢 School & Community Hub</h2>
      <p>
        Parents and students can stay informed with digital notice boards,
        school schedules, and important community announcements.
        Everything is accessible in one place.
      </p>

      <h2 className="mt-4 font-bold">📊 Analytics & Monitoring</h2>
      <p>
        Attendance, performance, and activity tracking are built into the system.
        Teachers and administrators can monitor student progress and improve learning outcomes.
      </p>
    </div>
  );
};

export default Features;
