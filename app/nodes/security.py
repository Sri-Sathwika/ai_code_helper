from llm import llm

def security_node(state):

    response = llm.invoke(
        f"""
        Perform a security review.

        Code:
        {state['code']}

        Check for:
        - SQL Injection
        - XSS
        - Command Injection
        - Hardcoded Secrets
        - Unsafe File Operations

        Return:
        Severity:
        Issue:
        Fix:
        """
    )

    return {
        "security_review": response.content
    }