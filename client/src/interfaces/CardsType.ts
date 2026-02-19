import type { ReactNode } from "react";

export default interface CardsProps {
  notion: string;
  tag: ReactNode;
  onClick?: () => void;
}
