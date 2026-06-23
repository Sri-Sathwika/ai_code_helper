from langgraph.graph import StateGraph, START, END

from state import CodeState

from nodes.explain import explain_node
from nodes.debug import debug_node
from nodes.complexity import complexity_node
from nodes.summary import summary_node
from nodes.language import detect_language_node
from nodes.suggestions import suggestions_node
from nodes.syntax import syntax_node
from nodes.review import review_node
from nodes.testcases import testcase_node

builder = StateGraph(CodeState)

# Register nodes
builder.add_node("explain", explain_node)
builder.add_node("debug", debug_node)
builder.add_node("complexity", complexity_node)
builder.add_node("summary", summary_node)
builder.add_node("language",detect_language_node)
builder.add_node("suggestions",suggestions_node)
builder.add_node("syntax", syntax_node)
builder.add_node("review", review_node)
builder.add_node("testcases", testcase_node)

builder.set_entry_point("syntax")
# Edges
builder.add_edge("syntax", "explain")
builder.add_edge("syntax", "debug")
builder.add_edge("syntax", "complexity")
builder.add_edge("syntax", "review")
builder.add_edge("syntax", "suggestions")
builder.add_edge("syntax", "test_cases")
builder.add_edge("syntax", "security")
builder.add_edge("syntax", "fix_code")

builder.add_edge("explain", "summary")
builder.add_edge("debug", "summary")
builder.add_edge("complexity", "summary")
builder.add_edge("review", "summary")
builder.add_edge("suggestions", "summary")
builder.add_edge("test_cases", "summary")
builder.add_edge("security", "summary")
builder.add_edge("fix_code", "summary")

builder.add_edge("summary", END)

graph = builder.compile()