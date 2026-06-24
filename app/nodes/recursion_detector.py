import ast


class RecursionVisitor(ast.NodeVisitor):

    def __init__(self):
        self.function_name = None
        self.recursive = False

    def visit_FunctionDef(self, node):

        self.function_name = node.name

        self.generic_visit(node)

    def visit_Call(self, node):

        if (
            isinstance(node.func, ast.Name)
            and node.func.id == self.function_name
        ):
            self.recursive = True

        self.generic_visit(node)


def detect_recursion(code):

    try:

        tree = ast.parse(code)

        visitor = RecursionVisitor()

        visitor.visit(tree)

        return visitor.recursive

    except:
        return False