import React, { useState } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
}

const mockVideos: Video[] = Array.from({ length: 10 }, (_, i) => ({
  id: `${i + 1}`,
  title: `Player ${i + 1}`,
  url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  thumbnail: `https://via.placeholder.com/300x200/${
    ["9b87f5", "7E69AB", "6E59A5", "5E49A5"][i % 4]
  }/FFFFFF?text=Player+${i + 1}`,
}));

const VideoCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const videosPerPage = 4;
  const totalVideos = mockVideos.length;

  const nextVideos = () => {
    setStartIndex((prev) =>
      Math.min(prev + videosPerPage, totalVideos - videosPerPage)
    );
  };

  const prevVideos = () => {
    setStartIndex((prev) => Math.max(prev - videosPerPage, 0));
  };

  const visibleVideos = mockVideos.slice(
    startIndex,
    startIndex + videosPerPage
  );

  if (!isVisible) {
    return (
      <div className="flex justify-center">
        <button
          onClick={() => setIsVisible(true)}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
        >
          Show Videos
        </button>
      </div>
    );
  }

  return (
    <div className="relative bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-lg border border-gray-700 shadow-xl p-4">
      {/* Cross button at top-right */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors text-xl"
        aria-label="Hide videos"
      >
        <AiOutlineClose />
      </button>

      {/* Carousel title */}
      <h2 className="text-lg font-semibold text-purple-400 mb-4">
        Live Streams
      </h2>

      {/* Left arrow fixed to the left */}
      <button
        onClick={prevVideos}
        disabled={startIndex === 0}
        className={`absolute top-1/2 left-2 transform -translate-y-1/2 z-10 p-2 rounded-full transition-colors ${
          startIndex === 0
            ? "bg-gray-700 text-gray-500 cursor-not-allowed"
            : "bg-purple-600 hover:bg-purple-700 text-white"
        }`}
        aria-label="Previous videos"
      >
        <AiOutlineLeft size={20} />
      </button>

      {/* Right arrow fixed to the right */}
      <button
        onClick={nextVideos}
        disabled={startIndex + videosPerPage >= totalVideos}
        className={`absolute top-1/2 right-2 transform -translate-y-1/2 z-10 p-2 rounded-full transition-colors ${
          startIndex + videosPerPage >= totalVideos
            ? "bg-gray-700 text-gray-500 cursor-not-allowed"
            : "bg-purple-600 hover:bg-purple-700 text-white"
        }`}
        aria-label="Next videos"
      >
        <AiOutlineRight size={20} />
      </button>

      {/* Video Row */}
      <div className="relative overflow-hidden">
        <div className="flex gap-4 transition-transform duration-300">
          {visibleVideos.map((video) => (
            <div
              key={video.id}
              className="flex-shrink-0 w-[calc(25%-12px)] relative group"
            >
              <video
                src={video.url}
                poster={video.thumbnail}
                className="w-full h-[180px] object-cover rounded-lg"
                controls
                aria-label={`Video: ${video.title}`}
              />
              <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-1 rounded text-xs text-white">
                {video.title}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  className="p-1 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
                  aria-label="Expand video"
                >
                  <span className="text-sm">⛶</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Indicator */}
      <div className="flex justify-center mt-3 space-x-2">
        {Array.from({ length: Math.ceil(totalVideos / videosPerPage) }).map(
          (_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i * videosPerPage)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === Math.floor(startIndex / videosPerPage)
                  ? "bg-purple-600 w-4"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default VideoCarousel;
