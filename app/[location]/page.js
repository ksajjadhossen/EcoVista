import LocationInfo from "@/components/LocationInfo";

const Page = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return (
    <LocationInfo
      location={location}
      lat={latitude}
      lon={longitude}
    ></LocationInfo>
  );
};

export default Page;
