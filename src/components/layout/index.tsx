import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Col, Divider, Row } from "antd";
import Search from "../search";
import clsx from "clsx";
import {
  FaSignOutAlt,
  FaComment,
  FaUserAlt,
  FaFileAlt,
  FaListAlt,
} from "react-icons/fa";
import { IconType } from "react-icons";

const pages = [
  { label: "მთავარი", to: "#" },
  { label: "პრობლემური პასუხები", to: "#" },
  { label: "მომხმარებლები", to: "#" },
  { label: "დახმარება", to: "#" },
];

const MainLayout = () => {
  return (
    <div>
      <Row
        align="middle"
        justify="space-between"
        className="bg-[#616365] px-5 py-[6px]"
      >
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <h5 className="text-white text-[13px] md:whitespace-nowrap text-center md:text-start">
            იუსტიციის სახლის სერვისების მართვის ერთიანი სისტემა
          </h5>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <div className="flex justify-between md:justify-end items-center gap-5">
            <Link className="flex items-center text-white" to="/">
              <FaUserAlt size={12} className="mr-1" />
              ადმინ ადმინაშვილი
            </Link>
            <button className="bg-[#1e1e1e] px-[15px] py-[5px] border-none text-white flex items-center">
              გასვლა
              <FaSignOutAlt className="ml-1" />
            </button>
          </div>
        </Col>
      </Row>
      <div className="flex flex-wrap bg-[#e8eaec] border-b px-5 shadow">
        <ul className="flex flex-wrap justify-center xs:justify-start">
          {pages.map(({ label, to }) => (
            <li className="">
              <Link
                className="block px-5 py-3 hover:bg-[#ffffff99] text-[#616365] text-[13px] h-10 font-bold"
                to={to}
              >
                {label}
              </Link>
            </li>
          ))}

          <li className="visible xs:hidden">
            <Link
              className="flex items-center px-5 py-3 hover:bg-[#ffffff99] text-[#616365] text-[13px] h-10"
              to="#"
            >
              <FaComment size={14} className="mr-1" />
              ჩათი
            </Link>
          </li>
        </ul>

        <div className="ml-auto hidden xs:block">
          <Link
            className="flex items-center px-5 py-3 bg-[#ffffff99] text-[#7ab800] text-[13px] h-10"
            to="#"
          >
            <FaComment color="#7ab800" size={15} className="mr-1" />
            ჩათი
          </Link>
        </div>
      </div>
      <Row className="px-5 py-4" gutter={[32, 8]} align="middle">
        <Col xs={{ span: 12 }} lg={{ span: 4 }}>
          <img src={Logo} />
        </Col>
        <Col
          sm={{ order: 3, span: 24 }}
          xs={{ order: 3, span: 24 }}
          md={{ order: 3, span: 24 }}
          lg={{ order: 3, span: 24 }}
          xl={{ order: 2, span: 12 }}
        >
          <Row gutter={[8, 8]}>
            <Col xs={{ span: 24 }} sm={{ span: 8 }}>
              <ServicesLink icon={FaFileAlt} />
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 8 }}>
              <ServicesLink icon={FaListAlt} />
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 8 }}>
              <ServicesLink />
            </Col>
          </Row>
        </Col>
        <Col
          xs={{ span: 12, order: 2 }}
          sm={{ span: 12, order: 2 }}
          md={{ span: 12, order: 2 }}
          lg={{ span: 20, order: 2 }}
          xl={{ span: 8, order: 2 }}
        >
          <div className="flex justify-end">
            <Search />
          </div>
        </Col>
      </Row>
      <Divider className="mb-[15px] mt-0 bg-[#dfe1e3]" />

      <Outlet />
    </div>
  );
};

export default MainLayout;

type ServicesLinkProps = {
  icon?: IconType;
};

const ServicesLink = ({ icon: Icon }: ServicesLinkProps) => {
  return (
    <Link
      className={clsx(
        "flex items-center justify-center text-center border text-primary h-[30px] sm:h-[50px] border-[#dfe1e3] border-solid flex-1 hover:text-white hover:bg-[#7ab800] hover:border-[#7ab800]",
        { "text-white bg-primary border-primary": false }
      )}
      to="#"
    >
      {Icon && <Icon className="mr-1" />}
      თემატური ჯგუფები
    </Link>
  );
};
