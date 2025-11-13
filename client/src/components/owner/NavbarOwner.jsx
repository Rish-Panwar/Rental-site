import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'
import { assets } from '../../assets/assets'

const NavbarOwner = () => {
    const {user} = useAppContext()
  return (
    <div className='flex items-center justify-between px-6 md:px-10 bg-[#E8F9FF] py-4 h-20 text-gray-500 border border-gray-400 relative transition-all'>
      <Link to='/'>
        <img src={assets.logo} alt="logo" className="h-fit" />
      </Link>
      <p className="font-semibold">Welcome, {user?.name || "Owner"}</p>
    </div>
  )
}

export default NavbarOwner
