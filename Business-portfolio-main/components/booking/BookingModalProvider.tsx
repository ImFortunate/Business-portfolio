"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { BookingModal } from "./BookingModal";

const BookingModalContext = createContext<(() => void) | null>(null);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <BookingModalContext.Provider value={openModal}>
      {children}
      <BookingModal open={open} onClose={closeModal} />
    </BookingModalContext.Provider>
  );
}

export function useOpenBookingModal() {
  const open = useContext(BookingModalContext);
  if (!open) throw new Error("useOpenBookingModal must be used inside <BookingModalProvider>");
  return open;
}
