import DataImage from "../data/data";

export default function Hero() {
    return (
        <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
            <div className="animate__animated animate__fadeInUp animate__delay-3s">
                <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
                    <img
                        src={DataImage.HeroImage}
                        alt="Hero Image"
                        className="w-10 rounded-md"
                        loading="lazy"
                    />
                    <q>Kode yang indah, lahir dari ketekunan.</q>
                </div>
                <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Zainul Arif.</h1>
                <p className="text-base/loose mb-6 opacity-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minus
                    quam at dicta in fugit ratione vitae soluta cum voluptatum aperiam
                    sunt quos exercitationem molestiae quasi explicabo, debitis
                    asperiores quae temporibus provident? Sunt laboriosam iste libero
                    corporis praesentium eaque voluptas.
                </p>
                <div className="flex items-center sm:gap-4 gap-2">
                    <a
                        href="#"
                        className="bg-sky-700 p-4 rounded-2xl hover:bg-sky-600 hover:text-sky-200"
                    >
                        Download Addon <i className="ri-download-line ri-lg"></i>
                    </a>
                    <a
                        href="#"
                        className="bg-zinc-700 hover:bg-zinc-600 p-4 rounded-2xl hover:text-zinc-200"
                    >
                        Pergi Ke Komunitas
                    </a>
                </div>
            </div>
            <img
                src={DataImage.HeroImage}
                alt="Hero Image"
                className="w-[24rem] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
                loading="lazy"
            />
        </div>
    )
}