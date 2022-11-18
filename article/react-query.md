# 1. 평소 API 통신과 비동기 데이터 관리법

평소에 `redux`와 `redux-thunk`,`redux-saga` 를 통해서 api통신과 비동기 데이터를 관리해왔습니다.

이렇게 많은 관리법이 있는데 왜 `react-query`를 사용할까요?

- Redux의 단점
  - Redux를 사용하는데는 장황한 Boilerplate 코드가 요구된다.
    - 하나의 API통신을 처리하기 위해서 액션타입, 액션 생성 함수, 리듀서가 필요
    - Redux는 API통신과 비동기 상태 관리를 위한 라이브러리가 아니다.
    - 즉 **“서버 데이터를 다루는 것”**에는 적합하지 않다.

# 2. React-Query를 사용하는 이유

- `React-Query` 를 사용한다면 서버의 상태를 불러오고, 캐싱하며, 지속적으로 동기화하고 업데이트 하는 작업을 도와줍니다. 또한 React의 Hook를 사용해서 자연스럽게 데이터를 사용할 수 있습니다.
- `React-Query` 를 사용한다면 서버와 클라이언트 데이터를 분리할 수 있습니다.
  - `Client State`
    - 컴포넌트의 state, redux store의 데이터 등 클라이언트가 가지고 있는 데이터
  - `Server State`
    - 서버 DB에 있는 데이터, 클라이언트에 의해서 수정될 수 있다.
  - 서버와 클라이언트 데이터 분리가 뭘까요?
    - 평소 상태관리 라이브러리를 사용하게 되면 프로젝트 어디에서나 접근 가능한 state, 서버로부터 받아오는 state를 같이 저장하는 경우가 많습니다.
    - 이러한 경우에 서버에는 패치된 데이터가, 클라이언트에는 패치되기 전 데이터를 가지고 있는 상태가 될 수 있습니다.
    - 즉, 상태 관리 라이브러리에서 비동기 로직을 제거해서 관심사 분리를 할 수 있습니다.

# 3. React-Query의 장점

- 💥캐싱💥
- get을 한 데이터가 update가 되면 자동으로 다시 get
- 동일 데이터 여러번 호출 시 한번만 요청할 수 있게(invalidateQueries)
- 무한 스크롤 (Infinit Queries)
- react hook과 사용하는 구조가 비슷

### 💡여기서 캐싱이란?

> 서버에서 받아오려는 데이터가 캐시에서 최신이면, 브라우저가 알고 캐시 메모리에 있는 데이터를 사용하는 것

react-query는 기본적으로 캐싱된 데이터를 stale한 상태로 여긴다

stale한 상태가 되면 refetch가 된다.

> stale : 신성하지 않은 즉 낡은 데이터 즉 최신화가 필요한 데이터

## 4. React-Query를 사용해보자

---

1. 설치

```jsx
npm install react-query //npm
-------------------------------
yarn add react-query // yarn
```

1. 초기설정

   다른 redux, context API등에서의 사용방법과 같이 Provider를 통해 묶어준다.

```jsx
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>/*컴포넌트*/</QueryClientProvider>
  );
}
```

## 5. useQuery

---

데이터 Fetching용! 즉 CRUD에서 Reading을 할 때 사용한다.

```jsx
import { useQuery } from "react-query";

function App() {
  const info = useQuery("todos", fetchTodoList);
}
```

- `QueryKey` : unique key, 데이터 요청, 캐싱, 쿼리를 공유하기 위해 사용, **쿼리 키가 다르다면 캐싱을 별도로!**
- `QueryFunction` : Promise를 반환하는 함수 즉 데이터를 resolve하거나 error를 throw

