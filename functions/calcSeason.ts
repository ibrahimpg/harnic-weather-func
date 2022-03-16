const calcSeason = (month: string) => {
  if (month === 'Nuzyael' || month === 'Peonu' || month === 'Kelen') return 'Spring';
  if (month === 'Nolus' || month === 'Larane' || month === 'Agrazhar') return 'Summer';
  if (month === 'Azura' || month === 'Halane' || month === 'Savor') return 'Fall';
  if (month === 'Ilvin' || month === 'Navek' || month === 'Morgat') return 'Winter';
  return 'Invalid Month - Season Not Found';
};

export default calcSeason;