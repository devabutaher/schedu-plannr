import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../components/Contexts/AuthProvider/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";

const SixtyMins = () => {
  const { setSlot }: any = useContext(AuthContext);

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

  //state for AM slots active style
  const [colors, setColors] = useState(
    Array(sixtyMinsAm && sixtyMinsAm[0]?.slots.length).fill("#0098da")
  );
  const [colorus, setColorus] = useState(
    Array(sixtyMinsAm && sixtyMinsAm[0]?.slots.length).fill("#fff")
  );

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

  //state for PM slots active style
  const [colorsPm, setColorsPm] = useState(
    Array(sixtyMinsAm && sixtyMinsAm[0]?.slots.length).fill("#0098da")
  );
  const [colorsPmm, setColorsPmm] = useState(
    Array(sixtyMinsAm && sixtyMinsAm[0]?.slots.length).fill("#fff")
  );

  //for AM
  const handleChange = (index: number) => {
    setColors((colors) => {
      const newColors = [...colors];
      newColors[index] = colors[index] === "#0098da" ? "white" : "#0098da";
      return newColors;
    });
    setColorus((colors) => {
      const newColors = [...colors];
      newColors[index] = colors[index] === "white" ? "#0098da" : "white";
      return newColors;
    });
    setSlot(sixtyMinsAm[0].slots[index]);
  };

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
    setSlot(sixtyMinsAm[0].slots[index]);
  };

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

        <div className="flex justify-center gap-4">
          <div className="flex flex-col gap-4 h-[22rem] overflow-scroll pr-2">
            {sixtyMinsAm &&
              sixtyMinsAm[0].slots.map((sixtyAm: any, i: number) => (
                <span
                  onClick={() => handleChange(i)}
                  style={{ backgroundColor: colors[i], color: colorus[i] }}
                  key={i}
                  className="cursor-pointer inline-block rounded border border-primary py-3 px-5 text-xl font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
                >
                  {sixtyAm}
                </span>
              ))}
          </div>
          <div>
            <div className="flex flex-col gap-4 h-[22rem] overflow-scroll pr-2 ">
              {sixtyMinsPm &&
                sixtyMinsPm[0].slots.map((sixtyPm: any, i: number) => (
                  <span
                    onClick={() => handleChangePm(i)}
                    style={{
                      backgroundColor: colorsPm[i],
                      color: colorsPmm[i],
                    }}
                    key={i}
                    className="cursor-pointer inline-block rounded border border-primary py-3 px-5 text-xl font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
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
