import { SearchMenuFecturerProps } from '@/Types'
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from 'next/image';

export default function SearchMenuFecturer({ manufacturer, setManuFacturer }: SearchMenuFecturerProps) {

    const [query, setQuery] = useState("")

    const manufacturers = [
        "Acura",
        "Alfa Romeo",
        "Aston Martin",
        "Audi",
        "Bentley",
        "BMW",
        "Buick",
        "Cadillac",
        "Chevrolet",
        "Chrysler",
        "Citroen",
        "Dodge",
        "Ferrari",
        "Fiat",
        "Ford",
        "GMC",
        "Honda",
        "Hyundai",
        "Infiniti",
        "Jaguar",
        "Jeep",
        "Kia",
        "Lamborghini",
        "Land Rover",
        "Lexus",
        "Lincoln",
        "Maserati",
        "Mazda",
        "McLaren",
        "Mercedes-Benz",
        "MINI",
        "Mitsubishi",
        "Nissan",
        "Porsche",
        "Ram",
        "Rolls-Royce",
        "Subaru",
        "Tesla",
        "Toyota",
        "Volkswagen",
        "Volvo",
    ];


    const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );



    return (
        <div className='flex-1 max-sm:w-full flex justify-start items-center'>
            <Combobox >
                <div className='relative w-full '>
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image
                            src='/car-logo.svg'
                            width={20}
                            height={20}
                            className='ml-4'
                            alt='car logo'
                        />
                    </Combobox.Button>

                    <Combobox.Input
                        className=" w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
                        placeholder='Search cars '
                        displayValue={(item: string) => item}
                        onChange={(event) => setQuery(event.target.value)}
                    />

                    <Transition
                        as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery("")} // Reset the search query after the transition completes
                    >
                        <Combobox.Options
                            className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                            static
                        >
                            {filteredManufacturers?.length === 0 && query !== "" ? (
                                <Combobox.Option
                                    value={query}
                                    className='cursor-default select-none py-2 pl-10 pr-4'
                                >
                                    Create "{query}"
                                </Combobox.Option>
                            ) : (
                                filteredManufacturers?.map((item) => (
                                    <Combobox.Option
                                        key={item}
                                        className={({ active }) =>
                                            `relative absolute mt-1 max-h-60 w-full overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${active ? "bg-blue-600 text-white" : "text-gray-900"
                                            }`
                                        }
                                        value={item}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                    {item}
                                                </span>

                                                {/* Show an active blue background color if the option is selected */}
                                                {selected ? (
                                                    <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-pribg-primary-purple"}`}
                                                    ></span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}
