from llm import llm

def complexity_node(state):
    code=state['code']
    response = llm.invoke(
        f"""
        You are an expert code reviewer and algorithm analyst.

Analyze the time and space complexity of the code below.

Code:
```text
{code}
        """
    )

    return {
        "complexity": response.content
    }