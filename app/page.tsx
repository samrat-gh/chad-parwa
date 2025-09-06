import DashainCounter from "@/components/dashain-counter";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      <HeroSection>
        <DashainCounter />
      </HeroSection>

      {/* About Dashain Section */}
      <section className="h-screen overflow-x-hidden bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-red-800 md:text-5xl">
            About Dashain
          </h2>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/dashain.jpg"
                  alt="Dashain celebration"
                  width={1200}
                  height={800}
                  sizes="(min-width: 1024px) 600px, (min-width:768px) 50vw, 100vw"
                  className="h-auto w-full max-w-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                Dashain is the longest and most auspicious festival in Nepal,
                lasting 15 days during the bright lunar fortnight of Ashwin
                (September-October). It celebrates the victory of Goddess Durga
                over the demon Mahishasura, symbolizing the triumph of good over
                evil.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                This festival brings families together from across the globe, as
                people return to their ancestral homes to receive blessings from
                elders through the sacred ritual of tika and jamara.
              </p>
              <div className="rounded-xl bg-orange-100 p-6">
                <h3 className="mb-2 text-xl font-semibold text-orange-800">
                  Festival Duration
                </h3>
                <p className="text-orange-700">15 Days of Celebration</p>
                <p className="mt-1 text-sm text-orange-600">
                  From Ghatasthapana to Kojagrat Purnima
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Days Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 px-4 py-20">
        <div className="mx-auto md:max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-red-800 md:text-5xl">
            Key Days of Dashain
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="mb-4 text-center text-xl font-bold text-red-800">
                Ghatasthapana
              </h3>
              <p className="text-center text-gray-600">
                The festival begins with planting jamara (barley seeds) in a
                sacred vessel
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <span className="text-2xl">🙏</span>
              </div>
              <h3 className="mb-4 text-center text-xl font-bold text-red-800">
                Maha Navami
              </h3>
              <p className="text-center text-gray-600">
                The ninth day dedicated to intense worship of Goddess Durga
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="mb-4 text-center text-xl font-bold text-red-800">
                Vijaya Dashami
              </h3>
              <p className="text-center text-gray-600">
                The main day when elders give tika and blessings to younger
                family members
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Traditions & Activities */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-red-800 md:text-5xl">
            Traditions & Activities
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition-shadow group-hover:shadow-xl">
                <Image
                  src="/children-flying-kite-during-dashain.jpg"
                  alt="Flying kites"
                  width={800}
                  height={400}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition-shadow group-hover:shadow-xl">
                <Image
                  src="/dashain-swings.jpg"
                  alt="Bamboo swings"
                  width={800}
                  height={400}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition-shadow group-hover:shadow-xl">
                <Image
                  src="/dashain-meals.jpg"
                  alt="Family feast"
                  width={800}
                  height={400}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition-shadow group-hover:shadow-xl">
                <Image
                  src="/dashain-clothes.jpg"
                  alt="New clothes"
                  width={800}
                  height={400}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition-shadow group-hover:shadow-xl">
                <Image
                  src="/card-games.jpg"
                  alt="Card games"
                  width={800}
                  height={400}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Card Games</h3>
                  <p className="text-sm opacity-90">Social gambling and fun</p>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition-shadow group-hover:shadow-xl">
                <Image
                  src="/Maitidevi-temple.jpg"
                  alt="Temple visits"
                  width={800}
                  height={400}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
      <section className="w-full bg-gradient-to-r from-orange-50 to-red-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-bold text-red-800 md:text-5xl">
                Tika & Jamara
              </h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  The heart of Dashain lies in the sacred ritual where elders
                  place tika (a mixture of rice, yogurt, and vermillion) on the
                  foreheads of younger family members while offering jamara
                  (sacred barley shoots).
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  This ceremony symbolizes the transfer of blessings,
                  protection, and good fortune from the elder generation to the
                  younger ones, strengthening family bonds.
                </p>
                {/* <div className="rounded-xl bg-white p-6 shadow-lg">
                  <h3 className="mb-3 text-xl font-semibold text-red-800">
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
                </div> */}
              </div>
            </div>
            <div>
              <Image
                src="/tika-and-jamara.jpg"
                alt="Tika ceremony"
                width={1000}
                height={600}
                className="h-96 w-full rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Significance */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 text-4xl font-bold text-red-800 md:text-5xl">
            Cultural Significance
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6">
              <div className="mb-4 text-4xl">⚔️</div>
              <h3 className="mb-3 text-xl font-bold text-red-800">
                Victory of Good
              </h3>
              <p className="text-gray-600">
                Celebrates Goddess Durga&apos;s victory over evil, representing
                the eternal triumph of dharma over adharma.
              </p>
            </div>
            <div className="p-6">
              <div className="mb-4 text-4xl">👨‍👩‍👧‍👦</div>
              <h3 className="mb-3 text-xl font-bold text-red-800">
                Family Unity
              </h3>
              <p className="text-gray-600">
                Brings families together across generations, strengthening bonds
                and preserving cultural traditions.
              </p>
            </div>
            <div className="p-6">
              <div className="mb-4 text-4xl">🔄</div>
              <h3 className="mb-3 text-xl font-bold text-red-800">Renewal</h3>
              <p className="text-gray-600">
                Marks a time of spiritual and emotional renewal, fresh
                beginnings, and hope for prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
