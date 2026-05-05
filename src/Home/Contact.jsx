export default function Contact() {
    return (
        <div className="contact mt-32 p-10" id="contact">
            <h1
                className="text-4xl mb-2 font-bold text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
            >
                Contact
            </h1>
            <p
                className="text-base/loose text-center mb-10 opacity-50"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-once="true"
            >
                Mari Terhubung dengan saya.
            </p>
            <form
                action="https://formsubmit.co/achadzainul67@gmail.com"
                method="POST"
                className="bg-zinc-800 p-10 w-full mx-auto rounded-lg"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
                data-aos-once="true"
            >
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name..."
                            required
                            className="borded border-zinc-500 p-2 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <labe className="font-semibold" l>
                            Email
                        </labe>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email..."
                            required
                            className="borded border-zinc-500 p-2 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="font-semibold">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            cols={64}
                            rows={7}
                            placeholder="Message..."
                            className="borded border-zinc-500 p-2 rounded-md"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-sky-700 p-3 rounded-lg block border w-full cursor-pointer border-zinc-600 hover:bg-sky-600"
                        >
                            Kirim Pesan
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}