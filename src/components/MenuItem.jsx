export default function MenuItem (props){
  return (
    <>
      <li role="button" className="flex items-center w-full p-3 rounded-lg bg-[#F47E36] text-[#F5F5F5] shadow-xl text-start leading-tight transition-all hover:bg-[#F47E20] hover:bg-opacity-80 focus:bg-[#F47E36]  active:bg-[#F47E36] 0 hover:text-[#DBDBDB] focus:text-[#F5F5F5]0 active:text-[#F5F5F5] outline-none">
        <div className="grid place-items-center mr-4">
          <span className="material-icons">{props.icon}</span>
        </div>
        {props.title}
      </li>  
    </>
  )
};