export default function About() {
  return (
    <section id="about" className="bg-[#080808] py-24 px-6 md:px-16">
      <div className="flex flex-col items-center">
        <span className="inline-block px-4 py-1 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 text-[#c9a84c] text-xs tracking-[0.2em] uppercase">
          About Me
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-12 max-w-7xl mx-auto">
        
        {/* Left Column - Image */}
        <div className="relative w-fit mx-auto">
          <img 
            src="/profile.jpg" 
            alt="Maneesh Yadav" 
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-2 border-[#2a2a2a]"
          />
          <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-[#c9a84c]/30 z-[-1]"></div>
          <div className="absolute -bottom-3 -left-3 bg-[#c9a84c] text-[#080808] text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Design Engineer
          </div>
        </div>

        {/* Right Column - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-6 leading-tight">
            Crafting Precision. <br/> 
            <span className="text-[#c9a84c]">Engineering Excellence.</span>
          </h2>
          
          <p className="text-[#a0a0a0] text-base leading-relaxed mb-6">
            With a deep passion for mechanical design and reverse engineering, 
            I transform complex components into precise CAD models and manufacturing-ready 
            tooling designs. My work bridges the gap between existing parts and innovative 
            new solutions — ensuring every design meets the highest standards of accuracy.
          </p>
          
          <div className="flex gap-4 flex-wrap mt-8">
            <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl px-5 py-4 min-w-[140px] flex-1">
              <div className="text-2xl font-bold text-[#c9a84c]">50+</div>
              <div className="text-xs text-[#a0a0a0] mt-1 uppercase tracking-wider">Projects</div>
            </div>
            <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl px-5 py-4 min-w-[140px] flex-1">
              <div className="text-2xl font-bold text-[#c9a84c]">3+</div>
              <div className="text-xs text-[#a0a0a0] mt-1 uppercase tracking-wider">Years Exp</div>
            </div>
            <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl px-5 py-4 min-w-[140px] flex-1">
              <div className="text-2xl font-bold text-[#c9a84c]">100%</div>
              <div className="text-xs text-[#a0a0a0] mt-1 uppercase tracking-wider">Precision</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
