export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, reason, message } = request.body || {};

  const botToken = process.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.VITE_TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return response.status(500).json({ error: 'Telegram credentials not configured' });
  }

  const escapeHtml = (text = "") => {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  };

  const textMessage = `📩 <b>New Contact Form Submission</b>\n\n👤 <b>Name:</b> ${escapeHtml(name)}\n📧 <b>Email:</b> ${escapeHtml(email)}\n🏷️ <b>Reason:</b> ${escapeHtml(reason)}\n💬 <b>Message:</b> ${escapeHtml(message)}`;

  try {
    const telegramRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: textMessage,
        parse_mode: 'HTML',
      }),
    });

    const data = await telegramRes.json();
    if (!telegramRes.ok) {
      return response.status(telegramRes.status).json({ error: data.description || 'Failed to send Telegram message' });
    }

    return response.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}
