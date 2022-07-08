import {FaShoppingBag} from 'react-icons/fa'

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-700 text-primary-content p-10 footer-center">
      <div className='w-100 flex flex-col justify-center'>
        <FaShoppingBag className='mb-4 text-4xl'/>
        <p>Copyrights &copy; {footerYear} All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;