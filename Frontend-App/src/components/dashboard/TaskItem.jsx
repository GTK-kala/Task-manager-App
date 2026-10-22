import { FiFlag } from "react-icons/fi";
import Badge from "../common/Badge";

const priorityTone = { high: "high", medium: "medium", low: "low" };
const priorityLabel = { high: "High", medium: "Medium", low: "Low" };

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div
      className={`group flex items-center gap-3 rounded-2xl px-3 py-3 transition-all duration-200
        hover:bg-ink/[0.03] sm:gap-4 sm:px-4`}
    >
      {/* Checkbox */}
      <button
        onClick={() => onToggle(task.id)}
        aria-label={task.done ? "Mark as incomplete" : "Mark as complete"}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg outline-none
          transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent/50
          ${
            task.done
              ? "clay-accent"
              : "clay-inset-sm text-transparent hover:text-accent/40"
          }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3 w-3"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </button>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <p
          className={`truncate text-sm font-bold transition-all duration-200 ${
            task.done ? "text-muted line-through" : "text-ink"
          }`}
        >
          {task.title}
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-semibold text-muted">
          <span>{task.project}</span>
          <span className="h-1 w-1 rounded-full bg-muted/60" />
          <span>{task.due}</span>
        </div>
      </div>

      {/* Priority */}
      <Badge
        tone={priorityTone[task.priority]}
        className="hidden shrink-0 sm:inline-flex"
      >
        <FiFlag className="h-3 w-3" />
        {priorityLabel[task.priority]}
      </Badge>

      {/* Delete */}
      <button
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted
          opacity-0 transition-all duration-200 hover:bg-red-500/10 hover:text-red-500
          focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-accent/50 group-hover:opacity-100"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
          <path d="M10 11v6M14 11v6" />
          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
        </svg>
      </button>
    </div>
  );
};

export default TaskItem;
