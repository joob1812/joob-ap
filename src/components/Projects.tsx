import { IoBulbOutline } from "react-icons/io5"
import { FaCheck } from "react-icons/fa6";



function Projects() {
  return (
    <div className="ml-[90px] grid grid-cols-1 lg:grid-cols-1 dark:bg-gray-900">
      <div className="col-span-2 mt-[90px] ">
        <div className="mt-5">
          <div className="flex items-center justify-between rounded-r-3xl mx-20 pl-10 bg-gray-500 dark:bg-gray-600">
            <h2 className="text-[18px] text-gray-200 md:text-[24px] font-bold ">
              REALISATIONS
            </h2>
            <FaCheck className='mr-4 h-[20px] md:h-[30px] w-[20px] md:w-[30px] text-gray-200' />
          </div>

          <div className="lg:flex lg:flex-col md:justify-center mx-10">
            <div
              className="
                flex flex-col
                justify-center
                rounded-xl border border-gray-200 dark:border-gray-500
                my-4 p-4 mx-10 bg-gray-100/50 dark:bg-gray-800">
              <div className="pb-4">
                <ul className="space-y-4 list-disc list-inside md:text-[18px] text-[15px]  text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2 ">
                    <h1>2018-2020</h1>Créations technologiques basiques</li>
                  <p className=" text-left py-2 px-2
              md:text-[18px] text-[15px]
              text-gray-600 dark:text-gray-300">
                    Voiture commandée à fil, aspirateur, bras robotique, pistolet électrique...
                  </p>
                  <li className="flex items-center gap-2 ">
                    <h1>2022</h1>Création de club scientifique</li>
                  <p className=" text-left py-2 px-2
              md:text-[18px] text-[15px]
              text-gray-600 dark:text-gray-300">
                    J’ai crée le plus actifs des structures estudiantines
                    à l’Université Amadou Mahtar Mbow, le Club Fédérateur des Sciences. Ce dernier s’est avéré
                    être une grande réussite à travers ses riches
                    programmes et formations
                  </p>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-between rounded-r-3xl mx-20 pl-10 bg-gray-500 dark:bg-gray-600">
            <h2 className="text-[18px] text-gray-200 md:text-[24px] font-bold ">
              PROJETS
            </h2>
            <IoBulbOutline className='mr-4 h-[20px] md:h-[30px] w-[20px] md:w-[30px] text-gray-200' />
          </div>
          <div className="lg:flex lg:flex-col md:justify-center mx-10">
            <div
              className="
                flex flex-col
                justify-center
                rounded-xl border border-gray-200 dark:border-gray-500
                my-4 p-4 mx-10 bg-gray-100/50 dark:bg-gray-800">
              <div className="pb-4">
                <ul className="space-y-4 list-disc list-inside md:text-[18px] text-[15px]  text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2 ">
                    Créations de site de E-Commerce</li>
                  <li className="flex items-center gap-2 ">
                    Création de logiciel de gestion des documents d'état civil</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Projects
