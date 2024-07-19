'use client';

import React, { useState, useEffect, Suspense } from 'react';
import FollowPage from '@/components/FollowPage';
import SkeletonCard from '@/components/SkeletonCard';

export default function Follow({ params }) {

  const [metric, setMetric] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const  metricId  = params.id;


  useEffect(() => {
    if (metricId) {
      setMetric(metricId); // Establece la métrica actual basada en la ruta dinámica
      setLoading(false);
    } else if (metricId.length > 0) {
      setMetric(metricId[0]); // Establece la primera métrica como métrica actual si no hay id en la ruta
    }
  }, [metricId]);

  if (loading) {
    return <SkeletonCard/>;
  }


  return (
    <div className="grid w-full mb-6 p-1 grid-cols-1 grid-rows-1">
      <Suspense fallback={<SkeletonCard />}>
        {metric && <FollowPage metric={metric} />}
      </Suspense>
    </div>
  );
}
