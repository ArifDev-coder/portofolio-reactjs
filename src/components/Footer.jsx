const Footer = () => {
  return (
    <div className="mt-32 py-4 flex justify-between gap-6 md:gap-0 items-center md:flex-row flex-col">
      <h1 className="text-2xl font-bold">ArifDev</h1>
      <div className="flex gap-7">
        <a href="#beranda">Beranda</a>
        <a href="#about">Tentang</a>
        <a href="#project">Proyek</a>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/ArifDev-coder"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="0"
          data-aos-once="true"
          target="blank"
        >
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a
          href="#"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <i className="ri-reddit-fill ri-2x"></i>
        </a>
        <a
          href="#"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a
          href="#"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          <i className="ri-youtube-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
