export interface AdvisorSuggestion {
  id: string;

  title: string;

  description: string;

  priority:
    | "low"
    | "medium"
    | "high";
}
