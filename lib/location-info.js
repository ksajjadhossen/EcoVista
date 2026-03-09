export const getLocationData = async (lat, lon) => {
  try {
    const apiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data || null;
  } catch (error) {
    console.error("Error fetching location data:", error);
    throw error;
  }
};

export const getLocationLatLonList = async () => {
  try {
    // http:// যোগ করা হয়েছে
    const url = `http://localhost:3000/api/location`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching location coordinates:", error);
    return []; // এরর হলে খালি অ্যারে রিটার্ন করা নিরাপদ
  }
};
export const getLocationLatLon = async (location) => {
  try {
    const res = await fetch(
      `http:localhost:3000/api/location?location=${location}`,
    );
    const data = await res.json();
    return data || null;
  } catch (error) {
    console.error("Error fetching location coordinates:", error);
    throw error;
  }
};

export const getResolvedLatLon = async (location, lat, lon) => {
  console.log(location, lat, lon);
  if (lat && lon) {
    return { lat, lon };
  }

  const locationLatLon = await getLocationLatLon(location);
  console.log(locationLatLon);
  if (locationLatLon && locationLatLon.lat && locationLatLon.lon) {
    const lat = locationLatLon.lat;
    const lon = locationLatLon.lon;
    return { lat, lon };
  }
};
