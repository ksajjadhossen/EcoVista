import AQIComponent from "@/components/AQIComponent";

function Page({ params: { location }, searchParams: { latitude, longitude } }) {
  return <AQIComponent lat={latitude} lon={longitude} />;
}

export default Page;
