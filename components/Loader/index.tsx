import Spinner from "../Spinner";

export default function Loader() {
  return (
    <div className='fixed transition-all duration-500 z-[100000000] top-0 bottom-0 bg-slate-900 text-white w-screen h-screen flex justify-center items-center left-0 opacity-90'>
      <Spinner />
    </div>
  )
}
