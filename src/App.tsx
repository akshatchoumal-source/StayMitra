import React, { useState } from 'react';

const ALL_HOSTELS = [
  { id: 1, name: "Jadavpur Manor", location: "Near JU Gate 4", price: "4,500", type: "Boys", img: "https://images.unsplash.com/photo-1555854817-5b2260d50c47?auto=format&fit=crop&q=80&w=800", phone: "919876543210" },
  { id: 2, name: "Sector V Sky Residences", location: "Salt Lake, Sec V", price: "8,200", type: "Co-ed", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800", phone: "919876543211" },
  { id: 3, name: "Heritage Suites", location: "Anandapur", price: "6,500", type: "Girls", img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800", phone: "919876543212" },
  { id: 4, name: "Howrah Grand PG", location: "Howrah Station", price: "4,000", type: "Boys", img: "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?auto=format&fit=crop&q=80&w=800", phone: "919876543213" },
  { id: 5, name: "New Town Premium", location: "Action Area 1", price: "9,000", type: "Girls", img: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800", phone: "919876543214" },
  { id: 6, name: "Gariahat Mansion", location: "South Kolkata", price: "5,500", type: "Girls", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800", phone: "919876543215" },
  { id: 7, name: "Salt Lake Residency", location: "City Centre 1", price: "7,500", type: "Boys", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800", phone: "919876543216" },
  { id: 8, name: "Behala Student Hub", location: "Diamond Harbour Rd", price: "4,200", type: "Co-ed", img: "https://images.unsplash.com/photo-1512918766671-ad651e98a49a?auto=format&fit=crop&q=80&w=800", phone: "919876543217" },
  { id: 9, name: "IEM Student Lodge", location: "Sector III, Salt Lake", price: "6,800", type: "Boys", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800", phone: "919876543218" },
  { id: 10, name: "Techno India PG", location: "Rajarhat", price: "5,000", type: "Co-ed", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800", phone: "919876543219" },
  { id: 11, name: "Park Street Elite", location: "Park Street", price: "12,000", type: "Co-ed", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800", phone: "919876543220" },
  { id: 12, name: "Kolkata University Stay", location: "College Street", price: "3,800", type: "Boys", img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800", phone: "919876543221" },
  { id: 13, name: "Amity Residences", location: "Action Area 2", price: "8,500", type: "Girls", img: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=800", phone: "919876543222" },
  { id: 14, name: "Lake Town Heights", location: "Lake Town", price: "6,000", type: "Co-ed", img: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&q=80&w=800", phone: "919876543223" },
  { id: 15, name: "Dum Dum Metro PG", location: "Near Metro", price: "4,500", type: "Boys", img: "https://images.unsplash.com/photo-1524758631624-e2822e304cff?auto=format&fit=crop&q=80&w=800", phone: "919876543224" }
];

export default function App() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const filtered = ALL_HOSTELS.filter(h => 
    (filter === "All" || h.type === filter) &&
    (h.location.toLowerCase().includes(query.toLowerCase()) || h.name.toLowerCase().includes(query.toLowerCase()))
  );

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSfLIiezM4JUVeC_WK3PMIOPWvX_YaDlq5G8BlFNmjrTieBtfg/viewform?usp=publish-editor";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* --- FLOATING NAV --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-4xl border border-white/10 bg-black/40 backdrop-blur-2xl px-6 py-3 rounded-2xl flex justify-between items-center shadow-2xl">
        <div onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="cursor-pointer h-10 w-auto">
          <img src="https://i.ibb.co/JFK9HpyJ/image.png" alt="StayMitra Logo" className="h-full w-auto object-contain" />
        </div>
        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <button onClick={() => scrollTo('about')} className="hover:text-blue-400 transition-colors">About</button>
          <button onClick={() => scrollTo('browse')} className="hover:text-blue-400 transition-colors">Browse</button>
          <a href={formLink} target="_blank" rel="noopener noreferrer" className="text-blue-400">List Yours</a>
        </div>
      </nav>

      {/* --- HERO --- */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="relative z-10">
          <span className="inline-block bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-blue-500/20">Zero Brokerage. Zero Stress.</span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-8">Ditch the Broker.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 italic">Live Like a King.</span></h1>
          <button onClick={() => scrollTo('browse')} className="bg-white text-black px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-95">Explore Stays ↓</button>
        </div>
      </section>

      {/* --- ABOUT US SECTION --- */}
      <section id="about" className="py-32 px-8 border-y border-white/5 bg-slate-950/30 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-[10px] font-black tracking-[0.5em] text-blue-500 uppercase mb-8 italic">Our Mission</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">By students, for students.</h3>
          <p className="text-gray-400 text-lg leading-relaxed italic">StayMitra was built because we're tired of brokers asking for one month's rent just to show a room. We keep it 100% free for students.</p>
        </div>
      </section>

      {/* --- BROWSE SECTION --- */}
      <section id="browse" className="py-32 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="text-left"><h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-2 italic uppercase">Find Your Spot</h2></div>
            <div className="flex bg-gray-900/50 p-1.5 rounded-2xl border border-white/5 backdrop-blur-lg">
              {["All", "Boys", "Girls", "Co-ed"].map((t) => (
                <button key={t} onClick={() => setFilter(t)} className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === t ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' : 'text-gray-500 hover:text-white'}`}>{t}</button>
              ))}
            </div>
          </div>
          <input type="text" placeholder="Search area, landmark..." className="w-full bg-gray-900/40 border border-white/10 rounded-3xl py-8 px-10 outline-none text-xl focus:ring-4 ring-blue-600/20 mb-20" value={query} onChange={(e) => setQuery(e.target.value)} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((h) => (
              <div key={h.id} className="group bg-gray-900/20 border border-white/5 rounded-[2.5rem] p-4 hover:border-blue-600/30 transition-all hover:translate-y-[-8px] shadow-lg">
                <div className="h-64 rounded-[2rem] overflow-hidden mb-6 relative"><img src={h.img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" /></div>
                <div className="px-4 pb-4">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-400 transition-colors">{h.name}</h3>
                  <p className="text-gray-500 text-sm mb-8 font-medium italic">📍 {h.location}</p>
                  <div className="flex justify-between items-center py-4 border-t border-white/5">
                    <span className="text-2xl font-black">₹{h.price}</span>
                    <button onClick={() => setSelected(h)} className="bg-white text-black w-14 h-14 rounded-2xl flex items-center justify-center font-black hover:bg-blue-600 hover:text-white transition-all shadow-xl">→</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER & BRANDING --- */}
      <footer className="bg-black pt-24 pb-12 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="h-12 w-auto mb-6">
              <img src="https://i.ibb.co/JFK9HpyJ/image.png" alt="StayMitra Logo" className="h-full w-auto object-contain" />
            </div>
            <a href="https://akshatchoumalblogger.blogspot.com/2024/06/akshatchoumalblogger.html" target="_blank" className="bg-blue-600/10 text-blue-400 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest border border-blue-500/20 inline-block hover:bg-blue-600 hover:text-white transition-all">My Portfolio →</a>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left"><h5 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-white">Policies</h5>
            <ul className="text-gray-500 space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><button onClick={() => setShowTerms(true)} className="hover:text-white text-blue-400">Terms of Use 📜</button></li>
              <li><button onClick={() => setShowPrivacy(true)} className="hover:text-white text-blue-400">Privacy Policy 🕵️</button></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white/5 italic select-none pointer-events-none">MADE BY AKSHAT CHOUMAL</h2>
          </div>
        </div>
        <p className="text-center text-[8px] font-black text-gray-800 uppercase tracking-[0.8em] border-t border-white/5 pt-10">StayMitra &copy; 2026</p>
      </footer>

      {/* --- MODALS (Same as before) --- */}
      {showPrivacy && (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-gray-900 border border-white/10 w-full max-w-2xl h-[80vh] rounded-[3rem] overflow-y-auto p-10 relative custom-scrollbar text-gray-300 space-y-6 shadow-2xl">
            <button onClick={() => setShowPrivacy(false)} className="fixed top-12 right-12 bg-white text-black w-10 h-10 rounded-full font-black text-xl hover:bg-blue-600 hover:text-white transition-all shadow-xl">✕</button>
            <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">Privacy Policy 🕵️</h2>
            <p>We don't track you. We don't sell your data. Browse freely. 😎</p>
          </div>
        </div>
      )}

      {showTerms && (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-gray-900 border border-white/10 w-full max-w-2xl h-[80vh] rounded-[3rem] overflow-y-auto p-10 relative custom-scrollbar text-gray-300 space-y-6 shadow-2xl">
            <button onClick={() => setShowTerms(false)} className="fixed top-12 right-12 bg-white text-black w-10 h-10 rounded-full font-black text-xl hover:bg-blue-600 hover:text-white transition-all shadow-xl">✕</button>
            <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">Terms of Use 📜</h2>
            <p>1. Respect the hustle. 2. Verify yourself. 3. Be a decent human being.</p>
          </div>
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-gray-950 border border-white/10 w-full max-w-lg rounded-[3rem] overflow-hidden relative shadow-2xl">
            <button onClick={() => setSelected(null)} className="absolute top-8 right-8 z-10 bg-white text-black w-10 h-10 rounded-full font-black text-xl hover:bg-white hover:text-black shadow-lg transition-all">✕</button>
            <img src={selected.img} className="w-full h-64 object-cover" alt="hostel" />
            <div className="p-10 text-white"><h3 className="text-4xl font-black mb-2 leading-none">{selected.name}</h3><p className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-10">📍 {selected.location}</p>
              <div className="flex gap-4">
                <a href={`tel:+${selected.phone}`} className="flex-1 bg-white text-black py-5 rounded-2xl font-black text-xs uppercase tracking-widest text-center shadow-xl">Call</a>
                <button onClick={() => window.open(`https://wa.me/${selected.phone}`, '_blank')} className="flex-1 border border-green-500/20 text-green-500 py-5 rounded-2xl font-black text-xs uppercase tracking-widest">WhatsApp</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}