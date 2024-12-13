// Rate Limiting
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 100;

const requestCounts = new Map<string, { count: number; timestamp: number }>();

export const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const userRequests = requestCounts.get(ip);

  if (!userRequests || (now - userRequests.timestamp) > RATE_LIMIT_WINDOW) {
    requestCounts.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (userRequests.count >= MAX_REQUESTS) {
    return false;
  }

  userRequests.count++;
  return true;
};