import Navbar from '../components/common/Navbar'
import Hero from '../components/home/Hero'
import AboutConference from '../components/home/AboutConference'
import AboutInstitute from '../components/home/AboutInstitute'
import AboutInstitute2 from '../components/home/AboutInstitute2'
import AboutGwalior from '../components/home/AboutGwalior'
import CommitteeSection from '../components/home/CommitteeSection'
import Footer from '../components/common/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutConference />
      <AboutInstitute />
      <AboutInstitute2 />
      <AboutGwalior />
      <CommitteeSection />
      <Footer />
    </>
  );
};

export default Home