import { useEffect } from "react";
import { createPortal } from "react-dom";
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

  const content = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 animate-fade-in bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Card */}
      <div
        role="dialog"
        aria-modal="true"
        className="clay-lg relative flex max-h-[85dvh] w-full max-w-lg animate-fade-up flex-col overflow-hidden rounded-[2rem]"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-6 pb-4 pt-6 sm:px-8 sm:pt-8">
          <div className="min-w-0">
            <h2 className="truncate text-lg font-extrabold tracking-tight text-ink">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-1 text-xs font-medium text-muted">{subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="clay-sm clay-press flex h-9 w-9 shrink-0 items-center justify-center text-muted
              outline-none hover:text-ink focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <FiX className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 pb-4 sm:px-8">
          {children}
        </div>

        {/* Sticky footer — buttons always visible */}
        {footer && (
          <div className="border-t border-ink/5 p-6 sm:px-8">{footer}</div>
        )}
      </div>
    </div>
  );

  // Render at the top of <body> so no parent transform can trap it
  return createPortal(content, document.body);
};

export default Modal;
