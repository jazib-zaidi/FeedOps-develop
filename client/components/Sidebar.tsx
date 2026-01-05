import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar";
import { channels } from "./SecondaryHeader";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  badge?: string;
}

export function Sidebar() {
  const location = useLocation();

  // Determine whether the sidebar is collapsed (icon-only) or expanded (icon + text).
  // If `useSidebar` is not available (no provider), default to expanded behavior.
  let collapsed = false;
  try {
    const { isMobile, state, openMobile } = useSidebar();
    // On mobile we use `openMobile` to decide visibility; keep expanded layout when visible.
    if (isMobile) {
      collapsed = !openMobile;
    } else {
      collapsed = state === "collapsed";
    }
  } catch (e) {
    collapsed = false;
  }

  const navItems: NavItem[] = [
    {
      icon: (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path
            d="M12.6342 22.6371C15.2869 22.6371 17.831 21.5833 19.7068 19.7075C21.5826 17.8318 22.6364 15.2877 22.6364 12.6349C22.6364 9.98222 21.5826 7.43813 19.7068 5.56237C17.831 3.68661 15.2869 2.63281 12.6342 2.63281C9.98148 2.63281 7.4374 3.68661 5.56164 5.56237C3.68587 7.43813 2.63208 9.98222 2.63208 12.6349C2.63208 15.2877 3.68587 17.8318 5.56164 19.7075C7.4374 21.5833 9.98148 22.6371 12.6342 22.6371Z"
            stroke="currentColor"
            strokeWidth="1.58"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.63208 12.6349H22.6364M12.6342 22.6371C15.0895 22.6371 17.0794 18.1593 17.0794 12.6349C17.0794 7.11061 15.0895 2.63281 12.6342 2.63281C10.179 2.63281 8.18906 7.11061 8.18906 12.6349C8.18906 18.1593 10.179 22.6371 12.6342 22.6371Z"
            stroke="currentColor"
            strokeWidth="1.58"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: "Websites",
      href: "/under-development",
    },
    {
      icon: (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
          <g clipPath="url(#clip0)">
            <path
              d="M8.71917 13.5988C8.64084 13.2951 8.48258 13.018 8.26085 12.7963C8.03911 12.5746 7.76201 12.4163 7.45838 12.338L2.07565 10.9499C1.98382 10.9239 1.90299 10.8686 1.84544 10.7924C1.78788 10.7162 1.75674 10.6234 1.75674 10.5279C1.75674 10.4325 1.78788 10.3396 1.84544 10.2634C1.90299 10.1873 1.98382 10.132 2.07565 10.1059L7.45838 8.71702C7.76191 8.63876 8.03893 8.48063 8.26066 8.25906C8.48238 8.03749 8.64071 7.76057 8.71917 7.4571L10.1072 2.07437C10.133 1.98217 10.1882 1.90095 10.2645 1.84309C10.3408 1.78523 10.4339 1.75391 10.5296 1.75391C10.6254 1.75391 10.7185 1.78523 10.7948 1.84309C10.8711 1.90095 10.9263 1.98217 10.9521 2.07437L12.3392 7.4571C12.4176 7.76073 12.5758 8.03783 12.7976 8.25956C13.0193 8.4813 13.2964 8.63956 13.6 8.71789L18.9828 10.105C19.0753 10.1306 19.157 10.1858 19.2151 10.2621C19.2733 10.3385 19.3048 10.4319 19.3048 10.5279C19.3048 10.6239 19.2733 10.7173 19.2151 10.7937C19.157 10.8701 19.0753 10.9253 18.9828 10.9508L13.6 12.338C13.2964 12.4163 13.0193 12.5746 12.7976 12.7963C12.5758 13.018 12.4176 13.2951 12.3392 13.5988L10.9512 18.9815C10.9254 19.0737 10.8702 19.1549 10.7939 19.2128C10.7176 19.2706 10.6245 19.302 10.5288 19.302C10.433 19.302 10.3399 19.2706 10.2636 19.2128C10.1874 19.1549 10.1321 19.0737 10.1063 18.9815L8.71917 13.5988Z"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5475 2.63208V6.1416M19.303 4.38721H15.7935M3.5108 14.9158V16.6705M4.38751 15.7927H2.63275"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      ),
      label: "Playbook",
      href: "/under-development",
    },
    {
      icon: (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
          <g clipPath="url(#clip1)">
            <path
              d="M10.9676 19.3022H15.7932C16.2586 19.3022 16.7049 19.1174 17.034 18.7883C17.3631 18.4592 17.548 18.0129 17.548 17.5475V6.14154L13.1611 1.75464H5.26465C4.79926 1.75464 4.35293 1.93951 4.02385 2.2686C3.69476 2.59768 3.50989 3.04401 3.50989 3.5094V11.8445"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.2823 1.75464V5.26416C12.2823 5.72955 12.4672 6.17588 12.7963 6.50496C13.1254 6.83404 13.5717 7.01892 14.0371 7.01892H17.5466M11.7371 13.7096C11.9101 13.5365 12.0474 13.3311 12.1411 13.105C12.2347 12.8789 12.2829 12.6365 12.2829 12.3918C12.2829 12.147 12.2347 11.9047 12.1411 11.6786C12.0474 11.4524 11.9101 11.247 11.7371 11.0739C11.564 10.9009 11.3586 10.7636 11.1325 10.6699C10.9063 10.5763 10.664 10.5281 10.4193 10.5281C10.1745 10.5281 9.93217 10.5763 9.70606 10.6699C9.47994 10.7636 9.27449 10.9009 9.10143 11.0739L4.70576 15.4714C4.49716 15.6799 4.34447 15.9376 4.2618 16.2207L3.52744 18.7387C3.50542 18.8142 3.5041 18.8943 3.52361 18.9704C3.54313 19.0466 3.58277 19.1162 3.63838 19.1718C3.69399 19.2274 3.76352 19.267 3.8397 19.2865C3.91589 19.306 3.99591 19.3047 4.07141 19.2827L6.58949 18.5483C6.87259 18.4657 7.13029 18.313 7.33878 18.1044L11.7371 13.7096Z"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      ),
      label: "Products Data",
      href: "/",
    },
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.9702 25.01C12.9702 22.59 11.2402 20.57 8.97021 20.12V17.45H23.0202V20.12C20.7402 20.58 19.0202 22.6 19.0202 25.01C19.0202 27.76 21.2602 30 24.0102 30C26.7602 30 29.0002 27.75 29.0002 25.01C29.0002 22.59 27.2802 20.57 25.0002 20.12V16.45C25.0002 15.9 24.5502 15.45 24.0002 15.45H17.2402V12.69C19.7402 12.22 21.6402 10.03 21.6402 7.4C21.6402 4.42 19.2102 2.01 16.2502 2.01C13.2902 2.01 10.8602 4.43 10.8602 7.4C10.8602 10.04 12.7602 12.23 15.2602 12.69V15.45H7.97021C7.41021 15.45 6.97021 15.9 6.97021 16.45V20.12C4.69021 20.58 2.97021 22.6 2.97021 25.01C2.97021 27.76 5.21021 30 7.96021 30C10.7102 30 12.9502 27.75 12.9502 25.01H12.9702ZM12.6702 7.4C12.6702 5.41 14.2802 3.8 16.2702 3.8C18.2602 3.8 19.8702 5.41 19.8702 7.4C19.8702 9.39 18.2502 11 16.2702 11C14.2902 11 12.6702 9.38 12.6702 7.4ZM27.0202 25.01C27.0202 26.66 25.6702 28.01 24.0202 28.01C22.3702 28.01 21.0202 26.66 21.0202 25.01C21.0202 23.36 22.3602 22.01 24.0202 22.01C25.6802 22.01 27.0202 23.35 27.0202 25.01ZM4.97021 25.01C4.97021 23.35 6.31021 22.01 7.97021 22.01C9.63021 22.01 10.9702 23.35 10.9702 25.01C10.9702 26.67 9.62021 28.01 7.97021 28.01C6.32021 28.01 4.97021 26.66 4.97021 25.01Z"
            fill="black"
          />
        </svg>
      ),
      label: "Feed Rules",
      href: "/under-development",
    },
    {
      icon: (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
          <path
            d="M19.0659 15.7923L12.0468 3.50896C11.8938 3.2389 11.6719 3.01428 11.4037 2.858C11.1355 2.70172 10.8306 2.61938 10.5202 2.61938C10.2098 2.61938 9.90494 2.70172 9.63674 2.858C9.36855 3.01428 9.1466 3.2389 8.99356 3.50896L1.97451 15.7923C1.81982 16.0602 1.7387 16.3642 1.73938 16.6736C1.74007 16.983 1.82253 17.2867 1.97842 17.5539C2.1343 17.8211 2.35806 18.0424 2.62702 18.1953C2.89598 18.3482 3.20057 18.4272 3.50993 18.4244H17.548C17.8559 18.4241 18.1583 18.3428 18.4248 18.1887C18.6913 18.0345 18.9125 17.813 19.0663 17.5463C19.2201 17.2796 19.3011 16.9771 19.301 16.6692C19.3009 16.3613 19.2198 16.0589 19.0659 15.7923Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5283 7.896V11.4055M10.5283 14.9153H10.5366"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: "Alerts",
      href: "/under-development",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 21L20.131 16.792C20.447 16.628 20.605 16.547 20.72 16.426C20.8219 16.3198 20.899 16.1925 20.946 16.053C21 15.894 21 15.717 21 15.361V7.53302M12 21L3.869 16.792C3.553 16.628 3.395 16.547 3.28 16.426C3.17814 16.3198 3.10097 16.1925 3.054 16.053C3 15.894 3 15.716 3 15.359V7.53302M12 21V11.937M21 7.53302L12 11.937M21 7.53302L12.73 3.25302C12.463 3.11502 12.33 3.04502 12.189 3.01802C12.0641 2.99399 11.9359 2.99399 11.811 3.01802C11.671 3.04502 11.537 3.11502 11.269 3.25302L3 7.53302M3 7.53302L12 11.937"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: "Orders",
      href: "/under-development",
      badge: "new",
    },
  ];

  const settingsItem = {
    icon: (
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
        <path
          d="M10.7212 1.75378H10.3351C9.86973 1.75378 9.4234 1.93866 9.09432 2.26774C8.76524 2.59682 8.58037 3.04315 8.58037 3.50854V3.66647C8.58005 3.97419 8.49882 4.27642 8.34482 4.54283C8.19083 4.80925 7.96948 5.03048 7.70299 5.18434L7.32571 5.40369C7.05895 5.5577 6.75636 5.63878 6.44833 5.63878C6.14031 5.63878 5.83771 5.5577 5.57095 5.40369L5.43934 5.3335C5.03668 5.10122 4.55831 5.03821 4.10924 5.15829C3.66016 5.27837 3.27709 5.57174 3.0441 5.97398L2.85107 6.30739C2.6188 6.71005 2.55578 7.18842 2.67587 7.6375C2.79595 8.08657 3.08931 8.46965 3.49156 8.70264L3.62317 8.79038C3.88838 8.94349 4.1089 9.16334 4.26282 9.42808C4.41674 9.69282 4.4987 9.99324 4.50055 10.2995V10.7469C4.50177 11.0561 4.42128 11.3602 4.2672 11.6283C4.11313 11.8964 3.89095 12.119 3.62317 12.2736L3.49156 12.3525C3.08931 12.5855 2.79595 12.9686 2.67587 13.4177C2.55578 13.8668 2.6188 14.3451 2.85107 14.7478L3.0441 15.0812C3.27709 15.4834 3.66016 15.7768 4.10924 15.8969C4.55831 16.017 5.03668 15.954 5.43934 15.7217L5.57095 15.6515C5.83771 15.4975 6.14031 15.4164 6.44833 15.4164C6.75636 15.4164 7.05895 15.4975 7.32571 15.6515L7.70299 15.8708C7.96948 16.0247 8.19083 16.2459 8.34482 16.5123C8.49882 16.7788 8.58005 17.081 8.58037 17.3887V17.5466C8.58037 18.012 8.76524 18.4584 9.09432 18.7874C9.4234 19.1165 9.86973 19.3014 10.3351 19.3014H10.7212C11.1866 19.3014 11.6329 19.1165 11.962 18.7874C12.2911 18.4584 12.4759 18.012 12.4759 17.5466V17.3887C12.4763 17.081 12.5575 16.7788 12.7115 16.5123C12.8655 16.2459 13.0868 16.0247 13.3533 15.8708L13.7306 15.6515C13.9973 15.4975 14.2999 15.4164 14.608 15.4164C14.916 15.4164 15.2186 15.4975 15.4853 15.6515L15.617 15.7217C16.0196 15.954 16.498 16.017 16.9471 15.8969C17.3961 15.7768 17.7792 15.4834 18.0122 15.0812L18.2052 14.739C18.4375 14.3364 18.5005 13.858 18.3804 13.4089C18.2604 12.9598 17.967 12.5768 17.5647 12.3438L17.4331 12.2736C17.1654 12.119 16.9432 11.8964 16.7891 11.6283C16.635 11.3602 16.5545 11.0561 16.5558 10.7469V10.3082C16.5545 9.99904 16.635 9.695 16.7891 9.42691C16.9432 9.15882 17.1654 8.9362 17.4331 8.7816L17.5647 8.70264C17.967 8.46965 18.2604 8.08657 18.3804 7.6375C18.5005 7.18842 18.4375 6.71005 18.2052 6.30739L18.0122 5.97398C17.7792 5.57174 17.3961 5.27837 16.9471 5.15829C16.498 5.03821 16.0196 5.10122 15.617 5.3335L15.4853 5.40369C15.2186 5.5577 14.916 5.63878 14.608 5.63878C14.2999 5.63878 13.9973 5.5577 13.7306 5.40369L13.3533 5.18434C13.0868 5.03048 12.8655 4.80925 12.7115 4.54283C12.5575 4.27642 12.4763 3.97419 12.4759 3.66647V3.50854C12.4759 3.04315 12.2911 2.59682 11.962 2.26774C11.6329 1.93866 11.1866 1.75378 10.7212 1.75378Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5292 13.1605C11.9829 13.1605 13.1613 11.9821 13.1613 10.5284C13.1613 9.07469 11.9829 7.89624 10.5292 7.89624C9.07548 7.89624 7.89703 9.07469 7.89703 10.5284C7.89703 11.9821 9.07548 13.1605 10.5292 13.1605Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Settings",
    href: "/under-development",
  };

  return (
    <aside
      className={`fixed left-0 top-[70px] h-[calc(100vh-70px)] bg-white border-r border-gray-200 shadow-sm flex flex-col justify-between  z-50 ${
        collapsed ? "w-[67px]" : "w-[220px]"
      }`}
    >
      <nav className="flex flex-col gap-2 pt-6 px-2">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.href;
          // For the Products item we add a hover-based flyout panel that appears
          // to the right of the sidebar. Wrap the Link and the flyout in a
          // common parent with `group` so hovering either keeps the flyout open.
          if (item.label === "Products Data") {
            return (
              <div key={index} className="relative">
                <div className="relative group">
                  <Link
                    to={item.href}
                    className={`flex items-center gap-3 transition-all rounded-[10px] h-[42px] px-2 ${
                      collapsed ? "justify-center" : "justify-start"
                    } ${isActive ? "bg-white hover-bg-parent" : "hover-bg-parent"} hover:shadow-sm`}
                  >
                    <div
                      className={`${isActive ? "text-[#4A5565]" : "text-[#4A5565]"}`}
                    >
                      {item.icon}
                    </div>

                    {item.badge && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#AD46FF]" />
                    )}

                    {!collapsed ? (
                      <span className="text-[13px] w-full font-medium text-[#101828] select-none flex items-center gap-2 justify-between">
                        {item.label}
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-[#6B7280] opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                        >
                          <path
                            d="M9 6l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    ) : null}
                  </Link>

                  {/* Flyout panel: visible when hovering the group. Keeps open when cursor
                      moves between the nav item and the panel because both are inside
                      the same `.group` wrapper. Render even when `collapsed` so hovering
                      the icon reveals the panel. */}
                  <div
                    className={`absolute top-0 ${collapsed ? "left-[66%]" : "left-[93%]"} ml-3 z-50 transition-all duration-200 ease-out pointer-events-none opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto`}
                  >
                    <div className="bg-white border border-gray-200 rounded-[10px] shadow-sm w-44 py-1">
                      <a
                        href="/#row-product-data"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = "/#row-product-data";
                          window.location.reload();
                        }}
                        className="block px-4 py-2 text-[13px] text-[#101828] hover:hover-bg"
                      >
                        Raw Product Data
                      </a>
                      <div className="">
                        <span className="block px-4 py-2 text-[12px] text-[#101828] ">
                          Channels:
                        </span>
                        <ul className="ml-3">
                          {channels.map((channel) => (
                            <li key={channel.id}>
                              <a
                                href={`/#${channel.id}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.location.href = `/#${channel.id}`;
                                  window.location.reload();
                                }}
                                className="block px-4 py-2 text-[13px] text-[#101828] hover:hover-bg"
                              >
                                <div className="flex items-center gap-2">
                                  <img
                                    className="w-5 h-5"
                                    src={channel.icon}
                                    alt={channel.label}
                                  />{" "}
                                  {channel.label}
                                </div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={index}
              to={item.href}
              className={`relative group flex items-center gap-3 transition-all rounded-[10px] h-[42px] px-2 ${
                collapsed ? "justify-center" : "justify-start"
              } ${isActive ? "bg-white hover-bg-parent" : "hover-bg-parent"} hover:shadow-sm`}
            >
              <div
                className={`${isActive ? "text-[#4A5565]" : "text-[#4A5565]"}`}
              >
                {item.icon}
              </div>

              {/* Badge */}
              {item.badge && (
                <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#AD46FF]" />
              )}

              {/* Label: visible when expanded, hidden when collapsed. Keep the hover tooltip for collapsed state. */}
              {!collapsed ? (
                <span className="text-[13px] font-medium text-[#101828] select-none">
                  {item.label}
                </span>
              ) : (
                <div className="absolute left-[51px] top-2 hidden group-hover:flex items-center bg-[#101828] text-white text-[13px] font-medium px-2 py-1 rounded whitespace-nowrap z-20">
                  {item.label}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="flex flex-col gap-4 pb-6 px-2">
        <Link
          to={settingsItem.href}
          className={`group relative flex items-center gap-3 rounded-[10px] h-[42px] px-2 ${
            collapsed ? "justify-center" : "justify-start"
          } hover-bg transition-colors`}
        >
          <div className="text-[#4A5565]">{settingsItem.icon}</div>
          {!collapsed ? (
            <span className="text-[13px] font-medium text-[#101828] select-none">
              {settingsItem.label}
            </span>
          ) : (
            <div className="absolute left-[51px] top-2 hidden group-hover:flex items-center bg-[#101828] text-white text-[13px] font-medium px-2 py-1 rounded whitespace-nowrap z-20">
              {settingsItem.label}
            </div>
          )}
        </Link>

        <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#ECECEC]">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M6.66666 1.66663V4.99996M13.3333 1.66663V4.99996M15.8333 3.33337H4.16667C3.24619 3.33337 2.5 4.07957 2.5 5.00004V16.6667C2.5 17.5872 3.24619 18.3334 4.16667 18.3334H15.8333C16.7538 18.3334 17.5 17.5872 17.5 16.6667V5.00004C17.5 4.07957 16.7538 3.33337 15.8333 3.33337ZM2.5 8.33337H17.5"
              stroke="#4D4D4D"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
}
