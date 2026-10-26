import  { useState } from 'react';
import { FaArrowRight, FaCheck, FaCopy, FaFileAlt } from 'react-icons/fa';
import { ImSpinner8 } from 'react-icons/im';

const PRESETS = [
  {
    title: 'PM Kisan Eligibility',
    text: 'All landholding farmer families having cultivable landholding in their names are eligible. Beneficiaries must complete e-KYC via OTP or biometric authentication to receive 6000 INR per year in three equal installments directly into their Aadhaar-linked bank accounts.'
  },
  {
    title: 'Income Tax Slab 2026',
    text: 'Under the default New Tax Regime, no tax is payable for individuals with taxable income up to 7 lakh rupees due to rebate under Section 87A. Standard deduction of 75,000 rupees is applicable for salaried employees.'
  },
  {
    title: 'Passport Police Verification',
    text: 'Applicants can opt for mPassport Police App for accelerated physical verification. Ensure current address documents match DigiLocker verification to avoid query delays and penalty fees.'
  }
];

export default function DecoderCard() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDecode = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setOutputText('');

    // Demo simulation logic
    setTimeout(() => {
      setOutputText(
        `📌 **Saral Explanation (Asaan Shabdon Me):**\n` +
        `• Ye scheme/rule un sabhi eligible logon ke liye hai jinke documents linked hain.\n` +
        `• Paison ka transfer ya process seedha Aadhaar-linked account ke zariye hoga, kisi middleman ki zaroorat nahi hai.\n\n` +
        `✅ **Key Eligibility / Requirement:**\n` +
        `• e-KYC aur address document updated hona mandatory hai.\n` +
        `• Annual rebate aur standard deduction automatically apply ho jayenge.\n\n` +
        `⚠️ **Important Warning:** Deadline se pehle verification complete karein taaki transaction cancel ya query raise na ho.`
      );
      setLoading(false);
    }, 1200);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-4">
      {/* Quick Presets */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mr-1">
          <FaFileAlt className="w-3.5 h-3.5 text-indigo-400" /> Presets:
        </span>
        {PRESETS.map((preset, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setInputText(preset.text)}
            className="text-xs bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-300 hover:border-indigo-500/40 px-3 py-1.5 rounded-full transition-all"
          >
            {preset.title}
          </button>
        ))}
      </div>

      {/* Main Split Box */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left: Input */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-2">
              Official English Notification / Circular
            </label>
            <textarea
              rows={10}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Official circular ka English text yahan paste karein..."
              className="w-full bg-slate-950/70 border border-slate-800 rounded-xl p-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none font-mono"
            />
          </div>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-800/80">
            <span className="text-xs text-slate-500">{inputText.length} characters</span>
            <button
              type="button"
              onClick={handleDecode}
              disabled={loading || !inputText.trim()}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-medium text-sm px-5 py-2 rounded-xl transition-all shadow-lg shadow-indigo-600/20 cursor-pointer disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <ImSpinner8 className="w-4 h-4 animate-spin" />
                  <span>Decoding...</span>
                </>
              ) : (
                <>
                  <span>Decode to Hinglish</span>
                  <FaArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right: Output */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-medium text-indigo-400 uppercase tracking-wider">
                Hinglish Explanation (Asaan Bhasha)
              </label>
              {outputText && (
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
                >
                  {copied ? <FaCheck className="w-3 h-3 text-emerald-400" /> : <FaCopy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              )}
            </div>

            {loading ? (
              <div className="h-64 flex flex-col items-center justify-center gap-3 text-slate-500">
                <ImSpinner8 className="w-6 h-6 animate-spin text-indigo-400" />
                <p className="text-xs">Sarkari complex terms ko simplify kiya ja raha hai...</p>
              </div>
            ) : outputText ? (
              <div className="p-3 bg-slate-950/70 border border-slate-800/80 rounded-xl text-slate-200 text-sm whitespace-pre-line leading-relaxed font-sans min-h-[220px]">
                {outputText}
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center text-center p-6 border border-dashed border-slate-800 rounded-xl">
                <p className="text-slate-500 text-sm">Koi circular paste karke "Decode" dabayein ya upar diye gaye presets try karein.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}