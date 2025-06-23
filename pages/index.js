
export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Bienvenue à bord du Minibus Bleu</h1>
      <p>Réservez votre trajet en toute simplicité et profitez d'un confort 15 places.</p>
      <img src="/minibus-highres.png" alt="Minibus Bleu" style={{ maxWidth: '60%', marginTop: '2rem' }} />
      <form action="https://formsubmit.co/leminibusbleu@gmail.com" method="POST" style={{ marginTop: '2rem' }}>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="/merci" />
        <input type="text" name="nom" placeholder="Nom" required style={{ padding: '0.5rem', marginBottom: '1rem' }} /><br/>
        <input type="submit" value="Réserver" style={{ padding: '0.5rem 1rem', background: '#0056A0', color: 'white', borderRadius: '4px', border: 'none' }} />
      </form>
    </div>
  );
}
