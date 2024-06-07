import CustomFilter from "@/Components/CustomFilter/CustomFilter";
import Hero from "@/Components/Hero/Hero";
import SearchBar from "@/Components/SearchBar/SearchBar";


export default function Home() {
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

            <div className='home__filter-container'>
              <CustomFilter /> 
              {/* <CustomFilter title='fuel' options={fuels} />
              <CustomFilter title='year' options={yearsOfProduction} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
