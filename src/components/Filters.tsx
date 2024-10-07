import React, { memo } from "react";
import './Filters.css';
import {filterType} from '../utilities/types';

const facilities = [
    "Xinglong Station",
    "Thueringer Landessternwarte Tautenburg",
    "Okayama Astrophysical Observatory",
    "W. M. Keck Observatory",
    "Multiple Observatories",
    "Lick Observatory",
    "Gemini Observatory",
    "Subaru Telescope",
    "Mauna Kea Observatory",
    "European Space Agency (ESA) Gaia Satellite",
    "Paranal Observatory",
    "Kepler",
    "Haute-Provence Observatory",
    "McDonald Observatory",
    "Anglo-Australian Telescope",
    "Bohyunsan Optical Astronomical Observatory",
    "Transiting Exoplanet Survey Satellite (TESS)",
    "Roque de los Muchachos Observatory",
    "K2",
    "Wide-field Infrared Survey Explorer (WISE) Sat",
    "La Silla Observatory",
    "Calar Alto Observatory",
    "Hubble Space Telescope",
    "NASA Infrared Telescope Facility (IRTF)",
    "CoRoT",
    "Multiple Facilities",
    "Yunnan Astronomical Observatory",
    "Cerro Tololo Inter-American Observatory",
    "MEarth Project",
    "Very Long Baseline Array",
    "Acton Sky Portal Observatory",
    "Palomar Observatory",
    "HATNet",
    "HATSouth",
    "Kitt Peak National Observatory",
    "Las Campanas Observatory",
    "CHaracterising ExOPlanets Satellite (CHEOPS)",
    "European Southern Observatory",
    "Fred Lawrence Whipple Observatory",
    "Apache Point Observatory",
    "Atacama Large Millimeter Array (ALMA)",
    "Spitzer Space Telescope",
    "KELT",
    "KELT-South",
    "KELT-North",
    "KMTNet",
    "KOINet",
    "SPECULOOS Southern Observatory",
    "MOA",
    "Large Binocular Telescope Observatory",
    "Next-Generation Transit Survey (NGTS)",
    "Winer Observatory",
    "OGLE",
    "Arecibo Observatory",
    "Parkes Observatory",
    "Qatar",
    "Leoncito Astronomical Complex",
    "TrES",
    "Teide Observatory",
    "SuperWASP",
    "SuperWASP-South",
    "SuperWASP-North",
    "WASP-South",
    "United Kingdom Infrared Telescope",
    "Haleakala Observatory",
    "XO",
    "Lowell Observatory"
  ]

const discoverymethods = [
    "Radial Velocity",
    "Imaging",
    "Eclipse Timing Variations",
    "Transit",
    "Transit Timing Variations",
    "Astrometry",
    "Microlensing",
    "Disk Kinematics",
    "Orbital Brightness Modulation",
    "Pulsation Timing Variations",
    "Pulsar Timing"
  ]

