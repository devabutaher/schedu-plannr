import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../components/Contexts/AuthProvider/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";

const Fifteen = () => {
  const { setSlot }: any = useContext(AuthContext);

  const [selectedAmSlots, setSelectedAmSlots] = useState<any>([])

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


  //state for AM slots active style
  // const [colors, setColors] = useState(Array(fifteenMinsAm && fifteenMinsAm[0]?.slots.length).fill('#0098da'));
  // const [colorus, setColorus] = useState(Array(fifteenMinsAm && fifteenMinsAm[0]?.slots.length).fill('#fff'));

  // console.log({ colors, colorus });
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

  //state for PM slots active style
  const [colorsPm, setColorsPm] = useState(
    Array(fifteenMinsAm && fifteenMinsAm[0]?.slots.length).fill("#0098da")
  );
  const [colorsPmm, setColorsPmm] = useState(
    Array(fifteenMinsAm && fifteenMinsAm[0]?.slots.length).fill("#fff")
  );

  //for AM 
  // const handleChange = (index: number) => {
  //   setColors((colors) => {
  //     const newColors = [...colors];
  //     newColors[index] = colors[index] === '#0098da' ? 'white' : '#0098da';
  //     return newColors;
  //   });
  //   setColorus((colors) => {
  //     const newColors = [...colors];
  //     newColors[index] = colors[index] === 'white' ? '#0098da' : 'white';
  //     return newColors;
  //   });
  //   setSlot(fifteenMinsAm[0].slots[index])
  // };

  //for PM
  const handleChangePm = (index: number) => {
    setColorsPm((colors) => {
      const newColors = [...colors];
      newColors[index] = colors[index] === "#0098da" ? "white" : "#0098da";
      return newColors;
    });
    setColorsPmm((colors) => {
      const newColors = [...colors];
      newColors[index] = colors[index] === "white" ? "#0098da" : "white";
      return newColors;
    });
    setSlot(fifteenMinsAm[0].slots[index]);
  };

  //loading
  if (isLoading) {
    return (
      <div className="w-[33rem] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  const handleAm = (slot: any) => {
    console.log({ slot });
    if (selectedAmSlots.indexOf(slot) === -1) {
      setSelectedAmSlots((slots: any) => [...slots, slot])
    } else {
      setSelectedAmSlots((slots: any) => {
        return slots.filter((sl: any) => sl !== slot)
      })
    }
  }

  return (
    <div>
      <div className="h-[25rem] lg:py-0 py-12 px-2">
        <h1 className="text-center text-2xl mb-4 text-primary -mt-2">
          Please Select A Time Slot
        </h1>

        <div className="flex justify-center gap-4">
          <div className="flex flex-col gap-4 h-[22rem] overflow-scroll pr-2">
            {fifteenMinsAm &&
              fifteenMinsAm[0].slots.map((fifteenAm: any, i: number) => (
                <span
                  // onClick={() => handleChange(i)}
                  // style={{ backgroundColor: colors[i], color: colorus[i] }}
                  key={i}
                  className={`cursor-pointer inline-block rounded border border-primary py-3 w-56 text-center text-xl font-medium focus:outline-none focus:ring ${selectedAmSlots.indexOf(fifteenAm) > -1 ? 'bg-primary text-white' : 'bg-white text-primary'}`}
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
                  onClick={() => handleChangePm(i)}
                  style={{ backgroundColor: colorsPm[i], color: colorsPmm[i] }}
                  key={i}
                  className="cursor-pointer inline-block rounded border border-primary py-3 w-56 text-center text-xl font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring"
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
