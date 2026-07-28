interface SuggestionListProps {
  suggestions: string[];
}

export default function SuggestionList({
  suggestions,
}: SuggestionListProps) {

  return (
    <ul>
      {suggestions.map(
        suggestion => (
          <li key={suggestion}>
            {suggestion}
          </li>
        )
      )}
    </ul>
  );
}
