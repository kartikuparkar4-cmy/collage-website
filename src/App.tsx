import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award,
  ChevronRight,
  Send,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'home' | 'about' | 'departments' | 'faculties' | 'contact' | 'student-form' | 'dept-detail';

interface DepartmentInfo {
  title: string;
  code: string;
  vision: string;
  mission: string[];
  highlights: string[];
  intake: number;
  icon: string;
}

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; id: Page }[] = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Departments', id: 'departments' },
    { name: 'Faculties', id: 'faculties' },
    { name: 'Contact', id: 'contact' },
    { name: 'Student Form', id: 'student-form' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 shadow-md py-2 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="bg-primary p-2 rounded-lg mr-3">
              <GraduationCap className="text-white w-8 h-8" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight text-white">PRMCEAM</h1>
              <p className="text-[10px] uppercase tracking-wider text-gray-300">Badnera, Amravati</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setCurrentPage(link.id)}
                className={`text-sm font-medium transition-colors hover:text-zinc-400 ${
                  currentPage === link.id 
                    ? 'text-white border-b-2 border-white' 
                    : 'text-gray-300'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-zinc-950 shadow-xl absolute top-full left-0 w-full overflow-hidden border-b border-zinc-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setCurrentPage(link.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-3 text-base font-medium rounded-md ${
                    currentPage === link.id ? 'bg-zinc-900 text-white' : 'text-gray-300 hover:bg-zinc-900'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-zinc-950/80 border-t border-zinc-800 pt-16 pb-8 backdrop-blur-md relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/5 pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center mb-6">
            <GraduationCap className="text-zinc-400 w-10 h-10 mr-3" />
            <h2 className="text-xl font-bold">Prof. Ram Meghe College of Engineering and Management</h2>
          </div>
          <p className="text-gray-400 mb-6 max-w-md">
            Empowering students with quality technical education and management skills to excel in the global arena. Established with a vision to create world-class professionals.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-zinc-600 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-zinc-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-zinc-700 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-zinc-400 transition-colors">Academic Calendar</a></li>
            <li><a href="#" className="hover:text-zinc-400 transition-colors">Examination Cell</a></li>
            <li><a href="#" className="hover:text-zinc-400 transition-colors">Library Portal</a></li>
            <li><a href="#" className="hover:text-zinc-400 transition-colors">Placement Cell</a></li>
            <li><a href="#" className="hover:text-zinc-400 transition-colors">Alumni Association</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">Contact Us</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start">
              <MapPin className="text-zinc-400 mr-3 mt-1 shrink-0" size={18} />
              <span>Badnera, Amravati, Maharashtra 444701</span>
            </li>
            <li className="flex items-center">
              <Phone className="text-zinc-400 mr-3 shrink-0" size={18} />
              <span>+91 721 2580374</span>
            </li>
            <li className="flex items-center">
              <Mail className="text-zinc-400 mr-3 shrink-0" size={18} />
              <span>info@prmceam.ac.in</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} PRMCEAM, Badnera. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// --- Page Sections ---

const Home = ({ onNavigate }: { onNavigate: (p: Page) => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      url: "https://i.ytimg.com/vi/ERx29jUiO_k/maxresdefault.jpg",
      title: "Engineering Excellence",
      subtitle: "Home to CSE, IT, and Electrical Engineering Departments."
    },
    {
      url: "https://image-static.collegedunia.com/public/reviewPhotos/674889/campus.jpg",
      title: "Vibrant Campus Life",
      subtitle: "A place where innovation meets tradition."
    },
    {
      url: "https://harshalwarade.github.io/prmceamlib/pics/1.jpg",
      title: "State-of-the-art Library",
      subtitle: "Access to thousands of journals and digital resources."

    }
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const events = [
    { date: "15 April", title: "Annual Tech Fest 'Techno-Vision 2026'", type: "Cultural" },
    { date: "22 April", title: "National Level Paper Presentation", type: "Academic" },
    { date: "05 May", title: "Campus Placement Drive - TCS & Infosys", type: "Placement" },
    { date: "12 May", title: "Workshop on Artificial Intelligence", type: "Workshop" }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={slides[currentSlide].url} 
              alt={slides[currentSlide].title} 
              className="w-full h-full object-cover brightness-40"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-zinc-800/50 text-zinc-300 text-sm font-semibold mb-6 backdrop-blur-sm border border-zinc-700/50">
              Academic Year 2026-27
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => onNavigate('student-form')}
                className="px-8 py-4 bg-primary text-zinc-950 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all transform hover:scale-105 shadow-lg active:scale-95"
              >
                Admission Inquiry
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-full font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-md active:scale-95"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? 'bg-white w-8' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </section>

      {/* Events & Academic Info */}
      <section className="py-24 bg-transparent bg-dot-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-transparent to-zinc-950/50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-white">Upcoming Events</h2>
                <button className="text-zinc-400 font-semibold flex items-center hover:underline">
                  View All Events <ChevronRight size={18} />
                </button>
              </div>
              <div className="space-y-4">
                {events.map((event, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="bg-zinc-900/50 p-6 rounded-2xl shadow-sm border border-zinc-800/50 flex items-center group cursor-pointer backdrop-blur-sm"
                  >
                    <div className="bg-zinc-800/50 text-zinc-300 p-4 rounded-xl text-center min-w-[100px] mr-6 group-hover:bg-primary group-hover:text-zinc-950 transition-colors border border-zinc-700/50">
                      <span className="block font-bold text-xl">{event.date.split(' ')[0]}</span>
                      <span className="text-xs uppercase font-bold">{event.date.split(' ')[1]}</span>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1 block">{event.type}</span>
                      <h3 className="text-lg font-bold text-white">{event.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-primary rounded-3xl p-8 text-zinc-950 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Academic Calendar</h3>
                <p className="text-zinc-800 mb-6">Stay updated with the important dates for the current academic session 2026-27.</p>
                <ul className="space-y-4">
                  {[
                    "Semester Start: Jan 15",
                    "Mid-Term Exams: Mar 10",
                    "Final Exams: Jun 05",
                    "Summer Break: Jul 01"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <CheckCircle2 size={16} className="mr-3 text-zinc-800" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-8 w-full py-4 bg-white text-primary rounded-xl font-bold hover:bg-zinc-100 transition-colors">
                Download PDF Calendar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Infrastructure */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-600/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://image-static.collegedunia.com/public/college_data/images/campusimage/14610_Entrance.webp" 
                alt="Main Engineering Block" 
                className="rounded-3xl shadow-2xl relative z-10 border border-zinc-800"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full -z-0"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-zinc-400 font-bold tracking-widest uppercase text-sm mb-2 block">Featured Infrastructure</span>
              <h2 className="text-4xl font-bold text-white mb-6">Main Engineering Block</h2>
              <p className="text-zinc-300 mb-6 leading-relaxed text-lg">
                Our main engineering block houses the core technical departments including Computer Science & Engineering, Information Technology, and Electrical Engineering. 
              </p>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Equipped with modern classrooms, specialized laboratories, and collaborative spaces, this building is the heart of our technical academic activities.
              </p>
              <div className="space-y-4">
                {[
                  "Department of Computer Science & Engineering",
                  "Department of Information Technology",
                  "Department of Electrical Engineering"
                ].map((dept, i) => (
                  <div key={i} className="flex items-center text-zinc-200 font-medium">
                    <CheckCircle2 size={20} className="text-zinc-400 mr-3" />
                    {dept}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-dot-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years of Excellence", value: "15+" },
              { label: "Successful Alumni", value: "5000+" },
              { label: "Expert Faculty", value: "100+" },
              { label: "Placement Support", value: "100%" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-white"
              >
                <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.value}</div>
                <div className="text-zinc-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-transparent bg-dot-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose PRMCEAM?</h2>
            <div className="w-20 h-1.5 bg-zinc-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Award className="w-10 h-10 text-zinc-400" />, title: "Accredited Excellence", desc: "Top-tier accreditation ensuring high standards of technical education and infrastructure." },
              { icon: <Users className="w-10 h-10 text-zinc-400" />, title: "Expert Faculty", desc: "Highly qualified professors with extensive industry and research experience." },
              { icon: <BookOpen className="w-10 h-10 text-zinc-400" />, title: "Modern Labs", desc: "State-of-the-art laboratories equipped with the latest technology and software." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.3)" }}
                className="p-8 bg-zinc-900/40 rounded-2xl border border-zinc-800/50 shadow-sm transition-all cursor-default backdrop-blur-sm"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Top Recruiters</h2>
            <div className="w-20 h-1.5 bg-zinc-500 mx-auto rounded-full mb-6"></div>
            <p className="text-zinc-400 max-w-2xl mx-auto">Our students are placed in some of the world's leading companies and organizations.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {[
              "TCS", "Infosys", "Wipro", "Cognizant", "Capgemini", "Accenture",
              "Amazon", "Google", "Microsoft", "IBM", "HCL", "Tech Mahindra"
            ].map((company, i) => (
              <div key={i} className="flex items-center justify-center p-4 bg-zinc-900/50 rounded-xl border border-zinc-800/50 hover:bg-zinc-900 hover:shadow-md transition-all">
                <span className="text-xl font-black text-zinc-500 tracking-tighter">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const About = () => (
  <div className="pt-24 pb-20 bg-transparent animate-in slide-in-from-bottom-4 duration-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <span className="text-zinc-400 font-bold tracking-widest uppercase text-sm mb-2 block">Our Story</span>
          <h2 className="text-4xl font-bold text-white mb-6">About the Institution</h2>
          <p className="text-zinc-300 mb-6 leading-relaxed text-lg">
            Prof. Ram Meghe College of Engineering and Management (PRMCEAM), Badnera, Amravati was established with the noble objective of providing quality technical education to the youth. Named after the visionary leader Prof. Ram Meghe, the institution has grown to become a premier center for engineering and management studies in the Vidarbha region.
          </p>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            Our campus is spread across lush green acres, providing an ideal environment for academic pursuits. We focus on the holistic development of students, combining rigorous academics with co-curricular activities and industry exposure.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50">
              <h4 className="font-bold text-zinc-400 text-2xl mb-1">15+</h4>
              <p className="text-zinc-400 text-sm">Years of Excellence</p>
            </div>
            <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50">
              <h4 className="font-bold text-zinc-400 text-2xl mb-1">5000+</h4>
              <p className="text-zinc-400 text-sm">Successful Alumni</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIciayOvkUCYi1rGXrnQNZr60gbXBKL6xVVg&s" 
            alt="Students on Campus" 
            className="rounded-3xl shadow-2xl relative z-10 border border-zinc-800"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/20 rounded-full -z-0"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-zinc-800/20 rounded-full -z-0"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-primary text-white p-12 rounded-3xl shadow-xl">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Award className="mr-3" /> Our Mission
          </h3>
          <p className="text-zinc-100 leading-relaxed text-lg">
            To provide quality technical education through innovative teaching-learning processes, research activities, and industry-institute interaction to produce globally competent professionals with ethical values.
          </p>
        </div>
        <div className="bg-zinc-900/40 text-white p-12 rounded-3xl shadow-xl border border-zinc-800/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Users className="mr-3" /> Our Vision
          </h3>
          <p className="text-zinc-400 leading-relaxed text-lg">
            To be a center of excellence in technical education and research, producing socially responsible and technically sound professionals who can contribute to the sustainable development of the nation.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Departments = ({ onSelectDept }: { onSelectDept: (code: string) => void }) => {
  const depts = [
    { title: "Computer Engineering", code: "CSE", icon: "💻", desc: "Focusing on software development, AI, and data science." },
    { title: "Civil Engineering", code: "CIVIL", icon: "🏗️", desc: "Designing and building the infrastructure of the future." },
    { title: "Information Technology", code: "IT", icon: "🌐", desc: "Mastering software systems, networking, and digital solutions.", isAwardWinner: true },
    { title: "Electrical Engineering", code: "EE", icon: "⚡", desc: "Powering the world with sustainable energy solutions." },
    { title: "Electronics & Telecommunication", code: "EXTC", icon: "📡", desc: "Advancing communication and embedded systems." },
    { title: "MBA", code: "MGMT", icon: "📊", desc: "Developing future business leaders and entrepreneurs." }
  ];

  return (
    <div className="pt-24 pb-20 bg-transparent animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Academic Departments</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Explore our wide range of engineering and management programs designed for the modern industry.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depts.map((dept, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.03 }}
              onClick={() => onSelectDept(dept.code)}
              className="bg-zinc-900/40 p-8 rounded-2xl shadow-sm border border-zinc-800/50 hover:shadow-md transition-all backdrop-blur-sm cursor-pointer group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{dept.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zinc-400 transition-colors">{dept.title}</h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-3 py-1 bg-zinc-800/50 text-zinc-300 text-xs font-bold rounded-full border border-zinc-700/50">{dept.code}</span>
                {(dept as any).isAwardWinner && (
                  <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-[10px] font-bold rounded-full border border-amber-500/30 flex items-center">
                    <Award size={10} className="mr-1" /> BEST DEPT AWARD
                  </span>
                )}
              </div>
              <p className="text-zinc-400 mb-6">{dept.desc}</p>
              <button className="text-zinc-400 font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                About Department <ChevronRight size={16} className="ml-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DepartmentDetail = ({ code, onBack }: { code: string, onBack: () => void }) => {
  const departmentDetails: Record<string, Omit<DepartmentInfo, 'code' | 'icon'>> = {
    "CSE": {
      title: "Computer Science & Engineering",
      vision: "To produce globally competent professionals in Computer Science and Engineering with ethical values.",
      mission: [
        "To provide quality technical education through innovative teaching-learning processes.",
        "To encourage research and development activities in the field of Computer Science.",
        "To foster industry-institute interaction for better placement and entrepreneurship."
      ],
      highlights: ["AI & ML Lab", "Cyber Security Center", "Cloud Computing Facility", "NVIDIA Deep Learning Institute Partner"],
      intake: 120
    },
    "CIVIL": {
      title: "Civil Engineering",
      vision: "To be a center of excellence in Civil Engineering education and research.",
      mission: [
        "To impart technical knowledge and skills in Civil Engineering.",
        "To promote research and consultancy in the field of construction and infrastructure.",
        "To develop socially responsible civil engineers."
      ],
      highlights: ["Concrete Technology Lab", "Geotechnical Lab", "Surveying & Levelling", "AutoCAD & STAAD Pro Training"],
      intake: 60
    },
    "IT": {
      title: "Information Technology",
      vision: "To excel in the field of Information Technology by providing quality education.",
      mission: [
        "To provide a strong foundation in IT principles and practices.",
        "To encourage innovation and creativity in software development.",
        "To prepare students for the challenges of the IT industry."
      ],
      highlights: ["🏆 Best Department Award Winner 2026", "Web Development Lab", "Mobile App Development", "Network Security", "Oracle Academy Member"],
      intake: 60
    },
    "EE": {
      title: "Electrical Engineering",
      vision: "To produce competent electrical engineers with a focus on sustainable energy.",
      mission: [
        "To provide quality education in Electrical Engineering.",
        "To promote research in renewable energy and power systems.",
        "To develop ethical and professional electrical engineers."
      ],
      highlights: ["Power Systems Lab", "Electrical Machines Lab", "Renewable Energy Lab", "MATLAB Simulation Center"],
      intake: 60
    },
    "EXTC": {
      title: "Electronics & Telecommunication",
      vision: "To be a leader in Electronics and Telecommunication Engineering education.",
      mission: [
        "To provide a strong theoretical and practical foundation in EXTC.",
        "To encourage research in communication and embedded systems.",
        "To prepare students for the global electronics industry."
      ],
      highlights: ["VLSI Design Lab", "Embedded Systems Lab", "Digital Signal Processing", "IoT Innovation Cell"],
      intake: 60
    },
    "MGMT": {
      title: "Master of Business Administration",
      vision: "To develop future business leaders with a global perspective.",
      mission: [
        "To provide quality management education.",
        "To foster entrepreneurship and leadership skills.",
        "To encourage research in business and management."
      ],
      highlights: ["Digital Marketing Lab", "Financial Analytics", "HR Management", "Entrepreneurship Development Cell"],
      intake: 60
    }
  };

  const detail = departmentDetails[code];

  if (!detail) return <div className="pt-32 text-center text-white">Department not found.</div>;

  return (
    <div className="pt-24 pb-20 bg-transparent animate-in fade-in duration-700">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center text-zinc-400 hover:text-zinc-300 mb-8 transition-colors group"
        >
          <ChevronRight size={20} className="rotate-180 mr-1 group-hover:-translate-x-1 transition-transform" />
          Back to Departments
        </button>

        <div className="bg-zinc-900/40 rounded-3xl p-8 md:p-12 border border-zinc-800/50 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div>
              <span className="inline-block px-4 py-1 bg-zinc-800/50 text-zinc-300 text-sm font-bold rounded-full mb-4 border border-zinc-700/50">
                Department of {code}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{detail.title}</h1>
            </div>
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 text-center min-w-[160px]">
              <div className="text-3xl font-bold text-zinc-400 mb-1">{detail.intake}</div>
              <div className="text-zinc-400 text-xs uppercase tracking-widest font-bold">Annual Intake</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Award className="text-zinc-400 mr-3" size={24} /> Vision
                </h3>
                <p className="text-zinc-300 leading-relaxed italic">"{detail.vision}"</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <GraduationCap className="text-zinc-400 mr-3" size={24} /> Mission
                </h3>
                <ul className="space-y-4">
                  {detail.mission.map((m, i) => (
                    <li key={i} className="flex items-start text-zinc-400">
                      <CheckCircle2 size={18} className="text-zinc-500 mr-3 mt-1 shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-zinc-900/30 rounded-3xl p-8 border border-zinc-800/30">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <BookOpen className="text-zinc-400 mr-3" size={24} /> Key Highlights
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {detail.highlights.map((h, i) => (
                  <div key={i} className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50 flex items-center text-zinc-200">
                    <div className="w-2 h-2 bg-zinc-500 rounded-full mr-4"></div>
                    {h}
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="w-full mt-8 py-4 bg-zinc-800/50 text-zinc-300 border border-zinc-700/50 rounded-xl font-bold hover:bg-zinc-800/70 transition-all"
              >
                Inquire for Admission
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Faculties = () => {
  const faculties = [
    { name: "Dr. Ajay Thakare", role: "Principal", qual: "Ph.D. (Electronics)", img: "https://media.licdn.com/dms/image/v2/C4E03AQFOHD1MZYEmmw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516808610478?e=1776297600&v=beta&t=0TJIhnLCVq3pS2P4J1XWXGrWxbsiKUnptXNwCHxKQO4" },
    { name: "dr. d. g. harkut", role: "HOD, Computer Engg.", qual: "M.E. (CSE)", img: "https://media.licdn.com/dms/image/v2/C5103AQFSSaMkgwlqzA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1558073227116?e=2147483647&v=beta&t=-WbTawGGWUy6vunPOdWw2ui4AKWGjnSLal53s7UyaQA" },
    { name: "Dr. A. V. Kadu", role: "Dean Academics", qual: "Ph.D. (Mechanical)", img: "https://i1.rgstatic.net/ii/profile.image/474011810439171-1490024630464_Q512/Ashish-Kadu-2.jpg" },
    { name: "Prof. P. V. Khandve", role: "HOD, Civil Engg.", qual: "M.Tech (Structural)", img: "https://prmceam.ac.in/departments/civil-department/civil-hod.jpg" },
    { name: "Prof. K. N. Somwanshi", role: "HOD, Electrical Engg.", qual: "M.E. (Power Systems)", img: "https://prmceam.irins.org/profile_images/364411.jpg" },
    { name: "dr. Priti Khodke", role: "HOD, Information Technology", qual: "M.E. (Digital Electronics)", img: "https://i1.rgstatic.net/ii/profile.image/297415216254979-1447920721416_Q512/Priti-Khodke.jpg" },
  ];    

  return (
    <div className="pt-24 pb-20 bg-transparent animate-in zoom-in-95 duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Distinguished Faculty</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Guided by experienced educators and industry experts dedicated to student success.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculties.map((f, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="group bg-zinc-900/40 rounded-2xl p-4 border border-zinc-800/50 hover:border-zinc-500/50 hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-square bg-zinc-800">
                <img 
                  src={f.img} 
                  alt={f.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex space-x-3 text-white">
                    <Mail size={18} className="cursor-pointer hover:text-zinc-300 transition-colors" />
                    <Linkedin size={18} className="cursor-pointer hover:text-zinc-300 transition-colors" />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-zinc-400 transition-colors">{f.name}</h3>
              <p className="text-zinc-400 font-medium text-xs mb-1">{f.role}</p>
              <p className="text-zinc-500 text-[10px] uppercase tracking-wider">{f.qual}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 pb-20 bg-transparent animate-in slide-in-from-right-4 duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
            <p className="text-zinc-300 mb-10 text-lg">Have questions? We're here to help. Reach out to us via any of the following channels or fill out the form.</p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-zinc-900/50 p-4 rounded-2xl shadow-sm mr-6 text-zinc-400 border border-zinc-800/50">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Our Location</h4>
                  <p className="text-zinc-400">Prof. Ram Meghe College of Engineering and Management,<br />Badnera, Amravati, Maharashtra 444701</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-zinc-900/50 p-4 rounded-2xl shadow-sm mr-6 text-zinc-400 border border-zinc-800/50">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Phone Number</h4>
                  <p className="text-zinc-400">+91 721 2580374 / 2580375</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-zinc-900/50 p-4 rounded-2xl shadow-sm mr-6 text-zinc-400 border border-zinc-800/50">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Email Address</h4>
                  <p className="text-zinc-400">info@prmceam.ac.in<br />admission@prmceam.ac.in</p>
                </div>
              </div>
            </div>

            {/* Map Iframe */}
            <div className="mt-12 h-80 bg-zinc-900 rounded-3xl overflow-hidden relative border-4 border-zinc-800 shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.324838495448!2d77.7496663148805!3d20.91923098605834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4a6617d47a3%3A0x330d20085395f321!2sProf.%20Ram%20Meghe%20College%20of%20Engineering%20%26%20Management!5e0!3m2!1sen!2sin!4v1648286000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="bg-zinc-900/40 p-10 rounded-3xl shadow-xl border border-zinc-800/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            {submitted ? (
              <div className="bg-green-900/20 text-green-400 p-8 rounded-2xl text-center flex flex-col items-center border border-green-800/30">
                <CheckCircle2 size={64} className="mb-4 text-green-500" />
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-zinc-300 mb-2">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950/50 text-white focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-300 mb-2">Email Address</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950/50 text-white focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-300 mb-2">Subject</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950/50 text-white focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition-all" placeholder="Inquiry about..." />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-300 mb-2">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950/50 text-white focus:ring-2 focus:ring-zinc-500 focus:border-transparent outline-none transition-all resize-none" placeholder="Your message here..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-primary text-zinc-950 rounded-xl font-bold text-lg hover:bg-zinc-200 transition-all flex items-center justify-center">
                  Send Message <Send size={18} className="ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const StudentForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const courses = [
    "Computer Engineering",
    "Civil Engineering",
    "information technology",
    "Electrical Engineering",
    "Electronics & Telecommunication",
    "MBA",
   
  ];

  return (
    <div className="pt-24 pb-20 bg-transparent min-h-screen animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden border border-zinc-800">
          <div className="bg-primary p-8 text-zinc-950 text-center">
            <h2 className="text-3xl font-bold mb-2">Admission Inquiry Form</h2>
            <p className="text-zinc-800">Take the first step towards your bright future with PRMCEAM.</p>
          </div>
          
          <div className="p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-900/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-800/30">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Registration Successful!</h3>
                <p className="text-zinc-400 mb-8 max-w-md mx-auto">
                  Your inquiry has been received. Our admission counselor will contact you within 24-48 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-primary text-zinc-950 rounded-full font-bold hover:bg-zinc-200 transition-all"
                >
                  Fill Another Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h4 className="font-bold text-white border-b border-zinc-800 pb-2">Personal Details</h4>
                    <div>
                      <label className="block text-sm font-semibold text-zinc-300 mb-2">Full Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950/50 text-white focus:ring-2 focus:ring-zinc-500 outline-none" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-zinc-300 mb-2">Date of Birth</label>
                      <input required type="date" className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950/50 text-white focus:ring-2 focus:ring-zinc-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-zinc-300 mb-2">Email Address</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950/50 text-white focus:ring-2 focus:ring-zinc-500 outline-none" placeholder="example@mail.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-zinc-300 mb-2">Phone Number</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950/50 text-white focus:ring-2 focus:ring-zinc-500 outline-none" placeholder="+91 00000 00000" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="font-bold text-white border-b border-zinc-800 pb-2">Course & Address</h4>
                    <div>
                      <label className="block text-sm font-semibold text-zinc-300 mb-2">Course Interested In</label>
                      <select required className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950/50 text-white focus:ring-2 focus:ring-zinc-500 outline-none">
                        <option value="" className="bg-zinc-950">Select a course</option>
                        {courses.map(c => <option key={c} value={c} className="bg-zinc-950">{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-zinc-300 mb-2">Permanent Address</label>
                      <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950/50 text-white focus:ring-2 focus:ring-zinc-500 outline-none resize-none" placeholder="Enter your full address"></textarea>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm text-zinc-400 bg-zinc-950/50 p-4 rounded-xl border border-zinc-800">
                  <input type="checkbox" required className="w-4 h-4 text-primary rounded" />
                  <span>I hereby declare that the information provided is true to the best of my knowledge.</span>
                </div>

                <button type="submit" className="w-full py-4 bg-primary text-zinc-950 rounded-xl font-bold text-xl hover:bg-zinc-200 transition-all shadow-lg hover:shadow-zinc-900/20">
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedDept, setSelectedDept] = useState<string | null>(null);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedDept]);

  const handleDeptSelect = (code: string) => {
    setSelectedDept(code);
    setCurrentPage('dept-detail');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'about': return <About />;
      case 'departments': return <Departments onSelectDept={handleDeptSelect} />;
      case 'faculties': return <Faculties />;
      case 'contact': return <Contact />;
      case 'student-form': return <StudentForm />;
      case 'dept-detail': return <DepartmentDetail code={selectedDept || 'CSE'} onBack={() => setCurrentPage('departments')} />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen font-sans text-zinc-200 bg-app-gradient flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}
