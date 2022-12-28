import StudioCarousel from "../components/StudioCarousel";
import { studioImages } from "../data/studioImages";

export default function Studio() {
  return (
    <div className="studio-container">
      <div className="studio-header">
        <h1>Studio</h1>
      </div>

      <div className="studio-content">
        <StudioCarousel images={studioImages} />
      </div>

      <div className="gear-header">
        <h2>Gear</h2>
      </div>

      <div className="gear-content">
        <div className="recording">
          <h4>Recording</h4>

          <ul>
            <li>DAW: protools 12</li>
            <li>Stamchild (Fairchild clone)</li>
            <li>Distressor</li>
            <li>1176 warm</li>
            <li>8 channel art tube pre</li>
            <li>AVID protools carbon interface</li>
            <li>Presonus sceptre s8 monitors</li>
          </ul>
        </div>

        <div className="mics">
          <h4>Mics</h4>

          <ul>
            <li>STAM u87</li>
            <li>Neumann tlm102 Stereo Pair</li>
            <li>Sennheiser 421 x2</li>
            <li>Shure 57 x7</li>
            <li>Shure 58 x3</li>
            <li>Shure Beta 58</li>
            <li>Shure Beta 52</li>
            <li>Shure sm7b</li>
            <li>Beyerdynamic m88 tg</li>
            <li>Audio tech At4040</li>
            <li>Electro Voice re10</li>
            <li>Royer 121 Russian Clone Stereo Pair</li>
            <li>Golden age FC1 Stereo Pair</li>
          </ul>
        </div>

        <div className="guitar-amps">
          <h4>Guitar Amps</h4>

          <ul>
            <li>1974 Super Reverb</li>
            <li>Marshall 1986 Gold Face Jubilee</li>
            <li>Marshall 1984 jcm 800</li>
            <li>Dr Z Maz 18</li>
            <li>Morgan 30/800</li>
            <li>Orange Dual Terror</li>
            <li>Mesa Big Block 750</li>
          </ul>
        </div>

        <div className="guitars">
          <h4>Guitars</h4>

          <ul>
            <li>1974 Gibson Les Paul Custom</li>
            <li>1989 American Pro Stratocaster</li>
            <li>2017 American Pro Telecaster</li>
            <li>Warmoth/All Parts Stratocaster Build</li>
            <li>With 2002 American Pro Noiseless Pickups</li>
            <li>
              Fender 2010 Mexican Made Jazz Master With American Jazz Master
              Pick Ups and Wiring.
            </li>
            <li>Fender All Parts P Bass With 62 Reissue Pickups</li>
            <li>Fender Mexican Made Mustang</li>
            <li>Martin d15</li>
            <li>Gibson 1964 LGO</li>
          </ul>
        </div>

        <div className="pedals">
          <h4>Pedals</h4>

          <ul>
            <li>Klone Clone Centaur</li>
            <li>Pedal Monsters Klone/Superbolt</li>
            <li>Blues Driver</li>
            <li>Swollen Pickle</li>
            <li>Dd20 Giga Delay</li>
            <li>Jhs Pink Panther</li>
            <li>Jhs Colour Box v1</li>
            <li>Small Clone Chorus</li>
            <li>Strymon Flint Reverb and Tremolo</li>
            <li>Dispatch Master Delay/Reverb</li>
            <li>Darkglass b3k v2</li>
          </ul>
        </div>

        <div className="drum-gear">
          <h4>Drum Gear</h4>

          <ul>
            <li>1964 Ludwig Maple Marching Snare 15×12</li>
            <li>Tama SLP Steal 14×8</li>
            <li>Sjc Brass 14×6.5</li>
            <li>Pork Pie Acrylic 14×5</li>
            <li>Mapex Mars Birch Kit K Series Zildjian 20” Ride x2</li>
            <li>K Dry Series Zildjian 14” Hi Hats</li>
            <li>A Custom Zildjian 20” Ride</li>
            <li>Sabian 24” Thin Ride</li>
            <li>TRX 24” Ride</li>
            <li>Zildjian A 24” Ping Ride</li>
            <li>A Custom Zildjian 17” Crash</li>
            <li>A Custom Zildjian 19” Thin Crash</li>
            <li>A Custom Zildjian 14” New Beat Hi Hats</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
