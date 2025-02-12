import React from "react";
import testimonialsData from "@/data/testimonials.json";
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const TestimonialsSection = () => {
    const { testimonials } = testimonialsData;

    return (
        <div className="container mx-auto text-white py-16 px-4 mt-36">
            <div className="mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Apa Kata Client Kami?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Dengarkan langsung dari klien yang telah mempercayakan proyek mereka kepada kami.
                    </p>
                </div>

                {/* Testimonials */}
                <div className="overflow-x-auto">
                    <div className="flex gap-6 pb-6 min-w-max">
                        {testimonials.map((testimonial: Testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 w-[300px]"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{testimonial.name}</h3>
                                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-xs px-2 py-1 bg-gray-800 rounded text-primary">
                                        {testimonial.projectType}
                                    </span>
                                    <p className="mt-4 text-gray-400">
                                        {testimonial.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
