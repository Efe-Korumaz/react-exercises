import { AiFillHome } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { AiTwotoneCar } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <AiFillHome size={40} style={{ marginRight: "10px" }} />
          </a>
        </li>
        ;
        <li>
          <a href="/">
            <AiTwotoneMail
              size={40}
              style={{ marginRight: "10px", marginTop: "40px" }}
            />
          </a>
        </li>
        <li>
          <a href="/">
            <AiTwotoneCar
              size={40}
              style={{ marginRight: "10px", marginTop: "40px" }}
            />
          </a>
        </li>
        <li>
          <a href="/">
            <AiOutlineSetting size={40} style={{ marginTop: "600px" }} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
