import axios from 'axios';

export async function startQuiz(qtd) {
  const currencyResult = await axios.get(
    `https://opentdb.com/api.php?amount=${qtd}`
  );
  const { data } = currencyResult;
  return data.results;
}
