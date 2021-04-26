# Build a deployed todo app

Clone this repo and `npm install` to install dependencies, then `npm run start` to run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Backend Built With Brev

Create a Brev account [here](https://app.brev.dev/alphasignup)

Either use the console, or setup the CLI:

`brew install brevdev/tap/brev`,
login with `brev login`,
then clone the default project `brev clone --name default`

In your default project, create a new endpoint and paste in the code below.

```python
import variables
import shared
from global_storage import storage_context
from pydantic import BaseModel
import uuid
from fastapi.responses import JSONResponse

def get(db=storage_context("todosWorkshop")):
  return {"todos": [v for i,v in db.items()]}


class ToDo(BaseModel):
  title: str
  isComplete: bool

def post(todo: ToDo, db=storage_context("todosWorkshop")):
  id = str(uuid.uuid4())
  db[id] = {**todo.dict(), "id": id}
  return {id}


def put(id, db=storage_context("todosWorkshop")):
  if id in db:
    obj = db[id]
    obj['isComplete'] = not obj['isComplete']
    db[id] = obj
    return {"updated": obj}
  else:
    JSONResponse(status_code=404, content={"error": "ToDo ID not found"})
```

