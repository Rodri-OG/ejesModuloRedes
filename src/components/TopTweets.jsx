'use client'
import { useState, useEffect, Suspense } from "react";

//UI Components
import SkeletonCard from "@/components/SkeletonCard"
import { Separator } from "@/components/ui/separator"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CardUserContent from "./CardUserContent"


export default function TopTweets({ idMetric, criterio, title }) {

  const [ data, setData ] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://m.ejes.com/api/get_top_tweets/?id_metrica=${idMetric}&criterio=${criterio}&cantidad=5`, {
      method: 'GET',
      headers: {
        'Authorization': 'Token 7c1862ac5f3efdbfca8dc17fef6e92e9076cfff9',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <SkeletonCard/>;
  }


  return (
    <>
      <div className="grid lg:grid-cols-1 lg:grid-rows-1 gap-4 grid-cols-1 grid-rows-1">
        <Suspense fallback={<SkeletonCard />}>
          <Card className="w-full">
          <CardHeader>
            <div className="grid gap-4 grid-cols-[0.9fr_0.1fr] grid-rows-[0.5fr_0.1fr] w-full">
              <CardTitle className="font-normal text-xl">{title}</CardTitle>
              <svg
                className="w-full h-auto p-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <path d="M236 0h46L181 115l118 156h-92.6l-72.5-94.8-83 94.8h-46L107 148 0 0h94.9l65.5 86.6zm-16.1 244h25.5L80 26H52.6z"/>
              </svg>
              <Separator className="row-start-2 col-span-2"/>
            </div>
          </CardHeader>

            
            
            {data.data && 
              <CardContent className="grid grid-rows-3 grid-cols-1 p-1 gap-2">
                <CardUserContent userName={data.data[0]?.user_name} userUrl={data.data[0]?.user_url} imageUser={data.data[0]?.user_image} followUser={data.data[0]?.user_followers} idTweet={data.data[0]?.id_tweet} dateTweet={data.data[0]?.tweet_date} fullText={data.data[0]?.full_text}/> 
                <CardUserContent userName={data.data[1]?.user_name} userUrl={data.data[1]?.user_url} imageUser={data.data[1]?.user_image} followUser={data.data[1]?.user_followers} idTweet={data.data[1]?.id_tweet} dateTweet={data.data[1]?.tweet_date} fullText={data.data[1]?.full_text}/> 
                <CardUserContent userName={data.data[2]?.user_name} userUrl={data.data[2]?.user_url} imageUser={data.data[2]?.user_image} followUser={data.data[2]?.user_followers} idTweet={data.data[2]?.id_tweet} dateTweet={data.data[2]?.tweet_date} fullText={data.data[2]?.full_text}/>   
              </CardContent>
            }
            
          </Card>
        </Suspense>
      </div>
    </>
  );
}
