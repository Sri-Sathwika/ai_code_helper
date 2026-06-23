from llm import llm

def testcase_node(state):

    response = llm.invoke(
        f"""
        Generate test cases.

        Code:
        {state['code']}

        Include:
        - normal cases
        - edge cases
        - stress cases

        Format clearly.
        """
    )

    return {
        "test_cases": response.content
    }