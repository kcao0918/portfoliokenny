import React from "react";

const ResumeButton = ({ title }: { title: string }) => {
  const handleDownload = () => {
    window.open("/ResumeKenny.pdf", "_blank");
  };

  return (
    <button
      className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 mt-20 z-10"
      onClick={handleDownload}
    >
      {title}
    </button>
  );
};

export default ResumeButton;
