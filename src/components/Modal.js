import React from 'react';

const Modal = ({ toggleModal }) => {
    return (
        <div className='flex justify-center items-center w-full h-full fixed top-0 left-0 bg-black bg-opacity-50 z-50'>
            <form className='bg-[#100D25] dark:bg-white dark:text-black flex flex-col gap-6 text-white p-6 w-[450px] max-w-lg mx-auto rounded-xl'>
                <div className='flex justify-between p-3 border-b-2 border-b-slate-500'>
                    <p className='text-white dark:text-black text-xl'>What project are you looking for?</p>
                    <button type='button' onClick={toggleModal}>
                        <i className="fa-solid fa-xmark fa-2xl dark:text-black"></i>
                    </button>
                </div>
                <div className='text-left font-bold flex flex-col gap-3'>
                    <input
                        type='text'
                        id="name"
                        placeholder='Name?'
                        className='bg-[#151030] dark:bg-slate-100 p-3 rounded-lg focus:outline-none focus:border-none '
                    />
                </div>
                <div className='text-left font-bold flex flex-col gap-3'>
                    <input
                        type='email'
                        id="email"
                        placeholder='Email?'
                        className='bg-[#151030] dark:bg-slate-100 p-3 rounded-lg focus:outline-none focus:border-none'
                    />
                </div>
                <div className='text-left font-bold flex flex-col gap-3'>
                    <select className='bg-[#151030]  dark:bg-slate-100 p-3 rounded-lg focus:outline-none focus:border-none '>
                        <option>Frontend</option>
                        <option>Backend</option>
                        <option>Full Stack</option>
                    </select>
                </div>
                <div className='text-left font-bold flex flex-col gap-3'>
                    <textarea
                        id="message"
                        rows={5}
                        placeholder='What you want to say?'
                        className='bg-[#151030] dark:bg-slate-100 p-4 rounded-lg focus:outline-none focus:border-none '
                    />
                </div>
                <button
                    type='submit'
                    className='bg-[#151030] dark:bg-black text-white dark:text-white font-bold text-lg p-3 w-full rounded-xl shadow-xl'
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default Modal;
