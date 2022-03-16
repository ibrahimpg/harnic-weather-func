import roll from './roll';

const calcPrecipitation = (precipitation: string, windSpeed: string) => {
  if (precipitation === 'Fog or Mist') {
    if (windSpeed === 'Calm') {
      if (roll(2) === 1) {
        return ' with Fog and ';
      } else {
        return ' with Mist and ';
      }
    } else {
      return ' with ';
    }
  }

  if (precipitation === 'Rain Showers or Light Rain') {
    if (roll(2) === 1) {
      return ' with Rain Showers and ';
    } else {
      return ' with Light Rain and ';
    }
  }

  if (precipitation === 'Steady or Heavy Rain') {
    if (roll(2) === 1) {
      return ' with Steady Rain and ';
    } else {
      return ' with Heavy Rain and ';
    }
  }

  if (precipitation === 'Thunderstorms') {
    if (roll(100) <= 10) {
      return ' with Thunderstorms and Hail and ';
    } else {
      return ' with Thunderstorms ';
    }
  }

  if (precipitation === 'Steady Snow/Sleet') {
    if (roll(2) === 1) {
      return ' with Steady Snow and ';
    } else {
      return ' with Steady Sleet and ';
    }
  }

  if (precipitation === 'Snow/Sleet Flurries') {
    if (roll(2) === 1) {
      return ' with Snow Flurries and ';
    } else {
      return ' with Sleet Flurries and ';
    }
  }

  return ` with ${precipitation} and `;
};

export default calcPrecipitation;