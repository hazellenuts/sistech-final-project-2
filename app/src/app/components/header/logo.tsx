import Image from 'next/image';
import logo from '/public/logo.png';

const Logo = () => {
  return (
    <div className="flex items-center">
      <a href="/">
        <Image src={logo} alt="Logo" width={180} height={50} />
      </a>
    </div>
  );
};

export default Logo;
