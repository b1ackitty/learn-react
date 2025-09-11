import {
  type PropsWithChildren,
  createContext,
  useContext,
  useEffect,
} from 'react'
import { useImmerReducer } from 'use-immer'
import todoListReducer, {
  addAction,
  editAction,
  hiddenAction,
  init,
  removeAction,
  removeTodoListStorageData,
  searchAction,
  setTodoListStorageData,
  toggleAction,
} from './reducer'
import { Todo, type TodoListContextValue } from './types'

// 컨텍스트
const TodoListContext = createContext<null | TodoListContextValue>(null)

// 초기값
const initialState = {
  todos: [
    {
      id: 'todo-1',
      doit: '할 일을 추가해 주세요.',
      done: false,
    },
    {
      id: 'todo-2',
      doit: '두 번째 할 일을 추가해 주세요.',
      done: true,
    },
  ],
  search: '',
  hiddenDoneTodos: false,
}

// 프로바이더 래퍼 컴포넌트
export default function TodoListProvider({
  persist = false,
  children,
}: PropsWithChildren<{ persist?: boolean }>) {
  // 리듀서(Reducer)를 사용해 컨텍스트 상태 및 상태 업데이트 로직
  const [state, dispatch] = useImmerReducer(todoListReducer, initialState, init)

  // 컨텍스트 상태가 변경될 때마다 스토리지에 저장
  useEffect(() => {
    if (persist) {
      setTodoListStorageData(state)
    } else {
      removeTodoListStorageData()
    }
  }, [state, persist])

  // 컨텍스트를 사용해 컨텍스트 내부의 모든 컴포넌트에
  // 컨텍스트 값으로 공급

  const todoListStore: TodoListContextValue = {
    state,
    add: (newDoIt: Todo['doit']) => dispatch(addAction(newDoIt)),
    remove: (removeTodoId: Todo['id']) => dispatch(removeAction(removeTodoId)),
    toggle: (toggleTodoId: Todo['id']) => dispatch(toggleAction(toggleTodoId)),
    edit: (editTodoId: Todo['id'], newDoIt: Todo['doit']) =>
      dispatch(editAction(editTodoId, newDoIt)),
    search: (searchTerm: string) => dispatch(searchAction(searchTerm)),
    hidden: (hiddenDoneTodos: boolean) =>
      dispatch(hiddenAction(hiddenDoneTodos)),
  }

  return (
    <TodoListContext.Provider value={todoListStore}>
      {children}
    </TodoListContext.Provider>
  )
}

// 컨텍스트 내부에서 사용 가능한 커스텀 훅(컨텍스트 값 가져오기)
// eslint-disable-next-line react-refresh/only-export-components
export const useTodoList = () => {
  const todoListState = useContext(TodoListContext)

  if (!todoListState) {
    throw new Error(
      'useTodoList 훅은 TodoListProvider 내부에서 사용해야 합니다.'
    )
  }

  return todoListState
}
