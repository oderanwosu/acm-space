export default function FullscreenSlideshow() {
  const src =
    "https://media.discordapp.net/attachments/966159717749653594/1381057917083451542/Kick_Off_Meeting_9-4-2024-31.jpg?ex=684621ea&is=6844d06a&hm=373e6180a9a9266ef3e060cde7de148e4a546f34501cdcd0ca2287592a547e1d&=&format=webp&width=2448&height=1632";

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <img src={src} alt="Background" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50" />
    </div>
  );
}
