from llm import llm

def complexity_node(state):

    response = llm.invoke(
        f"""
        Analyze complexity.

        Code:
        {state['code']}

        Return:
        - Time Complexity
        - Space Complexity
        - Why
        """
    )

    return {
        "complexity": response.content
    }