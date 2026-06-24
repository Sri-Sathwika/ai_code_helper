import ast

class ComplexityVisitor(ast.NodeVisitor):

    def __init__(self):
        self.loops = 0

    def visit_For(self, node):
        self.loops += 1
        self.generic_visit(node)

    def visit_While(self, node):
        self.loops += 1
        self.generic_visit(node)