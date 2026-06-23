from graph import graph

sample_code = """
def factorial(n):
    return n * factorial(n)
"""

result = graph.invoke({
    "code": sample_code
})

print(result["summary"])