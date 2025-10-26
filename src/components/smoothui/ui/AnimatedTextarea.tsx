import { motion } from "motion/react";
import { useRef, useState } from "react";

const LABEL_TRANSITION = {
  duration: 0.28,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number], // standard material easing
};

export interface AnimatedTextareaProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  textareaClassName?: string;
  labelClassName?: string;
  icon?: React.ReactNode;
  rows?: number;
  name?: string;
  id?: string;
  required?: boolean;
}

export default function AnimatedTextarea({
  value,
  defaultValue = "",
  onChange,
  label,
  placeholder = "",
  disabled = false,
  className = "",
  textareaClassName = "",
  labelClassName = "",
  icon,
  rows = 6,
  name,
  id,
  required = false,
}: AnimatedTextareaProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const val = isControlled ? value : internalValue;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = !!val || isFocused;

  return (
    <div className={`relative flex items-start ${className}`}>
      {icon && isFloating && (
        <motion.span
          className="absolute top-3 left-3 z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.span>
      )}
      <textarea
        ref={textareaRef}
        value={val}
        onChange={(e) => {
          if (!isControlled) setInternalValue(e.target.value);
          onChange?.(e.target.value);
        }}
        placeholder={isFloating ? placeholder : ""}
        disabled={disabled}
        rows={rows}
        name={name}
        id={id}
        required={required}
        className={`peer focus:ring-primary bg-background w-full rounded-sm border px-3 py-2 text-sm transition outline-none focus:ring-1 resize-none ${
          icon && isFloating ? "pl-10" : ""
        } ${textareaClassName}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <motion.label
        className={`bg-background text-foreground pointer-events-none absolute top-3 left-3 origin-left rounded-sm border border-transparent px-1 transition-all ${labelClassName}`}
        animate={
          isFloating
            ? {
                y: -30,
                scale: 0.85,
                color: "var(--color-brand)",
                borderColor: "var(--color-brand)",
              }
            : { y: 0, scale: 1, color: "#6b7280" }
        }
        transition={LABEL_TRANSITION}
        style={{
          zIndex: 2,
        }}
      >
        {label}
      </motion.label>
    </div>
  );
}
