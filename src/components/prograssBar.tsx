import React, { useState, useEffect } from "react";

const ProgressSidebar = () => {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    { id: "intro", title: "前言" },
    { id: "wallet-prep", title: "錢包準備" },
    { id: "wallet-connect", title: "連結錢包" },
    { id: "token-purchase", title: "購買藝術幣" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col mx-auto pt-40 sticky top-0">
      <div className="flex flex-col gap-14">
        {sections.map((section, index) => (
          <div key={section.id} className="flex items-center gap-4">
            {/* Vertical line */}
            {index !== sections.length - 1 && (
              <div
                className={`absolute w-[2px] ml-[9px] bg-[#D9D9D9]
                  ${activeSection === section.id ? "h-[60px] mt-[82px]" : "h-[52px] mt-[84px]"}`}
              />
            )}

            {/* Circle indicator */}
            <div
              className={`w-5 h-5 rotate-45 flex-shrink-0
                ${
                  activeSection === section.id
                    ? "bg-[#FFABAB]"
                    : "border-[#D9D9D9] border-2 bg-white"
                }`}
            />

            {/* Section title */}
            <a
              href={`#${section.id}`}
              className={`text-lg hover:text-[#007AFF] transition-colors
                ${
                  activeSection === section.id
                    ? "text-[#007AFF]"
                    : "text-[#87909D]"
                }`}
            >
              {section.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSidebar;
