"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { useOpenBookingModal } from "./BookingModalProvider";

type BookCallButtonProps = {
  children: ReactNode;
  variant?: "primary" | "outline" | "dark" | "light";
  arrow?: boolean;
  className?: string;
};

export function BookCallButton(props: BookCallButtonProps) {
  const openModal = useOpenBookingModal();
  return <Button {...props} onClick={openModal} aria-haspopup="dialog" />;
}
