from llm import llm

def fix_code_node(state):

    response = llm.invoke(
        f"""
        Fix the following code.

        Code:
        {state['code']}

        Return:

        1. Issues Found
        2. Fixed Version
        3. Explanation
        """
    )

    return {
        "fixed_code": response.content
    }