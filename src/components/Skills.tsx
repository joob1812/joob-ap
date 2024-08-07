import { IoLogoPython } from "react-icons/io5"
import Strings from "../shared/Strings"
import { BiLogoJava } from "react-icons/bi"
import { SiScala } from "react-icons/si"
import { HiOutlineComputerDesktop } from "react-icons/hi2"
import { GiBrain } from "react-icons/gi"

function Skills() {
  return (
    <div className="ml-[90px] grid grid-cols-1 lg:grid-cols-1 dark:bg-gray-900">
      <div className="col-span-2 mt-[90px] ">
        <div className="mt-5">
          <div className="flex items-center justify-between rounded-r-3xl mx-[60px] pl-10 bg-gray-500 dark:bg-gray-600">
            <h2 className="text-[18px] text-gray-200 md:text-[24px] font-bold ">
              {Strings.COMPETENCES}
            </h2>
            <GiBrain className='mr-4 h-[20px] md:h-[30px] w-[20px] md:w-[30px] text-gray-200' />
          </div>

          <div className="lg:flex lg:flex-col md:justify-center mx-10">
            <div
              className="
                flex flex-col
                justify-center
                rounded-xl border border-gray-200 dark:border-gray-500
                my-4 p-4 mx-5 bg-gray-100/50 dark:bg-gray-800">
              <h3 className="md:text-xl text-center underline text-m pb-1 text-gray-600 font-bold dark:text-gray-300">
                {Strings.LANGAGES}</h3>
              <p className=" text-center py-2 px-2
              md:text-[18px] text-[15px]
              text-gray-600 dark:text-gray-300">
                { Strings.LANGAGESDESC}</p>
                <div className="pb-4 flex flex-col justify-center items-center "><ul className="space-y-4 list-disc list-inside md:text-[18px] text-[15px]  text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2 ">
                    <IoLogoPython />Python</li>
                  <li className="flex items-center gap-2 ">
                    <b>C</b>
                    Langage C</li>
                  <li className="flex items-center gap-2 ">
                    <SiScala />Scala</li>
                  <li className="flex items-center gap-2 ">
                    <BiLogoJava />Java</li>
              </ul></div>
              <h3 className="md:text-xl text-center underline text-m pb-1 text-gray-600 font-bold dark:text-gray-300">
                {Strings.DEVWEB}</h3>
              <p className=" text-center py-2 px-2
              md:text-[18px] text-[15px]
              text-gray-600 dark:text-gray-300">
                On a les outils nécessaires pour concevoir de beaux <b>sites web</b> fonctionnels.
              </p>
              <h3 className="md:text-xl text-center underline text-m pb-1 text-gray-600 font-bold dark:text-gray-300">
                {Strings.DEVLOGICIEL}</h3>
              <p className=" text-center py-2 px-2
              md:text-[18px] text-[15px]
              text-gray-600 dark:text-gray-300">
                On est disposé à créer differents types de logiciels avec diverses outils de conception.
                </p>
              <h3 className="md:text-xl text-center underline text-m pb-1 text-gray-600 font-bold dark:text-gray-300">
                {Strings.DESIGN}</h3>
              <p className=" text-center py-2 px-2
              md:text-[18px] text-[15px]
              text-gray-600 dark:text-gray-300">
                On est disposé à créer differents types de logiciels avec diverses outils de conception.
                </p>
              <h3 className="md:text-xl text-center underline text-m pb-1 text-gray-600 font-bold dark:text-gray-300">
                {Strings.GRAPHISME}</h3>
              <p className=" text-center py-2 px-2
              md:text-[18px] text-[15px]
              text-gray-600 dark:text-gray-300">
                On est disposé à créer differents types de logiciels avec diverses outils de conception.
                </p>
              <h3 className="md:text-xl text-center underline text-m pb-1 text-gray-600 font-bold dark:text-gray-300">
                {Strings.INFOGRAPHIE}</h3>
              <p className=" text-center py-2 px-2
              md:text-[18px] text-[15px]
              text-gray-600 dark:text-gray-300">
                On est disposé à créer differents types de logiciels avec diverses outils de conception.
                </p>
              <h3 className="md:text-xl text-center underline text-m pb-1 text-gray-600 font-bold dark:text-gray-300">
                {Strings.REPARATION}</h3>
              <p className=" text-center py-2 px-2
              md:text-[18px] text-[15px]
              text-gray-600 dark:text-gray-300">
                On est disposé à créer differents types de logiciels avec diverses outils de conception.
                </p>
              <h3 className="md:text-xl text-center underline text-m pb-1 text-gray-600 font-bold dark:text-gray-300">
                {Strings.DESSIN}</h3>
              <p className=" text-center py-2 px-2
              md:text-[18px] text-[15px]
              text-gray-600 dark:text-gray-300">
                On est disposé à créer differents types de logiciels avec diverses outils de conception.
                </p>
              <h3 className="md:text-xl text-center underline text-m pb-1 text-gray-600 font-bold dark:text-gray-300">
                {Strings.PROD}</h3>
              <p className=" text-center py-2 px-2
              md:text-[18px] text-[15px]
              text-gray-600 dark:text-gray-300">
                On est disposé à créer differents types de logiciels avec diverses outils de conception.
                </p>
              <h3 className="md:text-3xl text-center underline text-m pb-1 text-gray-600 font-bold dark:text-gray-300">
                {Strings.GESTION}</h3>
              <p className=" text-center py-2 px-2 md:px-44
              md:text-[30px] text-[15px]
              text-gray-600 dark:text-gray-300">
                On est disposé à créer differents types de logiciels avec diverses outils de conception.
                </p>
              <h3 className="md:text-xl text-center underline text-m pb-1 text-gray-600 font-bold dark:text-gray-300">
                {Strings.RESOL}</h3>
              <p className=" text-center py-2 px-2
              md:text-[18px] text-[15px]
              text-gray-600 dark:text-gray-300">
                On est disposé à créer differents types de logiciels avec diverses outils de conception.
                </p>
              <h3 className="md:text-xl text-center underline text-m pb-1 text-gray-600 font-bold dark:text-gray-300">
                {Strings.REPARATION}</h3>
              <p className=" text-center py-2 px-2
              md:text-[18px] text-[15px]
              text-gray-600 dark:text-gray-300">
                On est disposé à créer differents types de logiciels avec diverses outils de conception.
                </p>
              <h3 className="md:text-xl text-center underline text-m pb-1 text-gray-600 font-bold dark:text-gray-300">
                {Strings.REPARATION}</h3>
              <p className=" text-center py-2 px-2
              md:text-[18px] text-[15px]
              text-gray-600 dark:text-gray-300">
                On est disposé à créer differents types de logiciels avec diverses outils de conception.
                </p>
              <h3 className="md:text-xl text-center underline text-m pb-1 text-gray-600 font-bold dark:text-gray-300">
                {Strings.REPARATION}</h3>
              <p className=" text-center py-2 px-2
              md:text-[18px] text-[15px]
              text-gray-600 dark:text-gray-300">
                On est disposé à créer differents types de logiciels avec diverses outils de conception.
                </p>
              
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-between rounded-r-3xl mx-[60px] pl-10 bg-gray-500 dark:bg-gray-600">
            <h2 className="text-[18px] text-gray-200 md:text-[24px] font-bold ">
              OUTILS PRO
            </h2>
            <HiOutlineComputerDesktop className='mr-4 h-[20px] md:h-[30px] w-[20px] md:w-[30px] text-gray-200' />
          </div>

          <div className="lg:flex lg:flex-col md:justify-center mx-10">
            <div
              className="
                flex flex-col
                justify-center
                rounded-xl border border-gray-200 dark:border-gray-500
                my-4 p-4 mx-5 bg-gray-100/50 dark:bg-gray-800">
              <h3 className="md:text-xl text-center underline text-m pb-1 text-gray-600 font-bold dark:text-gray-300">
                {Strings.LANGAGES}</h3>
              <p className=" text-left py-2 px-2
              md:text-[18px] text-[15px]
              text-gray-600 dark:text-gray-300">
                Au cours de ma formation à l'université, j'ai eu l'occasion de voir plusieurs langages de programmation dont :</p>
              <div>
                <ul className="space-y-4 list-disc list-inside md:text-[18px] text-[15px]  text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2 ">
                    <IoLogoPython />Python</li>
                  <li className="flex items-center gap-2 ">
                    <b>C</b>
                    Langage C</li>
                  <li className="flex items-center gap-2 ">
                    <SiScala />Scala</li>
                  <li className="flex items-center gap-2 ">
                    <BiLogoJava />Java</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Skills
