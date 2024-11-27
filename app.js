const getSleepHours = day => {
  switch (day.toLowerCase()) {
    case 'monday':
      return 8; // Example hours for Monday
    case 'tuesday':
      return 7; // Example hours for Tuesday
    case 'wednesday':
      return 6; // Example hours for Wednesday
    case 'thursday':
      return 5; // Example hours for Thursday
    case 'friday':
      return 8; // Example hours for Friday
    case 'saturday':
      return 9; // Example hours for Saturday
    case 'sunday':
      return 7; // Example hours for Sunday
    default:
      return 'Invalid day';
  }
};

const getActualSleepHours = () => 
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');


 const getIdealSleepHours = () => {
  const idealHours = 8;
 return idealHours * 7;
 };

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${actualSleepHours - idealSleepHours} hour(s) more sleep than needed.`);
  } else {
    console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week. Get some rest.`);
  }
};

calculateSleepDebt();






