"use client";

import { useState, Fragment, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';
import { SAFlag } from './language/SAFlag';
import { USFlag } from './language/USFlag';
import i18n from '@/i18n/config';




const options = [
    {
      id: 'ar',
      name: 'عربى - AR',
      value: 'ar',
      icon: <SAFlag />,
    },
    {
      id: 'en',
      name: 'English - EN',
      value: 'en',
      icon: <USFlag />,
    },

]
export default function LanguageSwitcher() {


  const currentSelectedItem = options[0];


  const [selectedItem, setSelectedItem] = useState(currentSelectedItem);
  
  useEffect(() => {
    if(localStorage.getItem("lang")){ 
      setSelectedItem(options.find(c=>c.value== localStorage.getItem("lang")))
      if(localStorage.getItem("lang") == "en"){
        document.body.dir ="ltr"
        i18n.changeLanguage("en");

    }
    else if(localStorage.getItem("lang") == "ar"){
        document.body.dir ="rtl"
        i18n.changeLanguage("ar");
    }
    
    }
    else {
    localStorage.setItem("lang","en");
    i18n.changeLanguage("en");
    }

  }, [])


  function handleItemClick(values: any) {
    setSelectedItem(values);
    if(values.value === "en"){
      localStorage.setItem("lang","en")
      window.location.reload()

  }
  else if(values.value === "ar"){
      localStorage.setItem("lang","ar")
      window.location.reload()
  }
}

  return (
    <Listbox value={selectedItem} onChange={handleItemClick}>
      {({ open }) => (
        <div className="relative z-10 lg:top-[1px]">
          <Listbox.Button className="relative w-full py-2 rounded-lg cursor-pointer text-brand-dark ltr:pl-3
           rtl:pr-3 ltr:pr-5 rtl:pl-5 ltr:text-left rtl:text-right focus:outline-none">
            <span className="flex items-center text-sm truncate lg:text-15px">
              <span className="w-5 h-5 overflow-hidden rounded-full ltr:mr-2 rtl:ml-2 shrink-0">
                {selectedItem?.icon}
              </span>
              <span className="leading-5 pb-0.5">{selectedItem.name}</span>
            </span>
            <span className="absolute inset-y-0 flex items-center pointer-events-none ltr:right-0 rtl:left-0">
              <FaChevronDown
                className="w-3 h-3.5 text-brand-dark opacity-40"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              static
              className="absolute ltr:right-0 rtl:left-0  lg:ltr:left-0 lg:rtl:right-0 w-full py-1 mt-1 
                top-full left-0 rounded-md bg-white transition-[top]
                duration-300 group-hover:opacity-100 dark:bg-dark 
                lg:top-[110%] lg:block lg:w-[250px] lg:p-4 
                lg:group-hover:top-full  shadow-dropDown 
                max-h-60 focus:outline-none text-sm min-w-[150px]"
            >
              {options?.map((option) => (
                <Listbox.Option
                  key={option.id}
                  className={({ active }) =>
                    `${
                      active
                        ? 'text-brand-dark bg-fill-dropdown-hover'
                        : 'bg-brand-light'
                    }
					          cursor-pointer relative py-2 px-3`
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <span className="flex items-center">
                      <span className="w-[22px] h-4 dark:hover:bg-dark hover:bg-body-color">{option?.icon}</span>
                      <span
                        className={`${
                          selected ? 'font-medium ' : 'font-normal'
                        } block truncate r ltr:ml-1.5 rtl:mr-1.5 text-sm pb-0.5`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${active && 'text-amber-600'}
                          absolute inset-y-0 ltr:left-0
                         hover:dark:bg-dark hover:bg-body-color rtl:right-0 flex  items-center ltr:pl-3 rtl:pr-3`}
                        />
                      ) : null}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
}
