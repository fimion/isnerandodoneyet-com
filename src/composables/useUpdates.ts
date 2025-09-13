// src/composables/useUpdates.ts
import { ref, reactive } from 'vue'
import { UpdateRepository, JsonUpdateRepository } from '@/services/updateService'
import type { Update } from "../types";

interface UpdateState {
  loading: boolean
  error: string | null
}

export function useUpdates(repository: UpdateRepository = new JsonUpdateRepository()) {
  const updates = ref<Update[]>([])
  const state = reactive<UpdateState>({
    loading: false,
    error: null
  })

  const handleAsync = async <T>(operation: () => Promise<T>): Promise<T | null> => {
    state.loading = true
    state.error = null
    try {
      const result = await operation()
      return result
    } catch (error) {
      state.error = error instanceof Error ? error.message : 'An error occurred'
      return null
    } finally {
      state.loading = false
    }
  }

  const fetchAll = async () => {
    const result = await handleAsync(() => repository.getAll())
    if (result) updates.value = result
  }

  const fetchById = async (id: string) => {
    return await handleAsync(() => repository.getById(id))
  }

  const fetchByType = async (type: string) => {
    return await handleAsync(() => repository.getByType(type))
  }

  const search = async (query: string) => {
    return await handleAsync(() => repository.search(query))
  }

  return {
    updates: readonly(updates),
    loading: readonly(state.loading),
    error: readonly(state.error),
    fetchAll,
    fetchById,
    fetchByType,
    search
  }
}
