import { useState } from "react";

const InteractiveButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false); // Change to true when ready

  const handleDownload = () => {
    if (!isDownloading && isButtonEnabled) {
      setIsDownloading(true);
      setTimeout(() => {
        setIsDownloading(false);
        const link = document.createElement("a");
        link.href = "/path/to/cv.pdf";
        link.download = "cv.pdf";
        link.click();
      }, 2000);
    }
  };

  return (
    <div className="relative">
      <div
        className=" glow-effect rounded-[20px] py-px inline-block"
        style={{
          "--glow-color": isHovered ? "rgb(56 238 255)" : "rgb(34 211 238)",
          "--animation-speed": isActive ? "2s" : "4s",
        }}
      >
        <button
          onClick={handleDownload}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
          onTouchStart={() => setIsActive(true)}
          onTouchEnd={() => setIsActive(false)}
          className={`hidden relative z-10 bg-gradient-to-b from-[#242124] to-[#2a292a] border border-[#363536] 
            text-cyan-400 text-lg px-8 py-4 rounded-xl font-bold transition-all duration-300 
            lg:flex items-center gap-3
            ${
              isDownloading
                ? "cursor-progress opacity-75"
                : "cursor-pointer hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
            }
            ${isActive ? "scale-95 translate-y-0.5" : "scale-100"}
            group`}
          style={{
            textShadow: "0 0 12px rgba(34,211,238,0.4)",
          }}
          aria-label={isDownloading ? "Downloading CV..." : "Download CV"}
        >
          {isDownloading ? (
            <div className="h-6 w-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition-transform duration-300 group-hover:translate-y-1`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          )}
        </button>

        {/* Tooltip for "No CV yet" */}
        {isHovered && !isButtonEnabled && (
          <div
            className="absolute top-full mt-2 left-25 transform -translate-x-1/2 bg-[#f4f4f2] text-black/90 text-sm font-bold px-5 py-2 rounded-lg shadow-md
            after:content-[''] after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-b-[#f4f4f2]"
          >
            CV Currently Unavailable
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveButton;
