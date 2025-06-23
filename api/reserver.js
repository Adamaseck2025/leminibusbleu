export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const data = req.body;

  if (!data.nom || !data.email || !data.message) {
    return res.status(400).json({ error: "Champs requis manquants" });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": "Bearer re_TvMN6Bdk_3vrtFaDJyZRYTwwuLsUga9jD",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Le Minibus Bleu <reservations@leminibusbleu.com>",
        to: "leminibusbleu@gmail.com",
        subject: "Nouvelle réservation",
        html: `<p><strong>Nom:</strong> ${data.nom}</p>
               <p><strong>Email:</strong> ${data.email}</p>
               <p><strong>Message:</strong> ${data.message}</p>`
      })
    });

    if (!response.ok) throw new Error("Erreur lors de l'envoi");

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
}
