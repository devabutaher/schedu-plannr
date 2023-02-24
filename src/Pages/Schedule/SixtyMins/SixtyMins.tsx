import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../components/Contexts/AuthProvider/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";

const SixtyMins = () => {
  const { setSlot, setSlotPm }: any = useContext(AuthContext);

  const [selectedAmSlots, setSelectedAmSlots] = useState<any>([])
  const [selectedPmSlots, setSelectedPmSlots] = useState<any>([])

  //fetch data from AM slots
  const { data: sixtyMinsAm, isLoading } = useQuery({
    queryKey: ["sixtyMinsAm"],
    queryFn: async () => {
      const res = await fetch(
        "https://scheduplannr-server.vercel.app/sixtyMinsAM"
      );
      const data = res.json();
      return data;
    },
  });

  //fetch data from PM slots
  const { data: sixtyMinsPm } = useQuery({
    queryKey: ["sixtyMinsPm"],
    queryFn: async () => {
      const res = await fetch(
        "https://scheduplannr-server.vercel.app/sixtyMinsPM"
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
    <>
      <div className="h-[25rem] lg:py-0 py-12 px-2">
        <h1 className="text-center text-2xl mb-4 text-primary -mt-2">
          Please Select A Time Slot
        </h1>

        <div className="flex justify-around">
          <div className="flex flex-col text-center gap-4 h-[22rem] overflow-scroll pr-2">
            {sixtyMinsAm &&
              sixtyMinsAm[0].slots.map((sixtyAm: any, i: number) => (
                <span
                  key={i}
                  className={`cursor-pointer inline-block rounded border border-primary py-3 lg:px-5 px-1 md:text-xl text-lg font-medium focus:outline-none focus:ring active:bg-primary ${selectedAmSlots.indexOf(sixtyAm) > -1 ? 'bg-primary text-white' : 'bg-white text-primary'}`}
                  onClick={() => handleAm(sixtyAm)}
                >
                  {sixtyAm}
                </span>
              ))}
          </div>
          <div>
            <div className="flex flex-col text-center gap-4 h-[22rem] overflow-scroll pr-2 ">
              {sixtyMinsPm &&
                sixtyMinsPm[0].slots.map((sixtyPm: any, i: number) => (
                  <span
                    key={i}
                    className={`cursor-pointer inline-block rounded border border-primary py-3 lg:px-5 px-1 lg:text-xl text-lg font-medium focus:outline-none focus:ring active:bg-primary ${selectedPmSlots.indexOf(sixtyPm) > -1 ? 'bg-primary text-white' : 'bg-white text-primary'}`}
                    onClick={() => handlePm(sixtyPm)}
                  >
                    {sixtyPm}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SixtyMins;
