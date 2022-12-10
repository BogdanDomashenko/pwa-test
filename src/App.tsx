import uniqu from "./uniqu";
import { withErrorHandler } from "@/error-handling";
import AppErrorBoundaryFallback from "@/error-handling/fallbacks/App";
import Pages from "@/routes/Pages";
import Header from "@/sections/Header";
import HotKeys from "@/sections/HotKeys";
import Notifications from "@/sections/Notifications";
import SW from "@/sections/SW";
import Sidebar from "@/sections/Sidebar";
import CssBaseline from "@mui/material/CssBaseline";
import { Fragment, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    uniqu();
  }, []);

  return (
    <Fragment>
      <CssBaseline />
      <Notifications />
      <HotKeys />
      <SW />
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Pages />
      </BrowserRouter>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
