import React from 'react'
import IconContainer from './IconContainer';
import { JavaIcon, ReactIcon, NodeJs, Js, C, Python, MongoDB, FireBase, Postgres, Git, Redux, VSCode,Tailwind } from '../utils/icons';

const Skillset = () => {
    return (
        <div className='flex flex-col gap-6'>
            <h1 className='text-white font-bold text-4xl dark:text-black'> Professional <span className='text-[#8A4CA8]'>Skillset</span></h1>
            <div className='flex justify-center items-center p-3 flex-wrap w-[80%] m-auto gap-6'>
                <IconContainer SVG={<JavaIcon />} />
                <IconContainer SVG={<ReactIcon />} />
                <IconContainer SVG={<Tailwind />} />
                <IconContainer SVG={<Js />} />
                <IconContainer SVG={<C />} />
                <IconContainer SVG={<Python />} />
                <IconContainer SVG={<MongoDB />} />
                <IconContainer SVG={<FireBase />} />
                <IconContainer SVG={<Postgres />} />
                <IconContainer SVG={<Git />} />

            </div>
            <h1 className='text-white font-bold text-4xl dark:text-black'> <span className='text-[#8A4CA8]'>Tools</span> I Use</h1>
            <div className='flex justify-center items-center p-3 flex-wrap w-[80%] m-auto gap-6'>
                <IconContainer SVG={<VSCode />} />
                <IconContainer SVG={<Redux />} />
                <IconContainer SVG={<NodeJs />} />
            </div>
        </div>
    )
}

export default Skillset
