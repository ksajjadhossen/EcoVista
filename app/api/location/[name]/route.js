import { getLocationByName } from "../location-util";

export async function GET(request, { params }) {
  const { name } = params;
  console.log(name);
  const locationData = getLocationByName(name);
  return Response.json(locationData);
}
