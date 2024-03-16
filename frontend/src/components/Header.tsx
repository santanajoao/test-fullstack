import Image from 'next/image';
import uolLogo from '/public/uol-logo.png';

export default function Header() {
  return (
    <header className="bg-[#333333] py-1 grid place-items-center">
      <Image
        src={uolLogo}
        alt="Logo da UOL"
        className="pointer-events-none select-none"
        priority
        width={100}
        height={100}
      />
    </header>
  );
}
