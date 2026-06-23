from fastapi import FastAPI
from graph import graph
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

class CodeRequest(BaseModel):
    code:str

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://ai-code-helper-kappa.vercel.app/"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "AI Code Mentor Running"}

@app.post("/analyze")
def analyze(data: CodeRequest):

    result = graph.invoke({
        "code": data.code
    })

    return result