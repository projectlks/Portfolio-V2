export default function HeaderSkeleton() {
    return (

        <>

            <main className="w-[90%] mx-auto sm:max-w-[600px] md:max-w-[740px] xl:max-w-[1100px] pt-[35px] flex flex-col gap-y-[78px] pb-[78px]">
                {/* Logo + name skeleton */}
                <div className="flex items-center">
                    <div className="h-[46px] w-[46px] rounded-md bg-gray-200 animate-pulse"></div>
                    <div className="h-[30px] w-[120px] ml-[50px] bg-gray-200 animate-pulse rounded"></div>
                </div>

                <section className="flex flex-col space-y-[17px]">
                    {/* Heading skeleton - two lines */}
                    <div className="space-y-2">
                        <div className="h-[32px] xl:h-[71px] md:h-[52px] w-full max-w-[80%] bg-gray-200 animate-pulse rounded"></div>
                        <div className="h-[32px] xl:h-[71px] md:h-[52px] w-full max-w-[90%] bg-gray-200 animate-pulse rounded"></div>
                    </div>

                    {/* Paragraph skeleton */}
                    <div className="max-w-[582px] w-full">
                        <div className="h-[22px] md:h-[26px] w-full bg-gray-200 animate-pulse rounded"></div>
                        <div className="h-[22px] md:h-[26px] w-[80%] mt-2 bg-gray-200 animate-pulse rounded"></div>
                    </div>

                    {/* Buttons skeleton */}
                    <div className="flex gap-2 mt-2">
                        <div className="px-5 rounded-full h-10 w-[100px] bg-gray-200 animate-pulse"></div>
                        <div className="px-5 rounded-full h-10 w-[100px] bg-gray-200 animate-pulse"></div>
                    </div>
                </section>
            </main>


            <div className="border-y border-gray-300 md:px-5 py-10">
                <div className="flex gap-2 overflow-hidden">
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full sm:w-3/4 md:w-1/2 xl:w-[700px]"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            <div className="p-[7px] rounded-[14px] bg-white border border-gray-300">
                                <div
                                    className="rounded-[8px] bg-gray-200 w-full aspect-[700/450] relative overflow-hidden"
                                    style={{
                                        animation: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                                        animationDelay: `${index * 0.2}s`,
                                    }}
                                >
                                    <div
                                        className="shimmer"
                                        style={{
                                            animationDelay: `${index * 0.3}s`,
                                        }}
                                    ></div>

                                    {/* Project placeholder content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-4 opacity-30">
                                            <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>

                                        {/* Project title placeholder */}
                                        <div className="w-32 h-4 bg-gray-300 rounded mb-2 opacity-20"></div>
                                        <div className="w-24 h-3 bg-gray-300 rounded opacity-20"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
