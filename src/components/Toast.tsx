import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

interface ToastData {
  id: string;
  type: 'success' | 'info';
  title: string;
  description?: string;
}

interface ToastContextType {
  toast: {
    success: (title: string, opts?: { description?: string }) => void;
    info: (title: string, opts?: { description?: string }) => void;
  };
}

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = useCallback((type: 'success' | 'info', title: string, opts?: { description?: string }) => {
    const id = Math.random().toString(36).slice(2);
    const newToast: ToastData = { id, type, title, description: opts?.description };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toast = {
    success: (title: string, opts?: { description?: string }) => addToast('success', title, opts),
    info: (title: string, opts?: { description?: string }) => addToast('info', title, opts),
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex flex-col gap-2 pointer-events-none w-[90vw] max-w-[400px]"
        aria-live="polite"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            className="pointer-events-auto flex items-start gap-3 rounded-2xl bg-[#2e3e34] text-[#FAF8F5] p-4 shadow-2xl border border-[#3e5246] animate-in fade-in slide-in-from-bottom-3 duration-300 transition-all"
            role="status"
          >
            {t.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-[#88ba9e] shrink-0 mt-0.5" />
            ) : (
              <Info className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            )}
            <div className="flex-1 text-left">
              <div className="text-sm font-semibold tracking-wide text-[#FAF8F5]">{t.title}</div>
              {t.description && (
                <div className="text-xs text-[#FAF8F5]/80 mt-1 leading-relaxed font-normal">
                  {t.description}
                </div>
              )}
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="text-[#FAF8F5]/60 hover:text-[#FAF8F5] transition-colors p-1"
              aria-label="Close notification"
            >
              <X size={15} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
