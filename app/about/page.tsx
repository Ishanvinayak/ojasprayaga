import OptimizedImage from "@/components/optimized-image"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Top Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <OptimizedImage src="/placeholder.svg?height=600&width=1200" alt="Our peaceful studio space" fill />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">About Us</h1>
            <p className="text-xl md:text-2xl font-light">Discover our journey to wellness</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif text-charcoal">Our Journey</h2>
            <div className="space-y-4 text-charcoal/80 leading-relaxed">
              <p>
              Welcome to Ojas Prayaga – Where Vitality Meets Inner Harmony
              At Ojas Prayaga, we believe yoga is more than movement—it’s a sacred journey of awakening, healing, and inner transformation. With over 15 years of dedicated experience, we are here to guide you toward holistic well-being through authentic yogic traditions rooted in deep knowledge and soulful practice.

              </p>
              <p>
              Meet the Founders
              Jayavelu, with a Master’s degree and M.Phil in Yoga, brings profound expertise in classical yoga and therapeutic methodologies. His practice is anchored in discipline, spiritual depth, and a compassionate commitment to helping students reconnect with their inner selves.
              Gayathri, holding a Master’s in Yoga and Master’s in Psychology, bridges the ancient science of yoga with the modern understanding of the mind. Her sessions weave together emotional balance, meditative awareness, and gentle strength, creating space for inner clarity and transformation.

              </p>
              <p>
              Together, Jayavelu and Gayathri founded Ojas Prayaga as a sanctuary for those seeking to renew, realign, and rise—physically, mentally, and spiritually.
              Our Vision To guide individuals from all walks of life toward vibrant health, conscious living, and self-realization through the timeless wisdom of yoga. What We Offer Traditional Hatha & Therapeutic Yoga Chakra Activation & Energy Work Meditation & Yogic Breathing Psychology-Integrated Yogic Healing Specialized Workshops, Retreats & Teacher Trainings Whether you are a beginner or an advanced practitioner, Ojas Prayaga invites you to explore the deeper layers of your being—where ojas (vitality) flows freely and inner union (prayaga) is found. Come join us—and let your journey to wholeness begin.
              </p>
            </div>
            <Button className="bg-sage hover:bg-sage/90 text-white px-8 py-3">Meet Our Team</Button>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <OptimizedImage src="/placeholder.svg?height=500&width=400" alt="Our founder in meditation" fill />
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif text-charcoal mb-8">Our Philosophy</h2>
          <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
            <p>
              We believe that wellness is not a destination, but a journey of continuous growth and self-discovery. Our
              approach integrates time-honored healing traditions with modern therapeutic techniques, creating a
              comprehensive path to well-being.
            </p>
            <p>
              Every individual is unique, and so is their path to wellness. We honor this by offering personalized
              experiences that meet you exactly where you are in your journey, whether you're seeking physical healing,
              emotional balance, or spiritual growth.
            </p>
            <p>
              Our commitment extends beyond individual sessions. We strive to build a community of conscious individuals
              who support each other's growth and contribute to a more peaceful, balanced world.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
