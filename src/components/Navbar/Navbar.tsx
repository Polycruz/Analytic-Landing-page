import React, { useState } from 'react';
import {
  polycruz_logo,
  discord,
  telegram,
  twitter,
  upArrow,
  downArrow,
  communityIcon,
} from "../../asset";

type DropdownOption = string;

const Navbar: React.FC = () => {

  const [isSolutionOpen, setSolutionOpen] = useState<boolean>(false);
  const [isResourcesOpen, setResourcesOpen] = useState<boolean>(false);

  const toggleDropdown = (menu: 'solution' | 'resources'): void => {
    if (menu === "solution") {
      setSolutionOpen(!isSolutionOpen);
      setResourcesOpen(false);
    } else if (menu === "resources") {
      setResourcesOpen(!isResourcesOpen);
      setSolutionOpen(false);
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
                className="flex items-center px-4 py-2 hover:text-primary-light cursor-pointer"
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
                    <p className="bg-gray-800 text-primary-light px-2 rounded-xl text-sm mt-1">
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
          <ul className="flex gap-3 lg:gap-6 text-light-text-color text-md font-medium">
            <li
              onClick={() => toggleDropdown("solution")}
              className={`cursor-pointer flex items-center gap-1 text-light-text-color ${isSolutionOpen ? "border-b border-primary-light text-primary-light" : ""
                }`}
            >
              Solution
              <img
                src={isSolutionOpen ? upArrow : downArrow}
                alt="arrow"
                className="mt-1 text-primary-light"
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
              onClick={() => toggleDropdown("resources")}
              className={`cursor-pointer flex items-center gap-1 text-light-text-color ${isResourcesOpen ? "border-b border-primary-light text-primary-light" : ""
                }`}
            >
              Resources
              <img
                src={isResourcesOpen ? upArrow : downArrow}
                alt="arrow"
                className="mt-1 text-primary-light"
              />
            </li>
            {renderDropdown(isResourcesOpen, [
              "Whitepaper",
              "Github",
              "Partnership",
            ])}

          </ul>
        </div>
      </div>

      <div className="gap-3 text-light-text-color text-md font-medium items-center hidden lg:flex">
        <div className="flex items-center gap-2">
          <img
            src={communityIcon}
            alt="communityIcon"
            width={15}
          />
          <span className="text-light-text-color">Join our community</span>
        </div>
        <a href="https://twitter.com/Polycruzz" target="_blank" rel="noopener noreferrer"><img src={twitter} height={36} width={36} alt="twitter" /></a>
        <a href="https://discord.com/invite/aJzSfPPrkg" target="_blank" rel="noopener noreferrer"><img src={discord} height={36} width={36} alt="Discord" /></a>
        <a href="https://t.me/polycruz" target="_blank" rel="noopener noreferrer"><img src={telegram} height={36} width={36} alt="telegram" /></a>
        <button
          // onClick={connectWallet}
          className="px-10 py-2 rounded-md transition text-white bg-gradient-to-r from-primary to-purple"
        >
          Connect
        </button>
      </div>

      <div className="block lg:hidden">
        <button className="text-white">☰</button>
      </div>
    </div>
  );
};

export default Navbar;