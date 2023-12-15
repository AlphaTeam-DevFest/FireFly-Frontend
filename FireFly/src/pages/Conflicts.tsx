import { TbLogin2 } from "react-icons/tb";
import { CgUserAdd } from "react-icons/cg";
import { SlSizeFullscreen } from "react-icons/sl";
type Props = {};
import logo from "../assets/Logo.svg";
import { useState } from "react";
import Navigation from "../Components/navigation";
const Conflicts = (props: Props) => {
  const [sizeUp, setSizeUp] = useState(false);
  const handleClick = () => {
    setSizeUp(!sizeUp);
  };

  return (
    <div>
      <div>
        <nav
          className={`flex justify-between content-center pr-20 pl-20 ${
            sizeUp && "hidden"
          }`}
        >
          <figure>
            <img src={logo} alt='logo' className='w-28' />
          </figure>
          <section className='flex gap-12 text-xl content-center flex-wrap'>
            <a>About us</a>
            <a className='flex gap-2'>
              <CgUserAdd className='text-3xl' />
              <p>Register</p>
            </a>
            <a className='flex gap-2 mr-12'>
              <TbLogin2 className='text-3xl' />
              <p>Login</p>
            </a>
          </section>
        </nav>
        <main
          className={`${!sizeUp && "demo"} ${sizeUp && "w-screen h-screen"} `}
        >
          <button onClick={handleClick} className='demoBTN'>
            <SlSizeFullscreen />
          </button>
          <iframe
            src='https://firefly-3d-earth-conflict.onrender.com'
            className='iframe'
          ></iframe>
        </main>
        <Navigation />
      </div>
    </div>
  );
};

export default Conflicts;
