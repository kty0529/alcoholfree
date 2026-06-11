interface BadgeProps {
  color: string;
  text: string;
}

export function Badge({ color, text }: BadgeProps) {
  return (
    <span
      className={`notion-multi-select-color-${color} inline-flex h-5 items-center justify-center rounded px-1.5`}
    >
      {text}
    </span>
  );
}
