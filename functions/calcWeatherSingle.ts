import roll from './roll';
import months from '../data/months';
import watchTable from '../data/watchTable';
import calcWindSpeedDescription from './calcWindDirectionDescription';
import calcPrecipitation from './calcPrecipitation';
import calcSeason from './calcSeason';

interface ResponseObj {
  date: string;
  weather: string;
}

const calcWeatherSingle = async (watch: number, day: number, month: number): Promise<ResponseObj> => {
  const weatherRoll = roll(20);

  const monthString = months[month];

  const season = calcSeason(monthString);

  const watchString = watchTable[watch];

  // WEATHER PROPERTIES
  const weatherTable = await import(`../data/weatherTables/weatherTable${season}.js`); // may need file ext + make sure not all are loading
  const weatherProperties = weatherTable[weatherRoll];

  const { temperature, clouds, windDirection, windSpeedArr } = weatherProperties;
  let { precipitation } = weatherProperties;

  const { windSpeed, windDirectionDescription } = calcWindSpeedDescription(windSpeedArr, windDirection);

  // PRECIPITATION
  if (precipitation !== '') {
    precipitation = calcPrecipitation(precipitation, windSpeed);
  } else {
    precipitation = ' with ';
  }

  // FINAL DESCRIPTION
  const description = `${temperature} and ${clouds}${precipitation}${windDirectionDescription}`;

  const responseObj = {
    date: '',
    weather: '',
  };

  responseObj.date = `${monthString} ${day} - ${watchString}`;
  responseObj.weather = description;

  return responseObj;
};

export default calcWeatherSingle;