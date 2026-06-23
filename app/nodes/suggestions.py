from llm import llm

def suggestions_node(state):

    prompt = f"""
    Improve this code.

    Code:
    {state['code']}

    Suggest:
    - readability improvements
    - performance improvements
    - best practices
    """

    response = llm.invoke(prompt)

    return {
        "suggestions": response.content
    }