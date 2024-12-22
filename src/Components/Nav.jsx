import { useState } from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/outline";
import {
  HomeIcon,
  CodeIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  MailIcon,
  LinkIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const Menus = [
    {
      title: "About",
      link: "/",
      icon: <HomeIcon className="w-6" />,
      active: window.location.pathname === "/",
    },
    {
      title: "Skills",
      link: "/skills",
      icon: <CodeIcon className="w-6" />,
      active: window.location.pathname === "/skills",
    },
    {
      title: "Projects",
      link: "/projects",
      icon: <BriefcaseIcon className="w-6" />,
      active: window.location.pathname === "/projects",
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1sAKoyWHNWr4P2B7OwYanxq39vk1R8gyL/view?usp=sharing",
      icon: <DocumentTextIcon className="w-6" />,
      active: false,
      newtab: true,
    },
    {
      title: "E-mail",
      link: "mailto://kaviyagopi002@gmail.com",
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

  return (
    <div className="flex fixed top-0">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } h-screen bg-black bg-opacity-70 backdrop-blur-md text-white relative pl-6 duration-300 shadow-lg`}
      >
        <ChevronDoubleRightIcon
          className={`absolute cursor-pointer rounded-full bg-white text-black -right-4 top-16 w-8 h-8 border-2 border-gray-400 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center gap-x-4 ml-6 pt-14">
          <div
            className={`bg-[#B85839] text-white rounded-xl p-2 font-bold text-lg duration-300 ${
              !open && "scale-0"
            }`}
          >
            Kaviya Gopi
          </div>
        </div>
        <ul className="pt-14">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex items-center rounded-md p-2 cursor-pointer text-gray-300 hover:text-white hover:bg-gray-800 text-base gap-x-4 ${
                Menu.gap ? "mt-10" : "mt-4"
              } ${Menu.active ? "bg-gray-800 text-[#EC5500]" : ""}`}
              onClick={() => {
                Menu.newtab
                  ? window.open(Menu.link, "_blank")
                  : (window.location = Menu.link);
              }}
            >
              <span>{Menu.icon}</span>
              <span className={`${!open && "hidden"} origin-left duration-300`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
