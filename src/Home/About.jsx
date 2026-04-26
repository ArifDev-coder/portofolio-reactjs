import DataImage, { listTools, listProyek } from "../data/data";

export default function About() {
    return (
        <div className="tentang mt-32 py-10" id="about">
            <div
                className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
            >
                <img
                    src={DataImage.HeroImage}
                    alt="Image"
                    className="w-12 rounded-md mb-10 sm:hidden"
                    loading="lazy"
                />
                <p className="text-base/loose mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                    vero recusandae, quidem, voluptas iusto sed, aliquam voluptatibus
                    magnam natus sint aperiam tempore voluptatum alias enim accusamus
                    inventore aut assumenda exercitationem saepe officia sunt deserunt
                    velit. Suscipit numquam obcaecati eum totam dicta quod ipsum.
                </p>
                <div className="flex items-center justify-between">
                    <img
                        src={DataImage.HeroImage}
                        alt="Image"
                        className="w-12 rounded-md sm:block hidden"
                        loading="lazy"
                    />
                    <div className="flex items-center gap-6">
                        <div className="">
                            <h1 className="text-4xl mb-1">
                                45<span className="text-sky-500">+</span>
                            </h1>
                            <p>Proyek Selesai</p>
                        </div>
                        <div className="">
                            <h1 className="text-4xl mb-1">
                                4<span className="text-sky-500">+</span>
                            </h1>
                            <p>Tahun Pengalaman</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tools mt-32">
                <h1
                    className="text-4xl/snug font-bold mb-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-once="true"
                >
                    Tools yang dipakai
                </h1>
                <p
                    className="xl:w-2/5 lg:w-2/4 md:2/3 sm:3/4 w-full text-base/loose opacity-50"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    data-aos-once="true"
                >
                    Berikut ini beberapa tools yang saya pakai untuk membuat website
                    ini.
                </p>
                <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {listTools.map((tool) => (
                        <div
                            className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                            key={tool.id}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-once="true"
                            data-aos-delay={tool.dad}
                        >
                            <img
                                src={tool.gambar}
                                alt={tool.ket}
                                className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                                loading="lazy"
                            />
                            <div>
                                <h4 className="font-bold">{tool.nama}</h4>
                                <p className="opacity-50">{tool.ket}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}