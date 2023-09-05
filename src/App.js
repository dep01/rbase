import Router from "./route";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import  {ROOT_REDUCER} from "./redux";
const store = createStore(ROOT_REDUCER);
function App() {
  // console.log = function() {};
  // console.warn = function() {};
  // console.error = function() {};
  // console.debug = function(){};
  // console.
  return (
    <Provider store={store}>
      <div className="App">
          <Router />
      </div>
    </Provider>
  );
}
export default App;
