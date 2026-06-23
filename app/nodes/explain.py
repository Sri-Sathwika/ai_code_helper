from llm import llm
def explain_node(state):

    code = state["code"]

    response = llm.invoke(
        f"""
        Explain this code.

        {code}

        Explain:
        - purpose
        - flow
        - key logic
        """
    )

    return {
        "explanation": response.content
    }