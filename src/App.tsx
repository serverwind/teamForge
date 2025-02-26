import { AppRoutes } from "./routes/Router";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <main className="bg-lightestGrey1">
      <Provider store={store}>
      <AppRoutes />
      </Provider>
    </main>
  );
}

export default App;
