import HeroSection from "@/components/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Hero Section */}
      <HeroSection />

      {/* About Dashain Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-red-800 mb-16">
            About Dashain
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1604735103013-57046c9a1c8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Dashain celebration"
                width={1000}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Dashain is the longest and most auspicious festival in Nepal,
                lasting 15 days during the bright lunar fortnight of Ashwin
                (September-October). It celebrates the victory of Goddess Durga
                over the demon Mahishasura, symbolizing the triumph of good over
                evil.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This festival brings families together from across the globe, as
                people return to their ancestral homes to receive blessings from
                elders through the sacred ritual of tika and jamara.
              </p>
              <div className="bg-orange-100 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-orange-800 mb-2">
                  Festival Duration
                </h3>
                <p className="text-orange-700">15 Days of Celebration</p>
                <p className="text-sm text-orange-600 mt-1">
                  From Ghatasthapana to Kojagrat Purnima
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Days Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-red-800 mb-16">
            Key Days of Dashain
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-red-800 text-center mb-4">
                Ghatasthapana
              </h3>
              <p className="text-gray-600 text-center">
                The festival begins with planting jamara (barley seeds) in a
                sacred vessel
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🙏</span>
              </div>
              <h3 className="text-xl font-bold text-red-800 text-center mb-4">
                Maha Navami
              </h3>
              <p className="text-gray-600 text-center">
                The ninth day dedicated to intense worship of Goddess Durga
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-bold text-red-800 text-center mb-4">
                Vijaya Dashami
              </h3>
              <p className="text-gray-600 text-center">
                The main day when elders give tika and blessings to younger
                family members
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Traditions & Activities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-red-800 mb-16">
            Traditions & Activities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Flying kites"
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Flying Kites</h3>
                  <p className="text-sm opacity-90">
                    Celebrating the end of monsoon
                  </p>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Bamboo swings"
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Bamboo Swings</h3>
                  <p className="text-sm opacity-90">
                    लिङ्गे पिङ्ग - Traditional fun
                  </p>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Family feast"
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Festive Feast</h3>
                  <p className="text-sm opacity-90">
                    Special delicacies and goat curry
                  </p>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="New clothes"
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">New Clothes</h3>
                  <p className="text-sm opacity-90">
                    Fresh attire for the festival
                  </p>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Card games"
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Card Games</h3>
                  <p className="text-sm opacity-90">Social gambling and fun</p>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Temple visits"
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Temple Visits</h3>
                  <p className="text-sm opacity-90">Worship of Goddess Durga</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tika Ceremony Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-8">
                Tika & Jamara
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The heart of Dashain lies in the sacred ritual where elders
                  place tika (a mixture of rice, yogurt, and vermillion) on the
                  foreheads of younger family members while offering jamara
                  (sacred barley shoots).
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This ceremony symbolizes the transfer of blessings,
                  protection, and good fortune from the elder generation to the
                  younger ones, strengthening family bonds.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">
                    Tika Components:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • <strong>Rice:</strong> Prosperity and abundance
                    </li>
                    <li>
                      • <strong>Yogurt:</strong> Purity and peace
                    </li>
                    <li>
                      • <strong>Vermillion:</strong> Protection and power
                    </li>
                    <li>
                      • <strong>Jamara:</strong> Growth and renewal
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1605649487212-47bdab064df8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Tika ceremony"
                width={1000}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Significance */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-12">
            Cultural Significance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl mb-4">⚔️</div>
              <h3 className="text-xl font-bold text-red-800 mb-3">
                Victory of Good
              </h3>
              <p className="text-gray-600">
                Celebrates Goddess Durga&apos;s victory over evil, representing
                the eternal triumph of dharma over adharma.
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold text-red-800 mb-3">
                Family Unity
              </h3>
              <p className="text-gray-600">
                Brings families together across generations, strengthening bonds
                and preserving cultural traditions.
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-red-800 mb-3">Renewal</h3>
              <p className="text-gray-600">
                Marks a time of spiritual and emotional renewal, fresh
                beginnings, and hope for prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">शुभ दशैं!</h3>
          <p className="text-red-200 mb-6">
            May this Dashain bring happiness, prosperity, and blessings to all
          </p>
          <div className="text-3xl mb-4">🙏</div>
          <p className="text-red-300 text-sm">
            Reflecting on Nepali Culture and Traditions
          </p>
        </div>
      </footer>
    </div>
  );
}
