import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 text-sm text-gray-500 bg-[#F0F3FF]'>
            <div className='flex flex-wrap justify-between items-start gap-8 pb-6 pt-10'>
                <div>
                    <img src={assets.logo} alt="logo" className=' h-8 md:h-9' />
                    <p className='max-w-80 mt-3'>
                        Rent the best cars at the best prices. Experience the freedom of the open road with our premium car rental services.
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                        {/* Instagram */}
                        <a href="#"><img src={assets.instagram_logo} alt="instagram" className='w-5 h-5' /></a>
                        {/* Facebook */}
                       <a href="#"><img src={assets.facebook_logo} alt="facebook" className='w-5 h-5' /></a>
                        {/* Twitter */}
                        <a href="#"><img src={assets.twitter_logo} alt="twitter" className='w-5 h-5' /></a>
                        {/* Gmail */}
                       <a href="#"><img src={assets.gmail_logo} alt="Gmail" className='w-5 h-5' /></a>
                    </div>
                </div>

                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Browse Cars</a></li>
                        <li><a href="#">List your Car</a></li>
                        <li><a href="#">About Us</a></li>                        
                    </ul>
                </div>
                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Insurance</a></li>                        
                    </ul>
                </div>
                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li>999 Prime Wheels</li>
                        <li>Dehradun, Uttrakhand</li>
                        <li>+91 12345 67890</li>
                        <li>info@primewheels.com</li>                        
                    </ul>
                </div>         
            </div>
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li>|</li>
                    <li><a href="#">Terms</a></li>
                    <li>|</li>
                    <li><a href="#">Cookies</a></li>
                </ul>
            </div>
            
        </div>
  )
}

export default Footer
