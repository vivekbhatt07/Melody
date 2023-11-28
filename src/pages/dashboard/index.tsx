import { NavLink } from "react-router-dom";
import { Dashboard as DashboardIcon } from "@mui/icons-material";
import { Button } from "@mui/material";
import LogoutIcon from "../../assets/images/logoutIcon";
import { TableProvider } from "../../components";

const Dashboard = () => {
  // const sidebarShadow = {
  //   boxShadow: "-1px 0px 0px 0px #0000000D",
  // };
  return (
    <div className="h-screen flex">
      <aside
        className="basis-1/6 flex flex-col justify-between"
        style={{ border: "1px solid #ddd" }}
      >
        <div>
          <h1
            style={{
              fontSize: "36px",
              lineHeight: "40px",
              fontWeight: 700,
              color: "#552583",
              padding: "32px 57px",
            }}
          >
            Logo
          </h1>
          <div>
            <NavLink
              to="/"
              className="flex items-center gap-1"
              style={({ isActive }) => ({
                display: "flex",
                fontWeight: 500,
                padding: "8px 24px",
                backgroundColor: isActive ? "#E6F7FF" : "#ffffff",
                color: isActive ? "#1890FF" : "#282828",
                borderRight: isActive ? "5px solid #1890FF" : "2px solid #fff",
              })}
            >
              <DashboardIcon sx={{ color: "#282828" }} />
              <span>Songs</span>
            </NavLink>
          </div>
        </div>
        <div className="mb-4">
          <Button
            variant="text"
            sx={{
              color: "#000000D9",
              textTransform: "capitalize",
              gap: "10px",
              width: "100%",
              justifyContent: "flex-start",
              paddingLeft: "24px",
            }}
          >
            {" "}
            <LogoutIcon />
            Logout
          </Button>
        </div>
      </aside>
      <main className="basis-5/6">
        {/* HEAD */}
        <div className="flex flex-col py-4 px-6 gap-4 outline-2 outline-[#ddd]">
          <div className="flex flex-row gap-2">
            <div
              className="text-[#00000073]"
              style={{ fontSize: "14px", lineHeight: "22px", fontWeight: 400 }}
            >
              First-level Menu
            </div>
            <div
              className="text-[#00000073] flex items-center"
              style={{ fontSize: "14px", lineHeight: "22px", fontWeight: 400 }}
            >
              <div>/</div>
              <div className="pl-2">Second-level Menu</div>
            </div>
            <div
              className="text-[#000000D9] flex items-center"
              style={{ fontSize: "14px", lineHeight: "22px", fontWeight: 400 }}
            >
              <div>/</div>
              <div className="pl-2">Current Page</div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              sx={{
                textTransform: "capitalize",
                color: "#000000",
                backgroundColor: "#FDB927",
                padding: "6px 16px",
                fontSize: "14px",
                lienHeight: "22px",
                fontWeight: 400,
                borderRadius: "2px",
                "&:hover": {
                  backgroundColor: "#FDA600",
                },
              }}
            >
              Add Songs
            </Button>
          </div>
        </div>
        {/* BODY */}
        <div>
          <TableProvider />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
