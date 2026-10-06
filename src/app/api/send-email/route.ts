export const runtime = 'edge';

export async function POST(request: Request) {
  const { to, subject, text, html } = await request.json();
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return Response.json({ sent: false, reason: 'BREVO_API_KEY is not configured' }, { status: 503 });
  }
  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': apiKey, 'content-type': 'application/json' },
    body: JSON.stringify({
      sender: { email: process.env.BREVO_FROM_EMAIL || 'noreply@cashcoin.pk' },
      to: [{ email: to }],
      subject,
      textContent: text,
      htmlContent: html,
    }),
  });
  if (!response.ok) return Response.json({ sent: false, reason: await response.text() }, { status: 502 });
  return Response.json({ sent: true });
}
