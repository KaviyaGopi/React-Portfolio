import React from "react";
import Nav from "../Components/Nav";

function Skills() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="text-start pt-36 flex flex-col fontFamily: Work Sans">
          <b className=" text-2xl pb-6 text-[#EC5500]">
            Programming Languages:
          </b>
          <ul>
            <li>
              <b className="text-gray-500">Python </b> (Highly Comfortable)
            </li>
            <li>
              <b className="text-gray-500">JavaScript </b> (Highly Comfortable)
            </li>
            <li>
              <b className="text-gray-500">Java </b> (Comfortable)
            </li>
            <li>
              <b className="text-gray-500">C </b> (Comfortable)
            </li>
          </ul>
          <b className="mt-12 pb-6 text-2xl text-[#EC5500]">
            Web Technologies:
          </b>
          <ul>
            <li>
              <b className="text-gray-500">HTML,CSS </b> (Highly Comfortable)
            </li>
            <li>
              <b className="text-gray-500">NodeJS </b> (Comfortable)
            </li>
            <li>
              <b className="text-gray-500">ReactJS </b> (Highly Comfortable)
            </li>
            <li>
              <b className="text-gray-500">Bootstrap </b> (Highly Comfortable)
            </li>
            <li>
              <b className="text-gray-500">Tailwind CSS </b> (Highly
              Comfortable)
            </li>
          </ul>
          <b className="mt-12 pb-6 text-2xl text-[#EC5500]">Database</b>
          <ul>
            <li>
              <b className="text-gray-500">MongoDB </b> (Highly Comfortable)
            </li>
            <li>
              <b className="text-gray-500">MySQL </b> (slightly Comfortable)
            </li>
          </ul>

          <b className="mt-12 pb-6 text-2xl text-[#EC5500]">Other Tools</b>
          <ul>
            <li>
              <b className="text-gray-500">Git </b> (Comfortable)
            </li>
            <li>
              <b className="text-gray-500">Figma </b> (Highly Comfortable)
            </li>
            <li>
              <b className="text-gray-500">Adobe Illustrator </b> (Comfortable)
            </li>
            <li>
              <b className="text-gray-500 mb-18">Adobe Photoshop </b>{" "}
              (Comfortable)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
