import darkTexture from "@/assets/dark-texture.jpg";

const TexturedBackground = () => (
  <div
    className="fixed inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: `url(${darkTexture})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.6,
    }}
  />
);

export default TexturedBackground;
