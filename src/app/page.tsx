import CarCard from "@/Components/CarCard/CarCard";
import CustomFilter from "@/Components/CustomFilter/CustomFilter";
import Hero from "@/Components/Hero/Hero";
import SearchBar from "@/Components/SearchBar/SearchBar";
import { fetchCars } from "@/Util";


export default async function Home() {

  const allCars = await fetchCars()

  console.log(allCars);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;


  return (
    <>
      <div className="overflow-hidden">
        <Hero />

        <div className='mt-12 padding-x padding-y max-width' id='discover'>
          <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
            <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
            <p>Explore out cars you might like</p>
          </div>

          <div className='mt-12 w-full flex-between items-center flex-wrap gap-5'>
            <SearchBar />

            <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
              {/* <CustomFilter title='fuel' /> 
              <CustomFilter title='year' />  */}

            </div>
          </div>

          {/* cars data  */}
          <div>
            {!isDataEmpty ? (
              <section>
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
                  {
                    allCars?.map((car, i) => (<CarCard key={i} car={car} />))
                  }
                </div>
              </section>
            ) : (
              <div className="mt-16 flex justify-center items-center flex-col gap-2">
                <h2> Opps No Result</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
