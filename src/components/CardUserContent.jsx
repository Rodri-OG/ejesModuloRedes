import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export default function CardUserContent({ userName,imageUser,followUser, idTweet, userUrl,dateTweet, fullText }) {
  
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const options = {  month: 'numeric', day: 'numeric' }
    return date.toLocaleDateString('es-ES', options)
  }

  return (
        <div className="grid gap-4 grid-cols-[0.1fr_1fr] grid-rows-1 h-fit p-2  ">
          <div className="grid col-start-1 col-end-2 row-start-1 row-end-3 mb-6 items-center	justify-center	">
            <Avatar className="bg-[#8c8b8b]  ">
              <Link target="_blank" href={userUrl?userUrl:''}>
                <AvatarImage src={imageUser}/>
              </Link>
              <AvatarFallback>no image</AvatarFallback>
            </Avatar>
          </div>
          <div className="grid grid-rows-[0.1fr_0.2fr_0.3fr] gap-1">
            <h3 className="row-start-1 row-end-2 font-semibold text-xs">@{userName}</h3>
            <p className="row-start-2 row-end-3 text-[#8c8b8b] font-normal text-xs">{Intl.NumberFormat('es-AR').format(followUser)} Seguidores  {formatDate(dateTweet)} </p>
            <Link className="row-start-4 row-end-5 text-[#404040] font-semibold text-xs " target="_blank" href={idTweet?`https://twitter.com/Interior/status/${idTweet}`:''}>
              <p className="row-start-3 row-end-4   text-[#8c8b8b] font-normal text-xs">{fullText.slice(0,80)}</p>
            </Link>
          </div>
        </div>        
  )
}
