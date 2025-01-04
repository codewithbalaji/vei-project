export default function CallForPapersComp() {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">Call For Papers</h1>
          
          <div className="mb-8">
            <p className="mb-2 text-lg">
              <span className="font-semibold">INSPECT-2024 Call for Papers - </span>
              <a href="#" className="text-blue-600 hover:underline">Download</a>
            </p>
            
            <p className="mb-4 text-lg">
              Welcome to the <span className="font-semibold">2024 International Conference on Intelligent Signal Processing and Effective Communication Technologies (INSPECT-2024)</span>, to be held from <span className="font-semibold">7-8th December 2024</span> at Gwalior, India. The conference is sponsored by the IEEE MP Section. This conference is the premier forum for the presentation of new advances and research results in various disciplines and their associated applications in all aspects of Communication Technology, Signal Processing Informatics, and Machine Learning that consider the improvement and development of quality of human life and better living on earth. In addition to the technical sessions, there will be invited sessions, panel sessions, and keynote addresses. The conference aims to stimulate interaction and convergence among researchers active in the areas of Communication Technology, Signal Processing Informatics and Machine Learning.
            </p>
          </div>
  
          <TrackSection
            number={1}
            title="Signal and Image Processing"
            topics={[
              "Digital Signal Processing (DSP)",
              "Image Enhancement and Restoration, Image Compression",
              "Pattern Recognition, Computer Vision",
              "Medical Image Processing, Biomedical Signal Processing",
              "Remote Sensing, Speech Processing",
              "Multimedia Signal Processing, Sparse Signal Processing",
              "Hyperspectral Imaging, Geospatial Image Processing",
              "Biometric Signal and Image Processing",
              "Deep Learning for Signal and Image Processing",
              "Real-Time Signal and Image Processing",
              "Sensor Array Processing",
              "Nonlinear Signal Processing",
              "Adaptive Signal Processing",
              "Audio Signal Processing, and Speech Processing"
            ]}
          />
  
          <TrackSection
            number={2}
            title="Communication Systems & Networking"
            topics={[
              "Wireless Communication Systems",
              "Mobile Networking, 5G and Beyond",
              "Satellite Communication Systems",
              "Network Security and Network Protocols",
              "Cognitive Radio Networks",
              "Software-Defined Networking (SDN)",
              "Information Theory, Cloud Computing",
              "Communication Hardware Design",
              "Social Networks Analysis",
              "Multimedia Communication Systems",
              "Edge Computing & Network Virtualization",
              "Quantum Communication, Network Performance Optimization",
              "Green Networking Technologies",
              "Deep Learning for communication"
            ]}
          />
  
          <TrackSection
            number={3}
            title="IoT, Smart Grid, Robotics & Control Systems"
            topics={[
              "Internet of Things (IoT)",
              "Smart Grid Technologies",
              "Industrial Automation, Robotics and Automation",
              "Control Systems Engineering",
              "Cyber-Physical Systems & Energy Management Systems",
              "Sensor Networks, Autonomous Vehicles",
              "Human-Robot Interaction",
              "Distributed Control Systems",
              "Embedded Systems Design",
              "Renewable Energy Integration",
              "Smart Cities Infrastructure",
              "Home Automation",
              "Intelligent Transportation Systems",
              "Swarm Robotics, Wearable Technology",
              "Teleoperation and Telepresence",
              "Adaptive Control Algorithms",
              "Intelligent Robotics and Control"
            ]}
          />
  
          <TrackSection
            number={4}
            title="RF, Microwave & Optical Communication"
            topics={[
              "Smart Radio Frequency (RF) Engineering",
              "Microwave Engineering",
              "Antenna Design, Radar Systems",
              "Wireless Sensor Networks",
              "Millimeter-Wave Communication, Optical Fiber Communication",
              "Free-Space Optical Communication",
              "Microwave Photonics",
              "RF MEMS (Microelectromechanical Systems)",
              "Radio Wave Propagation",
              "RF Circuit Design",
              "Optical Networks",
              "Microwave Remote Sensing",
              "Terahertz Communication",
              "RF Power Amplifiers",
              "Photonic Integrated Circuits",
              "Waveguide Components",
              "RF Filters and Duplexers",
              "Optical Switching and Routing"
            ]}
          />
  
          <TrackSection
            number={5}
            title="VLSI for Signal Processing & Communication"
            topics={[
              "Digital VLSI Design, Analog VLSI Design",
              "Mixed-Signal VLSI Design, RF Circuit Design",
              "Low-Power VLSI Design",
              "ASIC (Application-Specific Integrated Circuit) Design",
              "FPGA (Field-Programmable Gate Array) Design",
              "VLSI Testing and Verification",
              "SoC (System-on-Chip) Design",
              "Hardware Security",
              "Reconfigurable Computing",
              "VLSI CAD (Computer-Aided Design)",
              "High-Level Synthesis",
              "Hardware Acceleration for Signal Processing Algorithms",
              "Clock and Power Distribution Network Design",
              "VLSI Architectures for Communication Systems",
              "RF Front-End Design",
              "Advanced CMOS Technologies",
              "VLSI Design for Wireless Communication",
              "Neuromorphic Engineering"
            ]}
          />
        </div>
      </div>
    );
  }
  
  function TrackSection({ number, title, topics }: { number: number; title: string; topics: string[] }) {
    return (
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Track {number}: {title}
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {topics.map((topic, index) => (
            <li key={index} className="text-xl">{topic}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  