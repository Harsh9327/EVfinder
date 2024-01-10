

export const Card = ({station,position}) => {
    const dir = `https://www.google.co.in/maps/dir/${position.latitude},${position.longitude}/${station.lattitude},${station.longitude}`;
    const pin = `https://www.google.com/maps/place/${station.lattitude},${station.longitude}`;
    
  return (
   <>      
    <div className="max-w-xs max-h-max m-3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <h5 className="mb-2 text-2xl text-wrap font-bold tracking-tight text-gray-900 dark:text-white">{station.name}</h5>
    
    <p className="mb-3 font-normal text-wrap text-gray-700 dark:text-gray-400">{station.address}</p>
    <a href={position.lodded ? dir: pin } target={'_blank'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-600 rounded-lg hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-cyan-500 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus:ring-cyan-800">
        Direction 
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
</>
  )
}
