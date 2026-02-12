
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Instagram, MapPin, 
  CheckCircle2, ChevronRight, MessageSquare, 
  Star, Send, Globe, Smartphone, Laptop as LaptopIcon
} from 'lucide-react';
import { 
  BUSINESS_INFO, 
  CATEGORIES, 
  SERVICES, 
  TIPS, 
  PRODUCTS, 
  ADVANTAGES 
} from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Layanan', href: '#services' },
    { name: 'Kategori', href: '#categories' },
    { name: 'Produk', href: '#products' },
    { name: 'Tips', href: '#tips' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-tech-dark/80 backdrop-blur-md border-b border-tech-cyan/20 py-4 shadow-neon' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-tech-cyan rounded-lg flex items-center justify-center shadow-neon">
            <LaptopIcon className="text-tech-dark" size={24} />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter text-white">
            TR<span className="text-tech-cyan">STORE18</span>
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-tech-cyan transition-colors">
              {link.name}
            </a>
          ))}
          <a href={BUSINESS_INFO.whatsappLink} className="px-5 py-2.5 bg-tech-cyan text-tech-dark rounded-full text-sm font-bold shadow-neon hover:scale-105 transition-all">
            Hubungi Kami
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-tech-dark/95 backdrop-blur-xl border-b border-tech-cyan/10 overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-2">
                  {link.name}
                </a>
              ))}
              <a href={BUSINESS_INFO.whatsappLink} className="w-full text-center py-4 bg-tech-cyan text-tech-dark rounded-xl font-bold">
                WhatsApp Kami
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tech-cyan/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tech-cyan/5 rounded-full blur-[100px] -ml-24 -mb-24"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-2 mb-6">
            <span className="h-px w-8 bg-tech-cyan"></span>
            <span className="text-tech-cyan font-bold tracking-[0.2em] uppercase text-xs">{BUSINESS_INFO.subTagline}</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-display font-extrabold leading-[0.9] mb-6">
            {BUSINESS_INFO.name}
          </h1>
          <h2 className="text-2xl lg:text-3xl font-display text-gray-400 mb-6 font-light">
            {BUSINESS_INFO.tagline}
          </h2>
          <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed border-l-2 border-tech-cyan/30 pl-6 italic">
            "{BUSINESS_INFO.slogan}"
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={BUSINESS_INFO.whatsappLink} className="px-8 py-4 bg-tech-cyan hover:shadow-neon-lg text-tech-dark rounded-xl font-bold transition-all flex items-center group">
              WhatsApp Kami
              <MessageSquare className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
            <a href={BUSINESS_INFO.maps} className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-bold transition-all flex items-center">
              Lihat Lokasi
              <MapPin className="ml-2 w-5 h-5 text-tech-cyan" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group"
        >
          <div className="relative z-10 p-4 border border-white/10 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
             <img 
               src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800" 
               alt="Hero Tech" 
               className="w-full h-auto rounded-[1.5rem] shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
             />
          </div>
          <div className="absolute -inset-4 bg-tech-cyan/20 blur-3xl -z-10 rounded-full group-hover:bg-tech-cyan/30 transition-all"></div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-tech-dark/90 backdrop-blur border border-tech-cyan/30 p-4 rounded-2xl shadow-neon z-20 flex items-center space-x-3">
             <div className="w-12 h-12 bg-tech-cyan/20 rounded-xl flex items-center justify-center">
               <CheckCircle2 className="text-tech-cyan" />
             </div>
             <div>
               <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Terjamin</p>
               <p className="font-bold">Unit Berkualitas</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 rounded-[3rem] text-center border-t-2 border-tech-cyan/40">
           <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Siapa Kami?</h2>
           <p className="text-xl text-gray-400 leading-relaxed mb-12">
            TRSTORE18 adalah toko spesialis jual beli laptop baru dan second berkualitas sesuai kebutuhan dan budget pelanggan. Kami juga menyediakan layanan service dan upgrade untuk memastikan performa laptop tetap optimal.
           </p>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {ADVANTAGES.map((adv, idx) => (
               <div key={idx} className="flex flex-col items-center group">
                 <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-4 border border-white/10 group-hover:border-tech-cyan group-hover:shadow-neon transition-all">
                   <div className="text-tech-cyan">{adv.icon}</div>
                 </div>
                 <span className="text-sm font-bold text-gray-300 group-hover:text-tech-cyan transition-colors">{adv.label}</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: any) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group p-8 rounded-[2rem] bg-tech-navy border border-white/5 hover:border-tech-cyan/50 hover:bg-tech-cyan/5 transition-all duration-300"
  >
    <div className="w-16 h-16 bg-tech-cyan/10 rounded-2xl flex items-center justify-center text-tech-cyan mb-8 group-hover:shadow-neon group-hover:scale-110 transition-all">
      {service.icon}
    </div>
    <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-tech-cyan transition-colors">{service.title}</h4>
    <p className="text-gray-400 leading-relaxed">{service.desc}</p>
  </motion.div>
);

const CategoryGrid = () => (
  <section id="categories" className="py-24 bg-white/[0.02]">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h3 className="text-4xl md:text-6xl font-display font-extrabold mb-4">Pilihan Laptop Untuk Anda</h3>
        <p className="text-gray-500">Kategori produk yang disesuaikan dengan aktivitas Anda</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((cat, i) => (
          <div key={i} className="glass-card p-10 rounded-3xl group hover:border-tech-cyan transition-all text-center">
            <div className="w-20 h-20 mx-auto bg-tech-cyan/10 rounded-full flex items-center justify-center text-tech-cyan mb-6 group-hover:bg-tech-cyan group-hover:text-tech-dark transition-all duration-500">
              {React.cloneElement(cat.icon as any, { size: 32 })}
            </div>
            <h5 className="text-xl font-bold mb-3">{cat.name}</h5>
            <p className="text-sm text-gray-500">{cat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TipsSection = () => (
  <section id="tips" className="py-24 relative overflow-hidden">
    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-tech-cyan/20 to-transparent"></div>
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-tech-cyan font-bold uppercase tracking-widest text-sm mb-4">Edukasi Pengguna</h3>
          <h4 className="text-4xl md:text-5xl font-display font-extrabold mb-8">Tips Cerdas Rawat Laptop</h4>
          <p className="text-gray-400 mb-10 text-lg">Agar laptop Anda awet dan performa tetap stabil seperti baru, ikuti panduan perawatan rutin dari teknisi kami.</p>
          <div className="space-y-4">
            {TIPS.map((tip, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center space-x-4 bg-white/5 p-4 rounded-xl border border-white/5"
              >
                <div className="w-8 h-8 rounded-full bg-tech-cyan/20 flex items-center justify-center text-tech-cyan">
                  <CheckCircle2 size={16} />
                </div>
                <span className="font-medium text-gray-300">{tip}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-tech-cyan/5 rounded-[4rem] border-2 border-tech-cyan/20 p-8 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-tech-cyan/10 blur-[80px] animate-pulse"></div>
            <LaptopIcon size={240} className="text-tech-cyan relative z-10 drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]" />
            <div className="absolute top-12 right-12 w-24 h-24 bg-tech-cyan/20 rounded-full blur-xl animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section id="products" className="py-24">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4">
        <div>
          <h3 className="text-4xl font-display font-bold">Produk Terlaris</h3>
          <p className="text-gray-500 mt-2">Update stok laptop berkualitas minggu ini</p>
        </div>
        <a href={BUSINESS_INFO.instagram} className="text-tech-cyan font-bold flex items-center hover:underline">
          Lihat di Instagram <ChevronRight size={20} />
        </a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((prod) => (
          <div key={prod.id} className="group relative rounded-3xl overflow-hidden border border-white/5">
            <img src={prod.img} alt={prod.title} className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-tech-dark via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="text-tech-cyan text-xs font-bold uppercase tracking-widest">{prod.cat}</span>
              <h5 className="text-xl font-bold mt-1">{prod.title}</h5>
            </div>
            <div className="absolute top-6 right-6 p-2 bg-tech-cyan rounded-full shadow-neon opacity-0 group-hover:opacity-100 transition-opacity">
               <Star size={16} className="text-tech-dark" fill="currentColor" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h3 className="text-tech-cyan font-bold mb-4 uppercase tracking-[0.2em]">Contact Us</h3>
            <h4 className="text-5xl font-display font-bold mb-10 leading-tight">Siap Mempercepat Performa Laptop Anda?</h4>
            
            <div className="space-y-8 mb-12">
               <div className="flex items-start space-x-6">
                 <div className="w-14 h-14 bg-tech-cyan/10 rounded-2xl flex items-center justify-center text-tech-cyan shrink-0">
                   <MessageSquare />
                 </div>
                 <div>
                   <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">WhatsApp Fast Response</p>
                   <p className="text-2xl font-bold">{BUSINESS_INFO.whatsapp}</p>
                 </div>
               </div>
               <div className="flex items-start space-x-6">
                 <div className="w-14 h-14 bg-tech-cyan/10 rounded-2xl flex items-center justify-center text-tech-cyan shrink-0">
                   <Instagram />
                 </div>
                 <div>
                   <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">Follow Instagram</p>
                   <p className="text-2xl font-bold">@TopLaptop_Store18</p>
                 </div>
               </div>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden h-80 border border-tech-cyan/20 shadow-neon">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81956135000001!3d-6.194741299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f417f7d1f1f1%3A0x19ca1da87d1cd1f1!2sJakarta!5e0!3m2!1sen!2sid!4v1714123456789!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8)' }} 
                allowFullScreen={true} 
                loading="lazy"
              />
            </div>
          </div>

          <div className="glass-card p-12 rounded-[3rem]">
            <h5 className="text-2xl font-bold mb-8">Kirim Penawaran / Pertanyaan</h5>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Nama Lengkap</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-tech-cyan outline-none transition-all" placeholder="Masukkan nama Anda" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">WhatsApp / Email</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-tech-cyan outline-none transition-all" placeholder="Nomor aktif Anda" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Pesan / Model Laptop</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-tech-cyan outline-none transition-all" placeholder="Detail laptop atau kendala Anda"></textarea>
              </div>
              <button className="w-full py-5 bg-tech-cyan text-tech-dark font-bold rounded-xl shadow-neon hover:shadow-neon-lg hover:scale-[1.02] transition-all flex items-center justify-center space-x-2">
                <span>Kirim Pesan</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-16 border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-8 md:mb-0">
          <a href="#" className="text-3xl font-display font-bold tracking-tighter text-white">
            TR<span className="text-tech-cyan">STORE18</span>
          </a>
          <p className="text-gray-500 mt-2 max-w-xs">{BUSINESS_INFO.tagline}</p>
          <div className="flex space-x-4 mt-6 justify-center md:justify-start">
             <a href={BUSINESS_INFO.instagram} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-tech-cyan hover:border-tech-cyan border border-transparent transition-all"><Instagram size={20} /></a>
             <a href={BUSINESS_INFO.whatsappLink} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-tech-cyan hover:border-tech-cyan border border-transparent transition-all"><MessageSquare size={20} /></a>
             <a href={BUSINESS_INFO.maps} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-tech-cyan hover:border-tech-cyan border border-transparent transition-all"><MapPin size={20} /></a>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <p className="text-gray-400 text-sm mb-4">© 2026 TRSTORE18. All Rights Reserved.</p>
          <div className="flex space-x-6 text-xs font-bold text-gray-600 uppercase tracking-widest">
            <a href="#" className="hover:text-tech-cyan">Privacy</a>
            <a href="#" className="hover:text-tech-cyan">Terms</a>
            <a href="#" className="hover:text-tech-cyan">Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-tech-dark flex items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 border-4 border-tech-cyan/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-tech-cyan border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-4 bg-tech-cyan/20 rounded-full animate-pulse flex items-center justify-center">
                  <LaptopIcon className="text-tech-cyan" />
                </div>
              </div>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 font-display font-bold text-tech-cyan tracking-widest uppercase text-sm"
              >
                Initializing Tech Hub...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <About />
        <section id="services" className="py-24 container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s, i) => <ServiceCard key={i} service={s} index={i} />)}
          </div>
        </section>
        <CategoryGrid />
        <Gallery />
        <TipsSection />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href={BUSINESS_INFO.whatsappLink}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        <MessageSquare size={32} fill="currentColor" />
      </a>
    </div>
  );
}
