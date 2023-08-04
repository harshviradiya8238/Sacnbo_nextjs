import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Navbar from "../components/navbar/Index";
import ResponsiveAppBar from "../components/navbar/Index";

const BlankLayout = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      {pathname.includes("userProfile") && (
        <>
          <ResponsiveAppBar />
        </>
      )}
      {pathname.includes("userProfile") ? (
        <>
          <div style={{ marginTop: "100px" }}>
            <Box>{children}</Box>
          </div>
        </>
      ) : (
        <Box>{children}</Box>
      )}
    </>
  );
};

export default BlankLayout;
