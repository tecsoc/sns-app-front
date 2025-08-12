import { CiSearch } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import styles from "./layout.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.menu}>
        <FaHome />
        <CiSearch />
        <IoIosNotificationsOutline />
        <MdOutlineMessage />
      </div>
      {children}
    </>
  );
};

export default Layout;