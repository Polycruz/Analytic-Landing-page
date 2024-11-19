import React from "react";
import {
  polycruz_logo,
  discord,
  telegram,
  twitter,
  linkedIn,
  instagram,
  youtube,
  medium,
} from "../../asset";

const socialMediaLinks = [
  { href: "https://twitter.com/Polycruzz", src: twitter, alt: "Twitter", label: "Twitter" },
  { href: "https://discord.com/invite/aJzSfPPrkg", src: discord, alt: "Discord", label: "Discord" },
  { href: "https://t.me/polycruz", src: telegram, alt: "Telegram", label: "Telegram" },
  { href: "/#", src: instagram, alt: "Instagram", label: "Instagram" },
  { href: "/#", src: medium, alt: "Medium", label: "Medium" },
  { href: "https://www.linkedin.com/company/polycruz/", src: linkedIn, alt: "LinkedIn", label: "Linkedin" },
  { href: "/#", src: youtube, alt: "Youtube", label: "Youtube" },
];

const quickLinksArray = [
  { href: "https://docs.google.com/forms/d/e/1FAIpQLSfykKv3ZNRAbAo0qL6Z0444dC2znoE8tmCo1_KqTlLn_FVGmg/viewform", label: "Partnership" },
  { href: "https://docs.google.com/forms/d/e/1FAIpQLSeBhw0gJkcR8zVcZf9l5LWBRAuUv-CaZRg0z8IPPe8g1EgQpg/viewform", label: "Submit Drop" },
];

const informationArray = [
  { href: "https://polycruz.gitbook.io/polycruz-whitepaper/", label: "Whitepaper" },
  { href: "https://github.com/Polycruz", label: "Github" },
];

type Props = {};

const Footer = (props: Props) => {

  return (
    <div className="text-white bg-[#141416] mt-20">
      <div className="flex flex-col md:flex-row xl:p-0">

        <div className="md:w-1/2 m-5 px-0 xl:m-7 xl:px-7">
          <img src={polycruz_logo} height={140} width={140} alt="Polycruz" />
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-5 text-md my-5 text-light-text-color">
              <p>Polycruz emerges as a visionary force, reshaping the NFT landscape with cutting edge technology & bespoke features.</p>
              <p>Elevating digital ownership, it converges IP brand focus, seamless aggregation, minting & crowdfunding prowess, & trading finesse into an immersive NFT realm</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 md:m-5 px-5 md:px-0 xl:m-10 xl:px-10 ">
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <div className="my-5 text-light-text-color text-md grid grid-cols-2 md:grid-cols-none md:space-y-3">
                <ul className="space-y-3">
                  {
                    quickLinksArray.map((item, index) => (
                      <li key={index} className="hover:text-primary-light cursor-pointer">
                        <a href={item?.href}>{item?.label}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold">Information</h1>
              <div className="my-5 text-light-text-color text-md grid grid-cols-2 md:grid-cols-none md:space-y-3">
                <ul className="space-y-3">
                  {
                    informationArray.map((item, index) => (
                      <li key={index} className="hover:text-primary-light cursor-pointer">
                        <a href={item?.href}>{item?.label}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>

            <div>
              <h1 className="text-xl font-semibold">Contact Us</h1>
              <div className="my-5 text-light-text-color text-md grid grid-cols-2 md:grid md:grid-cols-1 md:space-y-3 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16">
                {/** Split the array into two columns */}
                {[0, 1].map((col) => (
                  <ul key={col} className="space-y-3">
                    {socialMediaLinks
                      .filter((_, index) => index % 2 === col) // Filter items for column
                      .map((link) => (
                        <li key={link?.label} className="flex items-center gap-1 hover:text-primary-light cursor-pointer">
                          <a href={link?.href} className="flex items-center gap-2">
                            <img
                              src={link?.src}
                              alt={link?.alt}
                              className="w-8 h-8 rounded-full"
                            />
                            {link?.label}
                          </a>
                        </li>
                      ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06] p-5">
        <div className="px-10">
          <div className="flex items-center justify-between">
            <p className="text-light-text-color">Copyright @ 2024 Polycruz All rights reserved.</p>
            <div className="flex">
              <a href="/#" className="px-3 text-light-text-color hover:text-primary-light">Privacy Policy</a>
              <a href="/#" className="px-3 border-l border-light-text-color/10 text-light-text-color hover:text-primary-light">Terms & Condition</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;