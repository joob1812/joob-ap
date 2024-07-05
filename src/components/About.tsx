import Strings from "../shared/Strings";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { GiBrain } from "react-icons/gi";

function About() {
    
    return (
        <div className="ml-[50px] flex dark:bg-gray-900">
            <div className="mt-[90px] ">
                <div className="flex gap-4 items-center">
                <div className="px-2 py-4 text-center flex flex-col items-center">
                    <h2 className="md:text-[44px] text-[26px] text-gray-900 dark:text-gray-200 font-bold">
                        {Strings.ABOUT_HEADING}
                    </h2>
                    <BiSolidQuoteAltLeft className="bg-yellow-500 p-3 text-[44px] rounded-full mt-6 text-white  dark:text-gray-200" />
                    <h2 className="my-5 text-gray-500  dark:text-gray-300 text-[14px] md:text-[20px]">
                        {Strings.ABOUT_DESC}
                    </h2>
                    <BiSolidQuoteAltRight className="bg-yellow-500 p-3 text-[44px] rounded-full text-white  dark:text-gray-200" />
                    <img src="/Avatar_2.jpg" alt="Avatar Pic"
                        className='w-[150px] h-[150p] lg:hidden block bg-gray-400 p-3 mt-4 rounded-xl shadow-lg' />
                </div>
                    <div className="hidden lg:block mx-10  ">
                        <img src="/Profile_1.jpg" alt="Avatar Pic"
                            className=' bg-yellow-400  p-3 md:p-2 rounded-xl shadow-xl object-cover'
                        />
                    </div>
                </div>

                <div className="mt-12">
                    <div className="flex items-center justify-between rounded-r-3xl mx-20 pl-10 bg-gray-500 dark:bg-gray-600">
                        <h2 className="text-[18px] text-gray-200 md:text-[24px] font-bold ">
                            {Strings.EDUCATION}
                        </h2>
                        <GiBrain className='mr-4 h-[20px] md:h-[30px] w-[20px] md:w-[30px] text-gray-200' />
                    </div>
                    <div className="lg:flex lg:flex-col md:justify-center mx-10">
                        <div
                            className="flex flex-col justify-center
                rounded-xl border border-gray-200 dark:border-gray-500
                my-4 p-4 mx-10 text-center items-center bg-gray-100/50 dark:bg-gray-800">
                            <h3 className="md:text-lg text-sm font-medium pt-8 pb-2 text-gray-900  dark:text-gray-300">
                                {Strings.ETAB1}
                            </h3>
                            <p className="py-2 md:text-[18px] text-[15px]  text-gray-600 dark:text-gray-50">
                                {Strings.AN1}
                            </p>
                            <p className="py-1 md:text-[16px] text-[13px] text-gray-900 font-serif dark:text-gray-100">
                                {Strings.DIPLOME1}
                            </p>
                        </div>
                        <div
                            className="flex flex-col justify-center
                rounded-xl border border-gray-200 dark:border-gray-500
                my-4 p-4 mx-10 text-center items-center bg-gray-100/50 dark:bg-gray-800"
                        >
                            <h3 className="md:text-lg text-sm font-medium pt-8 pb-2 text-gray-900  dark:text-gray-300">
                                {Strings.ETAB2}
                            </h3>
                            <p className="py-2 md:text-[18px] text-[15px]  text-gray-600 dark:text-gray-50">
                                {Strings.AN2}
                            </p>
                            <p className="py-1 md:text-[16px] text-[13px] text-gray-900 dark:text-gray-100">
                                {Strings.DIPLOME2}
                            </p>
                        </div>
                        <div className="flex flex-col justify-center
                rounded-xl border border-gray-200 dark:border-gray-500
                my-4 p-4 mx-10 text-center items-center bg-gray-100/50 dark:bg-gray-800">
                            <h3 className="md:text-lg text-sm font-medium pt-8 pb-2 text-gray-900  dark:text-gray-300">
                                {Strings.ETAB3}
                            </h3>
                            <p className="py-2 md:text-[18px] text-[15px]  text-gray-600 dark:text-gray-50">
                                {Strings.AN3}
                            </p>
                            <p className="py-1 md:text-[16px] text-[13px] text-gray-900 font-serif dark:text-gray-100">
                                {Strings.DIPLOME3}
                            </p>
                        </div>
                        <div
                            className="flex flex-col justify-center
                rounded-xl border border-gray-200 dark:border-gray-500
                my-4 p-4 mx-10 text-center items-center bg-gray-100/50 dark:bg-gray-800"
                        >
                            <h3 className="md:text-lg text-sm font-medium pt-8 pb-2 text-gray-900  dark:text-gray-300">
                                {Strings.ETAB4}
                            </h3>
                            <p className="py-2 md:text-[18px] text-[15px]  text-gray-600 dark:text-gray-50">
                                {Strings.AN4}
                            </p>
                            <p className="py-1 md:text-[16px] text-[13px] text-gray-900 font-serif dark:text-gray-100">
                                {Strings.DIPLOME4}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
