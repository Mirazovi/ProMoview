import { Clock10 } from "lucide-react";
import Image from "next/image";
import React from "react";

const RightMovieDetails = () => {
    return (
        <>
            <div className="mb-10">
                {/* Section 1 - Movie Info */}
                <div className="p-6 bg-[#1c1917] text-white rounded-2xl shadow-lg space-y-4 w-full">
                    <h2 className="text-2xl font-bold">Movie Details</h2>

                    <div className="flex justify-between items-center gap-4">
                        <p className="flex gap-2 items-center bg-[#1f1c1b] px-4 py-2 w-full rounded-xl">
                            <Clock10 className="text-[#e11d48]" />
                            <span className="flex flex-col">
                                Year <span>2024</span>
                            </span>
                        </p>
                        <p className="flex gap-2 items-center bg-[#1f1c1b] px-4 py-2 w-full rounded-xl">
                            <Clock10 className="text-[#e11d48]" />
                            <span className="flex flex-col">
                                Duration <span>166 min</span>
                            </span>
                        </p>
                        <p className="flex gap-2 items-center bg-[#1f1c1b] px-4 py-2 w-full rounded-xl">
                            <Clock10 className="text-[#e11d48]" />
                            <span className="flex flex-col">
                                Rating <span>4.8/5</span>
                            </span>
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <Clock10 className="text-[#e11d48]" />
                            Overview
                        </h3>
                        <p>
                            Paul Atreides unites with Chani and the Fremen while seeking revenge
                            against the conspirators who destroyed his family. As he makes a
                            choice between the love of his life and the fate of the universe, he
                            must prevent a terrible future that only he can foresee.
                        </p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <p className="flex gap-2 flex-1">
                            <Clock10 className="text-[#e11d48]" />
                            <span className="flex flex-col">
                                Director <span>Denis Villeneuve</span>
                            </span>
                        </p>
                        <p className="flex gap-2 flex-1">
                            <Clock10 className="text-[#e11d48]" />
                            <span className="flex flex-col">
                                Cast{" "}
                                <span>
                                    Timothée Chalamet, Zendaya, Rebecca Ferguson, Javier Bardem
                                </span>
                            </span>
                        </p>
                    </div>
                </div>

                {/* Section 2 - Trailer & Gallery */}
                <div className="mt-6 space-y-6">
                    {/* YouTube Trailer */}
                    <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.youtube.com/embed/_fyrx6jzbOk?si=S8F_vsQITdeIG-iV"
                            title="YouTube video player"
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Screenshot Gallery */}
                    <h1 className="text-3xl font-bold py-4 text-white">Screen Short</h1>
                    <div className="grid grid-cols-2 gap-4">
                        {["/images/demo.jpg", "/images/demo.jpg", "/images/demo.jpg", "/images/demo.jpg"].map((img, i) => (
                            <div
                                key={i}
                                className="relative group rounded-xl overflow-hidden cursor-pointer"
                            >
                                <Image
                                    width={500}
                                    height={300}
                                    src={img}
                                    alt={`screenshot-${i + 1}`}
                                    className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
                                />
                                <div className="absolute inset-0 bg-black/50 bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                    <span className="text-white font-semibold text-sm md:text-base bg-[#1c1917] px-4 py-2 rounded-lg">
                                        View Full Image
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
};

export default RightMovieDetails;
