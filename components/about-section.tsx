export function AboutSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Tentang Kami</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Tentang PMR</h3>
                <p className="text-muted-foreground leading-relaxed">
                  PMR (Palang Merah Remaja) adalah organisasi kemanusiaan di kalangan pelajar yang fokus pada
                  pertolongan pertama, pendidikan kesehatan, dan kegiatan sosial.
                </p>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Tentang SAF-C</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Smecone Aiders Fans Club (SAF-C) adalah nama kontingen PMR Wira SMKN 1 Purwokerto, ekstrakurikuler ini
                  bertujuan untuk mengembangkan keterampilan dan kemampuan siswa di bidang kesehatan yang menawarkan
                  berbagai kegiatan seperti penanganan korban, public speaking, penanganan penyakit, dan kegiatan
                  sosial, dengan tujuan untuk melatih dan membentuk jiwa kemanusiaan pada anggotanya agar bisa memiliki
                  kepedulian yang tinggi kepada sesama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
