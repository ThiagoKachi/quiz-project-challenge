import React, { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext';

import { Loading } from '../../components/Loading';
import { Question } from '../../components/Question';

export function QuizPage() {
  const { loading } = useContext(AppContext);

  return loading ? <Loading /> : <Question />;
}
