
function Home() {
    const pdfUrl = "/CVPMD.pdf";

    return (
        <div className=" ml-[90px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 dark:bg-gray-900">
            <div className="md:col-span-1 lg:col-span-2 mt-[60px] ">
                    <div className='flex justify-center flex-col items-center'>
                        <div className='h-[120px] border-r-[1px] mt-[30px]' />
                        <div className='w-[5px] h-[5px] bg-gray-300 rounded-full'></div>
                        <h2 className='mt-2 text-gray-800 font-medium text-[16px] dark:text-gray-200'> Bienvenue sur mon site</h2>
                    <h2 className='mt-2 text-gray-800 font-medium text-[16px] dark:text-gray-200'> Je m'appelle</h2>
                    <h2 className='md:text-[54px] text-[36px]
                        text-center text-gray-800
                         dark:text-gray-300 font-bold
                          tracking-widest'>PAPE MOUSSA <br></br>DIOP</h2>
                    <h2 className='mt-4 text-center text-gray-800 font-medium text-[24px]
                 dark:text-gray-200'>
                        Je suis<br></br>Développeur<br></br> </h2>

                        <button
                            onClick={() => window.open(pdfUrl, '_blank')}
                            className="dark:hover:bg-gray-500 bg-gray-400 text-gray-900 mt-8 hover:text-gray-100 dark:text-gray-200 rounded-xl font-medium dark:bg-gray-600 p-2">
                            Télécharger mon CV
                    </button> 

                <div className=" mt-8 mb-4 block md:hidden">
                    <div className="mx-8">
                        <img src="/Profile_1.jpg" alt="Avatar Pic"
                            className='h-full bg-gray-400  p-2 md:p-2 rounded-xl shadow-xl object-cover'
                        />
                    </div>
                </div>                    
                </div>
            </div>

            <div className="hidden md:block lg:mt-48 mt-44">
                <div className="mx-8  ">
                    <img src="/Profile_1.jpg" alt="Avatar Pic"
                        className='h-full bg-gray-400  p-3 md:p-2 rounded-xl shadow-xl object-cover'
                    />
                </div>
            </div>

        </div>
        

    )
}

export default Home
