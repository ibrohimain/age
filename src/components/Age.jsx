import React, { useState } from 'react';
import logo from '../assets/icon-arrow.svg';

const Age = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [age, setAge] = useState({ years: '--', months: '--', days: '--' });

    const calculateAge = () => {
        const birthDate = new Date(`${year}-${month}-${day}`);
        const today = new Date();

        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth() - birthDate.getMonth();
        let ageDays = today.getDate() - birthDate.getDate();

        if (ageDays < 0) {
            ageMonths--;
            ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        setAge({ years: ageYears, months: ageMonths, days: ageDays });
    };

    return (
        <div className='w-[700px] h-[500px] rounded-[20px] rounded-br-[120px] bg-[white]'>
            <div className='w-[85%] h-[30%] border-b-[3px] mx-auto relative'>
                <div onClick={calculateAge} className='absolute cursor-pointer w-[80px] h-[80px] bg-black rounded-[50%] flex items-center justify-center left-[87%] top-[75%]'>
                    <img src={logo} alt="" className='w-[40px]' />
                </div>
                <div className='w-[100%] h-[100%] flex items-center gap-[30px]'>
                    <div className='flex flex-col justify-center h-[100%] w-[20%]'>
                        <label className='text-[10px] font-bold text-gray-500'>DAY</label>
                        <input
                            className='text-[30px] font-bold w-[130px] h-[60px] border border-gray-400 mt-[5px] rounded-[5px] outline-none hover:border-[2px] hover:border-violet-500 pl-[5px]'
                            type="number"
                            placeholder='DD'
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                            required
                        />
                    </div>
                    <div className='flex flex-col justify-center h-[100%] w-[20%]'>
                        <label className='text-[10px] font-bold text-gray-500'>MONTH</label>
                        <input
                            className='text-[30px] w-[130px] font-bold h-[60px] border border-gray-400 mt-[5px] rounded-[5px] outline-none hover:border-[2px] hover:border-violet-500 pl-[5px]'
                            type="number"
                            placeholder='MM'
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                            required
                        />
                    </div>
                    <div className='flex flex-col justify-center h-[100%] w-[20%]'>
                        <label className='text-[10px] font-bold text-gray-500'>YEAR</label>
                        <input
                            className='text-[30px] w-[130px] font-bold h-[60px] border border-gray-400 mt-[5px] rounded-[5px] outline-none hover:border-[2px] hover:border-violet-500 pl-[5px]'
                            type="number"
                            placeholder='YYYY'
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            required
                        />
                    </div>
                </div>
            </div>
            {/* <button
                onClick={calculateAge}
                className='text-[20px] font-bold h-[60px] bg-violet-500 text-white rounded-[5px] px-[20px] hover:bg-violet-600 mt-[20px] mx-auto block'
            >
                Calculate
            </button> */}
            <div className='age w-[85%] h-[70%] mx-auto'>
                <div className='w-[100%] h-[25%] flex items-center text-[85px] font-extrabold mt-[30px]'>
                    <span className='text-[85px] font-bold text-violet-500 mr-[5px]'>{age.years}</span>years
                </div>
                <div className='w-[100%] mt-[5px] h-[25%] flex items-center text-[85px] font-extrabold'>
                    <span className='text-[85px] font-bold text-violet-500 mr-[5px]'>{age.months}</span>months
                </div>
                <div className='w-[100%] mt-[5px] h-[25%] flex items-center text-[85px] font-extrabold'>
                    <span className='text-[85px] font-bold text-violet-500 mr-[5px]'>{age.days}</span>days
                </div>
            </div>
        </div>
    );
};

export default Age;
