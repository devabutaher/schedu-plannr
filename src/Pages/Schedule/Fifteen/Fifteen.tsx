import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../components/Contexts/AuthProvider/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";

const Fifteen = () => {
  const { setSlot, setSlotPm }: any = useContext(AuthContext);

  const [selectedAmSlots, setSelectedAmSlots] = useState<any>([])
  const [selectedPmSlots, setSelectedPmSlots] = useState<any>([])

  //fetch data from AM slots
  const { data: fifteenMinsAm, isLoading } = useQuery({
    queryKey: ["fifteenMinsAM"],
    queryFn: async () => {
      const res = await fetch(
        "https://scheduplannr-server.vercel.app/fifteenMinsAM"
      );
      const data = res.json();
      return data;
    },
  });

  //fetch data from PM slots
  const { data: fifteenMinsPm } = useQuery({
    queryKey: ["fifteenMinsPM"],
    queryFn: async () => {
      const res = await fetch(
        "https://scheduplannr-server.vercel.app/fifteenMinsPM"
      );
      const data = res.json();
      return data;
    },
  });

  // For Am
  const handleAm = (slot: any) => {
    if (selectedAmSlots.indexOf(slot) === -1) {
      setSelectedAmSlots((slots: any) => [...slots, slot])
    } else {
      setSelectedAmSlots((slots: any) => {
        return slots.filter((sl: any) => sl !== slot)
      })
    }
    const arr = [...selectedAmSlots, slot];
    setSlot(arr);
  }

  //For Pm
  const handlePm = (slot: any) => {
    if (selectedPmSlots.indexOf(slot) === -1) {
      setSelectedPmSlots((slots: any) => [...slots, slot])
    } else {
      setSelectedPmSlots((slots: any) => {
        return slots.filter((sl: any) => sl !== slot)
      })
    }
    const arr = [...selectedPmSlots, slot];
    setSlotPm(arr);
  }

  //loading
  if (isLoading) {
    return (
      <div className="w-[33rem] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <div className="h-[25rem] lg:py-0 py-12">
        <h1 className="text-center text-2xl mb-4 text-primary -mt-2">
          Please Select A Time Slot
        </h1>

        <div className="flex justify-around ">
          <div className="flex flex-col text-center gap-4 h-[22rem] overflow-scroll pr-2">
            {fifteenMinsAm &&
              fifteenMinsAm[0].slots.map((fifteenAm: any, i: number) => (
                <span
                  key={i}
                  className={`cursor-pointer inline-block rounded border border-primary py-3 lg:px-5 px-1 md:text-xl text-lg text-center font-medium focus:outline-none focus:ring ${selectedAmSlots.indexOf(fifteenAm) > -1 ? 'bg-primary text-white' : 'bg-white text-primary'}`}
                  onClick={() => handleAm(fifteenAm)}
                >
                  {fifteenAm}
                </span>
              ))}
          </div>
          <div className="flex flex-col gap-4 h-[22rem] overflow-scroll pr-2 ">
            {fifteenMinsPm &&
              fifteenMinsPm[0].slots.map((fifteenPm: any, i: number) => (
                <span
                  key={i}
                  className={`cursor-pointer inline-block rounded border border-primary py-3 lg:px-5 px-1 md:text-xl text-lg text-center font-medium focus:outline-none focus:ring ${selectedPmSlots.indexOf(fifteenPm) > -1 ? 'bg-primary text-white' : 'bg-white text-primary'}`}
                  onClick={() => handlePm(fifteenPm)}
                >
                  {fifteenPm}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifteen;
