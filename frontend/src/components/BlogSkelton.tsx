export const BlogSkelton = () => {
    return (
        <div role="status" className="max-w-sm animate-pulse">
            <div>
                <div className="p-7 border-b border-slate-500 pb-4 w-screen max-w-screen-lg cursor-pointer">
                    <div className="flex">
                        <div className="flex justify-center flex-col">
                            <div className="flex space-x-2 mb-2">
                                <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-300 rounded-full w-6 h-6`}
                                >
                                </div>
                                <div className="h-2  rounded-full  max-w-[300px] mb-2.5">
                                <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center flex-col font-extralight pl-2 text-sm">
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                        </div>
                        <div className="flex justify-center flex-col pl-2">
                            <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                        </div>
                        <div className="flex justify-center flex-col pl-2 text-sm font-thin text-slate-500 ">
                            <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div></div>
                    </div>
                    <div className="font-bold">
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5">
                        </div>
                    </div>
                    <div>
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
                    </div>
                    <div className="text-sm font-thin text-slate-500">
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}