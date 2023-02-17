import 'react-day-picker/dist/style.css';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Outlet } from 'react-router-dom';
import ThirtyMins from '../ThirtyMins/ThirtyMins';

const TimeAndDate = ({ handleForm, setSlot, onChange, value }: any) => {
  console.log(value?.toString().slice(0, 15));
  return (
    <>
      <form onSubmit={handleForm}>
        <div className='flex justify-center gap-4 w-11/12 mx-auto'>
          <div className='lg:flex justify-center gap-8'>
            <div className='px-2'>
              <Calendar className='md:w-[40rem] bg-transparent w-full h-[25rem] font-bold text-lg' onChange={onChange} value={value} />
              {
                value ?
                  <h1 className='text-2xl text-center -mt-14'>{value.toString().slice(0, 15)}</h1>
                  :
                  <h1 className='text-2xl text-center -mt-14'>Please select a date</h1>
              }

            </div>
            <Outlet></Outlet>
          </div>
        </div>
      </form>
    </>
  );
};

export default TimeAndDate;