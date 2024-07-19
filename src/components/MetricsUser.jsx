'use client';
import React, { useState, useEffect } from 'react';

//components
import MetricsCardStats from "./MetricsCardStats";
import TabsLineCharts from './TabsLineCharts';
import TabsBarCharts from './TabsBarCharts';
import TabsDoughnutCharts from './TabsDoughnutCharts';
import TabsTopTweets from './TabsTopTweets';
import RangeButton from './RangeButton';
import DoughnutChartMetric from './DoughnutChartMetric';
import BarChartMetric from './BarChartMetric';

export default function MetricsUser({ metricas }) {
  const [dataUser, setDataUser] = useState([]);
  const [error, setError] = useState(null);
  const [metricIds, setMetricIds] = useState([]);
  const [range, setRange] = useState('7');

  useEffect(() => {
    setDataUser(metricas);
  }, [metricas]);

  useEffect(() => {
    if (dataUser) {
      setMetricIds(dataUser.map(metrica => metrica.id_metrica));
    }
  }, [dataUser]);


  function handleChangeRange(event) {
    setRange(event);
  }
  

  return (
    <>
      <div className="grid gap-2 p-1 grid-cols-1 grid-rows-[0.3fr_0.5fr_0.4fr_0.6fr] mb-2 h-full md:grid-cols-4 md:grid-rows-[0.3fr_0.5fr_0.4fr_0.6fr]">
        
        <div className="row-span-1 row-start-1 row-end-2 md:col-span-4 overflow-scroll md:overflow-visible md:col-start-1 md:col-end-5 p-1 shadow-lg rounded-lg">
          <div className="flex flex-col gap-1 p-4">
            <h2 className="font-bold text-[#546E7A]">Indicadores clave de las últimas 24 horas</h2>
            <p className=" text-[#8c8b8b] font-normal text-xs p-4">Seleccionar una métrica</p>
          </div>
          <MetricsCardStats idMetricas={metricIds} />
        </div>

        <div className="grid grid-rows-[0.1fr_1fr] md:col-span-4 row-span-1 row-start-2 row-end-3 p-1  bg-[#fefdfd] rounded-lg xl:mb-0 shadow-lg">
          <div className="grid md:grid-cols-5 md:gap-1 md:p-1 ">
            <h2 className="md:col-start-1 md:col-span-2 font-bold text-[#546E7A]">Evolutivo - Histograma  del indicador</h2>
            <span className="md:col-start-5 md:col-end-6 w-full">
              <RangeButton onValueChange={handleChangeRange} />
            </span>
          </div>
          <TabsLineCharts idMetricas={metricIds} range={range} />
        </div>

        <div className="grid grid-cols-1 grid-rows-[0.5fr] h-full p-4 md:col-span-2 md:row-span-1 md:row-start-3 md:row-end-4 md:col-start-1 md:col-end-3  bg-[#fefdfd] rounded-lg xl:mb-0 shadow-lg">
        {metricIds.length == 1
          ? <div>
              <h2 className="font-bold text-[#546E7A] ">Totales por métrica</h2>
              <BarChartMetric idMetricas={metricIds} />
            </div>

          : <div>
              <h2 className="font-bold text-[#546E7A] p-4">Totales por métrica</h2>
              <TabsBarCharts idMetricas={metricIds} />
            </div>
        }
        </div>

        <div className="grid grid-cols-1 grid-rows-1 h-full p-4 md:col-span-2 md:row-span-1 md:row-start-3 md:row-end-4 md:col-start-3 md:col-end-5 bg-[#fefdfd] rounded-lg shadow-lg">
            {metricIds.length == 1
             ?  <div>
                  <h2 className="font-bold text-[#546E7A] p-4"> Distribución de fuentes de posteos</h2>
                  <div className="grid h-full w-full rounded-xl">
                     <DoughnutChartMetric idMetricas={metricIds} />
                  </div>
                </div>

             :  <div >
                  <h2 className="font-bold text-[#546E7A] p-4">Participación por métrica</h2>
                  <TabsDoughnutCharts idMetricas={metricIds} />
                </div>
            }
        </div>

        <div className="grid grid-cols-3 overflow-scroll md:overflow-visible grid-rows-[0.1fr_2fr] md:row-span-1 md:row-start-4 md:row-end-5 md:col-start-1 md:col-end-5 p-4 bg-[#fefdfd] rounded-lg xl:mb-0 shadow-lg">
          <div className="flex flex-col gap-1 p-4 row-start-1 row-end-2 col-span-3">
            <h2 className="font-bold text-[#546E7A]">Ranking de usuarios por métrica</h2>
            <p className=" text-[#8c8b8b] font-normal text-xs">Seleccionar una métrica</p>
          </div>
          <div className="flex gap-4 p-4 justify-center row-start-2 row-end-3 col-span-3">
            <TabsTopTweets idMetricas={dataUser} />
          </div>
        </div>
      </div>
    </>
  );
}
