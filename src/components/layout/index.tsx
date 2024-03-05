import { Link, Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <div>
            <div className="bg-[#616365] flex justify-between items-center px-5">
                <h5 className="text-white font-[13px]">იუსტიციის სახლის სერვისების მართვის ერთიანი სისტემა</h5>
                <div className="flex items-center gap-5">
                    <Link className="text-white" to="/">ადმინ ადმინაშვილი</Link>
                    <button className="bg-[#1e1e1e] px-[15px] py-[5px] border-none text-white">გასვლა</button>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default MainLayout;