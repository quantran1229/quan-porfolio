import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import {
  VscDesktopDownload
} from "react-icons/vsc"

export const links = [
  {
    index: 0,
    title: "Find me on Github",
    href: "https://github.com/quantran1229",
    icon: <FaGithub />,
  },
  {
    index: 1,
    title: "Find me on LinkedIn",
    href: "https://www.linkedin.com/in/quantran1229",
    icon: <FaLinkedin />,
  },
  {
    index: 2,
    title: "Contact me via email",
    href: "mailto:quantran1229@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    index: 3,
    title: "Download my CVs",
    href: "https://public-bucket-quan.s3.ap-southeast-1.amazonaws.com/Resume-3.pdf",
    icon: <VscDesktopDownload />,
  }
];
