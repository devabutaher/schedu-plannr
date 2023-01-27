import { isLogicalExpression } from '@babel/types';
import { constants } from 'buffer';
import React, { useContext } from 'react'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineCopy, AiOutlineShareAlt } from 'react-icons/ai'
import { FiCopy } from 'react-icons/fi'
import { useQuery } from 'react-query';
import { AuthContext } from '../../../components/Contexts/AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const MySchedule = () => {

    const { user }: any = useContext(AuthContext)

    const { data: mySchedule = [], isLoading, refetch } = useQuery({
        queryKey: ['mySchedule', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/mySchedule?email=${user?.email}`);
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(mySchedule);

    return (
        <div className='flex justify-center'>
            <div className="grid md:grid-cols-2 gap-8 my-20">
                {
                    mySchedule.map((e: any) => {
                        const { title, location, link, name, slot, organization } = e;
                        return (
                            <div className="bg-white rounded-lg shadow-xl">
                                <div className="w-96 border-t-8 border-primary rounded-lg flex flex-col gap-6 p-4">
                                    <div className="flex justify-center gap-4">
                                        <div className="form-control w-52">
                                            <label className="cursor-pointer label">
                                                <input type="checkbox" title='ON | OFF' className="toggle toggle-primary" />
                                            </label>
                                        </div>
                                        <button
                                            className="text-gray-500 hover:text-black" title='Edit'>
                                            <AiOutlineEdit size={'2rem'} />
                                        </button>
                                        <button
                                            className="text-gray-500 hover:text-black" title='Delete'>
                                            <AiOutlineDelete size={'2rem'} />
                                        </button>
                                        <button
                                            className="text-gray-500 hover:text-black" title='Share'>
                                            <AiOutlineShareAlt size={'2rem'} />
                                        </button>
                                        <button
                                            className="text-gray-500 hover:text-black" title='Copy'>
                                            <AiOutlineCopy size={'2rem'} />
                                        </button>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <h1 className='text-2xl'>{title}</h1>
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-gray-600'>Host name: {name}</p>
                                            <p className='text-gray-600'>Organization: {organization}</p>
                                            <p className='text-gray-600'>Location: {location}</p>
                                            <p className='text-gray-600'>Meeting time: {slot}</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <a className='text-primary underline' href={link}>/Schedule Link</a>
                                        <div className='flex gap-2 items-center p-2 border rounded-lg border-primary hover:bg-primary hover:text-white cursor-pointer text-sm'>
                                            <FiCopy size={'1rem'} />
                                            <span>Copy Link</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MySchedule