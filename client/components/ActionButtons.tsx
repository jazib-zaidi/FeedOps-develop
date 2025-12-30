import { useNavigate } from "react-router-dom";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";

export function ActionButtons() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-3">
      {/* <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#D1D5DC] bg-white text-[#364153] text-[14px] font-medium hover:bg-gray-50 transition-colors">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
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

      <button className="flex items-center gap-2 px-3 py-2 rounded-md border border-[#D1D5DC] bg-white text-[#364153] text-[14px] font-medium hover:bg-gray-50 transition-colors">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
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

      <div className="flex-1" />

      <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#D1D5DC] bg-white text-[#364153] text-[14px] font-medium hover:bg-gray-50 transition-colors">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path
            d="M16.625 11.875V15.0417C16.625 15.4616 16.4582 15.8643 16.1613 16.1613C15.8643 16.4582 15.4616 16.625 15.0417 16.625H3.95833C3.53841 16.625 3.13568 16.4582 2.83875 16.1613C2.54181 15.8643 2.375 15.4616 2.375 15.0417V11.875M5.54169 7.91675L9.50002 11.8751L13.4584 7.91675M9.5 11.875V2.375"
            stroke="#364153"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Export
      </button>

      <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#D1D5DC] bg-white text-[#364153] text-[14px] font-medium hover:bg-gray-50 transition-colors">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
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

      <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#D1D5DC] bg-white text-[#364153] text-[14px] font-medium hover:bg-gray-50 transition-colors">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5ZM7.5 2.5V17.5M12.5 2.5V17.5"
            stroke="#364153"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Columns
      </button> */}

      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => navigate("/under-development")}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-white text-[#727272] text-[14px] font-medium hover:bg-gray-50 transition-colors"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.125 14.875C4.91458 14.875 3.88296 14.4483 3.03013 13.5949C2.17729 12.7415 1.75058 11.7098 1.75 10.5C1.74942 9.29017 2.17613 8.25854 3.03013 7.40513C3.88413 6.55171 4.91575 6.125 6.125 6.125H8.75C8.99792 6.125 9.20588 6.209 9.37388 6.377C9.54188 6.545 9.62558 6.75267 9.625 7C9.62442 7.24733 9.54042 7.45529 9.373 7.62388C9.20558 7.79246 8.99792 7.87617 8.75 7.875H6.125C5.39583 7.875 4.77604 8.13021 4.26563 8.64062C3.75521 9.15104 3.5 9.77083 3.5 10.5C3.5 11.2292 3.75521 11.849 4.26563 12.3594C4.77604 12.8698 5.39583 13.125 6.125 13.125H8.75C8.99792 13.125 9.20588 13.209 9.37388 13.377C9.54188 13.545 9.62558 13.7527 9.625 14C9.62442 14.2473 9.54042 14.4553 9.373 14.6239C9.20558 14.7925 8.99792 14.8762 8.75 14.875H6.125ZM7.875 11.375C7.62708 11.375 7.41942 11.291 7.252 11.123C7.08458 10.955 7.00058 10.7473 7 10.5C6.99942 10.2527 7.08342 10.045 7.252 9.877C7.42058 9.709 7.62825 9.625 7.875 9.625H13.125C13.3729 9.625 13.5809 9.709 13.7489 9.877C13.9169 10.045 14.0006 10.2527 14 10.5C13.9994 10.7473 13.9154 10.9553 13.748 11.1239C13.5806 11.2925 13.3729 11.3762 13.125 11.375H7.875ZM12.25 14.875C12.0021 14.875 11.7944 14.791 11.627 14.623C11.4596 14.455 11.3756 14.2473 11.375 14C11.3744 13.7527 11.4584 13.545 11.627 13.377C11.7956 13.209 12.0033 13.125 12.25 13.125H14.875C15.6042 13.125 16.224 12.8698 16.7344 12.3594C17.2448 11.849 17.5 11.2292 17.5 10.5C17.5 9.77083 17.2448 9.15104 16.7344 8.64062C16.224 8.13021 15.6042 7.875 14.875 7.875H12.25C12.0021 7.875 11.7944 7.791 11.627 7.623C11.4596 7.455 11.3756 7.24733 11.375 7C11.3744 6.75267 11.4584 6.545 11.627 6.377C11.7956 6.209 12.0033 6.125 12.25 6.125H14.875C16.0854 6.125 17.1173 6.55171 17.9708 7.40513C18.8242 8.25854 19.2506 9.29017 19.25 10.5C19.2494 11.7098 18.8227 12.7418 17.9699 13.5957C17.117 14.4497 16.0854 14.8762 14.875 14.875H12.25Z"
                fill="#727272"
              />
            </svg>
            Feed URL
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Open feed URL settings</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => navigate("/under-development")}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-white text-[#727272] text-[14px] font-medium hover:bg-gray-50 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M8.05918 3.44663C8.10509 2.96358 8.32945 2.515 8.68843 2.18853C9.0474 1.86206 9.5152 1.68115 10.0004 1.68115C10.4857 1.68115 10.9535 1.86206 11.3124 2.18853C11.6714 2.515 11.8958 2.96358 11.9417 3.44663C11.9693 3.75868 12.0716 4.05948 12.2401 4.32358C12.4086 4.58768 12.6382 4.8073 12.9096 4.96386C13.1809 5.12042 13.486 5.2093 13.7989 5.22298C14.1119 5.23666 14.4235 5.17474 14.7075 5.04246C15.1484 4.84228 15.6481 4.81331 16.1092 4.9612C16.5703 5.10909 16.9599 5.42326 17.2021 5.84255C17.4443 6.26185 17.5219 6.75627 17.4197 7.22961C17.3175 7.70294 17.0428 8.12131 16.6492 8.4033C16.3928 8.58317 16.1836 8.82214 16.0391 9.09998C15.8946 9.37783 15.8192 9.68639 15.8192 9.99955C15.8192 10.3127 15.8946 10.6213 16.0391 10.8991C16.1836 11.177 16.3928 11.4159 16.6492 11.5958C17.0428 11.8778 17.3175 12.2962 17.4197 12.7695C17.5219 13.2428 17.4443 13.7372 17.2021 14.1565C16.9599 14.5758 16.5703 14.89 16.1092 15.0379C15.6481 15.1858 15.1484 15.1568 14.7075 14.9566C14.4235 14.8244 14.1119 14.7624 13.7989 14.7761C13.486 14.7898 13.1809 14.8787 12.9096 15.0352C12.6382 15.1918 12.4086 15.4114 12.2401 15.6755C12.0716 15.9396 11.9693 16.2404 11.9417 16.5525C11.8958 17.0355 11.6714 17.4841 11.3124 17.8106C10.9535 18.137 10.4857 18.3179 10.0004 18.3179C9.5152 18.3179 9.0474 18.137 8.68843 17.8106C8.32945 17.4841 8.10509 17.0355 8.05918 16.5525C8.03163 16.2403 7.92926 15.9394 7.76073 15.6752C7.5922 15.411 7.36249 15.1913 7.09104 15.0347C6.81959 14.8782 6.5144 14.7893 6.20133 14.7757C5.88825 14.7621 5.57651 14.8242 5.29251 14.9566C4.85158 15.1568 4.35195 15.1858 3.89084 15.0379C3.42974 14.89 3.04015 14.5758 2.79791 14.1565C2.55567 13.7372 2.47811 13.2428 2.58031 12.7695C2.68251 12.2962 2.95718 11.8778 3.35084 11.5958C3.60719 11.4159 3.81645 11.177 3.96092 10.8991C4.10538 10.6213 4.1808 10.3127 4.1808 9.99955C4.1808 9.68639 4.10538 9.37783 3.96092 9.09998C3.81645 8.82214 3.60719 8.58317 3.35084 8.4033C2.95773 8.12117 2.68355 7.70296 2.58159 7.22995C2.47964 6.75694 2.55718 6.26291 2.79916 5.84389C3.04114 5.42487 3.43027 5.11078 3.89092 4.96266C4.35157 4.81455 4.85083 4.84299 5.29168 5.04246C5.57564 5.17474 5.8873 5.23666 6.20026 5.22298C6.51322 5.2093 6.81829 5.12042 7.08962 4.96386C7.36096 4.8073 7.59059 4.58768 7.75906 4.32358C7.92754 4.05948 8.02991 3.75868 8.05751 3.44663M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                stroke="#727272"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Settings
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Open application settings</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <button className="flex items-center gap-2 px-5 py-2 rounded-md bg-[#a2d3af] text-white text-[14px] font-semibold hover:bg-[#7bb77a] cursor-not-allowed transition-colors">
            Queue Changes
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          Make a change to queue updates
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
