import React from "react";
import { Link } from "@mui/material";
import { useSelector } from "react-redux";
import Image from "next/image";
import LogoDark from "../../../assets/images/logos/logo-dark.svg";
import LogoLight from "../../../assets/images/logos/logo-white.svg";
import LogoScanbo from "../../../assets/images/logos/dequiteyLogo.svg";

const LogoIcon = () => {
  const customizer = useSelector((state) => state.CustomizerReducer);
  return (
    <Link href="/">
      {customizer.activeMode === "dark" ? (
        <Image src={LogoScanbo} alt={LogoScanbo} />
      ) : (
        <Image src={LogoScanbo} alt={LogoScanbo} />
      )}
    </Link>
  );
};

export default LogoIcon;
