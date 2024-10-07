import { memo } from "react";
import milkyImage from '../assets/Milky_Way_HQ.png';
import './MilkyWay.css'
import StarSystem from './StarSystem';
import {filterType} from '../utilities/types';

const MilkyWay = ({starData, filterState}:
    {starData: Record<string,string>[], filterState: filterType}) => {       
    
    return(
        <div
            className='milky-image-container'
        >
            <img
                className='milky-image'
                src={milkyImage}
            />
            {starData.map((data, index) => 
                <StarSystem star_sys={data} key={index} filterState={filterState} />)}
            <div className='title1'>
                EXOPLANET
            </div>
            <div className='title2'>
                EXPEDITION
            </div>
        </div>
    )
}

export default memo(MilkyWay);