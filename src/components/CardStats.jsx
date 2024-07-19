import { Separator } from "@/components/ui/separator"



export default function CardStats({ statNumber, statPercent, id_metrica, nombreKpi  }){
  


  return (
    <>
      <div id={id_metrica} className="flex flex-col bg-[#fefdfd] rounded-lg mb-6 xl:mb-0 shadow-lg">
        <div className="grid m-1 p-2 gap-2">
          <div className="flex justify-between gap-2 w-full">
          <div className=" flex">
              <div
                className={"text-[#f5af19] bg-[#DBDBDB] p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-xl"}>
                {nombreKpi == 'Posteos'
                  ? <span className="material-symbols-outlined">edit_square</span>
                  :nombreKpi == 'Usuarios'
                  ?<span className="material-symbols-outlined">group</span>
                  :nombreKpi == 'Alcance'
                  ?<span className="material-symbols-outlined">monitoring</span>
                  :<span className="material-symbols-outlined">analytics</span>
                  
                  }
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="text-[#8c8b8b] font-normal text-xs lg:text-sm">
                  {nombreKpi}
              </h4>
              <span className="font-semibold text-md lg:text-xl text-blueGray-700">
                  {Intl.NumberFormat('es-AR').format(statNumber)}
              </span>
            </div>
          </div>
          <Separator/>
          <div className="flex justify-between gap-4 w-full items-center text-sm text-blueGray-400 mt-4">
            <span className={parseInt(statPercent) >= 1
                    ? "text-emerald-500"
                    : parseInt(statPercent) < 1
                    ? "text-[#f86b6b]"
                    : ""}>
              <span className="material-icons text-xs ">
                {
                  parseInt(statPercent) >= 1
                    ? "arrow_upward"
                    : parseInt(statPercent) < 1
                    ? "arrow_downward"
                    : ""
                }
              </span>{" "}
              {parseInt(statPercent) } %
            </span>
            <p className=" text-[#8c8b8b] font-normal text-xs">Respecto a ayer</p>
          </div>
        </div>
      </div>
  </>
  )};

  