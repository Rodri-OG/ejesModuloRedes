'use client';

import MetricsUser from "@/components/MetricsUser";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import SkeletonCard from "@/components/SkeletonCard";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push('/auth/signin'); 
    }
  }, [router]);

  if (!user) {
    return <SkeletonCard/>; 
  }

  return (
    <>
    <Suspense fallback={<SkeletonCard/>}>
      <div className="grid w-full mb-6 gap-2 p-1 grid-cols-1 grid-rows-1">
          <MetricsUser metricas={user.metricas} />
      </div>
    </Suspense>
    </>
  );
}
