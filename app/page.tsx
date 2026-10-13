export default function Home() {
  return (
    <main>
      <nav className="flex justify-between items-center p-6 shadow">
        <h1 className="text-2xl font-bold">
          MyCompany
        </h1>
        <ul className="flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      
      <section className="text-center py-24">
        <h1 className="text-5xl font-bold mb-6">
          Build Modern Web Apps
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Membuat aplikasi web modern menggunakan
          Next.js dan Tailwind CSS.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Get Started
          </button>

          <button className="border px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                ⚡ Fast
              </h3>
              <p>
                Dibangun menggunakan teknologi modern.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                🎨 Modern
              </h3>
              <p>
                Tampilan elegan dan responsif.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                🔒 Secure
              </h3>
              <p>
                Dibangun dengan best practice keamanan.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">
            About Us
          </h2>

          <p className="text-gray-600">
            Kami membantu bisnis membangun aplikasi
            web modern menggunakan Next.js dan
            teknologi terbaru.
          </p>
        </div>
      </section>
      <section className="bg-blue-600 text-white py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Siap Memulai Project Anda?
          </h2>

          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold">
            Hubungi Kami
          </button>
        </div>
      </section>

      <footer className="text-center py-6">
        © 2026 MyCompany. All Rights Reserved.
      </footer>
    </main> 
  );
}