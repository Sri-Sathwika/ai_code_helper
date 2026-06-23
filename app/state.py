from typing import TypedDict

class GraphState(TypedDict):
    code: str

    syntax_result: str
    explanation: str
    bugs: str
    complexity: str
    review: str
    suggestions: str
    test_cases: str

    security_review: str
    fixed_code: str

    summary: str