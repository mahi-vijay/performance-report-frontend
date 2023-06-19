def special_sol(N, M, Edg):
    def dfs(u, graph, visited, special_edges):
        visited[u] = True
        for v in graph[u]:
            if not visited[v]:
                if (u, v) in special_edges or (v, u) in special_edges:
                    special_edges_count = special_edges + [(u, v)]
                else:
                    special_edges_count = special_edges
                dfs(v, graph, visited, special_edges_count)

    graph = [[] for _ in range(N + 1)]
    for u, v in Edg:
        graph[u].append(v)
        graph[v].append(u)

    count = 0
    for u in range(1, N + 1):
        visited = [False] * (N + 1)
        dfs(u, graph, visited, [])
        count += sum(visited) - 1

    return count // 2


T = int(input())
for _ in range(T):
    N = int(input())
    M = int(input())
    Edg = [list(map(int, input().split())) for _ in range(M)]
    out_ = special_sol(N, M, Edg)
    print(out_)
