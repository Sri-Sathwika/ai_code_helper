from llm import llm

def detect_language_node(state):

    prompt = f"""
    Detect programming language.

    Code:
    {state['code']}

    Return only language name.
    """

    response = llm.invoke(prompt)

    return {
        "language": response.content
    }