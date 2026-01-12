import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

interface Props {
  itemId: string | number;
  imageUrl?: string;
  status?: string; // e.g. UNKNOWN, ACTIVE
  productUrl?: string;
  detailsUrl?: string;
  className?: string;
  zIndex?: number;
}

// Reusable hover preview. Shows a popover when hovering over children text.
export default function ProductHoverPreview({
  itemId,
  imageUrl,
  status = "UNKNOWN",
  productUrl,
  detailsUrl,
  className,
  zIndex = 9999,
}: Props) {
  const [open, setOpen] = useState(false);
  const enterTimeout = useRef<number | null>(null);
  const leaveTimeout = useRef<number | null>(null);
  const triggerRef = useRef<HTMLSpanElement | null>(null);
  const popRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    return () => {
      if (enterTimeout.current) window.clearTimeout(enterTimeout.current);
      if (leaveTimeout.current) window.clearTimeout(leaveTimeout.current);
    };
  }, []);

  // When open, compute absolute position for the portal popover
  useEffect(() => {
    if (!open) {
      setPos(null);
      return;
    }

    const compute = () => {
      const trigger = triggerRef.current;
      const pop = popRef.current;
      if (!trigger) return;
      const rect = trigger.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollX = window.scrollX || window.pageXOffset;

      // Default placement: above and to the right of the trigger
      let left = rect.right + scrollX + 8;
      let top = rect.top + scrollY - 8; // will adjust after measuring pop size

      if (pop) {
        const popRect = pop.getBoundingClientRect();
        // Position pop so its bottom sits ~8px above the trigger top
        top = rect.top + scrollY - popRect.height - 8;
        left = rect.right + scrollX + 8;

        // Prevent overflowing right edge; clamp if necessary
        const viewportRight = scrollX + document.documentElement.clientWidth;
        if (left + popRect.width + 8 > viewportRight) {
          left = Math.max(scrollX + 8, viewportRight - popRect.width - 8);
        }

        // If there's no space above, flip below the trigger
        if (top < scrollY + 8) {
          top = rect.bottom + scrollY + 8;
        }
      }

      setPos({ top, left });
    };

    compute();
    window.addEventListener("resize", compute);
    window.addEventListener("scroll", compute, true);
    return () => {
      window.removeEventListener("resize", compute);
      window.removeEventListener("scroll", compute, true);
    };
  }, [open]);

  const showWithDelay = () => {
    if (leaveTimeout.current) {
      window.clearTimeout(leaveTimeout.current);
      leaveTimeout.current = null;
    }
    enterTimeout.current = window.setTimeout(() => setOpen(true), 100);
  };

  const hide = () => {
    if (enterTimeout.current) {
      window.clearTimeout(enterTimeout.current);
      enterTimeout.current = null;
    }
    // hide immediately on leave
    setOpen(false);
  };

  return (
    <span className={className} style={{ position: "relative" }}>
      <span
        ref={triggerRef}
        onMouseEnter={showWithDelay}
        onMouseLeave={hide}
        className="text-sm hover:underline text-blue-600 cursor-default"
      >
        {`...${String(itemId).slice(-4)}`}
      </span>

      {open &&
        ReactDOM.createPortal(
          <div
            ref={popRef}
            onMouseEnter={() => {
              // keep open when moving from trigger into popover
              if (enterTimeout.current) {
                window.clearTimeout(enterTimeout.current);
                enterTimeout.current = null;
              }
              setOpen(true);
            }}
            onMouseLeave={hide}
            style={{
              position: "absolute",
              top: pos ? pos.top : 0,
              left: pos ? pos.left : 0,
              width: 300,
              zIndex,
            }}
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-3">
                <div className="flex gap-3">
                  <div className="relative w-20 h-28 flex-shrink-0 bg-gray-100 rounded">
                    {imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={imageUrl}
                        alt={`Product ${itemId}`}
                        className="w-full h-full object-cover rounded"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
                        No image
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="text-sm text-gray-600">Item ID</div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="text-sm font-medium text-gray-900">
                        {itemId}
                      </div>
                      <button
                        aria-label="Copy item id"
                        onClick={() => {
                          try {
                            navigator.clipboard.writeText(String(itemId));
                          } catch (e) {
                            // ignore
                          }
                        }}
                        className="p-1 rounded hover:bg-gray-100"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 1H4a2 2 0 0 0-2 2v12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <rect
                            x="8"
                            y="5"
                            width="14"
                            height="14"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="mt-3 flex flex-col text-sm">
                      {productUrl && (
                        <a
                          href={productUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:underline flex items-start gap-2 flex-col justify-between"
                        >
                          <span className="flex gap-2 items-center justify-center">
                            Visit product page on your website{" "}
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 3h7v7"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10 14L21 3"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M21 21H3V3"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span className="flex gap-2 items-center justify-between">
                            View Product details.
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 3h7v7"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10 14L21 3"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M21 21H3V3"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                      )}

                      {detailsUrl && (
                        <a
                          href={detailsUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 hover:underline flex items-center gap-2 mt-2"
                        >
                          <span>View product details</span>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 3h7v7"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 14L21 3"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M21 21H3V3"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          // render into body so popover is not clipped by table overflow
          document.body,
        )}
    </span>
  );
}
