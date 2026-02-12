
import React from 'react';
import { 
  Laptop, 
  Cpu, 
  Settings, 
  MessageCircle, 
  Monitor, 
  Gamepad2, 
  GraduationCap, 
  Briefcase,
  Wrench,
  CheckCircle,
  TrendingUp,
  Award
} from 'lucide-react';

export const BUSINESS_INFO = {
  name: 'TRSTORE18',
  tagline: 'Solusi Laptop & Komputer Terpercaya',
  slogan: 'Pelayanan Terbaik dan Kepuasan Pelanggan adalah Prioritas Utama Kami',
  subTagline: 'TRSTORE18 Best & Helpful Laptop Service',
  whatsapp: '089530616157',
  whatsappLink: 'https://wa.me/6289530616157',
  instagram: 'https://instagram.com/TopLaptop_Store18',
  maps: 'https://maps.app.goo.gl/xFjeTWnhhWnzfZNQ6'
};

export const CATEGORIES = [
  { name: 'Kuliah & Sekolah', icon: <GraduationCap />, desc: 'Pilihan hemat & handal untuk pelajar.' },
  { name: 'Kerja & Bisnis', icon: <Briefcase />, desc: 'Laptop slim dengan performa multitasking.' },
  { name: 'Gaming & Rendering', icon: <Gamepad2 />, desc: 'Power maksimal untuk beban kerja berat.' },
  { name: 'Programming', icon: <Monitor />, desc: 'Kapasitas RAM besar untuk developer.' },
];

export const SERVICES = [
  {
    title: 'Service Laptop',
    icon: <Wrench className="w-8 h-8" />,
    desc: 'Perbaikan hardware dan software ditangani teknisi ahli.'
  },
  {
    title: 'Upgrade Hardware',
    icon: <Cpu className="w-8 h-8" />,
    desc: 'Atasi laptop lemot dengan upgrade RAM & SSD berkualitas.'
  },
  {
    title: 'Ganti Sparepart',
    icon: <Settings className="w-8 h-8" />,
    desc: 'Baterai, Keyboard, LCD, WiFi, dan komponen lainnya.'
  },
  {
    title: 'Konsultasi GRATIS',
    icon: <MessageCircle className="w-8 h-8" />,
    desc: 'Bantu temukan laptop impian sesuai budget Anda.'
  }
];

export const TIPS = [
  'Bersihkan kipas & ventilasi (3–6 bulan)',
  'Gunakan cooling pad saat kerja berat',
  'Rawat baterai dengan benar (ideal 20–80%)',
  'Pakai charger original & sesuai spesifikasi',
  'Simpan di tempat kering & bersirkulasi baik',
  'Scan virus & update sistem rutin'
];

export const PRODUCTS = [
  { id: 1, title: 'MacBook Pro M2', cat: 'Premium', img: 'https://images.unsplash.com/photo-1517336714468-473588db62b5?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'ASUS ROG Strix', cat: 'Gaming', img: 'https://images.unsplash.com/photo-1544117518-30dd44b593d2?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'ThinkPad X1 Carbon', cat: 'Business', img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'Acer Aspire 5', cat: 'Student', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=600' },
  { id: 5, title: 'HP Victus 15', cat: 'Gaming', img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=600' },
  { id: 6, title: 'Dell Latitude', cat: 'Office', img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=600' },
];

export const ADVANTAGES = [
  { label: 'Konsultasi Gratis', icon: <MessageCircle /> },
  { label: 'Unit Berkualitas', icon: <Award /> },
  { label: 'Sesuai Budget', icon: <TrendingUp /> },
  { label: 'Fast Response', icon: <CheckCircle /> }
];
