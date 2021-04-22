export const BREV_URL = "https://hyfc3f7n.brev.dev/api/Todo"

interface TodoType {
    id: string;
    title: string;
    isComplete: boolean;
}
interface MultipleToDos {
    todos: TodoType[];
}

const FetchTodos = async () => {
    let response = await fetch(BREV_URL);
    return response;
}

export const GetTodos = async () => {
    let response = await FetchTodos();
    return await response.json() as MultipleToDos;
}