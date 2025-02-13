import Image from 'next/image'
import { FC } from 'react'

const HeroSection: FC = () => {
  return (
    <section className="w-full mx-auto gap-8 flex flex-col py-20 pb-40 ">
      <div className="text-center px-6 py-20 z-40">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Kami Jokiin Proyek Kodingan Kamu,
        </h1>
        <span data-aos="fade-up" className="text-5xl text-white aos-init aos-animate">
          Mulai dari &nbsp;
          <strong className="relative inline-block">99K &nbsp;
            <Image alt="underline" src="/image/underline.svg" width="108" height="9" decoding="async" data-nimg="1" className="absolute -bottom-3" loading="lazy" /> 
            </strong> 
            Aja!
        </span>
        <p className="text-gray-300 mt-10 max-w-2xl mx-auto">
          Kami adalah pilihan utama untuk layanan implementasi proyek IT yang terjangkau, efisien,
          dan dapat diandalkan. Dengan komitmen kami terhadap kualitas, kami menawarkan solusi
          tercepat dan termurah dalam sesuai kebutuhan.
        </p>
      </div>
    </section>
  )
}

export default HeroSection