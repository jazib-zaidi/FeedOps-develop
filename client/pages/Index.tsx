import { TopBar } from "@/components/TopBar";
import { Sidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ProductTable } from "@/components/ProductTable";
import { ActionButtons } from "@/components/ActionButtons";
import SecondaryHeader from "@/components/SecondaryHeader";
import { useEffect, useState, useRef } from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export default function Index() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const tableContainerRef = useRef<HTMLDivElement | null>(null);

  // Keep isFullscreen in sync with document fullscreen state and lock body scroll when using fallback.
  useEffect(() => {
    const onFsChange = () =>
      setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("webkitfullscreenchange", onFsChange as any);

    return () => {
      document.removeEventListener("fullscreenchange", onFsChange);
      document.removeEventListener("webkitfullscreenchange", onFsChange as any);
    };
  }, []);

  useEffect(() => {
    // If we are not actually in browser fullscreen, maintain body overflow lock for fallback fullscreen state
    if (isFullscreen && !document.fullscreenElement) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && document.fullscreenElement) {
        if ((document as any).exitFullscreen)
          (document as any).exitFullscreen();
        else if ((document as any).webkitExitFullscreen)
          (document as any).webkitExitFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleFullscreen = async () => {
    const el = tableContainerRef.current as any;
    try {
      if (!document.fullscreenElement) {
        if (el && el.requestFullscreen) await el.requestFullscreen();
        else if (el && el.webkitRequestFullscreen)
          await el.webkitRequestFullscreen();
        else setIsFullscreen(true);
      } else {
        if ((document as any).exitFullscreen)
          await (document as any).exitFullscreen();
        else if ((document as any).webkitExitFullscreen)
          await (document as any).webkitExitFullscreen();
        else setIsFullscreen(false);
      }
    } catch (err) {
      setIsFullscreen((s) => !s);
    }
  };
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-[#F3F6F9] w-full">
        {!isFullscreen && <TopBar />}
        {!isFullscreen && <Sidebar />}

        <main
          style={{
            marginLeft: isFullscreen ? 0 : "var(--sidebar-width, 67px)",
          }}
          className={
            isFullscreen ? "pt-0 p-0" : "pt-[70px] p-6 h-screen flex flex-col"
          }
        >
          <div className="mx-auto w-full flex-grow flex flex-col">
            <div className="mb-3">
              <SecondaryHeader title="Products" fullWidth>
                <ActionButtons />
              </SecondaryHeader>
            </div>

            {/* Table container: becomes fullscreen fixed when expanded */}
            <div
              ref={tableContainerRef}
              className={
                isFullscreen
                  ? "fixed inset-0 z-50 bg-white p-4 overflow-auto transition-all duration-200 flex flex-col"
                  : "bg-white rounded-[10px] border border-gray-200 shadow-sm p-2 flex-grow flex flex-col"
              }
            >
              {isFullscreen && (
                <div className="text-sm text-gray-500 pl-4">nudelucy.com</div>
              )}

              <div className="flex items-center justify-between  pb-2 pt-1  border-gray-200">
                <div className="flex gap-3">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#D1D5DC] bg-white text-[#364153] text-[14px] font-medium hover:bg-gray-50 transition-colors">
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                        >
                          <path
                            d="M17.4167 2.375H1.58333L7.91666 9.86417V15.0417L11.0833 16.625V9.86417L17.4167 2.375Z"
                            stroke="#364153"
                            strokeWidth="1.58"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Add Filters
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      Add filters to manage visible rows
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="flex items-center gap-2 px-3 py-2 rounded-md border border-[#D1D5DC] bg-white text-[#364153] text-[14px] font-medium hover:bg-gray-50 transition-colors">
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                        >
                          <path
                            d="M3.95833 9.5H15.0417M9.5 3.95825V15.0416"
                            stroke="#364153"
                            strokeWidth="1.83"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Create Rule
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      Create a rule to automatically update product data.
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="flex gap-3 items-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#D1D5DC] bg-white text-[#364153] text-[14px] font-medium hover:bg-gray-50 transition-colors">
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                        >
                          <path
                            d="M16.625 11.875V15.0417C16.625 15.4616 16.4582 15.8643 16.1613 16.1613C15.8643 16.4582 15.4616 16.625 15.0417 16.625H3.95833C3.53841 16.625 3.13568 16.4582 2.83875 16.1613C2.54181 15.8643 2.375 15.4616 2.375 15.0417V11.875M5.54169 7.91675L9.50002 11.8751L13.4584 7.91675M9.5 11.875V2.375"
                            stroke="#364153"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Import
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <div className="text-sm">
                        Import an external file
                        <div className="text-xs text-gray-500 mt-1">
                          To enhance or enrich existing product data.
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#D1D5DC] bg-white text-[#364153] text-[14px] font-medium hover:bg-gray-50 transition-colors">
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                        >
                          <path
                            d="M16.625 11.875V15.0417C16.625 15.4616 16.4582 15.8643 16.1613 16.1613C15.8643 16.4582 15.4616 16.625 15.0417 16.625H3.95833C3.53841 16.625 3.13568 16.4582 2.83875 16.1613C2.54181 15.8643 2.375 15.4616 2.375 15.0417V11.875M13.4583 6.33333L9.49996 2.375L5.54163 6.33333M9.5 2.375V11.875"
                            stroke="#364153"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Export
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <div className="text-sm">
                        Exports to Google Sheets.
                        <div className="text-xs text-gray-500 mt-1">
                          Export product data to review fixes or identify what
                          needs updating.
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#D1D5DC] bg-white text-[#364153] text-[14px] font-medium hover:bg-gray-50 transition-colors">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5ZM7.5 2.5V17.5M12.5 2.5V17.5"
                            stroke="#364153"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Columns
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      Manage visible columns
                    </TooltipContent>
                  </Tooltip>

                  {/* Fullscreen toggle button */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={toggleFullscreen}
                        title={
                          isFullscreen
                            ? "Exit full screen"
                            : "Expand to full screen"
                        }
                        aria-pressed={isFullscreen}
                        aria-label={
                          isFullscreen ? "Exit full screen" : "Open full screen"
                        }
                        className=" flex items-center justify-center w-10 h-10 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-lg" aria-hidden>
                          {isFullscreen ? (
                            <svg
                              width="29"
                              height="29"
                              fill="none"
                              viewBox="0 0 24 24"
                              data-fpl-icon-size="24"
                            >
                              <path
                                fill="black"
                                fill-rule="evenodd"
                                d="M17.146 6.146a.5.5 0 0 1 .708.708L14.707 10H17.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793zM6.854 17.854a.5.5 0 0 1-.708-.708L9.293 14H6.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.793z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          ) : (
                            <svg
                              width="29"
                              height="29"
                              fill="none"
                              viewBox="0 0 24 24"
                              data-fpl-icon-size="24"
                            >
                              <path
                                fill="black"
                                fill-rule="evenodd"
                                d="m17 7.707-3.146 3.147a.5.5 0 0 1-.708-.708L16.293 7H13.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0zm-6.854 5.44a.5.5 0 0 1 .708.707L7.707 17H10.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          )}
                        </span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      {isFullscreen ? "Exit full screen" : "Enter full screen"}
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              <ProductTable isFullscreen={isFullscreen} />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
