import ast

def syntax_node(state):

    code = state["code"]

    try:
        ast.parse(code)

        return {
            "syntax_result": "No syntax errors found."
        }

    except SyntaxError as e:

        return {
            "syntax_result": f"Syntax Error: {str(e)}"
        }