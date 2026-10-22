import { useEffect } from "react";
import { FiX } from "react-icons/fi";

const Modal = ({ open, onClose, title, subtitle, children, footer }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
      <div
        className="absolute inset-0 animate-fade-in bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        className="clay-lg relative max-h-[92dvh] w-full animate-fade-up overflow-y-auto
          rounded-b-none p-6 sm:max-w-lg sm:rounded-b-[2.25rem] sm:p-8"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-extrabold tracking-tight text-ink">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-1 text-xs font-medium text-muted">{subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="clay-sm clay-press flex h-9 w-9 items-center justify-center text-muted
              outline-none hover:text-ink focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <FiX className="h-4 w-4" />
          </button>
        </div>

        {children}

        {footer && <div className="mt-8">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
