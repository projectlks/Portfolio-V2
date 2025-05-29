import LetterMorphing from "./LetterMorphing";


export default function Skills() {
    return (
        <div className='flex flex-col md:flex-row space-y-[35px] justify-between md:items-center w-[90%]  mx-auto  sm:max-w-[600px] md:max-w-[740px] xl:max-w-[1100px]'>



            <div className='flex flex-col space-y-[15px]  flex-1  md:py-12 '>
                <LetterMorphing text='Responsive Design' />
                <LetterMorphing text='User Interface' />
                <LetterMorphing text='User Experience' />
                <LetterMorphing text='Custom Code' />
                <LetterMorphing text='Component Libraries' />
                <LetterMorphing text='Desktop & Mobile Apps' />
                <LetterMorphing text='Website Migration' />




            </div>

            <div className='flex flex-col w-full md:max-w-[359px] space-y-[35px] rounded-[17px] p-[26px] select-none  bg-[#baff00] h-full flex-1 '>

                <div className='w-full items-center flex justify-between  '>


                    <h1 className='text-[44px] font-[500] leading-[1em] tracking-[-0.03em] text-[#212121] '>
                        Fields
                    </h1>


                    <svg className="w-10 h-10 text-black transform rotate-[10deg] " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" id="Asterisk-Fill--Streamline-Sharp-Fill-Material" ><desc>{"\n    Asterisk Fill Streamline Icon: https://streamlinehq.com\n  "}</desc><path fill="currentColor" d="M22.5 42V27.6L12.35 37.75l-2.1 -2.1L20.4 25.5H6v-3h14.45l-10.2 -10.2 2.1 -2.1L22.5 20.35V6h3v14.4l10.2 -10.2 2.1 2.1 -10.2 10.2H42v3H27.65L37.8 35.65l-2.1 2.1 -10.2 -10.2V42h-3Z" strokeWidth={1} /></svg>
                </div>

                <div className="flex flex-col space-y-2 font-satoshi  text-[18px] font-medium text-left">

                    <p>Fintech</p>
                    <p>E-Commerce</p>
                    <p>ESports</p>
                    <p>Automotive</p>
                    <p>Fashion</p>
                    <p>Real Estate</p>
                </div>


            </div>

        </div>
    )
}
