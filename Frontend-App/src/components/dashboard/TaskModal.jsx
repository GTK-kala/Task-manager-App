import { useState } from "react";
import Modal from "../common/Modal";
import Button from "../common/Button";

const fieldClass =
  "clay-inset w-full px-4 py-3 text-sm font-medium text-ink outline-none " +
  "placeholder:text-muted focus-visible:ring-2 focus-visible:ring-accent/40";

const TaskModal = ({ open, onClose, onCreate }) => {
  const [title, setTitle] = useState("");
  const [project, setProject] = useState("Design");
  const [priority, setPriority] = useState("medium");
  const [due, setDue] = useState("");

  const reset = () => {
    setTitle("");
    setProject("Design");
    setPriority("medium");
    setDue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onCreate({
      title: title.trim(),
      project,
      priority,
      due: due || "No date",
    });
    reset();
    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title="New task"
      subtitle="Add a task to your workspace"
      footer={
        <div className="flex gap-3">
          <Button variant="soft" className="flex-1" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="flex-1" onClick={handleSubmit}>
            Create task
          </Button>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-2 block text-xs font-bold text-muted">
            Task title
          </label>
          <input
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Design the onboarding flow"
            className={fieldClass}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-bold text-muted">
              Project
            </label>
            <select
              value={project}
              onChange={(e) => setProject(e.target.value)}
              className={`${fieldClass} appearance-none`}
            >
              {["Design", "Engineering", "Marketing", "Docs", "Mobile App"].map(
                (p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ),
              )}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold text-muted">
              Due date
            </label>
            <input
              type="text"
              value={due}
              onChange={(e) => setDue(e.target.value)}
              placeholder="Today, 4:00 PM"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold text-muted">
            Priority
          </label>
          <div className="flex gap-2">
            {[
              { key: "low", label: "Low" },
              { key: "medium", label: "Medium" },
              { key: "high", label: "High" },
            ].map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => setPriority(p.key)}
                className={`flex-1 rounded-xl px-3 py-2.5 text-xs font-bold transition-all duration-200 ${
                  priority === p.key
                    ? "clay-accent"
                    : "clay-sm clay-press text-muted hover:text-ink"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default TaskModal;
