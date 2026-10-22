import { useMemo, useState } from "react";
import {
  FiPlus,
  FiTrendingUp,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiChevronRight,
} from "react-icons/fi";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { useAuth } from "../../context/AuthContext";
import TaskItem from "../../components/dashboard/TaskItem";
import TaskModal from "../../components/dashboard/TaskModal";
import ProgressRing from "../../components/common/ProgressRing";

const INITIAL_TASKS = [
  {
    id: 1,
    title: "Design the new onboarding flow",
    project: "Mobile App",
    due: "Today, 4:00 PM",
    priority: "high",
    done: false,
  },
  {
    id: 2,
    title: "Review Q3 marketing report",
    project: "Marketing",
    due: "Today, 6:30 PM",
    priority: "medium",
    done: false,
  },
  {
    id: 3,
    title: "Sync with backend team on API schema",
    project: "Engineering",
    due: "Tomorrow",
    priority: "high",
    done: false,
  },
  {
    id: 4,
    title: "Update the design system tokens",
    project: "Design",
    due: "Sep 12",
    priority: "low",
    done: true,
  },
  {
    id: 5,
    title: "Write release notes for v2.4",
    project: "Docs",
    due: "Sep 14",
    priority: "medium",
    done: false,
  },
  {
    id: 6,
    title: "Fix responsive layout on tablet",
    project: "Mobile App",
    due: "Sep 15",
    priority: "high",
    done: true,
  },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "completed", label: "Completed" },
];

const UPCOMING = [
  { id: 1, title: "Team standup", time: "09:30", tone: "accent" },
  { id: 2, title: "Design review", time: "11:00", tone: "medium" },
  { id: 3, title: "Client call — Northwind", time: "15:45", tone: "high" },
];

const StatCard = ({ Icon, label, value, hint, accent }) => (
  <Card className="clay-press p-4 sm:p-5">
    <div className="flex items-start justify-between">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
          accent ? "clay-accent" : "clay-inset"
        }`}
      >
        <Icon className={`h-[18px] w-[18px] ${accent ? "" : "text-accent"}`} />
      </div>
      <span className="text-[11px] font-bold text-muted">{hint}</span>
    </div>
    <p className="mt-4 text-2xl font-extrabold tracking-tight text-ink sm:text-[28px]">
      {value}
    </p>
    <p className="mt-0.5 text-xs font-semibold text-muted">{label}</p>
  </Card>
);

const Dashboard = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [filter, setFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);

  const completed = tasks.filter((t) => t.done).length;
  const progress = tasks.length
    ? Math.round((completed / tasks.length) * 100)
    : 0;

  const filteredTasks = useMemo(() => {
    if (filter === "active") return tasks.filter((t) => !t.done);
    if (filter === "completed") return tasks.filter((t) => t.done);
    return tasks;
  }, [tasks, filter]);

  const toggleTask = (id) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );

  const deleteTask = (id) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  const addTask = (task) =>
    setTasks((prev) => [{ ...task, id: Date.now(), done: false }, ...prev]);

  const now = new Date();
  const hour = now.getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  const today = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="animate-fade-up space-y-5">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
            {today}
          </p>
          <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            {greeting}, {user?.name?.split(" ")[0] || "there"} 👋
          </h2>
          <p className="mt-1 text-sm font-medium text-muted">
            You have{" "}
            <span className="font-bold text-accent">
              {tasks.length - completed} tasks
            </span>{" "}
            left to finish today.
          </p>
        </div>

        <Button
          size="lg"
          onClick={() => setModalOpen(true)}
          className="shrink-0"
        >
          <FiPlus className="h-4 w-4" strokeWidth={2.5} />
          New task
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatCard
          Icon={FiTrendingUp}
          label="Total tasks"
          value={tasks.length}
          hint="+12%"
          accent
        />
        <StatCard
          Icon={FiCheckCircle}
          label="Completed"
          value={completed}
          hint="+8%"
        />
        <StatCard
          Icon={FiClock}
          label="In progress"
          value={tasks.length - completed}
          hint="This week"
        />
        <StatCard Icon={FiAlertCircle} label="Overdue" value={2} hint="-3%" />
      </div>

      {/* Main grid */}
      <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
        {/* Task list */}
        <Card className="p-4 sm:p-6 lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-base font-extrabold tracking-tight text-ink">
              My tasks
            </h3>

            <div className="flex gap-1.5">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`rounded-xl px-3 py-1.5 text-[12px] font-bold transition-all duration-200 ${
                    filter === f.key
                      ? "clay-accent"
                      : "text-muted hover:bg-ink/5 hover:text-ink"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 -mx-1 divide-y divide-ink/5">
            {filteredTasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-2 py-14 text-center">
                <div className="clay-inset flex h-14 w-14 items-center justify-center rounded-2xl">
                  <FiCheckCircle className="h-6 w-6 text-accent" />
                </div>
                <p className="mt-2 text-sm font-bold text-ink">
                  Nothing here yet
                </p>
                <p className="text-xs text-muted">
                  Create a task to get started.
                </p>
              </div>
            ) : (
              filteredTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                />
              ))
            )}
          </div>
        </Card>

        {/* Right column */}
        <div className="space-y-4 lg:space-y-5">
          {/* Progress */}
          <Card className="flex flex-col items-center p-6">
            <h3 className="self-start text-base font-extrabold tracking-tight text-ink">
              Today's progress
            </h3>
            <div className="mt-5">
              <ProgressRing value={progress} label="completed" />
            </div>
            <p className="mt-5 text-center text-xs font-medium leading-relaxed text-muted">
              <span className="font-bold text-ink">{completed}</span> of{" "}
              <span className="font-bold text-ink">{tasks.length}</span> tasks
              done. You're doing great!
            </p>
          </Card>

          {/* Upcoming */}
          <Card className="p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold tracking-tight text-ink">
                Upcoming
              </h3>
              <button
                aria-label="View all"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <FiChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 space-y-2.5">
              {UPCOMING.map((item) => (
                <div
                  key={item.id}
                  className="clay-inset-sm flex items-center gap-3 px-3 py-2.5"
                >
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      item.tone === "accent"
                        ? "bg-accent"
                        : item.tone === "high"
                          ? "bg-red-500"
                          : "bg-amber-500"
                    }`}
                  />
                  <p className="min-w-0 flex-1 truncate text-[13px] font-bold text-ink">
                    {item.title}
                  </p>
                  <span className="shrink-0 text-[11px] font-bold text-muted">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <TaskModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={addTask}
      />
    </div>
  );
};

export default Dashboard;
