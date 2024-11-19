import React, { useState } from 'react';
import {
  polycruz_logo,
  discord,
  telegram,
  twitter,
  upArrow,
  downArrow,
} from "../../asset";

type DropdownOption = string;

const Navbar: React.FC = () => {

  const [isSolutionOpen, setSolutionOpen] = useState<boolean>(false);
  const [isDocsOpen, setDocsOpen] = useState<boolean>(false);
  const [isCommunityOpen, setCommunityOpen] = useState<boolean>(false);

  const toggleDropdown = (menu: 'solution' | 'docs' | 'community'): void => {
    if (menu === "solution") {
      setSolutionOpen(!isSolutionOpen);
      setDocsOpen(false);
      setCommunityOpen(false);
    } else if (menu === "docs") {
      setDocsOpen(!isDocsOpen);
      setSolutionOpen(false);
      setCommunityOpen(false);
    } else if (menu === "community") {
      setCommunityOpen(!isCommunityOpen);
      setSolutionOpen(false);
      setDocsOpen(false);
    }
  };

  const renderDropdown = (isOpen: boolean, options: DropdownOption[]): JSX.Element | null => {
    return isOpen ? (
      <div className="absolute w-full mt-10 origin-top-right bg-[#141416] divide-y divide-gray-100 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 border border-gray-600">
        <div className="py-1">
          <ul className="text-white">
            {options.map((option, index) => (
              <li
                key={index}
                className="flex items-center px-4 py-2 hover:text-[#A49BFF] cursor-pointer"
              >
                {option === "Whitepaper" ? (
                  <a href="https://polycruz.gitbook.io/polycruz-whitepaper/" target="_blank" rel="noopener noreferrer">
                    {option}
                  </a>
                ) : option === "Github" ? (
                  <a href="https://github.com/Polycruz" target="_blank" rel="noopener noreferrer">
                    {option}
                  </a>
                ) : option === "Partnership" ? (
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfykKv3ZNRAbAo0qL6Z0444dC2znoE8tmCo1_KqTlLn_FVGmg/viewform" target="_blank" rel="noopener noreferrer">
                    {option}
                  </a>
                ) : (
                  option
                )}
                {option === "Analytics" && (
                  <>
                    &nbsp;
                    <p className="bg-gray-800 text-[#A49BFF] px-2 rounded-xl text-sm mt-1">
                      Beta
                    </p>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ) : null;
  };

  return (
    <div
      className="py-5 px-4 md:px-[4rem] flex items-center justify-between"
      style={{ background: "black" }}
    >
      <div className="flex items-center gap-20">
        <img src={polycruz_logo} height={140} width={140} alt="Polycruz" />
        <div className="hidden md:flex relative">
          <ul className="flex gap-3 lg:gap-6 text-[#777e90] text-md font-medium">
            <li
              onClick={() => toggleDropdown("solution")}
              className={`cursor-pointer flex items-center gap-1 text-[#777E90] ${isSolutionOpen ? "border-b border-[#A49BFF] text-[#A49BFF]" : ""
                }`}
            >
              Solution
              <img
                src={isSolutionOpen ? upArrow : downArrow}
                alt=""
                className="mt-1 text-[#A49BFF]"
              />
            </li>
            {renderDropdown(isSolutionOpen, [
              "Develop",
              "Mint",
              "Build",
              "Fundraise",
              "Launch",
              "Analytics",
            ])}

            <li
              onClick={() => toggleDropdown("docs")}
              className={`cursor-pointer flex items-center gap-1 text-[#777E90] ${isDocsOpen ? "border-b border-[#A49BFF] text-[#A49BFF]" : ""
                }`}
            >
              Docs
              <img
                src={isDocsOpen ? upArrow : downArrow}
                alt=""
                className="mt-1 text-[#A49BFF]"
              />
            </li>
            {renderDropdown(isDocsOpen, [
              "Whitepaper",
              "Github",
              "Partnership",
              "Usecases",
              "Features",
            ])}

            <li
              onClick={() => toggleDropdown("community")}
              className={`cursor-pointer flex items-center gap-1 text-[#777E90] ${isCommunityOpen ? "border-b border-[#A49BFF] text-[#A49BFF]" : ""
                }`}
            >
              Community
              <img
                src={isCommunityOpen ? upArrow : downArrow}
                alt=""
                className="mt-1 text-[#A49BFF]"
              />
            </li>
            {renderDropdown(isCommunityOpen, [
              "Community Hub",
              "Events",
              "News & Blogs",
            ])}
          </ul>
        </div>
      </div>

      <div className="gap-3 text-[#777e90] text-md font-medium items-center hidden lg:flex">
        <span className="text-[#777E90]">Join our community</span>
        <a href="https://twitter.com/Polycruzz" target="_blank" rel="noopener noreferrer"><img src={twitter} height={36} width={36} alt="twitter" /></a>
        <a href="https://discord.com/invite/aJzSfPPrkg" target="_blank" rel="noopener noreferrer"><img src={discord} height={36} width={36} alt="Discord" /></a>
        <a href="https://t.me/polycruz" target="_blank" rel="noopener noreferrer"><img src={telegram} height={36} width={36} alt="telegram" /></a>
      </div>

      <div className="block lg:hidden">
        <button className="text-white">☰</button>
      </div>
    </div>
  );
};

export default Navbar;