import roll from './roll';
import months from 'data/months';
import watchTable from 'data/watchTable';
import calcWindSpeedDescription from './calcWindDirectionDescription';
import calcPrecipitation from './calcPrecipitation';
import calcSeason from './calcSeason';

const calcWeather = (): string[][] => {
  const response: string[][] = [];

  let weatherRoll = roll(20);

  months.forEach((month) => {
    for (let i = 1; i < 31; i += 1) {
      const season = calcSeason(month);
      const date = `${i} of ${month} (${season})`;

      watchTable.forEach((watch: string) => {
        // VAR CHANGEROLL
        const changeRoll = roll(10);
        if (changeRoll === 1) weatherRoll -= 1;
        else if (changeRoll === 8 || changeRoll === 9) weatherRoll += 1;
        else if (changeRoll === 10) weatherRoll += 2;

        // wraparound
        if (weatherRoll > 20) weatherRoll -= 20;
        if (weatherRoll < 1) weatherRoll += 20; // change to < 0 to fit array indexing

        // WEATHER PROPERTIES
        const weatherProperties = weatherTable[season][weatherRoll];

        const { temperature, clouds, windDirection, windSpeedArr } = weatherProperties;
        let { precipitation } = weatherProperties;

        const { windSpeed, windDirectionDescription } = calcWindSpeedDescription(windSpeedArr, windDirection);

        // VAR PRECIPITATION - part of final desc.
        if (precipitation !== '') precipitation = calcPrecipitation(precipitation, windSpeed);
        else precipitation = ' with ';

        // FINAL DESCRIPTION CONCAT
        const description = `${temperature} and ${clouds}${precipitation}${windDirectionDescription}`;

        response.push([`${date} - ${watch} - ${description}`]);
      });
    }
  });
  return response;
};

export default calcWeather;