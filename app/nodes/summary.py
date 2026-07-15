def summary_node(state):

    final = f"""
Final report of the given code:

Syntax:
{state['syntax_result']}

Explanation:
{state['explanation']}

Bugs:
{state['bugs']}

Complexity:
{state['complexity']}

Review:
{state['review']}

Suggestions:
{state['suggestions']}

Security:
{state['security_review']}

Fixed Code:
{state['fixed_code']}

Test Cases:
{state['test_cases']}
"""

    return {
        "summary": final
    }