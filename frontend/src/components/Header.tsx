import { FaMoon } from 'react-icons/fa';

const Header = () => {
    return (

        <div className="bg-bgSecondary w-full h-[70px] rounded-lg flex items-center px-6">
            <div className="flex-grow" />
            <FaMoon className="text-xl text-white" />
        </div>

    );
}

export default Header;
