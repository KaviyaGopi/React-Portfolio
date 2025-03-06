import { useState, useEffect } from "react";
import {
  HomeIcon,
  CodeIcon,
  BriefcaseIcon,
  MailIcon,
  LinkIcon,
  ChevronRightIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const menuItems = [
    {
      title: "About",
      link: "/",
      icon: <HomeIcon className="w-6" />,
      active: activePath === "/",
    },
    {
      title: "Skills",
      link: "/Skills",
      icon: <CodeIcon className="w-6" />,
      active: activePath === "/skills",
    },
    {
      title: "Projects",
      link: "/projects",
      icon: <BriefcaseIcon className="w-6" />,
      active: activePath === "/projects",
    },
    {
      title: "E-mail",
      link: "mailto://kaviyagopi11@gmail.com",
      icon: <MailIcon className="w-6" />,
      active: false,
      newtab: true,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/kaviya-gopi/",
      icon: <LinkIcon className="w-6" />,
      active: false,
      newtab: true,
    },
    {
      title: "GitHub",
      link: "https://github.com/KaviyaGopi",
      icon: <CodeIcon className="w-6" />,
      active: false,
      newtab: true,
    },
    {
      title: "Discord",
      link: "https://discord.com/users/945312492085735464",
      icon: <UserGroupIcon className="w-6" />,
      active: false,
      newtab: true,
    },
  ];

  const handleNavigation = (item) => {
    if (item.newtab) {
      window.open(item.link, "_blank");
    } else {
      window.location = item.link;
    }
  };

  return (
    <div className="fixed top-0 left-0 z-10 h-screen">
      <div
        className={`h-full bg-gray-900/80 backdrop-blur-md border-r border-gray-800/50 text-white shadow-xl relative flex flex-col transition-all duration-300 ease-in-out ${
          open ? "w-64" : "w-20"
        }`}
      >
        {/* Toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute -right-3 top-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full p-1 shadow-lg transform transition-all duration-200 hover:scale-110 focus:outline-none"
        >
          <div
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            <ChevronRightIcon className="w-5 h-5 text-white" />
          </div>
        </button>

        {/* Profile section */}
        <div className="pt-12 pb-8 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg mb-3">
            <span className="text-2xl font-bold text-white">KG</span>
          </div>
          <div
            className={`text-center transition-all duration-200 ${
              open ? "opacity-100 scale-100" : "opacity-0 scale-80"
            }`}
          >
            {open && (
              <div>
                <h3 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Kaviya Gopi
                </h3>
                <p className="text-xs text-gray-400">Full Stack Developer</p>
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div
          className={`${open ? "mx-6" : "mx-2"} border-t border-gray-700 mb-6`}
        ></div>

        {/* Menu items */}
        <ul className="flex-1 px-3">
          {menuItems.map((item, index) => (
            <li key={index} className="mb-2">
              <button
                onClick={() => handleNavigation(item)}
                className={`w-full flex items-center rounded-xl p-3 transition-all duration-200 group
                  ${
                    item.active
                      ? "bg-gradient-to-r from-purple-600/20 to-indigo-600/20 text-purple-400"
                      : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
                  }`}
              >
                <div
                  className={`${
                    item.active
                      ? "text-purple-400"
                      : "text-gray-400 group-hover:text-white"
                  } transition-colors duration-200`}
                >
                  {item.icon}
                </div>
                <span
                  className={`ml-4 font-medium transition-all duration-200 ${
                    open
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2 hidden"
                  }`}
                >
                  {item.title}
                </span>
                {item.active && open && (
                  <div className="ml-auto w-1.5 h-6 rounded-full bg-gradient-to-b from-purple-500 to-indigo-600"></div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
