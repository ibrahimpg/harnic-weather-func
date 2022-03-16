import roll from './roll';

const calcWindSpeedDescription = (windSpeedArr: string[], windDirection: string) => {
  const windSpeed = windSpeedArr[roll(3) - 1];
  if (windSpeed !== 'Calm') {
    return { windSpeed, windDirectionDescription: `${windSpeed} from the ${windDirection}` };
  } else {
    return { windSpeed, windDirectionDescription: 'no wind (calm)' };
  }
};

export default calcWindSpeedDescription;