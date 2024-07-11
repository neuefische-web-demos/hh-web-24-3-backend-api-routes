import { jokes } from '@/lib/data';

export default function handler(request, response) {
  // einen bestimmten joke aus allen jokes finden und als response an deb client senden

  // query {: "1"}
  const { id } = request.query;

  const joke = jokes.find((joke) => joke.id === id);

  if (!joke) {
    response.status(404).json({ message: 'joke not found :(' });
  }

  if (request.method === 'GET') {
    // demnächst hier erhältlich: finde den einen Joke aus der DB.
    response.status(200).json(joke);
  } else {
    response.status(405).json({ message: 'METHOD NOT ALLOWED' });
  }
}
