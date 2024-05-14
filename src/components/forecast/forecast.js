import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } 
from "react-accessible-accordion";
import "../forecast/forecast.css";
const WEEK_DAYS=['Sunday','Monday','Tuesday','Wednesday', 'Thursday' , 'Friday',  'Saturday'];

const Forecast = ({data}) => {
const dayInAWeek =new Date().getDay();
const forecastDays = WEEK_DAYS.slice(dayInAWeek,WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}></img>
                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                    
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-items-grid-item">
                                    <label>Pressure</label>
                                    <label>{Math.round(item.main.pressure)} kpa</label>
                                </div>
                                <div className="daily-items-grid-item">
                                    <label>Humidity</label>
                                    <label>{Math.round(item.main.humidity)}%</label>
                                </div>
                                <div className="daily-items-grid-item">
                                    <label>Feels_like</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                                <div className="daily-items-grid-item">
                                    <label>Sea_level</label>
                                    <label>{Math.round(item.main.sea_level)}m</label>
                                </div>
                                <div className="daily-items-grid-item">
                                    <label>Wind</label>
                                    <label>{Math.round(item.wind.speed)}m/s</label>
                                </div>
                                <div className="daily-items-grid-item">
                                    <label>Clouds</label>
                                    <label>{Math.round(item.clouds.all)}%</label>
                                </div>

                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}


            </Accordion>
        </>
    );
};

export default Forecast;