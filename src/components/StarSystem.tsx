import { memo } from 'react';
import './StarSystem.css'
import {filterType} from '../utilities/types';

const percentage_from_parsecs = (parsecs: number): number => {
    //3.63% = 5k ly = 1533.007 pa
	return ((parsecs*3.63)/1533.007)
}

const position_star = (gal_lat: number, gal_long: number, distance: number): {x: number, y: number} =>{
    //y increases towards bottom, x increases towards right
    var center_of_galaxy = {x: 50, y: 50}
    
    var sun_position = {
        x: center_of_galaxy.x,
        y: center_of_galaxy.y + percentage_from_parsecs(8000)
    }
    
    var star_position = {x: sun_position.x, y: sun_position.y}

    var galactic_plane_distance = distance*Math.cos(gal_lat*(Math.PI / 180));

    var gal_angle = gal_long;
    var galactic_x_distance = 0;
    var galactic_y_distance = 0;

    if(gal_angle >= 0 && gal_angle < 90){
        var galactic_x_distance = -galactic_plane_distance*Math.sin(gal_angle*(Math.PI / 180))
		var galactic_y_distance = -galactic_plane_distance*Math.cos(gal_angle*(Math.PI / 180))
        star_position = {x: star_position.x + percentage_from_parsecs(galactic_x_distance),
            y: star_position.y + percentage_from_parsecs(galactic_y_distance)}
    }
    else if(gal_angle >= 90 && gal_angle < 180){
        gal_angle = gal_angle - 90
		var galactic_x_distance = -galactic_plane_distance*Math.cos(gal_angle*(Math.PI / 180))
		var galactic_y_distance = galactic_plane_distance*Math.sin(gal_angle*(Math.PI / 180))
        star_position = {x: star_position.x + percentage_from_parsecs(galactic_x_distance),
            y: star_position.y + percentage_from_parsecs(galactic_y_distance)}
    }
    else if(gal_angle >= 180 && gal_angle < 270){
        gal_angle = gal_angle - 180
		var galactic_x_distance = galactic_plane_distance*Math.sin(gal_angle*(Math.PI / 180))
		var galactic_y_distance = galactic_plane_distance*Math.cos(gal_angle*(Math.PI / 180))
        star_position = {x: star_position.x + percentage_from_parsecs(galactic_x_distance),
            y: star_position.y + percentage_from_parsecs(galactic_y_distance)}
    }
    else if(gal_angle >= 270 && gal_angle < 360){
        gal_angle = gal_angle - 270
		var galactic_x_distance = galactic_plane_distance*Math.cos(gal_angle*(Math.PI / 180))
		var galactic_y_distance = -galactic_plane_distance*Math.sin(gal_angle*(Math.PI / 180))
		star_position = {x: star_position.x + percentage_from_parsecs(galactic_x_distance),
            y: star_position.y + percentage_from_parsecs(galactic_y_distance)}
    }
    return(star_position)
}

const StarSystem = ({star_sys, filterState}:{star_sys: Record<string, string>, filterState: filterType}) => {

    const systemVisible = (): boolean => {
        for(const [key, value] of Object.entries(filterState)){
            if(typeof value == "string"){
                if(value !== ""){
                    if(star_sys[key] !== value){
                        return false;
                    }
                }
            }
            else{
                if(key == "sy_dist"){
                    //input is in light year, sy_dist is in parsec
                    //divide ly between 3.26 to convert
                    if(parseFloat(value['min'])/3.2615637769 > parseFloat(star_sys[key]) 
                        || parseFloat(value['max'])/3.2615637769 < parseFloat(star_sys[key])){
                        return false;
                    }
                }
                else{
                    //some fields could be empty
                    if(parseFloat(value['min']) > 0 && star_sys[key] == ""){
                        return false;
                    }
                    if(parseFloat(value['min']) > parseFloat(star_sys[key]) 
                        || parseFloat(value['max']) < parseFloat(star_sys[key])){
                        return false;
                    }
                }
            }
        }
        return true;
    }

    if(star_sys){        

        const {x, y} = position_star(
            parseFloat(star_sys.glat),
            parseFloat(star_sys.glon),
            parseFloat(star_sys.sy_dist)
        );
        //19.22% is 8kpa = 26kly
        return(
            <div>
                <div
                    className='star-system'
                    style={{
                        top: y.toString()+"%",
                        left: x.toString()+"%",
                        visibility: systemVisible() ? "visible" : "hidden"
                    }}
                >
                </div>
            </div>
        )
    }
}

export default memo(StarSystem);