import '../styles/Global.css'

export function Buttons() {
    return (
        <div className='flex flex-col space-y-4 mb-14'>
            <button className='block border-2 border-purple rounded my-0 mx-auto w-80 
                                h-12 text-purple hover:bg-purple hover:text-bege'>
                LINK 1
            </button>
            <button className='block border-2 border-purple rounded my-0 mx-auto w-80 
                                h-12 text-purple hover:bg-purple hover:text-bege'>
                LINK 2
            </button>
            <button className='block border-2 border-purple rounded my-0 mx-auto w-80 
                                h-12 text-purple hover:bg-purple hover:text-bege'>
                LINK 3
            </button>
            <button className='block border-2 border-purple rounded my-0 mx-auto w-80 
                                h-12 text-purple hover:bg-purple hover:text-bege'>
                LINK 4
            </button>
        </div>
    )
}