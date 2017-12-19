export const getAttractions = async () => {
  try {
    const response = await fetch('/data/attractions.json');
    return response.json();
  } catch (err) {
    throw err;
  }
};

export const getAttractionById = async (id) => {
  try {
    const response = await fetch(`/data/attractions/${id}.json`);
    return response.json();
  } catch (err) {
    throw err;
  }
};
