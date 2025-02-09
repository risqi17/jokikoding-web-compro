import React from "react";

const TestimonialsSection = () => {
    const scrollbarStyles = `
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #7c3aed #1f2937;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-track {
    background: #1f2937;
    border-radius: 4px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #7c3aed;
    border-radius: 4px;
    border: 2px solid #1f2937;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #8b5cf6;
  }
`;

    const testimonials = [
        {
            projectType: "Aplikasi Sederhana",
            date: "May 2024",
            rating: "10/10",
            review: '"Baguuss bangset buat semua servicenya"',
        },
        {
            projectType: "Aplikasi Sederhana",
            date: "August 2024",
            rating: "8/10",
            review:
                '"1.pelayanannya lumayan memuaskan 2.harga sesuai budget mahasiswa 3. Ramah 4.engineernya bagihs dalam pembuatan dan penyusunan"',
        },
        {
            projectType: "Data Science",
            date: "August 2024",
            rating: "10/10",
            review:
                '"Hasilnya bagus dan memuaskan next kalo ada project baru mau reorder. Sukaa bangett! ❤"',
        },
        {
            projectType: "Website",
            date: "July 2024",
            rating: "9/10",
            review:
                '"Harga sesuai sama kualias hasilnya. Dikasi deadline juga gak molor, tepat waktu bangett. Overall suka!"',
        },
        {
            projectType: "Website",
            date: "October 2024",
            rating: "10/10",
            review:
                '"Harga nya menyesuaikan banget dengan budget mahasiswa, pengerjaannya cepat, team nya fast respon, team nya sabaran banget dalam menangani dan menjawab semua pertanyaan, intinya keren dah continued success for team JokiProyek"',
        },
        {
            projectType: "Aplikasi Sederhana",
            date: "October 2024",
            rating: "10/10",
            review:
                '"joki jupyter notebook deadline sehari, pengerjaan cepat 2 jam sudah selesai. hasilnya juga bagus. sangat recommendt!"',
        },
    ];

    return (
        <div className="container mx-auto text-white py-16 px-4 mt-36">
            <style>{scrollbarStyles}</style>
            <div className="mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Testimoni klien kami</h2>
                    <p className="text-gray-400">
                        Dipercaya oleh banyak klien untuk menyelesaikan proyeknya dengan
                        250++ proyek dari berbagai jenis proyek
                    </p>
                </div>

                {/* Testimonials Scroll Container */}
                <div className="overflow-x-auto pb-8 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-purple-600 hover:scrollbar-thumb-purple-500">
                    <div className="flex gap-6 min-w-max">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="w-80 bg-gray-800 rounded-xl p-6 relative"
                            >
                                {/* Purple Accent */}
                                <div className="absolute left-0 top-0 h-1 w-12 bg-purple-600"></div>

                                {/* Project Type and Date */}
                                <div className="mb-6">
                                    <div className="text-sm text-gray-400">Jenis Proyek</div>
                                    <div className="font-medium">{testimonial.projectType}</div>
                                    <div className="text-sm text-gray-400 mt-2">
                                        Waktu Pengerjaan
                                    </div>
                                    <div className="font-medium">{testimonial.date}</div>
                                </div>

                                {/* Review Text */}
                                <div className="mb-6">
                                    <p className="text-gray-300 text-sm">{testimonial.review}</p>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="w-4 h-4"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8 0L10.2571 4.89337L15.6085 5.52786L11.8042 9.22663L12.7023 14.4721L8 12L3.29772 14.4721L4.19577 9.22663L0.391548 5.52786L5.74292 4.89337L8 0Z"
                                            fill="#8B5CF6"
                                        />
                                    </svg>
                                    <span className="text-sm text-gray-400">
                                        Tingkat rekomendasi
                                    </span>
                                    <span className="font-medium">{testimonial.rating}</span>
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
