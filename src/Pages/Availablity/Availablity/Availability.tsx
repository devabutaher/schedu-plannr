import React from 'react';

const Availability = () => {
    return (
        <div>

        </div>
    );
};

export default Availability;
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useQuery } from "react-query";

// type UserSubmitForm = {
//   sunStart: string;
//   sunEnd: string;
// };

// const Availability = () => {
//   const [availabilityList, setAvailabilityList] = useState([]);

//   const {
//     data = [],
//     isLoading,
//     refetch,
//   } = useQuery({
//     queryKey: ["availability"],
//     queryFn: async () => {
//       const res = await fetch(
//         `https://scheduplannr-server.vercel.app/availability`
//       );
//       const data = await res.json();
//       setAvailabilityList(data);
//       return data;
//     },
//   });

//   // console.log(availabilityList);

//   const handleStatus = (e: any, id: string) => {
//     setAvailabilityList((list: any) =>
//       list.map((el: any) => {
//         if (el._id === id) {
//           return {
//             ...el,
//             status: el.status === "available" ? "unavailable" : "available",
//           };
//         } else {
//           return el;
//         }
//       })
//     );
//   };

//   const { register, handleSubmit } = useForm<UserSubmitForm>();

//   const handleInfo = (e: any, id: any) => {
//     // e.preventDefault();
//     // const checked = e.target.value;
//     const ab = e.target.value;
//     const ee = {
//       start_time: ab,
//       // end_time: checked,
//       // role: ab
//     };
//     console.log(ab);
//     // fetch(`https://scheduplannr-server.vercel.app/availability/${id}`, {
//     //     method: 'PUT',
//     //     headers: {
//     //         'content-type': 'application/json'
//     //     },
//     //     body: JSON.stringify(ee)
//     // })
//     //     .then(res => res.json())
//     //     .then(data => {
//     //         console.log(data);
//     //     })
//     // const start_time = e.target.start_time.value
//     // const end_time = e.target.end_time.value

//     // console.log(end_time)
//   };

//   // refetch();
//   return (
//     <div className="py-8">
//       <h1 className="text-center text-4xl pb-8 font-semibold">
//         Set Your <span className="text-primary">Weekly</span> Hours
//       </h1>

//       <form onSubmit={handleSubmit(handleInfo)}>
//         {!isLoading &&
//           availabilityList.map((e: any, i: number) => {
//             const { day, start_time, end_time, status, _id } = e;
//             return (
//               <div className="flex align-center gap-8 py-4" key={_id}>
//                 <div className="w-28 flex gap-4 items-center">
//                   <input
//                     // onClick={handleStatus}
//                     onChange={(e) => handleStatus(e, _id)}
//                     type="checkbox"
//                     checked={status === "available"}
//                     className="checkbox checkbox-primary"
//                   />
//                   <span className="text-3xl">{day}</span>
//                 </div>

//                 <div className="flex items-center justify-center gap-4 w-[26rem]">
//                   {status === "available" ? (
//                     <div className="flex gap-2 justify-center items-center">
//                       <div className="tooltip" data-tip="Start Time">
//                         <input
//                           {...register("sunStart")}
//                           onChange={(e) => handleInfo(e, _id)}
//                           type="time"
//                           defaultValue={end_time}
//                           className="input input-bordered input-primary w-full max-w-xs text-2xl"
//                         />
//                       </div>

//                       <div className="border w-8 border-primary"></div>

//                       <div className="tooltip" data-tip="End Time">
//                         <input
//                           {...register("sunEnd")}
//                           onChange={(e) => handleInfo(e, _id)}
//                           type="time"
//                           defaultValue={end_time}
//                           className="input input-bordered input-primary w-full max-w-xs text-2xl"
//                         />
//                       </div>
//                     </div>
//                   ) : (
//                     <p className="text-3xl">unavailable</p>
//                   )}
//                 </div>

//                 {/* <div className='flex gap-6 items-center justify-end w-40'>
//                                     <button
//                                         className="text-gray-500 hover:text-black tooltip"
//                                         data-tip="Save"
//                                     >
//                                         <AiOutlineSave size={"2rem"} />
//                                     </button>

//                                     <button
//                                         className="text-gray-500 hover:text-black tooltip"
//                                         data-tip="Delete"
//                                     >
//                                         <AiOutlineDelete size={"2rem"} />
//                                     </button>
//                                 </div> */}
//               </div>
//             );
//           })}
//         <div className="flex justify-center py-4">
//           <button type="submit" className="btn text-white">
//             Submit Save
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Availability;
