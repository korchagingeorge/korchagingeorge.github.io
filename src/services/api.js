const API_BASE = 'https://<ваш-serverless>.vercel.app';

export async function checkSubscription(userId) {
  const res = await fetch(`${API_BASE}/checkSub?user=${userId}`);
  return res.json();
}

export async function getReferrals(userId) {
  const res = await fetch(`${API_BASE}/referrals?user=${userId}`);
  return res.json();
}

export async function recordReferral(referrerId, newUser) {
  await fetch(`${API_BASE}/referral`, {
    method: 'POST',
    body: JSON.stringify({ referrerId, newUser })
  });
}
