import { useState } from "react";

import { ChevronDoubleRightIcon } from "@heroicons/react/outline";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const Menus = [
    { title: "About", link: "/", active: window.location.pathname === "/" },
    {
      title: "Skills",
      link: "/skills",
      active: window.location.pathname === "/skills",
    },
    {
      title: "Projects",
      link: "/projects",
      active: window.location.pathname === "/projects",
    },
    {
      title: "Resume",
      gap: true,
      link: "https://drive.google.com/file/d/1sAKoyWHNWr4P2B7OwYanxq39vk1R8gyL/view?usp=sharing",
      active: false,
      newtab: true,
    },
    {
      title: "E-mail",
      link: "mailto://kaviyagopi002@gmail.com",
      active: false,
      newtab: true,
    },
    {
      title: "LinkedIn",
      gap: true,
      link: "https://www.linkedin.com/in/kaviya-gopi/",
      active: false,
      newtab: true,
    },
    {
      title: "GitHub",
      link: "https://github.com/KaviyaGopi",
      active: false,
      newtab: true,
    },
    {
      title: "Discord",
      link: "https://discord.com/users/945312492085735464",
      active: false,
      newtab: true,
    },
  ];

  return (
    <div className="flex fixed top-0">
      <div
        className={`${
          open ? "w-72" : "w-20"
        }  h-screen bg-[#242424] text-white relative pl-6 duration-300`}
      >
        <ChevronDoubleRightIcon
          className={`absolute cursor-pointer rounded-full -right-3 top-16 w-7 fill-[#3E3E3E] ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 ml-10 pt-14 ">
          <h1
            className={` text-white bg-[#B85839] rounded-xl p-2 font-bold origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Kaviya Gopi
          </h1>
        </div>
        <ul className="pt-14 ml-16">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer text-gray-300 text-lg items-center gap-x-8 
              ${Menu.gap ? "mt-16" : "mt-8"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <span
                onClick={() => {
                  Menu.newtab
                    ? window.open(Menu.link)
                    : (window.location = Menu.link);
                }}
                className={`${!open && "hidden"} ${
                  Menu.active && "text-[#EC5500] "
                } origin-left duration-200 hover:text-[#EC5500]`}
              >
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
