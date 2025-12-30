import React from "react";

interface SecondaryHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode; // actions or controls on the right
  className?: string;
  fullWidth?: boolean;
}

export function SecondaryHeader({
  title,
  subtitle,
  children,
  className,
  fullWidth = false,
}: SecondaryHeaderProps) {
  const fullWidthClasses = fullWidth ? "rounded-none" : "rounded-md";

  const fullWidthStyle = fullWidth
    ? { marginLeft: "-24px", marginRight: "-24px", width: "calc(100% + 48px)" }
    : undefined;

  return (
    <div
      style={fullWidthStyle}
      className={`bg-white/80 p-4 mb-2 flex items-center justify-between shadow-[0px_8px_24px_-17px_#c7e5ff] ${fullWidthClasses} ${className ?? ""}`}
    >
      <div className="flex flex-col">
        <h2 className="text-[20px] font-semibold text-black leading-tight pl-4">
          {title}
        </h2>
        {subtitle && (
          <div className="text-sm text-gray-500 mt-1">{subtitle}</div>
        )}
      </div>

      {children ? (
        <div
          // style={{ width: 100 }}
          className="flex items-center justify-end gap-2"
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

export default SecondaryHeader;
