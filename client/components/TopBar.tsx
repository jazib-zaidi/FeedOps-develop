import { useSidebar } from "@/components/ui/sidebar";

export function TopBar() {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="fixed top-0 left-0 right-0 h-[70px] bg-black border-b border-gray-200 flex items-center justify-between px-4 z-[60]">
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
              stroke="white"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.5 10.5V25.5"
              stroke="white"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <img
          className="w-[100px] "
          alt="FeedOps"
          src="https://app.feedops.com/packs/media/images/feedops_logo_horiz-1375d7fc.png"
        />
      </div>

      <button className="ml-auto">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 20.25H16.25C17.3109 20.25 18.3283 19.8286 19.0784 19.0784C19.8286 18.3283 20.25 17.3109 20.25 16.25V13.75M12 20.25H7.75C6.68913 20.25 5.67172 19.8286 4.92157 19.0784C4.17143 18.3283 3.75 17.3109 3.75 16.25V12M12 20.25V15C12 14.2044 11.6839 13.4413 11.1213 12.8787C10.5587 12.3161 9.79565 12 9 12H3.75M3.75 12V7.75C3.75 6.68913 4.17143 5.67172 4.92157 4.92157C5.67172 4.17143 6.68913 3.75 7.75 3.75H10.25M13.75 3.75H19.25C19.526 3.75 19.776 3.862 19.957 4.043M19.957 4.043C20.1446 4.23049 20.2499 4.48481 20.25 4.75V10.25M19.957 4.043L19.25 4.75L13.75 10.25"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
