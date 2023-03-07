
const randomVacationType = () => {
    const vacationType = [" Relax", "Adventure", "Sightseeing", "Cultural"];
    return vacationType[Math.floor(Math.random() * vacationType.length)];
}

const randomDestinations = (vacationType) => {
    const destinationRelax = ["Santorini", "Cebu", "Maldives", "Seyschelles"];
    const destinationAdventure = ["Hawai", "Bali", "Banguecoque", "Rottnest Island"];
    const destinationSightseeing = ["London", "Lisbon", "Barcelona", "New York"];
    const destinationCultural = ["Rome", "Athens", "Venezia", "Sidney"];

    switch (vacationType) {
        case 'Relax':
            return `You need a relaxing vacation to ${destinationRelax[Math.floor(Math.random() * destinationRelax.length)]}!`
        case 'Adventure':
            return `You should go on an adventure to ${destinationAdventure[Math.floor(Math.random() * destinationAdventure.length)]}!`
        case 'Sightseeing':
            return `You should explore a city like ${destinationSightseeing[Math.floor(Math.random() * destinationSightseeing.length)]}!`
        case 'Cultural':
            return `You should go on a vacation to learn about different cultures! Go to ${destinationCultural[Math.floor(Math.random() * destinationCultural.length)]}!`
        default:
            return 'Stay home!'
        }
}

const randomCompany = () => {
    const company = ["Boyfriend/Girlfriend", "Family", "Friends"];
    return company [Math.floor(Math.random() * company.length)];
}

const randomSeason = () => {
    const seasons = ['Summer', 'Spring', 'Autumn', 'Winter'];
    return seasons [Math.floor(Math.random() * seasons.length)];
}

const vacationPlanner = () => {
    const vacationType = randomVacationType();
    const destination = randomDestinations(vacationType);
    return `Your vacation should be a ${vacationType} vacation. ${destination} You should go with your ${randomCompany()} during ${randomSeason()}.`
}

console.log(vacationPlanner());