import { useState } from "react";

const images = [
  {
    id: 1,
    src: "https://assets.grok.com/users/7409f20a-2b6a-47f5-a3dd-a0ca47c23d40/generated/b4dzc07Wtj4A7wgi/image.jpg",
    alt: "Virat Kohli",
  },
  {
    id: 2,
    src: "https://assets.grok.com/users/7409f20a-2b6a-47f5-a3dd-a0ca47c23d40/generated/cnZSdJyI81zTuCaM/image.jpg",
    alt: "Lewandowski",
  },
  {
    id: 3,
    src: "https://assets.grok.com/users/7409f20a-2b6a-47f5-a3dd-a0ca47c23d40/generated/8Ar5c9dOvkxOFxjL/image.jpg",
    alt: "Messi",
  },
  {
    id: 4,
    src: "https://assets.grok.com/users/7409f20a-2b6a-47f5-a3dd-a0ca47c23d40/generated/vPc8xLi87EodccHH/image.jpg",
    alt: "Batman",
  },
  {
    id: 5,
    src: "https://pbs.twimg.com/grok-img-share/1911131543927504896.jpg",
    alt: "Female-1",
  },
  {
    id: 6,
    src: "https://pbs.twimg.com/grok-img-share/1911131575808303104.jpg",
    alt: "Female-2",
  },
];

const AvatarModal = ({ onClose }: { onClose: () => void }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = () => {
    if (selected) {
      localStorage.setItem("avatar", selected);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-gray-900 rounded-xl p-6 w-full max-w-md text-white">
        <h2 className="text-xl font-bold mb-4 text-center text-purple-400">Choose your avatar</h2>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {images.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className={`cursor-pointer rounded-lg border-4 ${
                selected === img.src ? "border-purple-500" : "border-transparent"
              } hover:scale-105 transition`}
              onClick={() => setSelected(img.src)}
            />
          ))}
        </div>

        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white"
            onClick={handleSelect}
          >
            Select
          </button>
          <button
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded text-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarModal;
