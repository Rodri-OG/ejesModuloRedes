
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CardUserContent from "./CardUserContent"



export default function CardUsers({ titleCard,userName1, imageUser1,followUser1, linkUser1, userName2, imageUser2,followUser2, linkUser2,userName3, imageUser3,followUser3, linkUser3 }) {
  return (
    <>
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{titleCard}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-rows-3 grid-cols-1 gap-4">
        <CardUserContent userName={userName1} imageUser={imageUser1} followUser={followUser1} linkUser={linkUser1} /> 
        <CardUserContent userName={userName2} imageUser={imageUser2} followUser={followUser2} linkUser={linkUser2} /> 
        <CardUserContent userName={userName3} imageUser={imageUser3} followUser={followUser3} linkUser={linkUser3} />    
      </CardContent>
      <CardFooter>
        <p>últimas 24 hs</p>
      </CardFooter>
    </Card>
    </>
  )
}
