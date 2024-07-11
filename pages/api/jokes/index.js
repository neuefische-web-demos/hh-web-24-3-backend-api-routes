// was definieren wir hier? Stellver. für database
import { jokes } from '@/lib/data';

export default function handler(request, response) {
  // request.method - GET ✨
  // statusCode = 200 - o.k
  console.log('HTTP REQUEST URL --->', request.url);

  if (request.method === 'GET') {
    // demnächst die Jokes aus der echte Databse finden und holen.
    response.status(200).json(jokes);
    return;
  } else {
    response.status(405).json({ message: 'METHOD NOT ALLOWED' });
  }
}
