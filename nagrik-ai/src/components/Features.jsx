
import { FaBookOpen, FaShieldAlt, FaBolt } from 'react-icons/fa';

const FEATURES = [
  {
    icon: FaBookOpen,
    title: 'No Complex Jargon',
    desc: 'Bina confusing legal terms ke, pure everyday bol-chaal wali Hinglish me point-to-point details.'
  },
  {
    icon: FaShieldAlt,
    title: 'Accurate Schemes & Rules',
    desc: 'Direct circular summary taaki eligibility, necessary documents aur key dates bilkul miss na hon.'
  },
  {
    icon: FaBolt,
    title: 'Instant & Zero Signup',
    desc: 'Bina kisi registration ya setup ke direct input paste karein aur turant decoded output payein.'
  }
];

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURES.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="font-semibold text-slate-100 text-base mb-1">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}