import { Settings2 } from "lucide-react";

interface SectionLabelProps {
  text: string;
  className?: string;
  center?: boolean;
}

export default function SectionLabel({ text, className = "", center = false }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-2 ${center ? "justify-center" : ""} ${className}`}>
      <Settings2 size={11} className="text-gray-400" />
      <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-400">
        {text}
      </span>
    </div>
  );
}
