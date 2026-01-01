import React, { useState, useRef, useEffect } from "react";
import { useSidebar } from "@/components/ui/sidebar";

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

  const channels = [
    {
      id: "google",
      label: "Google",
      icon: "https://app.feedops.com/packs/media/google/google-merchant-center-6aab87d5.png",
    },
    {
      id: "microsoft",
      label: "Microsoft",
      icon: "https://app.feedops.com/packs/media/microsoft/microsoft-d2e44a05.png",
    },
    {
      id: "meta",
      label: "Meta",
      icon: "https://app.feedops.com/packs/media/facebook/meta-749bae07.png",
    },
    {
      id: "pinterest",
      label: "Pinterest",
      icon: "https://app.feedops.com/packs/media/pinterest/pinterest-8f0c34f4.png",
    },
  ];

  const [selectedChannel, setSelectedChannel] = useState<string>(
    channels[0].id,
  );

  const { open: sidebarOpen } = useSidebar();

  return (
    <div
      style={fullWidthStyle}
      className={`bg-white/80 p-4 mb-2 flex items-center justify-between shadow-[0px_8px_24px_-17px_#c7e5ff] ${fullWidthClasses} ${className ?? ""}`}
    >
      <div className="flex flex-col ">
        <select
          className="border border-gray-300 rounded-md ml-2 px-2 py-1 text-[13px] font-medium text-[#101828]"
          name=""
          id=""
        >
          <option value="workspace1"> nudelucy.com</option>
          <option value="workspace2">hipkid.com</option>
        </select>
        <div className="flex align-center items-center">
          {" "}
          <h2 className="text-[20px] font-semibold text-black leading-tight pl-4">
            {title}
          </h2>
          {/* Channel selector: custom dropdown with icon */}
          <div className="flex items-center gap-2 mt-3 pl-4 relative m-0 z-50">
            <ChannelDropdown
              channels={channels}
              selectedChannel={selectedChannel}
              onSelect={(id: string) => setSelectedChannel(id)}
            />
          </div>
        </div>
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

function ChannelDropdown({
  channels,
  selectedChannel,
  onSelect,
}: {
  channels: { id: string; label: string; icon: string }[];
  selectedChannel: string;
  onSelect: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const selected =
    channels.find((c) => c.id === selectedChannel) || channels[0];

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-3 py-2 border rounded-md bg-white text-sm"
        aria-expanded={open}
      >
        <span className="text-[16px]">
          <img className="w-6 h-6" src={selected.icon} alt={selected.label} />
        </span>
        <span className="min-w-[50px]">{selected.label}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          className={`transform transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M7 10l5 5 5-5z" fill="currentColor" />
        </svg>
      </button>

      {open ? (
        <div className="origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {channels.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  onSelect(c.id);
                  setOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 hover:bg-gray-50 ${
                  c.id === selectedChannel ? "bg-gray-100" : ""
                }`}
              >
                <span className="text-[16px]">
                  {" "}
                  <img className="w-6 h-6" src={c.icon} alt={c.label} />
                </span>
                <span>{c.label}</span>
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
