const reachDestination = (distance, speed) => {
   const time = distance / speed;
   const roundTime = Math.ceil(time / 0.5) * 0.5;
   return `I should be there in ${roundTime} hours.`
};

module.exports = reachDestination;
