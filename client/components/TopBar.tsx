import { useSidebar } from "@/components/ui/sidebar";
import React from "react";
export function TopBar() {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="fixed top-0 left-0 right-0 h-[70px] bg-white border-b border-gray-200 flex items-center justify-between px-4 z-[60]">
      <div className="flex items-center gap-3">
        {/* <button className="flex items-center justify-center w-9 h-9 rounded border border-gray-200 bg-[#F9FAFB]">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M15.6754 2.47534H4.1254C3.21413 2.47534 2.4754 3.21407 2.4754 4.12534V15.6753C2.4754 16.5866 3.21413 17.3253 4.1254 17.3253H15.6754C16.5867 17.3253 17.3254 16.5866 17.3254 15.6753V4.12534C17.3254 3.21407 16.5867 2.47534 15.6754 2.47534Z"
              stroke="#4A5565"
              strokeWidth="1.65"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.4754 7.42529H17.3254M7.42538 17.3253V7.42529"
              stroke="#4A5565"
              strokeWidth="1.65"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button> */}
        <button
          onClick={() => {
            // debug: ensure toggle is called
            // eslint-disable-next-line no-console
            console.log("TopBar: toggleSidebar clicked");
            toggleSidebar();
          }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.8333 10.5H12.1667C11.2462 10.5 10.5 11.2462 10.5 12.1667V23.8333C10.5 24.7538 11.2462 25.5 12.1667 25.5H23.8333C24.7538 25.5 25.5 24.7538 25.5 23.8333V12.1667C25.5 11.2462 24.7538 10.5 23.8333 10.5Z"
              stroke="#101828"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.5 10.5V25.5"
              stroke="#101828"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <img
          className="w-[150px] "
          alt="FeedOps"
          src="https://feedops.com/wp-content/uploads/2022/12/Feedops-logo_Final-2-4.png"
        />
        <WorkspaceDropdown />
      </div>
    </div>
  );
}

function WorkspaceDropdown() {
  const workspaces = [
    { id: "workspace1", label: "nudelucy.com" },
    { id: "workspace2", label: "hipkid.com" },
  ];

  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(workspaces[0].id);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const current = workspaces.find((w) => w.id === selected) || workspaces[0];

  return (
    <div ref={ref} className="relative inline-block text-left ml-2">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-3 py-2 border rounded-md bg-white text-sm"
        aria-expanded={open}
      >
        <span className="min-w-[80px] text-sm">{current.label}</span>
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
        <div className="origin-top-left absolute left-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {workspaces.map((w) => (
              <button
                key={w.id}
                onClick={() => {
                  setSelected(w.id);
                  setOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 hover:bg-gray-50 ${
                  w.id === selected ? "bg-gray-100" : ""
                }`}
              >
                <span>{w.label}</span>
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
