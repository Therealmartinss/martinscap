import marbleTexture from "@/assets/black-marble-texture.jpg";

const TexturedBackground = () => (
  <>
    {/* Marble texture */}
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `url(${marbleTexture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.5,
      }}
    />
    {/* Gradient overlay */}
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: "radial-gradient(ellipse at 50% 30%, transparent 0%, hsl(0 0% 4%) 70%)",
      }}
    />
    {/* Vignette */}
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        boxShadow: "inset 0 0 200px 60px hsl(0 0% 2%)",
      }}
    />
    {/* Grain overlay */}
    <div
      className="fixed inset-0 z-0 pointer-events-none grain-overlay"
      style={{ opacity: 0.03 }}
    />
    {/* Light sweep */}
    <div className="fixed inset-0 z-0 pointer-events-none light-sweep" />
  </>
);

export default TexturedBackground;
