

// function popUpDay() {
//     const daysSlice = sliceWeatherDay(weather.dataWth.list)
//     const itemSliceDaysPop = daysSlice[indexDay][0];
//      const items = [
//           {
//             icon_id: 'temp',
//             name: 'Температура',
//             value: ` ${Math.round(itemSliceDaysPop.main.temp)}° - ощущается как  ${Math.round(itemSliceDaysPop.main.feels_like)}°`,
//           },
//           {
//             icon_id: 'pressure',
//             name: 'Давление',
//             value: `${Math.round(itemSliceDaysPop.main.pressure)} мм ртутного столба `,
//           },
//           {
//             icon_id: 'precipitation',
//             name: 'Влажность',
//             value: `${itemSliceDaysPop.main.humidity} %`,
//           },
//           {
//             icon_id: 'wind',
//             name: 'Ветер',
//             value: `${Math.round(itemSliceDaysPop.wind.speed)} м/с `,
//           },
//         ];

//       const itemCom = items.map((el) => 
//       <div className="cardDayInfo" key={el.icon_id}>
//       <div className={el.icon_id} ></div>
//       <div className="nameDayInfo">{el.name}</div>
//       <div className="valueDayInfo">{el.value}</div>
//       </div>
      
//       )  
//     return (

//         <div className={`mainPopUpContainer ${active === false ? '' : 'active'}`} >
//             <div className="mainPopUp">
//                 <div className="degrees">{Math.round(itemSliceDaysPop.main.temp)}°</div>
//                 <div className="day">Сегодня</div>
//                 <div className="time mainCard">Время: </div>
//                 <div className="city mainCard">Город: {weather.dataWth.city.name}</div>
//                 <img className="weatherIcon" src={`http://openweathermap.org/img/wn/${itemSliceDaysPop.weather[0].icon}@2x.png`}></img>
//             </div>
//             <button className="closePopUp" onClick={closeTab}></button>
//             <div className="secondPopUp">
// {itemCom}
//             </div>
//         </div>
//     )
       
   
// }
// function degWind(deg) {
//   let direction =''
//     if(deg < 89) {direction = 'Северо-Восток'} 
// else if (deg < 179) {direction = 'Юго-Восток'}
// else if (deg < 269) {direction = 'Юго-Запад'}
// else if (deg < 360) {direction = 'Северо-Запад'}
// } 