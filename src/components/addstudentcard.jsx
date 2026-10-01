import { useState } from "react";

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [score, setScore] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const numericScore = Number(score);
    if (!name.trim() || !major.trim() || score.trim() === "" ||
        !Number.isFinite(numericScore) || numericScore < 0 || numericScore > 100) return;

    onAdd({
      id: crypto.randomUUID(),
      name: name.trim(),
      major: major.trim(),
      score: numericScore,
    });
    setName("");
    setMajor("");
    setScore("");
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Add student</h2>
      <label>
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Major
        <input value={major} onChange={(e) => setMajor(e.target.value)} required />
      </label>
      <label>
        Score
        <input type="number" min="0" max="100" step="any" value={score}
          onChange={(e) => setScore(e.target.value)} required />
      </label>
      <button type="submit">Add student</button>
    </form>
  );
}

export default AddStudentForm;
