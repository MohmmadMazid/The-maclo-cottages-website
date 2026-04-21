import CottageCard from "@/components/CottageCard";

export const metadata = {
  title: "Cottages",
};
export default function Page() {
  const cottages=[]
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cottages
      </h1>

      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cottages, located right in the heart of the Himalayas.
        Imagine waking up to beautiful mountain views, spending your days exploring
        the dark forests around, or just relaxing in your private hot tub under
        the stars. Enjoy nature&#39;s beauty in your own little home away from home.
        The perfect spot for a peaceful, calm vacation. Welcome to paradise.
      </p>

      {cottages.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cottages.map((cottage) => (
            <CottageCard
              cottage={cottage}
              key={cottage.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}