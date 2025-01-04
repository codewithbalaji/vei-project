

const Footer = () => {
  
  return (
    <footer className="bg-gradient-to-r from-[#747e83] to-[#606b77] text-white py-4 px-4"> 
      <div className="container mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-around items-start mb-6">
          {/* Left Side - Institute Details */}
          <div className="md:w-2/3">
            <h2 className="text-lg font-semibold">विश्वजीतनामृत जग्नम्</h2>
            <h3 className="text-lg">अटल बिहारी वाजपेयी भारतीय सूचना प्रौद्योगिकी एवं प्रबंधन संस्थान, ग्वालियर</h3>
            <h3 className="text-lg mb-4">Atal Bihari Vajpayee Indian Institute of Information Technology and Management Gwalior</h3>
            <p>Morena Rd, IIITM Campus, Gwalior - 474015, Madhya Pradesh, India</p>
            <p>Email: inspect2024@iiitm.ac.in</p>
            <p>Ph. No.: +91-9586288218; +91-9109106995</p>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="md:w-1/3 flex justify-end gap-4 mt-4 md:mt-0">
            <a href="/" className="hover:underline">Home</a>
            <a href="/author-guidelines" className="hover:underline">Author Guidelines</a>
            <a href="https://www.iiitm.ac.in" className="hover:underline">ABV-IIITM Gwalior Website</a>
          </div>
        </div>

        {/* Bottom Section - Centered */}
        <div className="text-center">
          <p className="mb-2">Designed & Developed by: (ABV-IIITM Gwalior Students)</p>
          <p className="mb-2">© 2024 All rights reserved.</p>
          <p>
            Total visitors: <span className="bg-white text-slate-600 px-2 py-0.5 rounded">26272</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer