import GlareHover from "../ui components/GlareHover";

const Features = () => {
  return (
    <div style={{ 
      minHeight: '400px',
      padding: '40px 20px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '30px',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
        width: '100%',
        maxWidth: '1400px'
      }}>
        {/* Card 1 - Job Details */}
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
          width="clamp(250px, 90vw, 300px)"
          height="350px"
        >
          <div style={{ padding: '20px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 1.8rem)', fontWeight: '900', color: '#333', margin: 0 }}>
              Job Details
            </h2>
            <p style={{ marginTop: '15px', color: '#666', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
              Comprehensive job information at your fingertips
            </p>
          </div>
        </GlareHover>

        {/* Card 2 - Application Tracker */}
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
          width="clamp(250px, 90vw, 300px)"
          height="350px"
        >
          <div style={{ padding: '20px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 1.8rem)', fontWeight: '900', color: '#333', margin: 0 }}>
              Job Statistics
            </h2>
            <p style={{ marginTop: '15px', color: '#666', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
              Track the salary package of the companies
            </p>
          </div>
        </GlareHover>

        {/* Card 3 - Resume Builder */}
        {/* <GlareHover
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
          width="clamp(250px, 90vw, 300px)"
          height="350px"
        >
          <div style={{ padding: '20px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 1.8rem)', fontWeight: '900', color: '#333', margin: 0 }}>
              Resume Builder
            </h2>
            <p style={{ marginTop: '15px', color: '#666', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
              Create professional resumes tailored to each job
            </p>
          </div>
        </GlareHover> */}

        {/* Card 4 - Interview Prep */}
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
          width="clamp(250px, 90vw, 300px)"
          height="350px"
        >
          <div style={{ padding: '20px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 1.8rem)', fontWeight: '900', color: '#333', margin: 0 }}>
              Interview Prep
            </h2>
            <p style={{ marginTop: '15px', color: '#666', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
              Practice questions and tips for your interviews
            </p>
          </div>
        </GlareHover>
      </div>
    </div>
  )
}

export default Features;