export function VisionMissionSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Visi & Misi</h2>
            <p className="text-lg text-muted-foreground">Landasan dan arah pergerakan PMR WIRA SMKN 1 Purwokerto</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="space-y-6 animate-fade-in">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <span className="text-2xl font-bold text-primary">V</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Visi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mewujudkan PMR Wira SMKN 1 Purwokerto sebagai ekstrakurikuler yang aktif sehingga dapat membawa
                  perubahan yang lebih baik dengan tetap berlandaskan 7 Prinsip Dasar Palang Merah dan Tri Bakti PMR.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="space-y-6 animate-fade-in">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <span className="text-2xl font-bold text-primary">M</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Misi</h3>
                <ol className="text-muted-foreground leading-relaxed space-y-3 list-decimal list-inside">
                  <li>
                    Menjadikan anggota PMR yang dapat memberikan informasi dan edukasi kepalangmerahan kepada seluruh
                    siswa
                  </li>
                  <li>Meningkatkan kinerja serta kerja sama sesama anggota</li>
                  <li>
                    Mewujudkan PMR Wira SMK Negeri 1 Purwokerto sebagai ekstrakurikuler yang terpandang baik di sekolah
                    maupun masyarakat
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
