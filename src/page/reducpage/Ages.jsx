import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { setDay, setMonth, setYear, setErrors, setAge, setButtonClicked } from './redux/ageSlice';
import logo from '../../assets/icon-arrow.svg';
import { setAge, setButtonClicked, setDay, setErrors, setMonth, setYear } from './ageSlice';
import './redux.css'

const Ages = () => {
    const dispatch = useDispatch();
    const { day, month, year, age, errors, buttonClicked } = useSelector((state) => state.age);

    const validateInputs = () => {
        let valid = true;
        let errors = { day: '', month: '', year: '' };

        if (!day || day < 1 || day > 31) {
            errors.day = 'Please enter a valid day';
            valid = false;
        }
        if (!month || month < 1 || month > 12) {
            errors.month = 'Please enter a valid month';
            valid = false;
        }
        if (!year || year < 1 || year > 2024) {
            errors.year = 'Please enter a valid year';
            valid = false;
        }

        dispatch(setErrors(errors));
        return valid;
    };

    const calculateAge = () => {
        if (!validateInputs()) return;

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

        dispatch(setAge({ years: ageYears, months: ageMonths, days: ageDays }));
        dispatch(setButtonClicked(true));
    };

    return (
        <div className='container w-[700px] h-[500px] rounded-[20px] rounded-br-[120px] bg-[white]'>
            <div className='container_inp w-[85%] h-[30%] border-b-[3px] mx-auto relative'>
                <div
                    onClick={calculateAge}
                    className={`check_icon absolute w-[80px] h-[80px] rounded-[50%] flex items-center justify-center left-[87%] top-[75%] cursor-pointer ${buttonClicked ? 'bg-violet-500' : 'bg-black'}`}
                >
                    <img src={logo} alt="" className='w-[40px]' />
                </div>
                <div className='inp_bar w-[100%] h-[100%] flex items-center gap-[30px]'>
                    <div className='flex flex-col justify-center h-[100%] w-[20%]'>
                        <label className={`text-[10px] font-bold ${errors.day ? 'text-red-500' : 'text-gray-500'}`}>DAY</label>
                        <input
                            className={`text_inp text-[30px] font-bold w-[130px] h-[60px] border mt-[5px] rounded-[5px] outline-none pl-[5px] ${errors.day ? 'border-red-500' : 'border-gray-400'}`}
                            type="number"
                            placeholder='DD'
                            value={day}
                            onChange={(e) => dispatch(setDay(e.target.value))}
                            required
                        />
                        {errors.day && <span className='text-red-500 text-[10px]'>{errors.day}</span>}
                    </div>
                    <div className='flex flex-col justify-center h-[100%] w-[20%]'>
                        <label className={`text-[10px] font-bold ${errors.month ? 'text-red-500' : 'text-gray-500'}`}>MONTH</label>
                        <input
                            className={`text_inp text-[30px] w-[130px] font-bold h-[60px] border mt-[5px] rounded-[5px] outline-none pl-[5px] ${errors.month ? 'border-red-500' : 'border-gray-400'}`}
                            type="number"
                            placeholder='MM'
                            value={month}
                            onChange={(e) => dispatch(setMonth(e.target.value))}
                            required
                        />
                        {errors.month && <span className='text-red-500 text-[10px]'>{errors.month}</span>}
                    </div>
                    <div className='flex flex-col justify-center h-[100%] w-[20%]'>
                        <label className={`text-[10px] font-bold ${errors.year ? 'text-red-500' : 'text-gray-500'}`}>YEAR</label>
                        <input
                            className={`text_inp text-[30px] w-[130px] font-bold h-[60px] border mt-[5px] rounded-[5px] outline-none pl-[5px] ${errors.year ? 'border-red-500' : 'border-gray-400'}`}
                            type="number"
                            placeholder='YYYY'
                            value={year}
                            onChange={(e) => dispatch(setYear(e.target.value))}
                            required
                        />
                        {errors.year && <span className='text-red-500 text-[10px]'>{errors.year}</span>}
                    </div>
                </div>
            </div>
            <div className='age w-[85%] h-[70%] mx-auto'>
                <div className=' text_age w-[100%] h-[25%] flex items-center text-[85px] font-extrabold mt-[30px]'>
                    <span className='span_text text-[85px] font-bold text-violet-500 mr-[5px]'>{age.years}</span>years
                </div>
                <div className='text_age w-[100%] mt-[5px] h-[25%] flex items-center text-[85px] font-extrabold'>
                    <span className='span_text  text-[85px] font-bold text-violet-500 mr-[5px]'>{age.months}</span>months
                </div>
                <div className='text_age w-[100%] mt-[5px] h-[25%] flex items-center text-[85px] font-extrabold'>
                    <span className='span_text  text-[85px] font-bold text-violet-500 mr-[5px]'>{age.days}</span>days
                </div>
            </div>
        </div>
    );
};

export default Ages;
