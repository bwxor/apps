import './assets/js/fontawesome-all.js'

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import Spy from "./components/spy/Spy.tsx";
import AudioEssentials from "./components/audioessentials/AudioEssentials.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/spy" element={<Spy/>}/>
            <Route path="/audio" element={<AudioEssentials/>}/>
        </>
    )
)

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;