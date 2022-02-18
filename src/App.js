import Page from "./sections/Page";
import {Route, Routes, HashRouter} from "react-router-dom";
import Cv from "./sections/Cv";
import FeedbackFull from "./sections/FeedbackFull";

function App() {
  return (
    <div className="App">
        <Page>
            <HashRouter>
                <Routes>
                    <Route exact path="*" element={<Cv />} />
                    <Route exact path="/feedback" element={<FeedbackFull />} />
                </Routes>
            </HashRouter>
        </Page>
    </div>
  );
}

export default App;
