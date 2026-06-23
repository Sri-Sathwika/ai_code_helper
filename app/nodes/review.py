from llm import llm


def review_node(state):

    response = llm.invoke(
        f"""
        Review this code.

        Give scores out of 10.

        1. Readability
        2. Maintainability
        3. Performance

        Also explain each score.

        Code:

        {state['code']}
        """
    )

    return {
        "review": response.content
    }