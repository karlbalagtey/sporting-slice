import { useSelector } from 'react-redux';
import { selectQuotes } from 'redux/quote/selectors';

import { Quote } from '../Quote';
import { Card } from '../Card';

export function QuoteList() {
  const quotes = useSelector(selectQuotes);

  return (
    quotes && (
      <Card>
        {quotes.map(q => (
          <Quote {...q} />
        ))}
      </Card>
    )
  );
}
