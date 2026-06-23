from llm import llm

def debug_node(state):

    response = llm.invoke(
        f"""
        Find bugs in this code.

        {state['code']}

        Mention:
        - logical errors
        - edge cases
        - runtime issues
        """
    )

    return {
        "bugs": response.content
    }