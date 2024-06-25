import {
  FacebookOutlined,
  InstagramOutlined,
  XOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import style from "./footer.module.css";
const socialNetworks = [
  {
    url: "https://instagram.com",
    img: <InstagramOutlined className={style.iconsI} />,
  },
  {
    url: "https://facebook.com",
    img: <FacebookOutlined className={style.iconsF} />,
  },
  {
    url: "https://twitter.com",
    img: <XOutlined className={style.iconsT} />,
  },
  {
    url: "https://youtube.com",
    img: <YoutubeOutlined className={style.iconsY} />,
  },
];

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        {socialNetworks.map((link) => (
          <Link to={link.url}>{link.img}</Link>
        ))}
      </div>
    </footer>
  );
};
export default React.memo(Footer);