const Filters = ({filterState, setFilterState}: {filterState: filterType, 
    setFilterState: React.Dispatch<React.SetStateAction<filterType>>}) => { 
       
    return(
        <div className='main-filter-container'>
            <div className="discovery-method">
                <label className='labelita'>Discovery method: </label>
                <select
                    value={filterState.discoverymethod}
                    onChange={(e) => {
                        setFilterState(
                            {...filterState,
                                discoverymethod: (e.target as HTMLSelectElement).value}
                        )
                    }}
                >
                    <option value="">Choose...</option>
                    {discoverymethods.map((method, index) => <option key={index}>{method}</option>)}
                </select>
            </div>
            <div className="discovery-facility">
                <label className='labelita'>Discovery facility: </label>
                <select
                    value={filterState.disc_facility}
                    onChange={(e) => {
                        setFilterState(
                            {...filterState,
                                disc_facility: (e.target as HTMLSelectElement).value}
                        )
                    }}
                >
                    <option value="">Choose...</option>
                    {facilities.map((fac, index) => <option key={index}>{fac}</option>)}
                </select>
            </div>
            <div className='range-inputs'>
                <label className='labelita'>Year Discovered:</label>
                <div className="year-container">
                    <input type="number" min={1992} max={filterState.disc_year.max}
                        className="picker-input"
                        value={filterState.disc_year.min}
                        onChange={(e) => {
                            setFilterState(
                            (prevState) => {
                                return(
                                    {...prevState,
                                        disc_year:
                                            {...prevState.disc_year,
                                                min: e.target.value
                                            }
                                    }
                                )
                            }
                        )}}
                    />
                    <input type="number" min={filterState.disc_year.min} max={2024}
                        value={filterState.disc_year.max}
                        className="picker-input"
                        onChange={(e) => setFilterState(
                            (prevState) => {
                                return(
                                    {...prevState,
                                        disc_year:
                                            {...prevState.disc_year,
                                                max: e.target.value
                                            }
                                    }
                                )
                            }
                        )}
                    />
                </div>
            </div>
            <div className="range-inputs">
                <label className='labelita'>Distance to earth (light years):</label>
                <div className="system-distance-container">
                    <input type="number" min={0} max={filterState.sy_dist.max}
                        className="picker-input"
                        value={filterState.sy_dist.min}
                        onChange={(e) => setFilterState(
                            (prevState) => {
                                return(
                                    {...prevState,
                                        sy_dist:
                                            {...prevState.sy_dist,
                                                min: e.target.value
                                            }
                                    }
                                )
                            }
                        )}
                    />
                    <input type="number" min={filterState.sy_dist.min} max={85000}
                        value={filterState.sy_dist.max}
                        className="picker-input"
                        onChange={(e) => setFilterState(
                            (prevState) => {
                                return(
                                    {...prevState,
                                        sy_dist:
                                            {...prevState.sy_dist,
                                                max: e.target.value
                                            }
                                    }
                                )
                            }
                        )}
                    />
                </div>
            </div>
            <div className="range-inputs">
                <label className='labelita'>Galactic longitude (degrees):</label>
                <div className="gal-long-distance-container">
                    <input type="number" min={0} max={filterState.glon.max}
                        className="picker-input"
                        value={filterState.glon.min}
                        onChange={(e) => setFilterState(
                            (prevState) => {
                                return(
                                    {...prevState,
                                        glon:
                                            {...prevState.glon,
                                                min: e.target.value
                                            }
                                    }
                                )
                            }
                        )}
                    />
                    <input type="number" min={filterState.glon.min} max={360}
                        className="picker-input"
                        value={filterState.glon.max}
                        onChange={(e) => setFilterState(
                            (prevState) => {
                                return(
                                    {...prevState,
                                        glon:
                                            {...prevState.glon,
                                                max: e.target.value
                                            }
                                    }
                                )
                            }
                        )}
                    />
                </div>
            </div>
            <div className='range-inputs'>
                <label className='labelita'>Stellar Mass (vs Sun):</label>
                <div className="starmass-container">
                    <input type="number" min={0} max={filterState.st_mass.max}
                        value={filterState.st_mass.min}
                        className="picker-input"
                        onChange={(e) => setFilterState(
                            (prevState) => {
                                return(
                                    {...prevState,
                                        st_mass:
                                            {...prevState.st_mass,
                                                min: e.target.value
                                            }
                                    }
                                )
                            }
                        )}
                    />
                    <input type="number" min={filterState.st_mass.min} max={11}
                        value={filterState.st_mass.max}
                        className="picker-input"
                        onChange={(e) => setFilterState(
                            (prevState) => {
                                return(
                                    {...prevState,
                                        st_mass:
                                            {...prevState.st_mass,
                                                max: e.target.value
                                            }
                                    }
                                )
                            }
                        )}
                    />
                </div>
            </div>
            <div className='range-inputs'>
                <label className='labelita'>Stellar Radius (vs Sun):</label>
                <div className="starradius-container">
                    <input type="number" min={0} max={filterState.st_rad.max}
                        value={filterState.st_rad.min}
                        className="picker-input"
                        onChange={(e) => setFilterState(
                            (prevState) => {
                                return(
                                    {...prevState,
                                        st_rad:
                                            {...prevState.st_rad,
                                                min: e.target.value
                                            }
                                    }
                                )
                            }
                        )}
                    />
                    <input type="number" min={filterState.st_rad.min} max={89}
                        value={filterState.st_rad.max}
                        className="picker-input"
                        onChange={(e) => setFilterState(
                            (prevState) => {
                                return(
                                    {...prevState,
                                        st_rad:
                                            {...prevState.st_rad,
                                                max: e.target.value
                                            }
                                    }
                                )
                            }
                        )}
                    />
                </div>
            </div>
            <div className='range-inputs'>
                <label className='labelita'>Planet Mass (vs Earth):</label>
                <div className="planmass-container">
                    <input type="number" min={0} max={filterState.pl_masse.max}
                        value={filterState.pl_masse.min}
                        className="picker-input"
                        onChange={(e) => setFilterState(
                            (prevState) => {
                                return(
                                    {...prevState,
                                        pl_masse:
                                            {...prevState.pl_masse,
                                                min: e.target.value
                                            }
                                    }
                                )
                            }
                        )}
                    />
                    <input type="number" min={filterState.pl_masse.min} max={9535}
                        value={filterState.pl_masse.max}
                        className="picker-input"
                        onChange={(e) => setFilterState(
                            (prevState) => {
                                return(
                                    {...prevState,
                                        pl_masse:
                                            {...prevState.pl_masse,
                                                max: e.target.value
                                            }
                                    }
                                )
                            }
                        )}
                    />
                </div>
            </div>
            <div className='range-inputs'>
                <label className='labelita'>Planet Radius (vs Earth):</label>
                <div className="planradius-container">
                    <input type="number" min={0} max={filterState.pl_rade.max}
                        value={filterState.pl_rade.min}
                        className="picker-input"
                        onChange={(e) => setFilterState(
                            (prevState) => {
                                return(
                                    {...prevState,
                                        pl_rade:
                                            {...prevState.pl_rade,
                                                min: e.target.value
                                            }
                                    }
                                )
                            }
                        )}
                    />
                    <input type="number" min={filterState.pl_rade.min} max={34}
                        value={filterState.pl_rade.max}
                        className="picker-input"
                        onChange={(e) => setFilterState(
                            (prevState) => {
                                return(
                                    {...prevState,
                                        pl_rade:
                                            {...prevState.pl_rade,
                                                max: e.target.value
                                            }
                                    }
                                )
                            }
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

export default memo(Filters);