import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs';
function Footer(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    return(
            <footer className='h-[10vh] relative left-0 py-5 bottom-0 flex flex-column sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20'>
                <section className='text-lg text-blue-300'>
                    Copyright {year} || All rights reserved
                </section>
                <section className='flex items-center justify-center gap-5 text-2xl text-white'>
                    <a className='hover:text-yellow-300 transition-all ease-in-out duration-300'>
                        <BsFacebook/>
                    </a>
                    <a className='hover:text-yellow-300 transition-all ease-in-out duration-300'>
                        <BsInstagram/>
                    </a>
                    <a className='hover:text-yellow-300 transition-all ease-in-out duration-300'>
                        <BsLinkedin/>
                    </a>
                    <a className='hover:text-yellow-300 transition-all ease-in-out duration-300'>
                        <BsTwitter/>
                    </a>
                </section>
            </footer>
    )
}
export default Footer;