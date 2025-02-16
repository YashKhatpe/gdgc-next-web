export function Text({ size = "md", asChild, className, children }: { size?: "sm" | "md" | "lg"; asChild?: boolean; className?: string; children: React.ReactNode }) {
    const textSize = size === "lg" ? "text-lg" : size === "md" ? "text-md" : "text-sm";
  
    return <p className={`${textSize} ${className}`}>{children}</p>;
  }
  