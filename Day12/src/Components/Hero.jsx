import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>CREATIVE</h1>
        <p> Click down to see some creative images <br /> OR  <br /> Click gallery to see some creative images </p>

        <button onClick={() => navigate('/gallery')}> CLICK HERE </button>
      </div>

      <span className="bottom-left">BACKGROUND</span>

      <span className="bottom-right"> Here u will find some  creative <br /> images that are made by <br /> AI prompts or peoples creativity  </span>
    </section>
  )
}

export default Hero


