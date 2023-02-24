import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../components/Contexts/AuthProvider/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";
import "./ThirtyMins.css";

const ThirtyMins = () => {
  const { setSlot, setSlotPm }: any = useContext(AuthContext);

  const [selectedAmSlots, setSelectedAmSlots] = useState<any>([])
  const [selectedPmSlots, setSelectedPmSlots] = useState<any>([])

  //fetch data from AM slots
  const { data: thirtyMinsAm, isLoading } = useQuery({
    queryKey: ["thirtyMinsAm"],
    queryFn: async () => {
      const res = await fetch(
        "https://scheduplannr-server.vercel.app/thirtyMinsAM"
      );
      const data = res.json();
      return data;
    },
  });

  //fetch data from PM slots
  const { data: thirtyMinsPm } = useQuery({
    queryKey: ["thirtyMinsPm"],
    queryFn: async () => {
      const res = await fetch(
        "https://scheduplannr-server.vercel.app/thirtyMinsPM"
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
      <div className="h-[25rem] lg:py-0 py-12 px-2">
        <h1 className="text-center text-2xl mb-4 text-primary -mt-2">
          Please Select A Time Slot
        </h1>

        <div className="flex justify-around">
          <div>
            <div className="flex flex-col text-center gap-4 h-[22rem] overflow-scroll pr-2">
              {thirtyMinsAm &&
                thirtyMinsAm[0].slots.map((thirtyAm: any, i: number) => (
                  <span
                    key={i}
                    className={`cursor-pointer inline-block rounded border border-primary py-3 lg:px-5 px-1 md:text-xl text-lg text-center font-medium focus:outline-none focus:ring ${selectedAmSlots.indexOf(thirtyAm) > -1 ? 'bg-primary text-white' : 'bg-white text-primary'}`}
                    onClick={() => handleAm(thirtyAm)}
                  >
                    {thirtyAm}
                  </span>
                ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 h-[22rem] overflow-scroll pr-2">
              {thirtyMinsPm &&
                thirtyMinsPm[0].slots.map((thirtyPm: any, i: number) => (
                  <span
                    key={i}
                    className={`cursor-pointer inline-block rounded border border-primary py-3 lg:px-5 px-1 md:text-xl text-lg text-center font-medium focus:outline-none focus:ring ${selectedPmSlots.indexOf(thirtyPm) > -1 ? 'bg-primary text-white' : 'bg-white text-primary'}`}
                    onClick={() => handlePm(thirtyPm)}
                  >
                    {thirtyPm}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirtyMins;
