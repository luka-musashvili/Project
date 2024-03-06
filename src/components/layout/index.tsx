import { Link, Outlet } from "react-router-dom"
import Logo from '../../assets/logo.png';

const MainLayout = () => {
    return (
        <div>
            <div className="bg-[#616365] flex flex-wrap gap-4 justify-between items-center px-5 py-[6px]">
                <h5 className="text-white font-[13px]  md:whitespace-nowrap text-center md:text-start">იუსტიციის სახლის სერვისების მართვის ერთიანი სისტემა</h5>
                <div className="flex justify-between items-center gap-5">
                    <Link className="text-white" to="/">ადმინ ადმინაშვილი</Link>
                    <button className="bg-[#1e1e1e] px-[15px] py-[5px] border-none text-white">გასვლა</button>
                </div>
            </div>
            <div className="flex bg-[#e8eaec] border-b px-5 shadow">
                <ul className="flex">
                    <li className="">
                       <Link className="block px-5 py-3 hover:bg-[#ffffff99] text-[#616365] text-[13px] h-10" to="#">მთავარი</Link>
                    </li>
                    <li className="">
                       <Link className="block px-5 py-3 hover:bg-[#ffffff99] text-[#616365] text-[13px] h-10" to="#">მთავარი</Link>
                    </li>
                    <li className="">
                       <Link className="block px-5 py-3 hover:bg-[#ffffff99] text-[#616365] text-[13px] h-10" to="#">მთავარი</Link>
                    </li>
                    <li className="">
                       <Link className="block px-5 py-3 hover:bg-[#ffffff99] text-[#616365] text-[13px] h-10" to="#">მთავარი</Link>
                    </li>
                </ul>
            </div>
            <div className="flex px-5">
                <div>
                    <img src={Logo}/>
                </div>

                <div className="flex gap-2">
                    <div className="border h-[50px] border-[#dfe1e3] border-solid">
                        <Link className="color-[#7ab800]" to="#">თემატური ჯგუფები</Link>
                    </div>
                    <div className="border h-[50px] border-[#dfe1e3] border-solid">
                        <Link className="color-[#7ab800]" to="#">თემატური ჯგუფები</Link>
                    </div>
                    <div className="border h-[50px] border-[#dfe1e3] border-solid">
                        <Link className="color-[#7ab800]" to="#">თემატური ჯგუფები</Link>
                    </div>
                </div>

                <div></div>
            </div>
            <Outlet />
        </div>
    )
}

export default MainLayout;