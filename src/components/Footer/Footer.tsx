import React from "react";
import {
  polycruz_logo,
  discord,
  telegram,
  twitter,
  linkedIn,
} from "../../asset";

type Props = {};

const Footer = (props: Props) => {

  return (
    <div className="text-white bg-[#141416] mt-20">
      <div className="flex flex-col md:flex-row xl:p-0">
        <div className="md:w-1/2 m-5 px-0 xl:m-7 xl:px-7">
          <img src={polycruz_logo} height={140} width={140} alt="Polycruz" />
          <div className="flex items-center justify-between">
            <div className="text-[#777E90] text-md my-5">
              <p>Copyright @ 2024 Polycruz All rights reserved.</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 md:m-5 px-5 md:px-0 xl:m-10 xl:px-10 ">
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold">POLYCRUZ</h1>
              <div className="my-5 text-[#777E90] text-md grid grid-cols-2 md:grid-cols-none md:space-y-3">
                <ul className="space-y-3">
                  <li className="hover:text-[#A49BFF] cursor-pointer">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfykKv3ZNRAbAo0qL6Z0444dC2znoE8tmCo1_KqTlLn_FVGmg/viewform">Partnership</a>
                  </li>
                  <li className="hover:text-[#A49BFF] cursor-pointer">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeBhw0gJkcR8zVcZf9l5LWBRAuUv-CaZRg0z8IPPe8g1EgQpg/viewform">Submit Drop</a>
                  </li>
                  <li className="hover:text-[#A49BFF] cursor-pointer">
                    <a href="https://drive.google.com/drive/folders/1mPVTeFzKbpc9Y_JrWtvP1gVk_vC8s01q?usp=drive_link">Brand Kit</a>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="hover:text-[#A49BFF] cursor-pointer">Careers</li>
                  <li className="hover:text-[#A49BFF] cursor-pointer">
                    <a href="https://polycruz.gitbook.io/polycruz-whitepaper/disclaimer">
                      Disclaimer
                    </a>
                  </li>
                  <li className="hover:text-[#A49BFF] cursor-pointer">Privacy Policy</li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold">SOCIAL MEDIA</h1>
              <div className="my-5 text-[#777E90] text-md grid grid-cols-2 md:grid md:grid-cols-1 md:space-y-3 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16">
                <ul className="space-y-3">
                  <li className="flex items-center gap-1 hover:text-[#A49BFF] cursor-pointer">
                    <a
                      href="https://twitter.com/Polycruzz"
                      className="flex items-center gap-1"
                    >
                      <img
                        src={twitter}
                        alt="Twitter"
                        className="w-8 h-8 border border-gray-600 rounded-full"
                      />
                      Twitter
                    </a>
                  </li>
                  <li className="flex items-center gap-1 hover:text-[#A49BFF] cursor-pointer">
                    <a
                      href="https://t.me/polycruz"
                      className="flex items-center gap-1"
                    >
                      <img
                        src={telegram}
                        alt="Telegram"
                        className="w-8 h-8 border border-gray-600 rounded-full"
                      />
                      Telegram
                    </a>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-1 hover:text-[#A49BFF] cursor-pointer">
                    <a
                      href="https://discord.com/invite/aJzSfPPrkg"
                      className="flex items-center gap-1"
                    >
                      <img
                        src={discord}
                        alt="Discord"
                        className="w-8 h-8 border border-gray-600 rounded-full"
                      />
                      Discord
                    </a>
                  </li>
                  <li className="flex items-center gap-1 hover:text-[#A49BFF] cursor-pointer">
                    <a
                      href="https://www.linkedin.com/company/polycruz/"
                      className="flex items-center gap-1"
                    >
                      <img
                        src={linkedIn}
                        alt="LinkedIn"
                        className="w-8 h-8 border border-gray-600 rounded-full"
                      />
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;