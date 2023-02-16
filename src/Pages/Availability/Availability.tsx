import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { AiOutlineDelete, AiOutlineSave } from 'react-icons/ai'
import { useQuery } from 'react-query';
import { AuthContext } from '../../components/Contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

type UserSubmitForm = {
    sunStart: any;
    sunEnd: any;
};

const Availability = () => {
    const { user }: any = useContext(AuthContext);
    const [availabilityList, setAvailabilityList] = useState([]);
    const [startTime, setStartTime] = useState('12:00');
    const [endTime, setEndTime] = useState('19:00');

    const {
        data = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["availability", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/availability`);
            const data = await res.json();
            console.log(data);
            setAvailabilityList(data)
            return data;
        },
    });
    console.log(availabilityList);

    const handleStatus = (e: any, id: string) => {

        setAvailabilityList((data: any) => data.map((el: any) => {

            if (el._id === id) {

                return { ...el, status: el.status === 'available' ? 'unavailable' : 'available' }
            } else {
                return el;
            }
        }))
    }
    console.log(availabilityList);
    const {
        register,
        handleSubmit
    } = useForm<UserSubmitForm>();
    const handleInfo = (e: any, id: any) => {
        if (e.target.name === 'sunStart') {
            setStartTime(e.target.value);
        }
        if (e.target.name === 'sunEnd') {
            setEndTime(e.target.value);
        }
        console.log(availabilityList);
        const ee = {
            start_time: startTime,
            end_time: endTime
        }
        console.log(ee);
        fetch(`http://localhost:5000/availability/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ee)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                // setStartTime(data);
                // setEndTime(data);
            })


    };
    if (isLoading) {
        return <Loading></Loading>
    }

    // refetch();
    return (
        <div className='py-8'>
            <h1 className="text-center text-4xl pb-8 font-semibold">
                Set Your <span className="text-primary">Weekly</span> Hours
            </h1>

            <form onSubmit={handleSubmit(handleInfo)}>

                {
                    !isLoading && availabilityList.map((availability: any, i: number) => {
                        const { day, start_time, end_time, status, _id } = availability;
                        // console.log(start_time);
                        // console.log(end_time);
                        return (
                            <div className='flex align-center gap-8 py-4' key={_id}>

                                <div className='w-28 flex gap-4 items-center'>
                                    <input
                                        // onClick={handleStatus}
                                        onChange={(e) => handleStatus(e, _id)}
                                        type="checkbox"
                                        checked={status === 'available'}
                                        className="checkbox checkbox-primary" />
                                    <span className='text-3xl'>{day}</span>
                                </div>


                                <div className='flex items-center justify-center gap-4 w-[26rem]'>
                                    {
                                        status === 'available' ? (
                                            <div className='flex gap-2 justify-center items-center'>
                                                <div className='tooltip' data-tip="Start Time">
                                                    <input
                                                        onChange={(e) => handleInfo(e, _id)}
                                                        name="sunStart"
                                                        type="time" value={start_time}
                                                        className="input input-bordered input-primary w-full max-w-xs text-2xl" />
                                                </div>

                                                <div className='border w-8 border-primary'></div>

                                                <div className='tooltip' data-tip="End Time">
                                                    <input
                                                        onChange={(e) => handleInfo(e, _id)}
                                                        name="sunEnd"
                                                        type="time"
                                                        value={end_time}
                                                        className="input input-bordered input-primary w-full max-w-xs text-2xl" />
                                                </div>
                                            </div>
                                        ) : <p className='text-3xl'>unavailable</p>
                                    }
                                </div>



                                <div className='flex gap-6 items-center justify-end w-40'>
                                    <button
                                        className="text-gray-500 hover:text-black tooltip"
                                        data-tip="Save"
                                    >
                                        <AiOutlineSave size={"2rem"} />
                                    </button>

                                    <button
                                        className="text-gray-500 hover:text-black tooltip"
                                        data-tip="Delete"
                                    >
                                        <AiOutlineDelete size={"2rem"} />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="flex justify-center py-4">
                    <button type='submit' className="btn text-white">Submit Save</button>
                </div>
            </form>
        </div>
    );
};
export default Availability;
