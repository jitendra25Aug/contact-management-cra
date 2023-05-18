export const formatNumber = (number) => {
    const newNumber = Number(number).toLocaleString('en-IN');
    return newNumber;
}

export const url_graph = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all';
export const url_country_data = 'https://disease.sh/v3/covid-19/countries';
export const url_world_data = 'https://disease.sh/v3/covid-19/all';