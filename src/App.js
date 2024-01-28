import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import About from "./container/About";
import Registration from "./container/Registration";
import ContactUs from "./container/Support";
import TechEvents from "./container/events/technicalEvents";
import NonTechEvents from "./container/events/NonTechnicalEvents";
import EventById from "./container/events/index";

const persistor = persistStore(store);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/event/:id" element={<EventById />} />
              <Route path="/tech-events" element={<TechEvents />} />
              <Route path="/non-tech-events" element={<NonTechEvents />} />
              <Route path="/support" element={<ContactUs />} />
              <Route path="/registration" element={<Registration />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
