import { FiCheck } from "react-icons/fi";

const Logo = ({ compact = false, className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="clay-accent flex h-10 w-10 items-center justify-center rounded-2xl">
        <FiCheck className="h-5 w-5" strokeWidth={3} />
      </div>
      {!compact && (
        <span className="text-lg font-extrabold tracking-tight text-ink">
          Taskly
        </span>
      )}
    </div>
  );
};

export default Logo;
