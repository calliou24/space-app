import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route } from "react-router-dom";


import './index.css';
import {App} from './App';
import Home from './routes/homeComponent/homeComponent'
import Crew from './routes/crew/crew'
import Destination from './routes/destinations/destination'
import Technology from './routes/technology/technology'

//destinations Components
import Moon from './routes/destinations/destinations/moon'
import Mars from './routes/destinations/destinations/mars'
import Titan from './routes/destinations/destinations/titan'
import Europa from './routes/destinations/destinations/europa'

//crew Components
import DouglasHurley from './routes/crew/crew/DouglasHurley';
import MarkShuttleworth from './routes/crew/crew/MarkShuttleworth';
import VictorGlover from './routes/crew/crew/VictorGlover';
import AnoushehAnsari from './routes/crew/crew/AnoushehAnsari';

//technology Components 
import Spaceport from './routes/technology/technologies/spacePort';
import Launchvehicle from './routes/technology/technologies/launch';
import Spacecapsule from './routes/technology/technologies/spaceCapsule';

import data from './assets/data.json'

ReactDOM.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="space-app/" element={<Home/>} />
        <Route className={({isActive}) => isActive ? "selected" : undefined} path="space-app/crew" element={<Crew data={data.crew} />}>

          <Route path="DouglasHurley" element={<DouglasHurley data={data.crew[0]} />}/>
          <Route path="MarkShuttleworth" element={<MarkShuttleworth data={data.crew[1]} />}/>
          <Route path="VictorGlover" element={<VictorGlover data={data.crew[2]} />}/>
          <Route path="AnoushehAnsari" element={<AnoushehAnsari data={data.crew[3]} />}/>

        </Route>
        <Route path="space-app/destination" element={<Destination data={data.destinations} />} >
          
          <Route path="moon" element={<Moon data={data.destinations[0]} />}/>
          <Route path="mars" element={<Mars data={data.destinations[1]} />}/>
          <Route path="europa" element={<Europa data={data.destinations[2]} />}/>
          <Route path="titan" element={<Titan data={data.destinations[3]} />}/>

        </Route>
        <Route path="space-app/technology" element={<Technology data={data.technology} />} >

          <Route path="Launchvehicle" element={<Launchvehicle data={data.technology[0]} />}/>
          <Route path="Spaceport" element={<Spaceport data={data.technology[1]} />}/>
          <Route path="Spacecapsule" element={<Spacecapsule data={data.technology[2]} />}/>

        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
