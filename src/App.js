import AppRoutes from "./routes";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
import "@ui5/webcomponents-react/dist/Assets";
import "./globalStyles.scss";
import { Toaster } from "react-hot-toast";
//sap_horizon_dark
function App() {
  setTheme("sap_horizon_dark");
  return (
    <div className="App">
      <AppRoutes />
      <Toaster />
    </div>
  );
}

export default App;

// sap_fiori_dark

// sap_belize

// sap_belize_hcb

// sap_belize_hcw

// sap_horizon

// sap_horizon_dark

// sap_horizon_hcb

// sap_horizon_hcw