[useQuery | TanStack Query Docs](https://tanstack.com/query/v4/docs/reference/useQuery?from=reactQueryV3&original=https://react-query-v3.tanstack.com/reference/useQuery)

### 여러 Options

엄청나게 많은 옵션이 있지만 시간상,,, 궁금하면 공식문서 참고!

- onSuccess, onError : query fetching이 성공/실패/완료 되었을 때 Side Effect를 정의 할 수 있다.
- enabled : useQuery를 mount되는 시점에 무조건 실행하게 되는데 enabled 옵션을 통해 조절 할 수 있다.
- retry : 동작 실패 시, 자동으로 retry 하는 옵션, (defaultValue : 3번)
- select : 성공 시 가져온 data를 가공해서 전달
- keepPreviousData : 새롭게 fetching 시 이전 데이터 유지 여부
- refetchInterval : 주기적으로 refetch 할지 결정
- staleTime : staleTime을 설정함으로써 refetch를 조절할 수 있다.(defaultValue : 0)
- cacheTime : cacheTime 동안 메모리에 데이터를 저장(defaultValue : 5분)

```jsx
function Todos() {
  const { isLoading, isError, data, error } = useQuery("todos", fetchTodoList, {
    cacheTime: 3000,
    staleTime: 3000,
    retry: 0,
    enabled: false,
    refetchInterval: 2000,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (data) => {
      console.log(data);
    },
    select: (data) => {
      return data.data.map((todo) => todo.content);
    },
  });

  //isLoading
  if (isLoading) {
    return <span>Loading...</span>;
  }

  //isError
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

### 그럼 뭘 반환해줄까?

엄청나게 많은 반환값들이 있지만 시간상,, 궁금하면 공식문서 참고!

- data : 서버에서 받아오는 data
- error : 요청이 실패했을 때 받아오는 data
- isFetching : 데이터 요청 중인 상태 (boolean)
- status, isLoading, isSuccess, isError…: 현재 쿼리의 상태
- refetch : 특정 이벤트에서 refetch
- remove : query cache에서 지우는 함수

boolean값으로 참조

```jsx
function Todos() {
  const { isLoading, isError, data, error } = useQuery("todos", fetchTodoList);

  //isLoading
  if (isLoading) {
    return <span>Loading...</span>;
  }

  //isError
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

status로 한번에 참조

```jsx
function Todos() {
  const { status, data, error } = useQuery("todos", fetchTodoList);

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

## 7. useQuery의 병렬처리

---

여려개의 query를 하고 싶다면?

```jsx
function App() {
  const usersQuery = useQuery("users", fetchUsers);
  const teamsQuery = useQuery("teams", fetchTeams);
  const projectQuery = useQuery("projects", fetchProjects);
}
```

```jsx
function App({ users }) {
  const userQueries = useQueries(
    user.map((user) => {
      return {
        queryKey: ["user", user.id],
        queryFunction: () => fetchUserById(user.id),
      };
    })
  );
}
```

## 8. useMutation

---

Mutation은 데이터 생성/수정/삭제용! 즉 CRUD 중 Create/Update/Delete에 사용

```jsx
const mutation = useMutation((newTodo) => {
  return axios.post("api주소", newTodo);
}, options);
```

- `QueryFunction` : Promise를 반환하는 함수
- `QueryKey` : 없어도 되지만 devtools에서 볼 수 있다.

### 여러 Options

useQuery와 상당부분 겹친다. 궁금하면 공식문서 참고!

### 그럼 뭘 반환해줄까?

또한 useQuery와 상당부분 겹친다. 궁금하면 공식문서 참고!

[useMutation | TanStack Query Docs](https://tanstack.com/query/v4/docs/reference/useMutation)

```jsx
import { useMutation } from "react-query";

const AddTodo = () => {
  const addTodoList = (todo) => {
    return axios.post("http://localhost:3000/todos", todo);
  };

  const {
    mutate: addTodo,
    isLoading,
    isError,
    error,
  } = useMutation(addTodoList);

  const handleAddTodoClick = () => {
    const todo = { 날짜, 할일 };
    addTodo(todo);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
};
```

1. mutate() 함수를 addTodo라는 네이밍으로 가져온다
2. **addTodoList의 todo값을 mutate 메서드를 통해 전달하는 것!**

mutation을 통해서 값이 변경된다. 즉 Sever State와 Client State의 값이 달라지게 된다.

[useMutation | TanStack Query Docs](https://tanstack.com/query/v4/docs/reference/useMutation)

## 9. Query Invalidation

---

mutation을 통해 값이 변경되었다면 data fetching을 해야겠죠..?

mutation이 실행 이후 동시에 refetch를 해준다면 을마나 편하게용?

```jsx
const {
  mutate: addTodo,
  isLoading,
  isError,
  error,
} = useMutation(addTodoList, {
  onSuccess: () => {
    // 캐시가 있는 모든 쿼리 무효화
    queryClient.invalidateQueries();
    // queryKey가 'to-dos'로 시작하는 모든 쿼리 무효화
    queryClient.invalidateQueries("to-dos");
  },
});
```

- `invalidateQueries` : mutation이 성공 이후 해당 쿼리가 stale 상태로 변경 되어 캐시 삭제 후 refetch

[Invalidation from Mutations | TanStack Query Docs](https://tanstack.com/query/v4/docs/guides/invalidations-from-mutations?from=reactQueryV3&original=https://react-query-v3.tanstack.com/guides/invalidations-from-mutations)

## 참고자료

---

[https://kyounghwan01.github.io/blog/React/react-query/basic/#api](https://kyounghwan01.github.io/blog/React/react-query/basic/#api)

[https://tech.kakaopay.com/post/react-query-1/](https://tech.kakaopay.com/post/react-query-1/)

[https://react-query-v3.tanstack.com/overview](https://react-query-v3.tanstack.com/overview)

[https://techblog.woowahan.com/6339/](https://techblog.woowahan.com/6339/)

[https://2ham-s.tistory.com/407](https://2ham-s.tistory.com/407)

[https://velog.io/@seohee0112/React-Query](https://velog.io/@seohee0112/React-Query)
