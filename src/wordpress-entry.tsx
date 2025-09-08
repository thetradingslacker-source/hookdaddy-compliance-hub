import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// WordPress ReactPress entry point
const renderApp = (containerId: string = 'hookdaddy-react-app') => {
  const container = document.getElementById(containerId);
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  }
};

// Auto-render if container exists
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});

// Export for manual initialization
declare global {
  interface Window {
    HookDaddyApp: {
      renderApp: (containerId?: string) => void;
    };
  }
}

window.HookDaddyApp = { renderApp };

export default renderApp;